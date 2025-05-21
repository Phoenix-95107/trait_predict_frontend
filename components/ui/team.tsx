"use client";
import { useState } from "react";
import Member from "@/components/member";

export default function Team() {
  const members = [
    {
      name: "Maya Khoury",
      role: "Saas Sales Director",
      title: "Game-changer for my team",
      description:
        "The Team Snapshot uncovered strenghts we were blind to. Sales jumped 18% after we rearranged roles.",
      image: "/ellipse-1818-1.svg",
    },
    {
      name: "Omar S.",
      role: "HR Lead",
      title: "My partner finally gets me",
      description:
        "The Partner Match report explained our communication gaps in plain English. Best $27 I've spent on our relationship.",
      image: "/ellipse-1818-2.svg",
    },
    {
      name: "James L.",
      role: "Product Designer",
      title: "Instant self-awareness boost",
      description:
        "The free snapshot nailed my creativity streak. I upgraded and the Action Plan became my 90-day roadmap.",
      image: "/ellipse-1818-3.svg",
    },
    {
      name: "Aisha M.",
      role: "University Student",
      title: "Accuracy shocked me",
      description:
        "Video scan nailed my micro-expressions and why I shut down under stress—spot on at 86 % confidence.",
      image: "/ellipse-1818-4.svg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const memberPerPage = 3;
  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, members.length - memberPerPage)
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  const visibleMembers = members.slice(
    currentIndex,
    currentIndex + memberPerPage
  );
  return (
    <>
      <div className="flex justify-between items-baseline mt-20 flex-shrink-0">
        <p className="text-[42px] font-bold">What Early Users Are Saying</p>
        <p className="text-lg">
          Unfiltered reactions from people who put Faraseh to the test-proof
          that a few selfies can change how you see yourself and others.
        </p>
      </div>
      <div className="relative mt-12">
        {/* Members Carousel */}
        <div className="flex justify-center gap-10">
          {visibleMembers.map((member) => (
            <Member
              key={member.name}
              name={member.name}
              role={member.role}
              title={member.title}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end items-center mt-20">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex justify-center items-center -translate-y-1/2 p-2 w-12 h-12 bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99995 13L2 6.99995L8 1"
                stroke="#27272A"
                strokeWidth="1.5"
                strokeMiterlimit="16"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= members.length - memberPerPage}
            className="flex justify-center items-center h-12 w-12 -translate-y-1/2 p-2 bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00005 1L7 7.00005L1 13"
                stroke="#27272A"
                strokeWidth="1.5"
                strokeMiterlimit="16"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
