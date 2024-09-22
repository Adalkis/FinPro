type EmailTemplateProps = {
  name: string;
}

export default function EmailTemplate({ name }:EmailTemplateProps) {
  return (
    <div>
      <h1>Bienvenido, {name}!</h1>
      <p>Gracias por elegirnos, en unos minutos uno de nuestros representantes se estará contactando con usted.</p>
    </div>
  );
}