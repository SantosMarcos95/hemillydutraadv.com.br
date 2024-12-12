"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    <Card className=" bg-zinc-600 text-gray-100 h-[200px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
      </CardHeader>
      <CardContent className="h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
        <p>{descricao}</p>
      </CardContent>
    </Card>
  );
}

export default function AreasAtuacao() {
  return (
    <section
      id="areas"
      className="min-h-screen flex items-center justify-center bg-zinc-700 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-40 text-center text-gray-100">
          Áreas de Atuação:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.titulo}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AreaCard titulo={area.titulo} descricao={area.descricao} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
