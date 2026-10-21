---
name: pregame-interview
description: Interviews the user step by step (game type, opponent, home team, date, time, category, competition and venue) to create a new upcoming game data file in src/data/games/ from the normal or advanced game template. Use when the user wants to register a new game that has not been played yet and does not provide HTML or other structured source data.
---

# Pre-game Interview

Create a new game data file by **interviewing the user**, one question at a time, and then copying the right
template into `src/data/games/` with the collected data.

## When to Use

Use this skill when the user wants to register an upcoming game (not played yet) and does not provide HTML or
other structured source data. The agent asks; the user answers.

## Interview Rules

- Ask **one question at a time** and wait for the answer before asking the next one
- Ask the questions **in the order listed below**
- When a question has a default value, show it and accept an empty answer / "default" / "ok" as confirmation
- When a question has a known set of valid values (teams, venues, categories), offer them as options, but
  also accept free-form text
- Validate every answer before moving on; if it is invalid or ambiguous, explain why and ask again
- Do **not** create or copy any file until all questions have been answered
- Before creating the file, show a short summary of all answers and ask for confirmation

---

## Questions

### 1. Game type

> Is this a **normal** game or an **advanced** game?

| Answer     | Template to copy                             | Schema               | `type` value      |
|------------|----------------------------------------------|----------------------|-------------------|
| `normal`   | `src/data/games/_game_template.ts`           | `GameSchema`         | `"game"`          |
| `advanced` | `src/data/games/_advanced_game_template.ts`  | `AdvancedGameSchema` | `"advanced-game"` |

Only remember the choice; the template is copied at the end of the interview.

### 2. Opponent

> Who is the opponent?

- Match the answer against the team IDs in `src/data/teams.ts` (case-insensitive, accents stripped, spaces
  replaced by `-`). Also try to match by the team's display name
- If several teams match, ask the user to choose one
- If no team matches, tell the user and offer to add it to `src/data/teams.ts` (using `public/logos/default.png`
  as logo unless the user provides another one)
- The resulting team ID is used in the file name and in `teams[...]`

### 3. Home team

> Which team plays at home: **us** (Alcobendas) or **the opponent**?

- Default: `us` (as in the templates)
- `us` → `home.club` is the template's own club (`teams.alcobendas`) and `away.club` is the opponent, with
  `opponent: true` on `away`
- `opponent` → swap the teams: `home.club` is the opponent, with `opponent: true` on `home`; `away.club` is the
  template's own club, without the `opponent` flag
- Use this answer to suggest a default venue in question 8: the home team's `venue` in `src/data/teams.ts`, if
  it has one

### 4. Game date

> What is the date of the game?

- Accept any unambiguous format (e.g. `2026-10-25`, `25/10/2026`, `25 de octubre`). If the year is missing,
  assume the next occurrence of that date starting from today
- Normalize to `YYYY-MM-DD`

### 5. Game time

> What time does the game start? (local time, Europe/Madrid)

- The user always answers in **Madrid local time** (Europe/Madrid); the `date` field always stores **UTC**
- Accept `HH:MM` (24h). If the time is unknown, use `00:00` and keep the date without conversion
- Convert the local Europe/Madrid time to UTC, taking daylight saving time into account (CET = UTC+1 from the
  last Sunday of October, CEST = UTC+2 from the last Sunday of March). The UTC date may differ from the local
  date for games close to midnight
  - Example: `2026-10-25` + `17:15` (CET, UTC+1) → `"2026-10-25T16:15:00Z"`
  - Example: `2026-10-18` + `18:00` (CEST, UTC+2) → `"2026-10-18T16:00:00Z"`

### 6. Category

> What category is the game? (`U13M`, `U14M`, `U15M`, `U16M`, `U17M`, `U18M`)

- Default: the `competition.category` value of the selected template
- Must be one of the values accepted by `CategorySchema` (`src/model/CategorySchema.ts`)

### 7. Competition name, phase and round

Ask the three values one by one, showing the template value as the default:

> Competition name? (default: `<template competition.name>`)
>
> Phase? (default: `<template competition.phase>`)
>
> Round? (default: `<template competition.round>`)

### 8. Venue

