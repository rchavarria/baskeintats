import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_10_04_coslada: Game = GameSchema.parse({
  id: "S56-liga-u15-j3",
  season: "2025-26",
  date: "2025-10-04T09:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "",
    round: "J3",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [15, 24, 24, 17],
  },

  away: {
    club: teams["coslada"],
    category: "U15M",
    scores: [13, 11, 13, 6],
  },

  playerStats: {
    time: 13 * 60 + 12,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 4,
    },
    faults: 4,
    plusMinus: 22,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/5d3blbxuQ6k",
    others: [],
  },

  recap: {
    title: "¡Pues más fácil de lo esperado!",
    lines: [
      "Sinceramente, esperábamos un partido igualado, competido, duro de jugar, contra jugadores un año mayores",
      "Pero después de un primer cuarto así, nos despegamos en el segundo cuarto y desde allí ya no nos pudieron parar, una victoria cómoda",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93834&proxima_jornada=93835",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12854/primeros-grandes-duelos-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12862/liga-ahorramas-emoci%C3%B3n-hasta-el-%C3%BAltimo-segundo",
    },
  ],
});

