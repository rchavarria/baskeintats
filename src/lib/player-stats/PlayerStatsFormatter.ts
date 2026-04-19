/**
 * PlayerStatsFormatter
 *
 * Interfaz base para formatear estadísticas de jugador.
 * Implementada por:
 * - PlayerStatsFormatterImpl (para PlayerStats básico)
 * - NoStatsFormatter (null object para sin estadísticas)
 * - AdvancedPlayerStatsFormatterImpl (hereda de AdvancedStatsFormatter)
 */

export interface PlayerStatsFormatter {
  /**
   * Indica si hay estadísticas disponibles.
   * Retorna false SOLO si time === 0 AND points === 0.
   * Nota: time > 0 && points === 0 es válido (partido malo pero jugó).
   */
  hasStats(): boolean;

  /**
   * Discriminante de tipo de estadísticas.
   * @returns 'none' | 'basic' | 'advanced'
   */
  kind(): 'none' | 'basic' | 'advanced';

  /**
   * Formatea el tiempo jugado.
   * @returns "MM:SS" ej: "12:34" o placeholder "00:00"
   */
  formatPlayedTime(): string;

  /**
   * Formatea los puntos totales.
   * @returns número como string ej: "8" o placeholder "-"
   */
  formatPoints(): string;

  /**
   * Formatea los tiros de campo.
   * En basic: devuelve número simple "5"
   * En advanced: devuelve "made/attempted (percentage%)" ej: "8/12 (66%)"
   */
  formatFieldGoals(): string;

  /**
   * Formatea los triples.
   * En basic: devuelve número simple "3"
   * En advanced: devuelve "made/attempted (percentage%)" ej: "3/8 (37%)"
   */
  formatThreePointers(): string;

  /**
   * Formatea los tiros libres.
   * Formato: "made/attempted (percentage%)" ej: "4/5 (80%)"
   * En básico: calcula porcentaje de freeThrows
   * En avanzado: idem
   */
  formatFreeThrows(): string;

  /**
   * Formatea las faltas cometidas.
   * DUAL SEMANTIC:
   * En basic: devuelve número simple ej: "2"
   * En advanced: devuelve "made/received" ej: "2/1"
   */
  formatFaults(): string;

  /**
   * Formatea el +/- (más/menos).
   * @returns número con signo ej: "+5", "-3", "0" o placeholder "-"
   */
  formatPlusMinus(): string;

  /**
   * Formatea la eficiencia/valoración.
   * @returns número como string ej: "15" o placeholder "-"
   */
  formatEfficiency(): string;
}

