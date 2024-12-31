import AreasAtuacao from "@/components/AreasAtuacao";
import Contato from "@/components/Contato";
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";

import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import "../app/globals.css";
import "./globals.css";

export default function Home() {
  return (
    <main className="relative font-serif">
      {/* <FloatingNav
        navItems={[
          { name: "Início", link: "#home" },
          { name: "Sobre", link: "#sobre" },
          { name: "Áreas", link: "#areas" },
          { name: "Equipe", link: "#equipe" },
          { name: "Avaliações", link: "#avaliacoes" },
          { name: "Contato", link: "#contato" },
        ]}
      /> */}
      <section id="home">
        <Hero />
      </section>
      <Sobre
        description={{
          name: "Dra. Hemilly",
          subtitle: "Advogada | Advocacia Bublitz",
          text1:
            "A Dra. Hemilly Dutra faz parte da Advocacia Bublitz, um escritório com mais de 12 anos de experiência nas áreas Trabalhista, Civil, Previdenciária e Empresarial.",
          text2:
            "Comprometida com a ética e resultados eficazes, oferece soluções jurídicas personalizadas, sempre focando na melhor defesa dos interesses de seus clientes.",
          footer: "Advocacia Bublitz – Confiança e Resultados",
        }}
      />

      <AreasAtuacao />
      <Equipe />
      <GoogleReviews />
      <Contato />
      <Footer />
    </main>
  );
}
