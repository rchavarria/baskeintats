import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_09_canoe: Game = GameSchema.parse({
  id: "S56-liga-plata-pre-playoff-j1",
  type: "game",
  season: "2025-26",
  date: "2026-04-09T18:45:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Pre-Playoff",
    round: "J1",
  },

  venue: venues["pez-volador"],

  home: {
    club: teams["canoe"],
    category: "U16M",
    opponent: true,
    scores: [ 16, 23, 25, 20 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 27, 11, 21, 20 ],
  },

  playerStats: {
    time: 24 * 60 + 28,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 2,
    plusMinus: -6,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/MlD9jhlmjTo",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/2jaAtyvSj0k",
      },
      {
        label: "Canal CBA/Zilberman",
        url: "https://youtu.be/-",
      },
    ]
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de abril",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15632&informe=resultados-clasificacion-proxima&ultima_jornada=106410&proxima_jornada=-1",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13200/cadete-e-infantil-enfilan-la-recta-final",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-13212/cadetes-e-infantiles-aseguran-la-emoci%C3%B3n",
    },
  ],

  recap: {
    title: "¡No hombre noooo!",
    lines: [
      "Arrancamos super bien, rápidos, contraatacando, aprovechando la falta de acierto del rival...",
      "Pero nos duró poco la alegría, en el segundo cuarto nos alcanzaron y superaron",
      "El resto del partido fue bastante igualado, pero no conseguimos recuperar la ventaja y nos quedamos con la miel en los labios",
      "Ahora nos quedan dos finales, si perdemos, para casa",
    ],
  },

});
