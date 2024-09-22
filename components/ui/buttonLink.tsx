"use client";
import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "./button";

type ButtonLinkProps = ButtonProps & { pathName: string };

const ButtonLink = ({ pathName, ...props }: ButtonLinkProps) => {
  const router = useRouter();
  return <Button onClick={() => router.push(pathName)} {...props} />;
};
export default ButtonLink;
