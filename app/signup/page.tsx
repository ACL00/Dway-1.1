import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/blocks/footer/footer";
import SignUp from "@/components/blocks/signup/signup";

export const metadata: Metadata = {
  title: "Dway v1.1 - Cadastro",
  description: "Versão atualizada de Dway",
};

export default function Home() {
  return (
    <>
      <SignUp />
      <Footer />
    </>
  );
}
