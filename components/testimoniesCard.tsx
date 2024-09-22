import Image, { StaticImageData } from "next/image";
import Card, { CardProps } from "./ui/card";

type TestimoniesCardProps = CardProps & {
  imagePath: StaticImageData;
  description: string;
  imageName: string;
};

export default function TestimoniesCard({
  imagePath,
  description,
  imageName,
  ...props
}: TestimoniesCardProps) {
  return (
    <Card {...props} className="lg:w-80 mb-10 lg:mb-0 lg:mr-10">
      <div className="flex justify-center">
        <Image
          className="mr-10 rounded-full"
          src={imagePath}
          width={80}
          height={80}
          alt={imageName}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <p className="font-light text-xs mb-8 text-center">{description}</p>
      </div>
    </Card>
  );
}
