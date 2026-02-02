import HeroSection from "@/components/landing/HeroSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import SpeakersSection from "@/components/landing/SpeakersSection";
import CulturalSection from "@/components/landing/CulturalSection";
import GiveawaySection from "@/components/landing/GiveawaySection";
import RegistrationSection from "@/components/landing/RegistrationSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import StickyRegistration from "@/components/landing/StickyRegistration";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <SpeakersSection />
      <CulturalSection />
      <GiveawaySection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
      <StickyRegistration />
    </main>
  );
};

export default Index;
