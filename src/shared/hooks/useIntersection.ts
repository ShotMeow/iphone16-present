import { type RefObject, useEffect, useState } from "react";

export const useIntersection = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return { isIntersecting };
};
