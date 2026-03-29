import type { Team } from "./team";

export interface GameTeamResult {
  team: string;
  scores: number[];
  overtimes?: number[];
}

export interface PlayerStats {
  /** Total points scored by the player */
  points: number;
  /** Total rebounds (offensive + defensive) */
  rebounds: number;
  /** Total assists */
  assists: number;
  /** Total steals */
  steals: number;
  /** Total blocks */
  blocks: number;
  /** Total turnovers committed */
  turnovers: number;
  /** Field goals made */
  fgm: number;
  /** Field goals attempted */
  fga: number;
  /** Three-pointers made */
  tpm: number;
  /** Three-pointers attempted */
  tpa: number;
  /** Free throws made */
  ftm: number;
  /** Free throws attempted */
  fta: number;
}

export type GameStatus = "scheduled" | "played" | "postponed" | "cancelled";

export interface Game {
  id: string;
  season: string;
  category: string;
  date: string;
  time: string;
  competition: string;
  phase: string;
  round: number;
  venue: string;
  status: GameStatus;
  home: GameTeamResult;
  away: GameTeamResult;
  playerStats?: PlayerStats;
  recap?: string;
  videos?: string[];
  social?: string[];
  articles?: string[];
}

export interface GameWithTeams extends Game {
  homeTeam: Team;
  awayTeam: Team;
}

export interface DerivedPlayerStats extends PlayerStats {
  /** Field goal percentage (FGM/FGA) */
  fgPct: number;
  /** Three-point percentage (TPM/TPA) */
  tpPct: number;
  /** Free throw percentage (FTM/FTA) */
  ftPct: number;
  totalScore: number;
}
