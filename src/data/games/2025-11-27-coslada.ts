import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_11_27_coslada: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j8",
  season: "2025-26",
  date: "2025-11-27T18:45:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J8",
  },

  venue: venues["plantio"],

  home: {
    club: teams["coslada"],
    category: "U16M",
    scores: [11, 28, 20, 25],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [22, 20, 19, 6],
  },

  playerStats: {
    time: 12 * 60 + 4,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    faults: 3,
    plusMinus: 3,
    efficiency: -1,
  },

  videos: {
    official: "https://youtu.be/RYQzvLLpUnA",
    others: [],
  },

  recap: {
    title: "¡Desastre total!",
    lines: [
      "Nada, nada, partido para olvidar de todas... todas",
      "Según los expertos, no pasa nada, es un partido intrascendente, que no afecta a la clasificación",
      "Pero donde creo que sí que va a afectar va a ser a la moral de los chicos",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720330208384/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93839&proxima_jornada=93840",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-12937/la-liga-ahorramas-comienza-a-mirar-hacia-la-segunda-fase",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12955/liga-ahorramas-%C3%BAltimo-sprint",
    },
  ],
});

