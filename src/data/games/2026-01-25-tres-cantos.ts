import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_25_tres_cantos: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j3",
  season: "2025-26",
  date: "2026-01-25T17:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J3",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [19, 16, 19, 19],
  },

  away: {
    club: teams["tres-cantos"],
    category: "U16M",
    scores: [20, 16, 10, 21],
  },

  playerStats: {
    time: 27 * 60 + 54,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 3,
      attempted: 5,
    },
    faults: 3,
    plusMinus: -5,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/HvbrBFalUbk",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/7_bPPN19szc",
      },
    ],
  },

  recap: {
    title: "¡Otro por los pelos!",
    lines: [
      "No sé, pero nos lo vamos a tener que hacer mirar",
      "Ya es el segundo partido que debería haber sido fácil y ha sido muy reñido",
      "Y lo malo no es que esté reñido, si no que son partidos feos, con tropiezos, mosqueos, malos rollos con los árbitros...",
      "No puede ser siempre culpa de otro, tenemos que mirar a qué podemos hacer nosotros, qué podemos mejorar, cómo debemos reaccionar ante las decisiones de los árbitros y de los rivales",
      "Mirándolo bien, ya es el tercer partido seguido que perdemos los papeles, no es buena racha",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103529&proxima_jornada=103530",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13041/crece-la-emoci%C3%B3n-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-13057/sube-la-temperatura-en-la-liga-ahorramas",
    },
  ],
});

