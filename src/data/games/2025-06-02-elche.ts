import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_06_02_elche: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cec-grupos-j2",
  season: "2024-25",
  date: "2025-06-02T08:30:00Z",
  type: "advanced-game",

  competition: {
    name: "Campeonato de España de Clubes",
    category: "U15M",
    phase: "Fase de grupos",
    round: "J2",
  },

  venue: venues["aljaraque"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [13, 23, 17, 7],
  },

  away: {
    club: teams["elche"],
    category: "U15M",
    opponent: true,
    scores: [20, 16, 23, 29],
  },

  playerStats: {
    time: 40 * 60 + 0,
    fieldGoals: {
      made: 7,
      attempted: 11,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 0,
      attempted: 1,
    },
    rebounds: {
      offensive: 1,
      defensive: 4,
    },
    assists: 1,
    steals: 1,
    turnovers: 5,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: -28,
    efficiency: 11,
  },

  videos: {
    official: "https://youtu.be/4Unna_0boMA",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-72602",
      },
    ],
  },

  recap: {
    title: "¡Creíamos que sí, pero no!",
    lines: [
      "Por unos momentos pensábamos que podíamos con ellos, pero el partido es muy largo que el físico de los dos grandullones ha sido insuperable",
      "Nos hemos hundido en el último cuarto, nos han arrollado",
      "Y hoy nos hemos acordado de la ventaja de puntos cedida ayer. Esperemos que mañana Elche no haga el tonto, porque nos podemos quedar fuera si hay un triple empate y salimos perjudicados por el basketaverage",
    ],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales del partido",
      url: "https://baloncestoenvivo.feb.es/partido/2471615",
    },
  ],
});

