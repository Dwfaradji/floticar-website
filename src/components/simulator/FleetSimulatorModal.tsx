"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Car,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Minus,
  Plus,
  Printer,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  ADMIN_HOURS_PRESETS,
  FLEET_PROBLEMS,
  MAINTENANCE_PRESETS,
  MILEAGE_PRESETS,
  ORGANIZATION_OPTIONS,
} from "@/lib/roi/constants";
import type {
  FleetInputs,
  FleetProblemId,
  FullFleetSimulationResult,
} from "@/lib/roi/types";
import { trackSimulatorEvent } from "@/lib/roi/analytics";
import { checkEmailRules } from "@/lib/email-rules";
import FleetSimulatorHeader from "./FleetSimulatorHeader";
import FleetSimulatorFooter from "./FleetSimulatorFooter";
import SimulatorOptionCard from "./SimulatorOptionCard";
import FleetSimulatorPrintable from "./FleetSimulatorPrintable";

export type SimulatorScreenId =
  | "intro"
  | "step_vehicles"
  | "step_mileage"
  | "step_fuel"
  | "step_maintenance"
  | "step_admin_time"
  | "step_management"
  | "step_problems"
  | "summary"
  | "calculating"
  | "results"
  | "demo_form";

const STEP_ORDER: SimulatorScreenId[] = [
  "intro",
  "step_vehicles",
  "step_mileage",
  "step_fuel",
  "step_maintenance",
  "step_admin_time",
  "step_management",
  "step_problems",
  "summary",
  "calculating",
  "results",
];

interface FleetSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputs: FleetInputs;
  selectedProblems: FleetProblemId[];
  simulation: FullFleetSimulationResult;
  onInputsChange: (partial: Partial<FleetInputs>) => void;
  onProblemsChange: (problems: FleetProblemId[]) => void;
  onReset: () => void;
}

