import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_10_zentro: Game = GameSchema.parse({
  id: "S56-liga-plata-f3-j2",
  type: "game",
  season: "2025-26",
  date: "2026-05-10T15:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 3",
    round: "J2",
  },

  venue: venues["diaz-miguel"],

  home: {
    club: teams["zentro"],
    category: "U16M",
    opponent: true,
    scores: [ 0 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [ 0 ],
  },

  playerStats: {
    time: 0 * 60 + 0,
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
    official: "https://youtu.be/-",
    others: [
      {
        label: "Canal CBA",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15622&informe=resultados-clasificacion-proxima&ultima_jornada=106475&proxima_jornada=106476",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13264/liga-ahorramas-infantil-cierra-los-cuartos-mirando-a-las-f4",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-999-99999",
    },
  ],

});
