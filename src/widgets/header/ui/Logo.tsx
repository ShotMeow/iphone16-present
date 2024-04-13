import type { FC } from "react";
import Link from "next/link";

import Apple from "@/src/shared/ui/icons/Apple";

const Logo: FC = () => {
  return (
    <Link className="text-white" href="/">
      <Apple />
    </Link>
  );
};

export default Logo;
