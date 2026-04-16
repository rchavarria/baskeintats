import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_12_13_patrocinio: Game = GameSchema.parse({
  id: "S56-liga-oro-f1-g1-j8",
  type: "game",
  season: "2025-26",
  date: "2025-12-13T12:15:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J8",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [22, 18, 15, 18],
  },

  away: {
    club: teams["patrocinio"],
    category: "U16M",
    opponent: true,
    scores: [27, 18, 20, 15],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/C_to-RQhfK4",
    others: [],
  },

  recap: {
    title: "",
    lines: [],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de diciembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720330932743",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93799&proxima_jornada=93800",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12977/liga-ahorramas-suspense-hasta-el-final",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12989/concluye-la-primera-fase-de-la-liga-ahorramas",
    },
  ],

});

