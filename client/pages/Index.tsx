import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewArrivals from '@/components/NewArrivals';
import ShopByCategory from '@/components/ShopByCategory';
import ShopByOccasion from '@/components/ShopByOccasion';
import CelebsSpotted from '@/components/CelebsSpotted';
import ShopByCollection from '@/components/ShopByCollection';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <HeroSection />
      <NewArrivals />
      <ShopByCategory />
      <ShopByOccasion />
      <CelebsSpotted />
      <ShopByCollection />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
}
