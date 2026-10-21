import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_10_18_canoe: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-junior-f1-g1-j4",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-10-18T11:00:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J4",
  },

  venue: venues["pez-volador"],

  home: {
    club: teams.canoe,
    category: "U18M",
    opponent: true,
    scores: [23, 30, 22, 19],
  },

  away: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [20, 24, 16, 16],
  },

  playerStats: {
    time: 7 * 60 + 37,
    fieldGoals: {
      made: 1,
      attempted: 1,
    },
    threePointers: {
      made: 0,
      attempted: 1,
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
    steals: 0,
    turnovers: 1,
    blocks: {
      made: 0,
      received: 1,
    },
    faults: {
      made: 1,
      received: 0,
    },
    plusMinus: -7,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/0ilIBtFCwPY",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/ywE5BhXaoDg",
      },
    ],
  },

  recap: {
    title: "Aquí también se nos complica la cosa",
    lines: [
      "Sabíamos que iba a ser un partido disputado, incluso con posibilidades de victoria",
      "Pero pronto se nos empezó a complicar la cosa",
      "Hubo momentos en el partido que pudimos darle la vuelta al marcador, pero no cuajó",
      "Hemos estado flojos en defensa, necesitamos más intensidad",
      "Y los faros del equipo han tenido mal día, se han cargado de faltas pronto, y eso nos ha lastrado un poco también",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110613&proxima_jornada=110614",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13577/la-liga-ahorramas-regresa-a-lo-grande",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-123-13586/la-emoción-no-da-tregua-en-la-liga-ahorramas",
    },
  ],
});
