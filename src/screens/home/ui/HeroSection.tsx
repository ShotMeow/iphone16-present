"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Button from "@/shared/ui/Button";

const HeroSection: FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    const handleVideoSrcSet = () => {
      if (window.innerWidth < 1200) {
        setVideoUrl("/videos/hero-mobile.mp4");
      } else {
        setVideoUrl("/videos/hero-desktop.mp4");
      }
    };

    handleVideoSrcSet();

    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="container mb-8 flex min-h-[calc(100vh-56px)] flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="mb-4 text-center text-3xl text-gray-300"
      >
        iPhone 16 Pro
      </motion.h1>
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="pointer-events-none"
        autoPlay
        muted
        playsInline
        key={videoUrl}
      >
        <source src={videoUrl} type="video/mp4" />
      </motion.video>
      <motion.div
        initial={{ opacity: 0, translateY: 150 }}
        animate={{ opacity: 1, translateY: 0 }}
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
