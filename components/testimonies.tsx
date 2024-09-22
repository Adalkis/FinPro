import TestimoniesCard from "./testimoniesCard";
import Title from "./ui/title";
import WrapperPadding from "./ui/wrapperPadding";
import Testimonies1 from "@/public/images/testimonies1.webp";
import Testimonies2 from "@/public/images/testimonies2.webp";
import Testimonies3 from "@/public/images/testimonies3.webp";

export default function Testimonies() {
  return (
    <WrapperPadding>
      <section className="mt-5" id="testimonios">
        <Title
          sectionName="Testimonios"
          title="Lo que dicen nuestros clientes"
          aligment="start"
          titleAligment="start"
        ></Title>

        <div className="flex flex-col lg:flex-row mt-5 mb-5 justify-between">
          <TestimoniesCard
            imagePath={Testimonies1}
            imageName="testimonies1"
            description="Gracias a su servicio de préstamos, 
pude financiar mi negocio sin 
complicaciones. 
¡Altamente recomendado!"
          />
          <TestimoniesCard
            borderColor="secondary"
            borderRadius="roundedBLXL"
            imagePath={Testimonies2}
            imageName="testimonies2"
            description="La tarjeta de crédito que ofrecen 
            tiene beneficios increíbles. 
            Recibo cashback en todas mis compras"
          />
          <TestimoniesCard
            imagePath={Testimonies3}
            imageName="testimonies3"
            description="Ahorro fácilmente y con buenas 
            tasas  de interés, sin 
            costos ocultos."
          />
        </div>
      </section>
    </WrapperPadding>
  );
}
