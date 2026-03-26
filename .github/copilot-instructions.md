# Main Instructions

## 1. General Project Guidelines

You are assisting with a full-stack TypeScript application: a Car Fuel Consumption Tracker Web Application.

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

**Key Requirements**:

- All code, comments, documentation must be in English, even UI elements
- All CLI commands must be executed from the root of the monorepo
- When working on frontend, use [`frontend.instructions.md`](./instructions/frontend.instructions.md) for specific guidelines
- When working on backend, use [`backend.instructions.md`](./instructions/backend.instructions.md) for specific guidelines
- All code must be in TypeScript with strict type checking enabled
- Check compilation errors by running `npm run build --workspace={frontend|backend|shared}`
- Check code works by running tests as `npm run test`
- Use Zod schemas from `shared/schemas/` for data validation across frontend and backend
- Import shared types using `@shared/*` path alias
- Follow Biome linting rules for code style and formatting
- Use the command `npm run docker:up` to start the application with Docker Compose, and `npm run docker:down` to stop it
- Use the command `npm run test` to run tests 
- Use ISO format (YYYY-MM-DD) for API communication and dd/mm/yyyy for UI display in Spanish format
- Include clear error messages with specific context (e.g., "Mileage must be greater than the last recorded (X km)")
- Write Vitest tests for backend services and critical business logic
