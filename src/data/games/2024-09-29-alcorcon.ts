import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_09_29_alcorcon: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j2",
  season: "2024-25",
  date: "2024-09-29T09:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U15M",
    phase: "Fase 1",
    round: "J2",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [9, 19, 18, 21],
  },

  away: {
    club: teams["alcorcon"],
    category: "U15M",
    opponent: true,
    scores: [8, 8, 17, 17],
  },

  playerStats: {
    time: 33 * 60 + 41,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,
    plusMinus: 24,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/hdBrcwIQ7KE",
    others: [],
  },

  recap: {
    title: "¡Match ball salvada!",
    lines: [
      "Esperábamos un partido bastante igualado, y así fue. El primer cuarto fue durísimo, muy igualado y con pocos puntos. En el segundo, conseguimos distanciarnos un poco, y ya aguantamos con esa diferencia el resto del partido.",
      "Pero no se podía relajar ninguno de los dos equipos. Si te relajabas, el rival te metía unas cuantas canastas seguidas.",
      "Hemos ganado un partido importantísimo, a seguir entrenando para ganar el siguiente también.",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74716&proxima_jornada=74717",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12127/liga-ahorramas-segundo-asalto",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-104-12138/esto-no-ha-hecho-m%C3%A1s-que-empezar!",
    },
    {
      type: "social-media",
      label: "Algunas fotos del club por ser el partido de la jornada",
      url: "https://www.instagram.com/p/DAjIxJMNmqt",
    },
    {
      type: "social-media",
      label: "Y otras más",
      url: "https://x.com/cbalcobendas/status/1840800074441375870",
    },
  ],
});

