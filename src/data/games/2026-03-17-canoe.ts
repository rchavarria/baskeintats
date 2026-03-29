import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {teams} from "../teams.ts";
import {venues} from "../venues.ts";

export const game_2026_03_17_canoe: Game = GameSchema.parse({
  id: "S56-league-f2-j10",
  season: "2025-26",
  date: "2026-03-17T13:30:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás",
    category: "U15M",
    phase: "F2",
    round: "J10",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [ 30, 19, 24, 15 ],
  },

  away: {
    club: teams["canoe"],
    category: "U16M",
    scores: [ 15, 14, 20, 18 ],
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
    official: "https://www.youtube.com/watch?v=example",
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
