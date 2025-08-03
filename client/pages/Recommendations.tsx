import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Recommendations from '@/components/Recommendations';

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <Recommendations showAll={true} />
      </main>
      <Footer />
    </div>
  );
}