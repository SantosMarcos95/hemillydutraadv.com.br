"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const areas = [
  {
    titulo: "Direito Civil",
    descricao:
      "Contratos, responsabilidade civil, direito de família e sucessões.",
  },
  {
    titulo: "Direito Trabalhista",
    descricao:
      "Relações de trabalho, direitos do trabalhador e negociações sindicais.",
  },
  {
    titulo: "Direito Empresarial",
    descricao:
      "Constituição de empresas, contratos comerciais e recuperação judicial.",
  },
  {
    titulo: "Direito Previdenciário",
    descricao:
      "Consultoria e assessoria para obtenção de benefícios previdenciários, revisão de aposentadorias e planejamento previdenciário.",
  },
];

function AreaCard({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg  ">
      <BackgroundGradient>
        <Card className=" rounded-3xl bg-zinc-600 text-gray-100 h-[200px] overflow-hidden ">
          <CardHeader>
            <CardTitle>{titulo}</CardTitle>
          </CardHeader>
          <CardContent className="h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
            <p>{descricao}</p>
          </CardContent>
        </Card>
      </BackgroundGradient>
    </div>
  );
}

export default function AreasAtuacao() {
  return (
    <section
      id="areas"
      className="min-h-screen flex items-center justify-center bg-zinc-700 py-12 px-4 sm:px-6 lg:px-8 "
    >
      <div className="max-w-7xl mx-auto ">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl mb-32 mt-8 "
        >
          Áreas de Atuação
        </motion.h1>

        <div className="grid lg:grid-cols-4 gap-6  ">
          {areas.map((area, index) => (
            <motion.div
              key={area.titulo}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=""
            >
              <AreaCard titulo={area.titulo} descricao={area.descricao} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
