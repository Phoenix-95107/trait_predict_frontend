import FlowAnimation from "@/components/flowanimation";
import Image from "next/image";
import Link from "next/link";

export default function Famous() {
  const image = [
    {
      personality: "Visionary Pathfinder",
      image: "/flow_1.png",
      description: {
        name: "Barack Obama",
        description: "asdasd",
        state: "/state_1.png",
      },
    },
    {
      personality: "Visionary Pathfinder",
      image: "/flow_2.png",
      description: {
        name: "Khabib urmago..",
        description:
          "High eye-to-brow tension and set jawline indicate strong internal control and strategic dominance",
        state: "/state_2.png",
      },
    },
    {
      personality: "Empathic Guardian",
      image: "/flow_3.png",
      description: {
        name: "Will Smith",
        description: "asdasd",
        state: "/state_3.png",
      },
    },
    {
      personality: "Creative Alchemist",
      image: "/flow_4.png",
      description: {
        name: "Morgan Freeman",
        description: "asdasd",
        state: "/state_4.png",
      },
    },
  ];
  return (
    <>
      <div className="flex justify-evenly items-start gap-14 mt-28 mb-7">
        <p className="text-[42px] max-w-[460px] font-bold leading-tight">
          What If We Scanned the Famous?
        </p>
        <p className="text-[22px] max-w-[630px] leading-tight mt-[13px]">
          We analyzed public photos of well-known personalities using the same
          AI engine you&apos;ll experience. The results? Fascinating, accurate,
          and wildly insightful.
        </p>
      </div>
      <FlowAnimation items={image} />
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="text-[32px] font-bold">
          Think yours would look like theirs?
        </p>
        <Image
          src="/path.svg"
          width={110}
          height={20}
          alt=" "
          className="relative -ml-[277px] -mt-2"
        />
        <p>Get your own personality decoded in 60 Seconds.</p>
        <div className="mt-6">
          <hr className="w-[182px] h-[56px] bg-[#DADADA] rounded-xl mb-[-67px]" />
          <Link
            href="/step_1"
            className="w-[182px] h-[60px] z-100 rounded-[14px] bg-gradient-to-l from-primary to-secondary flex justify-center items-center font-semibold font-inter text-lg shadow-md"
          >
            Get My Report
          </Link>
        </div>
      </div>
    </>
  );
}
