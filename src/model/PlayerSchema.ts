import {z} from "zod";

/**
 * All player stats set to 0, no stats were recorded for the game
 */
export const EmptyPlayerStats = {
  time: 0,
  fieldGoals: 0,
  threePointers: 0,
  freeThrows: {
    made: 0,
    attempted: 0,
  },
  faults: 0,
  plusMinus: 0,
  efficiency: 0,
};

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

/**
 * All player stats set to 0, no stats were recorded for the advanced game
 */
export const EmptyAdvancedPlayerStats = {
  time: 0,
  fieldGoals: {
    made: 0,
    attempted: 0,
  },
  threePointers: {
    made: 0,
    attempted: 0,
  },
  freeThrows: {
    made: 0,
    attempted: 0,
  },
  rebounds: {
    offensive: 0,
    defensive: 0,
  },
  assists: 0,
  steals: 0,
  turnovers: 0,
  blocks: {
    made: 0,
    received: 0,
  },
  faults: {
    made: 0,
    received: 0,
  },
  plusMinus: 0,
  efficiency: 0,
};

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

