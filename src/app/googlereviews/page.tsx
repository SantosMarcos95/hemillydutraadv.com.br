"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import qrcode from "../../../public/qrcode.png";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading-screen";

const items = [
  {
    name: "Ana Caroline de Souza",
    rating: 5,
    comment:
      "Atendimento excelente, principalmente da Hemilly, que se mostrou uma profissional incrível e muito dedicada!",
  },
  {
    name: "Roselei Ragazzon",
    rating: 5,
    comment:
      "Contratar este escritório foi a melhor decisão que tomei. Além do suporte excepcional, eles conseguiram um resultado muito além do que eu esperava. A equipe é extremamente eficiente e ágil, sempre priorizando os interesses do cliente. Altamente recomendável!",
  },
  {
    name: "Fernando Santana Lima",
    rating: 5,
    comment:
      "Desde o primeiro contato, percebi o profissionalismo e a eficácia. Recomendo com confiança!",
  },
];

export default function GoogleReviews() {
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
      id="avaliacoes"
      className=" relative  min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <Image
        src="https://drive.google.com/uc?export=view&id=1qvaLw2AydS4rGwCg4AVjvLunaQMms91U"
        alt="Background"
        layout="fill"
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0 blur-sm"
      />
      <div className="flex flex-col content-center z-10 max-w-7xl">
        <div className="bg-black/50 bg-gradient-to-br from-zinc-800 to-zinc-800 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl mb-32 mt-8">
          O que nossos clientes dizem
        </div>
        <div className="grid grid-cols-1 content-center md:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <Card key={index} className=" bg-black bg-opacity-50 text-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < item.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <img
                    src="/google-logo.svg"
                    alt="Google Logo"
                    className="w-6 h-6"
                  />
                </div>
                <p className="text-sm">{item.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <div className="flex flex-col items-center">
            <HoverBorderGradient>
              <a href="https://www.google.com/search?q=escritorio+bublitz&rlz=1C1FKPE_pt-PTBR1108BR1108&oq=escritorio+bubl&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCggEEAAYgAQYogQyCggFEAAYogQYiQUyCggGEAAYogQYiQUyCggHEAAYgAQYogQyCggIEAAYgAQYogTSAQg0MjE1ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#">
                <p>Escaneie o QR Code ou clique aqui para ver mais!</p>
              </a>
            </HoverBorderGradient>
            <ChevronDown className="mt-2 animate-bounce" size={32} />
            <Image
              src={qrcode}
              alt="QR Code para avaliações do Google"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
