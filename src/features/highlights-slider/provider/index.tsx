import { type FC, type PropsWithChildren, useState } from "react";

import { HighlightsSliderContext } from "../context";
import { videoStateType } from "../types";

export const HighlightsSliderProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [videoState, setVideoState] = useState<videoStateType>("playing");
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <HighlightsSliderContext.Provider
      value={{
        videoState,
        setVideoState,
        activeSlide,
        setActiveSlide,
      }}
    >
      {children}
    </HighlightsSliderContext.Provider>
  );
};
