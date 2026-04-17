interface PlayedTimeDisplayProps {
  time: number;
}

export function PlayedTimeDisplay({ time }: PlayedTimeDisplayProps) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return <span>{`${minutes}:${seconds}`}</span>;
}

