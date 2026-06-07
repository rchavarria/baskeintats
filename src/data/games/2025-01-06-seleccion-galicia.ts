import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_01_06_seleccion_galicia: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cesa-semi-final",
  type: "advanced-game",
  season: "2024-25",
  date: "2025-01-06T18:30:00Z",

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas",
    category: "U14M",
    phase: "Eliminatorias",
    round: "Semis",
  },

  venue: venues["andres-estrada"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [19, 26, 20, 14],
  },

  away: {
    club: teams["seleccion-galicia"],
    category: "U14M",
    opponent: true,
    scores: [11, 10, 12, 12],
  },

  playerStats: {
    time: 20 * 60 + 49,
    fieldGoals: {
      made: 0,
      attempted: 1,
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
      offensive: 2,
      defensive: 5,
    },
    assists: 0,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 5,
      received: 0,
    },
    plusMinus: 1,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/yztoBtOuZeo",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-69346",
      },
      {
        label: "Baloncesto España",
        url: "https://youtu.be/zfcV5PTJWik",
      },
    ],
  },

  recap: {
    title: "¡¡Semis!!",
    lines: [
      "Contra el equipo que ha eliminado a Cataluña, cuidadín",
    ],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales (gráfico de tiro, comparación equipos...)",
      url: "https://baloncestoenvivo.feb.es/partido/2448991",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/partidos-masculino-3/galicia-comunidad-de-madrid",
    },
  ],
});

