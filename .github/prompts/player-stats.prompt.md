---
agent: 'agent'
title: 'Extract player stats from FBM box score (paste PDF content, fill playerStats)'
---
Extract the advanced statistics of **player number 55 from Alcobendas** from the FBM box score text pasted by the user, and fill in the `playerStats` object of the attached game file (`src/data/games/YYYY-MM-DD-opponent.ts`).

## Input

- The attached game file (an `AdvancedGame` with a `playerStats` block).
- The box score as plain text, pasted by the user. It changes for every game. If it is missing, ask the user to paste it before doing anything else.

## Box score format

The text is the FBM stats export. Each team section starts with its name (the Alcobendas team is `FUNDAL ALCOBENDAS ...`). Every player row starts with `<number> [*]<SURNAMES, NAME>`, followed by one value per line in this column order:

| # | Column | Meaning |
|---|--------|---------|
| 1 | MIN | Minutes played (`mm:ss`) |
| 2 | PTS | Points |
| 3 | TC 2P A/I | Two-pointers made/attempted |
| 4 | TC 2P % | (ignore) |
| 5 | TC 3P A/I | Three-pointers made/attempted |
| 6 | TC 3P % | (ignore) |
| 7 | TL A/I | Free throws made/attempted |
| 8 | TL % | (ignore) |
| 9 | DEF | Defensive rebounds |
| 10 | OF | Offensive rebounds |
| 11 | Tot. | Total rebounds (ignore) |
| 12 | AST | Assists |
| 13 | REC | Steals |
| 14 | PER | Turnovers |
| 15 | TC | Blocks made |
| 16 | TR | Blocks received |
| 17 | FC | Fouls committed |
| 18 | FR | Fouls received |
| 19 | VAL | Efficiency (may be negative) |
| 20 | +/- | Plus/minus (may be negative) |

Only use the row for number 55 inside the Alcobendas section, not the opponent's section.

## Mapping to `playerStats`

- `time`: `MM * 60 + SS` written as an expression, e.g. `13 * 60 + 54`
- `fieldGoals`: **two-pointers only** (TC 2P), never including three-pointers
- `threePointers`: TC 3P
- `freeThrows`: TL
- `rebounds.offensive` = OF, `rebounds.defensive` = DEF
- `assists` = AST, `steals` = REC, `turnovers` = PER
- `blocks.made` = TC, `blocks.received` = TR
- `faults.made` = FC, `faults.received` = FR
- `efficiency` = VAL, `plusMinus` = +/-

## Constraints

- Only modify the `playerStats` block. Leave the rest of the file unchanged.
- Negative numbers can use a non-standard hyphen (soft hyphen `­`). Write them as normal negative integers.

## Success criteria

- `2 * fieldGoals.made + 3 * threePointers.made + freeThrows.made` equals the player's PTS. If it doesn't, report the mismatch.
- From the repository root, run the following commands in order and confirm each one succeeds:
  1. `npm run validate` — the data loads without errors.
  2. `npm run build` — type-checking and production build pass.
  3. `npm test` — all unit tests pass.
- Finish with a short table showing the extracted values.

