import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

export interface Filters {
  season: string;
  competition: string;
  team: string;
  dateFrom: string;
  dateTo: string;
}

interface FiltersContextValue {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
}

const defaultFilters: Filters = {
  season: "",
  competition: "",
  team: "",
  dateFrom: "",
  dateTo: "",
};

const FiltersContext = createContext<FiltersContextValue | null>(null);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<Filters>(defaultFilters);

  function setFilters(partial: Partial<Filters>) {
    setFiltersState((prev) => ({ ...prev, ...partial }));
  }

  function resetFilters() {
    setFiltersState(defaultFilters);
  }

  return (
    <FiltersContext.Provider value={{ filters, setFilters, resetFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFiltersContext() {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error("useFiltersContext must be used within FiltersProvider");
  return ctx;
}
