import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_11_17_alcorcon: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j7",
  season: "2024-25",
  date: "2024-11-17T12:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J7",
  },

  venue: venues["canaleja"],

  home: {
    club: teams["alcorcon"],
    category: "U14M",
    opponent: true,
    scores: [18, 19, 20, 13],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [28, 22, 21, 23],
  },

  playerStats: {
    time: 26 * 60 + 27,
    fieldGoals: 5,
    threePointers: 1,
    freeThrows: {
      made: 0,
      attempted: 2,
    },
    faults: 2,
    plusMinus: 18,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/LbEfq0hFOTY",
    others: [],
  },

  recap: {
    title: "¡Hecho!",
    lines: [
      "Partido muy importante para la clasificación general, era clave ganar este partido, para nuestra tranquilidad, y los chicos lo consiguieron, bien por ellos",
      "La primera parte estuvo bastante bien, no conseguíamos despegarnos, pero lo hacíamos poco a poco",
      "La segunda parte comenzamos como unos salvajes, pero Alcorcón se recuperó y nos dio un susto bastante grande. Pero se quedó en eso, en un susto nada más. El último cuarto rematamos la faena",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74721&proxima_jornada=74722",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-123-12207/liga-ahorramas-de-partidazo-a-partidazo",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12217/la-liga-ahorramas-avanza-con-mucha-emoci%C3%B3n",
    },
  ],
});

