import { motion, useReducedMotion } from "framer-motion";

const name = "Nakul Prajapati";

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ash"
            >
              <span className="h-px w-6 bg-rust" />
              <span>01 — Index</span>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <motion.h1
              initial={reduce ? { opacity: 0 } : { opacity: 0, letterSpacing: "0em" }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, letterSpacing: "-0.02em" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[14vw] leading-[0.9] tracking-tight md:text-[9.5vw] lg:text-[8.5rem] xl:text-[10rem]"
              style={{ fontWeight: 500 }}
            >
              <span className="block">
                {name.split(" ")[0]}
              </span>
              <span className="block">
                {name.split(" ")[1]}
                <span className="text-rust">.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="mt-10 max-w-xl text-sm uppercase tracking-[0.2em] text-ash"
            >
              Software Consultant · Construction &amp; Infrastructure
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.65 }}
              className="mt-10 max-w-2xl text-lg leading-relaxed text-bone/85 md:text-xl"
            >
              I work with organisations to make sense of their tools, workflows, and
              data — so their teams can focus on building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.85 }}
              className="mt-14"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 border border-bone/20 px-7 py-4 text-sm uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-rust hover:text-rust"
              >
                <span>Let's talk</span>
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 5H17M17 5L13 1M17 5L13 9"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mt-24 md:mt-36">
        <div className="grid grid-cols-12 items-end gap-4 border-t border-bone/10 pt-6 text-xs uppercase tracking-[0.2em] text-ash">
          <div className="col-span-6 md:col-span-3">Independent</div>
          <div className="col-span-6 md:col-span-3">USA · India · UK</div>
          <div className="hidden md:col-span-3 md:block">Est. 2018</div>
          <div className="hidden md:col-span-3 md:block text-right">
            Scroll <span className="text-rust">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
