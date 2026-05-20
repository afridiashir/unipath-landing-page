import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PainPoints from "@/components/PainPoints";
import ScholarshipPositioning from "@/components/ScholarshipPositioning";
import ProductPreview from "@/components/ProductPreview";
import Comparison from "@/components/Comparison";
import FreePlatform from "@/components/FreePlatform";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <ScholarshipPositioning />
      <ProductPreview />
      <Testimonials />
      <Comparison />
      <HowItWorks />
      <FreePlatform />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
