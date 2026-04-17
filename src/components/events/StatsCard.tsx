import {Link} from "react-router-dom";
import type {Stats} from "../../model/StatsSchema.ts";
import type {AdvancedGame, Game} from "../../model/GameSchema.ts";
import {DateDisplay} from "../ui/DateDisplay.tsx";
import {ShortDateDisplay} from "../ui/ShortDateDisplay.tsx";

interface StatsCardProps {
  stats: Stats;
}

function getOpponent(game: Game | AdvancedGame): string {
  if (game.home.opponent) return game.home.club.name;
  if (game.away.opponent) return game.away.club.name;
  return "?";
}

function getPoints(game: Game | AdvancedGame): number {
  const s = game.playerStats;
  if ("made" in s.fieldGoals) {
    // AdvancedPlayerStats
    const adv = s as AdvancedGame["playerStats"];
    return 3 * adv.threePointers.made + 2 * adv.fieldGoals.made + adv.freeThrows.made;
  }
  // PlayerStats
  const ps = s as Game["playerStats"];
  return 3 * ps.threePointers + 2 * ps.fieldGoals + ps.freeThrows.made;
}

function getFt(game: Game | AdvancedGame): string {
  return `${game.playerStats.freeThrows.made}/${game.playerStats.freeThrows.attempted}`;
}

function getTwoPointers(game: Game | AdvancedGame): string {
  const s = game.playerStats;
  if ("made" in s.fieldGoals) {
    const adv = s as AdvancedGame["playerStats"];
    return `${adv.fieldGoals.made}/${adv.fieldGoals.attempted}`;
  }
  return `${(s as Game["playerStats"]).fieldGoals}`;
}

function getThreePointers(game: Game | AdvancedGame): string {
  const s = game.playerStats;
  if ("made" in s.threePointers) {
    const adv = s as AdvancedGame["playerStats"];
    return `${adv.threePointers.made}/${adv.threePointers.attempted}`;
  }
  return `${(s as Game["playerStats"]).threePointers}`;
}

function formatTime(minutes: number): string {
  return `${minutes}'`;
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

  const th = "px-2 py-1 text-left text-xs font-semibold text-gray-500 uppercase";
  const td = "px-2 py-1 text-xs text-gray-700";
  const summaryTd = "px-2 py-1 text-xs font-semibold text-gray-800";

  return (
    <Link
      to={`/stats/${stats.id}`}
      className="block bg-white rounded-xl shadow hover:shadow-md transition p-4 border border-gray-100"
    >
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <DateDisplay isoDate={stats.date} />
        <span>{stats.category}</span>
      </div>

      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="text-2xl">📈</span>
        <p className="font-semibold text-gray-800 text-center">{stats.title}</p>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="mx-auto w-[80%] text-left border-collapse">
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
                <td className={td}><ShortDateDisplay isoDate={game.date} /></td>
                <td className={td}>{getOpponent(game)}</td>
                <td className={td}>{formatTime(game.playerStats.time)}</td>
                <td className={td}>{getPoints(game)}</td>
                <td className={td}>{getThreePointers(game)}</td>
                <td className={td}>{getTwoPointers(game)}</td>
                <td className={td}>{getFt(game)}</td>
                <td className={td}>{game.playerStats.plusMinus > 0 ? "+" : ""}{game.playerStats.plusMinus}</td>
                <td className={td}>{game.playerStats.efficiency}</td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td className={summaryTd} colSpan={2}>Total</td>
              <td className={summaryTd}>{formatTime(totalTime)}</td>
              <td className={summaryTd}>{totalPoints}</td>
              <td className={summaryTd} />
              <td className={summaryTd} />
              <td className={summaryTd}>{totalFtm}/{totalFta}</td>
              <td className={summaryTd}>{totalPlusMinus > 0 ? "+" : ""}{totalPlusMinus}</td>
              <td className={summaryTd}>{totalEfficiency}</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className={summaryTd} colSpan={2}>Media</td>
              <td className={summaryTd}>{formatTime(Math.round(totalTime / n))}</td>
              <td className={summaryTd}>{(totalPoints / n).toFixed(1)}</td>
              <td className={summaryTd} />
              <td className={summaryTd} />
              <td className={summaryTd}>{totalFta > 0 ? `${Math.round((totalFtm / totalFta) * 100)}%` : "-"}</td>
              <td className={summaryTd}>{(totalPlusMinus / n).toFixed(1)}</td>
              <td className={summaryTd}>{(totalEfficiency / n).toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Link>
  );
}
