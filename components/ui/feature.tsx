import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="px-[105px] mr-[50px] flex items-center justify-between gap-[75px]">
        <div className="flex flex-col">
          <div>
            <p className="text-[42px] font-bold leading-tight">
              Results are base on scientific resources
            </p>
            <p className="text-[22px] leading-tight mt-[13px]">
              We have collected thousands of scientific resources from the
              internet to increase accuracy of our tool
            </p>
          </div>
          <div className="flex justify-between items-center mt-[30px]">
            {/* FACS */}
            <div className="flex items-center gap-1">
              <Image
                src="/chatgpt-image-may-6--2025--10-24-15-am-1.png"
                alt="FACS"
                width={54}
                height={62}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-tight">FACS</span>
                <span className="text-xs text-gray-700 leading-tight">
                  Facial Action Coding System
                </span>
              </div>
            </div>
            {/* Big5 */}
            <div className="flex items-center gap-1">
              <Image
                src="/chatgpt-image-may-6--2025--10-24-38-am-1.png"
                alt="Big5"
                width={58}
                height={55}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-tight">Big5</span>
                <span className="text-xs text-gray-700 leading-tight">
                  Personality Mapping
                </span>
              </div>
            </div>
            {/* Faraseh */}
            <div className="flex items-center gap-1">
              <Image
                src="/chatgpt-image-may-6--2025--10-29-24-am-1.png"
                alt="Faraseh"
                width={42}
                height={52}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-tight">
                  Faraseh
                </span>
                <span className="text-xs text-gray-700 leading-tight">
                  Arabic Old Heritage
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[590px] flex-shrink-0">
          <div className="w-full h-full relative">
            <Image
              src="/chatgpt-image-may-6--2025--10-19-57-am-1.png"
              alt="chatgpt"
              fill
              priority
              className="object-cover h-[590px] w-[390px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
