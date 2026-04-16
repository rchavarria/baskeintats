# Backlog

- convertir partidos amistosos de la temporada 2025-2026
- tests para la UI, al menos, para algunos casos
  - partido amistoso (para después)
- eliminar código duplicado al mostrar detalles de partidos (normal Vs avanzado)
- añadir un Event que sea las estadísticas de una fase o de un torneo, de un grupo de Games vamos
- mostrar 🤩 o 😭 según el resultado del partido, aunque no sé exactamente donde
- va a ser complicado calcular el rival si cambiamos de equipo, añadir nuevo campo en GameSchema para guardar el rival, rellenarlo a mano

## Done

- 2026-04-16: añadir un campo "favourite" a GameSchema
- 2026-04-16: añadir un campo "opponent" a GameSchema, para mostrarlo en la UI, aunque no se pueda calcular automáticamente, puede ser un flag en uno de los dos equipos
- 2026-04-16: convertir partidos del torneo de Teruel
- 2026-04-15: cuando el tiempo jugado sea 0, mostrar "Estadísticas no disponibles" en vez de mostrar 0 minutos, 0 puntos, 0 tiros, etc.
- 2026-04-15: convertir partidos del Torneo amistoso en Castilla y León, Salamanca
- 2026-04-15: tests para la UI, al menos, para algunos casos
  - un partido normal
  - un partido con estadísticas avanzadas
  - un anuncio
- 2026-04-15: convertir partidos del torneo FLL
- 2026-04-14: convertir varios anuncios a AnnouncementSchema
- 2026-04-14: revisar partidos convertidos de la primera fase (del 2010 y del 2011)
- 2026-04-13: parsear HTML de partidos con estadísticas avanzadas y crear advancedPlayerStats en cada GameSchema
- 2026-04-08: `npm run validate` validates data can be correctly parsed
