import { useMemo } from "react";
import { useEvents } from "./useEvents";
import { useFiltersContext } from "../context/FiltersContext";


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


function byCompetition(competitionName: string) {
  return (event: unknown) => {
    if (!competitionName) {
      return true;
    }

    const e = event as Record<string, unknown>;
    const competition = e.competition as { name: string } | undefined;
    return competition?.name === competitionName;
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
        .filter(byCompetition(filters.competition)),
    [events, filters.season, filters.eventType, filters.competition],
  );
}

