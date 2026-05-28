import type {AdvancedGame} from "../../model/GameSchema.ts";
import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_14_fuenlabrada: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f3-j5",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-05-14T18:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 3",
    round: "J5",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 14, 23, 24, 18 ],
  },

  away: {
    club: teams["fuenlabrada"],
    category: "U16M",
    opponent: true,
    scores: [ 27, 21, 34, 35 ],
  },

  playerStats: {
    time: 23 * 60 + 41,
    fieldGoals: {
      made: 0,
      attempted: 2,
    },
    threePointers: {
      made: 0,
      attempted: 2,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 2,
      defensive: 1,
    },
    assists: 0,
    steals: 1,
    turnovers: 1,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 4,
      received: 1,
    },
    plusMinus: -33,
    efficiency: -4,
  },

  videos: {
    official: "https://youtu.be/MQDhN5svKF4",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/Ij3Qf3jrbMs",
      },
    ],
  },

  recap: {
    title: "¡¡ Pfff, no ha sentado nada bien !!",
    lines: [
      "Un pequeño parón, y toda la forma física se va al traste",
      "Eso, y el hartazgo de tener que defender a hombres que te sacan una cabeza, un brazo de ancho y 5 años",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16719&informe=resultados-clasificacion-proxima&ultima_jornada=108377&proxima_jornada=108378",
    },
  ],

});
