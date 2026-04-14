import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_09_28_rozas: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f1-g1-j2",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-09-28T09:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J2",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [15, 25, 17, 14, 13],
  },

  away: {
    club: teams["rozas"],
    category: "U16M",
    scores: [20, 18, 20, 13, 14],
  },

  playerStats: {
    time: 28 * 60 + 20,
    fieldGoals: {
      made: 3,
      attempted: 6,
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
      defensive: 3,
    },
    assists: 0,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 1,
      received: 3,
    },
    plusMinus: -4,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/aFzknxnw43o",
    others: [],
  },

  recap: {
    title: "¡Se nos escapó!",
    lines: [
      "Me cachis, casi lo teníamos",
      "Empezamos mal, pero conseguimos remontar y ponernos por delante",
      "A falta de un minuto lo teníamos, era nuestro, pero consiguieron empatar y forzar la prórroga",
      "Al comenzar la prórroga cogimos una buena ventaja, pero no supimos gestionarla y se fue al garete",
      "En la última jugada, íbamos 3 arriba, pero un 3+1 que nos metió el sinvergüenza nos fastidió todo el esfuerzo",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93793&proxima_jornada=93794",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12842/liga-ahorramas-m%C3%A1xima-exigencia-desde-el-inicio",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12851/liga-ahorramas-la-emoci%C3%B3n-est%C3%A1-servida",
    },
  ],

});

