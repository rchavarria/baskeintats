// Auto-generated — do not edit manually
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as yaml from "js-yaml";
import type { Team } from "../src/types/team";
import type { Game } from "../src/types/game";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const GENERATED_DIR = path.join(ROOT, "src", "generated");

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readYaml<T>(filePath: string): T {
  const content = fs.readFileSync(filePath, "utf-8");
  return yaml.load(content, { schema: yaml.JSON_SCHEMA }) as T;
}

function jsonReplacer(_key: string, value: unknown): unknown {
  if (value instanceof Date) {
    return value.toISOString().split("T")[0];
  }
  return value;
}

function generateTeams(): void {
  const teamsDir = path.join(DATA_DIR, "teams");
  const teamFiles = fs.readdirSync(teamsDir).filter((f) => f.endsWith(".yaml"));

  const teams: Team[] = teamFiles.map((file) => {
    const id = path.basename(file, ".yaml");
    const data = readYaml<Omit<Team, "id">>(path.join(teamsDir, file));
    return { id, ...data };
  });

  const teamsMap = Object.fromEntries(teams.map((t) => [t.id, t]));

  const output = `// Auto-generated — do not edit manually
import type { Team } from "../types/team";

export const teams: Team[] = ${JSON.stringify(teams, jsonReplacer, 2)};

export const teamsMap: Record<string, Team> = ${JSON.stringify(teamsMap, jsonReplacer, 2)};
`;

  fs.writeFileSync(path.join(GENERATED_DIR, "teams.ts"), output, "utf-8");
  console.log(`Generated teams.ts with ${teams.length} teams`);
}

function generateGames(): void {
  const gamesBaseDir = path.join(DATA_DIR, "games");
  const gameFiles: string[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) {
        walk(full);
      } else if (entry.endsWith(".yaml")) {
        gameFiles.push(full);
      }
    }
  }

  walk(gamesBaseDir);

  const games: Game[] = gameFiles.map((filePath) => {
    const fileName = path.basename(filePath, ".yaml");
    const data = readYaml<Omit<Game, "id">>(filePath);
    return { id: fileName, ...data };
  });

  games.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

  const output = `// Auto-generated — do not edit manually
import type { Game } from "../types/game";

export const games: Game[] = ${JSON.stringify(games, jsonReplacer, 2)};
`;

  fs.writeFileSync(path.join(GENERATED_DIR, "games.ts"), output, "utf-8");
  console.log(`Generated games.ts with ${games.length} games`);
}

ensureDir(GENERATED_DIR);
generateTeams();
generateGames();
