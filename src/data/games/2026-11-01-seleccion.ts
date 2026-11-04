import type { FriendlyGame } from "../../model/GameSchema.ts";
import { FriendlyGameSchema } from "../../model/GameSchema.ts";
import { EmptyPlayerStats } from "../../model/PlayerSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_01: FriendlyGame = FriendlyGameSchema.parse({
  id: "S67-amistoso-seleccion",
  type: "friendly-game",
  season: "2026-27",
  date: "2026-11-01T12:00:00Z",

  competition: {
    name: "Amistoso",
    category: "U16M",
    phase: "CESA 2027",
    round: "Preselecciones",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U16M",
    opponent: true,
    scores: [17, 17, 24, 27],
  },

  away: {
    club: teams["seleccion-madrid"],
    category: "U18M",
    scores: [22, 23, 23, 21],
  },

  playerStats: {
    time: 21 * 60 + 30,
    fieldGoals: 2,
    threePointers: 0, // 1 fallado
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,

    // al menos 3 asistencias por ahí...

    // ni idea
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Blancos contra Rojos",
    lines: [
      "La impresión es que ha jugado mucho, pero claro, eran 9 u 8, había minutos para repartir",
      "En mi opinión, ha jugado bien, ha defendido bien, ha corrido bien, ha hecho buenas asistencias, ha hecho buenos cortes...",
      "No ha metido millones de canastas, pero ha participado del juego",
      "Feedback del seleccionador:",
      "_Jugador_!, _persigue (o algo)_ todo el rato a la pelota",
      "¡Bien _Jugador_! ¡Sigue así! (minuto 4 del tercero)",
      "Feedback mio:",
      "Atento al pase cuando cortes, aunque sea inesperado. Sí, ya sé, has hecho un corte super claro y no te lo han pasado, pero atento al pase",
      "No se entera de dónde tiene que sacar",
    ],
  },

  references: [],
});

/*
tiempos
6:20

1:56
6:00 7:56

3:03
0:24 3:27

3:47

total jugado 21:30
 */

/*

Cronología de los eventos:

6:20 entra

Asistencia en 4:44 a Santi

Einar, persigue todo el rato a la pelota, no se qué todo el rato a la pelota, le dice Gorka

Varias asistencias a Santi

Fuera a las 8:04 del segundo

Entra en el 6:00 o así (creo que aquí es cuando se lesiona William)

Cuando cortes, atento al pase
Aunque en un corté super claro no te lo hayan pasado

Canaston en 1:34 con eitoestep precioso

No sé entera de dónde tiene que sacar

Al descanso vamos 34-45 ganando

Un triple fallado en el segundo cuarto

Dentro en el 6:12 del tercero

Segunda falta defendiendo a dos, pero podría haber metido 2+1

Bien Einar sigue así, en el minutos 4 del tercero

Contraataque y asistencia a bucero en el 3:30

Fuera en el 3:15 por que le sube el gemelo

Sale cuando quedan 24 segundo, hace un corte desde esquina y canastas

58-68 ganando al final del tercero

Tercera falta en 9:06 del cuarto

Fuera en el 6:13 , del cuarto, sensible mente cansando

*/