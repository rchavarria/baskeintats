import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_06_01_obradoiro: AdvancedGame = AdvancedGameSchema.parse({
  id: "S45-cec-grupos-j1",
  season: "2024-25",
  date: "2025-06-01T08:30:00Z",
  type: "advanced-game",

  competition: {
    name: "Campeonato de España de Clubes",
    category: "U15M",
    phase: "Fase de grupos",
    round: "J1",
  },

  venue: venues["andres-estrada"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [20, 29, 30, 11],
  },

  away: {
    club: teams["obradoiro"],
    category: "U15M",
    opponent: true,
    scores: [23, 7, 17, 25],
  },

  playerStats: {
    time: 23 * 60 + 14,
    fieldGoals: {
      made: 6,
      attempted: 10,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 1,
      attempted: 4,
    },
    rebounds: {
      offensive: 3,
      defensive: 4,
    },
    assists: 1,
    steals: 2,
    turnovers: 4,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: 23,
    efficiency: 14,
  },

  videos: {
    official: "https://youtu.be/ljjHnI_xRcs",
    others: [
      {
        label: "Canal FEB",
        url: "https://canalfeb.tv/video?videoId=e-72570",
      },
    ],
  },

  recap: {
    title: "¡Empezamos el campeonato con buen pie!",
    lines: [
      "Justo lo que nos hacía falta, empezar con buen pie, porque además, este puede ser el único partido que ganemos en fase de grupos",
      "Hemos dado muy buena impresión, hemos llegado a tener casi 30pt de ventaja, pero nos hemos relajado y Obradoiro ha llegado a pensar que nos podían ganar el partido",
      "Hemos reaccionado por muy poquito",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del partido",
      url: "https://www.flickr.com/photos/febgaleriaphotos/54561368418/in/album-72177720326541321",
    },
    {
      type: "stats",
      label: "Estadísticas oficiales del partido",
      url: "https://baloncestoenvivo.feb.es/partido/2471612",
    },
  ],
});

