import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_02_01_fuenlabrada: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j4",
  season: "2025-26",
  date: "2026-02-01T17:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J4",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [18, 21, 29, 25],
  },

  away: {
    club: teams["fuenlabrada"],
    category: "U15M",
    scores: [21, 21, 19, 30],
  },

  playerStats: {
    time: 18 * 60 + 11,
    fieldGoals: 4,
    threePointers: 1,
    freeThrows: {
      made: 2,
      attempted: 4,
    },
    faults: 4,
    plusMinus: 15,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/QLKt8QuR8Tc",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/IZ6YK_hk1G8",
      },
    ],
  },

  recap: {
    title: "¡Casi la cagamos!",
    lines: [
      "Veníamos de hacer partidos históricos, y en éste casi hacemos historia",
      "Pero de las malas",
      "Malos, muy malos en defensa, casi todas sus canastas eran bandejas fáciles",
      "Nos hemos salvado por poco, pero salvados",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103470&proxima_jornada=103471",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13061/la-liga-ahorramas-ya-apunta-a-la-cima",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-13069/liga-ahorramas-el-espect%C3%A1culo-contin%C3%BAa",
    },
  ],
});

