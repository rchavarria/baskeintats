# Backlog

- cuando el tiempo jugado sea 0, mostrar "Estadísticas no disponibles" en vez de mostrar 0 minutos, 0 puntos, 0 tiros, etc.
- tests para la UI, al menos, para algunos casos
  - partido amistoso (para después)
- convertir partidos del torneo de Teruel
- añadir un Event que sea las estadisticas de una fase o de un torneo, de un grupo de Games vamos
- mostrar 🤩 o 😭 según el resultado del partido, aunque no se exactamente donde
- va a ser complicado calcular el rival si cambiamos de equipo, añadir nuevo campo en GameSchema para guardar el rival, rellenarlo a mano

## Done

- 2026-04-15: cuando el tiempo jugado sea 0, mostrar "Estadísticas no disponibles" en vez de mostrar 0 minutos, 0 puntos, 0 tiros, etc.
- 2026-04-15: convertir partidos del Torneo amistoso en Castilla y León, Salamanca
- 2026-04-15: tests para la UI, al menos, para algunos casos
  - un partido normal
  - un partido con estadisticas avanzadas
  - un anuncio
- 2026-04-15: convertir partidos del torneo FLL
- 2026-04-14: convertir varios anuncios a AnnouncementSchema
- 2026-04-14: revisar partidos convertidos de la primera fase (del 2010 y del 2011)
- 2026-04-13: parsear HTML de partidos con estadisticas avanzadas y crear advancedPlayerStats en cada GameSchema
- 2026-04-08: `npm run validate` validates data can be correctly parsed
