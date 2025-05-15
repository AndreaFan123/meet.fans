/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { SAMPLE_EVENTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Fade } from "@/components/ui/motion";
import { format } from "date-fns";
import {
  CalendarIcon,
  Clock,
  MapPin,
  Users,
  Heart,
  Share2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function EventPage() {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);

  // Find the event by ID
  const event = SAMPLE_EVENTS.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Event not found</h1>
        <p className="text-muted-foreground mb-8">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/events">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </Link>
      </div>
    );
  }

  const formattedDate = format(event.date, "EEEE, MMMM d, yyyy");
  const formattedTime = format(event.date, "h:mm a");
  const remainingSpots = event.capacity - event.attendeeCount;
  const isSoldOut = remainingSpots <= 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
      <Fade duration={500}>
        <Link
          href="/events"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {event.groups.map((group) => (
                  <Badge key={group} variant="secondary">
                    {group.toUpperCase()}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <div className="mr-4 flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{event.attendeeCount} attending</span>
                </div>
                <div className="mr-4 flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg">{event.description}</p>

                <h2 className="text-xl font-semibold mt-8 mb-4">
                  Event Details
                </h2>
                <p>
                  Join us for an unforgettable K-pop experience! This event is
                  perfect for fans of all ages who want to connect with fellow
                  enthusiasts and celebrate their favorite artists.
                </p>
                <p>
                  Whether you're a longtime fan or new to K-pop, you'll find a
                  welcoming community ready to share their passion for music,
                  dance, and Korean pop culture.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4">
                  What to Expect
                </h2>
                <ul>
                  <li>Meet fellow fans and make new friends</li>
                  <li>Share your favorite music and memories</li>
                  <li>Participate in fun activities and games</li>
                  <li>Learn more about K-pop culture and history</li>
                  <li>Potential merchandise exchanges and trades</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">
                  Important Notes
                </h2>
                <ul>
                  <li>Please arrive 15 minutes before the event starts</li>
                  <li>Bring your own refreshments if desired</li>
                  <li>
                    All ages welcome, but minors should be accompanied by an
                    adult
                  </li>
                  <li>Photography and social media sharing is encouraged!</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg border border-border p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {event.price === 0
                        ? "Free"
                        : `${event.price} ${event.currency}`}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsSaved(!isSaved)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isSaved ? "fill-primary text-primary" : ""
                        }`}
                      />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">{formattedDate}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{formattedTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">{event.location}</p>
                      <p className="text-sm text-muted-foreground">
                        Full address provided after registration
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="mb-6">
                  <p className="flex justify-between mb-2">
                    <span>Capacity</span>
                    <span>{event.capacity} people</span>
                  </p>
                  <p className="flex justify-between text-muted-foreground mb-4">
                    <span>Remaining spots</span>
                    <span>
                      {isSoldOut ? "Sold out" : `${remainingSpots} spots left`}
                    </span>
                  </p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: `${
                          (event.attendeeCount / event.capacity) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <Button className="w-full mb-3" disabled={isSoldOut}>
                  {isSoldOut ? "Sold Out" : "Register Now"}
                </Button>

                {isSoldOut && (
                  <p className="text-center text-sm text-muted-foreground">
                    This event is sold out. Check back later for similar events.
                  </p>
                )}
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-4">Organized by</h3>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="font-semibold">
                      {event.organizer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{event.organizer.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Event Organizer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
