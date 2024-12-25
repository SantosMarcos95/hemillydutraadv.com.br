import Image from "next/image";
import backgroundSobre from "../../public/backgroundSobre.jpg";
import draHemilly from "../../public/dra-hemilly.jpeg";
import { BackgroundGradient } from "./ui/background-gradient";
import { Meteors } from "./ui/meteors";
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
      className="relative min-h-screen flex items-center justify-center "
    >
      <div className="flex justify-between ">
        <Image
          src={backgroundSobre}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        <div className="">
          <div className="relative rounded-3xl shadow-lg mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
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
          <div className="flex relative bg-black text-white text-center justify-center  rounded-3xl-">
            <div className=" absolute inset-0 flex items-center justify-center ">
              <Meteors number={30} className="bg-center" />
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12 text-center md:text-left w-[100%] p-4 z-10">
              <h1 className="text-4xl font-bold mb-2 text-center">
                {description.name}
              </h1>
              <h2 className="text-2xl text-gray-400 mb-4 text-center">
                {description.subtitle}
              </h2>
              <p className="text-lg mb-4 w-[100%] ">{description.text1}</p>
              <p className="text-lg mb-6 w-[100%]">{description.text2}</p>
              <p className="text-xl font-semibold w-[100%] ">
                {description.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
