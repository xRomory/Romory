import { AuroraText } from "@/components/magicui/aurora-text";
import LetterGlitch from "@/blocks/Backgrounds/LetterGlitch/LetterGlitch";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
        className="absolute inset-0 -z-10"
      />
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl/none">
                <span className="font-light text-3xl block my-4">Hi, I'm</span>
                <span className="font-semibold block">Lawrence De Vera</span>
                <AuroraText className="font-light text-3xl block">
                  {">"} aspiring full-stack developer
                </AuroraText>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
