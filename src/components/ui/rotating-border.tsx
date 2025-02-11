"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface RotatingBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function RotatingBorder({
  children,
  className,
  ...props
}: RotatingBorderProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-white rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
