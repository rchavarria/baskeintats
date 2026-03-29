import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_12_distrito: Game = GameSchema.parse({
  id: "S56-league-play-in-j1",
  season: "2025-26",
  date: "2026-03-12T17:00:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás",
    category: "U16M",
    phase: "F2",
    round: "J9",
  },

  venue: venues["antela"],

  home: {
    club: teams["distrito"],
    category: "U16M",
    scores: [ 18, 19, 24, 15 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 22, 14, 20, 18 ],
  },

  playerStats: {
    time: 15 * 60 + 32,
    fieldGoals: 8,
    threePointers: 2,
    freeThrows: {
      made: 4,
      attempted: 6,
    },
    faults: 3,
    plusMinus: -5,
    efficiency: 12,
  },

  videos: {
    official: "https://youtu.be/P9CNSvRLeyo",
  },

  references: [
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.example.com/cronica-partido",
    },
  ],

  recap: {
    title: "Resumen del partido",
    lines: [
      "El partido comenzó con un ritmo intenso, con ambos equipos intercambiando canastas en los primeros minutos.",
      "Distrito logró una ventaja de 5 puntos al final del primer cuarto gracias a su defensa sólida y tiros efectivos desde el perímetro.",
      "En el segundo cuarto, Alcobendas ajustó su estrategia defensiva, lo que les permitió reducir la diferencia a solo 2 puntos al descanso.",
      "El tercer cuarto fue decisivo, con Distrito aumentando su intensidad defensiva y capitalizando las oportunidades de contraataque para ampliar su ventaja a 9 puntos.",
      "Alcobendas intentó una remontada en el último cuarto, pero Distrito mantuvo la calma y controló el ritmo del juego para asegurar la victoria.",
    ],
  },

});
