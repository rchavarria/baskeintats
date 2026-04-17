interface ShortDateDisplayProps {
  isoDate: string;
}

const monthFormatter = new Intl.DateTimeFormat("es-ES", { month: "short" });

export function ShortDateDisplay({ isoDate }: ShortDateDisplayProps) {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = monthFormatter
    .format(date)
    .replace(/\./gu, "")
    .toLowerCase()
    .slice(0, 3);
  const year = date.getFullYear();

  return <span>{`${day}-${month}-${year}`}</span>;
}
