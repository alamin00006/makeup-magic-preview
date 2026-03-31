import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ServicesGrid from "@/components/ServicesGrid";
import TrendingBanner from "@/components/TrendingBanner";
import CoursesSection from "@/components/CoursesSection";
import FoundationBanner from "@/components/FoundationBanner";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <CategorySection />
    <ServicesGrid />
    <TrendingBanner />
    <CoursesSection />
    <FoundationBanner />
    <FeaturesSection />
    <TestimonialsSection />
    <PricingSection />
    <StatsSection />
    <FooterSection />
  </main>
);

export default Index;
