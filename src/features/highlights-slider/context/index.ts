import { createContext } from "react";
import { HighlightSliderContextType } from "../types";

export const HighlightsSliderContext =
  createContext<HighlightSliderContextType>({
    videoState: "playing",
    activeSlide: 0,
    setActiveSlide: () => null,
    setVideoState: () => null,
  });
