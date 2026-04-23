import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_05_18_real_madrid: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-liga-ahorramas-f4-final",
  season: "2024-25",
  date: "2025-05-18T10:30:00Z",
  type: "advanced-game",

  competition: {
    name: "Liga Ahorramás",
    category: "U15M",
    phase: "Final 4",
    round: "Final",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [20, 15, 13, 14],
  },

  away: {
    club: teams["real-madrid"],
    category: "U15M",
    opponent: true,
    scores: [23, 18, 19, 19],
  },

  playerStats: {
    time: 35 * 60 + 25,
    fieldGoals: {
      made: 3,
      attempted: 6,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 3,
      attempted: 3,
    },
    rebounds: {
      offensive: 1,
      defensive: 1,
    },
    assists: 0,
    steals: 1,
    turnovers: 1,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 0,
      received: 0,
    },
    plusMinus: -25,
    efficiency: 11,
  },

  videos: {
    official: "https://www.youtube.com/live/xDEH_ofn0sU?t=550",
    others: [],
  },

  recap: {
    title: "¡No hubo sorpresa!",
    lines: [
      "Empezamos de manera espectacular, poniéndonos por delante y sacando un poco de ventaja",
      "Creo que les pillamos despistados, luego se pusieron las pilas y en seguida se pusieron delante",
      "No hubo grandes sorpresas, pero fue una final reñida, peleada",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos de la Final a 4",
      url: "https://www.flickr.com/photos/fbmadrid/54528571551/in/album-72177720326204794",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://www.fbm.es/informes.aspx?delegacion=1&grupo=12749&informe=calendario",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-12567/la-hora-de-l@s-infantiles",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12586/el-real-madrid-se-lleva-el-oro-de-madrid-ante-un-pele%C3%B3n-fundal-alcobendas",
    },
    {
      type: "article",
      label: "Fase final de la Liga Ahorramas infantil masculina",
      url: "https://www.fbm.es/noticia-104-12564/fase-final-de-la-liga-ahorramas-infantil-masculina",
    },
  ],
});

