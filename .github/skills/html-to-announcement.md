# Skill: HTML to Announcement Object

Convert HTML content from the team's timeline page into a TypeScript `Announcement` object that validates against
`AnnouncementSchema`.

## When to Use

Use this skill when the user provides:
- Raw HTML from the team's timeline/calendar page containing **non-game events**
- Announcements, tournament previews, call-ups (convocatorias), season milestones, or similar events
- HTML blocks whose `<h1>` starts with emojis like 🏆, 🫂, 📢, 🚀 (as opposed to game blocks that have match results)

## Output Format

Generate a TypeScript file using `AnnouncementSchema`:

```typescript
import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_YYYY_MM_DD_slug: Announcement = AnnouncementSchema.parse({
  // ... parsed data
});
```

---

## Parsing Metadata

### HTML Source Structure

The HTML input follows this structure:

```html
<div class="timeline-item u15" date-is='01-01-2026' id="torneo-reyes">
    <h1>🏆 I Torneo de Reyes</h1>
    <p>⛹️‍♂️ Cadete U15</p>
    <p>
        🏟️ Alcobendas,
        <a href="https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8">
            🗺️ Pabellón Antela Parada
        </a>
    </p>
    <p>📆 Del 2 al 4 de enero de 2026</p>
    ...
</div>
```

### Metadata Extraction Rules

| Field    | HTML Source                | Example                      |
|----------|----------------------------|------------------------------|
| `id`     | `"S56-"` + `<div id="...">` | `"S56-torneo-reyes"`         |
| `type`   | Always fixed               | `"announcement"`             |
| `season` | Always fixed               | `"2025-26"`                  |
| `date`   | `date-is` attr             | `"2026-01-01T00:00:00Z"`    |
| `title`  | `<h1>` text after emoji    | `"I Torneo de Reyes"`        |
| `emoji`  | Leading emoji from `<h1>`  | `"🏆"`                       |

### Field: `id`
- Prefix `"S56-"` followed by the `id` attribute of the root `<div class="timeline-item">`
- Example: `id="torneo-reyes"` → `"S56-torneo-reyes"`

### Field: `type`
- Always `"announcement"` (literal)

### Field: `season`
- Always `"2025-26"` (hardcoded for current season)

### Field: `date`
- Read the `date-is` attribute from the root `<div>`
- Convert from `DD-MM-YYYY` to ISO datetime format, set time to `00:00:00Z`
- Example: `date-is="01-01-2026"` → `"2026-01-01T00:00:00Z"`

### Field: `title`
- Extract text from `<h1>`, remove the leading emoji and trim whitespace
- Example: `<h1>🏆 I Torneo de Reyes</h1>` → `"I Torneo de Reyes"`

### Field: `emoji`
- Extract the first emoji character(s) from `<h1>`
- Common emojis: `🏆` (tournament), `🫂` (friendly), `📢` (call-up), `🚀` (milestone)
- Example: `<h1>🏆 I Torneo de Reyes</h1>` → `"🏆"`

### Example

**Input HTML:**
```html
<div class="timeline-item u15" date-is='01-01-2026' id="torneo-reyes">
    <h1>🏆 I Torneo de Reyes</h1>
```

**Output TypeScript:**
```typescript
id: "S56-torneo-reyes",
type: "announcement",
season: "2025-26",
date: "2026-01-01T00:00:00Z",
title: "I Torneo de Reyes",
emoji: "🏆",
```

---

## Parsing Category

### HTML Source

```html
<div class="timeline-item u15" date-is='01-01-2026' id="torneo-reyes">
```

Or the category may appear in a `⛹️‍♂️` paragraph:

```html
<p>⛹️‍♂️ Cadete U15</p>
```

### Extraction Rules

1. Extract from CSS class on root `<div>`: `u13`, `u14`, `u15`, `u16`, `u17`, `u18`
2. Convert to uppercase and append `M` for male
3. If no CSS class matches, check the `⛹️‍♂️` paragraph text for `U13`–`U18`
4. If neither is present, **omit the field** entirely

