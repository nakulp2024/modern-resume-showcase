import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-neon-cyan relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-section-orange border-4 border-black rotate-12 animate-float shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-neon-yellow border-4 border-black -rotate-12 animate-pop shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-black border-8 border-white px-12 py-6 rotate-[-1deg] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h2 className="font-display font-black text-5xl md:text-7xl text-white relative">
              EDUCATION
              <span className="absolute -right-12 -top-6 text-section-orange text-5xl animate-wiggle font-black" style={{ textShadow: '3px 3px 0px black' }}>✦</span>
            </h2>
          </div>
          <div className="w-32 h-3 bg-black mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-section-orange border-8 border-black text-white hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300 animate-scale-in shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-black border-4 border-white p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] animate-pop">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="font-display font-black text-3xl md:text-4xl drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">Bachelor of Architecture</h3>
                    <span className="text-base bg-black border-4 border-white px-5 py-2 font-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] w-fit">
                      2010 - 2015
                    </span>
                  </div>
                  <p className="font-display font-black text-2xl mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">CEPT University</p>
                  <p className="text-white font-bold mb-4 text-lg">Ahmedabad, India</p>
                  <div className="bg-black/30 border-4 border-white/30 p-4 mt-4">
                    <p className="text-white font-medium leading-relaxed">
                      Specialized in architectural design with focus on BIM (Building Information Modeling),
                      sustainable design principles, and construction technology integration.
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
