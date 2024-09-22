import Image from "next/image";
import WrapperPadding from "./ui/wrapperPadding";

import Banner from "@/public/images/Banner.png";
import Divider from "./ui/divider";
import ButtonLink from "./ui/buttonLink";

export default function Start() {
  return (
    <WrapperPadding>
      <div className="flex mt-10 justify-between mb-20">
        <div className="md:w-2/4 md: lg:mr-10">
          <h6 className="text-sm text-lightGreen"> Pruébalo ahora!</h6>
          <h1 className="text-md lg:text-xl mb-5">
            Explora nuestras Soluciones Financieras{" "}
          </h1>
          <p className="text-[10px] lg:text-xs text-black font-light mb-10">
            Transforma la manera en que manejas tus finanzas: desde préstamos
            personales para alcanzar tus metas, hasta tarjetas de crédito con
            beneficios únicos y cuentas de ahorro que hacen crecer tu dinero.
          </p>
          <ButtonLink
            aria-label="Solicitar información para finanzas"
            pathName="#contacto"
          >
            Empieza ahora
          </ButtonLink>
        </div>
        <div className="hidden md:flex">
          <Image
            src={Banner}
            width={500}
            className="h-auto"
            alt="banner"
            priority={true}
          />
        </div>
      </div>
      <Divider />
    </WrapperPadding>
  );
}
