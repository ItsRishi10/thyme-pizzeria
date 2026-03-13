import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Menu from "@/components/Menu";
import SocialProof from "@/components/SocialProof";
import Gallery from "@/components/Gallery";
import VisitUs from "@/components/VisitUs";
import OrderOnline from "@/components/OrderOnline";
import Footer from "@/components/Footer";

/**
 * Thyme Woodfired Pizzeria - Home Page
 * 
 * Design Philosophy: Warm Artisanal Minimalism
 * - Soft cream background (#f5f1ed) with burnt orange accents (#c85a17)
 * - Playfair Display serif for elegant headings
 * - Generous whitespace and asymmetric layouts
 * - Slow, intentional animations (400-600ms) for handcrafted feel
 * - Emphasis on authentic, premium wood-fired sourdough pizza
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Menu />
        <SocialProof />
        <Gallery />
        <VisitUs />
        <OrderOnline />
      </main>
      <Footer />
    </div>
  );
}
