"use client";
import { type FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Button from "@/shared/ui/Button";
import { useDevice } from "@/shared/hooks/useDevice";
import { useVideoReplay } from "@/shared/hooks/useVideoReplay";

const HeroSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile } = useDevice();

  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    isMobile
      ? setVideoUrl("/videos/hero-mobile.mp4")
      : setVideoUrl("/videos/hero-desktop.mp4");
  }, [isMobile]);

  useVideoReplay(sectionRef, videoRef);

  return (
    <section
      ref={sectionRef}
      className="container mb-8 flex min-h-[calc(100svh-56px)] flex-col items-center justify-center"
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
