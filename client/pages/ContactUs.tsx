import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
