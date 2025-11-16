import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-section-blue to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-accent rounded-full opacity-30 animate-float" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-section-pink rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-10 text-white/20 text-6xl animate-pulse-glow">★</div>
      <div className="absolute bottom-1/4 right-1/4 text-white/20 text-5xl animate-pulse-glow" style={{ animationDelay: "0.7s" }}>✦</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-4">
            LET'S CONNECT
          </h2>
          <div className="w-24 h-2 bg-white mx-auto rounded-full mt-4" />
          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Location</h3>
              <p className="text-white/90">Pune, India</p>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Phone</h3>
              <a href="tel:+917772859219" className="text-white/90 hover:text-white transition-colors">
                +91-77728 59219
              </a>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Email</h3>
              <a href="mailto:nakul@example.com" className="text-white/90 hover:text-white transition-colors break-all">
                nakul@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-display font-bold text-lg px-12 py-6 rounded-full shadow-2xl transform transition hover:scale-105"
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
