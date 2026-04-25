import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_12_22_seleccion_valencia: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-amistoso-fbm-valencia",
  type: "advanced-game",
  season: "2024-25",
  date: "2024-12-22T14:00:00Z",

  competition: {
    name: "Preparación Selección de Madrid para CESA",
    category: "U14M",
    phase: "Amistosos",
    round: "J2",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [27, 14, 24, 14],
  },

  away: {
    club: teams["seleccion-valencia"],
    category: "U14M",
    opponent: true,
    scores: [20, 11, 19, 17],
  },

  playerStats: {
    time: 25 * 60 + 1,
    fieldGoals: {
      made: 4,
      attempted: 6,
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
    assists: 1,
    steals: 1,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 3,
      received: 0,
    },
    plusMinus: 14,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/9Trcd8fH1lA",
    others: [],
  },

  recap: {
    title: "Amistoso de la selección de Madrid contra la selección de Valencia como preparación del Campeonato de España",
    lines: [],
  },

  references: [
    {
      type: "article",
      label: "Primer ensayo para las selecciones",
      url: "https://www.fbm.es/noticia-88-12296/primer-ensayo-para-las-selecciones",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.flickr.com/photos/fbmadrid/54220296387/in/album-72177720322754488",
    },
    {
      type: "photo",
      label: "Selecciones infantiles",
      url: "https://www.flickr.com/photos/fbmadrid/54222270964/in/album-72177720322740795",
    },
  ],
});

