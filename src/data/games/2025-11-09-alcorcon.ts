import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_11_09_alcorcon: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j6",
  season: "2025-26",
  date: "2025-11-09T12:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J6",
  },

  venue: venues["canaleja"],

  home: {
    club: teams["alcorcon"],
    category: "U16M",
    scores: [22, 21, 17, 26],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [12, 19, 18, 23],
  },

  playerStats: {
    time: 13 * 60 + 45,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: -17,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/_sLqayLdhh8",
    others: [],
  },

  recap: {
    title: "¡Mierda!",
    lines: [
      "La sensación es que podríamos haber ganado, pero no jugamos bien",
      "Muchas pérdidas, momentos de caos, flojos en defensa...",
      "Las típicas quejas cuando no juegas bien, pero, ¡ay!, cómo duelen esas pérdidas",
      "A aprender y a por el siguiente",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93837&proxima_jornada=93838",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12908/ya-ha-empezado-la-segunda-vuelta-de-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12918/liga-ahorramas-menos-invictos,-m%C3%A1s-emoci%C3%B3n",
    },
  ],
});

