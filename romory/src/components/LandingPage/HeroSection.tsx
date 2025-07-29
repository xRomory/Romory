import type { ContactItem } from "@/types";
import { AuroraText } from "@/components/magicui/aurora-text";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";

const contactItem: ContactItem[] = [
  {
    label: "// my phone number",
    name: "contactNumber",
    value: "+639192159185",
    color: "text-purple-400",
  },
  {
    label: "// my email address",
    name: "email",
    value: "clyncemiro@gmail.com",
    color: "text-blue-400",
  },
  {
    label: "// you can see my GitHub's profile",
    name: "gitHubLink",
    value: "https://github.com/xRomory",
    href: "https://github.com/xRomory",
  },
  {
    label: "// visit my LinkedIn's profile",
    name: "linkedinLink",
    value: "https://www.linkedin.com/in/chris-lawrence-de-vera/",
    href: "https://www.linkedin.com/in/chris-lawrence-de-vera/",
  },
];

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <Aurora 
        speed={0.5} 
        amplitude={0.6}
      />
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl/none">
                <span className="font-light text-xl md:text-3xl block my-4">
                  Hi, I'm
                </span>
                <span className="font-semibold block my-4">
                  Lawrence De Vera
                </span>
                <AuroraText className="md:font-normal md:text-3xl text-xl block max-w-[600px]">
                  {">"} junior full-stack developer
                </AuroraText>
              </h1>

              <div className="mt-24 space-y-6 text-lg">
                {contactItem.map((item) => (
                  <div key={item.name}>
                    <p className="text-muted-foreground">{item.label}</p>
                    <span className=" text-purple-400">const </span>
                    <span className=" text-blue-400">{item.name}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base transition-transform duration-300 hover:translate-x-4"
                      >
                        {" "}
                        = {`"${item.value}"`};
                      </a>
                    ) : (
                      <span className="text-base transition-transform duration-300 hover:translate-x-4">
                        {" "}
                        = {`"${item.value}"`};
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
