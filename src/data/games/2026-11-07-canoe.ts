import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_07_canoe: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-g1-j9",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-07T12:30:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J9",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [26, 17, 17, 25, 10],
  },

  away: {
    club: teams.canoe,
    category: "U18M",
    opponent: true,
    scores: [24, 22, 22, 17, 9],
  },

  playerStats: {
    time: 3 * 60 + 10,
    fieldGoals: {
      made: 0,
      attempted: 0,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 1,
      defensive: 1,
    },
    assists: 1,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 0,
      received: 0,
    },
    plusMinus: 4,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/xS8Smxr4KSM",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/3ymQRiTquFU",
      },
    ],
  },

  recap: {
    title: "¡Por la mínima!",
    lines: [
      "¡Uff, qué sufrimiento, por favor!",
      "Al final, una victoria para los grandes",
      "El nuestro no participó mucho, aunque no lo entiendo, tampoco lo hizo tan mal",
      "El entrenador sabrá",
      "Bueno, al menos, se llevan una victoria, el cachorro ha participado y otro partido más para aprender",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720336020609",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17494 = Liga Ahorramás - Junior - Oro
      // F1 - J2 = 110611
      // F1 - J3 = 110612
      // F1 - J4 = 110613
      // F1 - J5 = 110614
      // F1 - J9 = 110618
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110618&proxima_jornada=110620",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13606/liga-ahorramas-arranca-la-segunda-vuelta",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-123-13614/la-liga-ahorramas-sube-su-intensidad-en-la-segunda-vuelta",
    },
  ],
});
