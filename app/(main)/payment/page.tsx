"use client";
import { useState } from "react";

export default function Payment() {
  const [selected, setSelected] = useState("full");
  const [partnerMatch, setPartnerMatch] = useState(false);
  const [videoScan, setVideoScan] = useState(false);

  // Helper for gradient border
  function CardWrapper({
    selected,
    children,
  }: {
    selected: boolean;
    children: React.ReactNode;
  }) {
    return selected ? (
      <div className="relative bg-gradient-to-l from-primary to-secondary p-[1px] rounded-xl">
        <div className="bg-white rounded-xl w-full h-full">{children}</div>
      </div>
    ) : (
      <div className="relative border border-transparent rounded-xl">
        {children}
      </div>
    );
  }

  // Custom Gradient Checkbox
  function GradientCheckbox({
    checked,
    onChange,
    label,
    id,
  }: {
    checked: boolean;
    onChange: (v: boolean) => void;
    label: string;
    id: string;
  }) {
    return (
      <label
        className="relative flex items-center cursor-pointer select-none"
        htmlFor={id}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer appearance-none w-5 h-5 rounded border-none outline-none focus:ring-0 focus:outline-none bg-white"
          style={{ display: "none" }}
        />
        <span
          className="w-5 h-5 rounded border bg-white flex items-center justify-center mr-2"
          style={{
            border: "1px solid",
            borderImage:
              "linear-gradient(135deg, var(--primary), var(--secondary)) 1",
          }}
        >
          {checked && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="pointer-events-none"
              fill="none"
            >
              <linearGradient
                id={`check-gradient-${id}`}
                x1="0"
                y1="0"
                x2="18"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--secondary)" />
              </linearGradient>
              <path
                d="M5 9.5L8 12.5L13 7.5"
                stroke="url(#check-gradient-${id})"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span className="text-sm">{label}</span>
      </label>
    );
  }

  return (
    <div className="min-h-[900px] w-full flex justify-center items-start mt-12 bg-gray-100">
      <div className="w-[755px] flex flex-col gap-6">
        {/* Full Insight Reports Card */}
        <CardWrapper selected={selected === "full"}>
          <div
            className="shadow-md p-6 flex flex-col gap-0 relative cursor-pointer rounded-xl"
            onClick={() => setSelected("full")}
          >
            {/* Radio at top-left */}
            <input
              type="radio"
              checked={selected === "full"}
              onChange={() => setSelected("full")}
              className="accent-[#FF77D7] w-6 h-6 absolute top-6 left-4 z-10"
              style={{ accentColor: "#FF77D7" }}
            />
            <div className="flex items-center ml-12 gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">
                    Full Insight Reports
                  </span>
                  <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    Recommended
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-8 mt-2 text-sm text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Detailed Scientific Proof</li>
                    <li>Strengths & Growth Areas</li>
                    <li>Full Trait Breakdown</li>
                    <li>Growth Action Planner</li>
                    <li>Compatibility Snapshot</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Relationships & Empathy</li>
                    <li>Unique Personality Story</li>
                    <li>Personality Badges Map</li>
                    <li>Famous Matches Reveal</li>
                  </ul>
                </div>
                {/* Divider */}
                <div className="border-t border-gray-200 my-4" />
                {/* Add-ons row */}
                <div className="flex items-center gap-6">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Add ons:
                  </span>
                  <GradientCheckbox
                    checked={partnerMatch}
                    onChange={(v) => setPartnerMatch(v)}
                    label="Partner Personality Match ($7)"
                    id="partner-match"
                  />
                  <GradientCheckbox
                    checked={videoScan}
                    onChange={(v) => setVideoScan(v)}
                    label="Video Scan for 15%+ accuracy ($7)"
                    id="video-scan"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end min-w-[80px]">
                <span className="text-2xl font-semibold">$26</span>
                <span className="text-xs text-gray-500">One-Time</span>
              </div>
            </div>
          </div>
        </CardWrapper>
        {/* Discovery Monthly Pass Card */}
        <CardWrapper selected={selected === "monthly"}>
          <div
            className="shadow p-6 flex items-center gap-4 relative cursor-pointer rounded-xl"
            onClick={() => setSelected("monthly")}
          >
            <input
              type="radio"
              checked={selected === "monthly"}
              onChange={() => setSelected("monthly")}
              className="accent-[#FF77D7] w-6 h-6 absolute top-6 left-4 z-10"
              style={{ accentColor: "#FF77D7" }}
            />
            <div className="flex-1 ml-12">
              <span className="text-lg font-semibold">
                Discovery Monthly Pass
              </span>
              <div className="text-sm text-gray-700 mt-1">
                Partner Personality Match
                <br />
                Video Scan Upgrade
                <br />
                Up to 7 Full Insight Reports Monthly
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[80px]">
              <span className="text-2xl font-semibold">
                $17<span className="text-base font-normal">/month</span>
              </span>
              <span className="text-xs text-gray-500">Billed Annually</span>
              <span className="text-xs text-orange-500 font-semibold">
                75% off
              </span>
            </div>
          </div>
        </CardWrapper>
        {/* Free Snapshot Card */}
        <CardWrapper selected={selected === "free"}>
          <div
            className="shadow p-6 flex items-center gap-4 relative cursor-pointer rounded-xl"
            onClick={() => setSelected("free")}
          >
            <input
              type="radio"
              checked={selected === "free"}
              onChange={() => setSelected("free")}
              className="accent-[#FF77D7] w-6 h-6 absolute top-6 left-4 z-10"
              style={{ accentColor: "#FF77D7" }}
            />
            <div className="flex-1 ml-12">
              <span className="text-lg font-semibold">Free Snapshot</span>
              <div className="text-sm text-gray-700 mt-1">
                1 badge & top-3 traits
                <br />
                60-sec result
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[80px]">
              <span className="text-2xl font-semibold">$0</span>
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}
