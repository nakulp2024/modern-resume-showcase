import { Reveal } from "../Reveal";

const stats = [
  { value: "7+", label: "Years in construction tech" },
  { value: "$6B+", label: "Construction volume across implementations" },
  { value: "50+", label: "Projects delivered globally" },
  { value: "3", label: "Continents — USA, India, UK" },
];

export const Scale = () => {
  return (
    <section className="relative py-28 md:py-40 border-t border-bone/10">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-2">
            <Reveal className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ash">
              <span className="h-px w-6 bg-rust" />
              <span>05 — Scale</span>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-10">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight text-bone/60 md:text-3xl">
                In numbers
              </h2>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-y-12 md:mt-24 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.08}
                  className="border-t border-bone/15 pt-6"
                >
                  <div className="font-display text-[14vw] leading-[0.9] tracking-tight md:text-[7rem] lg:text-[8.5rem]" style={{ fontWeight: 500 }}>
                    {s.value}
                  </div>
                  <div className="mt-6 max-w-xs text-sm uppercase tracking-[0.18em] text-ash">
                    {s.label}
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
