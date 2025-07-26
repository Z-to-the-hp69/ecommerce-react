export const mainCategory = [
  {
    name: "Gents",
    categoryId: "gents",
    level: 1,
    levelTwoCategory: [
      {
        name: "Upper Deck",
        categoryId: "upperDeck",
        parentCategoryId: "gents",
        level: 2,
      },
      {
        name: "The Lower Half",
        categoryId: "theLowerHalf",
        parentCategoryId: "gents",
        level: 2,
      },
    ],
  },
  {
    name: "Female Fashion",
    categoryId: "femalefashion",
    level: 1,
    levelTwoCategory: [
      {
        name: "Dresses",
        categoryId: "dresses",
        parentCategoryId: "femalefashion",
        level: 2,
      },
      {
        name: "Skirts",
        categoryId: "skirts",
        parentCategoryId: "femalefashion",
        level: 2,
      },
    ],
  },
  {
    name: "Interiors",
    categoryId: "interiors",
    level: 1,
    levelTwoCategory: [
      {
        name: "Living Room",
        categoryId: "living-room",
        parentCategoryId: "interiors",
        level: 2,
      },
      {
        name: "Bedroom",
        categoryId: "bedroom",
        parentCategoryId: "interiors",
        level: 2,
      },
    ],
  },
  {
    name: "Digital Devices",
    categoryId: "digitaldevices",
    level: 1,
    levelTwoCategory: [
      {
        name: "Smartphones",
        categoryId: "smartphones",
        parentCategoryId: "digitaldevices",
        level: 2,
      },
      {
        name: "Laptops",
        categoryId: "laptops",
        parentCategoryId: "digitaldevices",
        level: 2,
      },
    ],
  },
];
