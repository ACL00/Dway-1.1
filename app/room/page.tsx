import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/blocks/footer/footer";
import Room from "@/components/blocks/room/room";

export const metadata: Metadata = {
  title: "Dway v1.1 - Sala de Conferência",
  description: "Versão atualizada de Dway",
};

export default function Home() {
  return (
    <>
      <Room />
      <Footer />
    </>
  );
}
