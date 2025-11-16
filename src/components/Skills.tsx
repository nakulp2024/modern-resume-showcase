import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Customer Success",
    skills: ["CRM", "Product Adoption", "Data Analytics", "Team Management", "Agile Methodologies"],
  },
  {
    category: "Technical",
    skills: ["BIM Implementation", "5D Scheduling", "Revit", "Rhino", "Dynamo", "Grasshopper"],
  },
  {
    category: "Product & Tools",
    skills: ["Salesforce", "Mixpanel", "Microsoft Power BI", "Project Management", "Automation"],
  },
  {
    category: "Certifications",
    skills: ["Google Data Analytics", "Microsoft Power BI", "Agile Project Management", "Agile Methodologies"],
  },
];

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={badgeRef}
      className={`${isVisible ? "animate-scale-in" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <span className="inline-block bg-gradient-to-r from-primary to-section-blue text-white px-6 py-3 rounded-full font-display font-semibold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
        {skill}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-section-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-black text-5xl md:text-7xl text-foreground mb-4 relative inline-block">
            SKILLS & EXPERTISE
            <span className="absolute -left-8 -top-4 text-section-pink text-4xl animate-pulse-glow">★</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.category} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6 flex items-center gap-3">
                <span className="w-12 h-12 bg-gradient-to-br from-accent to-section-orange rounded-full flex items-center justify-center text-white font-bold">
                  {catIndex + 1}
                </span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skill} skill={skill} index={skillIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="font-display font-bold text-3xl text-center text-foreground mb-8">Languages</h3>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-section-blue to-primary flex items-center justify-center mb-4 shadow-2xl">
                <span className="text-white font-display font-black text-4xl">EN</span>
              </div>
              <p className="font-display font-semibold text-lg">English</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-section-orange to-accent flex items-center justify-center mb-4 shadow-2xl">
                <span className="text-white font-display font-black text-4xl">HI</span>
              </div>
              <p className="font-display font-semibold text-lg">Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
