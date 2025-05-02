"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music, Search } from "lucide-react";
import { KPOP_GROUPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgrounds = KPOP_GROUPS.slice(0, 5).map((group) => group.image);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={bg}
            alt="K-pop fans"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Music className="h-10 w-10 text-primary mr-2" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              MelodyMeet
            </h1>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6">
            Connect with <span className="text-primary font-bold">K-pop</span> fans <br className="hidden sm:block" />
            and join exciting meetups
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Discover events hosted by passionate fans, make new friends, and celebrate your favorite K-pop artists together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/events">
              <Button size="lg" className="w-full sm:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Explore Events
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}