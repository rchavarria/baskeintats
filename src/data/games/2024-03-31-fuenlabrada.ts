import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_31_fuenlabrada: Game = GameSchema.parse({
  id: "S34-torneo-zaragoza-p5-6",
  type: "game",
  season: "2023-24",
  date: "2024-03-31T10:00:00Z",

  competition: {
    name: "Torneo Zaragoza",
    category: "U14M",
    phase: "Eliminatorias",
    round: "Puestos 5-6",
  },

  venue: venues["lanuza"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [12, 11, 21, 12],
  },

  away: {
    club: teams["fuenlabrada"],
    category: "U14M",
    opponent: true,
    scores: [17, 12, 17, 19],
  },

  playerStats: {
    time: 8 * 60 + 35,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 2,
    plusMinus: -7,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "No tan apretado como la última vez",
    lines: [
      "Nuestros compañeros de liga en Madrid, esta vez se han llevado otro partido igualado, aunque la sensación es que no íbamos a poder con ellos",
      "Todavía dura la extraña sensación del partido anterior",
    ],
  },

  references: [],
});

