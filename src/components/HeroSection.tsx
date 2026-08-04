import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  Circle,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-10 md:px-12 py-24 pt-16 md:pt-28">

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: "10%", y: "20%", size: 3, opacity: 0.08, delay: 0 },
          { x: "85%", y: "15%", size: 4, opacity: 0.06, delay: 1 },
          { x: "70%", y: "75%", size: 3, opacity: 0.07, delay: 2 },
          { x: "25%", y: "80%", size: 5, opacity: 0.05, delay: 0.5 },
          { x: "50%", y: "10%", size: 2, opacity: 0.1, delay: 1.5 },
          { x: "90%", y: "50%", size: 3, opacity: 0.06, delay: 0.8 },
          { x: "15%", y: "55%", size: 4, opacity: 0.05, delay: 2.2 },
          { x: "60%", y: "40%", size: 2, opacity: 0.08, delay: 1.2 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary animate-pulse"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              animationDelay: `${dot.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* L-shaped corner brackets — thin & elegant */}
      {/* Top-left */}
      <div className="absolute top-8 left-4 md:top-14 md:left-12 pointer-events-none">
        <div className="w-10 h-[1px] bg-primary/40" />
        <div className="w-[1px] h-10 bg-primary/40" />
      </div>
      {/* Top-right */}
      <div className="absolute top-8 right-4 md:top-14 md:right-12 pointer-events-none flex flex-col items-end">
        <div className="w-10 h-[1px] bg-primary/40" />
        <div className="w-[1px] h-10 bg-primary/40 ml-auto" />
      </div>
      {/* Bottom-left */}
      <div className="absolute bottom-16 left-4 md:bottom-8 md:left-12 pointer-events-none">
        <div className="w-[1px] h-10 bg-primary/40" />
        <div className="w-10 h-[1px] bg-primary/40" />
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-16 right-4 md:bottom-8 md:right-12 pointer-events-none flex flex-col items-end">
        <div className="w-[1px] h-10 bg-primary/40 ml-auto" />
        <div className="w-10 h-[1px] bg-primary/40" />
      </div>

      <div className="w-full max-w-[78rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-1 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          >
            Hey, I'm
          </p>

          <h1 className="font-display font-black leading-[0.9] tracking-tight mb-5">
            <span
              className={`block text-4xl sm:text-5xl md:text-6xl transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="text-primary">Ahsan</span>{" "}
              <span className="text-foreground">Fiaz</span>
            </span>
            <span
              className={`block text-4xl sm:text-5xl md:text-6xl text-foreground mt-1 transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Pasha
            </span>
          </h1>

          <p
            className={`font-body text-base text-muted-foreground max-w-md leading-relaxed mb-4 transition-all duration-700 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          >
            Full Stack Developer with 1.5+ years of experience building scalable
            web applications. Skilled in creating modern, user-friendly
            interfaces and high-performance backend systems with{" "}
            <span className="text-primary font-medium">
              React, Next.js, Node.js, NestJS and MongoDB
            </span>
            . Passionate about delivering seamless, high-quality user
            experiences.
          </p>
          {/* 
          <p className={`font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] mb-8 flex items-center gap-1.5 transition-all duration-700 delay-600 ${loaded ? "opacity-100" : "opacity-0"}`}>
            <MapPin size={12} className="text-primary" />
            Islamabad, Pakistan
          </p> */}

          {/* Actions */}
          <div
            className={`flex items-center gap-4 flex-wrap transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-primary/90 transition-all duration-300"
            >
              View Projects
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/pdf/Ahsan_Resume.pdf"
              download="Ahsan_Resume.pdf"
              className="group inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-mono text-[11px] uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-all duration-300"
            >
              Download Resume
              <Download
                size={13}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Socials */}
          <div
            className={`flex items-center gap-3 mt-8 transition-all duration-700 transition-delay-[800ms] ${loaded ? "opacity-100" : "opacity-0"}`}
          >
            {[
              {
                href: "https://github.com/ahsanpasha",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/ahsan-fiaz-pasha",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:ahsanfiazpasha@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Visual card */}
        <div
          className={`transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative">
            <div className="w-full mx-auto border border-border rounded-lg overflow-hidden shadow-[0_8px_40px_-12px_hsl(var(--foreground)/0.15)] bg-background group">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-foreground/[0.04] border-b border-border">
                <div className="flex gap-1.5">
                  <Circle
                    size={10}
                    className="fill-[hsl(0,70%,60%)] text-[hsl(0,70%,60%)]"
                  />
                  <Circle
                    size={10}
                    className="fill-[hsl(45,80%,55%)] text-[hsl(45,80%,55%)]"
                  />
                  <Circle
                    size={10}
                    className="fill-[hsl(140,50%,50%)] text-[hsl(140,50%,50%)]"
                  />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground ml-2 opacity-50">
                  ahsanfiazpasha
                </span>
              </div>

              {/* File tabs */}
              <div className="flex border-b border-border bg-foreground/[0.02]">
                <div className="px-4 py-2.5 font-mono text-xs border-r border-border bg-background text-foreground relative">
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
                  <span className="text-muted-foreground/50 mr-1">📄</span>
                  about.tsx
                </div>
              </div>

              {/* Code Area */}
              <div className="p-5 font-mono text-[12px] leading-[1.8] bg-background">
                <div className="flex">
                  {/* Line numbers */}
                  <div
                    className="select-none pr-5 text-muted-foreground/20 text-right"
                    style={{ minWidth: "2rem" }}
                  >
                    {Array.from({ length: 14 }, (_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  {/* Code content */}
                  <div className="flex-1 space-y-0">
                    <p className="text-muted-foreground/30 italic">
                      {"// quick overview"}
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <span className="text-primary/70">const</span>{" "}
                      <span className="text-foreground font-semibold">
                        developer
                      </span>{" "}
                      <span className="text-primary">=</span>{" "}
                      <span className="text-muted-foreground">{"{"}</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-accent">name</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-primary">"Ahsan Fiaz Pasha"</span>
                      <span className="text-muted-foreground">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-accent">role</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-primary">
                        "Full Stack Developer"
                      </span>
                      <span className="text-muted-foreground">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-accent">experience</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-foreground">"1.5+ years"</span>
                      <span className="text-muted-foreground">,</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-accent">stack</span>
                      <span className="text-muted-foreground">: [</span>
                      <span className="text-primary">"React"</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-primary">"Next.js"</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-primary">"Node.js"</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-primary">"NestJS"</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-primary">"MongoDB"</span>
                      <span className="text-muted-foreground">],</span>
                    </p>
                    <p className="pl-5">
                      <span className="text-accent">passion</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-primary">
                        "Scalable Backends & Seamless UX"
                      </span>
                      <span className="text-muted-foreground">,</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">{"}"}</span>
                      <span className="text-muted-foreground">;</span>
                    </p>
                    <p>&nbsp;</p>
                    {/* Blinking cursor line */}
                    <p className="flex items-center gap-1">
                      <span className="text-accent">▸</span>
                      <span className="text-muted-foreground/60">
                        developer
                      </span>
                      <span className="text-primary">.</span>
                      <span className="text-accent">build</span>
                      <span className="text-muted-foreground">()</span>
                      <span className="w-[7px] h-[15px] bg-primary/70 ml-0.5 animate-pulse inline-block" />
                    </p>
                    <p className="text-muted-foreground/25 italic">
                      {"// → shipping pixels..."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-1.5 bg-foreground/[0.04] border-t border-border text-[9px] font-mono text-muted-foreground/40">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    TypeScript
                  </span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Ln 14, Col 28</span>
                  <span>Spaces: 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
