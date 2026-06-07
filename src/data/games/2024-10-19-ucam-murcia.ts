import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_10_19_ucam_murcia: FriendlyGame = FriendlyGameSchema.parse({
  id: "S45-amistoso-murcia",
  type: "friendly-game",
  season: "2024-25",
  date: "2024-10-19T14:30:00Z",

  competition: {
    name: "Amistoso",
    category: "U14M",
    phase: "Media temporada",
    round: "",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [22, 9, 21, 16],
  },

  away: {
    club: teams["murcia"],
    category: "U14M",
    opponent: true,
    scores: [13, 20, 16, 27],
  },

  playerStats: {
    time: 28 * 60 + 54,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 7,
    },
    faults: 4,
    plusMinus: 0,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Amistoso contra un cantera ACB",
    lines: [
      "Aunque resultó ser bastante poco amistoso. Un partido con muchas faltas y un sabor amargo",
      "Yo pensaba que estos partidos eran para disfrutar del baloncesto, pero se compiten a tope",
      "Tras un buen primer tiempo, y aguantar bien los dos siguientes, se nos escapó en el último cuarto",
    ],
  },

  references: [],
});

