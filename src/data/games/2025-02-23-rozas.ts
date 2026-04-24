import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_02_23_rozas: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j7",
  season: "2024-25",
  date: "2025-02-23T17:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J7",
  },

  venue: venues["ceip-san-jose"],

  home: {
    club: teams["rozas"],
    category: "U15M",
    opponent: true,
    scores: [20, 15, 11, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [12, 22, 27, 18],
  },

  playerStats: {
    time: 15 * 60 + 43,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 5,
    plusMinus: -1,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/Ceg2DueEFbE",
    others: [],
  },

  recap: {
    title: "¡Kaboom!",
    lines: [
      "Por fin les vencemos, ya era hora",
      "Partido super emocionante, un mal primer cuarto, recuperamos en el segundo, nos adelantamos en el tercero, y el cuarto había que aguantar como fuera",
      "¡Partidazo!",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84410&proxima_jornada=84411",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12382/liga-ahorramas-reencuentros-cargados-de-emoci%C3%B3n",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12396/la-liga-ahorramas-contin%C3%BAa-con-paso-firme",
    },
  ],
});
