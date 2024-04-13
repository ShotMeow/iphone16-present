"use client";
import { type FC, useEffect } from "react";
import Link from "next/link";
import Logo from "@/src/widgets/header/ui/Logo";
import Search from "@/src/shared/ui/icons/Search";
import Bag from "@/src/shared/ui/icons/Bag";
import { animate, stagger } from "framer-motion";

const Navbar: FC = () => {
  useEffect(() => {
    animate("nav li", { opacity: 1 }, { delay: stagger(0.1) });
  }, []);
  return (
    <nav>
      <ul className="flex items-center justify-between gap-8 text-sm text-zinc-500">
        <li className="opacity-0">
          <Logo />
        </li>
        <div className="hidden w-full items-center justify-between xl:flex">
          <li className="opacity-0">
            <Link href="/">Store</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">Mac</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">iPad</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">iPhone</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">Watch</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">Vision</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">AirPods</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">TV & Home</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">Entertainment</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">Accessories</Link>
          </li>
          <li className="opacity-0">
            <Link href="/">Support</Link>
          </li>
        </div>
        <div className="flex items-center justify-between gap-8 text-white">
          <li className="opacity-0">
            <Search />
          </li>
          <li className="opacity-0">
            <Bag />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
