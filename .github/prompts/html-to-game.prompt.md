# Prompt: Convert HTML to Game TypeScript file

Use the skill `@.github/skills/html-to-game.md` to convert an HTML game entry into a TypeScript `Game` object.

## Instructions

1. Read the source HTML file indicated by the user (e.g. `src/data/games/game.html`)
2. Apply every section of the skill in order:
   - Metadata (`id`, `season`, `date`, `status`)
   - Competition (`name`, `category`, `phase`, `round`)
   - Venue
   - Home & Away teams (`club`, `category`, `scores`)
   - Player Stats (`time`, `fieldGoals`, `threePointers`, `freeThrows`, `faults`, `plusMinus`, `efficiency`)
   - Videos (`official`, `others`)
   - Recap (`title`, `lines`)
   - References
3. If any referenced team does not exist in `src/data/teams.ts`, add it before creating the game file
4. Determine the output filename following the File Naming Convention in the skill
5. Create the output file at `src/data/games/<filename>.ts`

## Usage

```
Use @.github/prompts/html-to-game.prompt.md with src/data/games/game.html
```

Replace `src/data/games/game.html` with the path to the HTML file you want to convert.

