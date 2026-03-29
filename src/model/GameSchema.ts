import {z} from "zod";
import {VenueSchema} from "./VenueSchema.ts";
import {TeamSchema} from "./TeamSchema.ts";

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
    scores: z.array(z.number().int().positive()),
  }),

  away: z.object({
    club: TeamSchema,
    category: z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]),
    scores: z.array(z.number().int().positive()),
  }),

  playerStats: z.array(z.object({
    time: z.number().int().nonnegative(),
    throws: z.object({
      free: z.object({
        successful: z.number().int().nonnegative(),
        total: z.number().int().nonnegative(),
      }),
      two: z.number().int().nonnegative(),
      three: z.number().int().nonnegative(),
    }),
    faults: z.number().int().nonnegative(),
    plusMinus: z.number().int(),
    efficiency: z.number().int(),
  })),
});

export type Game = z.infer<typeof GameSchema>;
