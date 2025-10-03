import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/blocks/footer/footer";
import Login from "@/components/blocks/login/login";

export const metadata: Metadata = {
  title: "Dway v1.1 - Entrar",
  description: "Versão atualizada de Dway",
};

export default function Home() {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}
