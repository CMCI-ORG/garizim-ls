import { Button } from "./ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export const Hero = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    quoteSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Breaking Language Barriers
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Professional translation and interpreting services in English, French, Spanish, and German
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" onClick={scrollToQuote}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2" onClick={scrollToQuote}>
            Contact Us <MessageSquare className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};