import {z} from "zod";

export const PlayerStatsSchema = z.object({
  time: z.number().int().nonnegative(),
  fieldGoals: z.number().int().nonnegative(),
  threePointers: z.number().int().nonnegative(),
  freeThrows: z.object({
    made: z.number().int().nonnegative(),
    attempted: z.number().int().nonnegative(),
  }),
  faults: z.number().int().nonnegative(),
  plusMinus: z.number().int(),
  efficiency: z.number().int(),
});

export type PlayerStats = z.infer<typeof PlayerStatsSchema>;

export const AdvancedPlayerStatsSchema = z.object({
  time: z.number().int().nonnegative(),
  fieldGoals: z.object({
    made: z.number().int().nonnegative(),
    attempted: z.number().int().nonnegative(),
  }),
  threePointers: z.object({
    made: z.number().int().nonnegative(),
    attempted: z.number().int().nonnegative(),
  }),
  freeThrows: z.object({
    made: z.number().int().nonnegative(),
    attempted: z.number().int().nonnegative(),
  }),
  rebounds: z.object({
    offensive: z.number().int().nonnegative(),
    defensive: z.number().int().nonnegative(),
  }),
  assists: z.number().int().nonnegative(),
  steals: z.number().int().nonnegative(),
  turnovers: z.number().int().nonnegative(),
  blocks: z.object({
    made: z.number().int().nonnegative(),
    received: z.number().int().nonnegative(),
  }),
  faults: z.object({
    made: z.number().int().nonnegative(),
    received: z.number().int().nonnegative(),
  }),
  plusMinus: z.number().int(),
  efficiency: z.number().int(),
});

export type AdvancedPlayerStats = z.infer<typeof AdvancedPlayerStatsSchema>;

