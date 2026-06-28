import { Topbar } from "@/components/Topbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { LiveDosaSection } from "@/components/sections/LiveDosaSection";
import { WhyFamiliesLoveIt } from "@/components/sections/WhyFamiliesLoveIt";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full overflow-hidden">
      <Topbar />
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <WhyFamiliesLoveIt />
      <LiveDosaSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
