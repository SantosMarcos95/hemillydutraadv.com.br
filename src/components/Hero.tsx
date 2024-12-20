import Image from "next/image";

import draHemilly from "../../public/dra-hemilly.jpeg";
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

export default function Hero({ description }: HeroProps) {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8 mt-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative  rounded-3xl  shadow-lg mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
            <BackgroundGradient>
              <Image
                src={draHemilly}
                alt="Dra. Hemilly"
                width={400}
                height={400}
                className="shadow-lg mx-auto rounded-3xl "
              />
            </BackgroundGradient>
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left p-4">
            <h1 className="text-4xl font-bold mb-2">{description.name}</h1>
            <h2 className="text-2xl text-gray-400 mb-4">
              {description.subtitle}
            </h2>
            <p className="text-lg mb-4">{description.text1}</p>
            <p className="text-lg mb-6">{description.text2}</p>
            <p className="text-xl font-semibold">{description.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
