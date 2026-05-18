import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_29_sp_burgos: Game = GameSchema.parse({
  id: "S34-torneo-zaragoza-j2",
  type: "game",
  season: "2023-24",
  date: "2024-03-29T19:00:00Z",

  competition: {
    name: "Torneo Zaragoza",
    category: "U14M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["fuentes"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [29, 18, 18, 0],
  },

  away: {
    club: teams["sp-burgos"],
    category: "U13M",
    opponent: true,
    scores: [7, 2, 5, 0],
  },

  playerStats: {
    time: 19 * 60 + 45,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 1,
    plusMinus: 32,
    efficiency: 11,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Facilísimo para nosotros, dificilísimo para ellos",
    lines: [
      "Ahora entiendo cómo de superiores se deberían sentir nuestros rivales en la segunda fase. Todos ellos han sido un año mayores que nosotros",
      "Este partido ha sido al revés, nuestro rival es de 2011. Desde las gradas pedían falta una y otra vez, pero la superioridad física es tal, que parecen faltas",
    ],
  },

  references: [],
});