### Example

**Input HTML:**
```html
<div class="timeline-item u15" ...>
    ...
    <p>⛹️‍♂️ Cadete U15</p>
```

**Output TypeScript:**
```typescript
category: "U15M",
```

---

## Parsing Venue

### HTML Source

```html
<p>
    🏟️ Alcobendas,
    <a href="https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8">
        🗺️ Pabellón Antela Parada
    </a>
</p>
```

### Extraction Rules

1. Find the `<p>` paragraph that starts with the 🏟️ emoji
2. Extract the venue name from the `<a>` tag text (remove the 🗺️ emoji prefix, trim)
3. Extract the Google Maps URL from `href`
4. Match against the known venues table — first by **name**, then by **maps URL**
5. If a match is found, use it; if not, **omit the field** entirely

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
    🏟️ Alcobendas,
    <a href="https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8">
        🗺️ Pabellón Antela Parada
    </a>
</p>
```

**Output TypeScript:**
```typescript
venue: venues["antela"],
```

---

## Parsing Date Range

### HTML Source

```html
<p>📆 Del 2 al 4 de enero de 2026</p>
```

### Extraction Rules

1. Find `<p>` paragraphs starting with the 📆 emoji
2. Look for paragraphs that describe a **range** — they typically contain "Del ... al ..." or describe a multi-day
   span (e.g., `"Del 2 al 4 de enero de 2026"`, `"Del 27 al 28 de diciembre de 2025"`)
3. **Distinguish** date-range paragraphs from schedule-date paragraphs:
   - Date-range: contains "Del" or describes multiple days → maps to `dateRange`
   - Schedule-date: contains a weekday name (Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo) → maps to
     `schedule[].date`
4. Extract the text after the 📆 emoji, trimmed
5. If no date-range paragraph is found, **omit the field**

### Example

**Input HTML:**
```html
<p>📆 Del 2 al 4 de enero de 2026</p>
```

**Output TypeScript:**
```typescript
dateRange: "Del 2 al 4 de enero de 2026",
```

---

## Parsing Description

### HTML Source

```html
<p class="description">
    Torneo cadete de primer año organizado por el club donde han
    invitado a equipos U15 de muy alto nivel, sobre todo de Madrid
</p>
<p class="description">
    El torneo se disputará entre 6 equipos, divididos en 2 grupos:
    Laso, Rozas y Mataró por un lado; Alcobendas, Fuenlabrada y Zentro
    por otro
</p>
```

### Extraction Rules

1. Collect **all** `<p class="description">` elements from the HTML block
2. For each, extract the text content, trimmed and with internal whitespace normalized to a single space
3. Return as an array of strings
4. If no description paragraphs exist, return an empty array `[]`

### Important

Description paragraphs can appear **anywhere** in the block — before the schedule, between schedule entries, or after
references. Collect them **all** regardless of position.

### Example

**Input HTML:**
```html
<p class="description">
    Torneo cadete de primer año organizado por el club donde han
    invitado a equipos U15 de muy alto nivel, sobre todo de Madrid
</p>
<p class="description">
    El torneo se disputará entre 6 equipos, divididos en 2 grupos:
    Laso, Rozas y Mataró por un lado; Alcobendas, Fuenlabrada y Zentro
    por otro
