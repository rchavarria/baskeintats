import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_22_san_jorge: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-g1-j8",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-22T17:30:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J8",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [25, 24, 15, 19],
  },

  away: {
    club: teams["san-jorge"],
    category: "U18M",
    opponent: true,
    scores: [9, 12, 21, 20],
  },

  playerStats: {
    time: 10 * 60 + 55,
    fieldGoals: {
      made: 1,
      attempted: 1,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 0,
      defensive: 0,
    },
    assists: 1,
    steals: 0,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 1,
    },
    faults: {
      made: 0,
      received: 0,
    },
    plusMinus: 4,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/-x7Mc2iG6qs",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/r9tSxYGEUQ4",
      },
    ],
  },

  recap: {
    title: "Otra a la buchaca",
    lines: [
      "En el partido de ida, San Jorge nos pasó por encima",
      "En esta ocasión, hemos sido nosotros los mejores",
      "El partido comenzó igualadillo, pero pronto pusimos tierra de por medio",
      "Con africanos o sin ellos, fueron incapaces de remontarnos",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720336815217",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17494 = Liga Ahorramás - Junior - Oro
      // ...
      // F1 - J8 = 110617
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110617&proxima_jornada=110618",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13629/duelos-directos-y-lideratos-en-juego-en-la-liga-ahorramas",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-104-13639/liga-ahorramas-emoci%C3%B3n-hasta-el-final",
    },
  ],
});
