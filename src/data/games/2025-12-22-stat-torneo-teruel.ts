import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_12_19_malaga} from "./2025-12-19-malaga.ts";
import {game_2025_12_19_torrent} from "./2025-12-19-torrent.ts";
import {game_2025_12_20_olivar} from "./2025-12-20-olivar.ts";
import {game_2025_12_20_sevilla} from "./2025-12-20-sevilla.ts";
import {game_2025_12_21_elche} from "./2025-12-21-elche.ts";

export const stat_2025_12_22_torneo_teruel: Stats = StatsSchema.parse({
  id: "S56-stat-torneo-teruel",
  type: "stats",
  season: "2025-26",
  date: "2025-12-22T00:00:00Z",

  title: "XVII Torneo Tocando las Estrellas - Estadísticas",
  category: "U15M",

  games: [
    game_2025_12_19_malaga,
    game_2025_12_19_torrent,
    game_2025_12_20_olivar,
    game_2025_12_20_sevilla,
    game_2025_12_21_elche,
  ],

  description: [
    "Aunque la sensación es que podríamos haberlo ganado, al menos, haber jugado la final",
    "Pero un mal primer partido nos arrastró abajo en la tabla",
    "Aun así, la sensación final es muy satisfactoria, creo que los cachorros han conectado, " +
    "este torneo ha sido un punto de inflexión en el equipo, en su confianza como equipo, " +
    "han sido capaces de sacar adelante varias situaciones complicadas",
  ],

  references: [
    {
      type: "social-media",
      label: "Tournament organizer on Instagram",
      url: "https://www.instagram.com/deportes_gudarjavalambre/",
    },
    {
      type: "photo",
      label: "Las imágenes oficiales irán apareciendo en el Facebook de la organización",
      url: "https://www.facebook.com/people/Torneo-de-baloncesto-U15-Comarca-G%C3%BAdar-Javalambre/100066847860601/",
    },
    {
      type: "video",
      label: "Todos los partidos se han retransmitido por el canal de YouTube de InGame Productions",
      url: "https://www.youtube.com/@ingameproducciones2327",
    },
  ],
});
