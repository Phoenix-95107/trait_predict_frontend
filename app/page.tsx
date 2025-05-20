import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Feature from "@/components/ui/feature";
import Part from "@/components/ui/part";
import Select from "@/components/ui/select";
import Famous from "@/components/ui/famous";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="w-max-[1400px] mx-[120px]">
          <Navbar />
          <Hero />
          <Feature />
          <Part />
          <Select />
        </div>
        <Famous />
        <div className="w-max-[1400px] mx-[120px]">
          
        </div>
        {/* Add your content here */}
      </div>
    </>
  );
}
