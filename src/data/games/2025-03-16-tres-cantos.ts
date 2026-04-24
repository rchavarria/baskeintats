import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_03_16_tres_cantos: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j10",
  season: "2024-25",
  date: "2025-03-16T11:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J10",
  },

  venue: venues["luz"],

  home: {
    club: teams["tres-cantos"],
    category: "U15M",
    opponent: true,
    scores: [9, 12, 2, 0],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [18, 29, 26, 0],
  },

  playerStats: {
    time: 13 * 60 + 0,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    faults: 2,
    plusMinus: 30,
    efficiency: 4,
  },

  videos: {
    official: "https://youtu.be/qiAa82hNVrw",
    others: [],
  },

  recap: {
    title: "¡Demasiado sencillo!",
    lines: [
      "No sé, esperaba un partido fácil, o que ganaríamos con gran ventaja, pero tanto...",
      "Entre pitos y flautas, el partido se hizo super corto",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84413&proxima_jornada=84414",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12422/no-va-m%C3%A1s!-la-liga-ahorramas-cierra-la-fase-regular",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12430/liga-ahorramas-llega-la-hora-de-la-verdad!",
    },
  ],
});
