import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_08_estudiantes: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j1",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-08T10:30:00Z",

  competition: {
    name: "Liga Ahorramás - Cadete - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J1",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [22, 21, 17, 11],
  },

  away: {
    club: teams.estudiantes,
    category: "U16M",
    opponent: true,
    scores: [25, 17, 12, 24],
  },

  playerStats: {
    time: 29 * 60 + 7,
    fieldGoals: {
      made: 4,
      attempted: 9,
    },
    threePointers: {
      made: 1,
      attempted: 3,
    },
    freeThrows: {
      made: 3,
      attempted: 4,
    },
    rebounds: {
      offensive: 2,
      defensive: 2,
    },
    assists: 1,
    steals: 2,
    turnovers: 1,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 5,
      received: 2,
    },
    plusMinus: -11,
    efficiency: 10,
  },

  videos: {
    official: "https://youtu.be/u8AJw0atlZ4",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/6eJG0xrAMxI",
      },
    ],
  },

  recap: {
    title: "¡El cuarto 'casi'!",
    lines: [
      "Otra maldita vez, y esta vez lo teníamos casi todo de cara",
      "Casi. Otro más. Y ya van cuatro",
      "Hacia el final del partido, íbamos algún punto arriba",
      "Pero el cansancio hace mella, y los últimos minutos nos ha faltado un poquitín",
      "Eso, y a ellos les ha sobrado suerte, con dos triples a tablero, feísimos, de pura suerte",
      "Pero canastas, al fin y al cabo",
      "Y ya está, otra victoria más que se nos escapa",
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
      // Grupo 17503 = Liga Ahorramás - Cadete - Oro
      // F1 - G2 - J1 = Última jornada 110840
      // F1 - G2 - J2 = 110841
      // F1 - G2 - J3 = 110842
      // F1 - G2 - J4 = 110843
      // F1 - G2 - J5 = 110844
      // F1 - G2 - J6 = 110845
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17503&informe=resultados-clasificacion-proxima&ultima_jornada=110840&proxima_jornada=110841",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13606/liga-ahorramas-arranca-la-segunda-vuelta",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-123-13614/la-liga-ahorramas-sube-su-intensidad-en-la-segunda-vuelta",
    },
  ],
});
