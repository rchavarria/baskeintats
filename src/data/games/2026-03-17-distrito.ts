import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_17_distrito: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j9",
  season: "2025-26",
  date: "2026-03-17T20:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J9",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [25, 26, 35, 20],
  },

  away: {
    club: teams["distrito"],
    category: "U16M",
    scores: [30, 25, 21, 18],
  },

  playerStats: {
    time: 31 * 60 + 57,
    fieldGoals: 4,
    threePointers: 3,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 3,
    plusMinus: 14,
    efficiency: 14,
  },

  videos: {
    official: "https://youtu.be/Rz7pM0eIsIU",
    others: [
      {
        label: "canal Pou",
        url: "https://youtu.be/xixvyOsdanM",
      },
    ],
  },

  recap: {
    title: "¡Qué pasada! ¡Impresionante!",
    lines: [
      "¡Brutal!",
      "No se puede decir mucho más, ha sido impresionante",
      "Distrito comenzó con todo, a mil por hora, super intensos, pero nosotros conseguíamos seguir el ritmo. Se nos escaparon un poco en el primer cuarto, pero no suficiente",
      "El segundo cuarto nos acercamos un poco más, y después del descanso dimos un puñetazo encima de la mesa y rompimos el partido",
      "Ellos parecían agotados, sus jugadores más grandes ya no daban más de sí, dejaron de defender...",
      "En lo personal, de los mejores partidos que hemos hecho, ¡qué barbaridad!",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103535&proxima_jornada=103536",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13142/liga-ahorramas-solo-vale-ganar",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13155/la-liga-ahorramas-est%C3%A1-desatada!",
    },
  ],
});

