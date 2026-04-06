# Skill: HTML to Game Object

Convert HTML content into a TypeScript `Game` object that validates against `GameSchema`.

## When to Use

Use this skill when the user provides:
- Raw HTML from the team's timeline/calendar page
- Game data to be converted to TypeScript

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

---

## Parsing Metadata

### HTML Source Structure

The HTML input follows this structure:

```html
<div class="timeline-item u16" date-is="22-03-2026" id="liga-u16-f2-j10">
    <h1>🏆 Liga Ahorramás - Plata - Grupo D - J10</h1>
    <p>🏠 Alcobendas 🆚 Getafe 🚗</p>
    <p>📆 Domingo, 22 de marzo</p>
    <p>🕜 17:15</p>
    <p>🏟️ <a href="https://maps...">Pabellón Felipe Reyes</a></p>
    ...
</div>
```

### Metadata Extraction Rules

| Field | HTML Source | Example |
|-------|-------------|---------|
| `id` | `"S56-"` + `<div id="...">` | `"S56-liga-u16-f2-j10"` |
| `season` | Always fixed | `"2025-26"` |
| `date` | `date-is` attr + `🕜` paragraph | `"2026-03-22T17:15:00Z"` |
| `status` | Has `match-results` div? | `"played"` or `"scheduled"` |

### Field: `id`
- Prefix `"S56-"` followed by the `id` attribute of the root `<div class="timeline-item">`
- Example: `id="liga-u16-f2-j10"` → `"S56-liga-u16-f2-j10"`

### Field: `season`
- Always `"2025-26"` (hardcoded for current season)

### Field: `date`
- Combine `date-is` attribute with time from `🕜` paragraph
- Convert from `DD-MM-YYYY` to ISO format, keep original time (no timezone conversion)
- Example: `date-is="22-03-2026"` + `🕜 17:15` → `"2026-03-22T17:15:00Z"`

### Field: `status`
- Check if `<div class="match-results">` exists with scores
- If yes → `"played"`
- If no results → `"scheduled"`
- If marked as postponed → `"postponed"`

---

## Parsing Competition

### HTML Source

```html
<div class="timeline-item u16" ...>
    <h1>🏆 Liga Ahorramás - Plata - Grupo D - J10</h1>
```

The `<h1>` follows format: `🏆 {name} - {phase} - {group} - {round}`

### Extraction Rules

| Field | Source | Example |
|-------|--------|---------|
| `name` | First segment from `<h1>` | `"Liga Ahorramás"` |
| `category` | CSS class on root div | `"U16M"` |
| `phase` | Middle segments (phase + group) from `<h1>` | `"Plata - Grupo D"` |
| `round` | Last segment from `<h1>` | `"J10"` |

### Field: `competition.name`
- First segment from `<h1>` after the 🏆 emoji
- Example: `🏆 Liga Ahorramás - Plata - Grupo D - J10` → `"Liga Ahorramás"`

### Field: `competition.category`
- Extract from CSS class on root `<div>`: `u13`, `u14`, `u15`, `u16`, `u17`, `u18`
- Convert to uppercase and append `M` for male
- Example: `<div class="timeline-item u16"` → `"U16M"`

### Field: `competition.phase`
- Middle segments from `<h1>` (between name and round)
- Combine phase and group with ` - `
- Example: `Liga Ahorramás - Plata - Grupo D - J10` → `"Plata - Grupo D"`

### Field: `competition.round`
- Last segment from `<h1>` after the last ` - `
- Format: `"J1"`, `"J2"`, ..., `"J22"`, `"Semis"`, `"3º-4º"`, `"Final"`
- Example: `...Grupo D - J10` → `"J10"`

### Example

**Input HTML:**
```html
<div class="timeline-item u16" date-is="22-03-2026" id="liga-u16-f2-j10">
    <h1>🏆 Liga Ahorramás - Plata - Grupo D - J10</h1>
```

**Output TypeScript:**
```typescript
competition: {
  name: "Liga Ahorramás",
  category: "U16M",
  phase: "Plata - Grupo D",
  round: "J10",
},
```

---

## Parsing Venue

### HTML Source

```html
<p>
    🏟️
    <a href="https://maps.app.goo.gl/sbVMtZWNUpSEAv7V6">
        Pabellón Felipe Reyes
    </a>
</p>
```

### Extraction Rules

