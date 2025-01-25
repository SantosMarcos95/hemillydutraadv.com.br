import Image from "next/image";
import draHemilly from "../../../public/advogadas/dra-hemilly.jpeg";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const description = {
  name: "Dra. Hemilly",
  subtitle: "Advogada | Advocacia Bublitz",
  text1:
    "A Dra. Hemilly Dutra faz parte da Advocacia Bublitz, um escritório com mais de 12 anos de experiência nas áreas Trabalhista, Civil, Previdenciária e Empresarial.",
  text2:
    "Comprometida com a ética e resultados eficazes, oferece soluções jurídicas personalizadas, sempre focando na melhor defesa dos interesses de seus clientes.",
  footer: "Advocacia Bublitz – Confiança e Resultados",
};

export default function Sobre() {
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

        <div className="flex flex-col w-full lg:w-[40%] bg-black bg-opacity-50 text-white rounded-3xl p-6 lg:p-8">
          <div className="flex flex-col text-center lg:text-left gap-6">
            <h1 className="text-3xl lg:text-4xl font-bold">
              {description.name || "Nome Não Fornecido"}
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
