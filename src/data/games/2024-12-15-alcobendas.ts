import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_12_15_alcobendas: FriendlyGame = FriendlyGameSchema.parse({
  id: "S45-amistoso-fbm-alcobendas",
  type: "friendly-game",
  season: "2024-25",
  date: "2024-12-15T18:00:00Z",

  competition: {
    name: "Campeonato de España de Selecciones Autonómicas",
    category: "U14M",
    phase: "Amistosos preparativos",
    round: "J1",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [13, 13, 20, 12],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    opponent: true,
    scores: [15, 12, 10, 30],
  },

  playerStats: {
    time: 10 * 60 + 15,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: 0,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/Ay1Y3QxhFcY",
    others: [],
  },

  recap: {
    title: "Amistoso contra unos cadetes de 2009 y 2010 para probar qué tal funciona el equipo de la selección",
    lines: [],
  },

  references: [],
});

