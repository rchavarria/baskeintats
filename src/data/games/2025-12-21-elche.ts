import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_12_21_elche: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-teruel-j5",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-12-21T10:00:00Z",
  favourite: true,

  competition: {
    name: "XVII Torneo Tocando las Estrellas",
    category: "U15M",
    phase: "Final",
    round: "5º",
  },

  venue: venues["manzanera"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [17, 18, 20, 24],
  },

  away: {
    club: teams["elche"],
    category: "U15M",
    opponent: true,
    scores: [32, 13, 15, 13],
  },

  playerStats: {
    time: 31 * 60 + 52,
    fieldGoals: {
      made: 5,
      attempted: 10,
    },
    threePointers: {
      made: 0,
      attempted: 2,
    },
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    rebounds: {
      offensive: 2,
      defensive: 6,
    },
    assists: 3,
    steals: 4,
    turnovers: 8,
    blocks: {
      made: 2,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: 6,
    efficiency: 10,
  },

  videos: {
    official: "https://youtu.be/x50qtgg91WU",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/aW6o0001hTI",
      },
    ],
  },

  recap: {
    title: "¡Venganzaaaaa!",
    lines: [
      "¡Partidazo! Comenzó justo lo contrario que el anterior. En esta ocasión, fueron ellos los que empezaron arrasando, consiguiendo una ventada de hasta 21 puntos",
      "Era increíble, les entraba todo, no conseguíamos defenderles, no llegábamos a puntear los triples",
      "Pero volvió a aparecer la garra del equipo",
      "Lucharon, lucharon y volvieron a luchar. Poco a poco fuimos recortando distancia, como una gota malaya, con muchísimo esfuerzo, sobre todo en defensa",
      "Y a falta de 3 minutos, nos pusimos por delante",
      "Ya no sabían qué hacer, defendíamos como leones, ya no tenían tanto acierto",
      "Fuimos imparables, ¡qué victoria por favor!",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos de la jornada 5",
      url: "https://www.instagram.com/p/DSwyukEjW7Z/?img_index=2",
    },
  ],
});

