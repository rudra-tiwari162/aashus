import Header from '@/components/Header';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description = "This page is under construction." }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="font-artifika text-4xl lg:text-5xl text-brand-gold mb-6">
            {title}
          </h1>
          <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <p className="font-inter text-sm text-gray-500 mb-8">
            Continue prompting to fill in this page's content, or explore other sections of our site.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-brand-gold text-white font-inter font-medium px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors tracking-wide"
          >
            Return Home
          </Link>
        </div>
      </main>
    </div>
  );
}
