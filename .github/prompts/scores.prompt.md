---
agent: 'agent'
title: 'Extract scores from attached image and update the game file'
---
Extract the quarter-by-quarter scores of a basketball game from the attached image and add them to the attached game description file (a TypeScript file under `src/data/games/`).

## Steps

1. Read the attached image and identify, for each team, the points scored in every period (quarters and any overtimes), in order.
2. Match each row of scores in the image to the correct team in the game file (`home` / `away`), using team names and logos. Do not assume the image order matches the file order.
3. Update the `scores` array of both `home` and `away` in the game file with the extracted values, e.g. `scores: [14, 20, 14, 12]`. Include overtime periods as extra elements if present.
4. Do not modify any other field of the file.

## Checks

- The sum of each team's period scores must equal the final score shown in the image. If it does not, stop and report the discrepancy instead of guessing.
- Optionally cross-check the date, time (the file stores UTC; the image usually shows Spanish local time) and venue, and mention any mismatch to the user without changing it.
- From the repository root, run the following commands in order and confirm each one succeeds:
  1. `npm run validate` — the data loads without errors.
  2. `npm run build` — type-checking and production build pass.
  3. `npm test` — all unit tests pass.

## Success criteria

- `home.scores` and `away.scores` contain the correct per-period values.
- Totals match the final score in the image.
- `npm run validate`, `npm run build` and `npm test` all pass.
- Report a short summary table with the per-period scores and totals for both teams.

