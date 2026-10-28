"use client";

import React from "react";
import { Car, X } from "lucide-react";

interface FleetSimulatorHeaderProps {
  currentStepNumber: number;
  totalStepsCount: number;
  onCloseRequest: () => void;
  showCloseButton?: boolean;
}

export default function FleetSimulatorHeader({
  currentStepNumber,
  totalStepsCount,
  onCloseRequest,
  showCloseButton = true,
}: FleetSimulatorHeaderProps) {
  const progressPercent = Math.min(
    100,
    Math.max(5, Math.round((currentStepNumber / totalStepsCount) * 100))
  );

  return (
    <header className="relative z-20 shrink-0 border-b border-white/10 bg-slate-950/85 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3.5 backdrop-blur-md sm:px-8">
      <div className="flex items-center justify-between gap-4">
        {/* Identité Marque Floticar */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/15 text-cyan-400 shadow-inner">
            <Car className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-sm font-extrabold tracking-wide text-transparent">
                Floticar
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-medium text-slate-300">
                Simulateur de gains
              </span>
            </div>
            <div className="font-mono text-[11px] text-slate-400">
              Étape {currentStepNumber} sur {totalStepsCount}
            </div>
          </div>
        </div>

        {/* Bouton de Fermeture */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onCloseRequest}
            aria-label="Fermer le simulateur"
            className="flex size-11 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Barre de progression fine */}
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
}

