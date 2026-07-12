import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import InterviewTypes from "@/components/landing/InterviewTypes";
import HowItWorks from "@/components/landing/HowItWorks";
import AIAdvantages from "@/components/landing/AIAdvantages";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <InterviewTypes />
        <HowItWorks />
        <AIAdvantages />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}