</p>
```

**Output TypeScript:**
```typescript
description: [
  "Torneo cadete de primer año organizado por el club donde han invitado a equipos U15 de muy alto nivel, sobre todo de Madrid",
  "El torneo se disputará entre 6 equipos, divididos en 2 grupos: Laso, Rozas y Mataró por un lado; Alcobendas, Fuenlabrada y Zentro por otro",
],
```

---

## Parsing Schedule

### HTML Source

Schedule entries are sequences of `📆` (date) and `🕜` (time) paragraphs, optionally preceded by a `🏀` label
paragraph and/or followed by a `⛹️‍♂️` opponent paragraph.

**Pattern 1: Simple schedule**
```html
<p>📆 Viernes, 2 de enero de 2026</p>
<p>🕜 10:30</p>
```

**Pattern 2: Schedule with opponent**
```html
<p>📆 Sábado, 27 de diciembre de 2025</p>
<p>🕜 18:45</p>
<p>⛹️‍♂️ Canarias</p>
```

**Pattern 3: Schedule with label**
```html
<p>🏀 ¡Selección de Canarias!</p>
<p>📆 Sábado, 27 de diciembre de 2025</p>
<p>🕜 16:30</p>
```

**Pattern 4: Time range (for training sessions)**
```html
<p>📆 Lunes, 22 de diciembre de 2025</p>
<p>🕜 18:45 - 21:00</p>
```

**Pattern 5: Multiple times**
```html
<p>📆 Sábado, 3 de enero de 2026</p>
<p>🕜 18:00 | 20:30</p>
```

### Extraction Rules

1. Scan paragraphs sequentially after the date-range paragraph (or after description paragraphs)
2. For each `📆` paragraph that contains a **weekday name** (Lunes, Martes, Miércoles, Jueves, Viernes, Sábado,
   Domingo), start a new schedule entry
3. The next `🕜` paragraph provides the `time`
4. If a `🏀` paragraph appears **before** a `📆` paragraph, use its text as the `label` for the next schedule entry
5. If a `⛹️‍♂️` paragraph appears **after** the `🕜` paragraph, use its text as the `opponent`
6. If no schedule entries are found, **omit the field** entirely

### Field: `label`
- Text content of the `🏀` paragraph that precedes a schedule entry, trimmed
- Remove the 🏀 emoji prefix
- Example: `🏀 ¡Selección de Canarias!` → `"¡Selección de Canarias!"`
- **Important**: only `🏀` paragraphs that are followed by `📆` paragraphs are labels. A `🏀` paragraph at the very
  start of the block (before any schedule) should be included in the `description` array instead

### Field: `date`
- Text content of the `📆` paragraph, trimmed, emoji removed
- Example: `📆 Viernes, 2 de enero de 2026` → `"Viernes, 2 de enero de 2026"`

### Field: `time`
- Text content of the `🕜` paragraph, trimmed, emoji removed
- Preserve the format as-is (simple, range, or multiple)
- Examples: `"10:30"`, `"18:45 - 21:00"`, `"18:00 | 20:30"`, `"(por confirmar)"`

### Field: `opponent`
- Text content of the `⛹️‍♂️` paragraph, trimmed, emoji removed
- Example: `⛹️‍♂️ Canarias` → `"Canarias"`
- Only present when there's a `⛹️‍♂️` paragraph immediately after the `🕜` paragraph

### How to Distinguish Date-Range from Schedule-Date

Both use the 📆 emoji, but:

| Type            | Pattern                           | Example                             |
|-----------------|-----------------------------------|-------------------------------------|
| Date range      | `"Del X al Y de ..."`            | `"Del 2 al 4 de enero de 2026"`    |
| Schedule date   | `"Weekday, DD de month de YYYY"` | `"Viernes, 2 de enero de 2026"`    |

**Rule**: If the 📆 text starts with a weekday name, it's a schedule date. Otherwise, it's a date range.

### Example

**Input HTML:**
```html
<p>🏀 Esta es la previsión de partidos</p>
<p>📆 Viernes, 2 de enero de 2026</p>
<p>🕜 10:30</p>

<p>📆 Viernes, 2 de enero de 2026</p>
<p>🕜 18:30</p>

<p>📆 Sábado, 3 de enero de 2026</p>
<p>🕜 18:00 | 20:30</p>

