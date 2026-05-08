import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_02_11_virgen_atocha: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j5",
  type: "game",
  season: "2023-24",
  date: "2024-02-11T16:30:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
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
    category: "U14M",
    scores: [13, 9, 22, 16],
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
    official: "https://youtu.be/HTpCVdsJgEo",
    others: [],
  },

  recap: {
    title: "Último partido de ida, y siguen ganándonos haciendo valer su físico, no su baloncesto, y da un poquito de rabia, porque aquí todos hemos tenido la impresión de que podíamos ganar, pero... los partidos hay que jugarlos",
    lines: [],
  },

  references: [],
});

