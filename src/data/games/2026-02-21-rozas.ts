import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_02_21_rozas: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j7",
  season: "2025-26",
  date: "2026-02-21T16:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J7",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [16, 19, 11, 17],
  },

  away: {
    club: teams["rozas"],
    category: "U16M",
    opponent: true,
    scores: [21, 16, 24, 28],
  },

  playerStats: {
    time: 22 * 60 + 17,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,
    plusMinus: -13,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/GT4NdwUFyNs",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/9CcbLHgQJFA",
      },
    ],
  },

  recap: {
    title: "¡Debacle total!",
    lines: [
      "No debería ser ningún drama, pero resulta que sí lo es",
      "Es un equipo que ha venido de Oro, un año mayor que nosotros, y aún así no aceptamos que nos pueda ganar",
      "Pero no nos ha ganado por ser mejor que nosotros, nos ha ganado porque nosotros nos hemos rendido muy pronto, hemos bajado los brazos",
      "Si hubiéramos defendido duro, si hubiéramos estado intensos, evitado contraataques... el resultado hubiera sido distinto. Quizá no una victoria de nuestro lado, pero al menos no nos sentiríamos tan mal",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de febrero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331775796/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103473&proxima_jornada=103474",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-13101/liga-ahorramas-que-el-espect%C3%A1culo-no-pare",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-13113/liga-ahorramas-%C3%BAltimo-sprint!",
    },
  ],
});

