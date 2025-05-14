
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DepartmentalServicesSection from '@/components/DepartmentalServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <DepartmentalServicesSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
