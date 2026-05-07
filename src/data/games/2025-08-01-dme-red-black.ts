import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2025_08_01_dme_red_black: FriendlyGame = FriendlyGameSchema.parse({
  id: "S45-dme-red-black",
  type: "friendly-game",
  season: "2024-25",
  date: "2025-08-01T07:15:00Z",

  competition: {
    name: "DME Team Camp",
    category: "U14M",
    phase: "Weekend",
    round: "J1",
  },

  venue: venues["dme"],

  home: {
    club: teams["dme-spain"],
    category: "U14M",
    scores: [ 66 ],
  },

  away: {
    club: teams["dme-red-black"],
    category: "U14M",
    opponent: true,
    scores: [ 50 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/DHJQLi6BjwE",
    others: [
      {
        label: "NFHS Network",
        url: "https://www.nfhsnetwork.com/events/dme-academy-daytona-beach-fl/gama99b58b128",
      },
    ],
  },

  recap: {
    title: "¡Victoria para terminar!",
    lines: [
      "Cómo lo tienen que estar disfrutando los cachorros",
      "Hubo otros dos partidos este fin de semana, pero no hay información de ellos, solo sabemos que perdieron los dos",
      "No hay estadísticas, no hay vídeos... solo unos highlights del entrenador, enlazados abajo",
      "Fueron partidos con otros equipos montados de alumnos de DME Academy",
    ],
  },

  references: [
    {
      type: "video",
      label: "Highlights de este y otros partidos del finde",
      url: "https://www.instagram.com/p/DM0CkdkRFdt",
    },
  ],

});

