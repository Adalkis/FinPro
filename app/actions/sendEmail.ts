"use server";
import sendMail from "@/utils/sendEmail";

type SendEmailActionProps = {
  to: string;
  subject: string;
  html: string;
};

export default async function sendEmailAction(data: SendEmailActionProps) {
  if (!data.to) throw new Error("El correo es obligatorio");
  return await sendMail(data);
}
