import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-zinc-700 text-gray-300  ">
      <div className="container p-2 flex justify-center items-center gap-4">
        <div className="flex items-center mb-1">
          <Scale className="h-6 w-6 " />
        </div>
        <p className="">OAB/SC 70150</p>
        <p>
          &copy; {new Date().getFullYear()} Dra. Hemilly Dultra. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
