import {z} from "zod";

function safePercentage(made: number, attempted: number): number {
  if (attempted === 0) return 0;
  return Math.round((made / attempted) * 1000) / 10;
}

export const PlayerStatsSchema = z.object({
  time: z.number().int().nonnegative(),
  fieldGoals: z.number().int().nonnegative(),
  threePointers: z.number().int().nonnegative(),
  freeThrows: z.object({
    made: z.number().int().nonnegative(),
    attempted: z.number().int().nonnegative(),
  }),
  rebounds: z.object({
    offensive: z.number().int().nonnegative(),
    defensive: z.number().int().nonnegative(),
  }).optional(),
  assists: z.number().int().nonnegative().optional(),
  steals: z.number().int().nonnegative().optional(),
  turnovers: z.number().int().nonnegative().optional(),
  blocks: z.object({
    made: z.number().int().nonnegative(),
    received: z.number().int().nonnegative(),
  }).optional(),
  faults: z.number().int().nonnegative(),
  plusMinus: z.number().int(),
  efficiency: z.number().int(),
});

export type PlayerStats = z.infer<typeof PlayerStatsSchema>;

export function derivePlayerStats(stats: PlayerStats): DerivedPlayerStats {
  return {
    ...stats,

    percentage: {
      fieldGoals: safePercentage(stats.fieldGoals, 0),
      threePointers: safePercentage(stats.threePointers, 0),
      freeThrows: safePercentage(stats.freeThrows.made, stats.freeThrows.attempted),
    },

    points: 3 * stats.threePointers + 2 * stats.fieldGoals + stats.freeThrows.made,

    totalRebounds: stats.rebounds
      ? stats.rebounds.offensive + stats.rebounds.defensive
      : undefined,
  };
}

export interface DerivedPlayerStats extends PlayerStats {
  points: number;
  totalRebounds?: number;

  percentage: {
    fieldGoals: number;
    threePointers: number;
    freeThrows: number;
  };
}
