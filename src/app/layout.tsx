import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dra. Hemilly Dutra Advogada Grande Florianópolis",
    description:
      "Escritório Bublitz: escritório de advocacia especializado em direito trabalhista, Direito Previdenciário, Direito Civil, Direito Empresarial. Atendimento personalizado e soluções jurídicas eficientes em São Paulo.",
    keywords:
      "advocacia, direito trabalhista, direito civil, advogados, adivogado Palhoça, adivogado Palhoca, adivogado Sao jose, adivogado São José, adivogado Florianopolis, adivogado Florianópolis, adivogado trabalhista, advogado civil, ",
    icons: {
      icon: "/iconsAdv.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="relative w-full overflow-hidden">
          <div className="relative z-10">{children}</div>
        </div>

        <WhatsAppButton
          phoneNumber="5548984695233"
          className=" fixed bottom-8 right-10 z-50 shadow-lg"
          message="Olá, gostaria de agendar um horário para atendimento!."
        />
      </body>
    </html>
  );
}
