import { useMemo } from "react";
import { useEvents } from "./useEvents";
import { useFiltersContext } from "../context/FiltersContext";

export function useFilteredEvents() {
  const events = useEvents();
  const { filters } = useFiltersContext();

  return useMemo(() => {
    return events.filter((event) => {
      if (filters.season && event.season !== filters.season) return false;
      if (filters.eventType && event.type !== filters.eventType) return false;
      return true;
    });
  }, [events, filters.season, filters.eventType]);
}

