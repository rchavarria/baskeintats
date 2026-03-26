# Main Instructions

## 1. General Project Guidelines

You are assisting with Basketball statistics SPA.

### Technology Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Chart.js** + **react-chartjs-2** for charts (pending implementation)
- **js-yaml** to parse YAML at build time

## Available scripts

| Script             | Description                                      |
|--------------------|--------------------------------------------------|
| `npm run generate` | Parses YAML files and generates `src/generated/` |
| `npm run dev`      | Generates data and starts the development server |
| `npm run build`    | Generates data and builds for production         |
| `npm run preview`  | Serves the production build                      |

## Key Requirements

- All code, comments, documentation must be in English, even UI elements
- All CLI commands must be executed from the root of the repository
- All code must be in TypeScript with strict type checking enabled
- Check compilation errors by running `npm run build`
- Check code works by running tests as `npm run test`
- Follow Biome linting rules for code style and formatting
- Include clear error messages with specific context
- Write Vitest tests for backend services and critical business logic
