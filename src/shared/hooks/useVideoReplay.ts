import { useIntersection } from "@/shared/hooks/useIntersection";
import { RefObject, useEffect } from "react";

export const useVideoReplay = (
  sectionRef: RefObject<HTMLElement>,
  videoRef: RefObject<HTMLVideoElement>,
): void => {
  const { isIntersecting } = useIntersection(sectionRef);

  useEffect(() => {
    if (videoRef.current && isIntersecting) {
      videoRef.current.currentTime = 0;
    }
  }, [isIntersecting, videoRef]);
};
