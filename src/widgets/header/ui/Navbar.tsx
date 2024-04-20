"use client";
import { type FC, useEffect } from "react";
import Link from "next/link";
import { stagger, useAnimate } from "framer-motion";

import Logo from "@/src/widgets/header/ui/Logo";
import Search from "@/src/shared/ui/icons/Search";
import Bag from "@/src/shared/ui/icons/Bag";
import { useDevice } from "@/src/shared/hooks/useDevice";

const Navbar: FC = () => {
  const [scope, animate] = useAnimate();
  const { isDesktop } = useDevice();

  useEffect(() => {
    animate("li", { opacity: [0, 1] }, { delay: stagger(0.1) });
  });

  return (
    <nav ref={scope}>
      <ul className="flex items-center justify-between gap-8 text-sm text-zinc-500">
        <li>
          <Logo />
        </li>
        {isDesktop && (
          <div className="flex w-full items-center justify-between">
            <li>
              <Link href="/">Store</Link>
            </li>
            <li>
              <Link href="/">Mac</Link>
            </li>
            <li>
              <Link href="/">iPad</Link>
            </li>
            <li>
              <Link href="/">iPhone</Link>
            </li>
            <li>
              <Link href="/">Watch</Link>
            </li>
            <li>
              <Link href="/">Vision</Link>
            </li>
            <li>
              <Link href="/">AirPods</Link>
            </li>
            <li>
              <Link href="/">TV & Home</Link>
            </li>
            <li>
              <Link href="/">Entertainment</Link>
            </li>
            <li>
              <Link href="/">Accessories</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
          </div>
        )}
        <div className="flex items-center justify-between gap-8 text-white">
          <li>
            <Search />
          </li>
          <li>
            <Bag />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
