import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_03_03_canoe: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j8",
  type: "game",
  season: "2023-24",
  date: "2024-03-03T12:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U13M",
    phase: "Fase 2",
    round: "J8",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [19, 10, 12, 16],
  },

  away: {
    club: teams["canoe"],
    category: "U14M",
    opponent: true,
    scores: [21, 11, 25, 6],
  },

  playerStats: {
    time: 34 * 60 + 8,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: { made: 4, attempted: 6 },
    faults: 1,
    plusMinus: -4,
    efficiency: 13,
  },

  videos: {
    official: "https://youtu.be/C1CCWXXNIbk",
    others: [],
  },

  recap: {
    title: "Esta segunda vuelta está siendo espectacular",
    lines: [
      "Antes del partido, algún padre del rival bromeaba con cerrarnos marcador.",
      "Si se despistan un poco, les ganamos. Lo hemos tenido ahí, pero se nota que son un año mayores, y lo pagamos. Cansancio, físico, lo que sea. Pero nos falta un pelín",
    ],
  },

  references: [],
});

