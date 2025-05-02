import { SAMPLE_EVENTS } from "@/lib/constants";
import { EventList } from "@/components/events/event-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedEvents() {
  // In a real app, you'd fetch this data from an API
  const featuredEvents = SAMPLE_EVENTS.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
          <p className="text-muted-foreground">
            Discover popular K-pop fan meetups and events
          </p>
        </div>
        <Link href="/events">
          <Button variant="ghost" className="mt-4 sm:mt-0 flex items-center">
            View all events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <EventList events={featuredEvents} featured={true} />
    </section>
  );
}