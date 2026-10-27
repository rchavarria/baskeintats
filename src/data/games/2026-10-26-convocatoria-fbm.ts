import type { Announcement } from "../../model/AnnouncementSchema.ts";
import { AnnouncementSchema } from "../../model/AnnouncementSchema.ts";
import { venues } from "../venues.ts";

export const announcement_2026_10_26_fbm: Announcement = AnnouncementSchema.parse({
  id: "S67-convocatoria-fbm-2",
  type: "announcement",
  season: "2026-27",
  date: "2026-10-26T00:00:00Z",

  title: "Convocatoria #2 - Federación de Baloncesto de Madrid",
  announcementType: "call-up",
  category: "U16M",

  venue: venues["caja-magica"],

  description: [
    "Segunda convocatoria para preparar el Campeonato de España de Selecciones Autonómicas 2027.",
    "Todo sigue apuntando a que el campeonato será en Murcia, pero no está confirmado oficialmente.",
    "De los anteriormente convocados, cortan a 17, siguen 18 y añaden a uno.",
    "La convocatoria son tres entrenamientos, empezando el jueves, culminando el domingo con un partido amistoso (oponente a confirmar).",
    "Conclusión:",
    "Si el anterior corte fue difícil, éste lo será aún más.",
    "Hay que darlo todo... y más.",
  ],

  schedule: [
    {
      label: "Entreno Jueves",
      date: "2026-10-29T16:45:00Z",
    },
    {
      label: "Entreno Viernes",
      date: "2026-10-30T18:15:00Z",
    },
    {
      label: "Entreno Sábado",
      date: "2026-10-31T10:45:00Z",
    },
    {
      label: "Partido amistoso",
      date: "2026-11-01T10:45:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la convocatoria",
      url: "https://www.fbm.es/noticia-88-13598/concentraci%C3%B3n-de-las-selecciones-puente-de-todos-los-santos",
    },
    // {
    //   type: "photo",
    //   label: "Concentraciones puente de octubre 2026",
    //   url: "https://www.flickr.com/photos/fbmadrid/55584578153/in/album-72177720336101675",
    // },
  ],
});

/*

Nuevos convocados:

ANDRES ARENAS PLAZA  REAL CANOE N.C.

Se mantienen en la convocatoria:

AIRAM ALONSO ALCÁZAR 	REAL MADRID
ÁLVARO HERNÁNDEZ MARTÍNEZ 	BALONCESTO ALCOBENDAS
ÁNGEL SANTAMARÍA MARTÍIN 	DISTRITO OLÍMPICO
CARLOS AGUIRRE BLANCO 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
CHRIS MANUEL ECHEZURÍA DURÁN 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
DANIEL GARCIA BATISTA 	BALONCESTO FUENLABRADA
EINAR CHAVARRÍA LÓPEZ 	BALONCESTO ALCOBENDAS
JORGE JIMÉNEZ LÓPEZ 	REAL MADRID
JUNXI ZHANG 	ESTUDIANTES
LUCAS JUÁREZ CANALES 	REAL MADRID
MARCOS BUCERO CASTREJANA 	REAL MADRID
MARTÍN LÓPEZ CASTILLO 	ZENTRO C.B.
NOEL FUZIK  	DISTRITO OLÍMPICO
PLATON SHURMEL 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
SANTIAGO SIGUERO GARCÍA 	ESTUDIANTES
SERGIO CARBAYO SANTAMARÍA 	REAL MADRID
VICTOR KARDO NOBLEJAS  	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
YAROSLAV PATRUSHEV 	ZENTRO C.B.

Caen de la convocatoria:

ALONSO RUPÉREZ NÚÑEZ-MORGADES 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
ÁLVARO VIDAL SANZ 	ESTUDIANTES
DAVID ORTE MOTTA 	BALONCESTO FUENLABRADA
DIEGO DAPENA GARCÍA 	DISTRITO OLÍMPICO
GAEL GÓMEZ ALONSO 	REAL MADRID
GAEL PEÑA VILLARES 	ELITE INTERNATIONAL SCHOOL C.D.E
GUILLERMO ESPÍN PEREDA 	BALONCESTO FUENLABRADA
JON BOTAS DE CORTINA 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
JORGE SORIA PEÑA 	GIGANTES YOUTH SPORTS ACADEMY C.D.B.
JOSE LUIS BENÍTEZ CORDON 	ESTUDIANTES
JOSUA ZILBERMAN ZIBERMAN 	BALONCESTO ALCOBENDAS
PABLO GONGORA MORENO 	ELITE INTERNATIONAL SCHOOL C.D.E
PABLO MARTÍNEZ FERREIRO 	REAL MADRID
PABLO MONTAÑÉS 	REAL CANOE N.C.
SERGIO COTO MARTÍN 	DISTRITO OLÍMPICO
SIMÓN VALENTÍN OJEDA HRVATSKO 	TORRELODONES
UNAI GALLEGO GARCIA 	ESTUDIANTES

*/
