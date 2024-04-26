import type { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Fallback: FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex h-full items-center justify-center"
    >
      <Image
        src="/images/iphone-all-colors.webp"
        alt="iPhone All Colors Overview"
        className="w-1/2 opacity-80 blur-lg"
        width={600}
        height={936}
      />
      <p className="absolute text-center text-3xl font-semibold">
        Click and turn to explore iPhone.
      </p>
    </motion.div>
  );
};

export default Fallback;
