import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_11_18_torneo_fll: Announcement = AnnouncementSchema.parse({
  id: "S56-torneo-fll",
  type: "announcement",
  season: "2025-26",
  date: "2025-11-18T00:00:00Z",

  title: "XVI Torneo Fundación Leucemia y Linfoma",
  announcementType: "tournament",
  category: "U15M",

  venue: venues["triangulo-oro"],

  description: [
    "Torneo cadete de primer año, donde participamos por habernos clasificado en segunda posición de Madrid el año pasado",
    "Nos ha tocado el grupo difícil, donde no está la Selección Infantil (nosotros el año pasado), y nos volvemos a encontrar con el Joventut. Huele a revancha",
    "Y a partir de aquí, distintos enlaces que se han ido publicando. Han estado bastante activos publicando artículos y noticias",
    "Allí estuvimos el año pasado, con la Selección Infantil de Madrid",
  ],

  schedule: [
    {
      label: "Grupos: Real Madrid",
      date: "2025-11-21T17:45:00Z",
    },
    {
      label: "Grupos: Joventut",
      date: "2025-11-22T09:15:00Z",
    },
    {
      label: "3º-4º Puesto",
      date: "2025-11-23T07:00:00Z",
    },
    {
      label: "Final",
      date: "2025-11-23T10:45:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Página principal del torneo para la FBM",
      url: "https://www.fbm.es/noticia-96-12938/calendario-del-xvi-torneo-fundaci%C3%B3n-leucemia-y-linfoma",
    },
    {
      type: "photo",
      label: "Galería de fotos",
      url: "https://www.flickr.com/photos/fbmadrid/54938959883/in/album-72177720330472562",
    },
    {
      type: "social-media",
      label: "Anuncio del torneo",
      url: "https://x.com/FBMadrid/status/1986817595362652322",
    },
    {
      type: "social-media",
      label: "Anuncio en Instagram",
      url: "https://www.instagram.com/p/DQwz6YRDN2R/",
    },
    {
      type: "social-media",
      label: "La Selección Infantil Madrileña",
      url: "https://www.fbm.es/noticia-88-12926/selecciones-infantiles-para-el-xvi-torneo-fll",
    },
    {
      type: "video",
      label: "Hugo González animándonos a participar",
      url: "https://x.com/fleucemiaylinfo/status/1991624617417666634",
    },
    {
      type: "document",
      label: "Dossier con las plantillas",
      url: "https://www.fbm.es/descargar?seccion=noticia&id=5212&delegacion=1",
    },
    {
      type: "document",
      label: "Artículos que no hablan mucho de nuestros chicos, pero sí del torneo: Antiguos ganadores",
      url: "https://www.fbm.es/noticia-96-12953/volver-al-torneo-fll-para-ganarlo-de-nuevo",
    },
    {
      type: "document",
      label: "Antiguos ganadores",
      url: "https://www.fbm.es/noticia-96-12953/volver-al-torneo-fll-para-ganarlo-de-nuevo",
    },
    {
      type: "article",
      label: "Artículo: Cuenta atrás para el XVI Toreno FLL",
      url: "https://www.fbm.es/noticia-96-12917/cuenta-atr%C3%A1s-para-el-xvi-torneo-fundaci%C3%B3n-leucemia-y-linfoma",
    },
    {
      type: "article",
      label: "Artículo: Todos somos necesarios... en el Torneo FLL",
      url: "https://www.fbm.es/noticia-123-12933/todos-somos-necesarios-en-el-torneo-fll",
    },
    {
      type: "article",
      label: "La revista Gigantes también se hace eco: XVI Torneo FLL",
      url: "https://www.gigantes.com/mas-basket/xvi-torneo-fundacion-leucemia-linfoma/",
    },
    {
      type: "article",
      label: "en redes",
      url: "https://x.com/GIGANTESbasket/status/1990842942907633901",
    },
    {
      type: "article",
      label: "Edición anterior: XV Torneo FLL 2024",
      url: "https://rchavarria.github.io/baloncesto/temporada-24-25.html#torneo-fll",
    },
  ],
});

