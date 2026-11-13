import type { Team } from "../../model/TeamSchema.ts";

const REGULAR_QUARTERS = 4;

interface TeamScores {
  club: Team;
  scores: number[];
}

interface QuarterScoresTableProps {
  home: TeamScores;
  away: TeamScores;
}

function periodLabel(index: number): string {
  return index < REGULAR_QUARTERS ? `Q${index + 1}` : `OT${index - REGULAR_QUARTERS + 1}`;
}

export function QuarterScoresTable({ home, away }: QuarterScoresTableProps) {
  const periods = Math.max(home.scores.length, away.scores.length);
  if (periods === 0) return null;

  const labels = Array.from({ length: periods }, (_, i) => periodLabel(i));
  const th = "px-3 py-1 text-center text-xs font-semibold text-white uppercase";
  const td = "px-3 py-1 text-center text-sm text-gray-800";

  return (
    <div className="mt-4 flex justify-center">
      <div className="border border-gray-200 overflow-x-auto">
        <table className="border-collapse">
          <thead className="bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900">
            <tr>
              <th className={`${th} min-w-36`}>Equipo</th>
              {labels.map((label) => (
                <th key={label} className={th}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(
              [
                ["home", home],
                ["away", away],
              ] as const
            ).map(([side, team]) => (
              <tr key={side} className={side === "home" ? "border-b border-gray-200" : ""}>
                <td className="px-3 py-1">
                  <img
                    src={team.club.logo}
                    alt={team.club.name}
                    className="w-8 h-8 object-contain mx-auto"
                  />
                </td>
                {labels.map((label, i) => {
                  const own = team.scores[i] ?? 0;
                  const rival = (side === "home" ? away : home).scores[i] ?? 0;
                  return (
                    <td key={label} className={`${td} ${own > rival ? "font-bold" : ""}`}>
                      {team.scores[i] ?? "-"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
