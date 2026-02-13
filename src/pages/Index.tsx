import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import SpeakersSection from "@/components/landing/SpeakersSection";
import GiveawaySection from "@/components/landing/GiveawaySection";
import RegistrationSection from "@/components/landing/RegistrationSection";
import LocationSection from "@/components/landing/LocationSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import StickyRegistration from "@/components/landing/StickyRegistration";
import CulturalShowcase from "@/components/landing/CulturalShowcase";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <ExperienceSection /> */}
      <CulturalShowcase />
      <GiveawaySection />
      <SpeakersSection />
      <RegistrationSection />
      <LocationSection />
      <FAQSection />
      <Footer />
      <StickyRegistration />
    </main>
  );
};

export default Index;
