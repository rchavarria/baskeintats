import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const _advanced_game_template: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j1",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-10-20T00:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J1",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [0, 0, 0, 0],
  },

  away: {
    club: teams["real-madrid"],
    category: "U16M",
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
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720336020609",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93792&proxima_jornada=93793",
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
