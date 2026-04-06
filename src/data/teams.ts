import type {Team} from "../model/TeamSchema.ts";
import { venues } from "./venues.ts";

const teamList: Team[] = [
  {
    id: "alcobendas",
    name: "CB Alcobendas",
    logo: "/logos/alcobendas-transparent.png",
    web: "https://cbalcobendas.com",
    venue: venues["antela"],
  },
  {
    id: "canoe",
    name: "Real Canoe",
    logo: "/logos/canoe-transparent.png",
    web: "https://canoe.com",
    venue: venues["pez-volador"],
  },
  {
    id: "distrito",
    name: "Distrito Olímpico",
    logo: "/logos/distrito-olimpico-transparent.png",
    web: "https://distrito.com",
    venue: venues["circular"],
  },
  {
    id: "getafe",
    name: "CB Getafe",
    logo: "/logos/getafe-transparent.png",
    web: "https://cbgetafe.es",
    venue: venues["juan-cierva"],
  },
];

export const teams: Record<string, Team> = teamList.reduce((acc, team) => {
  acc[team.id] = team;
  return acc;
}, {} as Record<string, Team>);
