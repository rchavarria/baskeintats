import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_06_03_barca: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cec-grupos-j3",
  season: "2024-25",
  date: "2025-06-03T10:30:00Z",
  type: "advanced-game",

  competition: {
    name: "Campeonato de España de Clubes",
    category: "U15M",
    phase: "Fase de grupos",
    round: "J3",
  },

  venue: venues["gil-hernandez"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [21, 12, 1, 0],
  },

  away: {
    club: teams["barca"],
    category: "U15M",
    opponent: true,
    scores: [18, 35, 32, 0],
  },

  playerStats: {
    time: 21 * 60 + 23,
    fieldGoals: {
      made: 2,
      attempted: 4,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 4,
      attempted: 4,
    },
    rebounds: {
      offensive: 0,
      defensive: 2,
    },
    assists: 0,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 1,
      received: 0,
    },
    plusMinus: -34,
    efficiency: 11,
  },

  videos: {
    official: "https://youtu.be/46UMTkz6_8o",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-72644",
      },
    ],
  },

  recap: {
    title: "¡Imposible!",
    lines: [
      "Comenzamos muy muy bien. Llegábamos con esperanzas simplemente de competir, no teníamos ninguna opción de ganar. Pero comenzamos bien",
      "En ningún momento tuvimos oportunidad de nada, pero sí que vimos al contrincante un poco nervioso. Creo que tenían en mente cerrar marcador mucho antes",
      "Pero la alegría duró poco, en el tercer cuarto desfallecimos físicamente y nos arrollaron en un momento",
      "En otro orden de cosas, en paralelo, Elche hizo su trabajo, ganó y conseguimos clasificarnos como terceros de grupo. Por los pelos, pero seguimos un día más",
    ],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales del partido",
      url: "https://baloncestoenvivo.feb.es/partido/2471617",
    },
  ],

});
