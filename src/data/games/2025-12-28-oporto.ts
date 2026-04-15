import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_12_28_oporto: Game = GameSchema.parse({
  id: "S56-torneo-cyl-j2",
  type: "game",
  season: "2025-26",
  date: "2025-12-28T09:15:00Z",

  competition: {
    name: "🫂 Torneo amistoso Selecciones",
    category: "U16M",
    phase: "Castilla y León",
    round: "Jornada 2",
  },

  venue: venues["wurzburg"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U15M",
    scores: [ 0, 40, 0, 58],
  },

  away: {
    club: teams["oporto"],
    category: "U16M",
    scores: [0, 41, 0, 30],
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
    official: "https://youtu.be/03sFDwlaHAg",
    others: [],
  },

  recap: {
    title: "¡Este sí!",
    lines: [
      "Con los portugueses sí que pudimos",
      "La primera mitad fue super igualada, con contínuos cambios de líder",
      "Pero la segunda parte fue nuestra totalmente, en palabras del entrenador",
      "El entrenador también tuvo unas palabras/gestos para con nosotros, como: \"ostrás con los de Alcobendas\", \"imparable\" o \"pffff\" (ante una defensa inquebrantable)",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos de la jornada 2",
      url: "https://www.flickr.com/photos/130471159@N03/albums/72177720331178338/",
    },
  ],
});

