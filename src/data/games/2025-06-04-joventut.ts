import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_06_04_joventut: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cec-octavos",
  season: "2024-25",
  date: "2025-06-04T08:30:00Z",
  type: "advanced-game",
  favourite: true,

  competition: {
    name: "Campeonato de España de Clubes",
    category: "U15M",
    phase: "Eliminatorias",
    round: "Octavos",
  },

  venue: venues["aljaraque"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [14, 19, 15, 22],
  },

  away: {
    club: teams["joventut"],
    category: "U15M",
    opponent: true,
    scores: [18, 24, 19, 20],
  },

  playerStats: {
    time: 38 * 60 + 15,
    fieldGoals: {
      made: 5,
      attempted: 11,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 7,
      attempted: 11,
    },
    rebounds: {
      offensive: 3,
      defensive: 11,
    },
    assists: 2,
    steals: 0,
    turnovers: 5,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 4,
      received: 0,
    },
    plusMinus: -1,
    efficiency: 23,
  },

  videos: {
    official: "https://youtu.be/fa0lzw7uXX8",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-72670",
      },
    ],
  },

  recap: {
    title: "¡Mierda!, ¡Mierda! y... ¡Mierda! ¡Eliminados!",
    lines: [
      "No pudo ser",
      "Lo hemos intentado por activa y por pasiva, pero no pudo ser",
      "Hubo un momento en el que todo era posible, estábamos ahí, pero se nos escaparon. Lo volvimos a intentar, pero ya no llegamos",
      "Aún así, creo que uno de los mejores partidos de su carrera",
      "🥰 No puedo estar si no orgulloso, de cómo lo ha peleado, de cómo ha tirado del carro",
      "Hasta aquí ha llegado nuestro Campeonato de España de Clubes",
    ],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales del partido",
      url: "https://baloncestoenvivo.feb.es/partido/2471663",
    },
  ],
});

