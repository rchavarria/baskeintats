# Skill: HTML to Game Object

Convert HTML content into a TypeScript `Game` or `AdvancedGame` object that validates against
`GameSchema` or `AdvancedGameSchema`.

## When to Use

Use this skill when the user provides:
- Raw HTML from the team's timeline/calendar page
- Game data to be converted to TypeScript

## Output Format

### Simple stats → `GameSchema`

When the HTML stats section uses the **simple format** (no rebounds, assists, steals, turnovers, or blocks columns),
generate a file using `GameSchema`:

```typescript
import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_YYYY_MM_DD_opponent: Game = GameSchema.parse({
  // ... parsed data with type: "game"
});
```

### Advanced stats → `AdvancedGameSchema`

When the HTML stats section uses the **advanced format** (contains columns for rebounds, assists, steals, turnovers,
blocks, and fouls as committed+received), generate a file using `AdvancedGameSchema`:

```typescript
import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_YYYY_MM_DD_opponent: AdvancedGame = AdvancedGameSchema.parse({
  // ... parsed data with type: "advanced-game"
});
```

See [Parsing Player Stats → How to Detect the Format](#how-to-detect-the-format) for how to determine which format
to use.

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

| Field    | HTML Source                     | Example                      |
|----------|---------------------------------|------------------------------|
| `id`     | `"S56-"` + `<div id="...">`     | `"S56-liga-plata-f2-gd-j10"` |
| `season` | Always fixed                    | `"2025-26"`                  |
| `date`   | `date-is` attr + `🕜` paragraph | `"2026-03-22T17:15:00Z"`     |
| `status` | Has `match-results` div?        | `"played"` or `"scheduled"`  |
| `type`   | Simple or advanced stats?       | `"game"` or `"advanced-game"` |

### Field: `id`
- Prefix `"S56-"` followed by the `id` attribute of the root `<div class="timeline-item">`
- Example: `id="liga-u16-f2-j10"` → `"S56-liga-u16-f2-j10"`

### Field: `season`
- Always `"2025-26"` (hardcoded for current season)

### Field: `date`
- Combine `date-is` attribute with time from `🕜` paragraph
- Convert from `DD-MM-YYYY` to ISO format, convert to UTC timezone
- Example: `date-is="22-03-2026"` + `🕜 17:15` → `"2026-03-22T16:15:00Z"`

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
    <h1>🏆 Liga Ahorramás - Plata - Fase 2 - Grupo D - J10</h1>
```

The `<h1>` follows format: `🏆 {name} - {level} - {phase} - {group} - {round}`

### Extraction Rules

| Field      | Source                                      | Example                    |
|------------|---------------------------------------------|----------------------------|
| `name`     | First two segments from `<h1>`              | `"Liga Ahorramás - Plata"` |
| `category` | CSS class on root div                       | `"U16M"`                   |
| `phase`    | Middle segments (phase + group) from `<h1>` | `"Fase 2 - Grupo D"`       |
| `round`    | Last segment from `<h1>`                    | `"J10"`                    |

### Field: `competition.name`
- First two segments from `<h1>` after the 🏆 emoji
- Example: `🏆 Liga Ahorramás - Plata - Grupo D - J10` → `"Liga Ahorramás - Plata"`

### Field: `competition.category`
- Extract from CSS class on root `<div>`: `u13`, `u14`, `u15`, `u16`, `u17`, `u18`
- Convert to uppercase and append `M` for male
- Example: `<div class="timeline-item u16"` → `"U16M"`

### Field: `competition.phase`
- Middle segments from `<h1>` (between level and round)
- Combine phase and group with ` - `
- Example: `Liga Ahorramás - Plata - Fase 2 - Grupo D - J10` → `"Fase 2 - Grupo D"`

### Field: `competition.round`
- Last segment from `<h1>` after the last ` - `
- Format: `"J1"`, `"J2"`, ..., `"J22"`, `"Semis"`, `"3º-4º"`, `"Final"`
- Example: `...Grupo D - J10` → `"J10"`

### Example

**Input HTML:**
```html
<div class="timeline-item u16" date-is="22-03-2026" id="liga-u16-f2-j10">
    <h1>🏆 Liga Ahorramás - Plata - Fase 2 - Grupo D - J10</h1>
```

**Output TypeScript:**
```typescript
competition: {
  name: "Liga Ahorramás - Plata",
  category: "U16M",
  phase: "Fase 2 - Grupo D",
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

| `id`            | `name`                                 |
|-----------------|----------------------------------------|
| `default`       | Pabellón Municipal                     |
| `antela`        | Pabellón Antela Parada                 |
| `circular`      | Pabellón Circular                      |
| `felipe-reyes`  | Pabellón Felipe Reyes                  |
| `ferrandiz`     | Pabellón Pedro Ferrándiz               |
| `arroyo`        | Polideportivo El Arroyo                |
| `valdebebas`    | Ciudad Deportiva Real Madrid           |
| `luz`           | Polideportivo de La Luz                |
| `juande`        | Club Baloncesto Juan de Austria        |
| `juan-cierva`   | Pabellón Juan de la Cierva             |
| `pez-volador`   | Pez Volador                            |
| `ceip-san-jose` | CEIP San José                          |
| `wurzburg`      | Pabellón municipal de Würzburg         |
| `mora`          | Mora de Rubielos                       |
| `manzanera`     | Polideportivo Municipal de Manzanera   |
| `alcala-selva`  | Pabellón Municipal Alcalá de la Selva  |
| `rubielos`      | Pabellón Municipal de Rubielos de Mora |
| `norte`         | Pabellón Norte                         |
| `diaz-miguel`   | Polideportivo Antonio Diaz Miguel      |
| `plantio`       | Polideportivo El Plantío               |
| `triangulo-oro` | Triángulo de Oro, Madrid               |
| `espiniella`    | Pabellón Alfredo Espiniella            |
| `valcude`       | Club Deportivo Valcude                 |
| `canaleja`      | Polideportivo La Canaleja              |

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

The div with CSS class `match-results` contains two child divs with classes 
`team home` or `team visit`. However, **do not rely on the CSS classes** to
determine which team is home or away. Instead, use the order of the divs:

- The **first** child is always the `home` team, regardless of its CSS classes, even if
CSS classes say `team visit`.
- The **second** child is always the `away` team, even if CSS classes say `team home`.

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
  opponent: false,
  scores: [9, 21, 20, 17],
},

away: {
  club: teams["getafe"],
  category: "U15M",
  opponent: true,
  scores: [11, 13, 16, 10],
},
```

---

## Parsing Opponent Flag

### Overview

The `opponent` flag marks which team is the **rival/opponent** (not our team). This flag is **optional** in the schema (defaults to `false`) but should be explicitly set using these rules:

### Rules for Setting the `opponent` Flag

1. **If Alcobendas is one of the teams:**
   - Mark `opponent: true` on the **other team** (the one that is not Alcobendas)
   - Mark `opponent: false` (or omit) on Alcobendas

2. **If neither team is Alcobendas:**
   - Mark `opponent: true` on the team that is **not Selección Madrid**
   - Mark `opponent: false` (or omit) on Selección Madrid

3. **If both are the same team** (rare tournament scenario):
   - Mark both as `opponent: false` (or omit)

### Examples

#### Example 1: Alcobendas vs Getafe
```typescript
home: {
  club: teams["alcobendas"],
  category: "U15M",
  // opponent is false or omitted (Alcobendas is "our" team)
  scores: [9, 21, 20, 17],
},

away: {
  club: teams["getafe"],
  category: "U15M",
  opponent: true,  // Getafe is the opponent
  scores: [11, 13, 16, 10],
},
```

#### Example 2: Real Madrid vs Alcobendas
```typescript
home: {
  club: teams["real-madrid"],
  category: "U15M",
  opponent: true,  // Real Madrid is the opponent
  scores: [38, 38, 30, 26],
},

away: {
  club: teams["alcobendas"],
  category: "U15M",
  // opponent is false or omitted (Alcobendas is "our" team)
  scores: [9, 12, 9, 7],
},
```

#### Example 3: Selección Madrid vs Other Team (no Alcobendas)
```typescript
home: {
  club: teams["seleccion-madrid"],
  category: "U15M",
  // opponent is false or omitted
  scores: [60, 50, 40, 45],
},

away: {
  club: teams["some-other-team"],
  category: "U15M",
  opponent: true,  // Not Selección Madrid, so it's the opponent
  scores: [30, 25, 20, 18],
},
```

---

## Parsing Player Stats

The HTML stats section comes in two variants: **simple** (fewer columns) and **advanced** (more columns with
made/attempted breakdowns). Both share the same container structure, but differ in which columns are present and their
value formats.

### HTML Source — Simple Format

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

### HTML Source — Advanced Format

The advanced format includes more columns and uses `made/attempted` for shooting stats, `offensive+defensive` for
rebounds, and `committed + received` for blocks and fouls.

```html
<div class="match-stats">
    <div class="stats">
        <div class="stat-column small">
            <div class="title" title="Minutos">M</div>
            <div>24:20</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Puntos">PTS</div>
            <div>7</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Tiros libres">TL</div>
            <div>2/2</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="2 puntos">2PT</div>
            <div>1/2</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Triples">3PT</div>
            <div>1/1</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Rebotes (ofensivos + defensivos)">REB (O+D)</div>
            <div>1+2</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Asistencias">AST</div>
            <div>1</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Robos de balón (steals)">STL</div>
            <div>0</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Pérdidas de balón (turnovers)">TOV</div>
            <div>3</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Tapones (cometidos + recibidos)">BLK</div>
            <div>1 + 0</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Faltas personales (cometidas + recibidas)">FP</div>
            <div>0 + 0</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Más / Menos">+/-</div>
            <div>-2</div>
        </div>
        <div class="stat-column small">
            <div class="title" title="Eficiencia">EFF</div>
            <div>5</div>
        </div>
    </div>
</div>
```

### How to Detect the Format

Look at the `title` attribute of every `<div class="title">` inside the stats section. If the stat section contains
columns with titles starting with `"Rebotes"`, `"Asistencias"`, `"Robos"`, `"Pérdidas"`, or `"Tapones"`, it is the
**advanced format**. Otherwise, it is the **simple format**.

### Column Mapping

Identify each column by the `title` attribute of its inner `<div class="title">`. The `title` attribute may vary
slightly (e.g. `"Faltas personales"` vs `"Faltas personales (cometidas + recibidas)"`), so match by **prefix** or
**keyword** rather than exact string.

#### Columns present in both formats

| HTML `title` keyword  | Label | TypeScript field                  | Simple format               | Advanced format |
|-----------------------|-------|-----------------------------------|-----------------------------|-----------------|
| `"Minutos"`           | M     | `time`                            | `"MM:SS"` → `MM * 60 + SS` | same            |
| `"Puntos"`            | PTS   | *(validation only, not written)*  | integer                     | same            |
| `"Tiros libres"`      | TL    | `freeThrows: { made, attempted }` | `"made/attempted"`          | same            |
| `"Más / Menos"`       | +/-   | `plusMinus`                       | signed integer              | same            |
| `"Eficiencia"`        | EFF   | `efficiency`                      | integer                     | same            |

#### Columns with format differences between simple and advanced

| HTML `title` keyword    | Label | TypeScript field | Simple format  | Advanced format          |
|-------------------------|-------|------------------|----------------|--------------------------|
| `"2 puntos"`            | 2PT   | `fieldGoals`     | integer        | `"made/attempted"`       |
| `"Triples"`             | 3PT   | `threePointers`  | integer        | `"made/attempted"`       |
| `"Faltas personales"`   | FP    | `faults`         | integer        | `"committed + received"` |

#### Columns only in the advanced format

| HTML `title` keyword                 | Label     | TypeScript field | Format                  |
|--------------------------------------|-----------|------------------|-------------------------|
| `"Rebotes"`                          | REB (O+D) | `rebounds`       | `"offensive+defensive"` |
| `"Asistencias"`                      | AST       | `assists`        | integer                 |
| `"Robos de balón"` / `"steals"`     | STL       | `steals`         | integer                 |
| `"Pérdidas de balón"` / `"turnovers"` | TOV     | `turnovers`      | integer                 |
| `"Tapones"`                          | BLK       | `blocks`         | `"committed + received"` |

### Field: `time`
- Value format: `"MM:SS"` (minutes and seconds)
- Write as arithmetic expression: `MM * 60 + SS`
- Example: `"6:11"` → `6 * 60 + 11`

### Field: `freeThrows`
- Value format: `"made/attempted"`
- Split by `/`, parse both as integers
- Example: `"1/3"` → `freeThrows: { made: 1, attempted: 3 }`

### Field: `fieldGoals`
- **Simple format**: value is a single integer (made count only)
  - Example: `"1"` → `fieldGoals: 1`
- **Advanced format**: value is `"made/attempted"`
  - Split by `/`, parse both as integers
  - Example: `"1/2"` → `fieldGoals: { made: 1, attempted: 2 }`

### Field: `threePointers`
- **Simple format**: value is a single integer (made count only)
  - Example: `"0"` → `threePointers: 0`
- **Advanced format**: value is `"made/attempted"`
  - Split by `/`, parse both as integers
  - Example: `"1/1"` → `threePointers: { made: 1, attempted: 1 }`

### Field: `faults`
- **Simple format**: value is a single integer → maps to `faults` as a plain number
  - Example: `"1"` → `faults: 1`
- **Advanced format**: value is `"committed + received"` (separated by ` + `) → maps to `faults` as an object
  - Split by ` + `, parse both as integers
  - Example: `"0 + 0"` → `faults: { made: 0, received: 0 }`

### Field: `rebounds` (advanced format only)
- Value format: `"offensive+defensive"` (separated by `+`, no spaces)
- Split by `+`, parse both as integers
- Example: `"1+2"` → `rebounds: { offensive: 1, defensive: 2 }`
- **When absent** (simple format): omit the field entirely

### Field: `assists` (advanced format only)
- Value is a single integer
- Example: `"1"` → `assists: 1`
- **When absent** (simple format): omit the field entirely

### Field: `steals` (advanced format only)
- Value is a single integer
- Example: `"0"` → `steals: 0`
- **When absent** (simple format): omit the field entirely

### Field: `turnovers` (advanced format only)
- Value is a single integer
- Example: `"3"` → `turnovers: 3`
- **When absent** (simple format): omit the field entirely

### Field: `blocks` (advanced format only)
- Value format: `"committed + received"` (separated by ` + `)
- Split by ` + `, parse both as integers
- Example: `"1 + 0"` → `blocks: { made: 1, received: 0 }`
- **When absent** (simple format): omit the field entirely

### Field: `plusMinus`
- Can be negative — parse as signed integer
- Example: `"-22"` → `plusMinus: -22`

### Validation: Points
- `PTS` from HTML is **not written** to TypeScript — it can be derived
- Use it to verify the other stats are consistent:
  - **Simple format:**
    ```
    expected_points = 2 * fieldGoals + 3 * threePointers + freeThrows.made
    ```
  - **Advanced format:**
    ```
    expected_points = 2 * fieldGoals.made + 3 * threePointers.made + freeThrows.made
    ```
- If `expected_points !== PTS`, log a warning before generating the file

### Example — Simple Format

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

### Example — Advanced Format

**Input HTML:**
```html
<div class="stat-column small"><div class="title" title="Minutos">M</div><div>24:20</div></div>
<div class="stat-column small"><div class="title" title="Puntos">PTS</div><div>7</div></div>
<div class="stat-column small"><div class="title" title="Tiros libres">TL</div><div>2/2</div></div>
<div class="stat-column small"><div class="title" title="2 puntos">2PT</div><div>1/2</div></div>
<div class="stat-column small"><div class="title" title="Triples">3PT</div><div>1/1</div></div>
<div class="stat-column small"><div class="title" title="Rebotes (ofensivos + defensivos)">REB (O+D)</div><div>1+2</div></div>
<div class="stat-column small"><div class="title" title="Asistencias">AST</div><div>1</div></div>
<div class="stat-column small"><div class="title" title="Robos de balón (steals)">STL</div><div>0</div></div>
<div class="stat-column small"><div class="title" title="Pérdidas de balón (turnovers)">TOV</div><div>3</div></div>
<div class="stat-column small"><div class="title" title="Tapones (cometidos + recibidos)">BLK</div><div>1 + 0</div></div>
<div class="stat-column small"><div class="title" title="Faltas personales (cometidas + recibidas)">FP</div><div>0 + 0</div></div>
<div class="stat-column small"><div class="title" title="Más / Menos">+/-</div><div>-2</div></div>
<div class="stat-column small"><div class="title" title="Eficiencia">EFF</div><div>5</div></div>
```

**Validation:** `2 * 1 + 3 * 1 + 2 = 7` ✓ matches PTS

**Output TypeScript:**
```typescript
playerStats: {
  time: 24 * 60 + 20,
  fieldGoals: {
    made: 1,
    attempted: 2,
  },
  threePointers: {
    made: 1,
    attempted: 1,
  },
  freeThrows: {
    made: 2,
    attempted: 2,
  },
  rebounds: {
    offensive: 1,
    defensive: 2,
  },
  assists: 1,
  steals: 0,
  turnovers: 3,
  blocks: {
    made: 1,
    received: 0,
  },
  faults: {
    made: 0,
    received: 0,
  },
  plusMinus: -2,
  efficiency: 5,
},
```

### No Match Stats Available

If the HTML does not contain a `<div class="match-stats">` section, or it's hidden, set all `playerStats` fields to zero:

```typescript
playerStats: {
  time: 0,
  fieldGoals: 0,
  threePointers: 0,
  freeThrows: {
    made: 0,
    attempted: 0,
  },
  faults: 0,
  plusMinus: 0,
  efficiency: 0,
},
```

This ensures the data satisfies the `GameSchema` requirement that `playerStats` is mandatory, even when individual
match statistics are not available in the HTML.

---

## Parsing Videos

### HTML Source

```html
<p>
    🎥
    <a href="https://youtu.be/8H2vv1SERWA">
        🆚
        Getafe
    </a>
    <span class="space">|</span>
    <a href="https://youtu.be/vvTSmRUZSec">
        canal Pou
    </a>
</p>
```

### Extraction Rules

1. Find the `<p>` paragraph that starts with the 🎥 emoji
2. Collect all `<a>` tags inside it whose `href` contains `youtu.be` or `youtube.com`
3. **First link** → `videos.official`: use only the `href` URL
4. **Remaining links** → `videos.others` array, one entry per link:
   - `label`: text content of the `<a>` tag, trimmed (remove surrounding whitespace and emojis)
   - `url`: `href` attribute value

> If there is only one link, `videos.others` is an empty array `[]`.

### Example

**Input HTML:**
```html
<p>
    🎥
    <a href="https://youtu.be/8H2vv1SERWA">🆚 Getafe</a>
    <span class="space">|</span>
    <a href="https://youtu.be/vvTSmRUZSec">canal Pou</a>
</p>
```

**Output TypeScript:**
```typescript
videos: {
  official: "https://youtu.be/8H2vv1SERWA",
  others: [
    {
      label: "canal Pou",
      url: "https://youtu.be/vvTSmRUZSec",
    },
  ],
},
```

---

## Parsing Recap

### HTML Source

```html
<p>
    🏀
    ¡Un mero trámite!
</p>
<p class="description">
    Partido de trámite, nada más, un sopor de partido
</p>
<p class="description">
    Los más pequeños jugaron poco, venían de hacer un partidazo contra
    Canoe. Jugaron un poquito para que descansaran los compañeros, pero nada más
</p>
<p class="description">
    El ritmo fue muy bajo, con pocos puntos, aunque nunca dió la impresión
    de peligrar
</p>
```

### Extraction Rules

1. Find the `<p>` paragraph that starts with the 🏀 emoji → `recap.title`
   - Use the text content after the emoji, trimmed
2. Collect all subsequent `<p class="description">` paragraphs → `recap.lines`
   - Use the text content of each, trimmed and with internal whitespace normalized to a single space

### Example

**Input HTML:**
```html
<p>
    🏀
    ¡Un mero trámite!
</p>
<p class="description">
    Partido de trámite, nada más, un sopor de partido
</p>
<p class="description">
    Los más pequeños jugaron poco, venían de hacer un partidazo contra
    Canoe. Jugaron un poquito para que descansaran los compañeros, pero nada más
</p>
<p class="description">
    El ritmo fue muy bajo, con pocos puntos, aunque nunca dió la impresión
    de peligrar
</p>
```

**Output TypeScript:**
```typescript
recap: {
  title: "¡Un mero trámite!",
  lines: [
    "Partido de trámite, nada más, un sopor de partido",
    "Los más pequeños jugaron poco, venían de hacer un partidazo contra Canoe. Jugaron un poquito para que descansaran los compañeros, pero nada más",
    "El ritmo fue muy bajo, con pocos puntos, aunque nunca dió la impresión de peligrar",
  ],
},
```

---

## Parsing References

### HTML Source

```html
<p>
    📸
    Fotos del
    <a href="https://www.flickr.com/photos/fbmadrid/albums/72177720332315809">
        mes de marzo
    </a>
</p>

<p>
    💼
    Publicaciones de la jornada:
    <a href="https://fbm.es/informes.aspx?...">informe</a>
    <span class="space">|</span>
    <a href="https://www.fbm.es/noticia-104-13157/...">previa</a>
    <span class="space">|</span>
    <a href="https://www.fbm.es/noticia-104-13169/...">crónica</a>
    📰
</p>

<p style="display: none">
    📰
    Otros:
    <a href="">otros enlaces</a>
</p>
```

### Extraction Rules

1. Find all `<p>` blocks whose text content starts with one of: 📸, 💼, 📰, 📱
2. **Skip** any `<p>` with `style="display: none"`
3. **Skip** any `<a>` with an empty `href`
4. For each valid `<a>` inside a qualifying block, produce one `references` entry:
   - `type`: from the **link type table** below (by link text keyword), or fall back to the paragraph's leading emoji mapping
   - `label`: from the **link type table** below, or constructed from paragraph text + link text
   - `url`: `href` attribute value

### Emoji to Type Mapping

| Emoji | `type`           |
|-------|------------------|
| 📱    | `"social-media"` |
| 📰    | `"article"`      |
| 💼    | `"document"`     |
| 📸    | `"photo"`        |
| 🎥    | `"video"`        |

### Link Type Table

Match against the link text (case-insensitive, trimmed):

| Link text keyword                                    | `type`           | `label`                                                                  |
|------------------------------------------------------|------------------|--------------------------------------------------------------------------|
| `informe`                                            | `"document"`     | `"Informe de la jornada"`                                                |
| `previa`                                             | `"article"`      | `"Previa del partido"`                                                   |
| `crónica` / `cronica`                                | `"article"`      | `"Crónica del partido"`                                                  |
| Social media URL (twitter.com, x.com, instagram.com) | `"social-media"` | link text, trimmed                                                       |
| Inside a `📸` paragraph                              | `"photo"`        | paragraph text before `<a>` + link text, trimmed and joined with a space |
| Any other link                                       | paragraph's emoji mapping | link text, trimmed                                              |

### Example

**Input HTML:**
```html
<p>
    📸
    Fotos del
    <a href="https://www.flickr.com/photos/fbmadrid/albums/72177720332315809">
        mes de marzo
    </a>
</p>
<p>
    💼
    Publicaciones de la jornada:
    <a href="https://fbm.es/informes.aspx?...">informe</a>
    <span class="space">|</span>
    <a href="https://www.fbm.es/noticia-104-13157/...">previa</a>
    <span class="space">|</span>
    <a href="https://www.fbm.es/noticia-104-13169/...">crónica</a>
    📰
</p>
<p style="display: none">
    📰
    Otros:
    <a href="">otros enlaces</a>
</p>
```

**Output TypeScript:**
```typescript
references: [
  {
    type: "photo",
    label: "Fotos del mes de marzo",
    url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
  },
  {
    type: "document",
    label: "Informe de la jornada",
    url: "https://fbm.es/informes.aspx?...",
  },
  {
    type: "article",
    label: "Previa del partido",
    url: "https://www.fbm.es/noticia-104-13157/...",
  },
  {
    type: "article",
    label: "Crónica del partido",
    url: "https://www.fbm.es/noticia-104-13169/...",
  },
  // ↑ the hidden block and the empty-href link are skipped entirely
],
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

## Add the new game to the game list

After generating the new game file, update `src/hooks/useEvents.ts`:

- add an import statement for it
- include it in the returned array
