import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_09_08_mataro: Game = GameSchema.parse({
  id: "S45-torneig-nord-j4",
  type: "game",
  season: "2024-25",
  date: "2024-09-08T08:45:00Z",

  competition: {
    name: "Torneig Nord",
    category: "U15M",
    phase: "Eliminatorias",
    round: "3º-4º Puesto",
  },

  venue: venues["roser-llop"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [26, 23, 19, 15],
  },

  away: {
    club: teams["mataro"],
    category: "U15M",
    opponent: true,
    scores: [17, 21, 5, 23],
  },

  playerStats: {
    time: 0,
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
    official: "https://youtu.be/t91vmjhKIEg",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/myRQnXpBp68",
      },
      {
        label: "canal CBA Parte 2",
        url: "https://youtube.com/live/myxXYr84J68",
      },
    ],
  },

  recap: {
    title: "¡Partidazo!",
    lines: [
      "Muy buen partido, donde se confirma la buena evolución del equipo. No hemos dado ninguna opción al rival, y nos llevamos el partido con gran diferencia",
      "💪 Esta victoria nos da el tercer puesto en el torneo. ¡Megaresultado!",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Foto del 3º puesto",
      url: "https://www.instagram.com/p/C_p8sThIQr5/",
    },
  ],
});

