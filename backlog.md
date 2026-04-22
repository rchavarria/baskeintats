# Backlog

- mostrar 🤩 o 😭 según el resultado del partido, aunque no sé exactamente donde
- comenzar a transformar los partidos de la temporada 2024-2025

- Temporada 2024-25
  - _publicar_ videos del Torneig Nord
    - ✅ J1 Sabadell
    - J2 Joventut
    - Semis Barça
    - 3-4 Mataró

## Done

- 2026-04-22: Temporada 2024-25
  - _publicar_ videos del Torneig Nord
    - J1 Sabadell
    - J2 Joventut
    - Semis Barça
    - 3-4 Mataró
- 2026-04-22: unificar Game y AdvancedGame detail page, en uno solo, lo único que cambia es la parte de estadísticas, y debería poder apoyarse en los 3 formatters
- 2026-04-19: eliminar código duplicado al mostrar detalles de partidos (normal Vs avanzado)
- 2026-04-17: añadir un Event que sea las estadísticas de una fase o de un torneo, de un grupo de Games vamos
- 2026-04-17: evento de estadísticas para: fase 1 plata
- 2026-04-17: evento de estadísticas para: fase 1 oro
- 2026-04-17: evento de estadísticas para: teruel
- 2026-04-17: evento de estadísticas para: reyes
- 2026-04-17: evento de estadísticas para: fase 2 oro
- 2026-04-17: evento de estadísticas para: fase 2 plata
- 2026-04-17: va a ser complicado calcular el rival si cambiamos de equipo, añadir nuevo campo en GameSchema para guardar el rival, rellenarlo a mano
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
