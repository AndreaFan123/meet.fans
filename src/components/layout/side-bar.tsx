"use client";

import { cn } from "@/lib/utils";
import { HomeIcon, UserIcon, CreditCardIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Account",
    href: "/profile",
    icon: UserIcon,
  },
  {
    name: "Subscription",
    href: "/subscription",
    icon: CreditCardIcon,
  },
  {
    name: "Hosted Events",
    href: "/events",
    icon: CalendarIcon,
  },
];

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12 border-r min-h-screen", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
            Menu
          </h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "transparent"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
