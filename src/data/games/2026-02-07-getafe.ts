import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_02_07_getafe: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j5",
  season: "2025-26",
  date: "2026-02-07T16:00:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J5",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [30, 21, 22, 18],
  },

  away: {
    club: teams["getafe"],
    category: "U16M",
    scores: [15, 20, 11, 15],
  },

  playerStats: {
    time: 18 * 60 + 13,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 6,
      attempted: 8,
    },
    faults: 1,
    plusMinus: 10,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/Ntpo00khi5k",
    others: [
      {
        label: "canal Pou",
        url: "https://youtu.be/GVjBouD0_aA",
      },
    ],
  },

  recap: {
    title: "¡Qué fácil!",
    lines: [
      "Más fácil de lo esperado",
      "El Getafe B se presentó con unos tiarrones gigantescos, y el A... Con chavales normales",
      "Pero bueno, el partido se solucionó en el primer cuarto, donde sacamos ya una ventaja considerable, y el resto del partido fue de trámite, sin sufrir",
      "Otra victoria más, y nos deja una clasificación bastante favorable",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de febrero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331775796/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103531&proxima_jornada=103532",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13074/duelos-de-altura-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13082/liga-ahorramas-que-el-ritmo-no-pare",
    },
  ],
});

