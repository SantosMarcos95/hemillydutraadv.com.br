"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ExpandableCardDemo from "@/components/ui/expandable-card-demo-grid";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading-screen";

const areas = [
  {
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, direito de família e sucessões.",
    src: "https://drive.google.com/uc?export=view&id=1wF0ThpckYtyLgqZMAXVOmMAe8Xydhj0B",
    ctaText: "Saiba mais",
    ctaLink: "#", // Defina o link de chamada para ação
    content: () => (
      <p>
        O Direito Civil abrange uma série de questões legais, como contratos,
        responsabilidade civil, e direito de família. Ele é a base para a
        regulamentação da vida cotidiana das pessoas.
      </p>
    ),
    image: () => (
      <Image
        priority
        width={200}
        height={200}
        quality={100} // Qualidade máxima
        src="https://drive.google.com/uc?export=view&id=1wF0ThpckYtyLgqZMAXVOmMAe8Xydhj0B"
        alt="Direito Civil"
      />
    ),
  },
  {
    title: "Direito Trabalhista",
    description:
      "Relações de trabalho, direitos do trabalhador e negociações sindicais.",
    src: "https://drive.google.com/uc?export=view&id=1GmSSKWL97iSmGfIz2KH7jOVTqXjYwORR", // Imagem de exemplo, substitua conforme necessário
    ctaText: "Saiba mais",
    ctaLink: "#", // Defina o link de chamada para ação
    content: () => (
      <p>
        O Direito Trabalhista trata das relações entre empregados e
        empregadores, abrangendo questões de direitos trabalhistas, negociações
        sindicais, e soluções de conflitos no ambiente de trabalho.
      </p>
    ),

    image: () => (
      <Image
        priority
        width={200}
        height={200}
        quality={100} // Qualidade máxima
        src="https://drive.google.com/uc?export=view&id=1GmSSKWL97iSmGfIz2KH7jOVTqXjYwORR"
        alt="Direito Trabalhista"
      />
    ),
  },
  {
    title: "Direito Empresarial",
    description: "Constituição de empresas, contratos comerciais.",
    src: "https://drive.google.com/uc?export=view&id=1syCnPJ664eibDeDg-xzdM4Dyspq2D40L", // Imagem de exemplo, substitua conforme necessário
    ctaText: "Saiba mais",
    ctaLink: "#", // Defina o link de chamada para ação
    content: () => (
      <p>
        O Direito Empresarial regula a constituição, funcionamento e extinção de
        empresas, além de tratar de contratos comerciais e a proteção de marcas
        e patentes.
      </p>
    ),
    image: () => (
      <Image
        priority
        width={200}
        height={200}
        quality={100} // Qualidade máxima
        src="https://drive.google.com/uc?export=view&id=1syCnPJ664eibDeDg-xzdM4Dyspq2D40L"
        alt="Direito Trabalhista"
      />
    ),
  },
  {
    title: "Direito Previdenciário",
    content: () => (
      <p>
        O Direito Previdenciário aborda questões relacionadas a benefícios de
        aposentadoria, pensões, revisões e planejamento de aposentadoria, para
        garantir os direitos dos trabalhadores no sistema previdenciário.
      </p>
    ),
    description:
      "Consultoria e assessoria para obtenção de benefícios previdenciários, revisão de aposentadorias e planejamento previdenciário.",
    src: "https://drive.google.com/uc?export=view&id=12KLxo_l3-t9k2xJqQjzXMXBcBBHLO0_M", // Imagem de exemplo, substitua conforme necessário
    ctaText: "Saiba mais",
    ctaLink: "#", // Defina o link de chamada para ação
    image: () => (
      <Image
        priority
        width={200}
        height={200}
        quality={100} // Qualidade máxima
        src="https://drive.google.com/uc?export=view&id=12KLxo_l3-t9k2xJqQjzXMXBcBBHLO0_M"
        alt="Direito Trabalhista"
      />
    ),
  },
];

export default function AreasAtuacao() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <LoadingScreen />
      </div>
    );
  }
  return (
    <section
      id="areas"
      className="relative max-h-screen flex items-center w-full py-16 sm:py-24 "
      aria-labelledby="areas-title"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://drive.google.com/uc?export=view&id=1u39EE3GOegTIiV0lAh5laZB9LlKveV6z"
          alt="Fundo representando áreas de atuação jurídica"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </motion.div>

      <div className="max-h-screen md:w-1/2 mb-8 md:mb-0 p-10 ">
        <ExpandableCardDemo cards={areas} />
      </div>
    </section>
  );
}
