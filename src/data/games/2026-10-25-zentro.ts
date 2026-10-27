import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_10_25_zentro: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j5",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-10-25T17:15:00Z",

  competition: {
    name: "Liga Ahorramás - Cadete - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J5",
  },

  venue: venues["diaz-miguel"],

  home: {
    club: teams.zentro,
    category: "U16M",
    opponent: true,
    scores: [24, 25, 18, 26],
  },

  away: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [13, 8, 19, 13],
  },

  playerStats: {
    time: 27 * 60 + 11,
    fieldGoals: {
      made: 1,
      attempted: 6,
    },
    threePointers: {
      made: 1,
      attempted: 4,
    },
    freeThrows: {
      made: 2,
      attempted: 6,
    },
    rebounds: {
      offensive: 1,
      defensive: 2,
    },
    assists: 1,
    steals: 0,
    turnovers: 3,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 4,
    },
    plusMinus: -17,
    efficiency: -2,
  },

  videos: {
    official: "https://youtu.be/tfrYbKtiP3Q",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/Mj7Zq0vcrtI",
      },
    ],
  },

  recap: {
    title: "¡Joder qué paliza!",
    lines: [
      "No había muchas esperanzas, después de ver lo que Zentro estaba haciendo",
      "Pero joder... Esta paliza tampoco",
      "Es que no han tenido compasión ninguna",
      "Desde el primer cuarto ya quedó claro que no podríamos hacer mucho",
      "Pero en el segundo cuarto, incluso nuestro entrenador ya se había rendido",
      "El tercer cuarto cogimos un poco de ritmo",
      "Y el último más de lo mismo",
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
      // F1 - G2 - J5 = 110844
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17503&informe=resultados-clasificacion-proxima&ultima_jornada=110844&proxima_jornada=110845",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13591/liga-ahorramas-grandes-duelos-a-la-vista",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-104-13596/la-liga-ahorramas-cierra-la-primera-vuelta-con-muchas-emociones",
    },
  ],
});
