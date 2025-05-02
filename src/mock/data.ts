// Mock data for the profile page

import { User, Event } from "@/lib/types";

// cspell:ignore itzy Twice DAY6

export const userData: User = {
  id: "usr-123456",
  name: "Jamie Kim",
  email: "jamie.kim@example.com",
  image: "/images/avatars/jamie-kim.jpg",
  bio: "Web developer and K-pop enthusiast. I love attending concerts and connecting with fellow fans.",
  socialLinks: {
    twitter: "https://twitter.com/jamiekim_dev",
    instagram: "https://instagram.com/jamie.codes",
    youtube: "https://youtube.com/@jamiethefan",
    tiktok: "https://tiktok.com/@jamiekim_dev",
  },
  favoriteGroups: ["itzy", "Twice", "DAY6"],
  role: "user",
  membership: "monthly",
  createdAt: new Date(2023, 8, 15), // September 15, 2023
  updatedAt: new Date(2024, 3, 22), // April 22, 2024
};

export const events: Event[] = [
  {
    id: "evt-001",
    title: "itzy 留真生快咖啡應援",
    date: new Date(2025, 5, 15),
    attendeeCount: 45,
    status: "Upcoming",
  },
  {
    id: "evt-002",
    title: "itzy Not Shy 歌詞教學",
    date: new Date(2025, 4, 22),
    attendeeCount: 120,
    status: "Completed",
  },
];
