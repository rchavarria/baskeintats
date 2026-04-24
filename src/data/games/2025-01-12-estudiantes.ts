import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_01_12_estudiantes: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j1",
  season: "2024-25",
  date: "2025-01-12T12:00:00Z",
  type: "game",
  
  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J1",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["estudiantes"],
    category: "U15M",
    opponent: true,
    scores: [14, 14, 9, 18],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [23, 14, 11, 15],
  },

  playerStats: {
    time: 24 * 60 + 41,
    fieldGoals: 5,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 1,
    },
    faults: 3,
    plusMinus: 8,
    efficiency: 8,
  },

  videos: {
    official: "https://youtu.be/s6etSGZeHoI",
    others: [],
  },

  recap: {
    title: "¡Victoria importantísima!",
    lines: [
      "Partido muy reñido, donde sacamos ventaja en el primer cuarto, con un arranque fulgurante, y conseguimos gestionarla",
      "Muy, muy igualado, y una victoria super importante de cara a la clasificación final, que va a estar muy apretada",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas imágenes",
      url: "https://www.flickr.com/photos/fbmadrid/54263220969/in/album-72177720323126176",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84404&proxima_jornada=84405",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12305/comienza-la-segunda-fase-de-la-liga-ahorramas!",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12321/la-segunda-fase-arranca-fuerte",
    },
  ],
});
