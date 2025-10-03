import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Navigation from "../navigation";
import Filters from "../filters";


const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-12 px-12">
      <Navigation />
      <Filters />
      <div className="flex md:flex-col flex-row items-start md:gap-4 justify-between my-8">
        <h2 className="text-4xl font-bold tracking-tight">Salas</h2>
      </div>  
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Card key={i} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0 mx-4">
              <div className="aspect-video bg-muted w-full border-b" />
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  Workshop
                </Badge>
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  Reunião
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  16d atrás
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                Sala de Conferência
              </h3>
              <p className="mt-2 text-muted-foreground">
                Espaço moderno e versátil para reuniões, treinamentos ou eventos sociais.
              </p>

              <Button className="mt-6 shadow-none">
                <Link href="/room">Saiba mais</Link>
                <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
