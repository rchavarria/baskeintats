import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_12_13_san_jorge: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j10",
  season: "2025-26",
  date: "2025-12-13T19:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J10",
  },

  venue: venues["diaz-miguel"],

  home: {
    club: teams["san-jorge"],
    category: "U16M",
    scores: [19, 25, 18, 20],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [25, 18, 21, 13],
  },

  playerStats: {
    time: 17 * 60 + 44,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 4,
    plusMinus: 10,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-jlGneJLtks",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/DiKJXgVI-vE",
      },
    ],
  },

  recap: {
    title: "¡Partido muy competido!",
    lines: [
      "Qué lástima, casi lo tuvimos, no pudimos aguantar la ventaja que tomamos al principio del partido",
      "Las faltas nos lastraron y no pudimos jugar todo lo que quisimos",
      "Aun así, buen partido, competido hasta el final, que seguro que los nuestros sabrán aprovechar para crecer como jugadores",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93841&proxima_jornada=93842",
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

