import { KpopGroup } from "./types";

export const SITE_NAME = "meetFans";
export const SITE_DESCRIPTION =
  "Connect with K-pop fans and join exciting meetups";

export const NAV_LINKS = [
  { label: "home", href: "/" },
  { label: "events", href: "/events" },
  { label: "pricing", href: "/pricing" },
];

export const KPOP_GROUPS: KpopGroup[] = [
  {
    id: "itzy",
    name: "itzy",
    image:
      "https://images.pexels.com/photos/1647372/pexels-photo-1647372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "blackpink",
    name: "BLACKPINK",
    image:
      "https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "twice",
    name: "TWICE",
    image:
      "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "exo",
    name: "EXO",
    image:
      "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "redvelvet",
    name: "Red Velvet",
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "nct",
    name: "NCT",
    image:
      "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ive",
    name: "IVE",
    image:
      "https://images.pexels.com/photos/1701205/pexels-photo-1701205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "aespa",
    name: "aespa",
    image:
      "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "illit",
    name: "ILLIT",
    image:
      "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "infite",
    name: "Infinite",
    image:
      "https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "izone",
    name: "IZ*ONE",
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "day6",
    name: "DAY6",
    image:
      "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "straykids",
    name: "Stray Kids",
    image:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const MEMBERSHIP_PLANS = [
  {
    id: "free",
    name: "Fan",
    price: 0,
    features: [
      "Join unlimited events",
      "Create a profile",
      "Follow your favorite groups",
      "Save events to collections",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "pro",
    name: "SuperFan",
    price: 9.99,
    features: [
      "All Free features",
      "Early access to event tickets",
      "Exclusive member-only events",
      "Create up to 3 public events per month",
      "Priority support",
    ],
    cta: "Become a SuperFan",
    popular: true,
  },
  {
    id: "organizer",
    name: "Organizer",
    price: 29.99,
    features: [
      "All SuperFan features",
      "Create unlimited public events",
      "Advanced analytics",
      "Featured events on homepage",
      "Custom branding",
      "Dedicated support",
    ],
    cta: "Start Organizing",
    popular: false,
  },
];

export const SAMPLE_EVENTS = [
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
      role: "user" as const,
    },

    price: 15,
    currency: "USD",
    capacity: 50,
    attendeeCount: 42,
    groups: ["bts"],
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
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user" as const,
    },
    price: 25,

    currency: "USD",
    capacity: 30,
    attendeeCount: 28,
    groups: ["blackpink"],
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
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user" as const,
    },
    price: 5,

    currency: "USD",
    capacity: 200,
    attendeeCount: 157,
    groups: ["bts", "blackpink", "twice", "exo", "redvelvet"],
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
      role: "user" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    price: 10,
    currency: "USD",
    capacity: 40,
    attendeeCount: 35,
    groups: ["twice"],
    tags: ["fan meeting", "casual", "games"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
