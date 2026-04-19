import type { PlayerStats, AdvancedPlayerStats } from '../../model/PlayerSchema';
import type { PlayerStatsFormatter } from './PlayerStatsFormatter';
import type { AdvancedStatsFormatter } from './AdvancedStatsFormatter';
import { PlayerStatsFormatterImpl } from './PlayerStatsFormatterImpl';
import { AdvancedPlayerStatsFormatterImpl } from './AdvancedPlayerStatsFormatterImpl';
import { NoStatsFormatter } from './NoStatsFormatter';

/**
 * createPlayerStatsFormatter
 *
 * Factoría que detecta automáticamente el tipo de estadísticas y retorna
 * la implementación correcta del formatter.
 *
 * Reglas de detección:
 * 1. Si time === 0 AND points === 0 → NoStatsFormatter
 * 2. Si fieldGoals es object (tiene shape {made, attempted}) → AdvancedPlayerStatsFormatterImpl
 * 3. Si fieldGoals es number → PlayerStatsFormatterImpl
 *
 * @param stats - PlayerStats o AdvancedPlayerStats (union type)
 * @returns PlayerStatsFormatter | AdvancedStatsFormatter según el tipo de stats
 */
export function createPlayerStatsFormatter(
  stats: PlayerStats | AdvancedPlayerStats
): PlayerStatsFormatter | AdvancedStatsFormatter {
  // Regla 1: Detectar si no hay estadísticas
  // En ambos tipos, time y points tienen el mismo significado
  const points = calculateTotalPoints(stats);
  if (stats.time === 0 && points === 0) {
    return new NoStatsFormatter();
  }

  // Regla 2 y 3: Detectar por shape de fieldGoals
  // Si fieldGoals es object, es AdvancedPlayerStats
  if (typeof stats.fieldGoals === 'object') {
    return new AdvancedPlayerStatsFormatterImpl(stats as AdvancedPlayerStats);
  }

  // Si fieldGoals es number, es PlayerStats
  return new PlayerStatsFormatterImpl(stats as PlayerStats);
}

/**
 * Calcula puntos totales de manera genérica para ambos tipos de stats.
 * Usado solo para la detección de "sin estadísticas".
 *
 * En PlayerStats: fieldGoals es número total (2pt + 3pt)
 * En AdvancedPlayerStats: fieldGoals.made es solo 2pt (excluye 3pt)
 */
function calculateTotalPoints(stats: PlayerStats | AdvancedPlayerStats): number {
  // Detectar si es AdvancedPlayerStats
  if (typeof stats.fieldGoals === 'object') {
    const adv = stats as AdvancedPlayerStats;
    return (
      3 * adv.threePointers.made +
      2 * adv.fieldGoals.made +
      adv.freeThrows.made
    );
  }

  // Es PlayerStats
  const basic = stats as PlayerStats;
  const twoPointers = basic.fieldGoals - basic.threePointers;
  return (
    3 * basic.threePointers +
    2 * twoPointers +
    basic.freeThrows.made
  );
}

