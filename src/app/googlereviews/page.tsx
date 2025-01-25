import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import backgorund from "../../../public/background/backgroundEquipe.jpeg";
import qrcode from "../../../public/qrcode.png";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const reviews = [
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
  return (
    <section
      id="avaliacoes"
      className=" relative  min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <Image
        src={backgorund}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 blur-sm"
      />
      <div className="z-10 max-w-7xl mx-auto">
        <div className="bg-black/50 bg-gradient-to-br from-slate-300 to-slate-300 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl mb-32 mt-8">
          O que nossos clientes dizem
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className=" bg-black bg-opacity-50 text-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
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
                <p className="text-sm">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <HoverBorderGradient>
            <a href="https://www.google.com/search?q=escritorio+bublitz&rlz=1C1FKPE_pt-PTBR1108BR1108&oq=escritorio+bubl&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCggEEAAYgAQYogQyCggFEAAYogQYiQUyCggGEAAYogQYiQUyCggHEAAYgAQYogQyCggIEAAYgAQYogTSAQg0MjE1ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#">
              Escaneie o QR Code ou clique aqui para ver mais
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
    </section>
  );
}
