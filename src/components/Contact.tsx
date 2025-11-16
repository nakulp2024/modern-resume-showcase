import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-neon-yellow border-4 border-black rotate-12 animate-wiggle shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-neon-green border-4 border-black -rotate-12 animate-float shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute top-1/2 left-10 text-neon-cyan text-7xl animate-pop font-black" style={{ textShadow: '4px 4px 0px black' }}>★</div>
      <div className="absolute bottom-1/4 right-1/4 text-neon-yellow text-6xl animate-wiggle font-black" style={{ animationDelay: "0.7s", textShadow: '4px 4px 0px black' }}>✦</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-black border-8 border-white px-12 py-6 rotate-[1deg] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h2 className="font-display font-black text-5xl md:text-7xl text-white">
              LET'S CONNECT
            </h2>
          </div>
          <div className="w-32 h-3 bg-black mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]" />
          <p className="text-white font-bold text-lg md:text-xl mt-6 max-w-2xl mx-auto bg-black/30 border-4 border-white/30 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]">
            Interested in collaborating or learning more about my work? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-neon-cyan border-8 border-black p-8 text-center hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-black border-4 border-white w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] animate-pop">
                <MapPin className="w-10 h-10 text-neon-cyan" />
              </div>
              <h3 className="font-display font-black text-2xl text-black mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">Location</h3>
              <p className="text-black font-bold text-lg">Pune, India</p>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-neon-yellow border-8 border-black p-8 text-center hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-black border-4 border-white w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] animate-pop" style={{ animationDelay: "0.2s" }}>
                <Phone className="w-10 h-10 text-neon-yellow" />
              </div>
              <h3 className="font-display font-black text-2xl text-black mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">Phone</h3>
              <a href="tel:+917772859219" className="text-black font-bold text-lg hover:underline">
                +91-77728 59219
              </a>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-neon-green border-8 border-black p-8 text-center hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-black border-4 border-white w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] animate-pop" style={{ animationDelay: "0.4s" }}>
                <Mail className="w-10 h-10 text-neon-green" />
              </div>
              <h3 className="font-display font-black text-2xl text-black mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">Email</h3>
              <a href="mailto:nakul@example.com" className="text-black font-bold text-lg hover:underline break-all">
                nakul@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-section-pink border-8 border-black text-white hover:bg-section-pink/90 font-display font-black text-xl px-12 py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
            asChild
          >
            <a href="mailto:nakul@example.com">Send Me an Email</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
