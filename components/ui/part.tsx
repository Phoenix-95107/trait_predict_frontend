'use client';
import Image from "next/image";
import { useState } from "react";

export default function Part() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const list = [
    {
      title: "Personality Snapshot",
      image: "/section_1.png",
    },
    {
      title: "Trait Scores Dashboard",
      image: "/section_2.png",
    },
    {
      title: "Relationship Compatibility Clues",
      image: "/section_3.png",
    },
    {
      title: "Facial Feature Breakdown",
      image: "/section_4.png",
    },
    {
      title: "Big-Five Personality Mapping",
      image: "/section_5.png",
    },
    {
      title: "ArabicEmotional Expression Spectrum",
      image: "/section_6.png",
    },
    {
      title: "SOcial Energy Index",
      image: "/section_7.png",
    },
    {
      title: "Cultural ANcient Arabic Interpretation",
      image: "/section_8.png",
    },
    {
      title: "Professional Persna Fit",
      image: "/section_9.png",
    },
    {
      title: "Action Plan & Growth Tracker",
      image: "/section_10.png",
    },
  ];
  return (
    <>
      <div className="mt-9 ">
        <div className="flex justify-between items-start gap-14 min-gap-10">
          <p className="text-[42px] font-bold leading-tight">
            Decode the You Within
          </p>
          <p className="max-w-[670px] text-xl leading-[30px]">
            Discover the truth behind your traits-powered by facial signals,
            psychological mapping, and real-time expression analysis. These five
            features form the foundation of your inner personality as revealed
            through science and micro-behavioral cues.
          </p>
        </div>
        <div className="flex justify-between mt-14">
          <div>
            <ul className="space-y-4">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="group text-[#ccc] text-3xl font-extrabold hover:text-black cursor-pointer transition-colors duration-300"
                  onMouseEnter={() => setActiveImage(item.image)}
                  onMouseLeave={() => setActiveImage(null)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="w-[500px] h-[562px] relative bg-gray-100 rounded-[41px] overflow-hidden">
              {activeImage && (
                <Image
                  src={activeImage}
                  alt="Active feature preview"
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
