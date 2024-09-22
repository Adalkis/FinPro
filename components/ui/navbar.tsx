import Image from "next/image";

import Logo from "@/public/images/logo.png";
import MobileNavbar from "./mobileNavbar";
import ButtonLink from "./buttonLink";
import NavbarItems from "./navBarItems";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
      <div className="w-full bg-darkGray h-8"></div>
      <nav className=" w-full bg-white px-10 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              className="mr-10 h-auto"
              src={Logo}
              width={50}
              alt="logo"
              priority={true}
            />
            <div className="hidden lg:flex">
              <NavbarItems />
            </div>
          </div>
          <MobileNavbar />

          <ButtonLink
            aria-label="Solicitar información para finanzas"
            pathName="#contacto"
            className="hidden lg:flex"
          >
            Solicitar Información
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
