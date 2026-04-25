import { useMemo } from "react";
import { useEvents } from "../../hooks/useEvents";
import { useFiltersContext } from "../../context/FiltersContext";

const EVENT_TYPE_LABELS: Record<string, string> = {
  "game": "Game",
  "advanced-game": "Game (advanced)",
  "friendly-game": "Friendly game",
  "scheduled": "Scheduled",
  "announcement": "Announcement",
  "stats": "Stats",
};

export function EventTypeFilter() {
  const events = useEvents();
  const { filters, setFilters } = useFiltersContext();

  const eventTypes = useMemo(
    () => [...new Set(events.map((e) => e.type))].sort(),
    [events],
  );

  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Event type
      </h2>
      <ul className="flex flex-col gap-1">
        <li>
          <button
            type="button"
            onClick={() => setFilters({ eventType: "" })}
            className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
              filters.eventType === ""
                ? "bg-blue-600 text-white font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            All types
          </button>
        </li>
        {eventTypes.map((t) => (
          <li key={t}>
            <button
              type="button"
              onClick={() => setFilters({ eventType: t })}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filters.eventType === t
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {EVENT_TYPE_LABELS[t] ?? t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

