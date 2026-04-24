import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_02_09_tres_cantos: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j5",
  season: "2024-25",
  date: "2025-02-09T12:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J5",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [24, 21, 24, 29],
  },

  away: {
    club: teams["tres-cantos"],
    category: "U15M",
    opponent: true,
    scores: [15, 16, 17, 10],
  },

  playerStats: {
    time: 25 * 60 + 19,
    fieldGoals: 8,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 3,
    plusMinus: 24,
    efficiency: 13,
  },

  videos: {
    official: "https://youtu.be/Wvopf9FnnIg",
    others: [],
  },

  recap: {
    title: "¡Más fácil de lo esperado!",
    lines: [
      "El marcador final dice que ha sido cómodo, pero no lo ha sido tanto",
      "En el primer cuarto hemos tenido un gran susto, pero aún así, nos hemos mantenido en nuestro juego, hemos ido de menos a más, y ellos al contrario",
      "Un gran partido en equipo, con una gran defensa, y a correr mucho",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas fotos del álbum de febrero",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720323552837/with/54304137814",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84408&proxima_jornada=84409",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12357/liga-ahorramas-finaliza-la-primera-vuelta",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12364/liga-ahorramas-aqu%C3%AD-no-se-rinde-nadie",
    },
  ],
});
