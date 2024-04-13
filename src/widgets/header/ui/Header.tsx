import type { FC } from "react";

import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header className="container py-4">
      <Navbar />
    </header>
  );
};

export default Header;
