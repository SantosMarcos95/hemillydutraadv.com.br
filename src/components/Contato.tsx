import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Mail, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <section
      id="contato"
      className="min-h-screen flex items-center justify-center  bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full mx-auto p-">
        <h2 className="text-3xl font-bold mb-52 text-center text-gray-100">
          Entre em Contato:
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Informações de Contato:
            </h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <MapPin className="mr-2 flex-shrink-0" />
                <span>Rua Pref. Ari Wagner 148, Palhoça - SC, 88130-070</span>
              </p>
              <div className="flex items-center space-x-2">
                <WhatsAppButton
                  className="h-7 w-7"
                  phoneNumber="5548984695233"
                  message="Olá, gostaria de agendar um horário para atendimento!"
                />
                <span className="text-gray-300">(48) 98469-5233</span>
              </div>
              <p className="flex items-center text-gray-300">
                <Mail className="mr-2 flex-shrink-0" />
                <span>hemillyfatimaadv@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Localização:
            </h3>
            <div className="w-full aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.991006247199!2d-48.667891!3d-27.644544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737b76a8b1e85%3A0x90c9b7f2f2c7df0!2sR.%20Pref.%20Ari%20Wagner%2C%20148%20-%20Palho%C3%A7a%2C%20SC%2C%2088130-070!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
