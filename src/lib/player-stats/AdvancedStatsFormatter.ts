/**
 * AdvancedStatsFormatter
 *
 * Extensión de PlayerStatsFormatter para estadísticas avanzadas.
 * Implementada por:
 * - AdvancedPlayerStatsFormatterImpl (para AdvancedPlayerStats)
 * - NoStatsFormatter (null object, también implementa esta interfaz)
 */

import type { PlayerStatsFormatter } from './PlayerStatsFormatter';

export interface AdvancedStatsFormatter extends PlayerStatsFormatter {
  /**
   * Formatea los rebotes (ofensivos + defensivos).
   * @returns "O+D" ej: "2+4" o placeholder "-"
   */
  formatRebounds(): string;

  /**
   * Formatea las asistencias.
   * @returns número como string ej: "3" o placeholder "-"
   */
  formatAssists(): string;

  /**
   * Formatea los robos.
   * @returns número como string ej: "1" o placeholder "-"
   */
  formatSteals(): string;

  /**
   * Formatea las pérdidas/turnovers.
   * @returns número como string ej: "2" o placeholder "-"
   */
  formatTurnovers(): string;

  /**
   * Formatea los tapones.
   * @returns "made/received" ej: "1/0" o placeholder "-"
   */
  formatBlocks(): string;
}

