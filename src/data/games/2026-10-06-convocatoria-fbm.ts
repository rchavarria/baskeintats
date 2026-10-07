import type { Announcement } from "../../model/AnnouncementSchema.ts";
import { AnnouncementSchema } from "../../model/AnnouncementSchema.ts";
import { venues } from "../venues.ts";

export const announcement_2026_10_06_fbm: Announcement = AnnouncementSchema.parse({
  id: "567-convocatoria-fbm-1",
  type: "announcement",
  season: "2026-27",
  date: "2026-10-06T00:00:00Z",

  title: "Convocatoria #1 - Federación de Baloncesto de Madrid",
  announcementType: "call-up",
  category: "U16M",

  venue: venues["caja-magica"],

  description: [
    "Primera convocatoria para preparar el Campeonato de España de Selecciones Autonómicas 2027",
    "El campeonato será en enero de 2027, probablemente en Murcia, estamos a la espera",
    "En esta primera convocatoria hay muchos convocados",
    "Va a ser muy difícil poder seguir todo el proceso, hay muchos chavales y muy buenos",
    "La convocatoria consta de 3 entrenamientos, de viernes a domingo",
  ],

  schedule: [
    {
      label: "Entreno",
      date: "2026-10-09T16:15:00Z",
    },
    {
      label: "Entreno",
      date: "2026-10-10T07:45:00Z",
    },
    {
      label: "Entreno",
      date: "2026-10-11T07:15:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la convocatoria",
      url: "https://www.fbm.es/noticia-88-13565/concentraciones-puente-de-octubre-2026",
    },
    // {
    //   type: "article",
    //   label: "El club recompensa el esfuerzo",
    //   url: "https://x.com/cbalcobendas/status/2001980957205918111",
    // },
  ],
});

/*

La lista de convocados es la siguiente:

AIRAM ALONSO ALCÁZAR 	REAL MADRID
ALONSO RUPÉREZ NÚÑEZ-MORGADES 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
ÁLVARO HERNÁNDEZ MARTÍNEZ 	BALONCESTO ALCOBENDAS
ÁLVARO VIDAL SANZ 	ESTUDIANTES
ÁNGEL SANTAMARÍA MARTÍIN 	DISTRITO OLÍMPICO
CARLOS AGUIRRE BLANCO 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
CHRIS MANUEL ECHEZURÍA DURÁN 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
DANIEL GARCIA BATISTA 	BALONCESTO FUENLABRADA
DAVID ORTE MOTTA 	BALONCESTO FUENLABRADA
DIEGO DAPENA GARCÍA 	DISTRITO OLÍMPICO
EINAR CHAVARRÍA LÓPEZ 	BALONCESTO ALCOBENDAS
GAEL GÓMEZ ALONSO 	REAL MADRID
GAEL PEÑA VILLARES 	ELITE INTERNATIONAL SCHOOL C.D.E
GUILLERMO ESPÍN PEREDA 	BALONCESTO FUENLABRADA
JON BOTAS DE CORTINA 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
JORGE JIMÉNEZ LÓPEZ 	REAL MADRID
JORGE SORIA PEÑA 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
JOSE LUIS BENÍTEZ CORDON 	ESTUDIANTES
JOSUA ZILBERMAN ZIBERMAN 	BALONCESTO ALCOBENDAS
JUNXI ZHANG 	ESTUDIANTES
LUCAS JUÁREZ CANALES 	REAL MADRID
MARCOS BUCERO CASTREJANA 	REAL MADRID
MARTÍN LÓPEZ CASTILLO 	ZENTRO C.B.
NOEL FUZIK  	DISTRITO OLÍMPICO
PABLO GONGORA MORENO 	ELITE INTERNATIONAL SCHOOL C.D.E
PABLO MARTÍNEZ FERREIRO 	REAL MADRID
PABLO MONTAÑÉS 	REAL CANOE N.C.
PLATON SHURMEL 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
SANTIAGO SIGUERO GARCÍA 	ESTUDIANTES
SERGIO CARBAYO SANTAMARÍA 	REAL MADRID
SERGIO COTO MARTÍN 	DISTRITO OLÍMPICO
SIMÓN VALENTÍN OJEDA HRVATSKO 	TORRELODONES
UNAI GALLEGO GARCIA 	ESTUDIANTES
VICTOR KARDO NOBLEJAS  	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
YAROSLAV PATRUSHEV 	ZENTRO C.B.

*/
