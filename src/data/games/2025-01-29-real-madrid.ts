import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_01_29_real_madrid: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j3",
  season: "2024-25",
  date: "2025-01-29T18:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J3",
  },

  venue: venues["valdebebas"],

  home: {
    club: teams["real-madrid"],
    category: "U15M",
    opponent: true,
    scores: [23, 29, 24, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [6, 16, 22, 14],
  },

  playerStats: {
    time: 30 * 60 + 7,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 4,
    },
    faults: 4,
    plusMinus: -26,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/8JmMJVUxtog",
    others: [],
  },

  recap: {
    title: "¡Cómo duele!",
    lines: [
      "El Real Madrid tenía un par de bajas importantes, y veníamos con la esperanza de poder luchar, de que el partido fuera un poquito igualado",
      "Pero ya en el primer cuarto se vió que no",
      "Sí, había bajas, pero también un alto muy alto. Y nos intimidó, y mucho",
      "Podemos poner muchas excusas, pero tenemos que hacer autocrítica, estuvimos muy flojos, en todo",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84406&proxima_jornada=84407",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-12338/liga-ahorramas-el-espect%c3%a1culo-contin%c3%baa",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12345/liga-ahorramas-emoci%C3%B3n-hasta-el-final",
    },
  ],
});
