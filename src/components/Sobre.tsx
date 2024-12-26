import Image from "next/image";
import draHemilly from "../../public/advogadas/dra-hemilly.jpeg";
import { BackgroundGradient } from "./ui/background-gradient";

interface HeroProps {
  description: {
    name: string;
    subtitle: string;
    text1: string;
    text2: string;
    footer: string;
  };
}

export default function Sobre({ description }: HeroProps) {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex items-center justify-center w-full"
    >
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full p-4 lg:p-10 bg-zinc-700">
        <div className="flex-shrink-0 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105">
          <BackgroundGradient>
            <Image
              src={draHemilly}
              alt="Dra. Hemilly"
              width={300}
              height={300}
              className="shadow-lg mx-auto rounded-3xl"
              priority
            />
          </BackgroundGradient>
        </div>

        <div className="flex flex-col w-full lg:w-[40%] bg-black text-white rounded-3xl p-6 lg:p-8">
          <div className="flex flex-col text-center lg:text-left gap-6">
            <h1 className="text-3xl lg:text-4xl font-bold">
              {description.name}
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-400">
              {description.subtitle}
            </h2>
            <p className="text-base lg:text-lg">{description.text1}</p>
            <p className="text-base lg:text-lg">{description.text2}</p>
            <p className="text-lg lg:text-2xl text-gray-400">
              {description.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
