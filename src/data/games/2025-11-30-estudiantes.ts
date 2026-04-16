import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_11_30_estudiantes: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f1-g1-j9",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-11-30T10:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J9",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["estudiantes"],
    category: "U16M",
    opponent: true,
    scores: [31, 32, 22, 18],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [15, 7, 18, 12],
  },

  playerStats: {
    time: 20 * 60 + 27,
    fieldGoals: {
      made: 3,
      attempted: 3,
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
      defensive: 2,
    },
    assists: 0,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 4,
      received: 2,
    },
    plusMinus: -32,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/wnIlTg-M_7A",
    others: [],
  },

  recap: {
    title: "¡No se pudo hacer nada!",
    lines: [
      "Salimos un poco decepcionados, creo que lo hicimos peor de lo que esperábamos",
      "Veníamos haciendo buenos partidos, y hoy había esperanzas de hacerlo bien",
      "Pero trajeron a un gigante, y nos entró el canguelo",
      "Un primer cuarto flojo, y un segundo más flojo todavía lastraron todo",
      "Pero no bajaron los brazos del todo y siguieron compitiendo",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720330208384/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93800&proxima_jornada=93801",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12956/liga-ahorramas-nadie-quiere-quedarse-atr%C3%A1s",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12967/liga-ahorramas-emoci%C3%B3n-hasta-el-final",
    },
  ],

});

