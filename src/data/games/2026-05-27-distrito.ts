import type {AdvancedGame} from "../../model/GameSchema.ts";
import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_27_distrito: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f3-j6",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-05-27T18:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 3",
    round: "J6",
  },

  venue: venues["circular"],

  home: {
    club: teams["distrito"],
    category: "U16M",
    opponent: true,
    scores: [ 21, 34, 18, 19, 4 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 29, 22, 25, 16, 9 ],
  },

  playerStats: {
    time: 35 * 60 + 13,
    fieldGoals: {
      made: 1,
      attempted: 3,
    },
    threePointers: {
      made: 3,
      attempted: 8,
    },
    freeThrows: {
      made: 0,
      attempted: 1,
    },
    rebounds: {
      offensive: 2,
      defensive: 3,
    },
    assists: 1,
    steals: 2,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 2,
    },
    plusMinus: 11,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/yFW3dLNGHVE",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/C-Kuzag2-L8",
      },
    ],
  },

  recap: {
    title: "¡A la saca!",
    lines: [
      "Partido extrañísimo, muy igualado, con muchos puntos, pero muy soso anímicamente",
      "Fue un poco raro, nadie se jugaba nada",
      "Fue un partido muy igualado, con contínuos sube y bajas, pero aún así, el ambiente estaba muy silencioso",
      "El arbitraje fue vergonzoso en algunos momentos, como si tuvieran prisa, pero el karma nos dió una prórroga. Lo que hay que ver",
      "Pues victoria para los nuestros, y ganamos incluso el basketaverage",
      "Y a alguien no le ha gustado mucho esto, porque eso nos colocaría en un grupo un poco complicado para el año que viene. Pero estar pensando ahora en el año que viene... me parece demasiado... 'añoranza del futuro'",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16719&informe=resultados-clasificacion-proxima&ultima_jornada=108378&proxima_jornada=108379",
    },
  ],

});
