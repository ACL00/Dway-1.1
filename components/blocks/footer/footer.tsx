import { Separator } from "@/components/ui/separator";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

type FooterSections = {
  icon?: React.ReactNode;
  title: string;
  href: string;
}
type FooterSection = {
  title: string;
  links: FooterSections[];
}

const footerSections: FooterSection[] = [
  {
    title: "Informações de contato",
    links: [
      {
        icon: <MapPin size={18} />,
        title: "Ver endereço completo",
        href: "#",
      },
      {
        icon: <Phone size={18} />,
        title: "+55 (11) 1234-5678",
        href: "#",
      },
      {
        icon: <Mail size={18} />,
        title: "contato@dway.com.br",
        href: "#",
      }
    ],
  },
  {
    title: "Ajuda",
    links: [
      {
        title: "Sobre nós",
        href: "#",
      },
      {
        title: "FAQ",
        href: "#",
      },
      {
        title: "Política de Privacidade",
        href: "#",
      }
    ],
  }
];

const Footer = () => {
  return (
    <div className="h-full flex flex-col border-t">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 grid grid-cols-2 gap-x-8 gap-y-10 px-12">
            <div className="col-span-full xl:col-span-2">
              {/* Logo */}
              <h3 className="text-2xl font-bold text-neutral-900">DWAY</h3>
              <p className="mt-4 text-muted-foreground">
                Encontre e reserve o espaço perfeito para seu evento em poucos cliques. Simples, rápido e seguro.
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold text-neutral-800">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ icon, title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground flex items-center space-x-2 gap-2 w-fit transition"
                      >
                        {icon}
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                DWAY
              </Link>
              . Todos os direitos reservados.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <IconBrandInstagram className="h-6 w-6 hover:text-neutral-900 transition" />
              </Link>
              <Link href="#" target="_blank">
                <IconBrandFacebook className="h-6 w-6 hover:text-neutral-900 transition" />
              </Link>
              <Link href="#" target="_blank">
                <IconBrandLinkedin className="h-6 w-6 hover:text-neutral-900 transition" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
