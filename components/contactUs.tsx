import ContactForm from "./contactForm";
import Title from "./ui/title";
import WrapperPadding from "./ui/wrapperPadding";

export default function Contact() {
  return (
    <WrapperPadding>
      <section
        className="mt-5 w-full lg:grid lg:grid-cols-2 lg:gap-4"
        id="contacto"
      >
        <div className="">
          <Title
            sectionName="Contacto"
            title="Estamos aquí para ayudarte!"
            aligment="start"
            titleAligment="start"
          >
            <div className="text-light flex flex-col items-start">
              <p className="text-xs text-start lg:w-96 mb-5">
                Contáctanos para obtener más información o recibir asesoría
                personalizada sobre nuestros productos financieros.
              </p>
              <h6 className="text-xs">finpro@gmail.com</h6>
              <h6 className="text-xs">809-111-2020</h6>
              <h6 className="text-xs">225 E. Chicago Avenue</h6>
            </div>
          </Title>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </WrapperPadding>
  );
}
