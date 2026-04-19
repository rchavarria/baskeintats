import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const _advanced_game_template: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f1-g1-j1",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-04-20T00:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J1",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 0, 0, 0, 0 ],
  },

  away: {
    club: teams["real-madrid"],
    category: "U16M",
    opponent: true,
    scores: [ 0, 0, 0, 0 ],
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
      {
        label: "Canal CBA/Zilberman",
        url: "https://youtu.be/-",
      },
    ],
  },

  recap: {
    title: "xxx",
    lines: [
      "yyy",
      "zzz",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de ?",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329176624",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93792&proxima_jornada=93793",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/-",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/-",
    },
  ],

});

