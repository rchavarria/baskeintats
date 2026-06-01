import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_30_zentro: Game = GameSchema.parse({
  id: "S56-liga-plata-f3-j4",
  type: "game",
  season: "2025-26",
  date: "2026-05-30T15:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 3",
    round: "J4",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [ 12, 19, 26, 16, 9 ],
  },

  away: {
    club: teams["zentro"],
    category: "U15M",
    opponent: true,
    scores: [ 16, 23, 17, 17, 6 ],
  },

  playerStats: {
    time: 36 * 60 + 17,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 9,
      attempted: 12,
    },
    faults: 2,
    plusMinus: 2,
    efficiency: 16,
  },

  videos: {
    official: "https://youtu.be/NqsMI38NuvE",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/oIuFTO_4BPE",
      },
    ],
  },

  recap: {
    title: "Casi... pero no",
    lines: [
      "Su última oportunidad de ganarnos, pero tampoco pudieron",
      "Partido super igualado, con mucha alternancia de liderato, incluso necesitando una prórroga",
      "Final de infarto, con protagonismo de los árbitros y más aún (por desgracia) de la grada",
      "Nos llevamos el último partido de la temporada",
      "La verdad es que nos tienen que odiar, nos hemos enfrentado como 6 o 7 veces, y no han podido ninguna con nosotros",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15622&informe=resultados-clasificacion-proxima&ultima_jornada=106478&proxima_jornada=106479",
    },
  ],

});
