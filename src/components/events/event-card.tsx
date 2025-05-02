import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Event } from "@/lib/types";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
  className?: string;
  featured?: boolean;
}

export function EventCard({
  event,
  className,
  featured = false,
}: EventCardProps) {
  const {
    id,
    title,
    description,
    image,
    date,
    location,
    capacity,
    attendeeCount,
    tags,
  } = event;
  const formattedDate = format(date, "MMMM d, yyyy 'at' h:mm a");
  const remainingSpots =
    capacity && attendeeCount ? capacity - attendeeCount : 0;
  const isSoldOut = remainingSpots <= 0;
  const isLowAvailability = capacity ? remainingSpots <= capacity * 0.1 : false;

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 h-full flex flex-col",
        featured ? "shadow-lg" : "hover:shadow-md",
        className
      )}
    >
      <div className="relative h-48 sm:h-64 w-full">
        <Image
          src={image || ""}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        {isSoldOut && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3 text-xs font-semibold"
          >
            Sold Out
          </Badge>
        )}
        {!isSoldOut && isLowAvailability && (
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 text-xs font-semibold"
          >
            Almost Full
          </Badge>
        )}
        {featured && (
          <Badge
            variant="default"
            className="absolute top-3 left-3 text-xs font-semibold"
          >
            Featured
          </Badge>
        )}
      </div>

      <CardHeader className="p-4 pb-2">
        <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <div className="text-sm text-muted-foreground space-y-2 mb-3">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>
              {isSoldOut
                ? "Sold out"
                : `${attendeeCount}/${capacity} attendees`}
            </span>
          </div>
        </div>
        <p className="text-sm line-clamp-2 mb-3">{description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Link href={`/events/${id}`}>
          <Button
            size="sm"
            variant={isSoldOut ? "secondary" : "default"}
            disabled={isSoldOut}
          >
            {isSoldOut ? "滿團" : "快加入！"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
