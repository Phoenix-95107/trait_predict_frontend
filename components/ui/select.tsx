import Card from "@/components/card1";

export default function Select() {
  const card = [
    {
      price: "$79/one-time",
      description: "Up to 7 full reports",
      image: "/suit_1.png",
      title: "Discover Personalities Around You",
    },
    {
      price: "$7 add-on to your report",
      description: "Coming soon",
      image: "/suit_2.png",
      title: "Partner Personality Match",
    },
    {
      price: "$29/mo(billed annually)",
      description: "7 reports every month",
      image: "/suit_3.png",
      title: "Monthly Discovery Pass",
    },
    {
      price: "$7 add-on to your report",
      description: "Coming soon",
      image: "/suit_4.png",
      title: "Video Scan Upgrade",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-l from-primary to-secondary rounded-[14px] mt-20 px-[70px] py-10">
        <div className="text-[42px] font-bold">Choose the best suits you</div>
        <div className="flex flex-wrap justify-between mt-9">
          {card.map((item, index) => (
            <Card
              key={index}
              price={item.price}
              description={item.description}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
