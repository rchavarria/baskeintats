import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_15_torrejon: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-g1-j7",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-15T14:00:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J7",
  },

  venue: venues.limones,

  home: {
    club: teams.torrejon,
    category: "U18M",
    opponent: true,
    scores: [26, 32, 30, 21],
  },

  away: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [33, 11, 13, 16],
  },

  playerStats: {
    time: 12 * 60 + 32,
    fieldGoals: {
      made: 0,
      attempted: 2,
    },
    threePointers: {
      made: 0,
      attempted: 2,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 0,
      defensive: 2,
    },
    assists: 0,
    steals: 0,
    turnovers: 0,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: -23,
    efficiency: -4,
  },

  videos: {
    // no hay video, pero al menos está la playlist de los júniors
    official: "https://www.youtube.com/playlist?list=PLW4ozstQEst8",
    others: [],
  },

  recap: {
    title: "Una apisonadora nos pasó por encima",
    lines: [
      "No tengo muy claro qué pasó, porque llegamos ya casi al descanso",
      "Comenzamos bastante bien, aguantando el tirón",
      "Pero antes de llegar al descanso, y justo después, fue brutal",
      "Luego, ya, el último cuarto, un suplicio para nosotros, deseando que acabase el partido",
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
      // Grupo 17494 = Liga Ahorramás - Junior - Oro
      // ...
      // F1 - J7 = 110616
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110616&proxima_jornada=110617",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13619/la-lucha-por-los-lideratos-enciende-la-liga-ahorramas",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-104-13624/liga-ahorramas-tres-invictos-caen-en-la-s%C3%A9ptima-jornada",
    },
  ],
});
