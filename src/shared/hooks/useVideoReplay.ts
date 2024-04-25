import { useIntersection } from "@/shared/hooks/useIntersection";
import { RefObject, useEffect } from "react";

interface videoReplayProps {
  videoRef: RefObject<HTMLVideoElement>;
  parentRef?: RefObject<HTMLElement>;
}

export const useVideoReplay = ({
  videoRef,
  parentRef,
}: videoReplayProps): void => {
  const { isIntersecting } = useIntersection(parentRef || videoRef);

  useEffect(() => {
    if (videoRef.current && isIntersecting) {
      videoRef.current.currentTime = 0;
    }
  }, [isIntersecting, videoRef]);
};
