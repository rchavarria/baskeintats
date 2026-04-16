import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_11_22_joventut: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-fll-j2",
  season: "2025-26",
  date: "2025-11-22T10:15:00Z",
  type: "advanced-game",

  competition: {
    name: "XVI Torneo Fundación Leucemia y Linfoma",
    category: "U15M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["triangulo-oro"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [23, 16, 25, 18],
  },

  away: {
    club: teams["joventut"],
    category: "U15M",
    opponent: true,
    scores: [8, 16, 21, 20],
  },

  playerStats: {
    time: 25 * 60 + 14,
    fieldGoals: {
      made: 2,
      attempted: 7,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 4,
      attempted: 4,
    },
    rebounds: {
      offensive: 1,
      defensive: 7,
    },
    assists: 2,
    steals: 1,
    turnovers: 3,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 2,
    },
    plusMinus: 6,
    efficiency: 11,
  },

  videos: {
    official: "https://youtu.be/ywC2ek-Qo6U",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/21IzKcUoKeo",
      },
    ],
  },

  recap: {
    title: "¡Y nos tomamos la revancha!",
    lines: [
      "Partidazo, sí señor",
      "Nos eliminaron del campeonato de España el año pasado, y del de alevín también. Le teníamos bastantes ganas a este equipo",
      "Y hoy hemos podido con ellos",
      "Ha sido una pasada, ganarle a un equipo con dos chicos en la selección española, ¡wow!",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del partido",
      url: "https://www.flickr.com/photos/fbmadrid/54942688055/in/album-72177720330472562",
    },
    {
      type: "article",
      label: "Crónica de la jornada 2",
      url: "https://www.fbm.es/noticia-96-12949/unicaja-pasa-a-la-final-femenina-en-una-intensa-jornada-de-ma%C3%B1ana",
    },
  ],
});

