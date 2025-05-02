export type UserRole = "user" | "admin";

export type Membership = "free" | "monthly" | "annual";

export type Locale = "zh-TW" | "en-US";

export type EventStatus = "Upcoming" | "Completed" | "Canceled";

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
  favoriteGroups?: string[];
  role: UserRole;
  membership: Membership;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  image?: string;
  date: Date;
  location?: string;
  organizer?: User;
  price?: number;
  currency?: string;
  capacity?: number;
  attendeeCount?: number;
  groups?: string[];
  status: EventStatus;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KpopGroup {
  id: string;
  name: string;
  image: string;
}

export interface EventCollection {
  id: string;
  name: string;
  userId: string;
  events: Event[];
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}
