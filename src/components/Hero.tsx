import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-hero-gradient-start via-section-pink to-hero-gradient-end">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent rounded-full opacity-60 animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-section-orange rounded-full opacity-40 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary rounded-full opacity-50 animate-pulse-glow" />
      
      {/* Star decorations */}
      <div className="absolute top-1/4 right-1/3 text-accent text-4xl animate-pulse-glow" style={{ animationDelay: "0.5s" }}>★</div>
      <div className="absolute bottom-1/3 left-1/4 text-section-orange text-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }}>✦</div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-none tracking-tight">
            NAKUL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-section-cream to-white">
              PRAJAPATI
            </span>
          </h1>
          
          <div className="inline-block animate-bounce-in" style={{ animationDelay: "0.3s" }}>
            <p className="font-display font-bold text-2xl md:text-4xl text-white/90 mb-4">
              Customer Success Manager
            </p>
            <p className="font-sans text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Passionate about driving product adoption, customer satisfaction, and building scalable success strategies in SaaS and construction technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 font-display font-bold text-lg px-8 py-6 rounded-full shadow-2xl transform transition hover:scale-105"
            >
              Get In Touch
            </Button>
            <a href="#experience">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-display font-bold text-lg px-8 py-6 rounded-full"
              >
                View Experience
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
