import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_09_27_torrejon: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-g1-j2",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-09-27T18:00:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J2",
  },

  venue: venues.ferrandiz,

  home: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [20, 24, 19, 27],
  },

  away: {
    club: teams.torrejon,
    category: "U18M",
    opponent: true,
    scores: [31, 27, 18, 25],
  },

  playerStats: {
    time: 22 * 60 + 24,
    fieldGoals: {
      made: 1,
      attempted: 1,
    },
    threePointers: {
      made: 1,
      attempted: 5,
    },
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    rebounds: {
      offensive: 0,
      defensive: 2,
    },
    assists: 1,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 2,
    },
    plusMinus: -6,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/dzfWDCt6e1o",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/URzlWe5sCHM",
      },
    ],
  },

  recap: {
    title: "¡Ayyyy, por qué poquito!",
    lines: [
      "Antes del partido ya pintaba muy complicado, Torrejón se presentó con 3 torres enormes",
      "El tamaño era brutal, pero no eran muy buenos y se cansaban con facilidad",
      "Eso nos permitió engancharnos al partido en el tercer y último cuarto, pero no fue suficiente",
      "En los minutos finales, llegamos a estar a solo 3 puntos, pero apretaron los dientes y se nos escaparon",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de septiembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720335735348",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13535/liga-ahorramas-m%C3%A1s-emoci%C3%B3n-y-grandes-duelos",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17494 = Liga Ahorramás - Junior - Oro
      // F1 - J2 = Última jornada 110611
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110611&proxima_jornada=110612",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://fbm.es/noticia-123-13549/liga-ahorramas-muchos-puntos-y-m%C3%A1xima-emoci%C3%B3n",
    },
  ],
});
