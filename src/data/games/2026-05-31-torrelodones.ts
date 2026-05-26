import type {AdvancedGame} from "../../model/GameSchema.ts";
import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2026_05_31_torrelodones: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f3-j4",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-05-31T16:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 3",
    round: "J4",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 24, 13, 19, 19 ],
  },

  away: {
    club: teams["torrelodones"],
    category: "U16M",
    opponent: true,
    scores: [ 21, 23, 19, 29 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/D1Pi5W__kZI",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/S5K2JmnJRks",
      },
    ],
  },

  recap: {
    title: "En éste no participamos, estábamos en la Caja Mágica",
    lines: [
      "Pero fueron otros compañeros no muy habituales, y lo hicieron bastante bien",
      "En la ida, no pudimos con ellos, y este podía haber sido un desastre",
      "Pero lo hicieron bastante bien, enhorabuena por ellos",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16719&informe=resultados-clasificacion-proxima&ultima_jornada=108376&proxima_jornada=108377",
    },
  ],

});
