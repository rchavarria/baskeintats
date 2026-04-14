import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_12_canoe: Game = GameSchema.parse({
  id: "S56-liga-plata-pre-playoff-j3",
  type: "game",
  season: "2025-26",
  date: "2026-04-12T12:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Pre-Playoff",
    round: "J3",
  },

  venue: venues["pez-volador"],

  home: {
    club: teams["canoe"],
    category: "U16M",
    scores: [ 11, 14, 18, 17 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 17, 19, 19, 25 ],
  },

  playerStats: {
    time: 22 * 60 + 14,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,
    plusMinus: 22,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/pbJQ5W0Lb3Q",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/cmhKKDqgecs",
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
    title: "¡Así sí!",
    lines: [
      "Arrancamos bien el partido, con menos ventaja que el anterior, pero con buen ritmo",
      "Toda la primera mitad estuvo muy ajustada, hasta el final del segundo cuarto, donde nos vinimos un poco abajo y consiguieron sacarnos ventaja",
      "Pero a la vuelta del descanso volvimos con las ideas claras, y poco a poco fuimos reduciendo la ventaja",
      "Pero no fue hasta mitad del último cuarto que pudimos ponernos por delante",
      "Y eso fue decisivo, el rival se vino abajo, y en 2 minutos pusimos tierra de por medio",
      "A por el tercer partido y el desempate, que promete ser más intenso todavía si cabe",
    ],
  },

});
