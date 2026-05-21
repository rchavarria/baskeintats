import type {AdvancedGame} from "../../model/GameSchema.ts";
import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyAdvancedPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2026_05_17_fuenlabrada: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f3-j2",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-05-17T16:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 3",
    round: "J2",
  },

  venue: venues["arroyo"],

  home: {
    club: teams["fuenlabrada"],
    category: "U16M",
    opponent: true,
    scores: [ 10, 24, 20, 26 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 13, 10, 16, 23 ],
  },

  playerStats: EmptyAdvancedPlayerStats,

  videos: {
    official: "https://youtu.be/-",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/-",
      },
    ],
  },

  recap: {
    title: "Este no lo hemos jugado",
    lines: [ ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de mayo (parece que solo infantiles)",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333561000/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16719&informe=resultados-clasificacion-proxima&ultima_jornada=108374&proxima_jornada=108375",
    },
  ],

});
