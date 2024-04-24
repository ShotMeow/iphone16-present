import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useSwiper } from "swiper/react";
import { HighlightsSliderContext } from "@/features/highlights-slider/context";
import { useVideoReplay } from "@/shared/hooks/useVideoReplay";

interface Props {
  videoPlaying: boolean;
  videoPaused: boolean;
  videoSrc: string;
}

const Slide: FC<PropsWithChildren<Props>> = ({
  videoPlaying,
  videoPaused,
  videoSrc,
  children,
}) => {
  const { setVideoState } = useContext(HighlightsSliderContext);

  const swiper = useSwiper();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (videoPlaying) {
      videoRef.current.play();
    } else if (videoPaused) {
      videoRef.current.pause();
    }
  }, [videoPlaying, videoPaused]);

  useVideoReplay({ videoRef });

  return (
    <>
      <h3 className="relative z-20 text-xl font-semibold md:text-3xl whitespace-pre-line">
        {children}
      </h3>
      <div>
        <video
          ref={videoRef}
          className="pointer-events-none absolute left-0 top-0 size-full rounded-xl object-cover"
          muted
          playsInline
          onEnded={() => {
            if (swiper.isEnd) {
              setVideoState("ended");
            } else {
              swiper.slideNext();
            }
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Slide;
