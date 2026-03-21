import type { Game } from "../types/game";
import type { Filters } from "../context/FiltersContext";

export function filterGames(games: Game[], filters: Filters): Game[] {
  return games.filter((game) => {
    if (filters.season && game.season !== filters.season) return false;
    if (filters.competition && game.competition !== filters.competition) return false;
    if (
      filters.team &&
      game.home.team !== filters.team &&
      game.away.team !== filters.team
    )
      return false;
    if (filters.dateFrom && game.date < filters.dateFrom) return false;
    if (filters.dateTo && game.date > filters.dateTo) return false;
    return true;
  });
}
