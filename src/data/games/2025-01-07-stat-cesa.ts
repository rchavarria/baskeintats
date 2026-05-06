import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_01_03_seleccion_murcia} from "./2025-01-03-seleccion-murcia.ts";
import {game_2025_01_04_seleccion_melilla} from "./2025-01-04-seleccion-melilla.ts";
import {game_2025_01_04_seleccion_canarias} from "./2025-01-04-seleccion-canarias.ts";
import {game_2025_01_05_seleccion_baleares} from "./2025-01-05-seleccion-baleares.ts";
import {game_2025_01_06_seleccion_galicia} from "./2025-01-06-seleccion-galicia.ts";
import {game_2025_01_07_seleccion_valencia} from "./2025-01-07-seleccion-valencia.ts";

export const stat_2025_01_07_cesa: Stats = StatsSchema.parse({
  id: "S45-stat-cesa",
  type: "stats",
  season: "2024-25",
  date: "2025-01-07T00:00:00Z",

  title: "Campeonato de España de Selecciones Autonómicas",
  category: "U14M",

  games: [
    game_2025_01_07_seleccion_valencia,
    game_2025_01_06_seleccion_galicia,
    game_2025_01_05_seleccion_baleares,
    game_2025_01_04_seleccion_canarias,
    game_2025_01_04_seleccion_melilla,
    game_2025_01_03_seleccion_murcia,
  ],

  description: [
    "🤩 ¡¡ Campeones de España !! 🤩 ",
    "Menuda pasada de campeonato, impecable, para al final proclamarse Campeones de España",
  ],

  references: [
    {
      type: "article",
      label: "Campeones de España",
      url: "https://www.fbm.es/noticia-123-12308/campeones-de-espa%C3%B1a!",
    },
    {
      type: "video",
      label: "Ceremonia de entrega de premios",
      url: "https://www.twitch.tv/videos/2346705531?t=02h47m40s",
    },
    {
      type: "document",
      label: "Revista oficial del campeonato",
      url: "https://www.feb.es/Documentos/Archivo/upload/REVISTAKDTINF2025ok.pdf",
    },
    {
      type: "article",
      label: "No solo ha sido la infantil la que ha cosechado triunfos, otras selecciones madrileñas también",
      url: "https://www.fbm.es/noticia-123-12317/%C3%A9xito-de-las-selecciones-madrile%C3%B1as",
    },
    {
      type: "article",
      label: "Sin olvidarnos de cómo comenzó la selección infantil",
      url: "https://www.fbm.es/noticia-89-12286/selecci%C3%B3n-infantil-masculina-2025",
    },
    {
      type: "photo",
      label: "Album KDTINF2025 de la FEB",
      url: "https://www.flickr.com/photos/fbmadrid/54254576180/in/album-72177720323065549",
    },
    {
      type: "photo",
      label: "Y otras de la Federación Española en Foto FEB",
      url: "https://www.fotofeb.es/tienda-online/kdt-inf-2025/infantil/fotos-individuales-y-equipo-2/masculino-7/comunidad-de-madrid-10",
    },
    {
      type: "article",
      label: "Rematando ya el campeonato, unas palabras del entrenador: Los campeones de España, uno a uno",
      url: "https://www.fbm.es/noticia-123-12323/los-campeones-de-espa%C3%B1a,-uno-a-uno",
    },
    {
      type: "article",
      label: "Unos días más tarde... Unidos para siempre",
      url: "https://www.fbm.es/noticia-90-12359/unidos-para-siempre",
    },
    {
      type: "photo",
      label: "Donde la federación homenajeó a las 4 selecciones",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720323633331/",
    },
  ],
});
