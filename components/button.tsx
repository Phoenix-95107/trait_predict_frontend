"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <Link
      href="/step_1"
      type={type}
      onClick={onClick}
      className={`
        relative px-6 py-2 rounded-full border border-[#D6D4D4] font-medium
        transition-all duration-300 overflow-hidden group
        hover:border-transparent
        ${className}
      `}
    >
      {/* Gradient background that appears on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-l from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content container */}
      <span className="relative flex items-center justify-center gap-2">
        {/* Button text - always centered */}
        <p className="translate-x-[10px] group-hover:translate-x-[-5px] transition-transform duration-300 text-sm font-semibold">
          {children}
        </p>
        {/* Arrow SVG that appears on hover */}
        <Image
          src="/submit.png"
          alt="submit"
          width={35}
          height={35}
          className="-mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </span>
    </Link>
  );
}
