import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_12_07_estudiantes: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-copa-ahorramas-j1",
  type: "advanced-game",
  season: "2024-25",
  date: "2024-12-07T15:00:00Z",

  competition: {
    name: "III Copa Ahorramás",
    category: "U15M",
    phase: "",
    round: "Jornada 1",
  },

  venue: venues["paraiso"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [28, 14, 13, 28],
  },

  away: {
    club: teams["estudiantes"],
    category: "U15M",
    opponent: true,
    scores: [15, 22, 24, 26],
  },

  playerStats: {
    time: 35 * 60 + 40,
    fieldGoals: {
      made: 7,
      attempted: 8,
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
      offensive: 3,
      defensive: 4,
    },
    assists: 2,
    steals: 1,
    turnovers: 3,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: -1,
    efficiency: 18,
  },

  videos: {
    official: "https://youtu.be/0qkMmK2w854",
    others: [],
  },

  recap: {
    title: "¡Se nos escapó!",
    lines: [
      "Empezamos bastante igualados, repartiendo canastas. Hasta que llegó un punto en que impusimos nuestro ritmo y nos escapamos",
      "El segundo y tercer cuarto fueron malos en defensa, y se notó. Nos recortaron la distancia, nos superaron y se escaparon ellos",
      "El último intentamos reaccionar, pero no pudimos superarles y al final se nos fue por muy poco",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas imágenes",
      url: "https://www.flickr.com/photos/fbmadrid/54193170488/in/album-72177720322469243",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12260/la-copa-ahorramas-deja-seis-finales-para-disfrutar",
    },
  ],
});

