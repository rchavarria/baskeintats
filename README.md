# Baskeintats

Basketball statistics SPA. It shows game data and statistics, updated manually every week through YAML files.

## Getting started

Install dependencies:

```bash
npm clean-install
```

Transform YAML data into TypeScript, loadable, code:

```bash
npm run generate
```

Start development server:

```bash
npm run dev
```

## Add new games data

Create a YAML file in `data/games/<season>/` named
`YYYY-MM-DD-away-team.yaml`.

## Folder structure

```text
baskeintats/
├── data/                  # YAML data (edited manually)
│   ├── teams/
│   └── games/
├── scripts/               # YAML → TS generation script
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
