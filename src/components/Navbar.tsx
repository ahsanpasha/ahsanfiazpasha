import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = navItems.map((n) => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <>
      {/* Desktop: Floating pill navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-border shadow-lg"
            : "bg-background/40 backdrop-blur-md border-transparent"
          }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="px-4 py-1.5 font-display text-base font-bold text-foreground"
        >
          Ahsan<span className="text-primary">.</span>
        </a>

        <div className="w-px h-5 bg-border mx-1" />

        {/* Nav links */}
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-300 ${isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
            >
              {item.label}
            </a>
          );
        })}

        <div className="w-px h-5 bg-border mx-1" />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-foreground/5 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </nav>

      {/* Mobile: Bottom floating bar */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-lg px-2 py-2">
          {/* Top row: logo + theme + hamburger */}
          {!mobileOpen && (
            <div className="flex items-center justify-between px-3 py-1">
              <a href="#" className="font-display text-base font-bold text-foreground">
                Ahsan<span className="text-primary">.</span>
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground"
                  aria-label="Toggle theme"
                >
                  {dark ? <Sun size={14} /> : <Moon size={14} />}
                </button>
                <button
                  onClick={() => setMobileOpen(true)}
                  className="font-mono text-[10px] uppercase tracking-wider text-primary px-3 py-1.5 border border-primary rounded-full"
                >
                  Menu
                </button>
              </div>
            </div>
          )}

          {/* Expanded menu */}
          {mobileOpen && (
            <div className="p-2 animate-fade-in">
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="font-display text-base font-bold text-foreground">
                  Ahsan<span className="text-primary">.</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground px-3 py-1.5 border border-border rounded-full"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-center py-2.5 rounded-xl font-mono text-[10px] uppercase tracking-[0.1em] transition-all ${isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/5 text-muted-foreground"
                        }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <button
                  onClick={toggleTheme}
                  className="text-center py-2.5 rounded-xl font-mono text-[10px] uppercase tracking-[0.1em] bg-foreground/5 text-muted-foreground"
                >
                  {dark ? "☀ Light" : "● Dark"}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
