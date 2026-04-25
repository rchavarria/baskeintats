import { useMemo } from "react";
import { useEvents } from "./useEvents";
import { useFiltersContext } from "../context/FiltersContext";

type WithTeams = {
  home: { club: { id: string }; opponent?: boolean };
  away: { club: { id: string }; opponent?: boolean };
};

function hasTeams(event: unknown): event is WithTeams {
  const e = event as Record<string, unknown>;
  return typeof e.home === "object" && e.home !== null && typeof e.away === "object" && e.away !== null;
}

function getOpponentTeamId(event: WithTeams): string | undefined {
  if (event.home.opponent) return event.home.club.id;
  if (event.away.opponent) return event.away.club.id;
  return undefined;
}

export function useFilteredEvents() {
  const events = useEvents();
  const { filters } = useFiltersContext();

  return useMemo(() => {
    return events.filter((event) => {
      if (filters.season && event.season !== filters.season) return false;
      if (filters.eventType && event.type !== filters.eventType) return false;
      if (filters.opponentTeam) {
        if (!hasTeams(event)) return false;
        if (getOpponentTeamId(event) !== filters.opponentTeam) return false;
      }
      return true;
    });
  }, [events, filters.season, filters.eventType, filters.opponentTeam]);
}

