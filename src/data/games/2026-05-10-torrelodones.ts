import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_10_torrelodones: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f3-j1",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-05-10T10:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 3",
    round: "J1",
  },

  venue: venues["torrelodones"],

  home: {
    club: teams["torrelodones"],
    category: "U16M",
    opponent: true,
    scores: [ 0 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 0 ],
  },

  playerStats: {
    time: 0 * 60 + 0,
    fieldGoals: {
      made: 0,
      attempted: 0,
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
    assists: 0,
    steals: 0,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 0,
      received: 0,
    },
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/-",
      },
    ],
  },

  recap: {
    title: "xxx",
    lines: [
      "yyy",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de mayo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/-",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?-",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13264/liga-ahorramas-infantil-cierra-los-cuartos-mirando-a-las-f4",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-999-99999",
    },
  ],

});

