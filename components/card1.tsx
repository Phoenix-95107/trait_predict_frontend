import Image from "next/image";

interface CardProps {
  price: string;
  description: string;
  image: string;
  title: string;
}

export default function Card({ price, description, image, title }: CardProps) {
  return (
    <div className="relative min-w-[250px] h-[300px] rounded-lg shadow-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="w-[250px] h-[300px] object-cover"
        />
      </div>

      {/* Top Left Content */}
      <div className="absolute top-5 left-6">
        <p className="text-sm leading-[18px]  text-white ">{price}</p>
        <p
          className={`text-sm text-white drop-shadow-md ${
            description === "Coming soon" ? "font-bold" : ""
          }`}
        >
          {description}
        </p>
      </div>

      {/* Bottom Left Title */}
      <div className="absolute bottom-5 left-6 flex justify-between items-end mr-6">
        <p className="text-xl font-bold text-white leading-tight">{title}</p>
        <div className="relative h-[45px] w-[45px] flex justify-center items-center rounded-full border border-white flex-shrink-0 bg-none hover:bg-gradient-to-l from-primary to-secondary transition-all duration-300">
          <Image
            src="arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
            className="absolute"
          />
        </div>
      </div>
    </div>
  );
}
