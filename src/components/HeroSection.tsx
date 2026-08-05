import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Circle,
  Download,
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const maskVariants = {
  hidden: { y: "120%", rotate: 4 },
  visible: { 
    y: 0, 
    rotate: 0, 
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Highly dramatic Webflow-style mask reveal
  }
};

const fadeBlurVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const CODE_LINES = [
  [{ text: "// quick overview", className: "text-muted-foreground/30 italic" }],
  [{ text: " ", className: "" }],
  [
    { text: "const ", className: "text-primary/70" },
    { text: "developer ", className: "text-foreground font-semibold" },
    { text: "= ", className: "text-primary" },
    { text: "{", className: "text-muted-foreground" }
  ],
  [
    { text: "name", className: "text-accent" },
    { text: ": ", className: "text-muted-foreground" },
    { text: '"Ahsan Fiaz Pasha"', className: "text-primary" },
    { text: ",", className: "text-muted-foreground" }
  ],
  [
    { text: "role", className: "text-accent" },
    { text: ": ", className: "text-muted-foreground" },
    { text: '"Full Stack Developer"', className: "text-primary" },
    { text: ",", className: "text-muted-foreground" }
  ],
  [
    { text: "experience", className: "text-accent" },
    { text: ": ", className: "text-muted-foreground" },
    { text: '"1.5+ years"', className: "text-foreground" },
    { text: ",", className: "text-muted-foreground" }
  ],
  [
    { text: "stack", className: "text-accent" },
    { text: ": [", className: "text-muted-foreground" },
    { text: '"React"', className: "text-primary" },
    { text: ", ", className: "text-muted-foreground" },
    { text: '"Next.js"', className: "text-primary" },
    { text: ", ", className: "text-muted-foreground" },
    { text: '"Node.js"', className: "text-primary" },
    { text: ", ", className: "text-muted-foreground" },
    { text: '"NestJS"', className: "text-primary" },
    { text: ", ", className: "text-muted-foreground" },
    { text: '"MongoDB"', className: "text-primary" },
    { text: "],", className: "text-muted-foreground" }
  ],
  [
    { text: "passion", className: "text-accent" },
    { text: ": ", className: "text-muted-foreground" },
    { text: '"Scalable Backends & Seamless UX"', className: "text-primary" },
    { text: ",", className: "text-muted-foreground" }
  ],
  [
    { text: "}", className: "text-muted-foreground" },
    { text: ";", className: "text-muted-foreground" }
  ],
  [{ text: " ", className: "" }],
  [
    { text: "▸ ", className: "text-accent" },
    { text: "developer", className: "text-muted-foreground/60" },
    { text: ".", className: "text-primary" },
    { text: "build", className: "text-accent" },
    { text: "()", className: "text-muted-foreground" }
  ],
  [{ text: "// → shipping pixels...", className: "text-muted-foreground/25 italic" }]
];

