import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_03_07_tres_cantos: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j8",
  season: "2025-26",
  date: "2026-03-07T09:45:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás",
    category: "U16M",
    phase: "Plata - Grupo D",
    round: "J8",
  },

  venue: venues["luz"],

  home: {
    club: teams["tres-cantos"],
    category: "U16M",
    opponent: true,
    scores: [17, 10, 25, 16, 5],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [13, 28, 15, 12, 15],
  },

  playerStats: {
    time: 30 * 60 + 40,
    fieldGoals: 5,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,
    plusMinus: 6,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/evK6B2uAJU8",
    others: [
      {
        label: "canal Pou",
        url: "https://youtu.be/GlniA87Gmq8",
      },
    ],
  },

  recap: {
    title: "¡Por los pelos!",
    lines: [
      "Menuda montaña rusa de emociones",
      "Empezamos mal, rompemos en el segundo cuarto, nos desinflamos hasta tal punto que nos empatan y nos vamos a la prórroga",
      "Y menos mal que la prórroga se nos dió bien y pudimos ganar",
      "Salvado un partido que se nos complicó demasiado",
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
      label: "¡¡ Otra vez nosotros !!",
      url: "https://www.flickr.com/photos/fbmadrid/55135395498/in/album-72177720332315809",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103534&proxima_jornada=103535",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-104-13128/liga-ahorramas-los-favoritos-toman-posiciones",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-13141/liga-ahorramas-llega-la-hora-de-la-verdad!",
    },
  ],
});

