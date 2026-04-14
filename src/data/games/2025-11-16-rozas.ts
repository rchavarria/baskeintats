import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_11_16_rozas: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f1-g1-j7",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-11-16T14:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J7",
  },

  venue: venues["espiniella"],

  home: {
    club: teams["rozas"],
    category: "U16M",
    scores: [16, 10, 15, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [14, 15, 23, 20],
  },

  playerStats: {
    time: 18 * 60 + 7,
    fieldGoals: {
      made: 3,
      attempted: 6,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 0,
      defensive: 2,
    },
    assists: 1,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 4,
      received: 1,
    },
    plusMinus: 8,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/pMm3kJcVirs",
    others: [],
  },

  recap: {
    title: "¡Revancha tomada!",
    lines: [
      "Esta vez sí, esta vez jugaron bien y conseguimos vencerles",
      "Durante la primera mitad estuvo bastante igualado, hasta que pudimos sacar una ventaja, que luego supimos mantener",
      "Su número 5 acabó bastante desquiciado, quería hacerse el héroe y salió trasquilado",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93798&proxima_jornada=93799",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12920/grandes-duelos-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12931/sube-la-temperatura-en-la-liga-ahorramas",
    },
  ],

});

