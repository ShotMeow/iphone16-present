"use client";
import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import { useIntersection } from "@/shared/hooks/useIntersection";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const TitaniumSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isIntersecting } = useIntersection(sectionRef);

  useEffect(() => {
    if (videoRef.current && isIntersecting) {
      videoRef.current.currentTime = 0;
    }
  }, [isIntersecting]);

  return (
    <section ref={sectionRef} className="bg-zinc-900 py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
          }}
          className="text-2xl font-semibold text-zinc-400 lg:text-6xl"
        >
          Explore the full story.
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-10 lg:mt-20">
          <motion.h3
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
            }}
            className="col-span-2 text-xl lg:p-20 lg:text-6xl"
          >
            iPhone. <br /> Forged in titanium.
          </motion.h3>
          <video
            ref={videoRef}
            className="z-10 col-span-2"
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/explore.mp4" type="video/mp4" />
          </video>
          <motion.div className="h-40 overflow-hidden bg-black md:h-96">
            <MotionImage
              initial={{ scale: 1.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              src="/images/explore-1.webp"
              alt="Camera Photo"
              className="size-full object-cover"
              width={964}
              height={1028}
            />
          </motion.div>
          <div className="h-40 overflow-hidden bg-black md:h-96">
            <MotionImage
              initial={{ scale: 1.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              src="/images/explore-2.webp"
              alt="Material Photo"
              className="size-full object-cover"
              width={1028}
              height={684}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
            }}
            className="col-span-2 text-base font-semibold text-zinc-400 md:text-xl lg:px-20 xl:col-span-1"
          >
            iPhone 16 Pro is{" "}
            <span className="text-white">
              the first iPhone to feature an aerospace‑grade titanium design
            </span>
            , using the same alloy that spacecraft use for missions to Mars.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
            }}
            className="col-span-2 text-base font-semibold text-zinc-400 md:text-xl lg:px-20 xl:col-span-1"
          >
            Titanium has one of the best strength‑to‑weight ratios of any metal,
            making these our{" "}
            <span className="text-white">lightest Pro models ever</span>. You’ll
            notice the difference the moment you pick one up.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TitaniumSection;
