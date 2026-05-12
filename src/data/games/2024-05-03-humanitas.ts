import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_05_03_humanitas: Game = GameSchema.parse({
  id: "S34-torneo-salou-j1",
  type: "game",
  season: "2023-24",
  date: "2024-05-03T09:00:00Z",

  competition: {
    name: "Torneo Salou",
    category: "U14M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["cap-salou"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [17, 1, 11, 9],
  },

  away: {
    club: teams["humanitas"],
    category: "U14M",
    opponent: true,
    scores: [7, 20, 13, 4],
  },

  playerStats: {
    time: 7 * 60 + 42,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 1,
    plusMinus: 9,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Partido para olvidar!",
    lines: [
      "Y por varios motivos",
      "Perdemos, y lo hacemos contra un equipo que deberíamos haber ganado con una mano a la espalda. No entiendo qué pasó, el segundo cuarto no pudimos reaccionar, al rival le salía todo, incluso triples desde el medio campo, y no supimos qué hacer",
      "Y segundo, el esguince. Eso marcó ya todo el torneo, que para nosotros duró 5 minutos 😭",
    ],
  },

  references: [],
});
