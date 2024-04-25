export interface IphoneSizeType {
  label: string;
  value: "small" | "large";
}

export interface IphoneModelType {
  id: number;
  title: string;
  color: string[];
  material: string;
}

export interface IphoneColorType {
  id: number;
  title: string;
  imageSrc: string;
  color: string | string[];
}
