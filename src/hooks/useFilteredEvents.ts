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

function bySeason(season: string) {
  return (event: { season: string }) => {
    if (!season) {
      return true;
    }

    return event.season === season;
  };
}

function byEventType(eventType: string) {
  return (event: { type: string }) => {
    if (!eventType) {
      return true;
    }

    return event.type === eventType;
  };
}

function byOpponentTeam(opponentTeamId: string) {
  return (event: unknown) => {
    if (!opponentTeamId) {
      return true;
    }

    if (!hasTeams(event)) {
      return false;
    }

    return getOpponentTeamId(event) === opponentTeamId;
  };
}

export function useFilteredEvents() {
  const events = useEvents();
  const { filters } = useFiltersContext();

  return useMemo(
    () =>
      events
        .filter(bySeason(filters.season))
        .filter(byEventType(filters.eventType))
        .filter(byOpponentTeam(filters.opponentTeam)),
    [events, filters.season, filters.eventType, filters.opponentTeam],
  );
}

