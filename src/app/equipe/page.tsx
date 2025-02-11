"use client";
import { motion } from "framer-motion";
import Image from "next/image";


import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading-screen";


const equipe = [
  {
    nome: "Dra. July Bublitz",
    cargo: "Advogada Sênior | CEO | Founder",


    foto: "https://drive.google.com/uc?export=view&id=1VUMHQjFszSpBHnjiNOoBYQYMt5HRN10j",

  },
  {
    nome: "Dra. Aline",
    cargo: "Advogado Sênior | Coordenadora Geral",


    foto: "https://drive.google.com/uc?export=view&id=1ojp5WP-VIVc0Wo5IFfA_MMPWBDmcTt6c",

  },

  {
    nome: "Dra. Mallu",
    cargo: "Advogada Pleno | Coordenadora Previdenciário",


    foto: "https://drive.google.com/uc?export=view&id=1uUGLVFglJyri_z-jmaDDYheOVGGZ3zmD",

  },
];

export default function Equipe() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(false); // Após o tempo, o estado de loading é alterado para false
    };
    loadData();
  }, []);

  if (loading) {
    // Exibe um indicador de carregamento até a página estar pronta
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <LoadingScreen />
        {/* Substitua isso por um spinner ou algo do tipo */}
      </div>
    );
  }
  return (
    <section
      id="equipe"
      className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10">
        <Image
          src="https://drive.google.com/uc?export=view&id=11_w5wP1bzD0WGr7uK3P1IbbTIqXP2slT"
          alt="Background"
          layout="fill"
          style={{ objectFit: "cover" }}
          quality={100}
          className="z-0 blur-sm"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}

          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl mb-20 mt-8"
        >
          Equipe
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

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
                  width={200}
                  height={200}

                  className="mx-auto rounded-3xl hover:opacity-90 transition-opacity duration-300"
                />
              </BackgroundGradient>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200">
                {membro.nome}
              </h3>
              <p className="text-gray-300">{membro.cargo}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
