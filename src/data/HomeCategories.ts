import { HomeCategory } from "../types/HomeCategoryTypes";

const defaultImage =
  "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg";

export const homeCategories: HomeCategory[] = [
  // 1. ELECTRIC_CATEGORIES (Digital Devices Level 2)
  {
    categoryId: "mobile-phones",
    section: "ELECTRIC_CATEGORIES",
    name: "Smartphones",
    image: defaultImage,
  },
  {
    categoryId: "laptops",
    section: "ELECTRIC_CATEGORIES",
    name: "Laptops",
    image: defaultImage,
  },
  {
    categoryId: "smart-watches",
    section: "ELECTRIC_CATEGORIES",
    name: "Smart Watches",
    image: defaultImage,
  },

  // 2. GRID (Showcase highlights)
  {
    categoryId: "upperDeck",
    section: "GRID",
    name: "UpperDeck",
    image: defaultImage,
  },
  {
    categoryId: "dresses",
    section: "GRID",
    name: "Dresses",
    image: defaultImage,
  },
  {
    categoryId: "living-room",
    section: "GRID",
    name: "Living Room",
    image: defaultImage,
  },

  // 3. SHOP_BY_CATEGORIES
  {
    categoryId: "footwear",
    section: "SHOP_BY_CATEGORIES",
    name: "Footwear",
    image: defaultImage,
  },
  {
    categoryId: "handbags",
    section: "SHOP_BY_CATEGORIES",
    name: "Handbags",
    image: defaultImage,
  },
  {
    categoryId: "home-office",
    section: "SHOP_BY_CATEGORIES",
    name: "Home Office",
    image: defaultImage,
  },

  // 4. DEAL_CATEGORIES
  {
    categoryId: "selfCareEssentials",
    section: "DEAL_CATEGORIES",
    name: "Self-Care Essentials",
    image: defaultImage,
  },
  {
    categoryId: "cosmetics",
    section: "DEAL_CATEGORIES",
    name: "Cosmetics",
    image: defaultImage,
  },
  {
    categoryId: "shoes",
    section: "DEAL_CATEGORIES",
    name: "Shoes",
    image: defaultImage,
  },
];
