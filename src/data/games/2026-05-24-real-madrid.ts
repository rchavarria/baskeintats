import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_24_real_madrid: Game = GameSchema.parse({
  id: "S56-liga-plata-f3-j3",
  type: "game",
  season: "2025-26",
  date: "2026-05-24T15:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 3",
    round: "J3",
  },

  venue: venues["valdebebas"],

  home: {
    club: teams["real-madrid"],
    category: "U15M",
    opponent: true,
    scores: [ 20, 23, 22, 19 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [ 13, 14, 16, 21 ],
  },

  playerStats: {
    time: 24 * 60 + 11,
    fieldGoals: 5,
    threePointers: 1,
    freeThrows: {
      made: 6,
      attempted: 7,
    },
    faults: 1,
    plusMinus: -4,
    efficiency: 17,
  },

  videos: {
    official: "https://youtu.be/qAzwzR3lHeo",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/X_ahCIKrEAc",
      },
    ],
  },

  recap: {
    title: "Pintaba mal, pero conseguimos maquillarlo",
    lines: [
      "Uff, pintaba mal, muy mal. Recuerdos del anterior partido, perdiendo de muchísimo",
      "Pero al final no fue tanto, conseguimos rehacernos un pelín en la segunda mitad",
      "Pero tenemos ciertos bajones de vez en cuando, y el Madrid no perdona, en cuanto te relajas un poco, te meten 10 puntos",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15622&informe=resultados-clasificacion-proxima&ultima_jornada=106477&proxima_jornada=106478",
    },
  ],

});
