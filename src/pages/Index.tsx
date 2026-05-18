import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Stack } from "@/components/sections/Stack";
import { Scale } from "@/components/sections/Scale";
import { HowIWork } from "@/components/sections/HowIWork";
import { Contact } from "@/components/sections/Contact";
import { ProgressRail } from "@/components/ProgressRail";

const Index = () => {
  return (
    <div id="top" className="relative min-h-screen bg-ink text-bone">
      <ProgressRail />
      <main>
        <Hero />
        <Problem />
        <WhatIDo />
        <Stack />
        <Scale />
        <HowIWork />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
