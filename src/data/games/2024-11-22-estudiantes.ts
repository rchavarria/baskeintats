import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_11_22_estudiantes: FriendlyGame = FriendlyGameSchema.parse({
  id: "S45-torneo-fll-j1",
  type: "friendly-game",
  season: "2024-25",
  date: "2024-11-22T17:00:00Z",

  competition: {
    name: "XV Torneo FLL",
    category: "U14M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["triangulo-oro"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [13, 19, 24, 7],
  },

  away: {
    club: teams["estudiantes"],
    category: "U15M",
    opponent: true,
    scores: [18, 23, 31, 28],
  },

  playerStats: {
    time: 17 * 60 + 26,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 4,
    plusMinus: -19,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/RQUN0Cdce7A",
    others: [
      {
        label: "BasketCantera.TV",
        url: "https://youtu.be/ftjHAZU5448",
      }
    ],
  },

  recap: {
    title: "¡Una dura prueba!",
    lines: [
      "Estaba claro que no iba a poder ser. Son muy buenos y encima un año más",
      "Aún así, un poquito más sí que se podía haber hecho. Desde el final del tercer cuarto se lo hemos puesto muy fácil a Estudiantes, que no ha tenido piedad",
      "Hasta la mitad del tercer cuarto, el marcador no estaba tan mal, pero si te rindes y dejas de luchar, te meten muchos puntos",
    ],
  },

  references: [
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-96-12231/torneo-fll-estudiantes-y-real-madrid-hacen-los-deberes",
    },
  ],
});

