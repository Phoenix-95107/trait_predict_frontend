import ImageCarousel from "@/components/ImageCarousel";
import Button from "@/components/button";

export default function Hero() {
  const carouseImage = [
    "/image_1.png",
    "/image_2.png",
    "/image_3.png",
    "/image_4.png",
  ];
  return (
    <div>
      <div className="w-full  flex justify-evenly gap-14 mt-10">
        <div className="flex flex-col">
          <div className="bg-gradient-to-l from-[rgba(255,119,215,0.3)] to-[rgba(250,108,18,0.3)] w-[403px] px-[18px] py-2 rounded-[14px] text-base">
            <span className="font-semibold">120k+&nbsp;</span>
            <span>personality face reports generated so far</span>
          </div>
          <div>
            <p className="font-inter text-[79px] font-bold leading-tight mt-6">
              Let&apos;s Start with What Matters to You...
            </p>
          </div>
          <p className="text-2xl font-semibold mt-5">
            What Brings You Here Today?
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-4 mt-6">
            <Button>Understand Myself Better</Button>
            <Button>Understand people around me</Button>
            <Button>Understand me partner better</Button>
          </div>
        </div>
        <div className="w-[541px] h-[636px] mt-[-50px] z-[-1]">
          <ImageCarousel images={carouseImage} width={541} height={636} />
        </div>
      </div>
    </div>
  );
}
