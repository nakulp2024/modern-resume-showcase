import { Reveal } from "../Reveal";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 border-t border-bone/10"
    >
      <div className="container max-w-6xl">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-2">
            <Reveal className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ash">
              <span className="h-px w-6 bg-rust" />
              <span>07 — Contact</span>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-10">
            <Reveal>
              <h2 className="font-display text-[12vw] leading-[0.95] tracking-tight md:text-[8vw] lg:text-[7rem]" style={{ fontWeight: 500 }}>
                Let&apos;s talk<span className="text-rust">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
                If you&apos;re evaluating software, stuck mid-implementation, or
                just need a clear head on your tech stack — reach out.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
              <Reveal delay={0.2}>
                <div className="border-t border-bone/15 pt-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-ash">
                    Email
                  </div>
                  <a
                    href="mailto:nakulprajapati20@gmail.com"
                    className="group mt-5 inline-flex items-center gap-3 font-display text-xl tracking-tight transition-colors duration-300 hover:text-rust md:text-2xl"
                  >
                    <span>nakulprajapati20@gmail.com</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        d="M3 11L11 3M11 3H4M11 3V10"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="border-t border-bone/15 pt-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-ash">
                    LinkedIn
                  </div>
                  <a
                    href="https://linkedin.com/in/nakulprajapati-7b223271"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group mt-5 inline-flex items-center gap-3 font-display text-xl tracking-tight transition-colors duration-300 hover:text-rust md:text-2xl"
                  >
                    <span>linkedin.com/in/nakulprajapati</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        d="M3 11L11 3M11 3H4M11 3V10"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-12 items-end gap-4 border-t border-bone/10 pt-6 text-xs uppercase tracking-[0.2em] text-ash md:mt-40">
          <div className="col-span-6 md:col-span-3">
            © {new Date().getFullYear()} Nakul Prajapati
          </div>
          <div className="col-span-6 md:col-span-3">Independent practice</div>
          <div className="hidden md:col-span-3 md:block">USA · India · UK</div>
          <div className="hidden md:col-span-3 md:block text-right">
            Back to top{" "}
            <a href="#top" className="text-rust">
              ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
