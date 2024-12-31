import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Quote } from "@/components/Quote";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Services />
      <About />
      <Testimonials />
      <Quote />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;