<p>📆 Domingo, 4 de enero de 2026</p>
<p>🕜 10:30 | 12:30</p>
```

**Output TypeScript:**
```typescript
schedule: [
  {
    date: "Viernes, 2 de enero de 2026",
    time: "10:30",
  },
  {
    date: "Viernes, 2 de enero de 2026",
    time: "18:30",
  },
  {
    date: "Sábado, 3 de enero de 2026",
    time: "18:00 | 20:30",
  },
  {
    date: "Domingo, 4 de enero de 2026",
    time: "10:30 | 12:30",
  },
],
```

### Example with Labels and Opponents

**Input HTML:**
```html
<p>🏀 ¡Selección de Canarias!</p>
<p>📆 Sábado, 27 de diciembre de 2025</p>
<p>🕜 16:30</p>

<p>🏀 ¡Castilla y León!</p>
<p>📆 Domingo, 28 de diciembre de 2025</p>
<p>🕜 (por confirmar)</p>
```

**Output TypeScript:**
```typescript
schedule: [
  {
    label: "¡Selección de Canarias!",
    date: "Sábado, 27 de diciembre de 2025",
    time: "16:30",
  },
  {
    label: "¡Castilla y León!",
    date: "Domingo, 28 de diciembre de 2025",
    time: "(por confirmar)",
  },
],
```

### Example with Opponents (no labels)

**Input HTML:**
```html
<p>📆 Sábado, 27 de diciembre de 2025</p>
<p>🕜 18:45</p>
<p>⛹️‍♂️ Canarias</p>

<p>📆 Domingo, 28 de diciembre de 2025</p>
<p>🕜 10:00 | 12:00</p>
<p>⛹️‍♂️ Castilla y León / Oporto</p>
```

**Output TypeScript:**
```typescript
schedule: [
  {
    date: "Sábado, 27 de diciembre de 2025",
    time: "18:45",
    opponent: "Canarias",
  },
  {
    date: "Domingo, 28 de diciembre de 2025",
    time: "10:00 | 12:00",
    opponent: "Castilla y León / Oporto",
  },
],
```

---

## Parsing References

### HTML Source

References come from paragraphs starting with emojis: 📸, 💼, 📰, 📱, 🎥

```html
<p>
    🎥
    Todos los partidos se retransmitirán por el canal de
    <a href="https://www.youtube.com/@ClubBaloncestoAlcobendas">
        CB Alcobendas
    </a>
</p>

<p>
    📱
    <a href="https://www.instagram.com/p/DS2YdVzjAoo">
        Anuncio en del torneo
    </a>
</p>
```

### Extraction Rules

1. Find all `<p>` blocks whose text content starts with one of: 📸, 💼, 📰, 📱, 🎥
2. **Skip** any `<p>` with `style="display: none"`
3. **Skip** any `<a>` with an empty `href`
4. For each valid `<a>` inside a qualifying block, produce one `references` entry:
   - `icon`: the paragraph's leading emoji
   - `label`: constructed from paragraph text before `<a>` + link text, trimmed and joined with a space.
     Remove the leading emoji from the label.
   - `url`: `href` attribute value

### Icon Mapping

| Paragraph emoji | `icon` |
|-----------------|--------|
| 📸              | `"📸"` |
| 💼              | `"💼"` |
| 📰              | `"📰"` |
| 📱              | `"📱"` |
| 🎥              | `"🎥"` |

### Label Construction

For each `<a>` tag, the label is formed by combining:
1. The text content **before the `<a>` tag** within the same `<p>` (excluding the leading emoji), trimmed
2. The link text itself, trimmed
3. Joined with a space, then trimmed again

If the pre-link text is empty or only whitespace, use just the link text.

### Example

**Input HTML:**
```html
<p>
    🎥
    Todos los partidos se retransmitirán por el canal de
    <a href="https://www.youtube.com/@ClubBaloncestoAlcobendas">
        CB Alcobendas
    </a>
</p>

