import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_02_24_juande: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j6",
  type: "game",
  season: "2023-24",
  date: "2024-02-24T13:30:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
    phase: "Fase 2",
    round: "J6",
  },

  venue: venues["juande"],

  home: {
    club: teams["juande"],
    category: "U14M",
    opponent: true,
    scores: [22, 12, 25, 13],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [13, 13, 8, 6],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/H39IHT4ZAd0",
    others: [],
  },

  recap: {
    title: "Partido para olvidar, nos hemos centrado más en echarle la culpa a los árbitros (alguno perdió los papeles y lo expulsaron del pabellón) que en jugar, pero es que el rival estaba más preocupado de golpearnos que de jugar a baloncesto",
    lines: [
      "Eso sí, nuestros chicos no dejan de pelear todos los partidos, se va notando que cada vez son más y más fuertes",
    ],
  },

  references: [],
});

