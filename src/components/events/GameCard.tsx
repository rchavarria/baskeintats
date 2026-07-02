import {totalPoints} from "../../model/GameSchema";
import type {Game} from "../../model/GameSchema";
import {Link} from "react-router-dom";
import {DateTimeDisplay} from "../ui/DateTimeDisplay.tsx";
import {CategoryBadge} from "../ui/CategoryBadge.tsx";
import {GameResultEmoji} from "./GameResultEmoji.tsx";


interface GameCardProps {
  game: Game;
}

export function GameCard({game}: GameCardProps) {
  const homeScore = totalPoints(game.home.scores);
  const awayScore = totalPoints(game.away.scores);

  return (
    <Link
      to={`/games/${game.id}`}
      className="block rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"
    >
      {/* Meta row: fecha, competición (posición provisional) */}
      <div className="flex items-center justify-between gap-2 px-4 pt-3 text-[11px] text-white/90">
        <DateTimeDisplay isoDate={game.date} />
        <span className="truncate">
          {game.competition.name} · {game.competition.phase} · {game.competition.round}
        </span>
      </div>

      {/* Marcador principal */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
        {/* Equipo local */}
        <div className="flex items-center justify-end gap-3 min-w-0">
          <p className="font-extrabold text-white text-lg sm:text-xl leading-tight text-right truncate">
            {game.home.club.name}
          </p>
          <img
            src={game.home.club.logo}
            alt={game.home.club.name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md shrink-0"
          />
        </div>

        {/* Tarjeta central oscura */}
        <div className="bg-neutral-900 text-white rounded-2xl px-5 py-3 sm:px-6 sm:py-4 flex flex-col items-center justify-center min-w-[9rem] sm:min-w-[11rem] shadow-lg">
          <CategoryBadge
            category={game.competition.category}
            season={game.season}
            className="!bg-transparent !text-inherit !px-0"
          />
          <p className="font-extrabold text-3xl sm:text-4xl tabular-nums leading-none mt-1">
            {homeScore} | {awayScore}
          </p>
          <div className="mt-1">
            <GameResultEmoji game={game} />
          </div>
        </div>

        {/* Equipo visitante */}
        <div className="flex items-center justify-start gap-3 min-w-0">
          <img
            src={game.away.club.logo}
            alt={game.away.club.name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md shrink-0"
          />
          <p className="font-extrabold text-white text-lg sm:text-xl leading-tight text-left truncate">
            {game.away.club.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
