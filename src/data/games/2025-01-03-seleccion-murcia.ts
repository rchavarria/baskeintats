import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_01_03_seleccion_murcia: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cesa-j1",
  type: "advanced-game",
  season: "2024-25",
  date: "2025-01-03T12:30:00Z",

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas 2025",
    category: "U14M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["andres-estrada"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [19, 26, 26, 16],
  },

  away: {
    club: teams["seleccion-murcia"],
    category: "U14M",
    opponent: true,
    scores: [9, 13, 11, 4],
  },

  playerStats: {
    time: 13 * 60 + 9,
    fieldGoals: {
      made: 1,
      attempted: 3,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 1,
      defensive: 2,
    },
    assists: 0,
    steals: 0,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 3,
      received: 0,
    },
    plusMinus: 22,
    efficiency: -2,
  },

  videos: {
    official: "https://youtu.be/r2aMJlFoI5I",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-69044",
      },
    ],
  },

  recap: {
    title: "Primer partido del campeonato",
    lines: [
      "Contra Murcia, que debería ser un rival asequible",
    ],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales (gráfico de tiro, comparación equipos...)",
      url: "https://baloncestoenvivo.feb.es/partido/2448972",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/partidos-masculino-3/comunidad-de-madrid-region-de-murcia",
    },
  ],
});

