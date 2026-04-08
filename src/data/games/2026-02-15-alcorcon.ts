import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_02_15_alcorcon: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j6",
  season: "2025-26",
  date: "2026-02-15T17:00:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J6",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [17, 12, 23, 22],
  },

  away: {
    club: teams["alcorcon"],
    category: "U16M",
    scores: [8, 19, 17, 18],
  },

  playerStats: {
    time: 22 * 60 + 26,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 2,
    plusMinus: 16,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/IMp5Zc5Q6qM",
    others: [
      {
        label: "canal Pou",
        url: "https://youtu.be/KaufUopSJm0",
      },
    ],
  },

  recap: {
    title: "¡Parece fácil, pero no!",
    lines: [
      "El resultado parece que dice que el partido fue fácil, pero en realidad, fue más ajustado",
      "Hubo momentos de bajón, donde nuestra posición peligraba",
      "Hubo otros momentos de relajación, donde el rival acortaba nuestra ventaja",
      "Al final, los chicos echaron el resto, el partido se enderezó, y conseguimos una victoria super importante que nos deja en buena posición para conseguir la primera plaza del grupo",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103532&proxima_jornada=103533",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13088/liga-ahorramas-comienza-la-segunda-vuelta",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13096/comienza-la-cuenta-atr%C3%A1s-en-la-liga-ahorramas",
    },
  ],
});

