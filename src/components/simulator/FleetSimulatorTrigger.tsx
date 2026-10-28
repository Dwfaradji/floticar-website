"use client";

import React from "react";
import { ArrowRight, Calculator, CheckCircle2, Clock, Sparkles } from "lucide-react";

interface FleetSimulatorTriggerProps {
  vehicles: number;
  previewAnnualSaving: number;
  onVehiclesChange: (v: number) => void;
  onOpenModal: () => void;
  className?: string;
}

export default function FleetSimulatorTrigger({
  vehicles,
  previewAnnualSaving,
  onVehiclesChange,
  onOpenModal,
  className = "",
}: FleetSimulatorTriggerProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-slate-950 p-6 shadow-[0_0_60px_rgba(6,182,212,0.12)] sm:p-10 md:p-12 ${className}`}
    >
      {/* Effets lumineux d'arrière-plan */}
      <div className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px] transition-all duration-700 group-hover:bg-cyan-500/25" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
        {/* Colonne Gauche : Proposition de valeur */}
        <div className="space-y-5 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Outil interactif • Gratuit &amp; sans inscription</span>
          </div>

          <h2 className="text-2xl leading-tight font-extrabold text-white sm:text-3xl md:text-4xl">
            Combien votre flotte vous coûte-t-elle{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              réellement chaque année ?
            </span>
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Calculez vos économies potentielles sur le carburant, l&apos;entretien, le suivi
            administratif et la prévention des immobilisations grâce à notre simulateur guidé pas à pas.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span>Moins de 2 minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Hypothèses 100 % transparentes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              <span>Rapport PDF téléchargeable</span>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Aperçu interactif rapide + Bouton d'ouverture */}
        <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md sm:p-7 lg:col-span-5">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="trigger-vehicles-range"
                className="text-xs font-semibold tracking-wider text-slate-400 uppercase"
              >
                Taille de votre parc
              </label>
              <span className="font-mono text-lg font-black text-cyan-400">
                {vehicles} véhicule{vehicles > 1 ? "s" : ""}
              </span>
            </div>
            <input
              id="trigger-vehicles-range"
              type="range"
              min={1}
              max={150}
              step={1}
              value={vehicles}
              aria-label="Nombre de véhicules dans votre flotte"
              onChange={(e) => onVehiclesChange(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-cyan-400"
            />
            <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-400">
              <span>1 vhc</span>
              <span>20 vhc</span>
              <span>50 vhc</span>
              <span>150+ vhc</span>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-4 text-center">
            <span className="mb-1 block text-[11px] font-medium text-slate-300">
              Potentiel d&apos;économies annuel estimé
            </span>
            <div className="font-mono text-3xl font-black tracking-tight text-white sm:text-4xl">
              +{previewAnnualSaving.toLocaleString("fr-FR")} €{" "}
              <span className="font-sans text-sm font-normal text-cyan-300">/ an</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue-500/25 transition-all duration-200 hover:scale-[1.01] hover:shadow-cyan-500/35 sm:text-base"
          >
            <Calculator className="h-5 w-5" />
            <span>Lancer le simulateur interactif (2 min)</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-center text-[11px] text-slate-400">
            Affinez en 7 clics selon vos kilomètres, carburant et mode de gestion actuel.
          </p>
        </div>
      </div>
    </div>
  );
}

