import {Link} from "react-router-dom";
import type {Scouting} from "../../model/ScoutingSchema.ts";
import {DateDisplay} from "../ui/DateDisplay.tsx";
import {CategoryBadge} from "../ui/CategoryBadge.tsx";

interface ScoutingCardProps {
  scouting: Scouting;
}

export function ScoutingCard({scouting}: ScoutingCardProps) {
  return (
    <Link
      to={`/scouting/${scouting.id}`}
      className="block bg-white rounded-xl shadow hover:shadow-md transition p-4 border border-gray-100"
    >
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <DateDisplay isoDate={scouting.date} />
        <div className="flex items-center gap-2">
          <CategoryBadge category={scouting.category} season={scouting.season} />
          <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-0.5 rounded">
            🎬 {scouting.clips.length} clip{scouting.clips.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">🔍</span>
        <p className="font-semibold text-gray-800">{scouting.title}</p>
      </div>
      <div className="text-xs text-gray-400">
        {scouting.description.slice(0, 2).map((line, i) => (
          <p key={i} className="line-clamp-2">{line}</p>
        ))}
        {scouting.description.length > 2 && (
          <p className="text-gray-400 text-xs">· · ·</p>
        )}
      </div>
    </Link>
  );
}

