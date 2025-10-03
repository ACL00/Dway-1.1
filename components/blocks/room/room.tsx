"use client"

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navigation from "../navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowLeft,
  Building,
  Cable,
  Snowflake,
  Users,
  VolumeX,
  Wifi,
} from "lucide-react";
import ToggleButton from "@/components/button-15";
import Calendar04 from "@/components/calendar-04";

type commoditiesItem = {
  icon?: React.ReactNode;
  text: string;
};

const commoditiesItems: commoditiesItem[] = [
  {
    icon: <Wifi />,
    text: "Conexão wi-fi de alta velocidade",
  },
  {
    icon: <Snowflake />,
    text: "Ambiente climatizado",
  },
  {
    icon: <Building />,
    text: "Estrutura moderna e mobiliário ergonômico",
  },
  {
    icon: <Cable />,
    text: "Tomadas de fácil acesso para equipamentos",
  },
  {
    icon: <VolumeX />,
    text: "Sala silenciosa, com ótima acústica e privacidade",
  },
  {
    icon: <Users />,
    text: "Capacidade adequada para pequenos grupos (consultar)",
  },
];

const Room = () => {
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleAddComment = () => {
    if (name.trim() && text.trim()) {
      setComments([...comments, { name, text }]);
      setName("");
      setText("");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-12 px-12">
      <Navigation />
      <Button variant={"link"}>
        <Link href={"/home"} className="flex gap-2 items-center">
          <ArrowLeft /> Voltar
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-18 gap-4 mt-8 mb-32">
        <Carousel className="w-full flex items-center justify-center">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
              Sala de Conferência
            </h1>
            <ToggleButton />
          </div>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-neutral-600">
            R$100,00 por dia
          </h4>

          <Button className="w-full sm:w-auto">Reservar agora</Button>

          <h4 className="scroll-m-20 text-xl mt-4 font-semibold tracking-tight">
            Descrição
          </h4>
          <p className="leading-7 text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo
            quisquam soluta iure. Ipsam accusantium repudiandae, iure odit a
            fugiat obcaecati. Ut unde expedita molestias obcaecati neque at
            suscipit laudantium nulla sit tenetur totam, corporis iure quibusdam
            architecto sed possimus facere doloribus excepturi quia itaque
            provident quam...
          </p>
        </div>
        <div className="flex flex-col w-full h-auto">
          <h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0 mb-8">
            Essa sala oferece
          </h2>
          <ul className="flex flex-col gap-8">
            {commoditiesItems.map((item, id) => (
              <li key={id} className="flex items-center gap-4 text-neutral-500">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-8 mx-auto">
          <Calendar04 />
        </div>
      </div>

      {/* Seção de comentários */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-8">Comentários</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md p-2 w-full"
            />
            <textarea
              placeholder="Escreva seu comentário"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border rounded-md p-2 w-full h-24"
            />
            <Button onClick={handleAddComment} className="w-full sm:w-auto">
              Enviar
            </Button>
          </div>
          <ul className="flex flex-col gap-4 mt-8">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="border rounded-md p-4 shadow-sm bg-neutral-50"
              >
                <p className="font-semibold">{comment.name}</p>
                <p className="text-neutral-600">{comment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Room;