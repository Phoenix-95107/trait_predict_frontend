"use client";

import { useEffect, useRef, useState } from "react";
import FlowCard from "@/components/card2"; // Make sure the import path is correct

interface FlowItem {
  personality: string;
  image: string;
  description: {
    name: string;
    description: string;
    state: string;
  };
}

interface FlowAnimationProps {
  items: FlowItem[];
}

export default function FlowAnimation({ items }: FlowAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Store interval reference

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!container) return;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1; // Smooth speed
      }
    };

    // Start scrolling when not hovered
    if (!hovered) {
      intervalRef.current = setInterval(scroll, 30);
    }

    // Cleanup or stop on hover
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered]); // Triggers on hover change

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-hidden whitespace-nowrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Repeat items for smooth infinite scrolling */}
      {Array(4)
        .fill(items)
        .flat()
        .map((item, index) => (
          <div key={index} className="inline-block mx-4">
            <FlowCard
              personality={item.personality}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
    </div>
  );
}
