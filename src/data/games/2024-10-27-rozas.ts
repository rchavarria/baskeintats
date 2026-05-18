import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_10_27_rozas: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j5",
  season: "2024-25",
  date: "2024-10-27T17:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J5",
  },

  venue: venues["ceip-san-jose"],

  home: {
    club: teams["rozas"],
    category: "U14M",
    opponent: true,
    scores: [18, 25, 16, 8],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [9, 14, 19, 20],
  },

  playerStats: {
    time: 29 * 60 + 40,
    fieldGoals: 7,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 2,
    },
    faults: 2,
    plusMinus: 3,
    efficiency: 10,
  },

  videos: {
    official: "https://youtu.be/57CqR5lFNvU",
    others: [],
  },

  recap: {
    title: "¡Por los pelos!",
    lines: [
      "¡Mecachis! No pudo ser, por muy poco",
      "Durante la primera mitad tuvieron mucho más acierto que nosotros. Metieron triples imposibles, y nosotros fallábamos hasta las bandejas más sencillas. La diferencia creció mucho",
      "La segunda parte la empezamos con ganas, pero no conseguíamos remontar. Hasta el último cuarto, cuando empezamos a darles duro. Pero no pudo ser, nos faltó muy poquito",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74719&proxima_jornada=74720",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-123-12178/la-liga-ahorramas-cierra-la-primera-vuelta",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12183/la-liga-ahorramas-termina-la-primera-vuelta-por-todo-lo-alto",
    },
  ],
});

