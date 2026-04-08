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
    id: "fuenlabrada",
    name: "CB Fuenlabrada",
    logo: "/logos/fuenlabrada.jpg",
    web: "https://cbfuenlabrada.es",
    venue: venues["default"],
  },
  {
    id: "juande",
    name: "CB Juan de Austria",
    logo: "/logos/juande-transparent.png",
    web: "https://juandealcala.es",
    venue: venues["juande"],
  },
  {
    id: "getafe",
    name: "CB Getafe",
    logo: "/logos/getafe-transparent.png",
    web: "https://cbgetafe.es",
    venue: venues["juan-cierva"],
  },
  {
    id: "real-madrid",
    name: "Real Madrid",
    logo: "/logos/real-madrid-transparent.png",
    web: "https://realmadridbasket.com",
    venue: venues["valdebebas"],
  },
  {
    id: "tres-cantos",
    name: "Tres Cantos",
    logo: "/logos/tres-cantos-transparent.png",
    web: "https://cbtrrescantos.es",
    venue: venues["luz"],
  },
];

export const teams: Record<string, Team> = teamList.reduce((acc, team) => {
  acc[team.id] = team;
  return acc;
}, {} as Record<string, Team>);
