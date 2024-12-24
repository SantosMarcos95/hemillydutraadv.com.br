import Image from "next/image";
import backgroundHero from "../../public/backgroundHero.jpg";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center "
    >
      <div className=" flex min-h-screen items-center justify-center ">
        <Image
          src={backgroundHero}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="z-10 flex flex-col items-center text-center text-white  md:w-1/2 md:pl-12 md:text-center p-4  ">
          <section className="min-h-screen flex flex-col items-center justify-center space-y-8 ">
            <h1 className="mb-4 text-4xl font-bold">
              Confiança e Experiência Jurídica ao Seu Lado
            </h1>
            <TextGenerateEffect
              words="Sou Dra. Hemilly Dutra, Advogada Pós Graduada, dedicada a
            oferecer soluções jurídicas personalizadas. Meu compromisso é
            proteger seus direitos e trabalhar incansavelmente para alcançar os
            melhores resultados para você. Juntos, transformaremos desafios
            legais em soluções eficazes."
              className="text-center  font-medium"
              duration={2}
              filter={false}
            />
            <HoverBorderGradient>Comece Sua Jornada</HoverBorderGradient>
          </section>
        </div>
      </div>
    </section>
  );
}
