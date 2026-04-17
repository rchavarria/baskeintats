import { Link } from "react-router-dom";
import type { Stats } from "../../model/StatsSchema.ts";
import { DateDisplay } from "../ui/DateDisplay.tsx";

interface StatsCardProps {
  stats: Stats;
}

export function StatsCard({ stats }: StatsCardProps) {
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
        <span className="text-2xl">📊</span>
        <p className="font-semibold text-gray-800 text-center">{stats.title}</p>
      </div>

      <div className="mt-2 text-center text-xs text-gray-400">
        <p>{stats.games.length} games</p>
      </div>
    </Link>
  );
}

