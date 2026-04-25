import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_01_04_seleccion_canarias: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cesa-j3",
  type: "advanced-game",
  season: "2024-25",
  date: "2025-01-04T16:30:00Z",

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas 2025",
    category: "U14M",
    phase: "Grupos",
    round: "J3",
  },

  venue: venues["andres-estrada"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [14, 26, 19, 21],
  },

  away: {
    club: teams["seleccion-canarias"],
    category: "U14M",
    opponent: true,
    scores: [11, 16, 19, 15],
  },

  playerStats: {
    time: 12 * 60 + 21,
    fieldGoals: {
      made: 4,
      attempted: 8,
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
      defensive: 1,
    },
    assists: 0,
    steals: 0,
    turnovers: 1,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 3,
      received: 0,
    },
    plusMinus: 10,
    efficiency: 4,
  },

  videos: {
    official: "https://youtu.be/E2rIHEnlUqk",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-69140",
      },
    ],
  },

  recap: {
    title: "La primera prueba de fuego",
    lines: [
      "Ya jugamos contra ellos un amistoso, preparando el Campeonato. Veamos cuánto se guardó cada uno aquel día.",
      "Clasificamos primeros de grupo, y como tales, nuestro rival debería ser un rival asequible, el segundo de otro grupo",
      "Pero no por ello debemos confiarnos",
    ],
  },

  references: [
    {
      type: "stats",
      label: "Estadísticas oficiales (gráfico de tiro, comparación equipos...)",
      url: "https://baloncestoenvivo.feb.es/partido/2448975",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/partidos-masculino-3/canarias-comunidad-de-madrid-1",
    },
    {
      type: "photo",
      label: "y más",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/partidos-masculino-3/canarias-comunidad-de-madrid-2",
    },
  ],
});

