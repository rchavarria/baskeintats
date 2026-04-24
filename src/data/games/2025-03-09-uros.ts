import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_03_09_uros: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j9",
  season: "2024-25",
  date: "2025-03-09T08:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J9",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [25, 16, 29, 21],
  },

  away: {
    club: teams["uros"],
    category: "U15M",
    opponent: true,
    scores: [8, 18, 20, 9],
  },

  playerStats: {
    time: 22 * 60 + 4,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 3,
    plusMinus: 34,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/K9leZF-s3kg",
    others: [],
  },

  recap: {
    title: "¡Y aun así, sabe a poco!",
    lines: [
      "Sí, la diferencia de puntos es bastante grande, sobre todo para estar ya finalizando la segunda fase, pero es que, aun así, sabe a poco",
      "La sensación antes del partido es que se podría haber cerrado el marcador, pero incluso nos han ganado un cuarto",
      "El objetivo de esta fase está cumplido, ahora, a seguir trabajando para conseguir el siguiente:",
      "🏀 Play-offs!",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas fotos del álbum de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720324196528/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84412&proxima_jornada=84413",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12408/pen%C3%BAltimo-asalto-en-la-liga-ahorramas",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12416/liga-ahorramas-los-favoritos-toman-posiciones",
    },
  ],
});
