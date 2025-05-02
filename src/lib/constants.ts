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
