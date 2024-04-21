import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import HighlightSlide from "./HighlightSlide";
import ControlPanel from "./ControlPanel";

interface Props {
  videoState: "playing" | "paused" | "ended";
  setVideoState: Dispatch<SetStateAction<"playing" | "paused" | "ended">>;
}

const HighlightSlider: FC<Props> = ({ videoState, setVideoState }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={120}
        className="my-10 h-[40dvh] md:h-[60dvh] xl:h-[80dvh]"
        style={{ overflow: "visible" }}
        onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
      >
        <SwiperSlide className="relative p-4 md:p-10">
          <HighlightSlide
            setVideoState={setVideoState}
            videoPaused={activeSlide !== 0 || videoState === "paused"}
            videoPlaying={activeSlide === 0 && videoState === "playing"}
            videoUrl="/videos/highlight-first.mp4"
          >
            Enter A17 Pro. <br />
            Game‑changing chip. <br />
            Groundbreaking performance.
          </HighlightSlide>
        </SwiperSlide>
        <SwiperSlide className="relative p-4 md:p-10">
          <HighlightSlide
            setVideoState={setVideoState}
            videoPaused={activeSlide !== 1 || videoState === "paused"}
            videoPlaying={activeSlide === 1 && videoState === "playing"}
            videoUrl="/videos/highlight-second.mp4"
          >
            Titanium. <br />
            So strong. So light. So Pro.
          </HighlightSlide>
        </SwiperSlide>
        <SwiperSlide className="relative p-4 md:p-10">
          <HighlightSlide
            setVideoState={setVideoState}
            videoPaused={activeSlide !== 2 || videoState === "paused"}
            videoPlaying={activeSlide === 2 && videoState === "playing"}
            videoUrl="/videos/highlight-third.mp4"
          >
            iPhone 15 Pro Max has the <br />
            longest optical zoom in <br />
            iPhone ever. Far out.
          </HighlightSlide>
        </SwiperSlide>
        <SwiperSlide className="relative p-4 md:p-10">
          <HighlightSlide
            setVideoState={setVideoState}
            videoPaused={activeSlide !== 3 || videoState === "paused"}
            videoPlaying={activeSlide === 3 && videoState === "playing"}
            videoUrl="/videos/highlight-fourth.mp4"
          >
            All-new Action button. <br />
            What will yours do?
          </HighlightSlide>
        </SwiperSlide>
        <ControlPanel
          videoState={videoState}
          setVideoState={setVideoState}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </Swiper>
    </motion.div>
  );
};

export default HighlightSlider;
