import type { FC } from "react";
import Link from "next/link";
import { footerLinks } from "../constants/footerLinks";

const Footer: FC = () => {
  return (
    <footer className="container">
      <p className="text-xs font-semibold leading-5 text-zinc-400">
        More ways to shop:{" "}
        <a href="#" className="text-blue-600 underline">
          Find an Apple Store
        </a>{" "}
        or{" "}
        <a href="#" className="text-blue-600 underline">
          other retailer
        </a>{" "}
        near you. <br />
        <span>Or call 000800-040-1966</span>
      </p>
      <div className="my-4 flex flex-col items-start justify-between gap-4 border-t border-zinc-700 py-4 md:flex-row md:items-center">
        <p className="text-xs font-semibold text-zinc-400">
          Copright @ 2024 Apple Inc. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 sm:gap-0">
          {footerLinks.map((link, index) => (
            <li key={link.name}>
              <Link href={link.url}>{link.name}</Link>
              {index !== footerLinks.length - 1 && (
                <span className="mx-4 hidden text-zinc-600 sm:inline">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
