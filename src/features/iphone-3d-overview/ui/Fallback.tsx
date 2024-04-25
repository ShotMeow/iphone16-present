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
      className="absolute flex size-full h-full items-center justify-center"
    >
      <Image
        src="/images/iphone-back.webp"
        alt="iPhone Back Overview"
        className="pointer-events-none size-full object-contain p-28 opacity-80 blur-lg"
        priority={true}
        width={220}
        height={526}
      />
      <p className="absolute text-center text-3xl font-semibold">
        Click and turn to explore iPhone.
      </p>
    </motion.div>
  );
};

export default Fallback;
