import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_03_17_virgen_atocha: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j10",
  type: "game",
  season: "2023-24",
  date: "2024-03-17T10:45:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
    phase: "Fase 2",
    round: "J10",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [31, 19, 20, 24],
  },

  away: {
    club: teams["virgen-atocha"],
    category: "U14M",
    opponent: true,
    scores: [18, 19, 14, 25],
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
    official: "https://youtu.be/2m3PFBTTKuE",
    others: [
      {
        label: "🆚 Virgen de Atocha (2010)",
        url: "https://youtu.be/1gmURHPCDTc",
      },
    ],
  },

  recap: {
    title: "¡Hoy sí! ¡Por fin!",
    lines: [
      "Hoy ha sido el día, y el rival ha sido la víctima. Los chicos han demostrado hoy todo lo que han aprendido en esta segunda fase, todo lo que han mejorado, barriendo a un rival contra el que no tuvieron ninguna opción en la ida",
      "Hoy han sido los nuestros los que no han dado opción y han barrido desde el inicio. Y en el Antela, a pista completa. ¡Qué bonito ha sido! 🤩",
    ],
  },

  references: [],
});

