import { RevealWords, Reveal } from "../Reveal";

export const HowIWork = () => {
  return (
    <section className="relative py-28 md:py-40 border-t border-bone/10">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-2">
            <Reveal className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ash">
              <span className="h-px w-6 bg-rust" />
              <span>06 — Method</span>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <Reveal>
              <h2 className="font-display text-2xl tracking-tight text-bone/60 md:text-3xl">
                How I work
              </h2>
            </Reveal>

            <p className="mt-12 font-display text-2xl leading-[1.35] tracking-tight md:text-[2.2rem] md:leading-[1.25]">
              <span className="text-rust">
                <RevealWords text="Solo. No layers." />
              </span>{" "}
              <RevealWords
                text="You work directly with me, start to finish."
                delay={0.25}
              />
              <span className="block mt-6 text-bone/80">
                <RevealWords
                  text="I embed into your context, learn your constraints, and give you an honest view — not a sales pitch."
                  delay={0.6}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
