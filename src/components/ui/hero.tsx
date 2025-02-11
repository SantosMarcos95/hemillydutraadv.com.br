import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";
import backgroundHero from "../../../public/background/backgroundHero.jpeg";

export default function Hero() {
  return (
    <main className=" min-h-screen flex items-center justify-center">
      <Image
        src={backgroundHero}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="z-10  flex flex-col items-center text-center rounded-3xl dark:text-white bg-black bg-opacity-50 md:w-1/2 p-8 space-y-8 backdrop-blur-sm">
        <h1 className="mb-4 text-4xl font-bold">
          Confiança e Experiência Jurídica ao Seu Lado
        </h1>
        <TextGenerateEffect
          words="Sou a Dra. Hemilly Dutra, Advogada Especialista em Direito e Processo do Trabalho, dedicada a oferecer soluções jurídicas personalizadas. Meu comprometimento é proteger seus direitos e trabalhar incansavelmente para alcançar os melhores resultados para você. Juntos, transformaremos desafios legais em soluções eficazes."
          className="text-center font-medium"
          duration={2}
        />
        <HoverBorderGradient
          phoneNumber="5548984695233"
          message="Olá, gostaria de agendar um horário para atendimento!."
        >
          Relate Seu Problema
        </HoverBorderGradient>
        {/* <div className="flex flex-col items-center text-lg hover:text-gray-200 transition-colors duration-300 mt-8">
          Saiba mais
          <ChevronDown className="mt-2 animate-bounce" size={32} />
        </div> */}
      </div>
    </main>
  );
}
