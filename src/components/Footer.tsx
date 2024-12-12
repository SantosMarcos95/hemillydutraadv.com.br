import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-zinc-700 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center mb-1">
          <Scale className="h-6 w-6 mr-2" />
          <span className="text-xl font-bold">Dra. Hemilly Dultra</span>
        </div>
        <p className="mb-1">OAB/SC 70150</p>
        <p>
          &copy; {new Date().getFullYear()} Dra. Hemilly Dultra. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
