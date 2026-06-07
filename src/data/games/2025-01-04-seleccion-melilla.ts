import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_01_04_seleccion_melilla: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cesa-j2",
  type: "advanced-game",
  season: "2024-25",
  date: "2025-01-04T08:30:00Z",

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas",
    category: "U14M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["palos"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [15, 16, 25, 0],
  },

  away: {
    club: teams["seleccion-melilla"],
    category: "U14M",
    opponent: true,
    scores: [2, 3, 0, 0],
  },

  playerStats: {
    time: 6 * 60 + 56,
    fieldGoals: {
      made: 2,
      attempted: 3,
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
      offensive: 0,
      defensive: 0,
    },
    assists: 0,
    steals: 0,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: 11,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/oI-jwZ-w01A",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-69081",
      },
    ],
  },

  recap: {
    title: "El más fácil del campeonato",
    lines: [],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales (gráfico de tiro, comparación equipos...)",
      url: "https://baloncestoenvivo.feb.es/partido/2448974",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/partidos-masculino-3/comunidad-de-madrid-melilla-2",
    },
  ],
});

