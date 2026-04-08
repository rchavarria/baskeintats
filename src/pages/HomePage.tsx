import {useGames} from "../hooks/useGames";
import {GameCard} from "../components/games/GameCard";
import {EmptyState} from "../components/ui/EmptyState";

export function HomePage() {
  const games = useGames();
  const recent = games;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Últimos partidos</h1>
      {recent.length === 0 ? (
        <EmptyState message="No hay partidos recientes" />
      ) : (
        <div className="flex flex-col gap-4">
          {recent.map((game) => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))}
        </div>
      )}
    </div>
  );
}
