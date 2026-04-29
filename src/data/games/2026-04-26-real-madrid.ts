import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_26_real_madrid: Game = GameSchema.parse({
  id: "S56-liga-plata-f3-j1",
  type: "game",
  season: "2025-26",
  date: "2026-04-26T09:15:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 3",
    round: "J1",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [ 13, 17, 18, 13 ],
  },

  away: {
    club: teams["real-madrid"],
    category: "U16M",
    opponent: true,
    scores: [ 36, 32, 17, 20 ],
  },

  playerStats: {
    time: 19 * 60 + 57,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 2,
    plusMinus: -44,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/vGT7oeHt1Bo",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/YOpC7dHnnxs",
      },
    ],
  },

  recap: {
    title: "¡Menuda humillación!",
    lines: [
      "Y nosotros que teníamos alguna esperanza de competir, no de ganar, no, de competir",
      "Pues nada, salimos sin ganas, sin energía, flojitos en defensa...",
      "Y así pasa, nos pasaron por encima como un rodillo, normal",
      "Mal, mal partido, no se puede decir otra cosa",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de abril",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333064636",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15622&informe=resultados-clasificacion-proxima&ultima_jornada=106474&proxima_jornada=106475",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13232/no-va-m%C3%A1s!-l@s-cadetes-se-la-juegan",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13239/liga-ahorramas-los-favoritos-no-fallan-y-se-citan-en-la-f4",
    },
  ],

});
