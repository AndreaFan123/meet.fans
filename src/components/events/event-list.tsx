import { EventCard } from "./event-card";
import { Event } from "@/lib/types";

interface EventListProps {
  events: Event[];
  featured?: boolean;
  columns?: 1 | 2 | 3 | 4;
}

export function EventList({ events, featured = false, columns = 3 }: EventListProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} featured={featured} />
      ))}
    </div>
  );
}