import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_22_getafe: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j10",
  season: "2025-26",
  date: "2026-03-22T16:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J10",
  },

  venue: venues["felipe-reyes"],

  home: {
    club: teams["getafe"],
    category: "U16M",
    scores: [11, 13, 16, 10],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [9, 21, 20, 17],
  },

  playerStats: {
    time: 6 * 60 + 11,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: 1,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/8H2vv1SERWA",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/vvTSmRUZSec",
      },
    ],
  },

  recap: {
    title: "¡Un mero trámite!",
    lines: [
      "Partido de trámite, nada más, un sopor de partido",
      "Los más pequeños jugaron poco, venían de hacer un partidazo contra Canoe. Jugaron un poquito para que descansaran los compañeros, pero nada más",
      "El ritmo fue muy bajo, con pocos puntos, aunque nunca dió la impresión de peligrar",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103536&proxima_jornada=103537",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13157/liga-ahorramas-arrancan-los-pre-playoff",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13169/liga-ahorramas-un-espectacular-fin-de-semana-dicta-sentencia",
    },
  ],

});
