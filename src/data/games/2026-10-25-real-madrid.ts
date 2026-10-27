import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_10_25_real_madrid: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-g1-j5",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-10-25T12:15:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J5",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [9, 13, 13, 25],
  },

  away: {
    club: teams["real-madrid"],
    category: "U18M",
    opponent: true,
    scores: [39, 33, 35, 24],
  },

  playerStats: {
    time: 8 * 60 + 7,
    fieldGoals: {
      made: 0,
      attempted: 1,
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
      offensive: 0,
      defensive: 0,
    },
    assists: 0,
    steals: 0,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 0,
      received: 1,
    },
    plusMinus: -3,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/kH6mw-GcF0E",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/exHC3aulnww",
      },
    ],
  },

  recap: {
    title: "Nada especial, justo lo esperado",
    lines: [
      "Bueno, en realidad sí, que le hemos metido 60 puntos al Madriz",
      "Me alegro que viniera el junior real del Madrid,",
      "así han podido disfrutar de jugar contra uno de los mejores equipos de Europa",
      "Dato curioso que compartió el entrenador: han tirado más de 3 que de 2",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del partido",
      url: "https://www.flickr.com/photos/fbmadrid/55613343326/in/album-72177720336020609",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17494 = Liga Ahorramás - Junior - Oro
      // F1 - J2 = 110611
      // F1 - J3 = 110612
      // F1 - J4 = 110613
      // F1 - J5 = 110614
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110614&proxima_jornada=110615",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13591/liga-ahorramas-grandes-duelos-a-la-vista",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-104-13596/la-liga-ahorramas-cierra-la-primera-vuelta-con-muchas-emociones",
    },
    {
      type: "social-media",
      label: "Balón al aire",
      url: "https://x.com/FBMadrid/status/2114332350993621378",
    },
    {
      type: "social-media",
      label: "Llegamos al descanso",
      url: "https://x.com/FBMadrid/status/2114341751620022475",
    },
    {
      type: "social-media",
      label: "Final del partido: 60-131",
      url: "https://x.com/FBMadrid/status/2114356772672590046",
    },
  ],
});