> Where is the game played? (default: home team's venue, if any)

- Match the answer against the venue IDs and names in `src/data/venues.ts`
- If several venues match, ask the user to choose one
- If no venue matches, tell the user and offer to add a new entry to `src/data/venues.ts` (asking for its `id`,
  `name` and Google Maps URL `maps`, following the structure of the existing entries)

---

## Building the File

### File name

```
src/data/games/YYYY-MM-DD-<opponent>.ts
```

- `YYYY-MM-DD` is the game date (local date, before UTC conversion)
- `<opponent>` is the opponent team ID (kebab-case), regardless of who plays at home
- Example: `src/data/games/2026-10-25-real-madrid.ts`
- If the file already exists, stop and ask the user how to proceed (never overwrite silently)

### Copy and update the template

Copy the selected template and then update these fields only:

| Field                  | Value                                                                    |
|------------------------|--------------------------------------------------------------------------|
| exported variable name | `game_YYYY_MM_DD_<opponent>` (hyphens replaced by underscores)           |
| `id`                   | `<season prefix>-<template id slug with the round updated>` (see below)  |
| `season`               | Computed from the date (see below)                                       |
| `date`                 | UTC ISO datetime from questions 4 and 5                                  |
| `competition.name`     | Answer to question 7                                                     |
| `competition.category` | Answer to question 6                                                     |
| `competition.phase`    | Answer to question 7                                                     |
| `competition.round`    | Answer to question 7                                                     |
| `venue`                | `venues.<id>` or `venues["<id>"]` when the ID contains hyphens           |
| `home.club`            | Depends on question 3 (own club or opponent)                             |
| `home.category`        | Answer to question 6                                                     |
| `home.opponent`        | `true` only when the opponent plays at home                              |
| `away.club`            | Depends on question 3 (opponent or own club)                             |
| `away.category`        | Answer to question 6                                                     |
| `away.opponent`        | `true` only when the opponent plays away                                 |

Write team references as `teams.<id>`, or `teams["<id>"]` when the ID contains hyphens. The `opponent: true`
flag must always be on the opponent's side; never set it on our own club.

Keep everything else exactly as in the template (scores, player stats, videos, recap and references), since the
game has not been played yet.

#### Field: `season`

- Dates from September 1st of year `N` to June 30th of year `N+1` belong to season `"N-(N+1 last two digits)"`
- Example: `2026-10-25` → `"2026-27"`

#### Field: `id`

- Prefix: `S` + last digit of both season years. Example: `"2026-27"` → `"S67"`
- Slug: take the slug of the template `id` (the part after the prefix) and replace its last segment (round)
  with the lowercase round answer. Example: template `S67-liga-oro-f1-g2-j1` + round `J5` →
  `S67-liga-oro-f1-g2-j5`
- If the competition name or phase changed in a way that makes the slug misleading, propose a new slug to the
  user and ask for confirmation

### Register the game

Update `src/data/events.ts`:

- Add an import statement for the new file, keeping imports sorted by file name
- Add the exported variable to the `events` array, keeping chronological order (newest first)

### Register the game in tests

Update `src/components/events/GameCard.test.tsx`:

- Add an import statement for the new file, keeping imports sorted by file name
- Add `[<exported variable>]` to the `it.each([...])` list of the matching season (e.g.
  `"renders S2026/27 game to the game card"`), keeping chronological order (oldest first, as in the existing list)

`src/pages/GameDetailPage.test.tsx` does **not** need changes: it builds its game list from `getEvents()`, so
the new game is covered automatically once it is registered in `src/data/events.ts`.

### Validate

Run, from the repository root, the following commands **in this order**:

1. `npm run validate` — checks the data can be loaded
2. `npm run lint` — if it reports warnings or errors, fix them with `npm run format` and run `npm run lint`
   again
3. `npm run build` — type-checks and builds the project
4. `npm run test -- GameCard.test.tsx GameDetailPage.test.tsx` — runs the tests affected by the new game
5. `npm run test` — runs the full test suite

Fix any error before finishing, then report the created file path to the user.

---

## Example

Answers:

1. Game type: `advanced`
2. Opponent: `Real Madrid` → `real-madrid`
3. Home team: `opponent`
4. Date: `25/10/2026` → `2026-10-25`
5. Time: `17:15` → `2026-10-25T16:15:00Z`
6. Category: `U16M` (default)
7. Competition: `Liga Ahorramás - Oro` / `Fase 1 - Grupo 2` / `J5`
8. Venue: `Valdebebas` (default, Real Madrid's venue) → `valdebebas`

Output file `src/data/games/2026-10-25-real-madrid.ts` (fields not shown are copied from the template):

```typescript
export const game_2026_10_25_real_madrid: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j5",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-10-25T16:15:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J5",
  },

  venue: venues.valdebebas,

  home: {
    club: teams["real-madrid"],
    category: "U16M",
    opponent: true,
    scores: [0, 0, 0, 0],
  },

  away: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [0, 0, 0, 0],
  },

  // ...rest of the template unchanged
});
```

