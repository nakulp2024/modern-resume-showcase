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
      "Managed 12 accounts generating $6M in revenue over 6 years",
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
  const bgColor = bgColors[index % bgColors.length];

  return (
    <div
      ref={cardRef}
      className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <Card className={`${bgColor} border-0 text-white overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-2xl md:text-3xl">{experience.company}</h3>
                <span className="text-sm md:text-base bg-white/20 px-4 py-1 rounded-full font-medium backdrop-blur-sm w-fit">
                  {experience.period}
                </span>
              </div>
              <p className="font-display font-semibold text-xl text-white/90 mb-1">{experience.role}</p>
              <p className="text-white/80 mb-4">{experience.location}</p>
            </div>
          </div>

          <ul className="space-y-3">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-white/80 mt-1">→</span>
                <span className="text-white/90 leading-relaxed">{highlight}</span>
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-black text-5xl md:text-7xl text-foreground mb-4 relative inline-block">
            WORK EXPERIENCE
            <span className="absolute -right-8 -top-4 text-accent text-4xl animate-pulse-glow">✦</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-4" />
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
