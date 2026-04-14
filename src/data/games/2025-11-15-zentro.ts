import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_11_15_zentro: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j7",
  season: "2025-26",
  date: "2025-11-15T10:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J7",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [21, 21, 23, 21],
  },

  away: {
    club: teams["zentro"],
    category: "U15M",
    scores: [17, 15, 21, 23],
  },

  playerStats: {
    time: 28 * 60 + 13,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 4,
    },
    faults: 4,
    plusMinus: 8,
    efficiency: 4,
  },

  videos: {
    official: "https://youtu.be/OEedYKmKKDU",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/FTOdUThInEM",
      },
    ],
  },

  recap: {
    title: "¡Uy qué justito!",
    lines: [
      "Por el resultado parece que no, pero el partido estuvo muy igualado y emocionante",
      "Comenzó bastante igualado, aunque todo apuntaba a que nosotros lo teníamos más de nuestro lado",
      "Pero hubo un momento, donde rompimos el partido y tomamos una ventaja considerable",
      "Luego, hubo algunos sustos, fuimos flojos en el balance defensivo y metían canastas fáciles, por eso digo que estuvo muy emocionante",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720330208384/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93838&proxima_jornada=93839",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12920/grandes-duelos-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12931/sube-la-temperatura-en-la-liga-ahorramas",
    },
  ],
});

