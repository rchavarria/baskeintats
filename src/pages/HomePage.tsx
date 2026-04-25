import {useFilteredEvents} from "../hooks/useFilteredEvents.ts";
import {GameCard} from "../components/events/GameCard";
import {EmptyState} from "../components/ui/EmptyState";
import {AnnouncementCard} from "../components/events/AnnouncementCard.tsx";
import {DefaultCard} from "../components/events/DefaultCard.tsx";
import {FriendlyGameCard} from "../components/events/FriendlyGameCard.tsx";
import {StatsCard} from "../components/events/StatsCard.tsx";
import {SeasonFilter} from "../components/filters/SeasonFilter.tsx";

export function HomePage() {
  const events = useFilteredEvents();

  return (
    <div className="flex gap-6 items-start">
      <aside className="w-1/5 shrink-0">
        <SeasonFilter />
      </aside>
      <main className="w-4/5 min-w-0">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Últimos partidos</h1>
        {events.length === 0 ? (
          <EmptyState message="No hay partidos recientes" />
        ) : (
          <div className="flex flex-col gap-4">
            {
              events.map(e => {
                switch (e.type) {
                case 'announcement':
                  return <AnnouncementCard key={e.id} announcement={e} />;
                case 'stats':
                  return <StatsCard key={e.id} stats={e} />;
                case 'friendly-game':
                  return <FriendlyGameCard key={e.id} game={e} />;
                case 'advanced-game':
                case 'game':
                  return <GameCard key={e.id} game={e} />;
                default:
                  return <DefaultCard key={e.id} game={e} />;
                }
              })
            }
          </div>
        )}
      </main>
    </div>
  );
}
