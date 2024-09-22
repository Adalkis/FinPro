import Image from "next/image";
import Random from "@/public/images/random.webp";
import ButtonLink from "./ui/buttonLink";

export default function Marketing() {
  return (
    <div className="w-full h-72 relative mt-5 z-10">
      <Image
        className="mr-10 object-cover"
        src={Random}
        alt="logo"
        fill={true}
      />
      <div className="absolute pl-10 flex flex-col justify-center h-full">
        <h2 className="lg:w-1/2 text-sm md:text-lg text-white mb-5">
          Solicita nuestros productos y transforma tu vida financiera
        </h2>
        <ButtonLink
          aria-label="Solicitar información para finanzas"
          pathName="#contacto"
        >
          Solicitar
        </ButtonLink>
      </div>
    </div>
  );
}
