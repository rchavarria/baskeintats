import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_11_canoe: Game = GameSchema.parse({
  id: "S56-liga-plata-pre-playoff-j2",
  type: "game",
  season: "2025-26",
  date: "2026-04-11T15:45:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Pre-Playoff",
    round: "J2",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 23, 15, 22, 21 ],
  },

  away: {
    club: teams["canoe"],
    category: "U16M",
    scores: [ 21, 23, 18, 9 ],
  },

  playerStats: {
    time: 29 * 60 + 1,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 1,
    plusMinus: 7,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/hbqBwcFAejc",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/_R8K_S8ehM8",
      },
      {
        label: "Canal CBA/Zilberman",
        url: "https://youtu.be/-",
      },
    ]
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de abril",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?-",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13200/cadete-e-infantil-enfilan-la-recta-final",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-",
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
