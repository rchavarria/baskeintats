# Skill: HTML to Game Object

Convert HTML content (typically from FBM - Federación de Baloncesto de Madrid) into a TypeScript `Game` object that validates against `GameSchema`.

## When to Use

Use this skill when the user provides:
- Raw HTML from a basketball game page (FBM, league websites)
- Game statistics in HTML table format
- Box score data to be converted

## Output Format

Generate a TypeScript file in `src/data/games/` with this structure:

```typescript
import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_YYYY_MM_DD_opponent: Game = GameSchema.parse({
  // ... parsed data
});
```

## Required Fields

### Game Metadata
| Field | Type | Example |
|-------|------|---------|
| `id` | string | `"S56-u15-league-silver-play-in"` |
| `season` | string | `"2025-26"` |
| `date` | ISO datetime | `"2026-03-29T13:30:00Z"` |
| `status` | enum | `"played"`, `"scheduled"`, `"postponed"` |

### Competition
```typescript
competition: {
  name: "Liga Ahorramás - Plata",    // League name
  category: "U15M",                   // U13M, U14M, U15M, U16M, U17M, U18M
  phase: "Play-in",                   // Regular, Playoffs, Play-in, Final
  round: "J1",                        // J1, J2, Semis, 3º-4º, Final
}
```

### Venue
Reference from `venues.ts`:
```typescript
venue: venues["circular"],  // Use venue ID from src/data/venues.ts
```

Available venues: `default`, `antela`, `circular`

### Teams (Home/Away)
```typescript
home: {
  club: teams["alcobendas"],  // Reference from teams.ts
  category: "U15M",           // Team's category (may differ from competition)
  scores: [17, 10, 20, 17],   // Points per quarter
},
away: {
  club: teams["distrito"],
  category: "U16M",
  scores: [16, 27, 22, 25],
}
```

Available teams: `alcobendas`, `canoe`, `distrito`

### Player Stats (for tracked player)
```typescript
playerStats: {
  time: 24 * 60 + 14,        // Minutes * 60 + seconds (total seconds played)
  fieldGoals: 4,              // 2-point field goals made
  threePointers: 1,           // 3-point shots made
  freeThrows: {
    made: 1,
    attempted: 3,
  },
  faults: 2,                  // Personal fouls
  plusMinus: -22,             // +/- while on court
  efficiency: 8,              // EFF/PIR rating
}
```

**Points calculation**: `2 * fieldGoals + 3 * threePointers + freeThrows.made`

### Videos
```typescript
videos: {
  official: "https://youtu.be/-",     // Official broadcast URL (use "-" if none)
  others: [                            // Optional additional videos
    {
      label: "Canal CBA",
      url: "https://youtu.be/xxxxx",
    }
  ]
}
```

### References (links to related content)
```typescript
references: [
  {
    icon: "📸",                        // Emoji icon
    label: "Fotos del partido",        // Description
    url: "https://...",                // Full URL
  },
  // Common icons: 📸 (photos), 💼 (reports), 📰 (news), 🎥 (video)
]
```

### Recap (game summary)
```typescript
recap: {
  title: "¡Victoria importante!",
  lines: [
    "First paragraph of the recap.",
    "Second paragraph.",
    // One string per paragraph
  ],
}
```

## Parsing Guidelines

### From HTML Tables
- Look for `<table>` with class containing "estadisticas" or "boxscore"
- Quarter scores are usually in columns Q1, Q2, Q3, Q4
- Player stats rows contain: MIN, PTS, 2P, 3P, TL, FP, +/-, VAL

### Date/Time
- Convert local time to UTC ISO format
- Spain timezone: add `+01:00` (winter) or `+02:00` (summer)
- Example: `17:30` local → `"2026-03-29T15:30:00Z"` (summer, UTC)

### Team Identification
- Home team is listed first or marked as "Local"
- Away team is "Visitante"
- Match team names to IDs in `teams.ts`

### Unknown Values
- Use placeholder `"-"` for missing URLs
- Use `0` for unknown numeric stats
- Omit optional fields if data not available

## File Naming Convention

```
YYYY-MM-DD-opponent.ts
```

Where `opponent` is the away team ID if we're home, or home team ID if we're away.

Examples:
- `2026-03-29-distrito.ts` (we played at home vs Distrito)
- `2026-04-05-canoe.ts` (we played away at Canoe)

## Example Conversion

### Input (simplified HTML)
```html
<div class="match-header">
  <span class="date">29/03/2026 13:30</span>
  <span class="competition">Liga Ahorramás Plata - Play-in J1</span>
</div>
<table class="scores">
  <tr><td>CB Alcobendas</td><td>17</td><td>10</td><td>20</td><td>17</td><td>64</td></tr>
  <tr><td>Distrito Olímpico</td><td>16</td><td>27</td><td>22</td><td>25</td><td>90</td></tr>
</table>
```

### Output
```typescript
import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_29_distrito: Game = GameSchema.parse({
  id: "S56-u15-league-silver-play-in-j1",
  season: "2025-26",
  date: "2026-03-29T11:30:00Z",  // 13:30 local - 2h (summer)
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Play-in",
    round: "J1",
  },

  venue: venues["circular"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [17, 10, 20, 17],
  },

  away: {
    club: teams["distrito"],
    category: "U16M",
    scores: [16, 27, 22, 25],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
  },

  references: [],

  recap: {
    title: "Título del partido",
    lines: ["Resumen pendiente de escribir."],
  },
});
```

## Validation

After generating, verify:
1. File compiles: `npx tsc --noEmit src/data/games/YYYY-MM-DD-opponent.ts`
2. Schema validates at runtime (GameSchema.parse will throw if invalid)
3. All team/venue references exist in their respective files

