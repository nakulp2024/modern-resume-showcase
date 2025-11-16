import { Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Customer Success",
    icon: "💼",
    skills: ["CRM", "Product Adoption", "Data Analytics", "Team Management", "Agile Methodologies"],
  },
  {
    title: "Technical Skills",
    icon: "⚡",
    skills: ["BIM Implementation", "5D Scheduling", "Revit", "Rhino", "Dynamo", "Grasshopper"],
  },
  {
    title: "Product & Tools",
    icon: "🛠️",
    skills: ["Salesforce", "Mixpanel", "Microsoft Power BI", "Project Management", "Automation"],
  },
  {
    title: "Certifications",
    icon: "🎓",
    skills: ["Google Data Analytics", "Microsoft Power BI", "Agile Project Management", "Agile Methodologies"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-section-pink relative overflow-hidden">
      <div className="absolute top-20 left-20 w-28 h-28 bg-neon-yellow border-4 border-black rotate-45 animate-pop shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-neon-cyan border-4 border-black -rotate-45 animate-wiggle shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-black border-8 border-white px-12 py-6 rotate-[1deg] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h2 className="font-display font-black text-5xl md:text-7xl text-white relative">
              SKILLS & LANGUAGES
              <span className="absolute -right-12 -top-6 text-neon-cyan text-5xl animate-wiggle font-black" style={{ textShadow: '3px 3px 0px black' }}>★</span>
            </h2>
          </div>
          <div className="w-32 h-3 bg-black mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-neon-yellow border-8 border-black text-black hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300 animate-scale-in shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h3 className="font-display font-black text-3xl mb-6 flex items-center gap-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                  <span className="text-4xl bg-black text-neon-yellow p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={skill}
                      className="bg-black text-white border-4 border-white px-5 py-3 text-base font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.7)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-slide-up"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-neon-cyan border-8 border-black text-black animate-scale-in shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8">
              <h3 className="font-display font-black text-3xl mb-8 flex items-center gap-3 justify-center drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                <Globe className="w-10 h-10 bg-black text-neon-cyan p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <span className="bg-section-pink text-white border-4 border-black px-8 py-4 text-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-pop">
                  English - Fluent
                </span>
                <span className="bg-neon-green text-black border-4 border-black px-8 py-4 text-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-pop" style={{ animationDelay: "0.2s" }}>
                  Hindi - Native
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
