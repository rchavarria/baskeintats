interface DateDisplayProps {
  isoDate: string;
}

export function DateTimeDisplay({ isoDate }: DateDisplayProps) {
  const date = new Date(isoDate);

  const formatted = date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Capitalize first letter
  const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  return <span>{capitalized}</span>;
}
