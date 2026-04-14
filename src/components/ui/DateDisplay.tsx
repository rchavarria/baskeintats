interface DateDisplayProps {
  isoDate: string;
}

export function DateDisplay({ isoDate }: DateDisplayProps) {
  const date = new Date(isoDate);
  const formatted = date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Capitalize first letter
  const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  return <span>📆 {capitalized}</span>;
}
