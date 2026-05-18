import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2024_05_20_certified_athletes: Game = GameSchema.parse({
  id: "S34-torneo-ardres-final",
  type: "game",
  season: "2023-24",
  date: "2024-05-20T13:30:00Z",
  favourite: true,

  competition: {
    name: "Torneo Internacional TIHS (Ardres, Francia)",
    category: "U13M",
    phase: "Eliminatorias",
    round: "Final",
  },

  venue: venues["ardres"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U13M",
    scores: [48],
  },

  away: {
    club: teams["certified-athletes"],
    category: "U13M",
    opponent: true,
    scores: [42],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/LnZbBW5oM74",
    others: [
      {
        label: "Canal TIHS",
        url: "https://youtu.be/rrrdg6qUP7E",
      },
      {
        label: "Backup Canal TIHS",
        url: "https://youtu.be/EY7PNCYEdek",
      },
    ],
  },

  recap: {
    title: "¡Final... y qué final!",
    lines: [
      "El partido empezó mal, el equipo francés, héroe en Ardres, jugando como local, empezó bastante bien, metiendo muchas canastas, y su jugador principal ya se había lucido en el partido de los All Star el día anterior",
      "Pero poco a poco, Madrid se fue ganando al público. Fue lo mejor de todo. Impresiona sentir cómo el público, poco a poco, va cambiando de chaqueta, de animar a un equipo para animar al contrario.",
      "Madrid se rehizo de un mal comienzo, le dió la vuelta al partido, y se trae la copa para acá",
    ],
  },

  references: [
    {
      type: "social-media",
      label: "Resultado del Torneo de Ardres (Federación de Baloncesto de Madrid)",
      url: "https://x.com/FBMadrid/status/1792655833471516732",
    },
    {
      type: "video",
      label: "(Actualización, abril del 2025) Casi un año después, cae en nuestras manos un vídeo promocional del equipo Certified Athletes: 1, 2, 3 family",
      url: "https://youtu.be/2rr5xa2lRts",
    },
    {
      type: "social-media",
      label: "(Actualización, mayo del 2026) Los equipos participantes comienzan a promocionar la edición de este año",
      url: "https://www.instagram.com/p/DYEXH-poEb6/",
    },
  ],

});
