import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_09_20_real_madrid: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f1-g1-j1",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-09-20T09:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J1",
  },

  venue: venues["valdebebas"],

  home: {
    club: teams["real-madrid"],
    category: "U16M",
    opponent: true,
    scores: [38, 38, 30, 26],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [9, 12, 9, 7],
  },

  playerStats: {
    time: 17 * 60 + 48,
    fieldGoals: {
      made: 2,
      attempted: 5,
    },
    threePointers: {
      made: 0,
      attempted: 1,
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
    turnovers: 5,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 2,
      received: 1,
    },
    plusMinus: -49,
    efficiency: -5,
  },

  videos: {
    official: "https://youtu.be/hnspnJ7Qous",
    others: [],
  },

  recap: {
    title: "Ninguna sorpresa",
    lines: [
      "Esperábamos ser arrollados, y así fue",
      "Si podemos sacar algo positivo es la actitud de los chicos, que siguieron peleando hasta el último segundo",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de septiembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329176624",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93792&proxima_jornada=93793",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12834/liga-ahorramas-menudo-inicio-de-competici%C3%B3n!",
    },
  ],

});

