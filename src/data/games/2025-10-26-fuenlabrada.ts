import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_10_26_fuenlabrada: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f1-g1-j5",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-10-26T11:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J5",
  },

  venue: venues["arroyo"],

  home: {
    club: teams["fuenlabrada"],
    category: "U16M",
    scores: [25, 27, 17, 17],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [22, 11, 12, 21],
  },

  playerStats: {
    time: 16 * 60 + 24,
    fieldGoals: {
      made: 0,
      attempted: 2,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    rebounds: {
      offensive: 2,
      defensive: 0,
    },
    assists: 1,
    steals: 2,
    turnovers: 2,
    blocks: {
      made: 1,
      received: 3,
    },
    faults: {
      made: 4,
      received: 1,
    },
    plusMinus: -14,
    efficiency: -4,
  },

  videos: {
    official: "https://youtu.be/X2FDQsrYkyc",
    others: [],
  },

  recap: {
    title: "¡Mal partido!",
    lines: [
      "Simple y llanamente, mal partido",
      "Si había alguna posibilidad contra Fuenlabrada era hacer un buen partido, jugar intenso, defender duro, hacer todo con ganas",
      "Hubo momentos que tiraron del carro, pero un gran apagón en el segundo cuarto nos hundió demasiado, y ya no pudimos/supimos rehacernos",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329467187/with/54834936079",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93796&proxima_jornada=93797",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12888/concluye-la-primera-vuelta-de-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12902/finaliz%C3%B3-la-primera-vuelta-de-la-liga-ahorramas",
    },
  ],

});

