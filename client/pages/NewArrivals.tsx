import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewArrivalsHero from '@/components/NewArrivalsHero';
import ProductGrid from '@/components/ProductGrid';

export default function NewArrivals() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <NewArrivalsHero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
