import Contact from "@/components/contactUs";
import Marketing from "@/components/marketing";
import Service from "@/components/service";
import Start from "@/components/start";
import Testimonies from "@/components/testimonies";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Start />
      <Service />
      <Testimonies />
      <Marketing />
      <Contact />
    </div>
  );
}
