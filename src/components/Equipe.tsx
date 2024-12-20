"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import draAline from "../../public/dra-aline.webp";
import draJully from "../../public/dra-jully.webp";
import draMallu from "../../public/dra-mallu.webp";
import { BackgroundGradient } from "./ui/background-gradient";

const equipe = [
  {
    nome: "Dra. Jully Bublitz",
    cargo: "Advogada Sênior | CEO | Founder",
    foto: draJully,
  },
  {
    nome: "Dra. Aline",
    cargo: "Advogado Sênior | Coordenadora Geral",
    foto: draAline,
  },

  {
    nome: "Dra. Mallu",
    cargo: "Advogada Pleno | Coordenadora Previdenciário",
    foto: draMallu,
  },
];

export default function Equipe() {
  return (
    <section
      id="equipe"
      className="min-h-screen flex items-center justify-center bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8 "
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl mb-8 mt-8 "
        >
          Equipe:
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {equipe.map((membro, index) => (
            <motion.div
              key={membro.nome}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center rounded-3xl shadow-lg mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <BackgroundGradient>
                <Image
                  src={membro.foto}
                  alt={membro.nome}
                  width={400}
                  height={400}
                  className=" mx-auto rounded-3xl hover:opacity-90 transition-opacity duration-300"
                />
              </BackgroundGradient>
              <h3 className="text-xl font-semibold mt-4 mb-2 ">
                {membro.nome}
              </h3>
              <p className="text-gray-400">{membro.cargo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
