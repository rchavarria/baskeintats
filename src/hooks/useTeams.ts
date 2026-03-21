import { teams, teamsMap } from "../generated/teams";
import type { Team } from "../types/team";

export function useTeams(): { teams: Team[]; teamsMap: Record<string, Team> } {
  return { teams, teamsMap };
}
