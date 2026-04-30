import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_09_07_joventut: Game = GameSchema.parse({
  id: "S45-torneig-nord-j2",
  type: "game",
  season: "2024-25",
  date: "2024-09-07T09:45:00Z",

  competition: {
    name: "Torneig Nord",
    category: "U15M",
    phase: "Grupos",
    round: "Jornada 2",
  },

  venue: venues["roser-llop"],

  home: {
    club: teams["joventut"],
    category: "U15M",
    opponent: true,
    scores: [12, 11, 12, 10],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [21, 18, 25, 14],
  },

  playerStats: {
    time: 17 * 60 + 44,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 2,
    },
    faults: 3,
    plusMinus: 5,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/61-E64g2k78",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/4R0Da9pThus",
      },
    ],
  },

  recap: {
    title: "¡Sorpresa!",
    lines: [
      "Ya el día anterior, cuando el Joventut perdió contra Sabadell, nos sorprendió bastante. Pero en el partido de hoy hemos dado la sorpresa del torneo, creo yo.",
      "Hemos jugado bastante mejor que el partido anterior, y el Joventut no ha tenido ni la más mínima oportunidad de nada. Hemos sido, muy, muy superiores a ellos",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Nuestra foto del torneo",
      url: "https://www.instagram.com/p/C_nke3pI__K/?img_index=5",
    },
  ],
});

