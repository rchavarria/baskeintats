import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_12_01_canoe: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j9",
  season: "2024-25",
  date: "2024-12-01T12:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J9",
  },

  venue: venues["pez-volador"],

  home: {
    club: teams["canoe"],
    category: "U14M",
    opponent: true,
    scores: [21, 13, 17, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [17, 16, 15, 20],
  },

  playerStats: {
    time: 27 * 60 + 13,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 4,
    },
    faults: 3,
    plusMinus: 2,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/ZZQ3NIdd0r8",
    others: [],
  },

  recap: {
    title: "¡Qué dolor!",
    lines: [
      "Una derrota que duele, ha sido un partido duro de jugar y duro de ver",
      "Nos ha vuelto a pasar con Canoe, otra vez, no hemos podido desplegar nuestro juego. Nada de jugadas rápidas, muchas pérdidas de balón, flojos en defensa, y aún así, muchísimas faltas pitadas",
      "Pero hay que aceptar la derrota, agachar la cabeza, y a seguir trabajando",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74723&proxima_jornada=74724",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-123-12242/liga-ahorramas-la-emoci%C3%B3n-est%C3%A1-servida",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12254/liga-ahorramas-nadie-quiere-quedarse-fuera",
    },
    {
      type: "photo",
      label: "Fotos de la galería de diciembre",
      url: "https://www.flickr.com/photos/fbmadrid/54178409240/in/album-72177720322316749",
    },
  ],
});

