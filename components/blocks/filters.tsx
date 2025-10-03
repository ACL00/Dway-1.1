"use client"

import { AirVentIcon, Cable, CalendarClock, FilterIcon, Handshake, KeyRound, MedalIcon, Projector, TvMinimal, VolumeX, Wifi, Zap } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState } from 'react';

type FilterItem = {
    icon?: React.ReactNode;
    title: string;
    description?: string;
}


const amenityItems: FilterItem[] = [
    {
        icon: <Wifi />,
        title: "Wi-fi",
    },
    {
        icon: <AirVentIcon />,
        title: "Climatização",
    },
    {
        icon: <TvMinimal />,
        title: "Smart TV",
    },
    {
        icon: <Cable />,
        title: "Fácil acesso",
    },
    {
        icon: <VolumeX />,
        title: "Sala silenciosa",
    },
    {
        icon: <Projector />,
        title: "Projetor"
    }
];

const reservationItems: FilterItem[] = [
    {
        icon: <Zap />,
        title: "Reserva instantânea",
    },
    {
        icon: <KeyRound />,
        title: "Self check-in",
    },
    {
        icon: <CalendarClock />,
        title: "Cancelamento grátis",
    },
]

const highlightItems: FilterItem[] = [
    {
        icon: <MedalIcon />,
        title: "Preferido dos hóspedes",
        description: "As salas que mais fazem sucesso entre os usuários",
    },
    {
        icon: <Handshake />,
        title: "Melhores anfitriões",
        description: "Os anfitriões mais bem avaliados pelos usuários",
    }
]

export default function Filters() {
    const [sliderValue, setSliderValue] = useState(45);
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button>Filtros <FilterIcon /></Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Filtros</SheetTitle>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full pt-8 px-4"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Seu orçamento (por diária)</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas alias cupiditate vel, error quam earum a accusamus odit voluptates consequatur autem quae pariatur doloribus sequi ratione dolor veniam quod.</p>
                                    <div className="flex justify-between">
                                        <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                            R$0
                                        </Badge>
                                        <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                            ${sliderValue * 10},00
                                        </Badge>
                                        <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                                            R$1000,00
                                        </Badge>
                                    </div>
                                    <Slider onValueChange={value => setSliderValue(value[0])} defaultValue={[45]} />
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Comodidades</AccordionTrigger>
                                <AccordionContent className="grid grid-cols-2 gap-4 overflow-auto">
                                    {amenityItems.map((item, index) => (
                                        <Toggle key={index} variant={"outline"} aria-label={item.title}>
                                            {item.icon}
                                            {item.title}
                                        </Toggle>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Opções de reserva</AccordionTrigger>
                                <AccordionContent className="grid grid-cols-2 gap-4 overflow-auto">
                                    {reservationItems.map((item, index) => (
                                        <Toggle key={index} variant={"outline"} aria-label={item.title}>
                                            {item.icon}
                                            {item.title}
                                        </Toggle>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Acomodações em destaque</AccordionTrigger>
                                <AccordionContent className="grid grid-cols-2 gap-4">
                                    {highlightItems.map((item, index) => (
                                        <Toggle
                                            key={index}
                                            variant="outline"
                                            aria-label={item.title}
                                            className="flex items-center gap-3 text-left whitespace-normal min-h-[128px] p-4"
                                        >
                                            <div className="flex flex-col">
                                                <div className="inline-flex items-center mb-2">
                                                    <span className="text-xs font-medium">{item.title}</span>
                                                    {item.icon}
                                                </div>
                                                <span className="text-xs text-muted-foreground break-words">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </Toggle>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Avaliação da Sala</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        We stand behind our products with a comprehensive 30-day return
                                        policy. If you&apos;re not completely satisfied, simply return the
                                        item in its original condition.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </SheetHeader>
                    <SheetFooter>
                        <Button type="submit">Aplicar filtros</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Fechar</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
}
