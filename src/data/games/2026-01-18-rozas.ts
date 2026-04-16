import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_18_rozas: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j2",
  season: "2025-26",
  date: "2026-01-18T10:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J2",
  },

  venue: venues["ceip-san-jose"],

  home: {
    club: teams["rozas"],
    category: "U16M",
    opponent: true,
    scores: [16, 8, 16, 13],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [16, 16, 15, 10],
  },

  playerStats: {
    time: 25 * 60 + 27,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 4,
      attempted: 6,
    },
    faults: 5,
    plusMinus: 15,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/iXXdFIsv_Yo",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/RpMTLFXQ8VY",
      },
    ],
  },

  recap: {
    title: "¡Menuda pasada!",
    lines: [
      "Menudo partidazo se han marcado los cachorros",
      "Han estado super peleones, muy sólidos en defensa, y sobre todo, anulando al jugador estrella rival",
      "No tenía muchas esperanzas de ganar este partido, pero los chicos me han callado la boca",
      "Han jugado espectacular y se han llevado la victoria",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de enero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331399343/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103468&proxima_jornada=103469",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-13028/la-liga-ahorramas-se-llena-de-partidazos",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13038/la-liga-ahorramas,-a-pleno-rendimiento",
    },
  ],
});

