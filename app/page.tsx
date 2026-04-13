import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import { ProductSection } from "@/components/home/ProductSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductSection />
    </main>
  );
}