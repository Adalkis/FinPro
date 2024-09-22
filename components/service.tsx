import ServiceCard from "./serviceCard";
import Icons from "./ui/Icons";
import Title from "./ui/title";
import WrapperPadding from "./ui/wrapperPadding";

export default function Service() {
  return (
    <WrapperPadding>
      <section className="mt-5" id="servicios">
        <Title
          sectionName="Servicios"
          title="Soluciones financieras 
    a tu alcance"
        >
          <div className="flex justify-center">
            <h4 className="text-xs font-light lg:w-[22%]">
              Productos financieros que se adaptan a tus necesidades.
            </h4>
          </div>
        </Title>
        <div className="flex flex-col lg:flex-row mt-5 mb-5 justify-between">
          <ServiceCard
            icon={<Icons.user />}
            title="Préstamos Personales"
            description="Obtén préstamos personales con 
            tasas de interés competitivas 
            y plazos flexibles."
          />
          <ServiceCard
            icon={<Icons.creditCard />}
            title="Tarjetas de Crédito"
            description="Disfruta de nuestras tarjetas de 
            crédito que se adaptan a tu 
            estilo de vida,"
          />
          <ServiceCard
            icon={<Icons.savings />}
            title="Cuentas de ahorro"
            description="Obtén préstamos personales con 
            tasas de interés competitivas 
            y plazos flexibles."
            borderRadius="roundedTrXl"
          />
        </div>
      </section>
    </WrapperPadding>
  );
}
