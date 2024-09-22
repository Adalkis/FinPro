"use client";
import { Button } from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import TextArea from "./ui/textarea";
import { useForm } from "react-hook-form";
import sendEmailAction from "@/app/actions/sendEmail";
import { toast } from "react-toastify";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmailAction({
        to: data.email,
        subject: "FinPro Financias",
        html: "<p>En un momento uno de nuestros representantes te estará contactando</p>",
      });
      reset();
      toast("El correo fue enviado correctamente!");
    } catch (err: unknown) {
      toast("Hubo un error, favor intentar nuevamente");
    }
  };
  return (
    <Form method="post" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-md font-semibold mb-4">Contáctanos</h2>
      <div className="mb-2">
        <Input
          placeholder="Nombre completo"
          {...register("name", { required: true })}
          aria-required="true"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <small className="text-red-800" aria-live="assertive">
            El nombre completo es requerido.
          </small>
        )}
      </div>
      <div className="mb-2">
        <Input
          placeholder="Correo electrónico"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })}
          aria-required="true"
          aria-invalid={!!errors.email}
        />
        {errors.email && errors.email.type == "pattern" && (
          <small className="text-red-800" aria-live="assertive">
            El correo electrónico es invalido.
          </small>
        )}

        {errors.email && errors.email.type !== "pattern" && (
          <small className="text-red-800" aria-live="assertive">
            El correo electrónico es requerido.
          </small>
        )}
      </div>
      <div className="mb-2">
        <TextArea
          placeholder="Mensaje"
          {...register("message", { required: true })}
          aria-required="true"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <small className="text-red-800" aria-live="assertive">
            El mensaje es requerido.
          </small>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          disabled={
            isSubmitting || (errors && Object.values(errors).length) > 0
          }
          type="submit"
        >
          {isSubmitting ? "Enviando ....." : "Enviar"}
        </Button>
      </div>
    </Form>
  );
}
