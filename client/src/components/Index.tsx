
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import AIFeedback from "./Feedback";
import CareerUnlock from "./CareerUnlock";
import Footer from "./Footer";
import CTA from "./CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AIFeedback />
      <CareerUnlock />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;