import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_09_26_torrelodones: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-j2",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-09-26T17:30:00Z",

  competition: {
    name: "Liga Ahorramás - Cadete - Oro",
    category: "U16M",
    phase: "Fase 1",
    round: "J2",
  },

  venue: venues.torrelodones,

  home: {
    club: teams.torrelodones,
    category: "U16M",
    opponent: true,
    scores: [21, 19, 17, 31],
  },

  away: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [19, 29, 19, 14],
  },

  playerStats: {
    time: 27 * 60 + 13,
    fieldGoals: {
      made: 8,
      attempted: 9,
    },
    threePointers: {
      made: 0,
      attempted: 4,
    },
    freeThrows: {
      made: 7,
      attempted: 10,
    },
    rebounds: {
      offensive: 2,
      defensive: 5,
    },
    assists: 0,
    steals: 2,
    turnovers: 3,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 3,
      received: 6,
    },
    plusMinus: -9,
    efficiency: 25,
  },

  videos: {
    official: "https://youtu.be/ur2_GO1mACE",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/SRX4kd1zLs8",
      },
    ],
  },

  recap: {
    title: "¡Qué rabia!",
    lines: [
      "Era nuestro, lo teníamos, nos lo habíamos trabajado durante 3 cuartos",
      "Pero el otro equipo echó el resto el último cuarto, nos recortó, nos acojonamos y nos mordieron",
      "El marcador final no refleja el partido, cuando quedaban 30 segundos, estábamos empatados",
      "Le llegó la bola a nuestro cachorro, estaba liberado, tiro de 3... pero no entra",
      "A partir de ahí, nos volvemos locos, cometemos muchas faltas y meten todos los tiros libres",
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
