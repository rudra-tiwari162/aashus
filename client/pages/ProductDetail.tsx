import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import Recommendations from '@/components/Recommendations';
import RecentlyViewed from '@/components/RecentlyViewed';

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <ProductDetail />
        <Recommendations />
        <RecentlyViewed />
      </main>
      <Footer />
    </div>
  );
}
