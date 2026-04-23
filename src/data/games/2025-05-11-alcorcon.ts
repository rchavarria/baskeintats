import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_05_11_alcorcon: Game = GameSchema.parse({
  id: "S45-liga-ahorramas-playoffs-j3",
  season: "2024-25",
  date: "2025-05-11T09:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás",
    category: "U15M",
    phase: "Play-Offs",
    round: "J3",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [20, 15, 19, 20],
  },

  away: {
    club: teams["alcorcon"],
    category: "U15M",
    opponent: true,
    scores: [28, 17, 14, 12],
  },

  playerStats: {
    time: 24 * 60 + 0,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 1,
    plusMinus: -9,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/erj2DjXZghU",
    others: [],
  },

  recap: {
    title: "¡Qué sufrimiento!",
    lines: [
      "Alcorcón empezó fortísimo, pero fortísimo",
      "Se puso por delante, y fue todo el partido por delante, controlando esa ventaja inicial",
      "Conseguimos remontar una vez. Se nos volvieron a escapar. Remontamos una segunda vez. Se volvieron a escapar",
      "A la tercera, conseguimos superarlos, y les entraron los nervios",
      "Al final, el partido fue nuestro por la mínima",
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
      label: "Fotos del propio Club de Baloncesto Alcobendas",
      url: "https://www.flickr.com/photos/cbalcobendas/albums/72177720326054799/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12748&informe=resultados-clasificacion-proxima&ultima_jornada=85253&proxima_jornada=-1",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12530/liga-ahorramas-todas-las-miradas-puestas-en-la-liga-infantil",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12557/liga-ahorramas-infantil-desata-la-locura",
    },
  ],
});

