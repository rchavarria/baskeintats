import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_10_zentro: Game = GameSchema.parse({
  id: "S56-liga-plata-f3-j2",
  type: "game",
  season: "2025-26",
  date: "2026-05-10T15:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 3",
    round: "J2",
  },

  venue: venues["diaz-miguel"],

  home: {
    club: teams["zentro"],
    category: "U15M",
    opponent: true,
    scores: [ 17, 14, 18, 13 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [ 19, 24, 22, 16 ],
  },

  playerStats: {
    time: 17 * 60 + 58,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,
    plusMinus: 4,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/_FLyU9MOmN8",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/ChhGIR0hvGY",
      },
    ],
  },

  recap: {
    title: "Nah... muy fácil",
    lines: [
      "Partido muy soso",
      "Ellos venían con un equipo ya medio deshecho",
      "Algún grande está jugando con los infantiles",
      "El base con los mayores",
      "Y los que quedan... pues son bastante flojos para nosotros",
      "Y aún así, pierden los papeles, se enfadan entre ellos y se ven malas caras",
      "Aunque nosotros tampoco salimos bien parados: broncas de pista a pista, gritos del entrenador, mucho bote, juego lento...",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de mayo (parece que solo infantiles)",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333561000/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15622&informe=resultados-clasificacion-proxima&ultima_jornada=106475&proxima_jornada=106476",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13264/liga-ahorramas-infantil-cierra-los-cuartos-mirando-a-las-f4",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13278/liga-ahorramas-volando-hacia-las-fases-finales",
    },
  ],

});
