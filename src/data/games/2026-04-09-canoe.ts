import type {ScheduledGame} from "../../model/GameSchema.ts";
import {ScheduledGameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_09_canoe: ScheduledGame = ScheduledGameSchema.parse({
  id: "S56-u15-league-silver-pre-playoff",
  type: "scheduled",
  season: "2025-26",
  date: "2026-03-29T12:30:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Pre-Playoff",
    round: "J1",
  },

  venue: venues["pez-volador"],

  home: {
    club: teams["canoe"],
    category: "U16M",
    scores: [],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/-",
      }
    ]
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de abril",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      // url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15621&informe=resultados-clasificacion-proxima&ultima_jornada=104770&proxima_jornada=-1",
      url: "https://fbm.es/informes.aspx?-",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13200/cadete-e-infantil-enfilan-la-recta-final",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-",
    },
  ],

  recap: {
    title: "¡xxx!",
    lines: [
      "yyy",
      "yyy",
      "yyy",
      "yyy",
    ],
  },

});
