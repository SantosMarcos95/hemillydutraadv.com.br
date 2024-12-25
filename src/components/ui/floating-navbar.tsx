"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      if (previous !== undefined) {
        const direction = current - previous;

        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          setVisible(direction < 0);
        }
      } else {
        // Opcional: Adicione um comportamento padrão caso `previous` seja undefined
        setVisible(false);
      }
      // setVisible(scrollYProgress.get() >= 0.05 && previous < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] space-x-4",
          "border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg pr-2 pl-8 py-2 items-center justify-center",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
          >
            {navItem.name}
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
