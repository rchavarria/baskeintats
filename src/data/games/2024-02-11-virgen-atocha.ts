import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_02_11_virgen_atocha: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j5",
  type: "game",
  season: "2023-24",
  date: "2024-02-11T15:30:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U13M",
    phase: "Fase 2",
    round: "J5",
  },

  venue: venues["stella-maris"],

  home: {
    club: teams["virgen-atocha"],
    category: "U14M",
    opponent: true,
    scores: [20, 19, 21, 19],
  },

  away: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [13, 9, 22, 16],
  },

  playerStats: {
    time: 17 * 60 + 41,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: { made: 1, attempted: 2 },
    faults: 3,
    plusMinus: -2,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/HTpCVdsJgEo",
    others: [],
  },

  recap: {
    title: "Último partido de ida, y siguen ganándonos haciendo valer su físico, no su baloncesto, y da un poquito de rabia, porque aquí todos hemos tenido la impresión de que podíamos ganar, pero... los partidos hay que jugarlos",
    lines: [],
  },

  references: [],
});

