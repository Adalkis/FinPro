import Link from "next/link";
import { ReactNode } from "react";
import ButtonLink from "./ui/buttonLink";
import Card, { CardProps } from "./ui/card";

type ServiceCardProps = CardProps & {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  ...props
}: ServiceCardProps) {
  return (
    <Card {...props} className="lg:w-80 mb-10 lg:mb-0 lg:mr-10">
      <div className="text-lg text-lightGreen mb-8 mt-8">{icon}</div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-semibold text-sm mb-2">{title}</h3>
        <p className="font-light text-xs mb-8">{description}</p>
        <ButtonLink
          aria-label="Solicitar información para finanzas"
          pathName="#contacto"
        >
          Solicitar{" "}
        </ButtonLink>
      </div>
    </Card>
  );
}
