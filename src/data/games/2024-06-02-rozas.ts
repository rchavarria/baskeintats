import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_06_02_rozas: Game = GameSchema.parse({
  id: "S34-liga-oro-f3-j2",
  type: "game",
  season: "2023-24",
  date: "2024-06-02T13:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 3",
    round: "J2",
  },

  venue: venues["espiniella"],

  home: {
    club: teams["rozas"],
    category: "U14M",
    opponent: true,
    scores: [17, 20, 11, 23],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [23, 25, 19, 22],
  },

  playerStats: {
    time: 16 * 60 + 22,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: { made: 3, attempted: 3 },
    faults: 0,
    plusMinus: 9,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/T5YC0QljK2o",
    others: [],
  },

  recap: {
    title: "Ganando con soltura",
    lines: [
      "El partido ha sido más fácil de lo que refleja el resultado. El equipo ya va dando sus últimos coletazos, incluso algunos jugadores ya han decidido dejarlo",
      "Otros han comenzado a hacer pruebas en otros clubs...",
    ],
  },

  references: [],
});
