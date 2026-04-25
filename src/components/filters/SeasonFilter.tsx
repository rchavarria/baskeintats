import { useMemo } from "react";
import { useEvents } from "../../hooks/useEvents";
import { useFiltersContext } from "../../context/FiltersContext";

export function SeasonFilter() {
  const events = useEvents();
  const { filters, setFilters } = useFiltersContext();

  const seasons = useMemo(
    () => [...new Set(events.map((e) => e.season))].sort().reverse(),
    [events],
  );

  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Season
      </h2>
      <ul className="flex flex-col gap-1">
        <li>
          <button
            type="button"
            onClick={() => setFilters({ season: "" })}
            className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
              filters.season === ""
                ? "bg-blue-600 text-white font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            All seasons
          </button>
        </li>
        {seasons.map((s) => (
          <li key={s}>
            <button
              type="button"
              onClick={() => setFilters({ season: s })}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filters.season === s
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {s}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

