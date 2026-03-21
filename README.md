# Baskeintats

SPA de estadísticas de baloncesto. Muestra datos y estadísticas de partidos, actualizados manualmente cada semana mediante archivos YAML.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **Chart.js** + **react-chartjs-2** para gráficos (pendiente de implementar)
- **js-yaml** para parsear YAML en build time

## Instalación

```bash
npm install
```

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run generate` | Parsea los YAML y genera `src/generated/` |
| `npm run dev` | Genera datos y arranca el servidor de desarrollo |
| `npm run build` | Genera datos y compila para producción |
| `npm run preview` | Sirve el build de producción |

## Añadir un partido

Crea un archivo YAML en `data/games/<temporada>/` con el nombre `YYYY-MM-DD-equipo-local-vs-equipo-visitante.yaml`.

## Estructura de carpetas

```
baskeintats/
├── data/                  # Datos YAML (editados a mano)
│   ├── teams/
│   └── games/
├── scripts/               # Script de generación YAML → TS
├── src/
│   ├── generated/         # Auto-generado (no editar)
│   ├── types/             # Interfaces TypeScript
│   ├── context/           # React Context (filtros)
│   ├── hooks/             # Custom hooks
│   ├── components/        # Componentes React
│   ├── pages/             # Páginas
│   └── lib/               # Utilidades puras
└── README.md
```
