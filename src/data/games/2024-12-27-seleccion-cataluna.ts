import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_12_27_seleccion_cataluna: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-amistoso-fbm-catalunya",
  type: "advanced-game",
  season: "2024-25",
  date: "2024-12-27T17:00:00Z",

  competition: {
    name: "Preparación Selección de Madrid para CESA",
    category: "U14M",
    phase: "Amistosos",
    round: "J3",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [20, 15, 17, 7],
  },

  away: {
    club: teams["seleccion-cataluna"],
    category: "U14M",
    opponent: true,
    scores: [18, 18, 21, 13],
  },

  playerStats: {
    time: 10 * 60 + 38,
    fieldGoals: {
      made: 0,
      attempted: 1,
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
      offensive: 0,
      defensive: 3,
    },
    assists: 0,
    steals: 0,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 0,
      received: 0,
    },
    plusMinus: -2,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/9JOH61jZ0SQ",
    others: [],
  },

  recap: {
    title: "Primer partido de un torneo amistoso con Aragón, Cataluña y Valencia como preparación del Campeonato de España",
    lines: [],
  },

  references: [
    {
      type: "article",
      label: "Las selecciones vuelven a la acción",
      url: "https://www.fbm.es/noticia-88-12300/las-selecciones-vuelven-a-la-acci%C3%B3n",
    },
    {
      type: "photo",
      label: "Imágenes del partido",
      url: "https://www.flickr.com/photos/fbmadrid/54234165393/in/album-72177720322862509",
    },
  ],
});

