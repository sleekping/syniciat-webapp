import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
export default function Home() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <AboutSection />
    </main>
  );
}