import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_09_13_canoe: FriendlyGame = FriendlyGameSchema.parse({
  id: "S56-amistoso-canoe",
  type: "friendly-game",
  season: "2025-26",
  date: "2025-09-13T09:30:00Z",

  competition: {
    name: "Amistoso de pretemporada",
    category: "U16M",
    phase: "",
    round: "",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [12, 16, 15, 18],
  },

  away: {
    club: teams["canoe"],
    category: "U16M",
    opponent: true,
    scores: [17, 21, 20, 12],
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
    official: "https://youtu.be/Fgdft9Y19Xo",
    others: [],
  },

  recap: {
    title: "Parecía que sí, pero no",
    lines: [
      "No empezamos bien, pero parecía que podríamos con ellos",
      "Defendían muy duro, repartiendo buena leña, y no nos esforzamos al 100%, así que al final no pudo ser",
      "Y eso que en el último cuarto el resultado se maquilló un poco",
    ],
  },

  references: [],

});

