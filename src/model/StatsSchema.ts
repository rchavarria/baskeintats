import { z } from "zod";
import { CategorySchema } from "./CategorySchema.ts";
import { ReferenceSchema } from "./ReferenceSchema.ts";
import { GameSchema, AdvancedGameSchema } from "./GameSchema.ts";

export const StatsSchema = z.object({
  id: z.string(),
  type: z.literal("stats"),
  season: z.string(),
  date: z.iso.datetime(),

  title: z.string(),
  category: CategorySchema,

  // Games included in this phase/tournament
  games: z.array(z.union([GameSchema, AdvancedGameSchema])),

  description: z.array(z.string()),

  references: z.array(ReferenceSchema),
});

export type Stats = z.infer<typeof StatsSchema>;

