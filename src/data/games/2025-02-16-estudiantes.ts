import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_02_16_estudiantes: Game = GameSchema.parse({
  id: "S45-liga-oro-fase2-j6",
  season: "2024-25",
  date: "2025-02-16T10:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 2",
    round: "J6",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [12, 20, 23, 20],
  },

  away: {
    club: teams["estudiantes"],
    category: "U15M",
    opponent: true,
    scores: [11, 8, 13, 23],
  },

  playerStats: {
    time: 23 * 60 + 26,
    fieldGoals: 8,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 1,
    },
    faults: 3,
    plusMinus: 13,
    efficiency: 14,
  },

  videos: {
    official: "https://youtu.be/wISGr-oyi3w",
    others: [],
  },

  recap: {
    title: "¡Prueba superada!",
    lines: [
      "No las teníamos todas con nosotros, esperábamos un partido igualado, complicado y luchado por ambos lados",
      "Y así empezó, nos costó entrar en calor, el primer cuarto estuvo igualado",
      "Pero en el segundo subimos la intensidad y nos despegamos. A partir de ahí ya fue todo rodado",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12562&informe=resultados-clasificacion-proxima&ultima_jornada=84409&proxima_jornada=84410",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12370/liga-ahorramas-arranca-la-segunda-vuelta",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12379/se-estrecha-el-camino-en-la-liga-ahorramas",
    },
  ],
});
