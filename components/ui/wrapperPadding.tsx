import { ReactNode } from "react";

type WrapperPaddingProps = {
  children: ReactNode;
};
const WrapperPadding = ({ children }: WrapperPaddingProps) => {
  return (
    <section className="2xl:max-w-[1280px] px-10 lg:px-28 w-full">
      {children}
    </section>
  );
};

export default WrapperPadding;
