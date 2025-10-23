export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedDeals from '@/components/FeaturedDeals';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDeals />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}