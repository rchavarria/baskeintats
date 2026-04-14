import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_09_28_zentro: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j2",
  season: "2025-26",
  date: "2025-09-28T18:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J2",
  },

  venue: venues["diaz-miguel"],

  home: {
    club: teams["zentro"],
    category: "U15M",
    scores: [14, 22, 17, 18],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [24, 22, 23, 19],
  },

  playerStats: {
    time: 21 * 60 + 20,
    fieldGoals: 7,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 3,
    },
    faults: 1,
    plusMinus: 17,
    efficiency: 12,
  },

  videos: {
    official: "https://youtu.be/FTDcywtaAY8",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/F02GHRZduq8",
      },
    ],
  },

  recap: {
    title: "¡Para nosotros!",
    lines: [
      "Partido igualado, donde pudimos mantener una primera ventaja inicial",
      "Empezamos mal, dormidos, como suele ser ya lo habitual",
      "Pero despertamos pronto y cogimos una buena ventaja, de 15 o así, que supimos gestionar",
      "A partir de ahí, no rompíamos el partido, tampoco conseguían alcanzarnos, y así terminó el partido",
      "Muchas faltas, mucha competitividad entre los chicos, que muchos han compartido equipo otros años...",
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
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93833&proxima_jornada=93834",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12842/liga-ahorramas-m%C3%A1xima-exigencia-desde-el-inicio",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12851/liga-ahorramas-la-emoci%C3%B3n-est%C3%A1-servida",
    },
  ],
});

