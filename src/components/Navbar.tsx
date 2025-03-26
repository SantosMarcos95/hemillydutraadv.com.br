"use client";

import { useState } from "react";
import {
  ChevronDown,
  Menu,
  Phone,
  Mail,
  MapPin,
  Scale,
  Book,
  Home,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { WhatsAppButton } from "./WhatsAppButton";

export function MobileMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0  bg-black bg-opacity-50  text-white border-b border-gray-400/20 z-50">
      <div className="container mx-auto">
        {/* Header Content */}

        <div className=" flex items-center justify-between">

          <div className="text-sm font-semibold text-gray-100">
            Dra. Hemilly Dutra
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-100"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Menu className="h-6 w-6 mr-2" />
            <span>Menu</span>
            <ChevronDown
              className={`h-4 w-4 ml-2 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        {/* Expandable Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <nav className="px-4 pb-4 grid gap-4">
            <a
              href="/"
              className="flex items-center gap-3 text-gray-300 hover:text-gray-200"
            >
              <Home className="h-5 w-5" />
              <span>Início</span>
            </a>
            <a

              // href="/sobre"
              className="flex items-center gap-3 text-gray-300 hover:text-gray-200"
            >
              <Book className="h-5 w-5" />
              <span>Sobre</span>
            </a>
            <a
              // href="/areasatuacao"
              className="flex items-center gap-3 text-gray-300 hover:text-gray-200"
            >
              <Scale className="h-5 w-5" />
              <span>Áreas de Atuação</span>

            </a>
            <a
              // href="/equipe"
              className="flex items-center gap-3 text-gray-300 hover:text-gray-200"
            >
              <Users className="h-5 w-5" />
              <span>Equipe</span>
            </a>
            <a
              // href="/googlereviews"
              className="flex items-center gap-3 text-gray-300 hover:text-gray-200"
            >
              <Star className="h-5 w-5" />
              <span>Avaliações</span>
            </a>
            <Separator className="my-2 bg-gray-600/20" />
            <div className="grid gap-4 text-sm text-gray-400">
              <a
                href="https://wa.me/5548984695233?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20atendimento!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                {/* Ícone de telefone */}
                <Phone className="h-4 w-4" />
                <span>Telefone de Contato</span>
              </a>

              <a
                href="mailto:contato@exemplo.com"
                className="flex items-center gap-3"
              >
                <Mail className="h-4 w-4" />
                <span>hemillyfatimaadv@gmail.com</span>
              </a>
              <a
                // href="https://www.google.com/maps?rlz=1C1FKPE_enBR1145BR1145&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyDwgCEC4YDRivARjHARiABDIJCAMQABgNGIAEMg8IBBAuGA0YrwEYxwEYgAQyCQgFEAAYDRiABDIPCAYQLhgNGK8BGMcBGIAEMgkIBxAAGA0YgAQyCAgIEAAYDRge0gEINTM2N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kfvoh16wNSeVMbuUdG2IeoVN&daddr=R.+Pref.+Ari+Wagner,+148+-+Centro,+Palho%C3%A7a+-+SC,+88130-070https://www.google.com.br/maps/place/R.+Pref.+Ari+Wagner,+148+-+Centro,+Palho%C3%A7a+-+SC,+88130-070/@-27.6438899,-48.6691743,17z/data=!3m1!4b1!4m6!3m5!1s0x952735b05e4c2c05:0x123cfff44bbc547b!8m2!3d-27.6438899!4d-48.6665994!16s%2Fg%2F11cnddhjqz?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                className="flex items-center gap-3"
              >
                <MapPin className="h-4 w-4" />
                <span>Nossa Localização</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
