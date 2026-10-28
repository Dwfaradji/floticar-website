"use client";

import React from "react";
import type { FullFleetSimulationResult } from "@/lib/roi/types";

interface FleetSimulatorPrintableProps {
  simulation: FullFleetSimulationResult;
}

export default function FleetSimulatorPrintable({ simulation }: FleetSimulatorPrintableProps) {
  const {
    inputs,
    scenarios,
    annualGrossSaving,
    monthlyGrossSaving,
    savingPerVehicle,
    breakdown,
    roi,
    priorities,
    personalizedNarrative,
    confidence,
  } = simulation;

  return (
    <div
      id="printable-diagnostic-report"
      className="mx-auto hidden max-w-[210mm] bg-white p-8 font-sans text-xs leading-relaxed text-black print:block"
    >
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm 15mm 15mm 15mm;
          }
          html, body {
            background: #ffffff !important;
            background-color: #ffffff !important;
            color: #111827 !important;
            overflow: visible !important;
            height: auto !important;
          }
          header, footer, nav, main, aside, button, .no-print {
            display: none !important;
          }
          * {
            scrollbar-width: none !important;
          }
          *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .page-break {
            page-break-after: always;
            break-after: page;
          }
          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      {/* EN-TÊTE DU RAPPORT */}
      <div className="mb-6 flex items-start justify-between border-b-2 border-blue-600 pb-4">
        <div>
          <span className="block text-[10px] font-bold tracking-wider text-blue-700 uppercase">
            Floticar • Logiciel SaaS de Gestion de Flotte Automobile
          </span>
          <h1 className="mt-1 text-xl font-black text-gray-900">
            Simulation Économique &amp; Retour sur Investissement
          </h1>
          <p className="mt-0.5 text-[11px] text-gray-600">
            Flotte de <strong>{inputs.vehicles} véhicule{inputs.vehicles > 1 ? "s" : ""}</strong> •{" "}
            {Math.round(inputs.annualKmPerVehicle).toLocaleString("fr-FR")} km/véhicule/an • Organisation :{" "}
            {inputs.organizationType}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-blue-700">
            +{annualGrossSaving.toLocaleString("fr-FR")} € / an
          </div>
          <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-800 uppercase">
            ≈ {monthlyGrossSaving.toLocaleString("fr-FR")} € / mois
          </span>
        </div>
      </div>

      {/* SYNTHÈSE EXÉCUTIVE */}
      <div className="avoid-break mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="mb-1.5 flex items-center justify-between">
          <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
            1. Synthèse Économique Personnalisée
          </h2>
          <span className="text-[10px] font-semibold text-gray-600">
            Indice de confiance :{" "}
            {confidence === "high" ? "Élevé" : confidence === "medium" ? "Moyen" : "Indicatif"}
          </span>
        </div>
        <p className="rounded border border-gray-200 bg-white p-3 text-xs leading-relaxed text-gray-800 italic">
          « {personalizedNarrative} »
        </p>
      </div>

      {/* COMPARAISON DES 3 SCÉNARIOS */}
      <div className="avoid-break mb-6">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
          2. Comparaison des Niveaux de Gestion
        </h2>
        <table className="w-full border-collapse border border-gray-200 text-xs">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2 font-bold">Scénario</th>
              <th className="border border-gray-200 p-2 font-bold">Hypothèse</th>
              <th className="border border-gray-200 p-2 text-right font-bold">Coût Annuel Estimé</th>
              <th className="border border-gray-200 p-2 text-right font-bold">Économie Brute</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="border border-gray-200 p-2 font-semibold text-gray-900">
                {scenarios.current.title}
              </td>
              <td className="border border-gray-200 p-2 text-[11px] text-gray-600">
                {scenarios.current.subtitle}
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-gray-900">
                {scenarios.current.cost.toLocaleString("fr-FR")} €
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono text-gray-500">
                —
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-blue-50/50">
              <td className="border border-gray-200 p-2 font-semibold text-blue-900">
                {scenarios.optimized.title} (Recommandé)
              </td>
              <td className="border border-gray-200 p-2 text-[11px] text-gray-600">
                {scenarios.optimized.subtitle}
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-gray-900">
                {scenarios.optimized.cost.toLocaleString("fr-FR")} €
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-emerald-700">
                +{scenarios.optimized.saving.toLocaleString("fr-FR")} €
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="border border-gray-200 p-2 font-semibold text-gray-900">
                {scenarios.automated.title}
              </td>
              <td className="border border-gray-200 p-2 text-[11px] text-gray-600">
                {scenarios.automated.subtitle}
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-gray-900">
                {scenarios.automated.cost.toLocaleString("fr-FR")} €
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-emerald-700">
                +{scenarios.automated.saving.toLocaleString("fr-FR")} €
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DÉCOMPOSITION DES GAINS */}
      <div className="avoid-break mb-6">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
          3. Décomposition des Postes d&apos;Économies (Scénario Réaliste)
        </h2>
        <div className="grid grid-cols-4 gap-2.5">
          <div className="rounded border border-gray-200 bg-gray-50 p-3">
            <span className="block text-[10px] font-semibold text-gray-500 uppercase">Temps administratif</span>
            <div className="mt-0.5 text-base font-bold text-gray-900">+{breakdown.admin.toLocaleString("fr-FR")} €</div>
            <p className="mt-1 text-[10px] text-gray-600">Relevés et saisies manuelles supprimés.</p>
          </div>
          <div className="rounded border border-gray-200 bg-gray-50 p-3">
            <span className="block text-[10px] font-semibold text-gray-500 uppercase">Carburant</span>
            <div className="mt-0.5 text-base font-bold text-gray-900">+{breakdown.fuel.toLocaleString("fr-FR")} €</div>
            <p className="mt-1 text-[10px] text-gray-600">Suivi régulier et contrôle des dérives.</p>
          </div>
          <div className="rounded border border-gray-200 bg-gray-50 p-3">
            <span className="block text-[10px] font-semibold text-gray-500 uppercase">Entretien &amp; Révisions</span>
            <div className="mt-0.5 text-base font-bold text-gray-900">+{breakdown.maintenance.toLocaleString("fr-FR")} €</div>
            <p className="mt-1 text-[10px] text-gray-600">Respect strict des vidanges et révisions.</p>
          </div>
          <div className="rounded border border-gray-200 bg-gray-50 p-3">
            <span className="block text-[10px] font-semibold text-gray-500 uppercase">Oublis &amp; Amendes</span>
            <div className="mt-0.5 text-base font-bold text-gray-900">+{breakdown.incidentsAndLosses.toLocaleString("fr-FR")} €</div>
            <p className="mt-1 text-[10px] text-gray-600">Alertes CT et réduction des immobilisations.</p>
          </div>
        </div>
      </div>

      {/* RETOUR SUR INVESTISSEMENT FLOTICAR */}
      <div className="avoid-break mb-6 rounded-lg border border-blue-200 bg-blue-50/40 p-4">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-blue-950 uppercase">
          4. Rentabilité &amp; Retour sur Investissement
        </h2>
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="rounded border border-gray-200 bg-white p-2">
            <span className="block text-[10px] text-gray-500">Investissement estimé</span>
            <span className="text-sm font-extrabold text-gray-900">{roi.annualSoftwareCost.toLocaleString("fr-FR")} € / an</span>
            <span className="block text-[9px] text-gray-500">({roi.monthlySoftwareCost} € / mois)</span>
          </div>
          <div className="rounded border border-gray-200 bg-white p-2">
            <span className="block text-[10px] text-gray-500">Gain brut annuel</span>
            <span className="text-sm font-extrabold text-gray-900">+{annualGrossSaving.toLocaleString("fr-FR")} €</span>
            <span className="block text-[9px] text-gray-500">(~{savingPerVehicle.toLocaleString("fr-FR")} € / vhc)</span>
          </div>
          <div className="rounded border border-gray-200 bg-white p-2">
            <span className="block text-[10px] text-gray-500">Gain net potentiel</span>
            <span className="text-sm font-extrabold text-emerald-700">+{roi.annualNetGain.toLocaleString("fr-FR")} € / an</span>
            <span className="block text-[9px] text-gray-500">(Après coût logiciel)</span>
          </div>
          <div className="rounded border border-gray-200 bg-white p-2">
            <span className="block text-[10px] text-gray-500">Seuil de rentabilité</span>
            <span className="text-sm font-extrabold text-blue-700">~{roi.paybackMonths} mois</span>
            <span className="block text-[9px] text-gray-500">(Amortissement rapide)</span>
          </div>
        </div>
      </div>

      {/* TOP 3 PRIORITÉS */}
      <div className="avoid-break mb-6">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
          5. Leviers d&apos;Action Prioritaires
        </h2>
        <div className="space-y-2">
          {priorities.map((item) => (
            <div key={item.number} className="avoid-break rounded border border-gray-200 bg-white p-2.5">
              <div className="mb-0.5 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">
                  {item.number}. {item.title}
                </span>
                <span className="font-mono text-[10px] text-gray-600">
                  Horizon : {item.horizon} • Impact : {item.impact}
                </span>
              </div>
              <p className="text-[11px] text-gray-600">{item.description}</p>
              <p className="mt-1 text-[11px] font-semibold text-blue-800">
                Action recommandée : {item.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* HYPOTHÈSES DOCUMENTÉES */}
      <div className="avoid-break mt-6 space-y-1.5 border-t border-gray-200 pt-4 text-[10px] text-gray-500">
        <p>
          <strong>Hypothèses du modèle :</strong> Taux horaire administratif chargé : {inputs.hourlyCost} €/h • Tarification de référence Floticar : 15 € HT/véhicule/mois.
        </p>
        <p>
          <strong>Avertissement légal :</strong> Ce simulateur est un outil d&apos;aide à la décision financière et organisationnelle. Les résultats constituent des estimations indicatives basées sur vos paramètres et ne sauraient constituer une garantie contractuelle d&apos;économies.
        </p>
        <p>
          Document édité par <strong>Floticar</strong> • Contact : support@floticar.com • www.floticar.com
        </p>
      </div>
    </div>
  );
}

