import type { PlayerStats, DerivedPlayerStats } from "../types/game";

function safePct(made: number, attempted: number): number {
  if (attempted === 0) return 0;
  return Math.round((made / attempted) * 1000) / 10;
}

export function derivePlayerStats(stats: PlayerStats): DerivedPlayerStats {
  return {
    ...stats,
    fgPct: safePct(stats.fgm, stats.fga),
    tpPct: safePct(stats.tpm, stats.tpa),
    ftPct: safePct(stats.ftm, stats.fta),
    totalScore: stats.points,
  };
}

export function totalPoints(scores: number[]): number {
  return scores.reduce((sum, s) => sum + s, 0);
}
