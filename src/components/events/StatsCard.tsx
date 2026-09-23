import { hasAdvancedPlayerStats } from "../../lib/hasAdvancedPlayerStats.ts";
import type { AdvancedGame, Game } from "../../model/GameSchema.ts";
import type { Stats } from "../../model/StatsSchema.ts";
import { ThreePointersAverage } from "../stats/ThreePointersAverage.tsx";
import { ThreePointersTotal } from "../stats/ThreePointersTotal.tsx";
import { TwoPointersAverage } from "../stats/TwoPointersAverage.tsx";
import { TwoPointersTotal } from "../stats/TwoPointersTotal.tsx";
import { CategoryBadge } from "../ui/CategoryBadge.tsx";
import { DateDisplay } from "../ui/DateDisplay.tsx";
import { PlayedTimeDisplay } from "../ui/PlayedTimeDisplay.tsx";
import { ReferenceIcons } from "../ui/ReferenceIcons.tsx";
import { ShortDateDisplay } from "../ui/ShortDateDisplay.tsx";

interface StatsCardProps {
  stats: Stats;
}

function getOpponent(game: Game | AdvancedGame): string {
  if (game.home.opponent) return game.home.club.name;
  if (game.away.opponent) return game.away.club.name;
  return "?";
}

function getPoints(game: Game | AdvancedGame): number {
  if (hasAdvancedPlayerStats(game)) {
    const adv = game.playerStats;
    return 3 * adv.threePointers.made + 2 * adv.fieldGoals.made + adv.freeThrows.made;
  }
  const ps = game.playerStats;
  return 3 * ps.threePointers + 2 * ps.fieldGoals + ps.freeThrows.made;
}

function getFt(game: Game | AdvancedGame): string {
  return `${game.playerStats.freeThrows.made}/${game.playerStats.freeThrows.attempted}`;
}

function getTwoPointers(game: Game | AdvancedGame): string {
  if (hasAdvancedPlayerStats(game)) {
    const adv = game.playerStats;
    return `${adv.fieldGoals.made}/${adv.fieldGoals.attempted}`;
  }
  return `${game.playerStats.fieldGoals}`;
}

function getThreePointers(game: Game | AdvancedGame): string {
  if (hasAdvancedPlayerStats(game)) {
    const adv = game.playerStats;
    return `${adv.threePointers.made}/${adv.threePointers.attempted}`;
  }
  return `${game.playerStats.threePointers}`;
}

export function StatsCard({ stats }: StatsCardProps) {
  const games = stats.games;

  // Compute totals
  const totalTime = games.reduce((s, g) => s + g.playerStats.time, 0);
  const totalPoints = games.reduce((s, g) => s + getPoints(g), 0);
  const totalFtm = games.reduce((s, g) => s + g.playerStats.freeThrows.made, 0);
  const totalFta = games.reduce((s, g) => s + g.playerStats.freeThrows.attempted, 0);
  const totalPlusMinus = games.reduce((s, g) => s + g.playerStats.plusMinus, 0);
  const totalEfficiency = games.reduce((s, g) => s + g.playerStats.efficiency, 0);
  const n = games.length;

  const hasAdvanced = games.some((g) => hasAdvancedPlayerStats(g));

  const th = "px-2 py-1 text-left text-xs font-semibold text-gray-500 uppercase";
  const td = "px-2 py-1 text-xs text-gray-700";
  const summaryTd = "px-2 py-1 text-xs font-semibold text-gray-800";

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden border-2 border-rose-800">
      {/* Header: same red gradient as the game cards */}
      <div className="bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl sm:text-3xl leading-none" aria-hidden="true">
            📈
          </span>
          <p className="font-extrabold text-white text-base sm:text-lg leading-tight break-words">
            {stats.title}
          </p>
        </div>

        {/* Dark pill with category and date */}
        <div className="bg-neutral-900 text-white rounded-xl px-3 py-1 flex flex-col items-center shrink-0 shadow-lg">
          <CategoryBadge
            category={stats.category}
            season={stats.season}
            className="!bg-transparent !text-inherit !px-0 font-semibold"
          />
          <span className="text-[11px] text-white/70 leading-tight">
            <DateDisplay isoDate={stats.date} />
          </span>
        </div>
      </div>

      <div className="p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className={th}>Fecha</th>
              <th className={th}>Rival</th>
              <th className={th}>Min</th>
              <th className={th}>PTS</th>
              <th className={th}>3PT</th>
              <th className={th}>2PT</th>
              <th className={th}>FT</th>
              <th className={th}>+/-</th>
              <th className={th}>EFF</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id} className="border-b border-gray-100">
                <td className={td}>
                  <ShortDateDisplay isoDate={game.date} />
                </td>
                <td className={td}>{getOpponent(game)}</td>
                <td className={td}>
                  <PlayedTimeDisplay time={game.playerStats.time} />
                </td>
                <td className={td}>{getPoints(game)}</td>
                <td className={td}>{getThreePointers(game)}</td>
                <td className={td}>{getTwoPointers(game)}</td>
                <td className={td}>{getFt(game)}</td>
                <td className={td}>
                  {game.playerStats.plusMinus > 0 ? "+" : ""}
                  {game.playerStats.plusMinus}
                </td>
                <td className={td}>{game.playerStats.efficiency}</td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td className={summaryTd} colSpan={2}>
                Total
              </td>
              <td className={summaryTd}>
                <PlayedTimeDisplay time={totalTime} />
              </td>
              <td className={summaryTd}>{totalPoints}</td>
              <td className={summaryTd}>
                <ThreePointersTotal hasAdvanced={hasAdvanced} games={games} />
              </td>
              <td className={summaryTd}>
                <TwoPointersTotal hasAdvanced={hasAdvanced} games={games} />
              </td>
              <td className={summaryTd}>
                {totalFtm}/{totalFta}
              </td>
              <td className={summaryTd}>
                {totalPlusMinus > 0 ? "+" : ""}
                {totalPlusMinus}
              </td>
              <td className={summaryTd}>{totalEfficiency}</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className={summaryTd} colSpan={2}>
                Media
              </td>
              <td className={summaryTd}>
                <PlayedTimeDisplay time={Math.round(totalTime / n)} />
              </td>
              <td className={summaryTd}>{(totalPoints / n).toFixed(1)}</td>
              <td className={summaryTd}>
                <ThreePointersAverage hasAdvanced={hasAdvanced} games={games} />
              </td>
              <td className={summaryTd}>
                <TwoPointersAverage hasAdvanced={hasAdvanced} games={games} />
              </td>
              <td className={summaryTd}>
                {totalFta > 0 ? `${Math.round((totalFtm / totalFta) * 100)}%` : "-"}
              </td>
              <td className={summaryTd}>{(totalPlusMinus / n).toFixed(1)}</td>
              <td className={summaryTd}>{(totalEfficiency / n).toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {(stats.description.length > 0 || stats.references.length > 0) && (
        <div className="bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 px-4 py-3">
          {stats.description.length > 0 && (
            <div className="px-2 space-y-1">
              {stats.description.map((line) => (
                <p key={line} className="text-xs text-white/90">
                  {line}
                </p>
              ))}
            </div>
          )}

          <ReferenceIcons references={stats.references} />
        </div>
      )}
    </div>
  );
}
