import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
