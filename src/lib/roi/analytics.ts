/**
 * Suivi analytique sécurisé des événements du simulateur Floticar.
 * Ne génère jamais d'erreur si Google Analytics (gtag) est désactivé ou bloqué.
 */
export type SimulatorAnalyticsEvent =
  | 'simulator_started'
  | 'simulator_step_completed'
  | 'simulator_completed'
  | 'simulator_cta_clicked';

export function trackSimulatorEvent(
  eventName: SimulatorAnalyticsEvent,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;

  try {
    const win = window as Window & {
      gtag?: (command: string, action: string, parameters?: Record<string, unknown>) => void;
    };
    if (typeof win.gtag === 'function') {
      win.gtag('event', eventName, params);
    }
  } catch {
    // Ignorer silencieusement si un bloqueur de scripts interfère
  }
}

