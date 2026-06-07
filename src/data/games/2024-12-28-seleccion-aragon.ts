import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_12_28_seleccion_aragon: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-amistoso-fbm-aragon",
  type: "advanced-game",
  season: "2024-25",
  date: "2024-12-28T08:45:00Z",

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas",
    category: "U14M",
    phase: "Amistosos preparativos",
    round: "J4",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [19, 22, 12, 13],
  },

  away: {
    club: teams["seleccion-aragon"],
    category: "U14M",
    opponent: true,
    scores: [15, 16, 9, 20],
  },

  playerStats: {
    time: 22 * 60 + 0,
    fieldGoals: {
      made: 2,
      attempted: 2,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    rebounds: {
      offensive: 0,
      defensive: 1,
    },
    assists: 3,
    steals: 5,
    turnovers: 3,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 3,
      received: 0,
    },
    plusMinus: 3,
    efficiency: 10,
  },

  videos: {
    official: "https://youtu.be/vVa8CvsNBuA",
    others: [],
  },

  recap: {
    title: "Segundo partido del torneo amistoso",
    lines: [
      "Este contra el perdedor del partido anterior, contra Aragón",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.flickr.com/photos/fbmadrid/54234163833/in/album-72177720322862509",
    },
  ],
});

