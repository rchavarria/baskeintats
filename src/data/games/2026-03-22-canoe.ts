import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_22_canoe: Game = GameSchema.parse({
  id: "S56-liga-u15-f2-j10",
  season: "2025-26",
  date: "2026-03-22T12:30:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J10",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [29, 18, 17, 18],
  },

  away: {
    club: teams["canoe"],
    category: "U16M",
    scores: [16, 20, 19, 19],
  },

  playerStats: {
    time: 25 * 60 + 23,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 1,
    },
    faults: 4,
    plusMinus: 15,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/S4PAe14PO0A",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/9O2cUhSormM",
      },
    ],
  },

  recap: {
    title: "¡Whoohoo!",
    lines: [
      "Menuda pasada. Solo nos valía la victoria, contra un equipo Oro. Y los cachorros lo han conseguido.",
      "Tuvimos un gran susto en el tercer cuarto, donde nos remontaron e incluso se pusieron por delante, pero reaccionaron justo a tiempo y volvieron a recuperar la diferencia",
      "Al final, victoria super importante, que gracias a los empates nos deja terceros de grupo y nos mete en el play-in",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103476&proxima_jornada=103477",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13157/liga-ahorramas-arrancan-los-pre-playoff",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13169/liga-ahorramas-un-espectacular-fin-de-semana-dicta-sentencia",
    },
    {
      icon: "📸",
      label: "Fotos realizadas por el club",
      url: "https://www.flickr.com/gp/cbalcobendas/Sm59c2q869",
    },
  ],
});

