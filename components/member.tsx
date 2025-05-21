import Image from "next/image";

interface MemberProps {
  name: string;
  title: string;
  image: string;
  description: string;
  role: string;
}

export default function Member({
  name,
  title,
  image,
  description,
  role,
}: MemberProps) {
  return (
    <>
      <div className="flex flex-col p-6 items-center min-w-[340px] h-[400px]">
        <Image
          src={image}
          alt={name}
          width={86}
          height={86}
          className="rounded-full -mt-[43px]"
        />
        <div className="mt-12 flex flex-col h-full justify-between">
          <div>
            <p className="text-lg font-bold text-zinc-600">{title}</p>
            <p className="mt-4 text-lg text-zinc-600">{description}</p>
          </div>
          <div className="mt-auto">
            <p className="font-bold text-zinc-950">{name}</p>
            <p className="font-medium text-zinc-600">{role}</p>
          </div>
        </div>
      </div>
    </>
  );
}
