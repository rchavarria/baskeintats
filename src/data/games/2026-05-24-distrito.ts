import type {AdvancedGame} from "../../model/GameSchema.ts";
import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_24_distrito: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f3-j3",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-05-24T09:15:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 3",
    round: "J3",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 20, 26, 9, 13 ],
  },

  away: {
    club: teams["distrito"],
    category: "U16M",
    opponent: true,
    scores: [ 13, 15, 25, 18 ],
  },

  playerStats: {
    time: 19 * 60 + 44,
    fieldGoals: {
      made: 2,
      attempted: 4,
    },
    threePointers: {
      made: 0,
      attempted: 5,
    },
    freeThrows: {
      made: 2,
      attempted: 4,
    },
    rebounds: {
      offensive: 0,
      defensive: 0,
    },
    assists: 0,
    steals: 2,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 3,
      received: 4,
    },
    plusMinus: -13,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/f7yVj_eW8xI",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/V7iJR7WXmS0",
      },
    ],
  },

  recap: {
    title: "Lo teníamos, y se nos escapó",
    lines: [
      "Mecachis en la mar, estaba hecho, lo teníamos ahí, solo teníamos que aguantar",
      "Hicimos una primera mitad muy buena, pero no supimos aprovechar esa ventaja",
      "Al volver del descanso nos dieron una buena paliza",
      "Nos intentamos recuperar, pero no pudo ser, y se nos fue el partido en los últimos instantes",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de mayo (parece que solo infantiles)",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333561000/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16719&informe=resultados-clasificacion-proxima&ultima_jornada=108375&proxima_jornada=108376",
    },
  ],

});
