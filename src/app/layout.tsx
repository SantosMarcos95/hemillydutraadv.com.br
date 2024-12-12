import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dra. Hemilly Dultra",
  description:
    "Escritório de advocacia especializado em diversas áreas do direito",
  icons: {
    icon: "/iconsAdv.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <WhatsAppButton
          phoneNumber="5548984695233"
          className=" fixed bottom-8 right-10 z-50 shadow-lg"
          message="Olá, gostaria de agendar um horário para atendimento!."
        />
      </body>
    </html>
  );
}
