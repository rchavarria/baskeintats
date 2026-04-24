import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_01_19_rozas: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j2",
  season: "2024-25",
  date: "2025-01-19T08:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J2",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [25, 14, 17, 19],
  },

  away: {
    club: teams["rozas"],
    category: "U15M",
    opponent: true,
    scores: [19, 20, 20, 21],
  },

  playerStats: {
    time: 30 * 60 + 17,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    faults: 3,
    plusMinus: 1,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/ULNJI6WDAgc",
    others: [],
  },

  recap: {
    title: "¡Mierda!",
    lines: [
      "Tanta derrota contra ellos ya empieza a doler",
      "Nos hubiera venido fenomenal vencerles, en nuestra casa, pero no pudo ser. Son muy duros defendiendo, y nosostros muy blandos atacando",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84405&proxima_jornada=84406",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-12325/la-liga-ahorramas-se-llena-de-reencuentros",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12336/aumenta-la-emoci%C3%B3n-en-la-liga-ahorramas",
    },
  ],
});
