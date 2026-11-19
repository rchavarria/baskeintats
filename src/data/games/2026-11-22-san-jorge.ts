import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_22_san_jorge: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-g1-j8",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-22T17:30:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J8",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [0, 0, 0, 0],
  },

  away: {
    club: teams["san-jorge"],
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
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720336815217",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17494 = Liga Ahorramás - Junior - Oro
      // ...
      // F1 - J8 = 110618
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110618&proxima_jornada=110619",
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