const TypewriterCode = ({ loaded }: { loaded: boolean }) => {
  const [visibleChars, setVisibleChars] = useState(0);

  const totalChars = useMemo(() => {
    let count = 0;
    CODE_LINES.forEach(line => line.forEach(token => count += token.text.length));
    return count;
  }, []);

  useEffect(() => {
    if (!loaded) return;
    
    // Add a slight delay before the typing starts
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars(v => {
          if (v >= totalChars) {
            clearInterval(interval);
            return v;
          }
          return v + 1; // Speed of typing
        });
      }, 15); // VERY fast and fluid typing (like 15ms per char) for smooth effect
      return () => clearInterval(interval);
    }, 1200);
    
    return () => clearTimeout(startDelay);
  }, [loaded, totalChars]);

  let charsCounted = 0;
  
  return (
    <div className="flex-1 space-y-0">
      {CODE_LINES.map((line, lineIdx) => {
        let lineHasVisibleContent = false;
        let isCursorOnThisLine = false;

        const lineContent = line.map((token, tokenIdx) => {
          const text = token.text;
          const tokenStart = charsCounted;
          const tokenEnd = charsCounted + text.length;
          charsCounted += text.length;

          if (visibleChars <= tokenStart) return null;
          
          lineHasVisibleContent = true;
          
          if (visibleChars > tokenStart && visibleChars <= tokenEnd) {
            isCursorOnThisLine = true;
          }
          
          const visibleText = text.slice(0, Math.max(0, visibleChars - tokenStart));
          
          return (
            <span key={tokenIdx} className={token.className}>
              {visibleText}
            </span>
          );
        });
        
        // Check if cursor is exactly at the end of this line
        if (visibleChars === charsCounted && visibleChars > 0 && visibleChars < totalChars) {
          isCursorOnThisLine = true;
        }

        // Always show the last line if we reached the end
        if (visibleChars >= totalChars && lineIdx === CODE_LINES.length - 1) {
          isCursorOnThisLine = true;
        }

        if (!lineHasVisibleContent && visibleChars < charsCounted) {
           return <p key={lineIdx} className="h-[1.5em] m-0 p-0 leading-[1.8]" />; 
        }

        return (
          <p key={lineIdx} className={`min-h-[1.5em] leading-[1.8] m-0 ${lineIdx >= 3 && lineIdx <= 7 ? "pl-5" : ""}`}>
            {lineContent}
            {isCursorOnThisLine && (
              <span className="w-[7px] h-[15px] bg-primary/70 ml-[1px] animate-[pulse_0.8s_ease-in-out_infinite] inline-block align-middle shadow-[0_0_8px_hsl(12_76%_56%/0.6)]" />
            )}
          </p>
        );
      })}
    </div>
  );
};

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
            className="absolute rounded-full bg-primary animate-[pulse_3s_ease-in-out_infinite]"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              animationDelay: `${dot.delay}s`,
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

      <div className="w-full max-w-[78rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left — Text */}
        <motion.div
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
        >
          <motion.p
            variants={fadeBlurVariants}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-2"
          >
            Hey, I'm
          </motion.p>

          <h1 className="font-display font-black leading-[0.9] tracking-tight mb-6 mt-1 flex flex-col gap-1">
            <div className="overflow-hidden pb-1">
              <motion.span variants={maskVariants} className="block text-4xl sm:text-5xl md:text-7xl">
                <span className="text-primary drop-shadow-[0_0_15px_hsl(12_76%_56%/0.2)]">Ahsan</span>{" "}
                <span className="text-foreground">Fiaz</span>
              </motion.span>
            </div>
            <div className="overflow-hidden pb-2">
              <motion.span variants={maskVariants} className="block text-4xl sm:text-5xl md:text-7xl text-foreground">
                Pasha
              </motion.span>
            </div>
          </h1>

          <motion.p
            variants={fadeBlurVariants}
            className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-6 mt-4"
          >
            Full Stack Developer with 1.5+ years of experience building scalable
            web applications. Skilled in creating modern, user-friendly
            interfaces and high-performance backend systems with{" "}
            <span className="text-primary font-medium">
              React, Next.js, Node.js, NestJS and MongoDB
            </span>
            .
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeBlurVariants}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_-5px_hsl(12_76%_56%/0.5)]"
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
              className="group inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground font-mono text-[11px] uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-all duration-300"
            >
              Download Resume
              <Download
                size={13}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeBlurVariants}
            className="flex items-center gap-3 mt-10"
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
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm"
                aria-label={s.label}
              >
                <s.icon size={15} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Visual card */}
        <motion.div
          initial={{ opacity: 0, rotateY: -35, rotateX: 15, scale: 0.8, z: -300 }}
          animate={loaded ? { opacity: 1, rotateY: 0, rotateX: 0, scale: 1, z: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-2xl rounded-full" />
          <div className="w-full mx-auto border border-border rounded-lg overflow-hidden shadow-[0_20px_60px_-15px_hsl(12_76%_56%/0.15)] bg-background group relative z-10">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-foreground/[0.03] border-b border-border backdrop-blur-sm">
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
              <span className="font-mono text-[10px] text-muted-foreground ml-2 opacity-60">
                ahsanfiazpasha
              </span>
            </div>

            {/* File tabs */}
            <div className="flex border-b border-border bg-foreground/[0.015]">
              <div className="px-4 py-2.5 font-mono text-xs border-r border-border bg-background text-foreground relative">
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
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
                  style={{ minWidth: "2.5rem" }}
                >
                  {Array.from({ length: 14 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Code content */}
                <TypewriterCode loaded={loaded} />
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-foreground/[0.03] border-t border-border text-[9px] font-mono text-muted-foreground/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/80" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
