import {
  IphoneColorType,
  IphoneModelType,
  IphoneSizeType,
} from "../types/params.types";

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

export const iphoneColors: IphoneColorType[] = [
  {
    id: 1,
    title: "6.1” iPhone 15 Pro in four colors",
    imageSrc: "/images/iphone-all-colors.webp",
    color: ["#8F8A81", "#53596E", "#C9C8C2", "#454749"],
  },
  {
    id: 2,
    title: "6.7” iPhone 15 Pro Max and 6.1” iPhone 15 Pro in Natural Titanium",
    imageSrc: "/images/iphone-natural-titanium.webp",
    color: "#8F8A81",
  },
  {
    id: 3,
    title: "6.7” iPhone 15 Pro Max and 6.1” iPhone 15 Pro in Blue Titanium",
    imageSrc: "/images/iphone-blue-titanium.webp",
    color: "#53596E",
  },
  {
    id: 4,
    title: "6.7” iPhone 15 Pro Max and 6.1” iPhone 15 Pro in White Titanium",
    imageSrc: "/images/iphone-white-titanium.webp",
    color: "#C9C8C2",
  },
  {
    id: 5,
    title: "6.7” iPhone 15 Pro Max and 6.1” iPhone 15 Pro in Black Titanium",
    imageSrc: "/images/iphone-black-titanium.webp",
    color: "#454749",
  },
];