<p>
    📱
    <a href="https://www.instagram.com/p/DS2YdVzjAoo">
        Anuncio en del torneo
    </a>
</p>

<p>
    📱
    Anuncio general del
    <a href="https://x.com/FBCyL/status/2004529249236189619">
        Torneo de selecciones CyL
    </a>
    <span class="space">|</span>
    <a href="https://x.com/FBCyL/status/2004842187142615441">
        Horarios
    </a>
    🕜
</p>

<p>
    📸
    <a href="https://www.flickr.com/photos/fbmadrid/54938959883/in/album-72177720330472562">
        Galería de fotos
    </a>
</p>

<p style="display: none">
    📰
    <a href="">
        ---
    </a>
</p>
```

**Output TypeScript:**
```typescript
references: [
  {
    icon: "🎥",
    label: "Todos los partidos se retransmitirán por el canal de CB Alcobendas",
    url: "https://www.youtube.com/@ClubBaloncestoAlcobendas",
  },
  {
    icon: "📱",
    label: "Anuncio en del torneo",
    url: "https://www.instagram.com/p/DS2YdVzjAoo",
  },
  {
    icon: "📱",
    label: "Anuncio general del Torneo de selecciones CyL",
    url: "https://x.com/FBCyL/status/2004529249236189619",
  },
  {
    icon: "📱",
    label: "Horarios",
    url: "https://x.com/FBCyL/status/2004842187142615441",
  },
  {
    icon: "📸",
    label: "Galería de fotos",
    url: "https://www.flickr.com/photos/fbmadrid/54938959883/in/album-72177720330472562",
  },
  // ↑ the hidden block and the empty-href link are skipped entirely
],
```

---

## File Naming Convention

```
YYYY-MM-DD-slug.ts
```

Where:
- `YYYY-MM-DD` comes from the `date-is` attribute (converted from DD-MM-YYYY)
- `slug` is the `id` attribute of the root `<div>`

Examples:
- `2026-01-01-torneo-reyes.ts`
- `2025-12-26-torneo-cyl.ts`
- `2025-12-17-convocatoria-fbm-1.ts`
- `2025-11-18-torneo-fll.ts`
- `2025-08-26-comienzo-temporada.ts`

## Variable Naming Convention

The exported variable name follows the pattern:

```
announcement_YYYY_MM_DD_slug
```

Where `slug` is the `id` attribute with hyphens replaced by underscores.

Examples:
- `announcement_2026_01_01_torneo_reyes`
- `announcement_2025_12_26_torneo_cyl`
- `announcement_2025_12_17_convocatoria_fbm_1`

---

## Add the New Announcement to the Events List

After generating the new announcement file, update `src/hooks/useEvents.ts`:

- Add an import statement for it
- Include it in the returned array, placed chronologically (newest first)

---

## Complete Examples

### Example 1: Tournament (🏆)

**Input HTML:**
```html
<div class="timeline-item u15" date-is='01-01-2026' id="torneo-reyes">
    <h1>🏆 I Torneo de Reyes</h1>
    <p>⛹️‍♂️ Cadete U15</p>
    <p>
        🏟️ Alcobendas,
        <a href="https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8">
            🗺️ Pabellón Antela Parada
        </a>
    </p>
    <p>📆 Del 2 al 4 de enero de 2026</p>
    <p class="description">
        Torneo cadete de primer año organizado por el club donde han
        invitado a equipos U15 de muy alto nivel, sobre todo de Madrid
    </p>
    <p class="description">
        El torneo se disputará entre 6 equipos, divididos en 2 grupos:
        Laso, Rozas y Mataró por un lado; Alcobendas, Fuenlabrada y Zentro
        por otro
    </p>
    <p>
        🎥
        Todos los partidos se retransmitirán por el canal de
        <a href="https://www.youtube.com/@ClubBaloncestoAlcobendas">
            CB Alcobendas
        </a>
    </p>
    <p>
        📱
        <a href="https://www.instagram.com/p/DS2YdVzjAoo">
            Anuncio en del torneo
        </a>
    </p>
    <p>🏀 Esta es la previsión de partidos</p>
    <p>📆 Viernes, 2 de enero de 2026</p>
    <p>🕜 10:30</p>
    <p>📆 Viernes, 2 de enero de 2026</p>
    <p>🕜 18:30</p>
    <p>📆 Sábado, 3 de enero de 2026</p>
    <p>🕜 18:00 | 20:30</p>
    <p>📆 Domingo, 4 de enero de 2026</p>
    <p>🕜 10:30 | 12:30</p>
