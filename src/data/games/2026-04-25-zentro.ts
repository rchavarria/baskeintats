import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_25_zentro: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-playoffs-j2",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-04-25T12:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Playoffs",
    round: "J2",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [],
  },

  away: {
    club: teams["zentro"],
    category: "U16M",
    opponent: true,
    scores: [],
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
      // {
      //   label: "Canal CBA/Zilberman",
      //   url: "https://youtu.be/-",
      // },
    ],
  },

  recap: {
    title: "xxx",
    lines: [
      "yyy",
      "yyy",
      "yyy",
      "yyy",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de abril",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333064636/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16446&informe=resultados-clasificacion-proxima&ultima_jornada=107208&proxima_jornada=107209",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13232/no-va-m%C3%A1s!-l@s-cadetes-se-la-juegan",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/-",
    },
  ],

});

