import {z} from "zod";

export const VenueSchema = z.object({
    id: z.string(),
    name: z.string(),
    maps: z.url(),
});

export type Venue = z.infer<typeof VenueSchema>;
