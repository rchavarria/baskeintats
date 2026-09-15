import type { ReactNode } from "react";
import { useState } from "react";
import type { Filters } from "./FiltersContextDefinition";
import { defaultFilters, FiltersContext } from "./FiltersContextDefinition";

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
