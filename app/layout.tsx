import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iPhone 16 Pro",
  description:
    "iPhone 16 Pro. Titanium design. A17 Pro chip. 48MP Main camera. Record spatial video for Apple Vision Pro. Action button. USB-C.",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
