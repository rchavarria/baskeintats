import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_03_07_real_madrid: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j8",
  season: "2025-26",
  date: "2026-03-07T18:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J8",
  },

  venue: venues["valdebebas"],

  home: {
    club: teams["real-madrid"],
    category: "U15M",
    opponent: true,
    scores: [28, 15, 19, 19],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [20, 18, 2, 16],
  },

  playerStats: {
    time: 20 * 60 + 52,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 3,
    plusMinus: -14,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/6O0FTGzLXGI",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/AGJQboQE0n0",
      },
    ],
  },

  recap: {
    title: "¡Una mierda como un piano!",
    lines: [
      "¡Joder! Estaba casi cantado que íbamos a perder, pero joder, que teníamos 19 puntos de ventaja de la ida, no la desperdicies",
      "Hasta el descanso estuvimos bien, con idas y venidas, pero bueno, compitiendo",
      "El tercer cuarto fue pésimo, solo metidos 2 puntos, y nos afectó bastante",
      "Ya no supimos reaccionar, y el último cuarto tampoco fue espectacular",
      "Joder, si al menos los cachorros dieran señales de lucha, pero es que ni eso",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103474&proxima_jornada=103475",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-13128/liga-ahorramas-los-favoritos-toman-posiciones",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-13141/liga-ahorramas-llega-la-hora-de-la-verdad!",
    },
  ],
});

