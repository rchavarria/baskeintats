import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_01_07_seleccion_valencia: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cesa-final",
  type: "advanced-game",
  season: "2024-25",
  date: "2025-01-07T10:30:00Z",
  favourite: true,

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas",
    category: "U14M",
    phase: "Eliminatorias",
    round: "Final",
  },

  venue: venues["andres-estrada"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [28, 23, 18, 22],
  },

  away: {
    club: teams["seleccion-valencia"],
    category: "U14M",
    opponent: true,
    scores: [21, 25, 25, 18],
  },

  playerStats: {
    time: 13 * 60 + 10,
    fieldGoals: {
      made: 2,
      attempted: 2,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    rebounds: {
      offensive: 0,
      defensive: 4,
    },
    assists: 1,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 4,
      received: 0,
    },
    plusMinus: 10,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/DHGB6j-ZQ4o",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-69369",
      },
      {
        label: "Baloncesto España",
        url: "https://youtu.be/Xe2qPNgaSGg",
      },
    ],
  },

  recap: {
    title: "¡¡CAMPEONES DE ESPAÑA!!",
    lines: [
      "¡¡Final!! ¡¡Final!! ¡¡Final!! ",
      "Da igual el resultado, haber llegado hasta aquí es la *%&$",
    ],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales (gráfico de tiro, comparación equipos...)",
      url: "https://baloncestoenvivo.feb.es/partido/2448992",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/partidos-masculino-3/comunidad-valenciana-comunidad-de-madrid-1",
    },
  ],
});

