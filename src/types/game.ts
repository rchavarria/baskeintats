import type { Team } from "./team";

export interface GameTeamResult {
  team: string;
  scores: number[];
  overtimes?: number[];
}

export interface PlayerStats {
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fgm: number;
  fga: number;
  tpm: number;
  tpa: number;
  ftm: number;
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
  fgPct: number;
  tpPct: number;
  ftPct: number;
  totalScore: number;
}
