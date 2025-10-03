import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dway v1.1",
  description: "Versão atualizada de Dway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      >
        {children}
      </body>
    </html>
  );
}
