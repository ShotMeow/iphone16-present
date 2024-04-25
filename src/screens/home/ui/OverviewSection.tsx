"use client";
import type { FC } from "react";
import { motion } from "framer-motion";
import { OverviewScene } from "@/features/iphone-3d-overview";

const OverviewSection: FC = () => {
  return (
    <section className="container my-20">
      <motion.h2
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-zinc-700 md:text-5xl"
      >
        Take a closer look
      </motion.h2>
      <OverviewScene />
    </section>
  );
};

export default OverviewSection;
