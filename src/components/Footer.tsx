import { Scale } from "lucide-react";
export const data = {
  oab: "OAB/SC 70.150",
  title: "Dra. Hemilly Dutra. Todos os direitos reservados.",
};
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50  flex justify-center items-center bg-black bg-opacity-50 text-gray-300  ">
      <div className="container flex justify-center items-center gap-4 text-xs">
        <div className="flex items-center mb-1">
          <Scale className="h-6 w-6 " />
        </div>
        <p>{data.oab}</p>
        <p>
          &copy; {new Date().getFullYear()} {data.title}
        </p>
      </div>
    </footer>
  );
}
