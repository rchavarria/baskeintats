import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_01_05_seleccion_baleares: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cesa-cuartos-final",
  type: "advanced-game",
  season: "2024-25",
  date: "2025-01-05T14:30:00Z",
  favourite: true,

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas 2025",
    category: "U14M",
    phase: "Eliminatorias",
    round: "Cuartos",
  },

  venue: venues["punto-umbria"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [22, 20, 28, 16],
  },

  away: {
    club: teams["seleccion-baleares"],
    category: "U14M",
    opponent: true,
    scores: [18, 13, 11, 13],
  },

  playerStats: {
    time: 22 * 60 + 7,
    fieldGoals: {
      made: 4,
      attempted: 7,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    rebounds: {
      offensive: 4,
      defensive: 4,
    },
    assists: 2,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: 14,
    efficiency: 13,
  },

  videos: {
    official: "https://youtu.be/nQiZUbYNmTY",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-69245",
      },
    ],
  },

  recap: {
    title: "Entramos en terreno desconocido",
    lines: [],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales (gráfico de tiro, comparación equipos...)",
      url: "https://baloncestoenvivo.feb.es/partido/2448989",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/partidos-masculino-3/comunidad-de-madrid-islas-baleares-3",
    },
  ],
});

