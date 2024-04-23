"use client";
import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Button from "@/shared/ui/Button";
import { useIntersection } from "@/shared/hooks/useIntersection";
import { useDevice } from "@/shared/hooks/useDevice";

const HeroSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile } = useDevice();

  const { isIntersecting } = useIntersection(sectionRef);

  const [videoUrl, setVideoUrl] = useState<string>("");
  const [posterUrl, setPosterUrl] = useState<string>("");

  useEffect(() => {
    if (isMobile) {
      setPosterUrl("/images/endframes/hero-mobile.webp");
      setVideoUrl("/videos/hero-mobile.mp4");
    } else {
      setPosterUrl("/images/endframes/hero-desktop.webp");
      setVideoUrl("/videos/hero-desktop.mp4");
    }
  }, [isMobile]);

  useEffect(() => {
    if (videoRef.current && isIntersecting) {
      videoRef.current.currentTime = 0;
    }
  }, [isIntersecting]);

  return (
    <section
      ref={sectionRef}
      className="container mb-8 flex min-h-[calc(100dvh-56px)] flex-col items-center justify-center transition-all"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="mb-4 text-center text-3xl text-gray-300"
      >
        iPhone 16 Pro
      </motion.h1>
      <motion.video
        ref={videoRef}
        poster={posterUrl}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        autoPlay
        muted
        className="h-[360px] w-full"
        playsInline
        key={videoUrl}
      >
        <source src={videoUrl} type="video/mp4" />
      </motion.video>
      <motion.div
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: 2.5,
        }}
        className="flex flex-col items-center overflow-hidden"
      >
        <Button>Buy Now</Button>
        <p className="text-center">Buy From $999 or $41.62/mo. for 24 mo.</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
