"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import draAline from "../../public/dra-aline.webp";
import draJully from "../../public/dra-jully.webp";
import draMallu from "../../public/dra-mallu.webp";

const equipe = [
  {
    nome: "Dra. Aline",
    cargo: "Advogado Sênior | Cordenadora Geral",
    foto: draAline,
  },
  {
    nome: "Dra. Jully Bublitz",
    cargo: "Advogada Sênior | Fundadora",
    foto: draJully,
  },

  {
    nome: "Dra. Mallu",
    cargo: "Advogada Pleno | Cordenadora Previdenciário",
    foto: draMallu,
  },
];

export default function Equipe() {
  return (
    <section
      id="equipe"
      className="min-h-screen flex items-center justify-center bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-40 text-center">
          Membros Escritório Bublitz:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipe.map((membro, index) => (
            <motion.div
              key={membro.nome}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <Image
                src={membro.foto}
                alt={membro.nome}
                width={300}
                height={300}
                className=" rounded-lg shadow-lg mx-auto transition-transform duration-300 ease-in-out hover:scale-105 mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">{membro.nome}</h3>
              <p className="text-gray-400">{membro.cargo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
