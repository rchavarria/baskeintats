import type { PlayerStats, DerivedPlayerStats } from "../model/GameSchema";

function safePct(made: number, attempted: number): number {
  if (attempted === 0) return 0;
  return Math.round((made / attempted) * 1000) / 10;
}

export function derivePlayerStats(stats: PlayerStats): DerivedPlayerStats {
  return {
    ...stats,

    percentage: {
      fieldGoals: safePct(stats.fieldGoals, 0),
      threePointers: safePct(stats.threePointers, 0),
      freeThrows: safePct(stats.freeThrows.made, stats.freeThrows.attempted),
    },

    points: 3 * stats.threePointers + 2 * stats.fieldGoals + stats.freeThrows.made,
  };
}

export function totalPoints(scores: number[]): number {
  return scores.reduce((sum, s) => sum + s, 0);
}
