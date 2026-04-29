import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_25_zentro: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-playoffs-j2",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-04-25T11:15:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Playoffs",
    round: "J2",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 15, 11, 21, 21 ],
  },

  away: {
    club: teams["zentro"],
    category: "U16M",
    opponent: true,
    scores: [ 26, 31, 18, 30 ],
  },

  playerStats: {
    time: 12 * 60 + 40,
    fieldGoals: {
      made: 0,
      attempted: 0,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 0,
      defensive: 0,
    },
    assists: 1,
    steals: 0,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 3,
      received: 1,
    },
    plusMinus: -15,
    efficiency: -3,
  },

  videos: {
    official: "https://youtu.be/vsUpa_ruBD8",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/4xKAsdlE3eM",
      },
    ],
  },

  recap: {
    title: "¡Se acabó!",
    lines: [
      "Duele terminar así, pero no pudo ser. No hubo ninguna opción.",
      "El oponente es demasiado fuerte, no hay nada que hacer, desearles buena suerte nada más.",
      "Por nuestra parte, un mal partido, luchando contra los más grandes, pero sin posibilidad de hacer absolutamente nada",
    ],
  },

  references: [
    {
      type: "web",
      label: "Fases finales Cadete",
      url: "https://fbm.es/noticia-123-13246/fases-finales-de-la-liga-ahorramas-cadete",
    },
    {
      type: "photo",
      label: "Fotos del mes de abril",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333064636/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16446&informe=resultados-clasificacion-proxima&ultima_jornada=107208&proxima_jornada=107209",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13232/no-va-m%C3%A1s!-l@s-cadetes-se-la-juegan",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13239/liga-ahorramas-los-favoritos-no-fallan-y-se-citan-en-la-f4",
    },
  ],

});

