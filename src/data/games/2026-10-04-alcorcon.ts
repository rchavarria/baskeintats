import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_10_04_alcorcon: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j3",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-10-04T11:15:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J3",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [16, 19, 18, 17],
  },

  away: {
    club: teams.alcorcon,
    category: "U16M",
    opponent: true,
    scores: [9, 27, 14, 25],
  },

  playerStats: {
    time: 30 * 60 + 14,
    fieldGoals: {
      made: 8,
      attempted: 13,
    },
    threePointers: {
      made: 1,
      attempted: 3,
    },
    freeThrows: {
      made: 4,
      attempted: 9,
    },
    rebounds: {
      offensive: 5,
      defensive: 2,
    },
    assists: 2,
    steals: 3,
    turnovers: 5,
    blocks: {
      made: 2,
      received: 0,
    },
    faults: {
      made: 4,
      received: 7,
    },
    plusMinus: -13,
    efficiency: 23,
  },

  videos: {
    official: "https://youtu.be/8cKRDBBE7QM",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/eH9KhIoZ-r4",
      },
    ],
  },

  recap: {
    title: "¡¡Noooooo!! ¡¡Cagada total!!",
    lines: [
      "Necesitábamos ganar este partido, lo necesitaban los chicos para coger confianza",
      "Pero hemos tenido un par de bajones, un par de desconexiones que nos han costado mucho",
      "Necesitamos llegar a final del partido con cierta ventaja",
      "Nos costaba un poco sacar ventaja, pero no conseguíamos mantenerla",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/-",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17503 = Liga Ahorramás - Cadete - Oro
      // F1 - G2 - J2 = Última jornada 110841
      // F1 - G2 - J3 = 110842
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17503&informe=resultados-clasificacion-proxima&ultima_jornada=110842&proxima_jornada=110843",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13553/liga-ahorramas-la-tercera-jornada-viene-cargada",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-13561/una-jornada-de-altos-vuelos-en-la-liga-ahorramas",
    },
  ],
});
