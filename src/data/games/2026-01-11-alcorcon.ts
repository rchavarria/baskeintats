import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_11_alcorcon: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j1",
  season: "2025-26",
  date: "2026-01-11T10:30:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J1",
  },

  venue: venues["canaleja"],

  home: {
    club: teams["alcorcon"],
    category: "U16M",
    scores: [17, 19, 13, 17],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [29, 22, 18, 19],
  },

  playerStats: {
    time: 24 * 60 + 1,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 2,
    },
    faults: 2,
    plusMinus: 3,
    efficiency: 4,
  },

  videos: {
    official: "https://youtu.be/O_MukJ1ROYY",
    others: [],
  },

  recap: {
    title: "¡Venganza con el puñito cerrado!",
    lines: [
      "No sé qué esperaba el contrincante. A los 2011 les ganó los dos partidos, pero este equipo no es el mismo, queda claro que el 2010 es mejor, y puede más",
      "Ha sido una victoria super clara, solamente ha habido un momento en el partido donde la victoria a peligrado un poco, porque se han acercado a los 6 puntos, pero no han ganado ningún cuarto",
      "El equipo ha jugado sólido, bien en defensa, con mucho acierto de 3",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de enero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331399343/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103527&proxima_jornada=103528",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-13022/comienza-la-segunda-fase-de-la-liga-ahorramas!",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13027/liga-ahorramas-menudo-comienzo",
    },
  ],
});

