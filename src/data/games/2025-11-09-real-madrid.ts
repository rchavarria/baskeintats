import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_11_09_real_madrid: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-u16-j6",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-11-09T17:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "",
    round: "J6",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [12, 23, 17, 19],
  },

  away: {
    club: teams["real-madrid"],
    category: "U15M",
    scores: [34, 25, 21, 28],
  },

  playerStats: {
    time: 16 * 60 + 4,
    fieldGoals: {
      made: 3,
      attempted: 5,
    },
    threePointers: {
      made: 0,
      attempted: 1,
    },
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    rebounds: {
      offensive: 0,
      defensive: 1,
    },
    assists: 0,
    steals: 2,
    turnovers: 0,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 1,
      received: 1,
    },
    plusMinus: -18,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/pLz7bA03PwQ",
    others: [],
  },

  recap: {
    title: "¡Entretenido!",
    lines: [
      "No hubo ninguna sorpresa, pero al menos el partido estuvo entretenido",
      "El Madrid vino con muchos de 2011, con lo que había muchos amigos en la cancha",
      "Y alguna esperanza de hacerles daño también, pero su grandullón es mucho grandullón, y solo con estar en pista ya nos anula bastante",
      "Pero estuvo casi competido, los chicos jugaron bastante bien, ordenados, flojos en algunas defensas, pero en general bastante bien",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720330208384/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93797&proxima_jornada=93798",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12908/ya-ha-empezado-la-segunda-vuelta-de-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12918/liga-ahorramas-menos-invictos,-m%C3%A1s-emoci%C3%B3n",
    },
    {
      icon: "📰",
      label: "los 2010 estaban convocados con la Madrileña",
      url: "https://www.fbm.es/noticia-88-12905/concentraci%C3%B3n-de-las-preselecciones-auton%C3%B3micas",
    },
  ],

});

