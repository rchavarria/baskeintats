import {z} from "zod";

export const GameSchema = z.object({
    season: z.string(),
    date: z.iso.datetime(),
    status: z.enum([ "scheduled", "played", "postponed" ]),

    competition: z.object({
        name: z.string(),
        category: z.enum([ "U13M", "U14M", "U15M", "U16M", "U17M", "U18M" ]),
        phase: z.string(),
        // "J1", "J2", "3º-4º", "Semis", "Playoffs"
        round: z.string(),
    }),

    venue: z.object({
        name: z.string(),
        address: z.url(),
    }),

    home: z.object({
        club: z.object({
            name: z.string(),
            logo: z.url(),
        }),
        category: z.enum([ "U13M", "U14M", "U15M", "U16M", "U17M", "U18M" ]),
        scores: z.array(z.number().int().positive()),
    }),

    away: z.object({
        club: z.object({
            name: z.string(),
            logo: z.url(),
        }),
        category: z.enum([ "U13M", "U14M", "U15M", "U16M", "U17M", "U18M" ]),
        scores: z.array(z.number().int().positive()),
    }),
});

export type Game = z.infer<typeof GameSchema>;