1. Find the `<p>` paragraph that starts with the 🏟️ emoji
2. Extract the venue name (text content of the `<a>` tag, trimmed)
3. Extract the Google Maps URL (`href` attribute)
4. Match against the known venues table below — first by **name**, then by **maps URL**
5. If no match is found, fall back to `venues["default"]`

### Known Venues

| `id` | `name` |
|------|--------|
| `default` | Pabellón Municipal |
| `antela` | Pabellón Antela Parada |
| `circular` | Pabellón Circular |
| `felipe-reyes` | Pabellón Felipe Reyes |
| `ferrandiz` | Pabellón Pedro Ferrándiz |
| `arroyo` | Polideportivo El Arroyo |
| `valdebebas` | Ciudad Deportiva Real Madrid |
| `luz` | Polideportivo de La Luz |
| `club-baloncesto-juan-de-austria` | Club Baloncesto Juan de Austria |
| `juan-cierva` | Pabellón Juan de la Cierva |
| `pez-volador` | Pez Volador |
| `ceip-san-jose` | CEIP San José |
| `wurzburg` | Pabellón municipal de Würzburg |
| `mora` | Mora de Rubielos |
| `manzanera` | Polideportivo Municipal de Manzanera |
| `alcala-selva` | Pabellón Municipal Alcalá de la Selva |
| `rubielos` | Pabellón Municipal de Rubielos de Mora |
| `norte` | Pabellón Norte |
| `antonio-diaz-miguel` | Polideportivo Antonio Diaz Miguel |
| `plantio` | Polideportivo El Plantío |
| `triangulo-oro` | Triángulo de Oro, Madrid |
| `espiniella` | Pabellón Alfredo Espiniella |
| `valcude` | Club Deportivo Valcude |
| `canaleja` | Polideportivo La Canaleja |

### Example

**Input HTML:**
```html
<p>
    🏟️
    <a href="https://maps.app.goo.gl/sbVMtZWNUpSEAv7V6">
        Pabellón Felipe Reyes
    </a>
</p>
```

**Output TypeScript:**
```typescript
venue: venues["felipe-reyes"],
```

---

## Parsing Home & Away Teams

### HTML Source

```html
<div class="match-results">
    <div class="team visit">
        <div class="team-name">Getafe</div>
        <div class="quarters">
            <div class="quarter"><div class="title">P1</div><div class="score">11</div></div>
            <div class="quarter"><div class="title">P2</div><div class="score">13</div></div>
            <div class="quarter"><div class="title">P3</div><div class="score">16</div></div>
            <div class="quarter"><div class="title">P4</div><div class="score">10</div></div>
        </div>
        <div class="total-score">50</div>
    </div>
    <div class="team home">
        <div class="team-name">Alcobendas</div>
        <div class="quarters">
            <div class="quarter"><div class="title">P1</div><div class="score">9</div></div>
            <div class="quarter"><div class="title">P2</div><div class="score">21</div></div>
            <div class="quarter"><div class="title">P3</div><div class="score">20</div></div>
            <div class="quarter"><div class="title">P4</div><div class="score">17</div></div>
        </div>
        <div class="total-score">67</div>
    </div>
</div>
```

### Extraction Rules

#### Which div maps to `home` and which to `away`

| CSS class on wrapper `<div>` | Output field |
|-----------------------------|--------------|
| `team home` | `home` |
| `team visit` | `away` |

#### Field: `club`
- Extract the text from `<div class="team-name">` (trimmed)
- Normalize the name to a team ID: lowercase, replace spaces with `-`, strip accents
  - Example: `"Alcobendas"` → `teams["alcobendas"]`
  - Example: `"Getafe"` → `teams["getafe"]`
- Look up in `teams` using the normalized ID
- If the team does not exist in `teams`, **add it to `src/data/teams.ts`** before generating the file

#### Field: `category`
- Default value: `"U15M"`
- Exception: if the team name (inside `<div class="team-name">`) contains `"2010"`, use `"U16M"`

#### Field: `scores`
- Read the `<div class="score">` inside each `<div class="quarter">` in order (P1 → P4)
- Parse as integers
- Result is an array of 4 numbers: `[p1, p2, p3, p4]`

### Example