export default function FleetSimulatorModal({
  isOpen,
  onClose,
  inputs,
  selectedProblems,
  simulation,
  onInputsChange,
  onProblemsChange,
}: FleetSimulatorModalProps) {
  const [screen, setScreen] = useState<SimulatorScreenId>("intro");
  const [direction, setDirection] = useState<1 | -1>(1);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // États spécifiques aux saisies personnalisées dans les étapes
  const [customFuelInput, setCustomFuelInput] = useState<string>(
    inputs.annualFuelBudget ? String(inputs.annualFuelBudget) : ""
  );
  const [showCustomFuelField, setShowCustomFuelField] = useState(false);
  const [isAssumptionsOpen, setIsAssumptionsOpen] = useState(false);

  // Compteur animé sur l'écran de résultats
  const [displaySavings, setDisplaySavings] = useState(0);

  // Formulaire de demande de démo Floticar
  const [demoFirstName, setDemoFirstName] = useState("");
  const [demoLastName, setDemoLastName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoEmailError, setDemoEmailError] = useState<string | null>(null);
  const [demoFirstNameError, setDemoFirstNameError] = useState<string | null>(null);
  const [demoOrgError, setDemoOrgError] = useState<string | null>(null);
  const [demoConsentError, setDemoConsentError] = useState<string | null>(null);
  const [demoOrg, setDemoOrg] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoConsent, setDemoConsent] = useState(false);
  const [demoWebsite, setDemoWebsite] = useState("");
  const [isSendingDemo, setIsSendingDemo] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoError, setDemoError] = useState<string | null>(null);

  const handleRequestClose = React.useCallback(() => {
    if (
      screen !== "intro" &&
      screen !== "results" &&
      screen !== "demo_form" &&
      !showExitConfirm
    ) {
      setShowExitConfirm(true);
    } else {
      setShowExitConfirm(false);
      onClose();
    }
  }, [screen, showExitConfirm, onClose]);

  // Bloquer le scroll de la page arrière-plan quand la modal est ouverte
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Transition automatique depuis l'écran "calculating" vers "results"
  useEffect(() => {
    if (screen !== "calculating") return;
    const timer = setTimeout(() => {
      setDirection(1);
      setScreen("results");
      trackSimulatorEvent("simulator_completed", {
        vehicles: inputs.vehicles,
        annual_saving: simulation.annualGrossSaving,
        organization_type: inputs.organizationType,
      });
    }, 950);
    return () => clearTimeout(timer);
  }, [screen, inputs.vehicles, inputs.organizationType, simulation.annualGrossSaving]);

  // Animation progressive du chiffre principal d'économies sur l'écran "results"
  useEffect(() => {
    if (screen !== "results") return;
    const target = simulation.annualGrossSaving;
    const duration = 650;
    const steps = 25;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplaySavings(target);
        clearInterval(interval);
      } else {
        setDisplaySavings(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [screen, simulation.annualGrossSaving]);

  // Gestion de la touche Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleRequestClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleRequestClose]);

  if (!isOpen || typeof document === "undefined") return null;

  const totalStepsCount = 7;

  const getStepNumber = (): number => {
    switch (screen) {
      case "step_vehicles":
        return 1;
      case "step_mileage":
        return 2;
      case "step_fuel":
        return 3;
      case "step_maintenance":
        return 4;
      case "step_admin_time":
        return 5;
      case "step_management":
        return 6;
      case "step_problems":
        return 7;
      default:
        return 7;
    }
  };

  const currentStepNumber = getStepNumber();

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
    setScreen("intro");
    onClose();
  };

  const goToNext = () => {
    setDirection(1);
    setScreen((prev) => {
      if (prev === "intro") {
        trackSimulatorEvent("simulator_started", { vehicles: inputs.vehicles });
      } else if (prev.startsWith("step_")) {
        trackSimulatorEvent("simulator_step_completed", {
          step_name: prev,
          step_number: currentStepNumber,
        });
      }

      if (prev === "summary") {
        return "calculating";
      }
      const nextIdx = STEP_ORDER.indexOf(prev) + 1;
      if (nextIdx >= 0 && nextIdx < STEP_ORDER.length) {
        return STEP_ORDER[nextIdx];
      }
      return prev;
    });
  };

  const goToPrev = () => {
    setDirection(-1);
    setScreen((prev) => {
      if (prev === "demo_form") return "results";
      if (prev === "results") return "summary";
      const prevIdx = STEP_ORDER.indexOf(prev) - 1;
      if (prevIdx >= 0) {
        return STEP_ORDER[prevIdx];
      }
      return prev;
    });
  };

  // Auto-advance doux (180ms) sur les étapes à choix unique
  const handleSelectWithAutoAdvance = (callback: () => void) => {
    callback();
    setTimeout(() => {
      goToNext();
    }, 180);
  };

  const handlePrintPdf = () => {
    trackSimulatorEvent("simulator_cta_clicked", {
      cta_type: "export_pdf",
      vehicles: inputs.vehicles,
    });
    window.print();
  };

  const mapVehiclesToFleetSizeBucket = (v: number): string => {
    if (v <= 25) return "10-25";
    if (v <= 50) return "26-50";
    if (v <= 200) return "51-200";
    return "200+";
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoError(null);
    setDemoFirstNameError(null);
    setDemoOrgError(null);
    setDemoEmailError(null);
    setDemoConsentError(null);

    let hasValidationError = false;
    if (!demoFirstName.trim() || demoFirstName.trim().length < 2) {
      setDemoFirstNameError("Veuillez indiquer votre prénom (minimum 2 caractères).");
      hasValidationError = true;
    }

    if (!demoOrg.trim() || demoOrg.trim().length < 2) {
      setDemoOrgError("Veuillez indiquer le nom de votre entreprise ou structure.");
      hasValidationError = true;
    }

    const emailCheck = checkEmailRules(demoEmail);
    if (!demoEmail.trim()) {
      setDemoEmailError("L'adresse e-mail professionnelle est requise.");
      hasValidationError = true;
    } else if (!emailCheck.valid) {
      setDemoEmailError(emailCheck.reason || "Adresse e-mail professionnelle invalide.");
      hasValidationError = true;
    }

    if (!demoConsent) {
      setDemoConsentError("Veuillez accepter d'être recontacté(e) pour continuer.");
      hasValidationError = true;
    }

    if (hasValidationError) return;

    setIsSendingDemo(true);
    trackSimulatorEvent("simulator_cta_clicked", {
      cta_type: "submit_demo_request",
      vehicles: inputs.vehicles,
      annual_saving: simulation.annualGrossSaving,
    });

    try {
      const fullName = `${demoFirstName.trim()} ${demoLastName.trim()}`.trim();
      const summaryMessage = [
        `[Simulation Floticar — +${simulation.annualGrossSaving.toLocaleString("fr-FR")} € / an d'économies estimées]`,
        `• Parc : ${inputs.vehicles} véhicules (${Math.round(inputs.annualKmPerVehicle).toLocaleString("fr-FR")} km/an/véhicule)`,
        `• Organisation actuelle : ${inputs.organizationType} (${inputs.weeklyAdminHours}h admin/semaine)`,
        `• Coût annuel actuel estimé : ${simulation.currentCost.total.toLocaleString("fr-FR")} €`,
        `• Gain net annuel estimé : +${simulation.roi.annualNetGain.toLocaleString("fr-FR")} € (amorti en ~${simulation.roi.paybackMonths} mois)`,
        demoPhone.trim() ? `• Téléphone : ${demoPhone.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: demoEmail.trim(),
          company: demoOrg.trim(),
          fleetSize: mapVehiclesToFleetSizeBucket(inputs.vehicles),
          message: summaryMessage,
          website: demoWebsite,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.error || "Erreur lors de l'envoi de votre demande.");
      }

      setDemoSuccess(true);
    } catch (err: unknown) {
      setDemoError(
        err instanceof Error ? err.message : "Une erreur inattendue est survenue."
      );
    } finally {
      setIsSendingDemo(false);
    }
  };

  // Validation de l'étape courante
  const canGoNext = (() => {
    if (screen === "step_vehicles") return inputs.vehicles >= 1;
    if (screen === "step_mileage") return inputs.annualKmPerVehicle >= 1000;
    return true;
  })();

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 28 : -28,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -28 : 28,
      opacity: 0,
    }),
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-0 backdrop-blur-md sm:p-4 md:p-6 print:static print:bg-white print:p-0 print:backdrop-blur-none"
      role="dialog"
      aria-modal="true"
      aria-label="Simulateur d'économies de flotte Floticar"
    >
      {/* CONTENEUR PRINCIPAL DE LA MODAL (MASQUÉ À L'IMPRESSION) */}
      <div className="relative flex h-[100dvh] w-full max-w-4xl flex-col overflow-hidden border-white/10 bg-slate-950 text-white shadow-[0_25px_90px_rgba(0,0,0,0.85)] sm:h-auto sm:max-h-[92vh] sm:rounded-3xl sm:border print:hidden">
        {/* Lueurs subtiles */}
        <div className="pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />

        {/* HEADER FIXE */}
        {screen !== "intro" && screen !== "calculating" && (
          <FleetSimulatorHeader
            currentStepNumber={currentStepNumber}
            totalStepsCount={totalStepsCount}
            onCloseRequest={handleRequestClose}
          />
        )}

        {/* Bouton fermer discret sur l'écran d'intro */}
        {screen === "intro" && (
          <div className="absolute top-4 right-4 z-30">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le simulateur"
              className=" cursor-pointer rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              Fermer ✕
            </button>
          </div>
        )}

        {/* CORPS SCROLLABLE */}
        <div className="relative z-10 flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-10 sm:py-8">
          <AnimatePresence mode="wait" custom={direction}>
            {/* ÉCRAN 0 : INTRO */}
            {screen === "intro" && (
              <motion.div
                key="intro"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto max-w-2xl space-y-6 py-4 text-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-semibold text-cyan-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Simulateur Floticar • Édition 2026</span>
                </div>

                <h2 className="text-2xl leading-tight font-black text-white sm:text-4xl md:text-5xl">
                  Estimez combien votre flotte pourrait{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    économiser chaque année
                  </span>
                </h2>

                <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  En moins de 2 minutes, évaluez vos coûts cachés (temps administratif,
                  carburant, entretien, oublis de contrôle technique) et découvrez votre
                  potentiel réel d&apos;optimisation.
                </p>

                <div className="mx-auto grid max-w-lg grid-cols-3 gap-3 pt-2 text-left">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                    <div className="font-mono text-xs font-bold text-cyan-400">⏱ 2 min</div>
                    <div className="mt-0.5 text-[11px] text-slate-300">7 questions rapides</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                    <div className="font-mono text-xs font-bold text-emerald-400">100 % libre</div>
                    <div className="mt-0.5 text-[11px] text-slate-300">Sans e-mail obligatoire</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                    <div className="font-mono text-xs font-bold text-blue-400">3 scénarios</div>
                    <div className="mt-0.5 text-[11px] text-slate-300">Prudent à automatisé</div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={goToNext}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/35 sm:w-auto"
                  >
                    <span>Commencer la simulation</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 1 : NOMBRE DE VÉHICULES */}
            {screen === "step_vehicles" && (
              <motion.div
                key="step_vehicles"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-6 py-4"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    DIMENSIONNEMENT DU PARC
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Combien de véhicules gérez-vous ?
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Incluez les véhicules de service, utilitaires, minibus et véhicules partagés.
                  </p>
                </div>

                <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8">
                  <div className="flex items-center justify-center gap-4 sm:gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        const v = Math.max(1, inputs.vehicles - 1);
                        onInputsChange({
                          vehicles: v,
                          annualMaintenanceBudget: inputs.isMaintenanceCustom
                            ? inputs.annualMaintenanceBudget
                            : v * 450,
                        });
                      }}
                      disabled={inputs.vehicles <= 1}
                      aria-label="Diminuer le nombre de véhicules"
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-bold text-white transition-all hover:bg-white/10 disabled:opacity-30"
                    >
                      <Minus className="h-5 w-5" />
                    </button>

                    <div className="flex flex-col items-center">
                      <input
                        type="number"
                        min={1}
                        max={500}
                        aria-label="Nombre exact de véhicules"
                        value={inputs.vehicles}
                        onChange={(e) => {
                          const v = Math.max(1, Math.min(500, Number(e.target.value) || 1));
                          onInputsChange({
                            vehicles: v,
                            annualMaintenanceBudget: inputs.isMaintenanceCustom
                              ? inputs.annualMaintenanceBudget
                              : v * 450,
                          });
                        }}
                        className="w-28 rounded-xl border border-cyan-500/40 bg-slate-950 px-3 py-2 text-center font-mono text-3xl font-black text-cyan-400 focus:border-cyan-400 focus:outline-none sm:text-4xl"
                      />
                      <span className="mt-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                        {inputs.vehicles > 1 ? "Véhicules gérés" : "Véhicule géré"}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const v = Math.min(500, inputs.vehicles + 1);
                        onInputsChange({
                          vehicles: v,
                          annualMaintenanceBudget: inputs.isMaintenanceCustom
                            ? inputs.annualMaintenanceBudget
                            : v * 450,
                        });
                      }}
                      aria-label="Augmenter le nombre de véhicules"
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-500/20 text-lg font-bold text-cyan-300 transition-all hover:bg-cyan-500/30"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>

                  <input
                    type="range"
                    min={1}
                    max={150}
                    step={1}
                    aria-label="Curseur du nombre de véhicules"
                    value={Math.min(150, inputs.vehicles)}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      onInputsChange({
                        vehicles: v,
                        annualMaintenanceBudget: inputs.isMaintenanceCustom
                          ? inputs.annualMaintenanceBudget
                          : v * 450,
                      });
                    }}
                    className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-cyan-400"
                  />

                  <div className="space-y-2">
                    <span className="block text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      Sélection rapide :
                    </span>
                    <div className="grid grid-cols-5 gap-2">
                      {[5, 10, 20, 50, 100].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() =>
                            onInputsChange({
                              vehicles: preset,
                              annualMaintenanceBudget: inputs.isMaintenanceCustom
                                ? inputs.annualMaintenanceBudget
                                : preset * 450,
                            })
                          }
                          className={`cursor-pointer rounded-xl border py-2.5 font-mono text-xs font-bold transition-all ${
                            inputs.vehicles === preset
                              ? "border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          {preset === 100 ? "100+" : preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 2 : KILOMÉTRAGE ANNUEL */}
            {screen === "step_mileage" && (
              <motion.div
                key="step_mileage"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-5 py-2"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    USAGE DU PARC
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Quel est le kilométrage annuel moyen par véhicule ?
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Choisissez la tranche qui correspond le mieux à vos tournées habituelles.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {MILEAGE_PRESETS.map((preset) => (
                    <SimulatorOptionCard
                      key={preset.id}
                      label={preset.label}
                      description={preset.hint}
                      badge={"recommended" in preset && preset.recommended ? "Moyenne secteur" : undefined}
                      selected={inputs.annualKmPerVehicle === preset.value}
                      onClick={() =>
                        handleSelectWithAutoAdvance(() =>
                          onInputsChange({ annualKmPerVehicle: preset.value })
                        )
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 3 : CARBURANT */}
            {screen === "step_fuel" && (
              <motion.div
                key="step_fuel"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-5 py-2"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    POSTE CARBURANT / ÉNERGIE
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Quel est votre budget carburant annuel ?
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Si vous ne l&apos;avez pas en tête, laissez le simulateur l&apos;estimer automatiquement.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <SimulatorOptionCard
                    label="Je préfère une estimation automatique"
                    description={`Calculé automatiquement selon vos ${inputs.vehicles} véhicules et ${inputs.annualKmPerVehicle.toLocaleString("fr-FR")} km/an (~${Math.round(
                      inputs.vehicles *
                        (inputs.annualKmPerVehicle / 100) *
                        inputs.averageConsumption *
                        inputs.fuelPrice
                    ).toLocaleString("fr-FR")} € / an).`}
                    badge="Estimation auto"
                    selected={inputs.fuelCalculationMode === "estimated"}
                    onClick={() => {
                      setShowCustomFuelField(false);
                      handleSelectWithAutoAdvance(() =>
                        onInputsChange({
                          fuelCalculationMode: "estimated",
                          annualFuelBudget: undefined,
                        })
                      );
                    }}
                  />

                  {[
                    { id: "fuel_10k", label: "Moins de 15 000 € / an", value: 10000 },
                    { id: "fuel_25k", label: "Entre 15 000 € et 35 000 € / an", value: 25000 },
                    { id: "fuel_50k", label: "Entre 35 000 € et 70 000 € / an", value: 50000 },
                  ].map((preset) => (
                    <SimulatorOptionCard
                      key={preset.id}
                      label={preset.label}
                      selected={
                        inputs.fuelCalculationMode === "known" &&
                        !showCustomFuelField &&
                        inputs.annualFuelBudget === preset.value
                      }
                      onClick={() => {
                        setShowCustomFuelField(false);
                        handleSelectWithAutoAdvance(() =>
                          onInputsChange({
                            fuelCalculationMode: "known",
                            annualFuelBudget: preset.value,
                          })
                        );
                      }}
                    />
                  ))}

                  <SimulatorOptionCard
                    label="Saisir mon budget exact"
                    description="Indiquez votre montant annuel précis en euros."
                    selected={showCustomFuelField}
                    onClick={() => {
                      setShowCustomFuelField(true);
                      const numericVal = Number(customFuelInput) || 20000;
                      onInputsChange({
                        fuelCalculationMode: "known",
                        annualFuelBudget: numericVal,
                      });
                    }}
                  />

                  {showCustomFuelField && (
                    <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/40 bg-slate-900 p-4">
                      <input
                        type="number"
                        min={500}
                        max={2000000}
                        step={500}
                        placeholder="Ex: 32000"
                        value={customFuelInput}
                        onChange={(e) => {
                          setCustomFuelInput(e.target.value);
                          onInputsChange({
                            fuelCalculationMode: "known",
                            annualFuelBudget: Math.max(0, Number(e.target.value) || 0),
                          });
                        }}
                        className="flex-1 rounded-xl border border-white/15 bg-black/50 px-4 py-2.5 font-mono text-base font-bold text-white focus:border-cyan-400 focus:outline-none"
                      />
                      <span className="text-sm font-semibold text-slate-300">€ / an</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 4 : ENTRETIEN & MAINTENANCE */}
            {screen === "step_maintenance" && (
              <motion.div
                key="step_maintenance"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-5 py-2"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    MAINTENANCE &amp; RÉPARATIONS
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Combien dépensez-vous environ en entretien par an ?
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Révisions, vidanges, pneumatiques, réparations et contrôles techniques.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <SimulatorOptionCard
                    label="Je ne sais pas exactement"
                    description={`Calculer automatiquement sur la base de 450 € / véhicule / an (~${(
                      inputs.vehicles * 450
                    ).toLocaleString("fr-FR")} € / an pour ${inputs.vehicles} véhicules).`}
                    badge="Estimation auto"
                    selected={!inputs.isMaintenanceCustom}
                    onClick={() =>
                      handleSelectWithAutoAdvance(() =>
                        onInputsChange({
                          annualMaintenanceBudget: inputs.vehicles * 450,
                          isMaintenanceCustom: false,
                        })
                      )
                    }
                  />

                  {MAINTENANCE_PRESETS.map((preset) => {
                    const isSelected =
                      Boolean(inputs.isMaintenanceCustom) &&
                      inputs.annualMaintenanceBudget === preset.value;
                    return (
                      <SimulatorOptionCard
                        key={preset.id}
                        label={preset.label}
                        description={preset.hint}
                        selected={isSelected}
                        onClick={() =>
                          handleSelectWithAutoAdvance(() =>
                            onInputsChange({
                              annualMaintenanceBudget: preset.value,
                              isMaintenanceCustom: true,
                            })
                          )
                        }
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 5 : TEMPS ADMINISTRATIF */}
            {screen === "step_admin_time" && (
              <motion.div
                key="step_admin_time"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-6 py-4"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    TEMPS &amp; PROCESSUS
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Combien de temps consacrez-vous chaque semaine au suivi de flotte ?
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Relevé des kilomètres, vérification des carnets, contrôles techniques, factures carburant, relances conducteurs...
                  </p>
                </div>

                <div className="space-y-2.5">
                  {ADMIN_HOURS_PRESETS.map((preset) => {
                    const isSelected = inputs.weeklyAdminHours === preset.hours;
                    return (
                      <SimulatorOptionCard
                        key={preset.id}
                        label={preset.label}
                        description={preset.hint}
                        selected={isSelected}
                        onClick={() =>
                          handleSelectWithAutoAdvance(() =>
                            onInputsChange({ weeklyAdminHours: preset.hours })
                          )
                        }
                      />
                    );
                  })}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-[11px] text-slate-400">
                  Temps valorisé sur une hypothèse de salaire chargé de {inputs.hourlyCost} € / heure.
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 6 : GESTION ACTUELLE */}
            {screen === "step_management" && (
              <motion.div
                key="step_management"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-6 py-4"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    ORGANISATION ACTUELLE
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Comment gérez-vous actuellement votre flotte ?
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Cette donnée permet de mesurer précisément l&apos;écart avec une gestion centralisée.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {ORGANIZATION_OPTIONS.map((opt) => {
                    const isSelected = inputs.organizationType === opt.value;
                    return (
                      <SimulatorOptionCard
                        key={opt.value}
                        label={opt.label}
                        description={opt.hint}
                        badge={opt.badge}
                        selected={isSelected}
                        onClick={() =>
                          handleSelectWithAutoAdvance(() =>
                            onInputsChange({ organizationType: opt.value })
                          )
                        }
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 7 : PROBLÈMES RENCONTRÉS (CHOIX MULTIPLE) */}
            {screen === "step_problems" && (
              <motion.div
                key="step_problems"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-2xl space-y-6 py-4"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    DIFFICULTÉS DU TERRAIN
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Quels sont vos principaux problèmes aujourd&apos;hui ?
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Sélectionnez jusqu&apos;à 3 à 5 difficultés récurrentes (facultatif).
                  </p>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  {FLEET_PROBLEMS.map((prob) => {
                    const isSelected = selectedProblems.includes(prob.id);
                    return (
                      <SimulatorOptionCard
                        key={prob.id}
                        label={prob.label}
                        description={prob.description}
                        selected={isSelected}
                        isMultiSelect
                        onClick={() => {
                          if (prob.id === "none") {
                            onProblemsChange(["none"]);
                          } else {
                            const withoutNone = selectedProblems.filter((p) => p !== "none");
                            if (isSelected) {
                              onProblemsChange(withoutNone.filter((p) => p !== prob.id));
                            } else if (withoutNone.length < 5) {
                              onProblemsChange([...withoutNone, prob.id]);
                            }
                          }
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* RÉCAPITULATIF : VÉRIFIEZ VOTRE SIMULATION */}
            {screen === "summary" && (
              <motion.div
                key="summary"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-6 py-4"
              >
                <div className="space-y-2 text-center">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    VÉRIFICATION
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-3xl">
                    Vérifiez votre simulation
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Vous pouvez modifier chaque paramètre avant de générer votre estimation.
                  </p>
                </div>

                <div className="space-y-3.5 divide-y divide-white/5 rounded-3xl border border-white/10 bg-slate-900/80 p-4 sm:p-6">
                  {/* Ligne 1 : Véhicules */}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <div>
                      <span className="block text-xs text-slate-400">Flotte gérée</span>
                      <span className="text-sm font-bold text-white">
                        {inputs.vehicles} véhicule{inputs.vehicles > 1 ? "s" : ""}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen("step_vehicles")}
                      className="cursor-pointer text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 2 : Kilomètres */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="block text-xs text-slate-400">Kilométrage annuel</span>
                      <span className="text-sm font-bold text-white">
                        {Math.round(inputs.annualKmPerVehicle).toLocaleString("fr-FR")} km / vhc / an
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen("step_mileage")}
                      className="cursor-pointer text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 3 : Carburant */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="block text-xs text-slate-400">Budget carburant</span>
                      <span className="text-sm font-bold text-white">
                        {simulation.isFuelEstimated
                          ? `~${simulation.currentCost.fuel.toLocaleString("fr-FR")} € (estimé)`
                          : `${(inputs.annualFuelBudget ?? 0).toLocaleString("fr-FR")} € (déclaré)`}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen("step_fuel")}
                      className="cursor-pointer text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 4 : Entretien */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="block text-xs text-slate-400">Entretien &amp; réparations</span>
                      <span className="text-sm font-bold text-white">
                        {simulation.isMaintenanceEstimated
                          ? `~${simulation.currentCost.maintenance.toLocaleString("fr-FR")} € (estimé)`
                          : `${inputs.annualMaintenanceBudget.toLocaleString("fr-FR")} € (déclaré)`}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen("step_maintenance")}
                      className="cursor-pointer text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 5 : Temps administratif */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="block text-xs text-slate-400">Suivi administratif</span>
                      <span className="text-sm font-bold text-white">
                        {inputs.weeklyAdminHours} h / semaine
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen("step_admin_time")}
                      className="cursor-pointer text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 6 : Organisation */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="block text-xs text-slate-400">Gestion actuelle</span>
                      <span className="text-sm font-bold text-white">
                        {ORGANIZATION_OPTIONS.find((o) => o.value === inputs.organizationType)?.label}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen("step_management")}
                      className="cursor-pointer text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Modifier
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={goToNext}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.01] hover:shadow-cyan-500/30"
                  >
                    <span>Lancer le calcul économique</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ÉCRAN DE CALCUL INTERMÉDIAIRE (950ms) */}
            {screen === "calculating" && (
              <motion.div
                key="calculating"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mx-auto my-auto max-w-md space-y-6 py-12 text-center"
              >
                <div className="relative mx-auto h-20 w-20">
                  <div className="absolute inset-0 animate-ping rounded-full border-4 border-cyan-500/20" />
                  <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-cyan-400 border-t-transparent">
                    <Car className="h-8 w-8 animate-pulse text-cyan-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    Analyse de votre flotte...
                  </h3>
                  <p className="mx-auto max-w-sm text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Nous comparons votre situation actuelle avec nos modélisations d&apos;optimisation sectorielles.
                  </p>
                </div>

                <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Modélisation des coûts d&apos;exploitation et carburant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Calcul du temps administratif valorisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Projection du retour sur investissement Floticar</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ÉCRAN DES RÉSULTATS */}
            {screen === "results" && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto w-full max-w-4xl space-y-8 py-4"
              >
                {/* 1. HERO DES GAINS POTENTIELS */}
                <div className="relative space-y-4 overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-slate-900 p-6 text-center shadow-2xl sm:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Simulation économique personnalisée</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-200 sm:text-xl">
                    Votre potentiel d&apos;économies estimé
                  </h3>

                  <div className="space-y-1">
                    <div className="font-mono text-4xl font-black tracking-tight text-white sm:text-7xl">
                      +{displaySavings.toLocaleString("fr-FR")} €
                    </div>
                    <div className="text-sm font-semibold text-cyan-300 sm:text-base">
                      par an (≈ {simulation.monthlyGrossSaving.toLocaleString("fr-FR")} € / mois)
                    </div>
                  </div>

                  <p className="mx-auto max-w-lg text-xs text-slate-400">
                    Estimation basée sur {inputs.vehicles} véhicules et les hypothèses réalistes du simulateur. Soit environ {simulation.savingPerVehicle.toLocaleString("fr-FR")} € d&apos;économies brutes par véhicule et par an.
                  </p>

                  {/* Indice de confiance */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-xs">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        simulation.confidence === "high"
                          ? "bg-emerald-400"
                          : simulation.confidence === "medium"
                          ? "bg-amber-400"
                          : "bg-cyan-400"
                      }`}
                    />
                    <span className="font-medium text-slate-300">
                      Indice de confiance :{" "}
                      {simulation.confidence === "high"
                        ? "🟢 Précis (budgets réels)"
                        : simulation.confidence === "medium"
                        ? "🟠 Modéré (semi-estimé)"
                        : "🔵 Indicatif (moyennes secteur)"}
                    </span>
                  </div>
                </div>

                {/* 2. SYNTHÈSE NARRATIVE SUR-MESURE */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-xs leading-relaxed text-slate-300 italic sm:text-sm">
                  « {simulation.personalizedNarrative} »
                </div>

                {/* 3. COMPARAISON DES 3 SCÉNARIOS (GRAPHIQUE / CARTES) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white sm:text-lg">
                      Comparaison des niveaux de gestion
                    </h4>
                    <span className="text-xs text-slate-400">Coûts annuels comparés</span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {/* Scénario 1 : Actuel */}
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold text-slate-300 uppercase">
                          {simulation.scenarios.current.title}
                        </span>
                      </div>
                      <div className="font-mono text-2xl font-black text-white">
                        {simulation.scenarios.current.cost.toLocaleString("fr-FR")} €
                      </div>
                      <p className="text-[11px] leading-snug text-slate-400">
                        Coût estimé actuel avec votre organisation actuelle.
                      </p>
                    </div>

                    {/* Scénario 2 : Optimisé (Recommandé) */}
                    <div className="relative space-y-2 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-4 shadow-lg">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold text-cyan-300 uppercase">
                          {simulation.scenarios.optimized.title}
                        </span>
                        <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                          Recommandé
                        </span>
                      </div>
                      <div className="font-mono text-2xl font-black text-white">
                        {simulation.scenarios.optimized.cost.toLocaleString("fr-FR")} €
                      </div>
                      <div className="text-xs font-bold text-emerald-400">
                        Économie : +{simulation.scenarios.optimized.saving.toLocaleString("fr-FR")} € / an
                      </div>
                      <p className="text-[11px] leading-snug text-slate-400">
                        Adoption standard des processus digitaux Floticar.
                      </p>
                    </div>

                    {/* Scénario 3 : Automatisé */}
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold text-slate-300 uppercase">
                          {simulation.scenarios.automated.title}
                        </span>
                      </div>
                      <div className="font-mono text-2xl font-black text-white">
                        {simulation.scenarios.automated.cost.toLocaleString("fr-FR")} €
                      </div>
                      <div className="text-xs font-bold text-emerald-400">
                        Potentiel : +{simulation.scenarios.automated.saving.toLocaleString("fr-FR")} € / an
                      </div>
                      <p className="text-[11px] leading-snug text-slate-400">
                        Déploiement maximal avec automatisation complète.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. D'OÙ VIENNENT VOS ÉCONOMIES (DÉCOMPOSITION) */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-white sm:text-lg">
                    D&apos;où proviennent vos économies ?
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase">
                        Temps administratif
                      </span>
                      <div className="font-mono text-xl font-black text-cyan-400">
                        +{simulation.breakdown.admin.toLocaleString("fr-FR")} €
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Saisie mobile QR code et carnets papier supprimés.
                      </p>
                    </div>

                    <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase">
                        Carburant
                      </span>
                      <div className="font-mono text-xl font-black text-cyan-400">
                        +{simulation.breakdown.fuel.toLocaleString("fr-FR")} €
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Contrôle des dérives et suivi régulier des tournées.
                      </p>
                    </div>

                    <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase">
                        Entretien
                      </span>
                      <div className="font-mono text-xl font-black text-cyan-400">
                        +{simulation.breakdown.maintenance.toLocaleString("fr-FR")} €
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Respect des vidanges et anticipation des réparations.
                      </p>
                    </div>

                    <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase">
                        Pertes &amp; Oublis
                      </span>
                      <div className="font-mono text-xl font-black text-cyan-400">
                        +{simulation.breakdown.incidentsAndLosses.toLocaleString("fr-FR")} €
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Alertes contrôles techniques et moins d&apos;immobilisations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. RETOUR SUR INVESTISSEMENT FLOTICAR (ROI) */}
                <div className="space-y-4 rounded-3xl border border-cyan-500/30 bg-slate-900/90 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-white sm:text-lg">
                        Votre retour sur investissement potentiel
                      </h4>
                      <p className="text-xs text-slate-400">
                        Calculé sur la tarification de référence Floticar (15 € HT / véhicule / mois).
                      </p>
                    </div>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3 py-1 font-mono text-xs font-bold text-cyan-300">
                      Amorti en ~{simulation.roi.paybackMonths} mois
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-center sm:grid-cols-4 sm:gap-3">
                    <div className="rounded-2xl border border-white/5 bg-black/40 p-2.5 sm:p-3">
                      <span className="mb-0.5 block text-[10px] text-slate-400 sm:text-[11px]">
                        Investissement logiciel
                      </span>
                      <span className="font-mono text-xs font-bold break-words text-white sm:text-base md:text-lg">
                        {simulation.roi.annualSoftwareCost.toLocaleString("fr-FR")} € / an
                      </span>
                      <span className="block text-[9px] text-slate-500 sm:text-[10px]">
                        ({simulation.roi.monthlySoftwareCost} €/mois)
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-black/40 p-2.5 sm:p-3">
                      <span className="mb-0.5 block text-[10px] text-slate-400 sm:text-[11px]">
                        Économies brutes
                      </span>
                      <span className="font-mono text-xs font-bold break-words text-white sm:text-base md:text-lg">
                        +{simulation.annualGrossSaving.toLocaleString("fr-FR")} €
                      </span>
                      <span className="block text-[9px] text-slate-500 sm:text-[10px]">
                        estimées / an
                      </span>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 sm:p-3">
                      <span className="mb-0.5 block text-[10px] text-emerald-300 sm:text-[11px]">
                        Gain net potentiel
                      </span>
                      <span className="font-mono text-xs font-bold break-words text-emerald-400 sm:text-base md:text-lg">
                        +{simulation.roi.annualNetGain.toLocaleString("fr-FR")} €
                      </span>
                      <span className="block text-[9px] text-emerald-300/80 sm:text-[10px]">
                        après coût logiciel
                      </span>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 sm:p-3">
                      <span className="mb-0.5 block text-[10px] text-cyan-300 sm:text-[11px]">
                        ROI estimé
                      </span>
                      <span className="font-mono text-xs font-bold break-words text-cyan-400 sm:text-base md:text-lg">
                        +{simulation.roi.roiPercent} %
                      </span>
                      <span className="block text-[9px] text-cyan-300/80 sm:text-[10px]">
                        sur 12 mois
                      </span>
                    </div>
                  </div>
                </div>

                {/* 6. TOP 3 PRIORITÉS D'ACTION */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-white sm:text-lg">
                    Les leviers qui pourraient avoir le plus d&apos;impact
                  </h4>
                  <div className="space-y-2.5">
                    {simulation.priorities.map((item) => (
                      <div
                        key={item.number}
                        className="space-y-1.5 rounded-2xl border border-white/10 bg-slate-900 p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 font-mono text-xs font-bold text-cyan-300">
                              {item.number}
                            </span>
                            <span className="text-sm font-bold text-white">{item.title}</span>
                          </div>
                          <span className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300">
                            Impact {item.impact} • {item.horizon}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
                        <p className="text-xs font-medium text-cyan-200">
                          <strong>Action conseillée :</strong> {item.action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. TRANSPARENCE DES HYPOTHÈSES (ACCORDÉON) */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <button
                    type="button"
                    onClick={() => setIsAssumptionsOpen(!isAssumptionsOpen)}
                    className="flex w-full cursor-pointer items-center justify-between p-4 text-left text-xs font-bold text-slate-300 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-cyan-400" />
                      <span>Comment cette estimation est-elle calculée ? (Transparence des hypothèses)</span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform ${
                        isAssumptionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isAssumptionsOpen && (
                    <div className="space-y-3 divide-y divide-white/5 border-t border-white/5 p-4 pt-0 text-xs text-slate-300">
                      {simulation.assumptions.map((ass) => (
                        <div key={ass.id} className="pt-2.5 first:pt-0">
                          <div className="mb-0.5 flex items-center justify-between">
                            <strong className="text-white">{ass.label}</strong>
                            <span className="font-mono font-semibold text-cyan-400">{ass.value}</span>
                          </div>
                          <p className="text-[11px] text-slate-400">{ass.description}</p>
                          <span className="mt-0.5 block text-[10px] text-slate-500 italic">
                            Source : {ass.source}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 8. ACTIONS ET CTA FINAL */}
                <div className="flex flex-col items-center justify-between gap-3 pt-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setScreen("summary")}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Modifier mes données</span>
                  </button>

                  <div className="flex w-full items-center gap-2.5 sm:w-auto">
                    <button
                      type="button"
                      onClick={handlePrintPdf}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white hover:bg-white/10 sm:flex-none"
                    >
                      <Printer className="h-4 w-4 text-cyan-400" />
                      <span>Exporter en PDF</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        trackSimulatorEvent("simulator_cta_clicked", {
                          cta_type: "open_demo_form",
                          vehicles: inputs.vehicles,
                        });
                        setScreen("demo_form");
                      }}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/35 sm:flex-none"
                    >
                      <span>Demander une démo 14 jours</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FORMULAIRE DÉMO ET RAPPORT (SLIDE INTERNE DANS LA MODAL) */}
            {screen === "demo_form" && (
              <motion.div
                key="demo_form"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mx-auto my-auto w-full max-w-xl space-y-6 py-4"
              >
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setScreen("results")}
                    className="cursor-pointer text-xs text-slate-400 hover:text-white"
                  >
                    ← Revenir aux résultats
                  </button>
                  <span className="font-mono text-xs text-cyan-400">
                    Gain estimé : +{simulation.annualGrossSaving.toLocaleString("fr-FR")} € / an
                  </span>
                </div>

                <div className="space-y-2 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/15 text-cyan-400">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    Testez Floticar gratuitement pendant 14 jours
                  </h3>
                  <p className="mx-auto max-w-md text-xs text-slate-400 sm:text-sm">
                    Recevez une démonstration personnalisée basée sur vos {inputs.vehicles} véhicules et votre potentiel d&apos;économies de {simulation.annualGrossSaving.toLocaleString("fr-FR")} € / an.
                  </p>
                </div>

                {demoSuccess ? (
                  <div className="space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
                    <h4 className="text-lg font-bold text-white">Demande bien reçue !</h4>
                    <p className="text-xs leading-relaxed text-emerald-200/90">
                      Un expert Floticar vous recontactera sous 24h ouvrées pour vous ouvrir votre espace de test 14 jours sans aucun engagement.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handlePrintPdf}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15"
                      >
                        <Printer className="h-4 w-4" />
                        <span>Télécharger mon rapport PDF</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleDemoSubmit} noValidate className="space-y-4 text-left">
                    {demoError && (
                      <div
                        role="alert"
                        className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-300"
                      >
                        {demoError}
                      </div>
                    )}

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="sim-demo-firstname"
                          className="mb-1 block text-xs font-semibold text-slate-300"
                        >
                          Prénom *
                        </label>
                        <input
                          id="sim-demo-firstname"
                          type="text"
                          required
                          aria-invalid={Boolean(demoFirstNameError)}
                          value={demoFirstName}
                          onChange={(e) => {
                            setDemoFirstName(e.target.value);
                            if (demoFirstNameError) setDemoFirstNameError(null);
                          }}
                          placeholder="Jean"
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                        />
                        {demoFirstNameError && (
                          <span role="alert" className="mt-1 block text-xs text-red-400">
                            {demoFirstNameError}
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="sim-demo-lastname"
                          className="mb-1 block text-xs font-semibold text-slate-300"
                        >
                          Nom
                        </label>
                        <input
                          id="sim-demo-lastname"
                          type="text"
                          value={demoLastName}
                          onChange={(e) => setDemoLastName(e.target.value)}
                          placeholder="Dupont"
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="sim-demo-org"
                          className="mb-1 block text-xs font-semibold text-slate-300"
                        >
                          Entreprise / Structure *
                        </label>
                        <input
                          id="sim-demo-org"
                          type="text"
                          required
                          aria-invalid={Boolean(demoOrgError)}
                          value={demoOrg}
                          onChange={(e) => {
                            setDemoOrg(e.target.value);
                            if (demoOrgError) setDemoOrgError(null);
                          }}
                          placeholder="PME / Association / IME / SESSAD"
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                        />
                        {demoOrgError && (
                          <span role="alert" className="mt-1 block text-xs text-red-400">
                            {demoOrgError}
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="sim-demo-phone"
                          className="mb-1 block text-xs font-semibold text-slate-300"
                        >
                          Téléphone
                        </label>
                        <input
                          id="sim-demo-phone"
                          type="tel"
                          value={demoPhone}
                          onChange={(e) => setDemoPhone(e.target.value)}
                          placeholder="06 XX XX XX XX"
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="sim-demo-email"
                        className="mb-1 block text-xs font-semibold text-slate-300"
                      >
                        Email professionnel *
                      </label>
                      <input
                        id="sim-demo-email"
                        type="email"
                        inputMode="email"
                        required
                        aria-invalid={Boolean(demoEmailError)}
                        aria-describedby={demoEmailError ? "sim-demo-email-error" : undefined}
                        value={demoEmail}
                        onChange={(e) => {
                          setDemoEmail(e.target.value);
                          if (demoEmailError) setDemoEmailError(null);
                          if (demoError) setDemoError(null);
                        }}
                        onBlur={() => {
                          if (demoEmail.trim()) {
                            const check = checkEmailRules(demoEmail);
                            setDemoEmailError(check.valid ? null : (check.reason ?? null));
                          }
                        }}
                        placeholder="jean.dupont@entreprise.fr"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                      {demoEmailError && (
                        <span
                          id="sim-demo-email-error"
                          role="alert"
                          className="mt-1 block text-xs text-red-400"
                        >
                          {demoEmailError}
                        </span>
                      )}
                    </div>

                    {/* Honeypot anti-spam */}
                    <input
                      type="text"
                      name="website"
                      value={demoWebsite}
                      onChange={(e) => setDemoWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="pointer-events-none absolute -left-[9999px] h-1 w-1 opacity-0"
                      aria-hidden="true"
                    />

                    <div className="pt-1">
                      <label
                        htmlFor="sim-demo-consent"
                        className="flex cursor-pointer items-start gap-2.5"
                      >
                        <input
                          id="sim-demo-consent"
                          type="checkbox"
                          required
                          aria-invalid={Boolean(demoConsentError)}
                          checked={demoConsent}
                          onChange={(e) => {
                            setDemoConsent(e.target.checked);
                            if (demoConsentError) setDemoConsentError(null);
                          }}
                          className="mt-0.5 rounded accent-cyan-500"
                        />
                        <span className="text-[11px] leading-snug text-slate-400">
                          J&apos;accepte d&apos;être recontacté(e) par l&apos;équipe Floticar conformément à la{" "}
                          <Link href="/privacy" className="text-cyan-400 underline">
                            Politique de Confidentialité
                          </Link>
                          .
                        </span>
                      </label>
                      {demoConsentError && (
                        <span role="alert" className="mt-1 block text-xs text-red-400">
                          {demoConsentError}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
                      <button
                        type="submit"
                        disabled={isSendingDemo}
                        className={`flex w-full flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 sm:text-sm ${
                          isSendingDemo
                            ? "cursor-wait opacity-70"
                            : "cursor-pointer hover:shadow-cyan-500/30"
                        }`}
                      >
                        {isSendingDemo ? (
                          <span>Envoi en cours...</span>
                        ) : (
                          <>
                            <span>Demander ma démo gratuite (14 jours)</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-400">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Données hébergées en France • Sans engagement</span>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER FIXE DE NAVIGATION */}
        {screen !== "intro" &&
          screen !== "calculating" &&
          screen !== "results" &&
          screen !== "demo_form" && (
            <FleetSimulatorFooter
              onPrev={goToPrev}
              onNext={goToNext}
              canGoPrev={screen !== "step_vehicles"}
              canGoNext={canGoNext}
              nextLabel={screen === "summary" ? "Calculer mes économies" : "Continuer"}
              estimatedTimeLeft={
                screen === "summary"
                  ? "Prêt pour le calcul"
                  : currentStepNumber <= 3
                  ? "≈ 2 min restantes"
                  : "Dernières étapes"
              }
            />
          )}
      </div>

      {/* CONFIRMATION D'ABANDON */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm print:hidden">
          <div className="w-full max-w-sm space-y-4 rounded-2xl border border-white/10 bg-slate-900 p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-1 text-base font-bold text-white">Quitter le simulateur ?</h4>
              <p className="text-xs text-slate-400">
                Vos paramètres en cours seront perdus si vous fermez maintenant.
              </p>
            </div>
            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-2 text-xs font-bold text-white"
              >
                Continuer
              </button>
              <button
                type="button"
                onClick={handleConfirmExit}
                className="flex-1 cursor-pointer rounded-xl bg-white/5 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                Quitter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RAPPORT IMPRIMABLE (AFFICHÉ EXCLUSIVEMENT EN @media print) */}
      <FleetSimulatorPrintable simulation={simulation} />
    </div>,
    document.body
  );
}
