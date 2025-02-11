"use client";
import { useState, useEffect } from "react";

import LoadingScreen from "@/components/loading-screen";
import Hero from "@/app/hero";

export default function Home() {
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
    <main className="relative font-serif">
      <Hero />{" "}
      {/* O conteúdo da sua página, exibido quando 'loading' for false */}
    </main>
  );

}
