import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-0 py-12 lg:py-0">
          <div className="my-auto px-12">
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight text-neutral-900">
              DWAY
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg text-neutral-600">
              Encontre e reserve o espaço perfeito para seu evento em poucos cliques. Simples, rápido e seguro</p>
            <div className="mt-12 flex items-center gap-4">
              <Button size="lg" className="rounded-full text-base">
                <Link href="./signup" className="flex items-center gap-2">
                  Conheça agora! <ArrowUpRight className="!h-5 !w-5" />
                </Link>
              </Button>
              <Button size="lg" variant={"outline"} className="rounded-full text-base">
                <Link href="./login" className="flex items-center gap-2">
                  Entrar
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[100vh] border-l bg-gradient-to-br from-neutral-900 to-neutral-600" />
        </div>
      </div>
    </>
  );
}

export default Hero;