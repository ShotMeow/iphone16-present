"use client";
import { type FC, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useVideoReplay } from "@/shared/hooks/useVideoReplay";

const MotionImage = motion(Image);

const ChipSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useVideoReplay(sectionRef, videoRef);

  return (
    <section
      ref={sectionRef}
      className="container my-20 flex flex-col items-center overflow-x-hidden"
    >
      <MotionImage
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="rounded-md"
        src="/images/a17-chip.webp"
        alt="A17 Chip pucture"
        width={160}
        height={160}
      />
      <motion.h2
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="mb-10 mt-20 text-center text-3xl font-semibold md:text-7xl"
      >
        A17 Pro chip. <br />A monster win for gaming.
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="mb-10 text-center text-xl text-zinc-400 md:mb-20 md:text-2xl"
      >
        It’s here. The biggest redesign in the history of Apple GPUs.
      </motion.h3>
      <motion.figure
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <Image
            src="/images/iphone-frame.png"
            alt="iPhone frame"
            width={1392}
            height={680}
          />
          <video
            ref={videoRef}
            className="absolute left-0 top-0 -z-10 size-full rounded-[14%] object-cover p-1 sm:rounded-[16%] sm:p-2"
            autoPlay
            muted
          >
            <source src="/videos/honkai.mp4" type="video/mp4" />
          </video>
        </div>
        <figcaption className="text-lg text-zinc-400">
          Honkai: Star Rail
        </figcaption>
      </motion.figure>
      <div className="grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="py-4 text-lg text-zinc-400 md:p-20 "
        >
          <p>
            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
            <span className="font-semibold text-white">
              best graphics performance by far
            </span>
            .
          </p>
          <br />
          <p>
            Mobile{" "}
            <span className="font-semibold text-white">
              games will look and feel so immersive
            </span>
            , with incredibly detailed environments and more realistic
            characters. And with industry-leading speed and efficiency, A17 Pro
            takes fast and runs with it.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="py-4 text-xl leading-10 text-zinc-400 md:p-20 md:text-2xl">
            New
            <br />
            <span className="text-2xl font-semibold text-white md:text-5xl">
              Pro-class GPU
            </span>
            <br />
            with 6 cores
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChipSection;
