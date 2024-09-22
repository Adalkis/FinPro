"use client";
import Link from "next/link";
import Divider from "./ui/divider";
import Icons from "./ui/Icons";
import WrapperPadding from "./ui/wrapperPadding";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <WrapperPadding>
        <Divider />
        <footer className="w-full flex justify-between items-center mt-4 mb-4">
          <div className="flex">
            <h6 className="mr-5">&copy; FinPro</h6>
            <Link
              href="https://www.globant.com/es"
              target="_blank"
              className="hover:underline hover:text-lightGreen cursor-pointer"
            >
              Política de privacidad
            </Link>
          </div>

          <div className="flex text-md">
            <Link
              href="https://facebook.com"
              aria-label="FinPro Facebook"
              className="mr-5"
              target="_blank"
            >
              <Icons.facebook className="mr-5 text-darkBlue cursor-pointer" />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="FinPro Twitter"
              className="mr-5"
              target="_blank"
            >
              <Icons.twitter
                className="text-lightBlue cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="FinPro LinkedIn"
              className="mr-5"
              target="_blank"
            >
              <Icons.linkedin
                className="text-blue cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="FinPro Instagram"
              className="mr-5"
              target="_blank"
            >
              <Icons.instagram
                className="text-purple cursor-pointer"
                aria-hidden="true"
              />
            </Link>
          </div>
        </footer>
      </WrapperPadding>
    </div>
  );
}
