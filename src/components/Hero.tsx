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
        <p className="text-lg md:text-xl mb-4 text-muted-foreground animate-fade-in">
          Welcome to
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground tracking-tight">
          GARIZIM LANGUAGE SOLUTIONS
        </h1>
        <p className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Breaking Language Barriers
        </p>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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