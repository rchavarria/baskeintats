import { Link } from "react-router-dom";
import type { Scouting } from "../../model/ScoutingSchema.ts";
import { CategoryBadge } from "../ui/CategoryBadge.tsx";
import { DateDisplay } from "../ui/DateDisplay.tsx";

interface ScoutingCardProps {
  scouting: Scouting;
}

export function ScoutingCard({ scouting }: ScoutingCardProps) {
  return (
    <Link
      to={`/scouting/${scouting.id}`}
      className="block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border-2 border-rose-800"
    >
      <div className="bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl sm:text-3xl leading-none" aria-hidden="true">
            🔍
          </span>
          <p className="font-extrabold text-white text-base sm:text-lg leading-tight break-words">
            {scouting.title}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-neutral-900 text-white rounded-xl px-3 py-1 flex flex-col items-center shadow-lg">
            <CategoryBadge
              category={scouting.category}
              season={scouting.season}
              className="!bg-transparent !text-inherit !px-0 font-semibold"
            />
            <span className="text-[11px] text-white/70 leading-tight">
              <DateDisplay isoDate={scouting.date} />
            </span>
          </div>
          <span className="bg-white/15 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap">
            🎬 {scouting.clips.length} clip{scouting.clips.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {scouting.description.length > 0 && (
        <div className="p-4 text-xs text-gray-500">
          {scouting.description.slice(0, 2).map((line) => (
            <p key={line} className="line-clamp-2">
              {line}
            </p>
          ))}
          {scouting.description.length > 2 && <p className="text-gray-400">· · ·</p>}
        </div>
      )}
    </Link>
  );
}
