import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_11_23_seleccion_madrid: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-fll-3o-4o",
  season: "2025-26",
  date: "2025-11-23T08:00:00Z",
  type: "advanced-game",

  competition: {
    name: "XVI Torneo Fundación Leucemia y Linfoma",
    category: "U15M",
    phase: "Final",
    round: "3º-4º Puesto",
  },

  venue: venues["triangulo-oro"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [22, 14, 18, 19],
  },

  away: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [15, 17, 13, 27],
  },

  playerStats: {
    time: 31 * 60 + 1,
    fieldGoals: {
      made: 5,
      attempted: 8,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 6,
      attempted: 12,
    },
    rebounds: {
      offensive: 2,
      defensive: 4,
    },
    assists: 1,
    steals: 1,
    turnovers: 3,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 4,
      received: 6,
    },
    plusMinus: 6,
    efficiency: 14,
  },

  videos: {
    official: "https://youtu.be/VcOO_FdQPI0",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/a7P1HcxlT74",
      },
    ],
  },

  recap: {
    title: "¡Por los pelos!",
    lines: [
      "Un hueso duro de roer, esta selección de jovencitos",
      "Nos las prometíamos muy felices, después de ganar ayer al Joventut, pero ya el primer cuarto mostró que no iba a ser fácil",
      "Siguió el partido, y no conseguíamos romperlo",
      "Y en el último cuarto nos rompieron a nosotros, pero conseguimos reponernos y ganamos gracias a que fallaron el último tiro (cosa rara, por cierto)",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del partido",
      url: "https://www.flickr.com/photos/fbmadrid/54943697468/in/album-72177720330472562",
    },
    {
      type: "article",
      label: "Crónica de la jornada de finales",
      url: "https://www.fbm.es/noticia-96-12951/un-real-madrid-coral-y-con-mucho-futuro",
    },
  ],
});

