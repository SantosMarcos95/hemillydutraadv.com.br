"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Scale } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-700 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scale className="h-6 w-6" />
          <span className="text-xl font-bold">Dra. Hemilly Dultra</span>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Abrir menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="#sobre"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#areas"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Áreas de Atuação
              </a>
              <a
                href="#equipe"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Equipe
              </a>
              <a
                href="#avaliacoes"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Avaliações
              </a>
              <a
                href="#contato"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex space-x-4">
          <a href="#sobre" className="text-gray-300 hover:text-white">
            Sobre
          </a>
          <a href="#areas" className="text-gray-300 hover:text-white">
            Áreas de Atuação
          </a>
          <a href="#equipe" className="text-gray-300 hover:text-white">
            Equipe
          </a>
          <a href="#avaliacoes" className="text-gray-300 hover:text-white">
            Avaliações
          </a>
          <a href="#contato" className="text-gray-300 hover:text-white">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
