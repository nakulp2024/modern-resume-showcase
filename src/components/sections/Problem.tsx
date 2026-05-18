import { RevealWords, Reveal } from "../Reveal";

export const Problem = () => {
  return (
    <section className="relative py-28 md:py-40 border-t border-bone/10">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-2">
            <Reveal className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ash">
              <span className="h-px w-6 bg-rust" />
              <span>02 — Problem</span>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="font-display text-2xl leading-[1.35] tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              <RevealWords text="Most organisations have the right software." />
              <span className="text-ash">
                {" "}
                <RevealWords
                  text="Few have the right strategy around it."
                  delay={0.2}
                />
              </span>
              <br />
              <span className="block mt-6">
                <RevealWords
                  text="Tools go underused, workflows stay manual, and the value stays locked."
                  delay={0.5}
                />
              </span>
              <span className="block mt-6 text-rust">
                <RevealWords text="That's where I come in." delay={0.9} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
