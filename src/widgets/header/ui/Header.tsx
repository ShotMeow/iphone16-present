import type { FC } from "react";

import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header>
      <div className="fixed w-full">
        <div className="container bg-black py-4">
          <Navbar />
        </div>
      </div>
      <div className="pb-[56px]" />
    </header>
  );
};

export default Header;
