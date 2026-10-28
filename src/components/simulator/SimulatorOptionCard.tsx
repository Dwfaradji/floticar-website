"use client";

import React from "react";
import { Check } from "lucide-react";

interface SimulatorOptionCardProps {
  label: string;
  description?: string;
  badge?: string;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  isMultiSelect?: boolean;
}

export default function SimulatorOptionCard({
  label,
  description,
  badge,
  selected,
  onClick,
  disabled = false,
  className = "",
  isMultiSelect = false,
}: SimulatorOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      role={isMultiSelect ? "checkbox" : "radio"}
      aria-checked={selected}
      className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none sm:p-5 ${
        selected
          ? "border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_25px_rgba(6,182,212,0.18)]"
          : "border-white/10 bg-slate-900/60 hover:border-white/20 hover:bg-slate-900"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 pr-2">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span
              className={`text-sm font-bold transition-colors sm:text-base ${
                selected ? "text-white" : "text-slate-200 group-hover:text-white"
              }`}
            >
              {label}
            </span>
            {badge && (
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-300">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300">
              {description}
            </p>
          )}
        </div>

        {/* Check Indicator */}
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
            selected
              ? "scale-100 border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
              : "scale-95 border-white/20 bg-white/5 text-transparent group-hover:border-white/40"
          }`}
        >
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </div>
      </div>
    </button>
  );
}

