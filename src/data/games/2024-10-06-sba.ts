import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_10_06_sba: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j3",
  season: "2024-25",
  date: "2024-10-06T17:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J3",
  },

  venue: venues["sba-arena"],

  home: {
    club: teams["sba"],
    category: "U14M",
    opponent: true,
    scores: [24, 29, 15, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [29, 27, 31, 24],
  },

  playerStats: {
    time: 23 * 60 + 10,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 4,
    plusMinus: 19,
    efficiency: 7,
  },

  videos: {
    official: "https://www.youtube.com/@FF-of-FF", // video no disponible
    others: [],
  },

  recap: {
    title: "¡Miles de canastas!",
    lines: [
      "¿Has visto el marcador? Muchísimos puntos. Hemos ganado con una gran ventaja, sí, pero nos han metido muchos, muchos puntos.",
      "Algunos comentan que hemos jugado corriendo como locos, en un correpasillos",
      "La verdad es que ha sido un partido muy intenso. Lo hemos vivido con cierto temor, al menos hasta el descanso, donde el marcador estaba igualado.",
      "Pero al comienzo del tercer cuarto, hemos puesto tierra de por medio y ya no nos han podido alcanzar",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74717&proxima_jornada=74718",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-123-12143/liga-ahorramas-llegan-los-primeros-grandes-duelos",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-104-12152/los-grandes-duelos-dictan-sentencia",
    },
  ],
});

