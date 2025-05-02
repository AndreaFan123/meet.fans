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

export const SAMPLE_EVENTS_ZH: Event[] = [
  {
    id: "1",
    title: "BTS 專輯聆聽派對",
    description:
      "和其他 ARMY 粉絲一起收聽最新的 BTS 專輯，並分享你最喜歡的歌曲！",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-07-15T18:00:00"),
    location: "線上",
    organizer: {
      id: "1",
      name: "Sarah Kim",
      email: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      membership: "monthly",
      role: "user" as const,
    },
    price: 0,
    currency: "TWD",
    capacity: 50,
    attendeeCount: 50,
    groups: ["bts"],
    status: "Upcoming",
    tags: ["聆聽派對", "專輯發布", "輕鬆聚會"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "BLACKPINK 舞蹈工作坊",
    description:
      "和專業的 K-pop 舞蹈老師一起學習 BLACKPINK 熱門歌曲的舞蹈。不管你是新手還是老手，都歡迎參加！",
    image:
      "https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-07-22T14:00:00"),
    location: "台北市XX舞蹈教室",
    organizer: {
      id: "2",
      name: "Mike Lee",
      email: "",
      membership: "annual",
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user" as const,
    },
    price: 25,
    currency: "TWD",
    capacity: 30,
    attendeeCount: 28,
    groups: ["blackpink"],
    status: "Upcoming",
    tags: ["舞蹈", "工作坊", "新手友善"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "K-pop 夜市",
    description:
      "充滿 K-pop 元素的夜市，有周邊商品、韓式街頭小吃、隨機舞蹈等活動！歡迎所有粉絲一起來交流和同樂。",
    image:
      "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-08-05T17:00:00"),
    location: "言文字咖啡廳二樓",
    organizer: {
      id: "3",
      name: "Jessica Park",
      email: "",
      membership: "monthly",
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user" as const,
    },
    price: 5,
    currency: "TWD",
    capacity: 200,
    attendeeCount: 157,
    groups: ["bts", "blackpink", "twice", "exo", "redvelvet"],
    status: "Upcoming",
    tags: ["夜市", "美食", "周邊", "隨機舞蹈"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "TWICE 粉絲聚會",
    description:
      "聚集 ONCE 粉絲一起聊聊 TWICE！活動中會播放 MV、玩遊戲，並一起享受粉絲的快樂時光。",
    image:
      "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-07-29T19:00:00"),
    location: "板橋XX咖啡廳",
    organizer: {
      id: "4",
      name: "David Chen",
      email: "",
      membership: "annual",
      role: "user" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    price: 10,
    currency: "TWD",
    capacity: 40,
    attendeeCount: 35,
    groups: ["twice"],
    status: "Upcoming",
    tags: ["粉絲聚會", "輕鬆聚會", "遊戲互動"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const SAMPLE_EVENTS: Event[] = [
  {
    id: "1",
    title: "BTS Album Listening Party",
    description:
      "Join fellow ARMY members to listen to the latest BTS album and discuss your favorite tracks! We'll have snacks, drinks, and plenty of BTS merchandise to share and trade.",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-07-15T18:00:00"),
    location: "Seoul Cafe, New York",
    organizer: {
      id: "1",
      name: "Sarah Kim",
      email: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      membership: "monthly",
      role: "user" as const,
    },

    price: 15,
    currency: "TWD",
    capacity: 50,
    attendeeCount: 42,
    groups: ["bts"],
    status: "Upcoming",
    tags: ["listening party", "album release", "casual"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "BLACKPINK Dance Workshop",
    description:
      "Learn the choreography to BLACKPINK's hit songs with professional K-pop dance instructors. All skill levels welcome!",
    image:
      "https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-07-22T14:00:00"),
    location: "Dance Studio 55, Los Angeles",
    organizer: {
      id: "2",
      name: "Mike Lee",
      email: "",
      membership: "annual",
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user" as const,
    },
    price: 25,
    currency: "TWD",
    capacity: 30,
    attendeeCount: 28,
    groups: ["blackpink"],
    status: "Upcoming",
    tags: ["dance", "workshop", "beginner-friendly"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "K-pop Night Market",
    description:
      "A night market featuring K-pop merchandise, Korean street food, random dance plays, and more! Come meet other fans and celebrate K-pop culture.",
    image:
      "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-08-05T17:00:00"),
    location: "Union Square, San Francisco",
    organizer: {
      id: "3",
      name: "Jessica Park",
      email: "",
      membership: "monthly",
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user" as const,
    },
    price: 5,

    currency: "TWD",
    capacity: 200,
    attendeeCount: 157,
    groups: ["bts", "blackpink", "twice", "exo", "redvelvet"],
    status: "Upcoming",
    tags: ["market", "food", "merchandise", "random dance"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "TWICE Fan Meeting",
    description:
      "Meet other ONCE members and discuss all things TWICE! We'll watch music videos, play games, and have a fun time celebrating our favorite group.",
    image:
      "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date("2025-07-29T19:00:00"),
    location: "K-Star Cafe, Chicago",
    organizer: {
      id: "4",
      name: "David Chen",
      email: "",
      membership: "annual",
      role: "user" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    price: 10,
    currency: "TWD",
    capacity: 40,
    attendeeCount: 35,
    groups: ["twice"],
    status: "Upcoming",
    tags: ["fan meeting", "casual", "games"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sophia Kim",
    role: "BTS ARMY Member",
    content:
      "I met my closest friends through MelodyMeet! The BTS listening parties are so much fun, and the community is incredibly welcoming.",
    avatar:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "James Lee",
    role: "Event Organizer",
    content:
      "As someone who organizes K-pop dance workshops, MelodyMeet has been an amazing platform to find passionate participants and grow our community.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Emma Chen",
    role: "TWICE Fan",
    content:
      "I was new to K-pop when I joined, but everyone was so friendly and inclusive. Now I help organize TWICE fan meetings in my city!",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
