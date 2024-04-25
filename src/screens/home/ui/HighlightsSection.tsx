"use client";
import type { FC } from "react";
import { motion } from "framer-motion";

import Watch from "@/shared/ui/icons/Watch";
import Arrow from "@/shared/ui/icons/Arrow";

import {
  HighlightsSlider,
  HighlightsSliderProvider,
} from "@/features/highlights-slider";

const HighlightsSection: FC = () => {
  return (
    <section className="overflow-x-hidden bg-zinc-900 py-20">
      <div className="container">
        <header className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-0">
          <motion.h2
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-gray-400 lg:text-5xl"
          >
            Get the highlights.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-6"
          >
            <button className="flex items-center gap-2 text-xl text-blue-500 hover:underline">
              Watch the film <Watch />
            </button>
            <button className="flex items-center gap-2 text-xl text-blue-500 hover:underline">
              Watch the event <Arrow />
            </button>
          </motion.div>
        </header>
        <HighlightsSliderProvider>
          <HighlightsSlider />
        </HighlightsSliderProvider>
      </div>
    </section>
  );
};

export default HighlightsSection;
