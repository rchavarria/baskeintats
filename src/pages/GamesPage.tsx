import { useEvents } from "../hooks/useEvents.ts";
import { useTeams } from "../hooks/useTeams";
import { useFilters } from "../hooks/useFilters";
import { filterGames } from "../lib/filters";
import { GameCard } from "../components/games/GameCard";
import { FilterBar } from "../components/filters/FilterBar";
import { EmptyState } from "../components/ui/EmptyState";

export function GamesPage() {
  const games = useEvents();
  const { teamsMap } = useTeams();
  const { filters } = useFilters();
  const filtered = filterGames(games, filters);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Partidos</h1>
      <FilterBar />
      {filtered.length === 0 ? (
        <EmptyState message="No hay partidos con los filtros seleccionados" />
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              homeTeam={teamsMap[game.home.team]}
              awayTeam={teamsMap[game.away.team]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
