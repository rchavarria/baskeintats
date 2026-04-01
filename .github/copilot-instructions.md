# Main Instructions

## 1. General Project Guidelines

You are assisting with **Baskeintats**, a Basketball Statistics SPA for tracking youth basketball games and player performance.

### Technology Stack

- **React 19** + **TypeScript 5.9** + **Vite 8**
- **Tailwind CSS 3** for styling
- **React Router 7** for navigation
- **Chart.js 4** + **react-chartjs-2** for charts (pending implementation)
- **Zod 4** for runtime schema validation
- **js-yaml** to parse YAML data files at build time
- **tsx** to run TypeScript scripts directly

## Available Scripts

| Script             | Description                                      |
|--------------------|--------------------------------------------------|
| `npm run generate` | Parses YAML files and generates `src/generated/` |
| `npm run dev`      | Generates data and starts the development server |
| `npm run build`    | Generates data and builds for production         |
| `npm run preview`  | Serves the production build                      |

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
├── data/                    # YAML source data (teams, games)
│   ├── teams/               # One YAML file per team
│   └── games/               # Organized by season (e.g., 2025-26/)
├── scripts/
│   └── generate-data.ts     # Transforms YAML → TypeScript
├── src/
│   ├── components/          # React components
│   │   ├── filters/         # Filter UI components
│   │   ├── games/           # Game-related components
│   │   ├── layout/          # Header, Footer, Layout
│   │   └── ui/              # Reusable UI primitives
│   ├── context/             # React Context providers
│   ├── generated/           # Auto-generated from YAML (DO NOT EDIT)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── model/               # Zod schemas (validation)
│   ├── pages/               # Page components (routes)
│   └── types/               # TypeScript type definitions
└── public/
    └── logos/               # Team logo images
```

### Data Flow

1. **YAML files** in `data/` define teams and games
2. **`npm run generate`** runs `scripts/generate-data.ts`
3. **Generated TypeScript** is written to `src/generated/`
4. **React app** imports from `src/generated/` at runtime

---

## 3. Data Models

### Team (YAML: `data/teams/{team-id}.yaml`)

```yaml
name: CB Example Team
logo: /logos/example-transparent.png
venue: Municipal Sports Center
color: "#E63946"
```

### Game (YAML: `data/games/{season}/{date}-{home}-vs-{away}.yaml`)

```yaml
season: "2025-26"
category: U14M            # U13M, U14M, U15M, U16M, U17M, U18M
date: 2026-03-08
time: "17:00"
competition: Liga Provincial
phase: Regular            # Regular, Playoffs, Final
round: 21                 # Match day number
venue: Municipal Sports Center
status: played            # scheduled, played, postponed, cancelled

home:
  team: team-id           # References data/teams/{team-id}.yaml
  scores: [22, 18, 20, 25]  # Points per quarter
away:
  team: opponent-id
  scores: [19, 20, 17, 21]

playerStats:              # Optional: player performance
  points: 22
  rebounds: 8
  assists: 5
  # ... more stats

recap: >                  # Optional: game summary
  Multi-line description of the game highlights.

videos:                   # Optional: video links
  - https://youtube.com/watch?v=example

social:                   # Optional: social media posts
  - https://twitter.com/team/status/123
```

### TypeScript Types

- **`src/types/team.ts`**: `Team` interface
- **`src/types/game.ts`**: `Game`, `GameTeamResult`, `PlayerStats`, `GameStatus`
- **`src/model/`**: Zod schemas for runtime validation

---

## 4. Naming Conventions

### Files

| Type | Convention | Example |
|------|------------|---------|
| React Component | PascalCase | `GameCard.tsx` |
| Hook | camelCase with `use` prefix | `useGames.ts` |
| Utility | camelCase | `filters.ts` |
| Type file | camelCase | `game.ts` |
| Zod Schema | PascalCase with `Schema` suffix | `GameSchema.ts` |
| YAML data | kebab-case | `2026-03-08-team-a-vs-team-b.yaml` |

### Code

- **Components**: PascalCase (`GameCard`, `FilterBar`)
- **Hooks**: `use` prefix (`useGames`, `useFilters`)
- **Contexts**: `Provider` suffix (`FiltersProvider`)
- **Types/Interfaces**: PascalCase (`Game`, `PlayerStats`)
- **Schemas**: PascalCase + `Schema` (`GameSchema`, `TeamSchema`)

---

## 5. Component Patterns

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

## 6. Working with Data

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

## 7. Basketball Domain Knowledge

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

## 8. Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Landing page |
| `/games` | `GamesPage` | List all games (filterable) |
| `/games/:gameId` | `GameDetailPage` | Single game details |

---

## 9. Common Tasks

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

## 10. Testing

- Use Vitest for unit tests
- Test files: `*.test.ts` or `*.test.tsx`
- Focus on: data transformations, utility functions, hooks
- Run tests: `npm run test`

---

## 11. Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Common patterns:
  - Spacing: `p-4`, `mb-6`, `gap-4`
  - Typography: `text-2xl font-bold`, `text-gray-600`
  - Layout: `flex flex-col`, `grid grid-cols-2`
  - Responsive: `sm:`, `md:`, `lg:` prefixes

