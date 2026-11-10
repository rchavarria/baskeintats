---
name: game-stats
description: Update game scores and statistics from a Gesdeportiva JSON export in an existing TypeScript game file.
---

# Game Stats

Update only `home.scores`, `away.scores`, and `playerStats` in an existing game data file,
using the statistics exported in a JSON file.

## Required inputs

Use the files attached or explicitly identified by the user. If either input is missing, ask for it before editing:

1. A `.json` file containing the Gesdeportiva game statistics, normally under `tmp/<date>`, usually consisting of a slug and a long id 
2. The existing `.ts` game file to update, normally under `src/data/games/`.

Ask one question at a time, using the user-question tool when available. 
Do not ask again for files already provided, select a different game automatically, or create a new game file.

By default, extract **player number 55 from Alcobendas**, unless the user explicitly specifies a different player or team.

## Read and match the data

1. Read the JSON, the complete target game file, and the relevant schemas in `src/model/GameSchema.ts` and `src/model/PlayerSchema.ts`.
2. Check that the export succeeded (`resultado` is `"correcto"` and `error` is empty) 
and that `partido.estado_partido` is `"FINALIZADO"`. Report errors or an unfinished game and ask how to proceed 
instead of assuming final statistics.
3. Match `partido.local` and `partido.visitante` to the clubs in the TypeScript file.
Resolve team references in `src/data/teams.ts` if needed.
Home team is identified in `.ts` file.
If the teams or home/away roles do not match, stop and ask for clarification; do not swap the clubs in the target file.
4. Select `estadisticas.estadisticasequipolocal` or `estadisticas.estadisticasequipovisitante` according to the matched player's team.
Find the row whose `dorsal`, compared as a string, is `"55"` (or the explicitly requested number).
Never select the opponent's player with the same number or the `"TOTALES"` row.
5. If a team, player, required value, or file format is missing or ambiguous, explain the specific problem and ask for clarification.
Do not invent values or replace missing statistics with zero.
6. Require the advanced `playerStats` structure for the full mapping below.
If the target uses basic statistics or is a scheduled game, ask before converting its type, schema, imports, or structure.

## Update scores

Read `partido.periodos` in ascending `periodo` order:

| TypeScript field | JSON values |
|------------------|-------------|
| `home.scores` | Each period's `tanteo_periodo_local` |
| `away.scores` | Each period's `tanteo_periodo_visitante` |

These are **points scored in each period**, not cumulative scores. 
Include every overtime as an additional array element; do not truncate to four periods.

Before editing, verify that period numbers are unique and consecutive starting at 1, their count matches `partido.numperiodos_total`,
and all period scores are nonnegative integers. 
Verify that the sums equal `partido.tanteo_local` and `partido.tanteo_visitante`.
Stop and report discrepancies instead of guessing.

## Update player statistics

Map the selected player's row as follows:

| TypeScript field | JSON field or conversion |
|------------------|--------------------------|
| `time` | Convert `tiempo_jugado` (`MM:SS`) to integer seconds, written as `MM * 60 + SS` |
| `fieldGoals.made` | `canasta2p` |
| `fieldGoals.attempted` | `tiro2p` |
| `threePointers.made` | `canasta3p` |
| `threePointers.attempted` | `tiro3p` |
| `freeThrows.made` | `canasta1p` |
| `freeThrows.attempted` | `tiro1p` |
| `rebounds.offensive` | `reboteofensivo` |
| `rebounds.defensive` | `rebotedefensivo` |
| `assists` | `asistencias` |
| `steals` | `recuperaciones` |
| `turnovers` | `perdidas` |
| `blocks.made` | `taponescometidos` |
| `blocks.received` | `taponesrecibidos` |
| `faults.made` | `faltascometidas` |
| `faults.received` | `faltasrecibidas` |
| `plusMinus` | `masMenos` |
| `efficiency` | `valoracion` |

**In this repository, `playerStats.fieldGoals` means TWO-POINT SHOTS ONLY. 
Never include three-pointers in `fieldGoals.made` or `fieldGoals.attempted`.** 
The JSON `tiro*p` fields are attempts, and `canasta*p` fields are makes.

Use the displayed `tiempo_jugado` at whole-second precision, not rounded milliseconds.
Validate that seconds are between 0 and 59.

Before editing, verify:

- Counts are nonnegative integers; `plusMinus` and `efficiency` are integers and may be negative.
- Each shot's made count does not exceed its attempted count.
- `2 * fieldGoals.made + 3 * threePointers.made + freeThrows.made` equals the JSON player's `puntos`.
- Offensive plus defensive rebounds equals the JSON player's `rebotes`.

Report inconsistencies and ask for clarification rather than silently correcting the source 
or recalculating the supplied efficiency or plus/minus.

## Edit and validate

- Make a surgical edit to the target file only. Preserve existing unrelated user changes.
- Keep all fields outside `home.scores`, `away.scores`, and `playerStats` unchanged, 
including metadata, videos, recap, and references. Keep existing zero values when the JSON confirms them.
- Follow the file's TypeScript style and existing schemas. Do not add a separate points field or a player identity field.
- Review the resulting diff and cross-check every mapped value against the selected JSON row and periods.
- Execute **all console commands through the PyCharm MCP terminal tool, using an interactive WSL shell**,
Do not use a standalone PowerShell execution tool.
- For example, when the IDE terminal runs on Windows, use `wsl.exe -d Ubuntu -- bash -ic 'npm run validate && npm run lint && npm run build && npm run test'`,
with the repository as the working directory. If already in WSL, use `bash -ic` directly. Do not use shell login flags.
- Run `npm run validate`, `npm run lint`, `npm run build`, and `npm run test` in that order.
Run `npm run lint:fix` if linting fails, then re-run the commands in order.
Resolve failures caused by the edit; report unrelated failures without changing unrelated files.
- Finish with the updated file path, the final score (mentioning overtime when present),
and a concise summary of the selected player's statistics. State any unresolved problems explicitly.
