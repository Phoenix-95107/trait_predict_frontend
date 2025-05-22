"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex justify-between items-center pt-4">
        {/* Left Side - Logo and Slogan */}
        <div>
          <h1 className="font-inter text-[30px] font-extrabold">Faraseh</h1>
          <p className="font-inter text-xs">See What Your Face Says</p>
        </div>

        {/* Right Side - Icons and Buttons */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 text-gray-700">
            <Image src="vector-1.svg" width={24} height={24} alt="vector-1" />
          </div>
          <div>
            <hr className="w-[182px] h-[56px] bg-[#DADADA] rounded-xl mb-[-67px]" />
            <Link
              href="/step_1"
              className="w-[182px] h-[60px] z-100 rounded-[14px] bg-gradient-to-l from-primary to-secondary flex justify-center items-center font-semibold font-inter text-lg shadow-md"
            >
              Get My Report
            </Link>
          </div>
          <Link
            href={"/signup"}
            className="flex justify items-center gap-[20px] rounded-xl border-[1px] border-[#A2A2A2] p-[14px]"
          >
            <Image src="vector.svg" width={24} height={24} alt="/" />
            <Image src="vector-3.svg" width={24} height={24} alt="/" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
