import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_10_19_valcude: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j4",
  season: "2025-26",
  date: "2025-10-19T16:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J4",
  },

  venue: venues["valcude"],

  home: {
    club: teams["valcude"],
    category: "U16M",
    scores: [12, 9, 12, 13],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [21, 22, 16, 16],
  },

  playerStats: {
    time: 18 * 60 + 36,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 4,
    plusMinus: 17,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/Zib5XHcfqlU",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/dYcS0p8eyy0",
      },
    ],
  },

  recap: {
    title: "¡Otra victoria contra unos mayores!",
    lines: [
      "Teníamos la esperanza de ganar, y así fue",
      "Por los partidos que habían jugado ellos hasta ahora, suponíamos que podríamos ganar, pero nunca hay que dar nada por sentado",
      "Jugando rápido desde el principio, sacando ventajas todo el rato",
      "¡Así se juega!",
      "Eso sí, los árbitros... desastre total",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329467187/with/54834936079",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93835&proxima_jornada=93836",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12869/la-liga-ahorramas-vuelve-a-lo-grande",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12886/espect%C3%A1culo-en-la-liga-ahorramas!",
    },
  ],
});

