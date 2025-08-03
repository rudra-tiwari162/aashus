import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecentlyViewed from '@/components/RecentlyViewed';

export default function RecentlyViewedPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <RecentlyViewed showAll={true} />
      </main>
      <Footer />
    </div>
  );
}
