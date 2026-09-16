import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_09_20_sba: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-j1",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-09-20T12:30:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1",
    round: "J1",
  },

  venue: venues["sba-arena"],

  home: {
    club: teams.sba,
    category: "U18M",
    opponent: true,
    scores: [28, 46, 24, 21],
  },

  away: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [24, 23, 22, 26],
  },

  playerStats: {
    time: 8 * 60 + 59,
    fieldGoals: {
      made: 3,
      attempted: 3,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    rebounds: {
      offensive: 0,
      defensive: 0,
    },
    assists: 0,
    steals: 0,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 0,
      received: 1,
    },
    plusMinus: -1,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/-",
      },
    ],
  },

  recap: {
    title: "Arrancamos, con los mayores",
    lines: [
      "Primer partido, y con los mayores, no espero hacer grandes cosas hoy",
      "Pero no ha estado mal, no ha jugado mucho, pero lo ha hecho bastante bien",
      "Una lástima ese segundo cuarto, el resto ha estado bastante competido",
      "Bastante contento con el equipo y su forma de jugar",
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
      url: "https://www.fbm.es/noticia-104-13513/la-liga-ahorramas-llena-de-emoci%C3%B3n-las-canchas",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110610&proxima_jornada=110611",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-123-13519/liga-ahorramas-festival-de-juego-y-puntos-para-empezar",
    },
  ],
});
