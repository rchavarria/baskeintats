import { useMemo } from "react";
import { useEvents } from "./useEvents";
import { useFiltersContext } from "../context/FiltersContext";

export function useFilteredEvents() {
  const events = useEvents();
  const { filters } = useFiltersContext();

  return useMemo(() => {
    return events.filter((event) => {
      if (filters.season) return event.season === filters.season;
      return true;
    });
  }, [events, filters.season]);
}


