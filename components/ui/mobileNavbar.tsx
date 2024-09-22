"use client";

import Link from "next/link";
import { useState } from "react";
import Divider from "./divider";
import Icons from "./Icons";
import NavbarItems from "./navBarItems";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        aria-label="Open menu"
        className="text-lightGreen focus:text-white focus:bg-darkGreen text-md"
        onClick={() => setOpenMenu((show) => !show)}
      >
        <Icons.menu className="text-lightGreen focus:text-white focus:bg-darkGreen text-md" />
      </button>
      {openMenu && (
        <div className="shadow-lg absolute px-5 py-2 right-0 w-44  bg-white">
          <ul className="flex flex-col">
            <NavbarItems isShowDivider={true} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
