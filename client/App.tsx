import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@lib/context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import NewArrivals from "./pages/NewArrivals";
import ProductDetailPage from "./pages/ProductDetail";
import RecentlyViewedPage from "./pages/RecentlyViewed";
import RecommendationsPage from "./pages/Recommendations";
import ShoppingBagPage from "./pages/ShoppingBag";
import CheckoutPage from "./pages/Checkout";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/shopping-bag" element={<ShoppingBagPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/recently-viewed" element={<RecentlyViewedPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/occasion" element={<PlaceholderPage title="Occasion Wear" description="Find the perfect outfit for any special event or celebration." />} />
            <Route path="/collections" element={<PlaceholderPage title="Collections" description="Explore our curated collections, each telling its own unique story." />} />
            <Route path="/categories" element={<PlaceholderPage title="Categories" description="Browse by style, fabric, or occasion to find exactly what you're looking for." />} />
            <Route path="/bestsellers" element={<PlaceholderPage title="Bestsellers" description="Our most loved pieces, chosen by customers like you." />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
