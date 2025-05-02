"use client";

import { useState } from "react";
import { KPOP_GROUPS } from "@/lib/constants";
import { KpopGroup } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Fade } from "@/components/ui/motion";
import { useRouter } from "@/i18n/navigation";

interface TopicSelectionProps {
  onComplete: (selectedTopics: string[]) => void;
}

export function TopicSelection({ onComplete }: TopicSelectionProps) {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const toggleGroup = (groupId: string) => {
    if (selectedGroups.includes(groupId)) {
      setSelectedGroups(selectedGroups.filter((id) => id !== groupId));
    } else {
      setSelectedGroups([...selectedGroups, groupId]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onComplete(selectedGroups);
      setIsSubmitting(false);
    }, 1000);

    router.push("/");
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl">Choose your favorite groups</CardTitle>
        <CardDescription>
          Select at least one K-pop group to personalize your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {KPOP_GROUPS.map((group: KpopGroup, index) => (
            <Fade key={group.id} delay={index * 50} duration={400}>
              <div
                className={cn(
                  "relative group cursor-pointer rounded-lg overflow-hidden aspect-square border-2",
                  selectedGroups.includes(group.id)
                    ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "border-transparent hover:border-primary/50"
                )}
                onClick={() => toggleGroup(group.id)}
              >
                <div className="absolute inset-0 z-10">
                  <Image
                    src={group.image}
                    alt={group.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="absolute inset-0 z-20 flex flex-col justify-between p-2">
                  <div className="self-end">
                    {selectedGroups.includes(group.id) && (
                      <div className="bg-primary text-primary-foreground rounded-full p-1">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">
                      {group.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={selectedGroups.length === 0 || isSubmitting}
        >
          {isSubmitting ? "Setting up your profile..." : "Continue"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          You can always update your preferences later
        </p>
      </CardFooter>
    </Card>
  );
}
