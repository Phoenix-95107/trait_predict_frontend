"use client";
import { useState } from "react";

export default function Payment() {
  const [selected, setSelected] = useState("full");
  const [partnerMatch, setPartnerMatch] = useState(false);
  const [videoScan, setVideoScan] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-[900px] w-full flex justify-center items-start mt-10 bg-gray-100">
      <div className="w-[755px] flex flex-col gap-6">
        {/* Full Insight Reports Card */}
        <div
          className={`rounded-xl bg-white shadow-md  p-6 flex flex-col gap-4 relative border-2 transition-colors duration-200 ${
            selected === "full" ? "border-pink-300" : "border-transparent"
          }`}
          onClick={() => setSelected("full")}
          style={{ cursor: "pointer" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-5">
              <input
                type="radio"
                checked={selected === "full"}
                onChange={() => setSelected("full")}
                className="accent-pink-500 w-6 h-6"
              />
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border cursor-pointer border-gray-300 rounded-md px-2 py-1 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary w-16 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-evenly w-full">
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <span className="text-xl font-bold">
                    Full Insight Reports
                  </span>
                  <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    Recommended
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-8 mt-2 text-sm text-gray-700 pl-5">
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
              </div>
              <div className="flex flex-col items-start justify-center min-w-[80px] pr-12">
                <span className="text-2xl font-semibold">$26</span>
                <span className="text-xs text-gray-500">One-Time</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-2 flex pl-9 gap-2">
            <span className="text-base font-bold pl-1">Add ons:</span>
            <div>
              <div
                className="flex items-center gap-2 pl-5"
                onClick={() => setPartnerMatch((v) => !v)}
              >
                <input
                  type="checkbox"
                  checked={partnerMatch}
                  className="accent-pink-500 w-5 h-5 hover:cursor-pointer"
                  onChange={() => setPartnerMatch((v) => !v)}
                />
                <span className="text-sm">Partner Personality Match ($7)</span>
              </div>
              <div
                className="flex items-center gap-2 pl-5 mt-3"
                onClick={() => setVideoScan((v) => !v)}
              >
                <input
                  type="checkbox"
                  checked={videoScan}
                  className="accent-pink-500 w-5 h-5 hover:cursor-pointer"
                  onChange={() => setVideoScan((v) => !v)}
                />
                <span className="text-sm">
                  Video Scan for 15%+ accuracy ($7)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Discovery Monthly Pass Card */}
        <div
          className={`rounded-xl bg-white shadow p-6 flex items-start gap-4 border-2 transition-colors duration-200 ${
            selected === "monthly" ? "border-pink-300" : "border-transparent"
          }`}
          onClick={() => setSelected("monthly")}
          style={{ cursor: "pointer" }}
        >
          <input
            type="radio"
            checked={selected === "monthly"}
            onChange={() => setSelected("monthly")}
            className="accent-pink-500 w-6 h-6"
          />
          <div className="flex items-center justify-evenly w-full">
            <div className="flex-1">
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
            <div className="flex flex-col items-start min-w-[80px]">
              <span className="text-2xl font-semibold">
                $17<span className="text-base font-normal">/month</span>
              </span>
              <span className="text-xs text-gray-500">Billed Annually</span>
              <span className="text-xs text-orange-500 font-semibold">
                75% off
              </span>
            </div>
          </div>
        </div>
        {/* Free Snapshot Card */}
        <div
          className={`rounded-xl bg-white shadow p-6 flex items-center gap-4 border-2 transition-colors duration-200 ${
            selected === "free" ? "border-pink-300" : "border-transparent"
          }`}
          onClick={() => setSelected("free")}
          style={{ cursor: "pointer" }}
        >
          <input
            type="radio"
            checked={selected === "free"}
            onChange={() => setSelected("free")}
            className="accent-pink-500 w-6 h-6"
          />
          <div className="flex items-center justify-evenly w-full">
            <div className="flex-1">
              <span className="text-lg font-semibold">Free Snapshot</span>
              <div className="text-sm text-gray-700 mt-1">
                1 badge & top-3 traits
                <br />
                60-sec result
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[80px] pr-12">
              <span className="text-2xl font-semibold">$0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
