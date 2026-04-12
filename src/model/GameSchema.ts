import {z} from "zod";
import {PlayerStatsSchema, AdvancedPlayerStatsSchema} from "./PlayerSchema.ts";
import {TeamSchema} from "./TeamSchema.ts";
import {VenueSchema} from "./VenueSchema.ts";

export function totalPoints(scores: number[]): number {
  return scores.reduce((sum, s) => sum + s, 0);
}

export const GameSchema = z.object({
  id: z.string(),
  type: z.literal("game"),
  season: z.string(),
  date: z.iso.datetime(),

  competition: z.object({
    name: z.string(),
    category: z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]),
    phase: z.string(),
    // "J1", "J2", "3º-4º", "Semis", "Playoffs"
    round: z.string(),
  }),

  venue: VenueSchema,

  home: z.object({
    club: TeamSchema,
    category: z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]),
    scores: z.array(z.number().int().nonnegative()),
  }),

  away: z.object({
    club: TeamSchema,
    category: z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]),
    scores: z.array(z.number().int().nonnegative()),
  }),

  playerStats: PlayerStatsSchema,

  videos: z.object({
    official: z.url(),
    others: z.array(z.object({
      label: z.string(),
      url: z.url(),
    })).optional(),
  }),

  recap: z.object({
    title: z.string(),
    lines: z.array(z.string()),
  }),

  references: z.array(z.object({
    icon: z.string().max(2),
    label: z.string(),
    url: z.url(),
  })),

});

export type Game = z.infer<typeof GameSchema>;

// scheduled game is an incomplete one, with different `type`
export const ScheduledGameSchema = GameSchema
  .partial()
  .extend({
    type: z.literal("scheduled"),
  });
export type ScheduledGame = z.infer<typeof ScheduledGameSchema>;

// advanced game has the same structure as Game, but with advanced player stats
export const AdvancedGameSchema = GameSchema
  .extend({
    type: z.literal("advanced-game"),
    playerStats: AdvancedPlayerStatsSchema,
  });
export type AdvancedGame = z.infer<typeof AdvancedGameSchema>;

