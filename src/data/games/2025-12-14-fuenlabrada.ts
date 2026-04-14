import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_12_14_fuenlabrada: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-j10",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-12-14T17:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J10",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [9, 17, 12, 13],
  },

  away: {
    club: teams["fuenlabrada"],
    category: "U16M",
    scores: [15, 22, 27, 18],
  },

  playerStats: {
    time: 24 * 60 + 20,
    fieldGoals: {
      made: 1,
      attempted: 2,
    },
    threePointers: {
      made: 1,
      attempted: 1,
    },
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    rebounds: {
      offensive: 1,
      defensive: 2,
    },
    assists: 1,
    steals: 0,
    turnovers: 3,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 0,
      received: 0,
    },
    plusMinus: -2,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/uxgLujPrkt0",
    others: [],
  },

  recap: {
    title: "¡Lo esperado!",
    lines: [
      "Ni más ni menos, es justo lo que esperábamos",
      "Quitando algún rato donde nos rendimos, el equipo lo intentó, pero nos costaba mucho pisar pintura, y no somos unos magníficos tiradores",
      "Por nuestra parte contentos, hizo lo que tenía que hacer, defendió bien, participó del juego en equipo y estuvo siempre con buena actitud",
      "Eso es lo que le pedimos, que lo de todo y que aprenda, ya vendrán partidos mejores",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de diciembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720330932743",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93801&proxima_jornada=93802",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12977/liga-ahorramas-suspense-hasta-el-final",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12989/concluye-la-primera-fase-de-la-liga-ahorramas",
    },
  ],

});

