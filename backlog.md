# Backlog

- eliminar código duplicado al mostrar detalles de partidos (normal Vs avanzado)
- mostrar 🤩 o 😭 según el resultado del partido, aunque no sé exactamente donde
- va a ser complicado calcular el rival si cambiamos de equipo, añadir nuevo campo en GameSchema para guardar el rival, rellenarlo a mano

## Done

- 2026-04-17: evento de estadísticas para: fll
  - la StatsCard tiene que pintar una tabla con los partidos
    - el tiempo jugado en la tabla se debe mostrar como 09:43, crear componente UI para ello y reulizarlo por ahí
- 2026-04-16: tests para la UI para partidos amistosos
- 2026-04-16: convertir partidos amistosos de la temporada 2025-2026
  - 1-mar-26, amistoso contra UCAM Murcia, en casa, pero no hay muchos datos que digamos, solo el video, si quieres más, tienes que analizarlo
    - no merece ni la pena, el video son 10 minutos
  - marcar los partidos amistosos como tales para poder filtrarlos en la UI, poner un emoji adecuado...
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
