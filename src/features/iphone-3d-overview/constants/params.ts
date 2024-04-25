import { IphoneModelType, IphoneSizeType } from "../types/params.types";

export const iphoneSizes: IphoneSizeType[] = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const iphoneModels: IphoneModelType[] = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    material: "/models/materials/yellow.jpg",
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    material: "/models/materials/blue.jpg",
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    material: "/models/materials/white.jpg",
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    material: "/models/materials/black.jpg",
  },
];
