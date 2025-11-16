import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-black text-5xl md:text-7xl text-foreground mb-4 relative inline-block">
            EDUCATION
            <span className="absolute -right-8 top-0 text-section-orange text-4xl animate-pulse-glow">✦</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-secondary via-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Card className="bg-gradient-to-br from-section-pink to-secondary border-0 text-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-2">
                    Bachelor of Architecture
                  </h3>
                  <p className="font-display font-semibold text-xl text-white/90 mb-2">
                    MANIT, Bhopal
                  </p>
                  <p className="text-white/80 text-lg mb-4">Aug 2009 - Apr 2014</p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-6">
                    <p className="text-white/90 leading-relaxed">
                      Completed comprehensive architecture program with focus on design, construction technology, and project management. 
                      Developed strong foundation in technical documentation, 3D modeling, and sustainable design practices.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
