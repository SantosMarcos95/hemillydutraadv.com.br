import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import qrcode from "../../public/qrcode.png";

const reviews = [
  {
    name: "Ana Caroline de Souza",
    rating: 5,
    comment:
      "Atendimento excelente, principalmente da Hemilly, que se mostrou uma profissional incrível e muito dedicada!",
  },
  {
    name: "Tainara Cristina Jordao",
    rating: 5,
    comment:
      "Equipe competente. Sempre fazendo o possível e o impossível pra conseguir atender os seus cliente, trazendo o resultado para os seus anseios.",
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
      className="min-h-screen flex items-center justify-center bg-zinc-700 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl mb-32 mt-8">
          O que nossos clientes dizem
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-zinc-600 text-gray-100">
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
          <p className="bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-2xl mb-4 mt-8">
            Escaneie para deixar sua avaliação
          </p>
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
