"use client";

import Image from "next/image";
import { useState } from "react";

export default function FlowCard({
  personality,
  image,
  description,
}: {
  personality: string;
  image: string;
  description: {
    name: string;
    description: string;
    state: string;
  };
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[260px] h-[420px] rounded-lg overflow-hidden shadow-lg bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={description.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Personality Tag */}
      <div className="absolute top-4 left-4 z-20">
        <p className="text-xs text-white">Personality:</p>
        <p className="text-lg text-white font-semibold">{personality}</p>
      </div>

      {/* Description Panel */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 px-[18px] transition-all duration-300 overflow-hidden ${
          isHovered ? "max-h-[80%] bg-black/80 pt-3" : "max-h-[60px]"
        }`}
      >
        {/* Name & State */}
        <div className="flex items-start justify-between mb-2">
          <p className="text-white text-xl font-bold leading-tight text-wrap">
            {description.name}
          </p>
          <Image
            src={description.state}
            alt="state"
            width={88}
            height={88}
            className="object-contain"
          />
        </div>

        {/* Description - only shows fully when hovered */}
        <div
          className={`text-white text-sm transition-opacity duration-300 ${
            isHovered ? "opacity-100 -mt-10" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          <p className="mb-3 text-sm text-wrap">{description.description}</p>
          <div className="flex items-center justify-end gap-4 mb-3">
            <p className="text-base font-bold">View Profile</p>
            <div className="w-[45px] h-[45px] bg-gradient-to-l from-primary to-secondary rounded-full flex items-center justify-center">
              <Image
                src="/arrow-right-4.svg"
                alt="arrow"
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
