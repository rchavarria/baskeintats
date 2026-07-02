import {totalPoints} from "../../model/GameSchema";
import type {Game} from "../../model/GameSchema";
import {Link} from "react-router-dom";
import {DateDisplay} from "../ui/DateDisplay.tsx";
import {TimeDisplay} from "../ui/TimeDisplay.tsx";
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
      className="relative block rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900"
    >
      {/* Emoji del resultado en la esquina superior derecha */}
      <GameResultEmoji
        game={game}
        className="absolute top-2 right-4 text-3xl sm:text-4xl leading-none"
      />
      {/* Título: competición · fase · jornada */}
      <div className="px-4 pt-3 text-center text-white text-sm sm:text-base font-semibold">
        <span className="truncate">
          {game.competition.name} · {game.competition.phase} · {game.competition.round}
        </span>
      </div>

      {/* Marcador principal */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 pt-1 pb-2 sm:px-6 sm:pt-2 sm:pb-2">
        {/* Equipo local */}
        <div className="flex items-center justify-end gap-3 min-w-0">
          <p className="font-extrabold text-white text-lg sm:text-xl leading-tight text-right break-words">
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
          <div className="text-[11px] text-white/70 leading-tight text-center">
            <div className="inline-block text-left">
              <div><DateDisplay isoDate={game.date} /></div>
              <div><TimeDisplay isoDate={game.date} /></div>
            </div>
          </div>
          <p className="font-extrabold text-4xl sm:text-5xl tabular-nums leading-none mt-1">
            {homeScore} | {awayScore}
          </p>
        </div>

        {/* Equipo visitante */}
        <div className="flex items-center justify-start gap-3 min-w-0">
          <img
            src={game.away.club.logo}
            alt={game.away.club.name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md shrink-0"
          />
          <p className="font-extrabold text-white text-lg sm:text-xl leading-tight text-left break-words">
            {game.away.club.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
