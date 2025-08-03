import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShoppingBag from '@/components/ShoppingBag';
import Recommendations from '@/components/Recommendations';

export default function ShoppingBagPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <ShoppingBag />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}
