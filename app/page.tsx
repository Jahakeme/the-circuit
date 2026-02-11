import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import MentorCTASection from "@/components/mentor-cta-section";
import FinalCTASection from "@/components/final-cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-foreground selection:bg-primary selection:text-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MentorCTASection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
