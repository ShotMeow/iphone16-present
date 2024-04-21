import type { FC } from "react";

import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header>
      <div className="fixed z-50 w-full bg-black">
        <div className="container py-4">
          <Navbar />
        </div>
      </div>
      <div className="pb-[56px]" />
    </header>
  );
};

export default Header;
