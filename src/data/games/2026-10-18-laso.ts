import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_10_18_laso: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j4",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-10-18T18:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J4",
  },

  venue: venues.ferrandiz,

  home: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [17, 17, 18, 16],
  },

  away: {
    club: teams.laso,
    category: "U16M",
    opponent: true,
    scores: [23, 18, 28, 26],
  },

  playerStats: {
    time: 29 * 60 + 22,
    fieldGoals: {
      made: 2,
      attempted: 7,
    },
    threePointers: {
      made: 2,
      attempted: 3,
    },
    freeThrows: {
      made: 4,
      attempted: 6,
    },
    rebounds: {
      offensive: 2,
      defensive: 2,
    },
    assists: 0,
    steals: 3,
    turnovers: 4,
    blocks: {
      made: 0,
      received: 1,
    },
    faults: {
      made: 1,
      received: 5,
    },
    plusMinus: -17,
    efficiency: 12,
  },

  videos: {
    official: "https://youtu.be/haFSdL1POvY",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/K5be_59-dlM",
      },
    ],
  },

  recap: {
    title: "Duele la derrota, pero era el resultado esperado",
    lines: [
      "Casi sin notarlo, ya en el primer cuarto se despegaron un poco de nosotros",
      "Durante el resto de partido conseguimos aguantar",
      "Fuimos competitivos hasta los minutos finales",
      "Creo que el contrincante lo tenía todo bastante controlado. Si nos acercábamos, sacaba al grande y nos volvían a coger ventaja",
      "Cerca del final estuvimos cerquita, a 6 puntos nada más",
      "Pero ya en los minutos finales, se escaparon del todo",
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
      // Grupo 17503 = Liga Ahorramás - Cadete - Oro
      // F1 - G2 - J2 = Última jornada 110841
      // F1 - G2 - J3 = 110842
      // F1 - G2 - J4 = 110843
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17503&informe=resultados-clasificacion-proxima&ultima_jornada=110843&proxima_jornada=110844",
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
