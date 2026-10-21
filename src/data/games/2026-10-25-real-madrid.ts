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
    scores: [0, 0, 0, 0],
  },

  away: {
    club: teams["real-madrid"],
    category: "U18M",
    opponent: true,
    scores: [0, 0, 0, 0],
  },

  playerStats: {
    time: 0 * 60 + 0,
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
      received: 0,
    },
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/official",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/pou",
      },
      {
        label: "Canal CBA/Zilberman",
        url: "https://youtu.be/cba",
      },
    ],
  },

  recap: {
    title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    lines: [
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de ?",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329176624",
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
      url: "https://fbm.es/previa",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://fbm.es/cronica",
    },
  ],
});
