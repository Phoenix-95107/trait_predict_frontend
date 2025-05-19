import Hero from '@/components/hero';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="w-max-[1400px] mx-[120px]">
      <Navbar />
      <Hero />
      {/* Add your content here */}
    </div>
  );
}
