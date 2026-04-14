import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_10_18_estudiantes: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-j4",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-10-18T17:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J4",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [17, 14, 16, 13],
  },

  away: {
    club: teams["estudiantes"],
    category: "U16M",
    scores: [29, 22, 20, 26],
  },

  playerStats: {
    time: 14 * 60 + 27,
    fieldGoals: {
      made: 5,
      attempted: 6,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 4,
      attempted: 7,
    },
    rebounds: {
      offensive: 0,
      defensive: 3,
    },
    assists: 0,
    steals: 4,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 3,
    },
    plusMinus: -8,
    efficiency: 16,
  },

  videos: {
    official: "https://youtu.be/sfdMjKufGTo",
    others: [],
  },

  recap: {
    title: "Resignación total",
    lines: [
      "Sabíamos que iba a ser difícil, si no imposible",
      "No se pudo hacer nada. El tercer tiempo y un poco más, parece que pudimos aguantar un poco, pero el cansacio hizo mella y nos hundimos en los últimos minutos",
      "A levantarse y a por el siguiente",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329467187/with/54834936079",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93795&proxima_jornada=93796",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12869/la-liga-ahorramas-vuelve-a-lo-grande",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12886/espect%C3%A1culo-en-la-liga-ahorramas!",
    },
  ],

});

