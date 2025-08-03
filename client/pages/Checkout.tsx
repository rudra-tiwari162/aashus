import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Checkout from '@/components/Checkout';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
