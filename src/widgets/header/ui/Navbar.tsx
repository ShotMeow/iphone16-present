"use client";
import { type FC, useEffect } from "react";
import Link from "next/link";
import { stagger, useAnimate } from "framer-motion";

import Logo from "@/shared/ui/Logo";
import Search from "@/shared/ui/icons/Search";
import Bag from "@/shared/ui/icons/Bag";

import { useDevice } from "@/shared/hooks/useDevice";

import { linksData } from "../data/links.data";

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
          <li className="w-full">
            <ul className="flex w-full items-center justify-between">
              {linksData.map((link) => (
                <li key={link.name}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        )}
        <li>
          <ul className="flex items-center justify-between gap-8 text-white">
            <li className="size-4 text-white">
              <button aria-label="Search">
                <Search />
              </button>
            </li>
            <li className="size-4 text-white">
              <button aria-label="Bag">
                <Bag />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
