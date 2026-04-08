# Main Instructions

## 1. General Project Guidelines

You are assisting with **Baskeintats**, a Basketball Statistics SPA for tracking youth basketball games and player
performance.

### Technology Stack

- **React 19** + **TypeScript 5.9** + **Vite 8**
- **Tailwind CSS 3** for styling
- **React Router 7** for navigation
- **Chart.js 4** + **react-chartjs-2** for charts (pending implementation)
- **Zod 4** for runtime schema validation
- **tsx** to run TypeScript scripts directly

## File paths

Use paths like `\\wsl.localhost\Ubuntu\home\username\project\file` to read or write project files from
the IDE

Use relative Unix-style paths like `~/project/file` when executing CLI commands

## Available Scripts

| Script             | Description                                       |
|--------------------|---------------------------------------------------|
| `npm run validate` | Validates TypeScript data can be correctly loaded |
| `npm run dev`      | Generates data and starts the development server  |
| `npm run build`    | Generates data and builds for production          |
| `npm run preview`  | Serves the production build                       |

## Key Requirements

- All code, comments, documentation must be in English, even UI elements
- All CLI commands must be executed from the root of the repository
- All code must be in TypeScript with strict type checking enabled
- Check compilation errors by running `npm run build`
- Check code works by running tests as `npm run test`
- Follow Biome linting rules for code style and formatting
- Include clear error messages with specific context
- Write Vitest tests for backend services and critical business logic

---

## 2. Project Architecture

### Directory Structure

```
baskeintats/
├── data/                    # TypeScript source data (teams, games)
│   ├── games/               # Organized by season (e.g., 2025-26/)
│   ├── teams.ts             # TypeScript data for Teams
│   └── venues.ts            # TypeScript data for Venues
├── src/
│   ├── components/          # React components
│   │   ├── filters/         # Filter UI components
│   │   ├── games/           # Game-related components
│   │   ├── layout/          # Header, Footer, Layout
│   │   └── ui/              # Reusable UI primitives
│   ├── context/             # React Context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── model/               # Zod schemas (validation)
│   ├── pages/               # Page components (routes)
│   └── types/               # TypeScript type definitions
└── public/
    └── logos/               # Team logo images
```

## 3. Naming Conventions

### Files

| Type            | Convention                      | Example              |
|-----------------|---------------------------------|----------------------|
| React Component | PascalCase                      | `GameCard.tsx`       |
| Hook            | camelCase with `use` prefix     | `useGames.ts`        |
| Utility         | camelCase                       | `filters.ts`         |
| Type file       | camelCase                       | `game.ts`            |
| Zod Schema      | PascalCase with `Schema` suffix | `GameSchema.ts`      |
| TypeScript data | kebab-case                      | `2026-03-08-team.ts` |

### Code

- **Components**: PascalCase (`GameCard`, `FilterBar`)
- **Hooks**: `use` prefix (`useGames`, `useFilters`)
- **Contexts**: `Provider` suffix (`FiltersProvider`)
- **Types/Interfaces**: PascalCase (`Game`, `PlayerStats`)
- **Schemas**: PascalCase + `Schema` (`GameSchema`, `TeamSchema`)

---

## 4. Component Patterns

### Page Component

```tsx
// src/pages/ExamplePage.tsx
import { useGames } from "../hooks/useGames";

export function ExamplePage() {
  const games = useGames();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Title</h1>
      {/* Content */}
    </div>
  );
}
```

### Feature Component

```tsx
// src/components/games/GameCard.tsx
import type { Game, Team } from "../../types";

interface GameCardProps {
  game: Game;
  homeTeam: Team;
  awayTeam: Team;
}

export function GameCard({ game, homeTeam, awayTeam }: GameCardProps) {
  // Implementation
}
```

### Custom Hook

```tsx
// src/hooks/useExample.ts
import { useMemo } from "react";

export function useExample() {
  return useMemo(() => {
    // Logic
  }, []);
}
```

---

## 5. Working with Data

### Adding a New Team

1. Create `data/teams/{team-id}.yaml` with required fields
2. Add team logo to `public/logos/`
3. Run `npm run generate` to update `src/generated/teams.ts`

### Adding a New Game

1. Create `data/games/{season}/{date}-{home}-vs-{away}.yaml`
2. Follow the naming convention: `YYYY-MM-DD-home-team-vs-away-team.yaml`
3. Reference teams by their ID (filename without `.yaml`)
4. Run `npm run generate` to update `src/generated/games.ts`

### Generated Files (DO NOT EDIT)

- `src/generated/teams.ts` - All teams array and teamsMap
- `src/generated/games.ts` - All games array sorted by date (newest first)

---

## 6. Basketball Domain Knowledge

### Categories (Age Groups)

- `U13M` - Under 13 Male
- `U14M` - Under 14 Male  
- `U15M` - Under 15 Male
- `U16M` - Under 16 Male
- `U17M` - Under 17 Male
- `U18M` - Under 18 Male

### Game Status

- `scheduled` - Game planned but not yet played
- `played` - Game completed
- `postponed` - Game delayed to future date
- `cancelled` - Game will not be played

### Player Statistics

| Stat | Description |
|------|-------------|
| `points` | Total points scored |
| `rebounds` | Total rebounds (off + def) |
| `assists` | Assists |
| `steals` | Steals |
| `blocks` | Blocked shots |
| `turnovers` | Turnovers committed |
| `fgm/fga` | Field goals made/attempted |
| `tpm/tpa` | Three-pointers made/attempted |
| `ftm/fta` | Free throws made/attempted |

### Scoring

- **Field Goal (2pt)**: Made inside the three-point line
- **Three-pointer (3pt)**: Made beyond the three-point arc
- **Free Throw (1pt)**: Made from the foul line
- **Total**: `3 * tpm + 2 * (fgm - tpm) + ftm` or `2 * fgm + tpm + ftm`

---

## 7. Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Landing page |
| `/games` | `GamesPage` | List all games (filterable) |
| `/games/:gameId` | `GameDetailPage` | Single game details |

---

## 8. Common Tasks

### Add a new page

1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`

### Add a new filter

1. Update `src/context/FiltersContext.tsx` with new filter state
2. Update `src/lib/filters.ts` with filter logic
3. Add UI control in `src/components/filters/FilterBar.tsx`

### Add a chart

1. Import from `react-chartjs-2`
2. Register required Chart.js components
3. Create chart component in `src/components/charts/`

---

## 9. Testing

- Use Vitest for unit tests
- Test files: `*.test.ts` or `*.test.tsx`
- Focus on: data transformations, utility functions, hooks
- Run tests: `npm run test`

---

## 10. Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Common patterns:
  - Spacing: `p-4`, `mb-6`, `gap-4`
  - Typography: `text-2xl font-bold`, `text-gray-600`
  - Layout: `flex flex-col`, `grid grid-cols-2`
  - Responsive: `sm:`, `md:`, `lg:` prefixes

