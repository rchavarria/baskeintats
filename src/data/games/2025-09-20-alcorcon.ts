import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_09_20_alcorcon: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j1",
  season: "2025-26",
  date: "2025-09-20T16:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J1",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [9, 19, 28, 15],
  },

  away: {
    club: teams["alcorcon"],
    category: "U16M",
    scores: [30, 25, 12, 18],
  },

  playerStats: {
    time: 17 * 60 + 48,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 4,
    },
    faults: 1,
    plusMinus: -5,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/c2jgJLADIRc",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/VqYgL_kbCgk",
      },
    ],
  },

  recap: {
    title: "¡¡Ufff!! Va a ser complicado este año",
    lines: [
      "¡Menudo arranque! El primer cuarto nos pilló de susto, y nos cogieron demasiados puntos de ventaja",
      "Luego nos repusimos un poco, e incluso en el tercer cuarto les dimos un buen repaso",
      "Pero nada comparado con lo que habíamos perdido en el primero",
      "Al final, no pudo ser, pero al menos reaccionamos bien, luchamos, y nos fuimos con una buena sensación",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de septiembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329176624",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93832&proxima_jornada=93833",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12834/liga-ahorramas-menudo-inicio-de-competici%C3%B3n!",
    },
  ],
});

