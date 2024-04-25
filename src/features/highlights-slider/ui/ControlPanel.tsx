import { type FC, useContext } from "react";
import { motion } from "framer-motion";
import { useSwiper } from "swiper/react";
import classNames from "classnames";

import Pause from "@/shared/ui/icons/Pause";
import Play from "@/shared/ui/icons/Play";
import Replay from "@/shared/ui/icons/Replay";

import { HighlightsSliderContext } from "../context";

const ControlPanel: FC = () => {
  const { setActiveSlide, setVideoState, activeSlide, videoState } = useContext(
    HighlightsSliderContext,
  );
  const swiper = useSwiper();

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="relative mt-10 flex items-center justify-center gap-2"
    >
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
          aria-label="Select first highlight movie"
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
          aria-label="Select second highlight movie"
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
          aria-label="Select third highlight movie"
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
          aria-label="Select fourth highlight movie"
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
        aria-label={
          videoState === "playing"
            ? "Pause video"
            : videoState === "paused"
              ? "Play video"
              : "Replay video"
        }
      >
        {videoState === "playing" ? (
          <Pause />
        ) : videoState === "paused" ? (
          <Play />
        ) : (
          <Replay />
        )}
      </button>
    </motion.div>
  );
};

export default ControlPanel;
