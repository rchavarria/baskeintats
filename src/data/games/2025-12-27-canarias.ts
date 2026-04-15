import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_12_27_canarias: Game = GameSchema.parse({
  id: "S56-torneo-cyl-j1",
  type: "game",
  season: "2025-26",
  date: "2025-12-27T17:45:00Z",

  competition: {
    name: "🫂 Torneo amistoso Selecciones",
    category: "U16M",
    phase: "Castilla y León",
    round: "Jornada 1",
  },

  venue: venues["wurzburg"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U15M",
    scores: [52, 0, 0, 14], // TODO check score for each quarter (only 14 is a checked value)
  },

  away: {
    club: teams["seleccion-canarias"],
    category: "U16M",
    scores: [54, 0, 0, 22], // TODO check score for each quarter (only 22 is a checked value)
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
    official: "https://www.youtube.com/watch?v=_GHjquARc9k",
    others: [],
  },

  recap: {
    title: "¡Qué partido más duro!",
    lines: [
      "No pudimos con los mayores",
      "Fue un partido bastante igualado, aunque parecía que ellos siempre tenían un poquito más que nosotros",
      "Al final así fue, pero no lograron descolgarse hasta los últimos minutos, así que contentos con el resultado",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos de la jornada 1",
      url: "https://www.flickr.com/photos/130471159@N03/albums/72177720331178338/",
    },
  ],
});

