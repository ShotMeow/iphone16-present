import {
  type Dispatch,
  FC,
  PropsWithChildren,
  type SetStateAction,
  useEffect,
  useRef,
} from "react";
import { useSwiper } from "swiper/react";

interface Props {
  videoPlaying: boolean;
  videoPaused: boolean;
  videoUrl: string;
  setVideoState: Dispatch<SetStateAction<"playing" | "paused" | "ended">>;
}

const HighlightSlide: FC<PropsWithChildren<Props>> = ({
  videoPlaying,
  videoPaused,
  videoUrl,
  setVideoState,
  children,
}) => {
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

  return (
    <>
      <h3 className="relative z-20 text-xl font-semibold md:text-3xl">
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
            }
            swiper.slideNext();
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HighlightSlide;
