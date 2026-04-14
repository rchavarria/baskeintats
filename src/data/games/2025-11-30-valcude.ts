import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_11_30_valcude: Game = GameSchema.parse({
  id: "S56-liga-plata-f1-g4-j9",
  season: "2025-26",
  date: "2025-11-30T17:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 1 - Grupo 4",
    round: "J9",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [27, 19, 27, 14],
  },

  away: {
    club: teams["valcude"],
    category: "U16M",
    scores: [16, 18, 11, 2],
  },

  playerStats: {
    time: 25 * 60 + 20,
    fieldGoals: 8,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 3,
    },
    faults: 4,
    plusMinus: 28,
    efficiency: 13,
  },

  videos: {
    official: "https://youtu.be/AB4vLpvYBME",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/dzo_NdLT-Tc",
      },
    ],
  },

  recap: {
    title: "¡Recuperados!",
    lines: [
      "Lo mejor de este partido no es el marcador, ni haber ganado, ni nada que sea visible",
      "Lo mejor es que los chicos se han demostrado a sí mismos que son capaces de jugar bien, en equipo, contentos, con fuerza. A pesar de los errores, que siempre los va a haber",
      "Tomamos un poco de confianza para afrontar la última jornada, el partido más duro del grupo",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720330208384/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93840&proxima_jornada=93841",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12956/liga-ahorramas-nadie-quiere-quedarse-atr%C3%A1s",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12967/liga-ahorramas-emoci%C3%B3n-hasta-el-final",
    },
  ],
});

