# Baskeintats

Basketball statistics SPA. It shows game data and statistics, updated manually every week through data
formatted as TypeScript code, parsed from Zod schemas.

## Getting started

Install dependencies:

```bash
npm clean-install
```

Validates TypeScript code runs correctly so it can be loaded into the React app:

```bash
npm run validate
```

Start development server:

```bash
npm run dev
```

## Add new games data

Create a TypeScript file in `data/games/` named `YYYY-MM-DD-away-team.ts`
with content conforming to the `Game` Zod schema.
The file should export a default object with the game data.

Edit `useGames.ts` to import the new game data and include it in the returned array.

## Folder structure

```text
baskeintats/
├── data/                  # TypeScript data conforming Zod schemas (edited manually)
│   ├── games/
│   ├── teams.ts
│   └── venues.ts
├── src/
│   ├── generated/         # Auto-generated (do not edit)
│   ├── types/             # TypeScript interfaces
│   ├── context/           # React Context (filters)
│   ├── hooks/             # Custom hooks
│   ├── components/        # React components
│   ├── pages/             # Pages
│   └── lib/               # Pure utilities
└── README.md
```
