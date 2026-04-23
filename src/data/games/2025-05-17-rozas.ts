import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_05_17_rozas: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-liga-ahorramas-f4-semis",
  season: "2024-25",
  date: "2025-05-17T10:30:00Z",
  type: "advanced-game",

  competition: {
    name: "Liga Ahorramás",
    category: "U15M",
    phase: "Final 4",
    round: "Semis",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [21, 19, 19, 16],
  },

  away: {
    club: teams["rozas"],
    category: "U15M",
    opponent: true,
    scores: [11, 20, 13, 15],
  },

  playerStats: {
    time: 20 * 60 + 32,
    fieldGoals: {
      made: 4,
      attempted: 5,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 3,
      attempted: 3,
    },
    rebounds: {
      offensive: 3,
      defensive: 5,
    },
    assists: 2,
    steals: 0,
    turnovers: 1,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: 23,
    efficiency: 20,
  },

  videos: {
    official: "https://www.youtube.com/live/W3J_6xKxPgc?t=556",
    others: [],
  },

  recap: {
    title: "¡Menuda pasada!",
    lines: [
      "Comenzamos bien, y supimos mantener la ventaja",
      "Haste tres veces consiguieron remontar la ventaja de ~10 puntos, hasta que llegó el momento de la verdad y no pudieron con nosotros",
      "El final del tercer cuarto y principio del último, volvimos a ser superiores y el cansancio, los nervios o el miedo hizo mella en los rivales, que no aguantaron y se hundieron",
      "Pasamos a la final y...",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas fotos del álbum de mayo",
      url: "https://www.flickr.com/photos/fbmadrid/54514339388/in/album-72177720326026152",
    },
    {
      type: "photo",
      label: "Fotos de la Final a 4",
      url: "https://www.flickr.com/photos/fbmadrid/54526212189/in/album-72177720326204794",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://www.fbm.es/informes.aspx?delegacion=1&grupo=12749&informe=calendario",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-12567/la-hora-de-l@s-infantiles",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12579/real-madrid-alcobendas,-mucho-talento-en-busca-del-t%C3%ADtulo-infantil",
    },
  ],
});

