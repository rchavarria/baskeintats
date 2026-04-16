import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_04_juande: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j7",
  season: "2025-26",
  date: "2026-03-04T19:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J7",
  },

  venue: venues["juande"],

  home: {
    club: teams["juande"],
    category: "U16M",
    opponent: true,
    scores: [9, 22, 11, 7],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [27, 20, 18, 23],
  },

  playerStats: {
    time: 17 * 60 + 4,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 2,
    },
    faults: 3,
    plusMinus: 20,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/KkbG4uaXo0A",
    others: [
      {
        label: "canal Pou",
        url: "https://youtu.be/cxsmQk84zfE",
      },
    ],
  },

  recap: {
    title: "¡Bastante mejor que la ida!",
    lines: [
      "Había un poco de tensión, porque era un partido muy importante para nosotros, no podíamos fallar",
      "Pero los cachorros lo hicieron genial, desde el minuto cero",
      "Intensos, en ataque, en defensa, algún pequeño fallo pero bastante contundentes",
      "Trabajo hecho y bien hecho, la cosa está muy de cara para lograr los objetivos de la temporada",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      type: "photo",
      label: "¡¡ Nosotros !!",
      url: "https://www.flickr.com/photos/fbmadrid/55128581652/in/album-72177720332315809",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103533&proxima_jornada=103534",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-13101/liga-ahorramas-que-el-espect%C3%A1culo-no-pare",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-13113/liga-ahorramas-%C3%BAltimo-sprint!",
    },
  ],
});

