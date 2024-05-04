import type { Dispatch, SetStateAction } from "react";

export type videoStateType = "playing" | "paused" | "ended";

export interface HighlightSliderContextType {
  videoState: videoStateType;
  setVideoState: Dispatch<SetStateAction<videoStateType>>;
  activeSlide: number;
  setActiveSlide: Dispatch<SetStateAction<number>>;
}

export interface SlideType {
  title: string;
  videoSrc: string;
}