</div>
```

**Output file: `src/data/games/2026-01-01-torneo-reyes.ts`**

```typescript
import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_01_01_torneo_reyes: Announcement = AnnouncementSchema.parse({
  id: "S56-torneo-reyes",
  type: "announcement",
  season: "2025-26",
  date: "2026-01-01T00:00:00Z",

  title: "I Torneo de Reyes",
  emoji: "🏆",

  category: "U15M",

  venue: venues["antela"],

  dateRange: "Del 2 al 4 de enero de 2026",

  description: [
    "Torneo cadete de primer año organizado por el club donde han invitado a equipos U15 de muy alto nivel, sobre todo de Madrid",
    "El torneo se disputará entre 6 equipos, divididos en 2 grupos: Laso, Rozas y Mataró por un lado; Alcobendas, Fuenlabrada y Zentro por otro",
  ],

  schedule: [
    {
      date: "Viernes, 2 de enero de 2026",
      time: "10:30",
    },
    {
      date: "Viernes, 2 de enero de 2026",
      time: "18:30",
    },
    {
      date: "Sábado, 3 de enero de 2026",
      time: "18:00 | 20:30",
    },
    {
      date: "Domingo, 4 de enero de 2026",
      time: "10:30 | 12:30",
    },
  ],

  references: [
    {
      icon: "🎥",
      label: "Todos los partidos se retransmitirán por el canal de CB Alcobendas",
      url: "https://www.youtube.com/@ClubBaloncestoAlcobendas",
    },
    {
      icon: "📱",
      label: "Anuncio en del torneo",
      url: "https://www.instagram.com/p/DS2YdVzjAoo",
    },
  ],
});
```

### Example 2: Call-up (📢)

**Input HTML:**
```html
<div class="timeline-item" date-is='17-12-2025' id="convocatoria-fbm-1">
    <h1>📢 Convocatoria</h1>
    <p>
        🏀
        La Federación de Baloncesto de Madrid nos convoca
        para asistir a una concentración de cadetes de primer año
    </p>
    <p>
        📰
        Nota de prensa de la
        <a href="https://www.fbm.es/noticia-87-12994/...">
            convocatoria
        </a>
    </p>
    <p class="description">
        La convocatoria consta de varios entrenos, todos en el mismo lugar
    </p>
    <p>
        🏟️ Caja Mágica
        <a href="https://maps.app.goo.gl/vXg8X8bE22Vd9PVWA">
            🗺️ Pabellón Norte
        </a>
    </p>
    <p>📆 Lunes, 22 de diciembre de 2025</p>
    <p>🕜 18:45 - 21:00</p>
    <p>📆 Martes, 23 de diciembre de 2025</p>
    <p>🕜 18:45 - 21:00</p>
    <p>📆 Viernes, 26 de diciembre de 2025</p>
    <p>🕜 18:45 - 21:00</p>
    <p class="description">
        Para rematar con unos amistosos en Salamanca
    </p>
    <p>🏀 ¡Selección de Canarias!</p>
    <p>📆 Sábado, 27 de diciembre de 2025</p>
    <p>🕜 16:30</p>
    <p>🏀 ¡Castilla y León!</p>
    <p>📆 Domingo, 28 de diciembre de 2025</p>
    <p>🕜 (por confirmar)</p>
    <p>
        📰
        La federación de Castilla y León
        <a href="https://www.fbcyl.es/noticias/2136/...">
            anuncia el torneo
        </a>
    </p>
    <p>
        📰
        El club
        <a href="https://x.com/cbalcobendas/status/2001980957205918111">
            recompensa el esfuerzo
        </a>
    </p>
