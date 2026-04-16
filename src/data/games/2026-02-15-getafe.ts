import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_02_15_getafe: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j6",
  season: "2025-26",
  date: "2026-02-15T12:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Grupo B",
    round: "J6",
  },

  venue: venues["juan-cierva"],

  home: {
    club: teams["getafe"],
    category: "U16M",
    opponent: true,
    scores: [12, 14, 16, 8],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [14, 33, 18, 15],
  },

  playerStats: {
    time: 4 * 60 + 56,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 4,
    plusMinus: 1,
    efficiency: -2,
  },

  videos: {
    official: "https://youtu.be/8hSz72nwfwQ",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/xy009G0BiAU",
      },
    ],
  },

  recap: {
    title: "¡Victoria fácil!",
    lines: [
      "El rival no opuso resistencia ninguna",
      "En lo personal, una mierda de partido, olvidarlo cuanto antes",
      "2 mierdas de faltas al comenzar, pero mierdas mierdas, más inocentes que todas las cosas",
      "Y después de la tercera, la técnica, ¡JODER!",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de febrero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331775796/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103472&proxima_jornada=103473",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13088/liga-ahorramas-comienza-la-segunda-vuelta",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13096/comienza-la-cuenta-atr%C3%A1s-en-la-liga-ahorramas",
    },
  ],
});

