import type { PlayerStats, AdvancedPlayerStats } from '../../model/PlayerSchema';

/**
 * Discriminated union representing the three possible player stats variants.
 * - none: no stats available (time === 0 AND points === 0)
 * - basic: standard PlayerStats
 * - advanced: AdvancedPlayerStats with full shot charts, rebounds, etc.
 */
export type PlayerStatsVariant =
  | { kind: 'none' }
  | { kind: 'basic'; stats: PlayerStats }
  | { kind: 'advanced'; stats: AdvancedPlayerStats };

/**
 * Classifies a player stats object into one of three variants.
 *
 * Detection rules (in order):
 * 1. time === 0 AND points === 0 → 'none'  (no data recorded)
 * 2. fieldGoals is object with {made, attempted} shape → 'advanced'
 * 3. fieldGoals is number → 'basic'
 *
 * Note: time > 0 AND points === 0 is valid (bad game, but the player played).
 */
export function getPlayerStatsVariant(stats: PlayerStats | AdvancedPlayerStats): PlayerStatsVariant {
  const points = calculateTotalPoints(stats);
  if (stats.time === 0 && points === 0) {
    return { kind: 'none' };
  }

  if (typeof stats.fieldGoals === 'object') {
    return { kind: 'advanced', stats: stats as AdvancedPlayerStats };
  }

  return { kind: 'basic', stats: stats as PlayerStats };
}

/**
 * Calculates total points generically for both stats shapes.
 * Used only for the 'none' detection rule.
 *
 * PlayerStats:         fieldGoals is the total count (2pt + 3pt combined)
 * AdvancedPlayerStats: fieldGoals.made is 2pt only (3pt tracked separately)
 */
function calculateTotalPoints(stats: PlayerStats | AdvancedPlayerStats): number {
  if (typeof stats.fieldGoals === 'object') {
    const adv = stats as AdvancedPlayerStats;
    return (
      3 * adv.threePointers.made +
      2 * adv.fieldGoals.made +
      adv.freeThrows.made
    );
  }

  const basic = stats as PlayerStats;
  const twoPointers = basic.fieldGoals - basic.threePointers;
  return (
    3 * basic.threePointers +
    2 * twoPointers +
    basic.freeThrows.made
  );
}

