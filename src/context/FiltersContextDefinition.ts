import { createContext } from "react";

export interface Filters {
  season: string;
  eventType: string;
  opponentTeam: string;
  competition: string;
  team: string;
  dateFrom: string;
  dateTo: string;
}

export interface FiltersContextValue {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
}

export const defaultFilters: Filters = {
  season: "",
  eventType: "",
  opponentTeam: "",
  competition: "",
  team: "",
  dateFrom: "",
  dateTo: "",
};

export const FiltersContext = createContext<FiltersContextValue | null>(null);
