interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = "No hay datos disponibles" }: EmptyStateProps) {
  return (
    <div className="text-center py-16 text-gray-400">
      <p className="text-4xl mb-3">🏀</p>
      <p className="text-lg">{message}</p>
    </div>
  );
}
