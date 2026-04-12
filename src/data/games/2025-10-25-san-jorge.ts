import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_10_25_san_jorge: Game = GameSchema.parse({
  id: "S56-liga-u15-j5",
  season: "2025-26",
  date: "2025-10-25T09:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "",
    round: "J5",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [16, 15, 23, 9],
  },

  away: {
    club: teams["san-jorge"],
    category: "U15M",
    scores: [24, 9, 16, 28],
  },

  playerStats: {
    time: 27 * 60 + 6,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 0,
    plusMinus: -2,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/aXnS3mihzK4",
    others: [],
  },

  recap: {
    title: "¡Ha dolido, y mucho!",
    lines: [
      "Mecachis en la mar, se nos fue cualquier oportunidad en los últimos 5 minutos",
      "Esperaba un partido duro, con pocas posibilidades, y el primer cuarto entra dentro de lo esperado, donde ya nos sacaban cierta ventaja",
      "Pero los chicos reaccionaron, y se marcaron dos cuartos muy muy intensos, llegando a ponerse por delante varias veces",
      "Pero a falta de pocos minutos, las faltas pitadas en contra hicieron mella en la moral de los chicos y en los ánimos del público. Entre todos, sacamos a los chicos del partido y ya no hubo nada que hacer",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329467187/with/54834936079",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14618&informe=resultados-clasificacion-proxima&ultima_jornada=93836&proxima_jornada=93837",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12888/concluye-la-primera-vuelta-de-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12902/finaliz%C3%B3-la-primera-vuelta-de-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Convocatoria para Cadetes e Infantiles",
      url: "https://www.fbm.es/noticia-88-12905/concentraci%C3%B3n-de-las-preselecciones-auton%C3%B3micas",
    },
  ],
});

