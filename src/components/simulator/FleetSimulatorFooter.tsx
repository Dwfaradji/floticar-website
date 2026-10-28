"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

interface FleetSimulatorFooterProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  nextLabel?: string;
  estimatedTimeLeft?: string;
}

export default function FleetSimulatorFooter({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  nextLabel = "Continuer",
  estimatedTimeLeft = "≈ 2 min restantes",
}: FleetSimulatorFooterProps) {
  return (
    <footer className="relative z-20 flex shrink-0 items-center justify-between gap-4 border-t border-white/10 bg-slate-950/95 px-5 py-4 backdrop-blur-md sm:px-8">
      {/* Bouton Retour */}
      {canGoPrev ? (
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Retour</span>
        </button>
      ) : (
        <div className="w-16" />
      )}

      {/* Indicateur de temps discret */}
      {estimatedTimeLeft && (
        <div className="hidden items-center gap-1.5 text-xs text-slate-400 sm:inline-flex">
          <Clock className="h-3.5 w-3.5" />
          <span>{estimatedTimeLeft}</span>
        </div>
      )}

      {/* Bouton Continuer / Valider */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold shadow-lg transition-all sm:px-6 sm:text-sm ${
          canGoNext
            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-blue-500/20 hover:scale-[1.02] hover:shadow-cyan-500/30"
            : "cursor-not-allowed bg-white/10 text-slate-400 opacity-50"
        }`}
      >
        <span>{nextLabel}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </footer>
  );
}

