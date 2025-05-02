import { SAMPLE_EVENTS_ZH } from "@/lib/constants";
import { EventList } from "@/components/events/event-list";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Fade } from "@/components/ui/motion";
import { Search } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto mt-32 px-4 sm:px-6 lg:px-8 py-12">
      <Fade duration={500}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover K-pop Events</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find and join exciting K-pop fan meetups, workshops, and gatherings
            near you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder="Search events..." className="pl-10 h-12" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10">
              Search
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">All Events</h2>
          <EventList events={SAMPLE_EVENTS_ZH} columns={3} />
        </div>
      </Fade>
    </div>
  );
}
