import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const announcement_2025_06_01_cec_presentacion: Announcement = AnnouncementSchema.parse({
  id: "S45-cec-presentacion",
  type: "announcement",
  season: "2024-25",
  date: "2025-06-01T00:00:00Z",

  title: "Campeonato de España de Clubes FEB",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["andres-estrada"],

  description: [
    "Después de pasarlo mal en los playoffs...",
    "y hacer los deberes en la Final 4",
    "🛩️ ¡¡Nos vamos a Huelva!!",
    "Allí nos esperan otros 31 equipos de toda España, para luchar por ser el mejor club del país",
    "No es que haya opciones de ganar, pero sí de hacer un muy buen papel",
    "🤹 Nos ha tocado el grupo A, el grupo de la muerte",
    "Estamos emparejados con Barça (bueno), Elche (campeón de la comunidad Valenciana, ha ganado al Valencia) y Obradoiro (campeón de Galicia)",
    "Así que tenemos un papelón",
    "💪 Pero que no se diga que no hemos pelado, ¡¡a por ellos!!",
  ],

  schedule: [
    {
      label: "Grupos - J1",
      date: "2025-06-01T08:30:00Z",
      opponent: teams["obradoiro"].name,
    },
    {
      label: "Grupos - J2",
      date: "2025-06-02T08:30:00Z",
      opponent: teams["elche"].name,
    },
    {
      label: "Grupos - J3",
      date: "2025-06-03T10:30:00Z",
      opponent: teams["barca"].name,
    },
    {
      label: "Octavos",
      date: "2025-06-04T08:30:00Z",
    },
  ],

  references: [
    {
      type: "document",
      label: "Calendario (pdf)",
      url: "https://www.feb.es/Documentos/Archivo/upload/CalendarioInfantilMasculino2025.pdf",
    },
    {
      type: "web",
      label: "Todos los resultados (ver 'Primera Fase A' y 'Playoff 1/8')",
      url: "https://baloncestoenvivo.feb.es/resultados/cespclubesinfmasc/37/2024",
    },
    {
      type: "article",
      label: "Revista con las plantillas",
      url: "https://www.feb.es/Documentos/Archivo/upload/PLANTILLAS%20INFANTIL%20MASCULINO.pdf",
    },
    {
      type: "photo",
      label: "Algunas fotos, muy pocas",
      url: "https://www.flickr.com/photos/febgaleriaphotos/54561368418/in/album-72177720326541321",
    },
  ],
});

