import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutFeatures from "@/components/sections/AboutFeatures";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutFeatures />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
