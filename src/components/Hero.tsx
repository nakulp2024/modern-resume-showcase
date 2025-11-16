import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Neopop decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-neon-yellow border-4 border-black rotate-12 animate-wiggle shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-neon-cyan border-4 border-black -rotate-12 animate-float shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-section-pink border-4 border-black rotate-45 animate-pop shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-neon-green border-4 border-black animate-pulse-glow shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" />
      
      {/* Star decorations */}
      <div className="absolute top-1/4 right-1/3 text-neon-yellow text-5xl animate-pop font-black" style={{ animationDelay: "0.5s", textShadow: '3px 3px 0px black' }}>★</div>
      <div className="absolute bottom-1/3 left-1/4 text-neon-cyan text-4xl animate-wiggle font-black" style={{ animationDelay: "1.5s", textShadow: '3px 3px 0px black' }}>✦</div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-8 animate-slide-up">
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-none tracking-tight relative">
              <span className="inline-block border-8 border-black bg-primary px-8 py-4 rotate-[-2deg] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                NAKUL
              </span>
              <br />
              <span className="inline-block border-8 border-black bg-gradient-to-r from-neon-cyan to-neon-green px-8 py-4 rotate-[2deg] mt-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                PRAJAPATI
              </span>
            </h1>
          </div>
          
          <div className="inline-block animate-bounce-in mb-8" style={{ animationDelay: "0.3s" }}>
            <div className="bg-neon-yellow border-4 border-black px-8 py-4 rotate-[-1deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-display font-black text-2xl md:text-4xl text-black">
                Customer Success Manager
              </p>
            </div>
            <p className="font-sans text-lg md:text-xl text-foreground mt-6 mb-8 max-w-2xl mx-auto bg-muted/50 border-4 border-border p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              Passionate about driving product adoption, customer satisfaction, and building scalable success strategies in SaaS and construction technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-section-pink border-4 border-black text-white hover:bg-section-pink/90 font-display font-black text-lg px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
            >
              Get In Touch
            </Button>
            <a href="#experience">
              <Button
                size="lg"
                className="bg-neon-cyan border-4 border-black text-black hover:bg-neon-cyan/90 font-display font-black text-lg px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
              >
                View Experience
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-neon-yellow border-4 border-black p-2 rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ArrowDown className="w-6 h-6 text-black -rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
