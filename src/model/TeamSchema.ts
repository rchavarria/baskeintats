import {z} from "zod";
import {VenueSchema} from "./VenueSchema.ts";

export const TeamSchema = z.object({
    id: z.string(),
    name: z.string(),
    logo: z.string(),
    web: z.url(),
    venue: VenueSchema,
});

export type Team = z.infer<typeof TeamSchema>;
