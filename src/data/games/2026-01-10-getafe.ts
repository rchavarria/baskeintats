import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_10_getafe: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j1",
  season: "2025-26",
  date: "2026-01-10T10:15:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J1",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [15, 18, 19, 14],
  },

  away: {
    club: teams["getafe"],
    category: "U16M",
    scores: [11, 19, 7, 20],
  },

  playerStats: {
    time: 27 * 60,
    fieldGoals: 4,
    threePointers: 1,
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    faults: 1,
    plusMinus: 24,
    efficiency: 12,
  },

  videos: {
    official: "https://youtu.be/zCJgLfCurXI",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/puI16XDUisk",
      },
    ],
  },

  recap: {
    title: "¡Más difícil de lo esperado!",
    lines: [
      "Nos las prometíamos muy felices, pero no resultó ser tan fácil como esperábamos",
      "Pensábamos que serían chavales de 2011, de nuestra edad, pero la mayoría del equipo era 2010, y grandísimos",
      "No eran muy buenos, pero impusieron su ritmo (de quinta autonómica) y jugamos mucho tiempo adormilados",
      "Solo un buen arreón en el tercer cuarto nos dió la ventaja suficiente como para romper el partido. Y luego conseguimos mantenerla, aunque con cierta dificultad",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103467&proxima_jornada=103468",
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

