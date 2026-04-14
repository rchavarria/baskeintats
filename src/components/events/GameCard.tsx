import {totalPoints} from "../../model/GameSchema";
import type {AdvancedGame, Game} from "../../model/GameSchema";
import {Link} from "react-router-dom";
import {DateTimeDisplay} from "../ui/DateTimeDisplay.tsx";

function gameLink(game: Game | AdvancedGame): string {
  if (game.type === 'advanced-game') {
    return `/games/advanced/${game.id}`;
  }

  return `/games/${game.id}`;
}

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const homeScore = totalPoints(game.home.scores);
  const awayScore = totalPoints(game.away.scores);

  return (
    <Link
      to={gameLink(game)}
      className="block bg-white rounded-xl shadow hover:shadow-md transition p-4 border border-gray-100"
    >
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <DateTimeDisplay isoDate={game.date} />
        <span>{game.competition.name} · {game.competition.phase} · {game.competition.round}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-end gap-2">
          <img src={game.home.club.logo} alt={game.home.club.name} className="w-8 h-8 object-contain" />
          <p className="font-semibold text-gray-800">{game.home.club.name}</p>
        </div>
        <div className="text-center font-bold text-lg text-gray-900 w-20">
          {homeScore} — {awayScore}
        </div>
        <div className="flex-1 flex items-center gap-2">
          <p className="font-semibold text-gray-800">{game.away.club.name}</p>
          <img src={game.away.club.logo} alt={game.away.club.name} className="w-8 h-8 object-contain" />
        </div>
      </div>
      <div className="mt-2 text-center text-xs text-gray-400">
        {game.type === "game" ? "Jugado" : game.type}
      </div>
    </Link>
  );
}
