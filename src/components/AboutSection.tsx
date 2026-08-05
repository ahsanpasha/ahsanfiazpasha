import { Code2, Palette, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Component-based architecture with reusable, maintainable patterns.",
  },
  {
    icon: Palette,
    title: "Pixel Perfect",
    desc: "Translating Figma designs into flawless, responsive interfaces.",
  },
  {
    icon: Server,
    title: "Backend Core",
    desc: "Scalable APIs, database management, and efficient server-side logic.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimized load times, SEO, and cross-browser compatibility.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Removed background text */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Left-aligned header */}
        <div className="mb-16 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 80, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="editorial-tag">Chapter 01</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
              Crafting the <span className="text-primary italic">web's</span> future
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Intro */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <motion.p 
                  className="font-display text-lg text-foreground font-medium leading-relaxed"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  I'm Ahsan — a Full Stack developer who engineers digital experiences from the database to the pixel.
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p 
                  className="font-body text-sm text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  With a CS degree from PMAS Arid Agriculture University and 1.5+ years of professional experience,
                  I specialize in building high-performance web applications. I bridge the gap between
                  complex server-side logic and intuitive, user-centric frontend architectures.
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p 
                  className="font-body text-sm text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  Whether I'm architecting scalable RESTful APIs with Node.js and NestJS or crafting
                  fluid, responsive interfaces in React, my mission remains the same: building
                  secure, high-performance systems with a relentless focus on the end-user.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Right: Cards + stats */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="group border border-border bg-background p-6 relative overflow-hidden hover-lift cursor-default"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, hsl(12 76% 56% / 0.05), transparent)" }}
                  />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                      <p.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border">
              <div className="p-6 text-center border-b sm:border-b-0 sm:border-r border-border bg-background relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="font-display text-4xl font-black text-primary relative z-10 block">1.5+</span>
                <span className="editorial-tag relative z-10 block mt-1">Years</span>
              </div>
              <div className="p-6 text-center border-b sm:border-b-0 sm:border-r border-border bg-background relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="font-display text-4xl font-black text-primary relative z-10 block">20+</span>
                <span className="editorial-tag relative z-10 block mt-1">Projects</span>
              </div>
              <div className="p-6 text-center bg-background relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="font-display text-4xl font-black text-primary relative z-10 block">∞</span>
                <span className="editorial-tag relative z-10 block mt-1">Curiosity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
