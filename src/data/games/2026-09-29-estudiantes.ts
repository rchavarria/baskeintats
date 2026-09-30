import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_09_29_estudiantes: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j1",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-09-29T17:00:00Z",

  competition: {
    name: "Liga Ahorramás - Cadete - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J6",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams.estudiantes,
    category: "U16M",
    opponent: true,
    scores: [14, 20, 14, 12],
  },

  away: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [14, 17, 10, 11],
  },

  playerStats: {
    time: 13 * 60 + 54,
    fieldGoals: {
      made: 2,
      attempted: 6,
    },
    threePointers: {
      made: 1,
      attempted: 4,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 0,
      defensive: 2,
    },
    assists: 2,
    steals: 0,
    turnovers: 4,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 4,
      received: 0,
    },
    plusMinus: 2,
    efficiency: -4,
  },

  videos: {
    official: "https://youtu.be/Hi1maY2soJc",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/xmD6ew0ZgBc",
      },
    ],
  },

  recap: {
    title: "¡Hemos perdido una gran oportunidad!",
    lines: [
      "Veníamos a este partido con el miedo de perder de muchos puntos",
      "Pero empezamos el partido y fue bastante igualado, estaba siendo un partido con muy pocos puntos, con lo que la diferencia se mantenía siempre muy pequeña",
      "Lo malo es que no nos creímos capaces y no supimos jugar con suficiente intensidad para ganar en el último cuarto",
      "Pero lo teníamos. Era para nosotros. Y otro partido donde nos pudo el miedo a ganar",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de septiembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720335735348",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13535/liga-ahorramas-m%C3%A1s-emoci%C3%B3n-y-grandes-duelos",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17503 = Liga Ahorramás - Cadete - Oro
      // F1 - J2 = Última jornada 110841
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17503&informe=resultados-clasificacion-proxima&ultima_jornada=110841&proxima_jornada=110842",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://fbm.es/noticia-123-13549/liga-ahorramas-muchos-puntos-y-m%C3%A1xima-emoci%C3%B3n",
    },
  ],
});
