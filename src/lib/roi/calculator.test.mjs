import { test } from "node:test";
import assert from "node:assert/strict";
import {
  sanitizeNumber,
  calculateEstimatedFuelBudget,
  calculateFleetROI,
  calculateAllScenarios,
  buildFullFleetSimulation,
} from "./calculator.ts";
import { DEFAULT_FLEET_INPUTS, calculateFloticarAnnualCost } from "./constants.ts";

test("1. Calcul avec valeurs connues (DEFAULT_FLEET_INPUTS : 8 véhicules sur Excel)", () => {
  const result = calculateFleetROI(DEFAULT_FLEET_INPUTS, "realiste", calculateFloticarAnnualCost(8));

  // Heures admin initiales : 6h * 52 = 312 h
  assert.equal(result.breakdown.initialAdminHours, 312);
  // Taux réduction admin : 0.40 * 1.10 (excel) = 0.44
  assert.ok(Math.abs(result.breakdown.effectiveAdminReductionRate - 0.44) < 1e-6);
  // Carburant : (8 * 15000 * 7 / 100) * 1.80 = 15 120 €
  assert.equal(result.breakdown.calculatedFuelBudget, 15120);
  assert.ok(result.grossAnnualSaving > 0);
  assert.ok(result.netAnnualSaving !== undefined && result.netAnnualSaving > 0);
});

test("2. Valeurs minimales (1 véhicule, 0h admin)", () => {
  const roi = calculateFleetROI({
    ...DEFAULT_FLEET_INPUTS,
    vehicles: 1,
    weeklyAdminHours: 0,
    annualMaintenanceBudget: 0,
    annualIncidentCost: 0,
    annualAvoidableImmobilisations: 0,
  });

  assert.equal(roi.breakdown.initialAdminHours, 0);
  assert.ok(roi.grossAnnualSaving >= 0);
  assert.ok(!Number.isNaN(roi.grossAnnualSaving));
});

test("3. Valeurs maximales (flotte de 200 véhicules, plafonnement MAX_ADMIN_REDUCTION à 70%)", () => {
  const roi = calculateFleetROI({
    ...DEFAULT_FLEET_INPUTS,
    vehicles: 200,
    weeklyAdminHours: 40,
    organizationType: "paper",
  }, "optimise");

  // 0.55 * 1.15 = 0.6325 <= 0.70
  assert.ok(roi.breakdown.effectiveAdminReductionRate <= 0.70);
  assert.ok(roi.grossAnnualSaving > 10000);
});

test("4. Valeurs à zéro et négatives (sanitisation défensive sans division par zéro)", () => {
  assert.equal(sanitizeNumber(NaN, 5, 1, 10), 5);
  assert.equal(sanitizeNumber(-50, 0, 0, 100), 0);
  assert.equal(calculateEstimatedFuelBudget(0, -100, -5, -2), 0);

  const roi = calculateFleetROI({
    ...DEFAULT_FLEET_INPUTS,
    vehicles: 0,
    annualKmPerVehicle: -500,
    annualMaintenanceBudget: -1000,
    weeklyAdminHours: -5,
  });

  assert.ok(!Number.isNaN(roi.grossAnnualSaving));
  assert.ok(!Number.isNaN(roi.savingPerVehicle));
});

test("5. Valeurs décimales (arrondis propres dans buildFullFleetSimulation)", () => {
  const sim = buildFullFleetSimulation({
    ...DEFAULT_FLEET_INPUTS,
    vehicles: 12,
    annualKmPerVehicle: 14325.75,
    weeklyAdminHours: 3.25,
    hourlyCost: 29.5,
  });

  assert.equal(Number.isInteger(sim.annualGrossSaving), true);
  assert.equal(Number.isInteger(sim.monthlyGrossSaving), true);
  assert.equal(Number.isInteger(sim.currentCost.total), true);
  assert.equal(Number.isFinite(sim.roi.paybackMonths), true);
});

test("6. Cohérence des 3 scénarios (Prudent < Réaliste < Optimisé)", () => {
  const scenarios = calculateAllScenarios(DEFAULT_FLEET_INPUTS);

  assert.ok(scenarios.prudent.grossAnnualSaving < scenarios.realiste.grossAnnualSaving);
  assert.ok(scenarios.realiste.grossAnnualSaving < scenarios.optimise.grossAnnualSaving);
  assert.equal(scenarios.minGrossSaving, scenarios.prudent.grossAnnualSaving);
  assert.equal(scenarios.maxGrossSaving, scenarios.optimise.grossAnnualSaving);
});

test("7. Rapport complet buildFullFleetSimulation et indice de confiance", () => {
  const simIndicative = buildFullFleetSimulation(DEFAULT_FLEET_INPUTS, ["technical_inspection", "fuel"]);
  assert.equal(simIndicative.confidence, "indicative");
  assert.equal(simIndicative.priorities.length, 3);
  assert.equal(simIndicative.scenarios.optimized.saving, simIndicative.annualGrossSaving);

  const simHigh = buildFullFleetSimulation({
    ...DEFAULT_FLEET_INPUTS,
    fuelCalculationMode: "known",
    annualFuelBudget: 25000,
    isMaintenanceCustom: true,
    annualMaintenanceBudget: 9000,
  });
  assert.equal(simHigh.confidence, "high");
  assert.equal(simHigh.currentCost.fuel, 25000);
  assert.equal(simHigh.currentCost.maintenance, 9000);
});

test("8. Reset vers DEFAULT_FLEET_INPUTS redonne exactement les valeurs initiales", () => {
  const firstRun = buildFullFleetSimulation(DEFAULT_FLEET_INPUTS);
  const modifiedRun = buildFullFleetSimulation({ ...DEFAULT_FLEET_INPUTS, vehicles: 50 });
  const resetRun = buildFullFleetSimulation({ ...DEFAULT_FLEET_INPUTS });

  assert.notEqual(firstRun.annualGrossSaving, modifiedRun.annualGrossSaving);
  assert.equal(firstRun.annualGrossSaving, resetRun.annualGrossSaving);
  assert.deepEqual(firstRun.breakdown, resetRun.breakdown);
});
