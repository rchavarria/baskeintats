import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_11_27_sba: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j8",
  season: "2024-25",
  date: "2024-11-27T19:10:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J8",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [34, 19, 20, 24],
  },

  away: {
    club: teams["sba"],
    category: "U14M",
    opponent: true,
    scores: [17, 9, 16, 12],
  },

  playerStats: {
    time: 18 * 60 + 27,
    fieldGoals: 8,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 2,
    plusMinus: 33,
    efficiency: 14,
  },

  videos: {
    official: "https://youtu.be/-HRK1ciNcJY",
    others: [],
  },

  recap: {
    title: "¡Sin manolitos por un pelo!",
    lines: [
      "Ha resultado más fácil de lo esperado, la verdad",
      "El partido ha durado el primer cuarto, en seguida se ha visto que iba a ser fácil, pero han hecho bien en asegurar el partido, sin confiarnos",
      "Nos hemos quedado a un triple de conseguir los ansiados manolitos",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74722&proxima_jornada=74723",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-123-12220/la-liga-ahorramas-comienza-a-mirar-hacia-la-segunda-fase",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12240/aumentan-las-inc%C3%B3gnitas-en-la-liga-ahorramas",
    },
  ],
});

