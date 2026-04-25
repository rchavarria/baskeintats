import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_11_10_real_madrid: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j6",
  season: "2024-25",
  date: "2024-11-10T12:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 1",
    round: "J6",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [26, 17, 12, 21],
  },

  away: {
    club: teams["real-madrid"],
    category: "U15M",
    opponent: true,
    scores: [17, 25, 26, 18],
  },

  playerStats: {
    time: 32 * 60 + 13,
    fieldGoals: 9,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 3,
    },
    faults: 2,
    plusMinus: -3,
    efficiency: 15,
  },

  videos: {
    official: "https://youtu.be/cu7EiAiqm84",
    others: [],
  },

  recap: {
    title: "¡Por muy poquito!",
    lines: [
      "No pudo ser, esta vez hemos rozado la victoria",
      "El primer partido, les ganamos un cuarto. En este les hemos ganado dos. ¡A la tercera va la vencida!",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74720&proxima_jornada=74721",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12195/comienza-la-segunda-vuelta-de-la-liga-ahorramas",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12206/liga-ahorramas-queda-mucho-por-decidir",
    },
    {
      type: "photo",
      label: "Galería de fotos de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/54131962373/in/album-72177720321858264/",
    },
  ],
});

