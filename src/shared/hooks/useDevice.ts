import { useEffect, useState } from "react";

export const useDevice = () => {
  const hasWindow = typeof window !== "undefined";

  const [isDesktop, setIsDesktop] = useState<boolean>();
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    if (hasWindow) {
      const updateDevice = () => {
        if (window.innerWidth < 1200) {
          setIsMobile(true);
          setIsDesktop(false);
        } else {
          setIsMobile(false);
          setIsDesktop(true);
        }
      };

      updateDevice();

      window.addEventListener("resize", updateDevice);

      return () => {
        window.removeEventListener("resize", updateDevice);
      };
    }
  }, [hasWindow]);

  return { isDesktop, isMobile };
};
