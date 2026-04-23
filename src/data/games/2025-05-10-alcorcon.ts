import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_05_10_alcorcon: Game = GameSchema.parse({
  id: "S45-liga-ahorramas-playoffs-j2",
  season: "2024-25",
  date: "2025-05-10T09:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás",
    category: "U15M",
    phase: "Play-Offs",
    round: "J2",
  },

  venue: venues["canaleja"],

  home: {
    club: teams["alcorcon"],
    category: "U15M",
    opponent: true,
    scores: [18, 13, 27, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [14, 12, 16, 21],
  },

  playerStats: {
    time: 27 * 60 + 4,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 3,
    },
    faults: 1,
    plusMinus: -19,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/iKApeD5Poqw",
    others: [],
  },

  recap: {
    title: "¡Mierda!",
    lines: [
      "Y los peores pronósticos se cumplieron, perdimos el partido",
      "Nos han sacado de nuestras casillas, han sido muy muy duros y no hemos sabido contestarles",
      "Mañana toca hacerlo mejor",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas fotos del álbum de mayo",
      url: "https://www.flickr.com/photos/fbmadrid/54513021428/in/album-72177720326026152",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12748&informe=resultados-clasificacion-proxima&ultima_jornada=85252&proxima_jornada=-1",
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

