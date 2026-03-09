import { useState } from "react";
import { Circle } from "lucide-react";

const tabs = [
  {
    file: "skills.js",
    code: `// ⚡ Ahsan Fiaz Pasha — Core Skills
// ────────────────────────────────────

const languages = {
  "JavaScript (ES6+)": "★★★★★",
  "TypeScript":        "★★★★☆",
  "HTML5":             "★★★★★",
  "CSS3":              "★★★★★",
};

const frameworks = {
  "React.js":  "★★★★★",
  "Next.js":   "★★★★★",
  "Node.js":   "★★★★★",
  "NestJS":    "★★★★★",
  "Express":   "★★★★★",
  "MongoDB":   "★★★★☆",
  "PostgreSQL":"★★★★☆",
};

const stateManagement = [
  "Redux",
  "Context API",
  "WebSocket",
  "REST APIs",
];

export { languages, frameworks, stateManagement };`,
  },
  {
    file: "styles.css",
    code: `/* ── Styling & UI Libraries ─────────── */

.toolkit {
  --tailwind:         "★★★★★";
  --material-ui:      "★★★★☆";
  --styled-components: "★★★★☆";
  --react-bootstrap:  "★★★★☆";
}

/* ── Web3 Stack ────────────────────── */

.web3 {
  --ethers-js:        "★★★★☆";
  --solana-web3:      "★★★★☆";
  --metamask:         "★★★★☆";
  --wallet-connect:   "★★★★☆";
}

/* ── Design ────────────────────────── */

.design {
  --figma:            "★★★★☆";
  --photoshop:        "★★★☆☆";
  --coreldraw:        "★★★★★";
}`,
  },
  {
    file: "tools.js",
    code: `// ── Dev Environment ─────────────────

const devTools = {
  ide:        "VS Code",
  vcs:        "Git & GitHub",
  deploy:     "Vercel",
  linting:    "ESLint + Prettier",
  packages:   "npm / yarn",
};

// ── Workflow & Practices ────────────

const practices = {
  methodology:  "Agile / Scrum",
  architecture: "Component-Based",
  focus:        ["Responsive", "Accessible", "Fast"],
};

console.log("Ready to build something great. 🚀");`,
  },
];

const syntaxHighlight = (code: string, file: string): React.ReactNode[] => {
  const lines = code.split("\n");

  return lines.map((line, i) => {
    let highlighted = line;

    if (file.endsWith(".js")) {
      // Comments
      if (highlighted.trimStart().startsWith("//")) {
        highlighted = `<span class="text-muted-foreground/60 italic">${highlighted}</span>`;
      } else {
        // Keywords
        highlighted = highlighted.replace(
          /\b(const|let|var|export|import|from|function|return|console)\b/g,
          '<span class="text-[hsl(12,76%,56%)]">$1</span>'
        );
        // Strings
        highlighted = highlighted.replace(
          /"([^"]*)"/g,
          '<span class="text-[hsl(175,40%,40%)]">"$1"</span>'
        );
        // Methods
        highlighted = highlighted.replace(
          /\.(log)\b/g,
          '.<span class="text-[hsl(35,90%,50%)]">$1</span>'
        );
      }
    } else if (file.endsWith(".css")) {
      // Comments
      if (highlighted.trimStart().startsWith("/*") || highlighted.trimStart().startsWith("*") || highlighted.trimStart().endsWith("*/")) {
        highlighted = `<span class="text-muted-foreground/60 italic">${highlighted}</span>`;
      } else if (highlighted.includes("{") || highlighted.includes("}")) {
        // Selectors
        highlighted = highlighted.replace(
          /^(\.[a-zA-Z0-9_-]+)/,
          '<span class="text-[hsl(12,76%,56%)]">$1</span>'
        );
      } else {
        // Properties
        highlighted = highlighted.replace(
          /(--[a-zA-Z0-9-]+):/,
          '<span class="text-[hsl(175,40%,40%)]">$1</span>:'
        );
        // Values
        highlighted = highlighted.replace(
          /:\s+"([^"]+)"/,
          ': <span class="text-[hsl(35,90%,50%)]">"$1"</span>'
        );
      }
    }

    return (
      <div key={i} className="flex hover:bg-foreground/[0.03] transition-colors">
        <span className="w-10 text-right pr-4 text-muted-foreground/30 select-none flex-shrink-0">
          {i + 1}
        </span>
        <span dangerouslySetInnerHTML={{ __html: highlighted || "&nbsp;" }} />
      </div>
    );
  });
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="editorial-tag">Chapter 04</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Skills & Toolkit
          </h2>
          <p className="font-body text-muted-foreground mt-3 text-sm max-w-md">
            Best viewed in a code editor — because that's where I live.
          </p>
        </div>

        {/* Code editor window */}
        <div className="w-full mx-auto border border-border rounded-lg overflow-hidden shadow-[0_8px_40px_-12px_hsl(20_10%_12%/0.15)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-foreground/[0.04] border-b border-border">
            <div className="flex gap-1.5">
              <Circle size={10} className="fill-[hsl(0,70%,60%)] text-[hsl(0,70%,60%)]" />
              <Circle size={10} className="fill-[hsl(45,80%,55%)] text-[hsl(45,80%,55%)]" />
              <Circle size={10} className="fill-[hsl(140,50%,50%)] text-[hsl(140,50%,50%)]" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground ml-2">ahsan-skills</span>
          </div>

          {/* File tabs */}
          <div className="flex border-b border-border bg-foreground/[0.02]">
            {tabs.map((tab, i) => (
              <button
                key={tab.file}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2.5 font-mono text-xs border-r border-border transition-colors relative ${activeTab === i
                  ? "bg-background text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.02]"
                  }`}
              >
                {activeTab === i && (
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
                )}
                <span className="text-muted-foreground/50 mr-1">
                  {tab.file.endsWith(".js") ? "📄" : "🎨"}
                </span>
                {tab.file}
              </button>
            ))}
          </div>

          {/* Code area */}
          <div className="bg-background p-4 overflow-x-auto">
            <pre className="font-mono text-xs leading-6 text-foreground/80">
              {syntaxHighlight(tabs[activeTab].code, tabs[activeTab].file)}
            </pre>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-foreground/[0.04] border-t border-border">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-muted-foreground/60">
                {tabs[activeTab].file.endsWith(".js") ? "JavaScript" : "CSS"}
              </span>
              <span className="font-mono text-[9px] text-muted-foreground/60">UTF-8</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-muted-foreground/60">
                Ln {tabs[activeTab].code.split("\n").length}, Col 1
              </span>
              <span className="font-mono text-[9px] text-primary">● Ahsan's Config</span>
            </div>
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="mt-12 overflow-hidden border-y border-border py-4">
          <div className="flex animate-[slide-marquee_25s_linear_infinite] whitespace-nowrap">
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex gap-8 mr-8">
                {["React.js", "Next.js", "Node.js", "NestJS", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Redux", "WebSocket", "REST APIs", "Git", "Figma", "Material UI", "Ethers.js", "Web3.js", "MetaMask", "Vercel"].map((s) => (
                  <span key={`${rep}-${s}`} className="font-mono text-xs uppercase tracking-wider text-muted-foreground/60">
                    {s} <span className="text-primary mx-2">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
