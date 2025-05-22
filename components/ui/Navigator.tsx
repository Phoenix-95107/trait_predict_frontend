"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navicator() {
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentStep = () => {
    if (!pathname) return 1;
    if (pathname.includes("upload_image")) return 1;
    if (pathname.includes("payment")) return 2;
    if (pathname.includes("step_3")) return 3;
    return 1;
  };

  const currentStep = getCurrentStep();

  const handleBack = () => {
    if (currentStep === 2) {
      router.push("/upload_image");
    } else if (currentStep === 3) {
      router.push("/payment");
    } else {
      router.push("/");
    }
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      router.push("/payment");
    } else if (currentStep === 2) {
      router.push("/step_3");
    } else if (currentStep === 3) {
      router.push("/complete"); // You'll need to create this page
    }
  };

  return (
    <>
      <div className="flex px-[120px] py-4 justify-start gap-[182px] items-center">
        <Link href="/" className="text-3xl font-black">
          Faraseh
        </Link>
        <div className="flex justify-between items-center gap-5">
          <button
            onClick={handleBack}
            className="h-8 w-8 bg-[#B8B8B8] rounded-full flex justify-center items-center hover:bg-gradient-to-l hover:from-primary hover:to-secondary transition-all duration-100"
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-black transition-all duration-100"
            >
              <path
                d="M8.19495 1.60031L1.76621 8.01996M1.76621 8.01996L8.18586 14.4487M1.76621 8.01996L18.2856 8.03164"
                stroke="white"
                strokeWidth="1.86386"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black transition-all duration-100"
              />
            </svg>
          </button>
          <hr
            className={`w-[100px] h-1.5 rounded-full ${
              currentStep >= 1
                ? "bg-gradient-to-l from-primary to-secondary"
                : "bg-[#D9D9D9]"
            }`}
          />
          <hr
            className={`w-[100px] h-1.5 rounded-full ${
              currentStep >= 2
                ? "bg-gradient-to-l from-primary to-secondary"
                : "bg-[#D9D9D9]"
            }`}
          />
          <hr
            className={`w-[100px] h-1.5 rounded-full ${
              currentStep >= 3
                ? "bg-gradient-to-l from-primary to-secondary"
                : "bg-[#D9D9D9]"
            }`}
          />
          <button
            onClick={handleContinue}
            className="px-[23px] py-[19px] text-lg font-semibold text-[#7A7A7A] rounded-[14px] bg-[#D9D9D9] hover:text-black hover:bg-gradient-to-l hover:from-primary hover:to-secondary transition-all duration-100"
          >
            {currentStep === 3 ? "Complete" : "Continue"}
          </button>
        </div>
      </div>
    </>
  );
}
