import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_03_02_real_madrid: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j8",
  season: "2024-25",
  date: "2025-03-02T10:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J8",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [15, 7, 26, 10],
  },

  away: {
    club: teams["real-madrid"],
    category: "U15M",
    opponent: true,
    scores: [31, 14, 14, 31],
  },

  playerStats: {
    time: 35 * 60 + 31,
    fieldGoals: 5,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    faults: 1,
    plusMinus: -20,
    efficiency: 11,
  },

  videos: {
    official: "https://youtu.be/6Rd0DP11HyY",
    others: [],
  },

  recap: {
    title: "¡Otra vez que no pudo ser!",
    lines: [
      "Era el resultado esperado, una derrota. Quizá todavía creemos que tenemos alguna posibilidad contra ellos, pero después del primer cuarto, estaba muy complicado para nosotros",
      "No hay nada desastroso en nuestro juego, pero sí muchos pequeños detalles que hacen que un partido como este tengamos pocas posibilidades: flojos en defensa, blandos en los rebotes defensivos, nulos en los ofensivos, falta de acierto en canastas fáciles...",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84411&proxima_jornada=84412",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-12397/liga-ahorramas-%c3%baltimo-sprint!",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12406/liga-ahorramas-volando-hacia-los-playoffs",
    },
  ],
});
