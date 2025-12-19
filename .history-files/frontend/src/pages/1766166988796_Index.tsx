import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import AboutRealtorSection from '@/components/landing/AboutRealtorSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import AboutUsSection from '@/components/landing/AboutUsSection';
import ProjectsSection from '@/components/landing/ProjectsSection';
import ClientsSection from '@/components/landing/ClientsSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutRealtorSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
