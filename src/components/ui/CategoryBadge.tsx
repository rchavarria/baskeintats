const PLAYER_BIRTH_YEAR = 2011;

export type Category = "U13M" | "U14M" | "U15M" | "U16M" | "U17M" | "U18M";

interface CategoryBadgeProps {
  category: Category;
  season: string;
  className?: string;
}

function seasonEndYear(season: string): number {
  const [start, end] = season.split("-");
  const startYear = parseInt(start, 10);
  if (end && end.length === 4) {
    return parseInt(end, 10);
  }
  // "2025-26" -> use century from start year
  const century = Math.floor(startYear / 100) * 100;
  return century + parseInt(end, 10);
}

function categoryAge(category: Category): number {
  return parseInt(category.slice(1, -1), 10);
}

export function CategoryBadge({ category, season, className }: CategoryBadgeProps) {
  const playerAge = seasonEndYear(season) - PLAYER_BIRTH_YEAR;
  const isPlayingUp = categoryAge(category) - playerAge >= 1;

  return (
    <span
      className={`inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded ${className ?? ""}`}
    >
      {category}
      {isPlayingUp && <span aria-label="plays up a category">⬆️</span>}
    </span>
  );
}
