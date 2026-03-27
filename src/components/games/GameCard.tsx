import type { Game } from "../../model/GameSchema";
import type { Team } from "../../model/TeamSchema";
import { totalPoints } from "../../lib/stats";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
  homeTeam?: Team;
  awayTeam?: Team;
}

export function GameCard({ game, homeTeam, awayTeam }: GameCardProps) {
  const homeScore = totalPoints(game.home.scores);
  const awayScore = totalPoints(game.away.scores);

  return (
    <Link
      to={`/games/${game.id}`}
      className="block bg-white rounded-xl shadow hover:shadow-md transition p-4 border border-gray-100"
    >
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <span>{game.date}</span>
        <span>{game.competition.name} · {game.competition.phase} · J{game.competition.round}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 text-right">
          <p className="font-semibold text-gray-800">{game.home.club.name}</p>
        </div>
        <div className="text-center font-bold text-lg text-gray-900 w-20">
          {homeScore} — {awayScore}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-800">{game.away.club.name}</p>
        </div>
      </div>
      <div className="mt-2 text-center text-xs text-gray-400">
        {game.status === "played" ? "Jugado" : game.status}
      </div>
    </Link>
  );
}
