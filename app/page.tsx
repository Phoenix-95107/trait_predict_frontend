import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Feature from "@/components/ui/feature";
import Part from "@/components/ui/part";

export default function Home() {
  return (
    <div className="w-max-[1400px] mx-[120px]">
      <Navbar />
      <Hero />
      <Feature />
      <Part />
      {/* Add your content here */}
    </div>
  );
}
