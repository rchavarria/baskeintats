import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_12_30_seleccion_canarias: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-amistoso-fbm-canarias",
  type: "advanced-game",
  season: "2024-25",
  date: "2024-12-30T08:30:00Z",

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas",
    category: "U14M",
    phase: "Amistosos preparativos",
    round: "J5",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [18, 29, 15, 12],
  },

  away: {
    club: teams["seleccion-canarias"],
    category: "U14M",
    opponent: true,
    scores: [12, 13, 12, 15],
  },

  playerStats: {
    time: 11 * 60 + 38,
    fieldGoals: {
      made: 2,
      attempted: 3,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 1,
      defensive: 0,
    },
    assists: 0,
    steals: 2,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 5,
      received: 0,
    },
    plusMinus: 3,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/msI4-fzt768",
    others: [],
  },

  recap: {
    title: "Último partido amistoso",
    lines: [
      "Cerramos la ronda de amistosos contra Canarias, que nos enfrentaremos a ellos en la fase de grupos del Campeonato. ¿Mostrará alguien sus cartas?",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.flickr.com/photos/fbmadrid/54236648404/in/album-72177720322861500",
    },
  ],
});

