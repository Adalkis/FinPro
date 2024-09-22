"use client";

import { cn } from "@/utils/mergeClassname";
import Link from "next/link";
import { useEffect, useState } from "react";
import Divider from "./divider";

type NavbarItemsProps = {
  isShowDivider?: Boolean;
};

const NavbarItems = ({ isShowDivider }: NavbarItemsProps) => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (typeof document !== "undefined") {
      setPathname(`/${document.location.hash}`);
    }
  }, []);
  return (
    <>
      <Link
        href="#"
        className={cn(`text-sm mr-10 ${pathname === "/" && "underline"}`)}
        onClick={() => setPathname("/")}
      >
        Inicio
      </Link>
      {isShowDivider && <Divider />}
      <Link
        href="/#servicios"
        className={cn(
          `text-sm mr-10 ${pathname === "/#servicios" && "underline"}`
        )}
        onClick={() => setPathname("/#servicios")}
      >
        Servicios
      </Link>
      {isShowDivider && <Divider />}
      <Link
        href="#testimonios"
        className={cn(
          `text-sm mr-10 ${pathname === "/#testimonios" && "underline"}`
        )}
        onClick={() => setPathname("/#testimonios")}
      >
        Testimonios
      </Link>
      {isShowDivider && <Divider />}
      <Link
        href="#contacto"
        className={cn(
          `text-sm mr-10 ${pathname === "/#contacto" && "underline"}`
        )}
        onClick={() => setPathname("/#contacto")}
      >
        Contacto
      </Link>
    </>
  );
};

export default NavbarItems;