</div>
```

**Output file: `src/data/games/2025-12-17-convocatoria-fbm-1.ts`**

```typescript
import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_12_17_convocatoria_fbm_1: Announcement = AnnouncementSchema.parse({
  id: "S56-convocatoria-fbm-1",
  type: "announcement",
  season: "2025-26",
  date: "2025-12-17T00:00:00Z",

  title: "Convocatoria",
  emoji: "📢",

  venue: venues["norte"],

  description: [
    "La convocatoria consta de varios entrenos, todos en el mismo lugar",
    "Para rematar con unos amistosos en Salamanca",
  ],

  schedule: [
    {
      date: "Lunes, 22 de diciembre de 2025",
      time: "18:45 - 21:00",
    },
    {
      date: "Martes, 23 de diciembre de 2025",
      time: "18:45 - 21:00",
    },
    {
      date: "Viernes, 26 de diciembre de 2025",
      time: "18:45 - 21:00",
    },
    {
      label: "¡Selección de Canarias!",
      date: "Sábado, 27 de diciembre de 2025",
      time: "16:30",
    },
    {
      label: "¡Castilla y León!",
      date: "Domingo, 28 de diciembre de 2025",
      time: "(por confirmar)",
    },
  ],

  references: [
    {
      icon: "📰",
      label: "Nota de prensa de la convocatoria",
      url: "https://www.fbm.es/noticia-87-12994/...",
    },
    {
      icon: "📰",
      label: "La federación de Castilla y León anuncia el torneo",
      url: "https://www.fbcyl.es/noticias/2136/...",
    },
    {
      icon: "📰",
      label: "El club recompensa el esfuerzo",
      url: "https://x.com/cbalcobendas/status/2001980957205918111",
    },
  ],
});
```

### Example 3: Season Milestone (🚀)

**Input HTML:**
```html
<div class="timeline-item" date-is="26-08-2025" id="comienzo-temporada">
    <h1>🚀 Arranca la Temporada</h1>
    <p class="description">
        Primer entrenamiento del equipo, casi todos los jugadores se reúnen
        con el entrenador
    </p>
    <p class="description">
        Estos primeros entrenamientos lo hacen jugadores del 2010 y del 2011,
        hasta que vayan viniendo el resto de compañeros
    </p>
    <p>
        📰
        Noticia sobre el
        <a href="https://www.fbm.es/noticia-104-12825/liga-ahorramas-arranca-un-nuevo-curso">
            arranque de la temporada
        </a>
    </p>
</div>
```

**Output file: `src/data/games/2025-08-26-comienzo-temporada.ts`**

```typescript
import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2025_08_26_comienzo_temporada: Announcement = AnnouncementSchema.parse({
  id: "S56-comienzo-temporada",
  type: "announcement",
  season: "2025-26",
  date: "2025-08-26T00:00:00Z",

  title: "Arranca la Temporada",
  emoji: "🚀",

  description: [
    "Primer entrenamiento del equipo, casi todos los jugadores se reúnen con el entrenador",
    "Estos primeros entrenamientos lo hacen jugadores del 2010 y del 2011, hasta que vayan viniendo el resto de compañeros",
  ],

  references: [
    {
      icon: "📰",
      label: "Noticia sobre el arranque de la temporada",
      url: "https://www.fbm.es/noticia-104-12825/liga-ahorramas-arranca-un-nuevo-curso",
    },
  ],
});
```

> **Note**: When neither `venue` nor `category` nor `dateRange` nor `schedule` are present in the HTML, simply omit
> those fields from the output. The schema marks them as optional.

