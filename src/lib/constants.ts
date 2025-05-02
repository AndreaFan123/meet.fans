import { KpopGroup, Event } from "./types";

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
    name: "入坑粉",
    price: 0,
    features: [
      "參加每週最多 3 場活動",
      "建立個人檔案",
      "選擇最多 2 個興趣主題",
    ],
    cta: "立即加入",
    popular: false,
  },
  {
    id: "monthly",
    name: "應援粉",
    price: 200,
    features: [
      "擁有入坑粉所有功能",
      "優先報名活動",
      "參加會員限定活動",
      "每月可舉辦最多 3 場公開活動",
      "可啟用主辦人檔案頁",
    ],
    cta: "升級為應援粉",
    popular: true,
  },
  {
    id: "yearly",
    name: "團長粉",
    price: 550,
    features: [
      "擁有應援粉所有功能",
      "不限次數舉辦公開活動",
      "募款功能",
      "活動數據追蹤與分析",
      "活動 QR 碼生成",
      "首頁推薦主辦活動",
      "專屬風格設定（品牌化）",
      "專屬顧問支援",
    ],
    cta: "立即成為團長粉",
    popular: false,
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
