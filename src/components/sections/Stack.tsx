import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../Reveal";

const groups = [
  {
    label: "Design & BIM",
    tools: ["Revit", "Navisworks", "Dynamo"],
  },
  {
    label: "Planning & Scheduling",
    tools: ["Primavera P6", "ALICE", "MS Project"],
  },
  {
    label: "Data & Analytics",
    tools: ["Power BI", "Python", "Google Data Stack"],
  },
  {
    label: "AI & Generative Planning",
    tools: ["ML workflows", "LLM tooling", "ALICE"],
  },
  {
    label: "Immersive & Simulation",
    tools: ["4D", "VR", "Unity"],
  },
];

export const Stack = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-28 md:py-40 border-t border-bone/10">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-2">
            <Reveal className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ash">
              <span className="h-px w-6 bg-rust" />
              <span>04 — Stack</span>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-10">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight text-bone/60 md:text-3xl">
                My stack
              </h2>
            </Reveal>

            <div className="mt-16 space-y-12 md:mt-24 md:space-y-14">
              {groups.map((g, gi) => (
                <motion.div
                  key={g.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
                  className="grid grid-cols-12 items-start gap-y-6 border-t border-bone/10 pt-8"
                >
                  <motion.div
                    variants={{
                      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="col-span-12 md:col-span-4"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-ash">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-lg tracking-tight text-bone md:text-xl">
                        {g.label}
                      </h3>
                    </div>
                  </motion.div>

                  <div className="col-span-12 md:col-span-8">
                    <ul className="flex flex-wrap gap-x-3 gap-y-3">
                      {g.tools.map((tool) => (
                        <motion.li
                          key={tool}
                          variants={{
                            hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="border border-bone/15 px-4 py-2 text-sm text-bone/85 transition-colors duration-300 hover:border-rust hover:text-rust"
                        >
                          {tool}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
