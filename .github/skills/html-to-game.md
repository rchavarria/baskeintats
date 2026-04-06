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

## File Naming Convention

```
YYYY-MM-DD-opponent.ts
```

Where `opponent` is the away team ID if we're home, or home team ID if we're away.

Examples:
- `2026-03-22-getafe.ts` (we played at home vs Getafe)
- `2026-04-05-canoe.ts` (we played away at Canoe)
