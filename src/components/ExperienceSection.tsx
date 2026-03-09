import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    role: "Frontend Web Developer",
    company: "Blockmob Labs",
    location: "Islamabad",
    period: "Jul 2024 — Present",
    duration: "1+ year",
    highlights: [
      "Built blockchain applications including wallet extensions, dApps, and interactive landing pages",
      "Integrated MetaMask wallet services and collaborated on smart contract functionalities",
      "Translated complex UI/UX designs into pixel-perfect interfaces",
      "Participated in Agile workflows including sprint planning and code reviews",
    ],
    stack: ["React.js", "Next.js", "MetaMask", "DGraph"],
  },
  {
    role: "Frontend Web Developer",
    company: "Capstone Technology Group",
    location: "Remote",
    period: "Feb 2025 — Aug 2025",
    duration: "7 months",
    highlights: [
      "Developed landing pages and web applications for blockchain projects using React.js, Next.js",
      "Built responsive UIs with Tailwind CSS, Bootstrap, and Material UI",
      "Worked on wallet integrations and front-end components for dApps",
      "Collaborated with designers to ensure UI consistency and performance",
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
];

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="editorial-tag">Chapter 02</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Where I've Worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const isOpen = expanded === i;

            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-8 z-10" />

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 ${isLeft ? "md:pr-12" : "md:pl-12"} md:w-1/2 cursor-pointer`}
                  onClick={() => setExpanded(isOpen ? -1 : i)}
                >
                  <div
                    className={`border transition-all duration-500 overflow-hidden ${isOpen
                        ? "border-primary bg-background shadow-[0_0_40px_-12px_hsl(12_76%_56%/0.15)]"
                        : "border-border bg-card hover:border-primary/40"
                      }`}
                  >
                    {/* Header bar */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{exp.duration}</span>
                          <h3 className="font-display text-xl font-bold text-foreground mt-1">
                            {exp.role}
                          </h3>
                        </div>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? "border-primary bg-primary text-primary-foreground rotate-45" : "border-border text-muted-foreground"
                          }`}>
                          <span className="text-lg leading-none">+</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Briefcase size={12} /> {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin size={12} /> {exp.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar size={12} /> {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Expandable content */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isOpen ? "600px" : "0", opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-border pt-4 mb-4" />

                        <ul className="space-y-3 mb-6">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="font-body text-sm text-muted-foreground leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Stack pills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((s) => (
                            <span
                              key={s}
                              className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-primary/10 text-primary"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Education at the end of timeline */}
          <div className="relative flex flex-col md:flex-row items-start">
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1.5 mt-8 z-10" />
            <div className="hidden md:block md:w-1/2" />
            <div className="ml-14 md:ml-0 md:pr-12 md:w-1/2">
              <div className="border border-dashed border-border p-6 bg-card">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Education</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">
                  BS Computer Science
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  PMAS Arid Agriculture University, Rawalpindi
                </p>
                <span className="font-mono text-xs text-muted-foreground">2020 — 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
