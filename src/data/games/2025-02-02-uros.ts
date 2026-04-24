import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_02_02_uros: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j4",
  season: "2024-25",
  date: "2025-02-02T12:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J4",
  },

  venue: venues["almendros"],

  home: {
    club: teams["uros"],
    category: "U15M",
    opponent: true,
    scores: [13, 7, 10, 22],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [25, 36, 14, 15],
  },

  playerStats: {
    time: 12 * 60 + 50,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 17,
    efficiency: 8,
  },


  videos: {
    official: "https://youtu.be/ZrwFg5j7nh4",
    others: [],
  },

  recap: {
    title: "¡Más fácil de lo esperado!",
    lines: [
      "Esperábamos ganar el partido, pero no tan fácil",
      "Uros juega muy bien, pero arrancamos el partido como una exhalación, y creo que ahí se quedaron planchados",
      "A partir de ahí, fueron siempre a remolque y no les dimos opciones",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas fotos del álbum de febrero",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720323552837/with/54304137814",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84407&proxima_jornada=84408",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12347/la-liga-ahorramas-ya-mira-hacia-lo-m%C3%A1s-alto",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12354/aumenta-la-temperatura-en-la-liga-ahorramas",
    },
  ],
});
