import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Fin Pro",
  description:
    "Solicita préstamos personales, tarjetas de crédito y cuentas de ahorro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mb-5 pt-20">{children}</div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
