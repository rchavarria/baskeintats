interface TimeDisplayProps {
  isoDate: string;
}

export function TimeDisplay({ isoDate }: TimeDisplayProps) {
  const time = new Date(isoDate).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return <span>⏰ {time}</span>;
}

