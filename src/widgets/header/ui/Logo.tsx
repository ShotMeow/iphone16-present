import type { FC } from "react";
import Link from "next/link";

import Apple from "@/shared/ui/icons/Apple";

const Logo: FC = () => {
  return (
    <Link className="text-white" href="/" aria-label="Home page">
      <Apple />
    </Link>
  );
};

export default Logo;
