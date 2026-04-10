import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_31_distrito: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j4",
  season: "2025-26",
  date: "2026-01-31T19:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J4",
  },

  venue: venues["circular"],

  home: {
    club: teams["distrito"],
    category: "U16M",
    scores: [24, 29, 21, 20],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [20, 19, 23, 26],
  },

  playerStats: {
    time: 17 * 60 + 31,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,
    plusMinus: -1,
    efficiency: -3,
  },

  videos: {
    official: "https://youtu.be/qbFVj7hIX08",
    others: [
      {
        label: "canal Pou",
        url: "https://youtu.be/ZHkE7K6ymzw",
      },
    ],
  },

  recap: {
    title: "¡Ayyy, por qué poquito!",
    lines: [
      "Veníamos esperando un palizón, y casi damos la sorpresa",
      "Llevábamos una racha mala, de jugar mal, ganando, pero jugando mal",
      "Aquí hemos roto la racha: hemos jugado bien, pero hemos perdido",
      "Las sensaciones son buenas, han luchado, han corrido, han competido. Pero no hemos podido con ellos",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de enero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331399343/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103530&proxima_jornada=103531",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13061/la-liga-ahorramas-ya-apunta-a-la-cima",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-13069/liga-ahorramas-el-espect%C3%A1culo-contin%C3%BAa",
    },
  ],
});

