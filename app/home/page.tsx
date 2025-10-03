import type { Metadata } from "next";
import "../globals.css";
import Blog from "@/components/blocks/blog/blog";
import Footer from "@/components/blocks/footer/footer";

export const metadata: Metadata = {
  title: "Dway v1.1 - Página Principal",
  description: "Versão atualizada de Dway",
};

export default function Home() {
  return (
    <>
      <Blog />
      <Footer />
    </>
  );
}
