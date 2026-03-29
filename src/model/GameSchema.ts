import {z} from "zod";
import {PlayerStatsSchema} from "./PlayerSchema.ts";
import {TeamSchema} from "./TeamSchema.ts";
import {VenueSchema} from "./VenueSchema.ts";

export function totalPoints(scores: number[]): number {
  return scores.reduce((sum, s) => sum + s, 0);
}

export const GameSchema = z.object({
  id: z.string(),
  season: z.string(),
  date: z.iso.datetime(),
  status: z.enum(["scheduled", "played", "postponed"]),

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
});

export type Game = z.infer<typeof GameSchema>;