**Input HTML:**
```html
<div class="team visit">
    <div class="team-name">Getafe</div>
    <div class="quarters">
        <div class="quarter"><div class="score">11</div></div>
        <div class="quarter"><div class="score">13</div></div>
        <div class="quarter"><div class="score">16</div></div>
        <div class="quarter"><div class="score">10</div></div>
    </div>
</div>
<div class="team home">
    <div class="team-name">Alcobendas</div>
    <div class="quarters">
        <div class="quarter"><div class="score">9</div></div>
        <div class="quarter"><div class="score">21</div></div>
        <div class="quarter"><div class="score">20</div></div>
        <div class="quarter"><div class="score">17</div></div>
    </div>
</div>
```

**Output TypeScript:**
```typescript
home: {
  club: teams["alcobendas"],
  category: "U15M",
  scores: [9, 21, 20, 17],
},

away: {
  club: teams["getafe"],
  category: "U15M",
  scores: [11, 13, 16, 10],
},
```

---

## Parsing Player Stats

### HTML Source

```html
<div class="match-stats">
    <div class="stats">
        <div class="stat-column small">
            <div class="title" title="Minutos">M</div>
            <div>6:11</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Puntos">PTS</div>
            <div>2</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Tiros libres">TL</div>
            <div>0/0</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="2 puntos">2PT</div>
            <div>1</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Triples">3PT</div>
            <div>0</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Faltas personales">FP</div>
            <div>1</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Más / Menos">+/-</div>
            <div>1</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Eficiencia">EFF</div>
            <div>1</div>
        </div>
    </div>
</div>
```

### Column Mapping

Identify each column by the `title` attribute of its inner `<div class="title">`:

| HTML `title` | Label | TypeScript field | Format |
|---|---|---|---|
| `"Minutos"` | M | `time` | `"MM:SS"` → `MM * 60 + SS` |
| `"Puntos"` | PTS | *(validation only, not written)* | integer |
| `"Tiros libres"` | TL | `freeThrows: { made, attempted }` | `"made/attempted"` |
| `"2 puntos"` | 2PT | `fieldGoals` | integer |
| `"Triples"` | 3PT | `threePointers` | integer |
| `"Faltas personales"` | FP | `faults` | integer |
| `"Más / Menos"` | +/- | `plusMinus` | signed integer |
| `"Eficiencia"` | EFF | `efficiency` | integer |

### Field: `time`
- Value format: `"MM:SS"` (minutes and seconds)
- Write as arithmetic expression: `MM * 60 + SS`
- Example: `"6:11"` → `6 * 60 + 11`

### Field: `freeThrows`
- Value format: `"made/attempted"`
- Split by `/`, parse both as integers
- Example: `"1/3"` → `freeThrows: { made: 1, attempted: 3 }`

### Field: `plusMinus`
- Can be negative — parse as signed integer
- Example: `"-22"` → `plusMinus: -22`

### Validation: Points
- `PTS` from HTML is **not written** to TypeScript — it can be derived
- Use it to verify the other stats are consistent:
  ```
  expected_points = 2 * fieldGoals + 3 * threePointers + freeThrows.made
  ```
- If `expected_points !== PTS`, log a warning before generating the file

### Example

**Input HTML:**
```html
<div class="stat-column small"><div class="title" title="Minutos">M</div><div>6:11</div></div>
<div class="stat-column small"><div class="title" title="Puntos">PTS</div><div>2</div></div>
<div class="stat-column small"><div class="title" title="Tiros libres">TL</div><div>0/0</div></div>
<div class="stat-column small"><div class="title" title="2 puntos">2PT</div><div>1</div></div>
<div class="stat-column small"><div class="title" title="Triples">3PT</div><div>0</div></div>
<div class="stat-column small"><div class="title" title="Faltas personales">FP</div><div>1</div></div>
<div class="stat-column small"><div class="title" title="Más / Menos">+/-</div><div>1</div></div>
<div class="stat-column small"><div class="title" title="Eficiencia">EFF</div><div>1</div></div>
```

**Validation:** `2 * 1 + 3 * 0 + 0 = 2` ✓ matches PTS

**Output TypeScript:**
```typescript
playerStats: {
  time: 6 * 60 + 11,
  fieldGoals: 1,
  threePointers: 0,
  freeThrows: {
    made: 0,
    attempted: 0,
  },
  faults: 1,
  plusMinus: 1,
  efficiency: 1,
},
```

---

## File Naming Convention

```
YYYY-MM-DD-opponent.ts
```

Where `opponent` is the away team ID if we're home, or home team ID if we're away.

Examples:
- `2026-03-22-getafe.ts` (we played at home vs Getafe)
- `2026-04-05-canoe.ts` (we played away at Canoe)
