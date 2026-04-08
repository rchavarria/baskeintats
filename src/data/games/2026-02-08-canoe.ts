import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_02_08_canoe: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j5",
  season: "2025-26",
  date: "2026-02-08T15:00:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J5",
  },

  venue: venues["pez-volador"],

  home: {
    club: teams["canoe"],
    category: "U16M",
    scores: [17, 17, 17, 30],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [13, 14, 16, 18],
  },

  playerStats: {
    time: 24 * 60 + 12,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 3,
    plusMinus: -10,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/rrrr1g0-apY",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/M2fnCQqDQ-Y",
      },
    ],
  },

  recap: {
    title: "¡No pudimos con ellos!",
    lines: [
      "El partido no iba bien encaminado, pero podríamos decir que estaba reñido, competido",
      "Había pocas posibilidades de ganar, según avanzaba, se nos escapaban un poquito más, pero no perdíamos el tren",
      "Hasta el último cuarto, ahí perdimos la cabeza, la perdimos con los árbitros, y eso nos lastró, nos desconcentró, muchas faltas técnicas, antideportivas...",
      "Y se nos escapó, una masacre",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de febrero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331775796/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103471&proxima_jornada=103472",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13074/duelos-de-altura-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13082/liga-ahorramas-que-el-ritmo-no-pare",
    },
  ],
});

