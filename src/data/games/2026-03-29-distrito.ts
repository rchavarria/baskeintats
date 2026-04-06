import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_29_distrito: Game = GameSchema.parse({
  id: "S56-u15-league-silver-play-in",
  season: "2025-26",
  date: "2026-03-29T12:30:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Play-in",
    round: "J1",
  },

  venue: venues["circular"],

  home: {
    club: teams["distrito"],
    category: "U16M",
    scores: [16, 27, 22, 25],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [17, 10, 20, 17],
  },

  playerStats: {
    time: 24 * 60 + 14,
    fieldGoals: 4,
    threePointers: 1,
    freeThrows: {
      made: 1,
      attempted: 3,
    },
    faults: 2,
    plusMinus: -22,
    efficiency: 8,
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
      label: "Fotos del mes de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15621&informe=resultados-clasificacion-proxima&ultima_jornada=104770&proxima_jornada=-1",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13173/liga-ahorramas-j%C3%BAnior-busca-los-primeros-finalistas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13182/la-liga-ahorramas-j%C3%BAnior-ya-tiene-finalistas",
    },
  ],

  recap: {
    title: "¡Se acabó el sueño!",
    lines: [
      "Sabíamos que era muy complicado, casi imposible, pero durante el primer cuarto, todavía creíamos.",
      "Hasta que llegó el segundo, y la realidad nos pegó en toda la cara.",
      "Después del descanso, aún peleamos un poco, pero era imposible hacer nada contra las 3 torres (o más) suyas, imposible. Tirábamos mucho de 3, pero no teníamos acierto.",
      "Y hasta aquí ha llegado la competición. Creo que podemos estar muy contentos con el resultado.",
    ],
  },

});
