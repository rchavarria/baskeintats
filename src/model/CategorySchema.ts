import {z} from "zod";

export const CategorySchema = z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]);

export type Category = z.infer<typeof CategorySchema>;
