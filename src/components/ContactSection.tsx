import { ArrowUpRight, Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big typographic CTA */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 text-foreground leading-[0.95]">
                Have a project
                <br />
                in <span className="text-primary italic">mind</span>?
              </h2>
              <p className="font-body text-muted-foreground mt-6 max-w-md leading-relaxed">
                I'm always excited to collaborate on innovative projects. Whether it's a blockchain dApp,
                a sleek landing page, or a complex web application — let's build something remarkable together.
              </p>
            </motion.div>
          </div>

            {/* Availability badge */}
            {/* <div className="mt-8 inline-flex items-center gap-3 px-4 py-2.5 border border-border bg-background">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                Available for freelance
              </span>
            </div> */}

          {/* Right: Contact "card" styled like a postcard */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border border-border bg-background p-0 relative"
          >
            {/* Header area */}
            <div className="border-b border-border p-5 flex items-center justify-between">
              <span className="editorial-tag">Contact</span>
            </div>

            {/* Contact items */}
            <div className="divide-y divide-border">
              <div className="p-5 flex items-center gap-4 group hover:bg-secondary/30 transition-colors">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                  <Mail size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="editorial-tag block">Email</span>
                  <a href="mailto:ahsanfiazpasha@gmail.com" className="font-body text-sm text-foreground hover:text-primary transition-colors truncate block">
                    ahsanfiazpasha@gmail.com
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard("ahsanfiazpasha@gmail.com", "email")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Copy email"
                >
                  {copied === "email" ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className="p-5 flex items-center gap-4 group hover:bg-secondary/30 transition-colors">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                  <Phone size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="editorial-tag block">Phone</span>
                  <a href="tel:+923105798316" className="font-body text-sm text-foreground hover:text-primary transition-colors block">
                    +92 310 579 8316
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard("+923105798316", "phone")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Copy phone"
                >
                  {copied === "phone" ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className="p-5 flex items-center gap-4 group hover:bg-secondary/30 transition-colors">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                  <Github size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <span className="editorial-tag block">GitHub</span>
                  <a href="https://github.com/ahsanpasha" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                    ahsanpasha <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              <div className="p-5 flex items-center gap-4 group hover:bg-secondary/30 transition-colors">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                  <Linkedin size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <span className="editorial-tag block">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/ahsan-fiaz-pasha" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                    ahsan-fiaz-pasha <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom: decorative postmark */}
            <div className="border-t border-border p-4 flex items-center justify-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
                Islamabad, Pakistan
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
