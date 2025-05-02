/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { SAMPLE_EVENTS_ZH } from "@/lib/constants";
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
  const event = SAMPLE_EVENTS_ZH.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Event not found</h1>
        <p className="text-muted-foreground mb-8">
          這個活動似乎已經不存在或已經被刪除 :(
        </p>
        <Link href="/events">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回活動列表
          </Button>
        </Link>
      </div>
    );
  }

  const formattedDate = format(event.date, "EEEE, MMMM d, yyyy");
  const formattedTime = format(event.date, "h:mm a");
  const remainingSpots = event.capacity
    ? event.capacity - (event.attendeeCount || 0)
    : 0;
  const isSoldOut = remainingSpots <= 0;

  return (
    <div className="max-w-7xl mt-32 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Fade duration={500}>
        <Link
          href="/events"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回活動列表
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={event.image ?? ""}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {event.groups?.map((group) => (
                  <Badge key={group} variant="secondary">
                    {group.toUpperCase()}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <div className="mr-4 flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{event.attendeeCount} 參加</span>
                </div>
                <div className="mr-4 flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg">{event.description}</p>

                <h2 className="text-xl font-semibold mt-8 mb-4">活動詳情</h2>
                <p>
                  這是一個線上聚會，我們將播放 BTS
                  所有專輯，你可以開螢幕一起聊天，或者你只是想安靜地聽歌也可以！這是一個
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4">注意事項</h2>
                <ul>
                  <li>活動前 15 分鐘我們將會寄送會議室連結。</li>
                  <li>請確保你有安裝 Zoom 或 Google Meet 的應用程式。</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {event.tags?.map((tag) => (
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
                    <h3 className="text-lg font-bold">
                      {event.price === 0
                        ? "Free |  請自行準備飲料或零食"
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
                        會議連結將會於活動前寄送
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="mb-6">
                  <p className="flex justify-between mb-2">
                    <span>可參加人數</span>
                    <span>{event.capacity} 名粉絲</span>
                  </p>
                  <p className="flex justify-between text-muted-foreground mb-4">
                    <span>剩餘位置</span>
                    <span>
                      {isSoldOut ? ":( 已滿額" : `${remainingSpots} 名粉絲`}
                    </span>
                  </p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: `${
                          ((event?.attendeeCount ?? 0) /
                            (event?.capacity ?? 1)) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <Button className="w-full mb-3" disabled={isSoldOut}>
                  {isSoldOut ? ":( 太遲了！" : "還有位置，快來！"}
                </Button>

                {isSoldOut && (
                  <p className="text-center text-sm text-muted-foreground">
                    This event is sold out. Check back later for similar events.
                  </p>
                )}
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-4">團主</h3>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="font-semibold">
                      {event.organizer?.name.charAt(0)}
                    </span>
                  </div>
                  {/* TODO: Possibly change to link so that users can view its profile */}
                  <div>
                    <p className="font-medium">{event.organizer?.name}</p>
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
