export type UserRole = "user" | "admin";

export type Locale = "zh_TW" | "en_US";
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
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  location: string;
  organizer: User;
  price: number;
  currency: string;
  capacity: number;
  attendeeCount: number;
  groups: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
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
