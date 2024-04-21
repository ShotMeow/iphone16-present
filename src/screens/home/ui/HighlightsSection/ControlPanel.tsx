import type { Dispatch, FC, SetStateAction } from "react";
import Pause from "@/shared/ui/icons/Pause";
import Play from "@/shared/ui/icons/Play";
import Replay from "@/shared/ui/icons/Replay";
import { useSwiper } from "swiper/react";
import classNames from "classnames";

interface Props {
  videoState: "playing" | "paused" | "ended";
  setVideoState: Dispatch<SetStateAction<"playing" | "paused" | "ended">>;
  activeSlide: number;
  setActiveSlide: Dispatch<SetStateAction<number>>;
}

const ControlPanel: FC<Props> = ({
  videoState,
  setVideoState,
  activeSlide,
  setActiveSlide,
}) => {
  const swiper = useSwiper();

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <div className="flex h-14 items-center gap-2 rounded-full bg-white/10 px-8">
        <button
          onClick={() => {
            swiper.slideTo(0);
            setActiveSlide(0);
          }}
          className={classNames(
            {
              "bg-white/60 w-8": activeSlide === 0,
            },
            "size-2 rounded-full bg-white/30 transition-all duration-1000",
          )}
        />
        <button
          onClick={() => {
            swiper.slideTo(1);
            setActiveSlide(1);
          }}
          className={classNames(
            {
              "bg-white/60 w-8": activeSlide === 1,
            },
            "size-2 rounded-full bg-white/30 transition-all duration-1000",
          )}
        />
        <button
          onClick={() => {
            swiper.slideTo(2);
            setActiveSlide(2);
          }}
          className={classNames(
            {
              "bg-white/60 w-8": activeSlide === 2,
            },
            "size-2 rounded-full bg-white/30 transition-all duration-1000",
          )}
        />
        <button
          onClick={() => {
            swiper.slideTo(3);
            setActiveSlide(3);
          }}
          className={classNames(
            {
              "bg-white/60 w-8": activeSlide === 3,
            },
            "size-2 rounded-full bg-white/30 transition-all duration-1000",
          )}
        />
      </div>
      <button
        onClick={() => {
          if (videoState === "playing") {
            setVideoState("paused");
          } else if (videoState === "paused") {
            setVideoState("playing");
          } else {
            swiper.slideTo(0);
            setVideoState("playing");
          }
        }}
        className="flex size-14 items-center justify-center rounded-full bg-white/10 p-2 transition-all hover:bg-white/15 active:bg-white/5"
      >
        {videoState === "playing" ? (
          <Pause />
        ) : videoState === "paused" ? (
          <Play />
        ) : (
          <Replay />
        )}
      </button>
    </div>
  );
};

export default ControlPanel;
