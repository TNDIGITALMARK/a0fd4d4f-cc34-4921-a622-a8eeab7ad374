export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import PartnersSection from '@/components/PartnersSection';
import StatsSection from '@/components/StatsSection';
import FeaturedDeals from '@/components/FeaturedDeals';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import NewsletterCTA from '@/components/NewsletterCTA';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <PartnersSection />
        <StatsSection />
        <FeaturedDeals />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}