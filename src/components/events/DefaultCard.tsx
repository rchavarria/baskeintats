import type {Game} from "../../model/GameSchema";
import {DateTimeDisplay} from "../ui/DateTimeDisplay.tsx";

interface GameCardProps {
  game: Game;
}

export function DefaultCard({ game }: GameCardProps) {
  return (
    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
      <DateTimeDisplay isoDate={game.date} />
      <span>{game.competition.name} · {game.competition.phase} · {game.competition.round}</span>
    </div>
  );
}
