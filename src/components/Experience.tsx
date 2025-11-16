import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    company: "ALICE Technologies",
    role: "Customer Success Manager",
    period: "Sep 2018 - Present",
    location: "Pune",
    highlights: [
      "Managed multiple enterprise accounts generating significant revenue over 6 years",
      "Expanded CS team from 2 to 16 members across 5 countries",
      "Reduced implementation time from 4-6 months to 1.5 months through NPS surveys and workflow optimization",
      "Collaborated with Product and Engineering teams to prioritize features based on customer feedback",
      "Implemented customer engagement metrics and NPS surveys to optimize client health",
    ],
  },
  {
    id: "2",
    company: "VConstruct",
    role: "SR VDC Engineer",
    period: "Oct 2016 - Jun 2018",
    location: "Pune",
    highlights: [
      "Led 30+ 4D Visualization projects with multiple VR experiences",
      "Expanded team from 4 to 16 members with diverse skill sets",
      "Drove digital transformation using VR and data analytics",
      "Managed iOS app development for Construction Safety VR per OSHA standards",
    ],
  },
  {
    id: "3",
    company: "Axes Studios",
    role: "BIM Coordinator",
    period: "Jan 2015 - Sep 2016",
    location: "Ahmedabad",
    highlights: [
      "Managed BIM deliverables for multiple projects",
      "Worked on design iterations for new Google headquarters",
      "Helped achieve Platinum LEED certification for Google office",
      "Created web portal for project data management using HTML5 and Java",
      "Designed VR game interface using Gear VR and Google Cardboard SDK for Unity",
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgColors = ["bg-section-blue", "bg-section-orange", "bg-section-pink"];
  const shadowColors = ["shadow-blue", "shadow-yellow", "shadow-pink"];
  const bgColor = bgColors[index % bgColors.length];
  const shadowColor = shadowColors[index % shadowColors.length];

  return (
    <div
      ref={cardRef}
      className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <Card className={`${bgColor} border-8 border-black text-white overflow-hidden group hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]`}>
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-black border-4 border-white p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] animate-pop">
              <Briefcase className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="font-display font-black text-3xl md:text-4xl drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">{experience.company}</h3>
                <span className="text-sm md:text-base bg-black border-4 border-white px-5 py-2 font-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] w-fit">
                  {experience.period}
                </span>
              </div>
              <p className="font-display font-black text-xl md:text-2xl mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">{experience.role}</p>
              <p className="text-white font-bold mb-4 text-lg">{experience.location}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-black/30 border-4 border-white/30 p-4 hover:bg-black/50 transition-colors">
                <span className="text-white font-black text-xl mt-0.5 min-w-[24px]">▸</span>
                <span className="text-white font-medium leading-relaxed text-base">{highlight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-neon-green relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-neon-yellow border-4 border-black rotate-12 animate-float shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-neon-cyan border-4 border-black -rotate-12 animate-wiggle shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-black border-8 border-white px-12 py-6 rotate-[-1deg] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h2 className="font-display font-black text-5xl md:text-7xl text-white relative">
              WORK EXPERIENCE
              <span className="absolute -right-12 -top-6 text-neon-yellow text-5xl animate-pop font-black" style={{ textShadow: '3px 3px 0px black' }}>✦</span>
            </h2>
          </div>
          <div className="w-32 h-3 bg-black mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
