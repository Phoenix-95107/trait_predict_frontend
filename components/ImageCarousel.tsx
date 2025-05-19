"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  width?: number;
  height?: number;
}

export default function ImageCarousel({
  images,
  width = 541,
  height = 636,
}: ImageCarouselProps) {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the first column
    const column1Animation = () => {
      if (!column1Ref.current) return;

      if (column1Ref.current.scrollTop >= column1Ref.current.scrollHeight / 2) {
        column1Ref.current.scrollTop = 0;
      } else {
        column1Ref.current.scrollTop += 1;
      }
    };

    // Animation for the second column
    const column2Animation = () => {
      if (!column2Ref.current) return;

      if (column2Ref.current.scrollTop >= column2Ref.current.scrollHeight / 2) {
        column2Ref.current.scrollTop = 0;
      } else {
        column2Ref.current.scrollTop += 1;
      }
    };

    const interval1 = setInterval(column1Animation, 20);
    const interval2 = setInterval(column2Animation, 20);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  // Split images into two columns
  const firstHalf = images.slice(0, Math.ceil(images.length / 2));
  const secondHalf = images.slice(Math.ceil(images.length / 2));

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Gradient overlay at the top */}
      <div
        className="absolute top-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FFF 12.98%, rgba(255, 255, 255, 0.90) 33.17%, rgba(255, 255, 255, 0.00) 76.92%)",
        }}
      ></div>

      {/* Gradient overlay at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, #FFF 12.98%, rgba(255, 255, 255, 0.90) 33.17%, rgba(255, 255, 255, 0.00) 76.92%)",
        }}
      ></div>

      <div className="flex h-full gap-5">
        {/* First column */}
        <div
          ref={column1Ref}
          className="flex-1 overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-col gap-5 pb-5">
            {/* Duplicate images for seamless looping */}
            {firstHalf.map((src, index) => (
              <div
                key={`col1-${index}`}
                className="w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  width={width / 2 - 10}
                  height={width / 2 - 10}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for infinite scrolling */}
            {firstHalf.map((src, index) => (
              <div
                key={`col1-dup-${index}`}
                className="w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  width={width / 2 - 10}
                  height={width / 2 - 10}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second column */}
        <div
          ref={column2Ref}
          className="flex-1 overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-col gap-5 pb-5">
            {secondHalf.map((src, index) => (
              <div
                key={`col2-${index}`}
                className="w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1 + firstHalf.length}`}
                  width={width / 2 - 10}
                  height={width / 2 - 10}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for infinite scrolling */}
            {secondHalf.map((src, index) => (
              <div
                key={`col2-dup-${index}`}
                className="w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1 + firstHalf.length}`}
                  width={width / 2 - 10}
                  height={width / 2 - 10}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
