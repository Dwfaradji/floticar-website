"use client";

import React, { useEffect, useMemo, useState } from "react";
import { DEFAULT_FLEET_INPUTS, STORAGE_KEY_ROI_SIMULATION } from "@/lib/roi/constants";
import { buildFullFleetSimulation } from "@/lib/roi/calculator";
import type { FleetInputs, FleetProblemId } from "@/lib/roi/types";
import { trackSimulatorEvent } from "@/lib/roi/analytics";
import FleetSimulatorTrigger from "./FleetSimulatorTrigger";
import FleetSimulatorModal from "./FleetSimulatorModal";

export interface FleetSimulatorToolProps {
  initialInputs?: Partial<FleetInputs>;
  defaultFloticarAnnualCost?: number;
  defaultOpen?: boolean;
  className?: string;
}

export default function FleetSimulatorTool({
  initialInputs,
  defaultFloticarAnnualCost,
  defaultOpen = false,
  className = "",
}: FleetSimulatorToolProps) {
  const [inputs, setInputs] = useState<FleetInputs>(() => ({
    ...DEFAULT_FLEET_INPUTS,
    ...initialInputs,
    annualFloticarCost: defaultFloticarAnnualCost ?? initialInputs?.annualFloticarCost,
  }));

  const [selectedProblems, setSelectedProblems] = useState<FleetProblemId[]>([
    "maintenance",
    "technical_inspection",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(defaultOpen);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          STORAGE_KEY_ROI_SIMULATION,
          JSON.stringify({
            inputs,
            problems: selectedProblems,
          })
        );
      }
    } catch {
      // Ignore storage errors
    }
  }, [inputs, selectedProblems]);

  const simulation = useMemo(
    () => buildFullFleetSimulation(inputs, selectedProblems),
    [inputs, selectedProblems]
  );

  const handleInputsChange = (partial: Partial<FleetInputs>) => {
    setInputs((prev) => ({ ...prev, ...partial }));
  };

  const handleReset = () => {
    setInputs({
      ...DEFAULT_FLEET_INPUTS,
      ...initialInputs,
      annualFloticarCost: defaultFloticarAnnualCost ?? initialInputs?.annualFloticarCost,
    });
    setSelectedProblems(["maintenance", "technical_inspection"]);
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem(STORAGE_KEY_ROI_SIMULATION);
      }
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <>
      <FleetSimulatorTrigger
        vehicles={inputs.vehicles}
        previewAnnualSaving={simulation.annualGrossSaving}
        onVehiclesChange={(v) =>
          handleInputsChange({
            vehicles: v,
            annualMaintenanceBudget: inputs.isMaintenanceCustom
              ? inputs.annualMaintenanceBudget
              : v * 450,
          })
        }
        onOpenModal={() => {
          trackSimulatorEvent("simulator_started", {
            source: "trigger_card",
            vehicles: inputs.vehicles,
          });
          setIsModalOpen(true);
        }}
        className={className}
      />

      <FleetSimulatorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inputs={inputs}
        selectedProblems={selectedProblems}
        simulation={simulation}
        onInputsChange={handleInputsChange}
        onProblemsChange={setSelectedProblems}
        onReset={handleReset}
      />
    </>
  );
}
