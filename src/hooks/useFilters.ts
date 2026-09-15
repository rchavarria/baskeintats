import { useContext } from "react";
import type { FiltersContextValue } from "../context/FiltersContextDefinition";
import { FiltersContext } from "../context/FiltersContextDefinition";

export function useFilters(): FiltersContextValue {
  const ctx = useContext(FiltersContext);
  if (!ctx) {
    throw new Error("useFilters must be used within FiltersProvider");
  }

  return ctx;
}
