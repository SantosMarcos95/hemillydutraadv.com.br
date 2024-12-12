"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import iconswhats from "../../public/icons8-whatsapp.svg";

interface WhatsAppButtonProps {
  phoneNumber: string;
  personName?: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  personName,
  message = "",
  className = "",
}: WhatsAppButtonProps) {
  const [clicked, setClicked] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    setClicked(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={`bg-green-500 hover:bg-green-600 rounded-full h-16 w-16 p-2 ${className}`}
      onClick={handleClick}
    >
      <Image src={iconswhats} alt="WhatsApp Logo " />

      <span className="sr-only">Contato via WhatsApp</span>
    </Button>
  );
}
