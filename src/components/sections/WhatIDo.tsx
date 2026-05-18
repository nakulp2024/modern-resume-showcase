import { Reveal } from "../Reveal";

const services = [
  {
    n: "01",
    title: "Software Advisory",
    body: "Cutting through the market noise to find what actually fits your organisation, your team, and your projects.",
  },
  {
    n: "02",
    title: "Implementation & Onboarding",
    body: "Getting tools embedded into real workflows, not just installed. Training that sticks.",
  },
  {
    n: "03",
    title: "Workflow & Analytics",
    body: "Connecting your tools end to end. Making your data visible, useful, and actionable.",
  },
];

export const WhatIDo = () => {
  return (
    <section className="relative py-28 md:py-40 border-t border-bone/10">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-2">
            <Reveal className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ash">
              <span className="h-px w-6 bg-rust" />
              <span>03 — Practice</span>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-10">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight text-bone/60 md:text-3xl">
                What I do
              </h2>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-3 md:gap-10">
              {services.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.1} className="group">
                  <div className="border-t border-bone/15 pt-6 transition-colors duration-500 group-hover:border-rust">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-ash">
                        {s.n}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-ash transition-colors duration-500 group-hover:text-rust">
                        ◐
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl tracking-tight md:text-[1.65rem] leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-5 text-[15px] leading-relaxed text-bone/70">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
