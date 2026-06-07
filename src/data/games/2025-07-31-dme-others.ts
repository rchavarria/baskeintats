import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2025_07_31_dme_others: FriendlyGame = FriendlyGameSchema.parse({
  id: "S45-dme-others",
  type: "friendly-game",
  season: "2024-25",
  date: "2025-07-31T10:00:00Z",

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
    scores: [ 73 ],
  },

  away: {
    club: teams["dme-others"],
    category: "U14M",
    opponent: true,
    scores: [ 72 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/DHJQLi6BjwE",
    others: [
      {
        label: "NFHS Network",
        url: "https://www.nfhsnetwork.com/events/dme-academy-daytona-beach-fl/gam4ae457be7c",
      },
    ],
  },

  recap: {
    title: "Preparando los partidos de este fin de semana",
    lines: [
      "Partido amistoso preparando el fin de semana",
    ],
  },

  references: [
    {
      type: "video",
      label: "Trabajo semanal con Coach Joan",
      url: "https://www.instagram.com/p/DMxc0BxxX1m/",
    },
    {
      type: "video",
      label: "Habilidades y preparación física",
      url: "https://www.instagram.com/p/DM3UPlLRgSv/",
    },
  ],

});

