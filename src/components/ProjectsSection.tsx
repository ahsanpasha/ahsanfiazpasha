import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  number: string;
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  github?: string;
  link?: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "GAYA WALLET EXTENSION",
    description: "A secure and user-friendly multi-chain crypto wallet browser extension enabling users to manage digital assets across Ethereum and Solana networks.",
    longDesc: "Engineered a secure, non-custodial browser extension wallet designed for seamless interoperability between Ethereum and Solana. Integrated core features like cross-chain token swaps, NFT gallery viewing, and secure direct dApp connections using Ethers.js and Web3.js.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Ethers.js", "Web3.js"],
    github: "https://github.com/abuhuraira1234567889/snap-sharing-portal",
    link: "https://chromewebstore.google.com/detail/gaya-wallet/jafcnkgjohihjfmepbibneldbgfnhaoo",
    category: "Web3",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=crypto%20wallet%20browser%20extension%20interface%20with%20ethereum%20and%20solana%20tokens%20modern%20dark%20UI%20with%20gold%20accents&image_size=landscape_16_9",
  },
  {
    number: "02",
    title: "Evox",
    description: "A full-featured Property development platform where creators can issue Properties and Investors can easily buy property fractions with tokens.",
    longDesc: "Developed a groundbreaking real-estate tokenization platform bridging the gap between property developers and retail investors. Through advanced smart contract integration, developers can tokenize entire buildings, allowing users to purchase fractional ownership via Web3 wallets.",
    tech: ["React", "JavaScript", "Web3 Integration"],
    github: "https://github.com/blockmob/Investor-evox",
    link: "https://investor-evox.vercel.app/",
    category: "Real Estate Web3",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20real%20estate%20investment%20platform%20dashboard%20with%20skyscraper%20buildings%20and%20blockchain%20tokens%20luxury%20aesthetic&image_size=landscape_16_9",
  },
  {
    number: "03",
    title: "Magnus Capital",
    description: "Magnus Capital offers AI-powered Autotrading, Forex & Crypto courses, live trading signals, and deep market insights to help grow your wealth.",
    longDesc: "Built a comprehensive financial education and trading ecosystem wrapped in a sleek, user-centric dashboard. Features include real-time, low-latency trading signals fetched via WebSockets, AI-driven auto-trading algorithms, and an extensive video library.",
    tech: ["React", "Javascript", "Tailwind", "Redux"],
    github: "https://github.com/blockmob/magnus-webapp",
    link: "https://magnus-webapp.vercel.app/",
    category: "FinTech",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20financial%20trading%20dashboard%20with%20stock%20charts%20forex%20crypto%20graphs%20dark%20theme%20golden%20lines%20professional&image_size=landscape_16_9",
  },
  {
    number: "04",
    title: "Iltezam",
    description: "ILTEZAM is a digital platform built to unite the global Syrian community, enabling secure fundraising, volunteering, learning, and collaboration.",
    longDesc: "Architected a scalable, high-performance web platform using Next.js and TypeScript to serve as a secure social and humanitarian hub. The application features intricate role-based access for NGOs, donors, and volunteers.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Redux"],
    github: "https://github.com/blockmob/iltezam",
    link: "https://iltezam.co/",
    category: "Social Impact",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=humanitarian%20community%20platform%20with%20people%20connecting%20hands%20together%20warm%20earth%20tones%20hopeful%20aesthetic&image_size=landscape_16_9",
  },
  {
    number: "05",
    title: "Trade Reward",
    description: "A crypto rewards platform letting users earn real tokens for everyday trading. Features staking mechanics to lock utility tokens for monthly yield.",
    longDesc: "Engineered a sophisticated DeFi rewards structure that actively syncs with supported broker APIs to track user transaction volumes. The integrated staking mechanism facilitates complex epoch-based token locking.",
    tech: ["React", "Javascript", "Redux"],
    github: "https://github.com/blockmob/Trade-Reward",
    link: "https://traderewards.io/",
    category: "DeFi / Rewards",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=crypto%20staking%20and%20rewards%20platform%20defi%20dashboard%20with%20golden%20coins%20and%20APY%20percentages%20modern%20design&image_size=landscape_16_9",
  },
  {
    number: "06",
    title: "Gaya Blockchain",
    description: "GAYA is a UAE-based Layer-1 blockchain supporting fast EVM compatibility, staking, utility tokens, and multi-chain operations via the ecosystem.",
    longDesc: "Designed the frontline interfaces and foundational exploration tools for physical Layer-1 blockchain architecture. Emphasized low-latency block-syncing displays and intuitive staking modules.",
    tech: ["React", "Javascript", "CSS"],
    github: "https://github.com/blockmob/gaya-blockchain",
    link: "https://gayablockchain.io/",
    category: "Blockchain",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=layer%201%20blockchain%20network%20visualization%20connected%20blocks%20nodes%20UAE%20futuristic%20architecture%20dark%20purple%20blue&image_size=landscape_16_9",
  },
  {
    number: "07",
    title: "GAYA Wallet",
    description: "GAYA Wallet is a next-generation, secure non-custodial multichain Web3 wallet supporting seamless transfers across various blockchain networks.",
    longDesc: "Developed a comprehensive Web3 wallet interface focused on removing UX barriers for onboarding new crypto users. Fully non-custodial and inherently multichain.",
    tech: ["React", "Javascript", "CSS"],
    github: "https://github.com/blockmob/gaya-web-app",
    link: "https://gayawallet.com",
    category: "Web3",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=multichain%20web3%20wallet%20app%20interface%20with%20multiple%20blockchain%20logos%20sleek%20mobile%20first%20design%20gradient%20purple&image_size=landscape_16_9",
  },
  {
    number: "08",
    title: "Raid Ai",
    description: "Powerful and intuitive Marketing Dashboard Analytics. Build and train your autonomous RAID Agents to seamlessly launch comprehensive campaigns.",
    longDesc: "Integrated advanced AI interfaces providing marketers unprecedented control over automated outreach operations. Users visually construct and train custom autonomous agents.",
    tech: ["React", "Javascript", "Redux"],
    github: "https://github.com/blockmob/RaidAI",
    link: "https://raid-ai-sigma.vercel.app/",
    category: "AI Marketing",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20marketing%20automation%20dashboard%20with%20robotic%20agents%20data%20analytics%20charts%20neon%20cyan%20dark%20tech%20aesthetic&image_size=landscape_16_9",
  },
  {
    number: "09",
    title: "City Crafters",
    description: "City Crafters is an elite Dubai-based game development studio specializing in high-fidelity mobile, VR, PC, console, and educational visual games.",
    longDesc: "Created the flagship digital hub for a premier game development studio. Engineered dynamic, highly-optimized React and Vite portals capable of smoothly rendering heavy multimedia assets.",
    tech: ["React+Vite", "Javascript", "Tailwind CSS"],
    github: "https://github.com/blockmob/city-crafter",
    link: "https://citycrafters.ae",
    category: "Game Dev",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=dubai%20game%20development%20studio%20portfolio%20with%20VR%20headset%20gaming%20consoles%20futuristic%20neon%20city%20lights&image_size=landscape_16_9",
  },
  {
    number: "10",
    title: "MANZAR",
    description: "A fast cloud-based, browser-streamed 3D real-estate visualization and interactive tour platform engineered by the team at City Crafters Dubai.",
    longDesc: "Pioneered a sophisticated frontend architecture aimed at streamlining cloud-based 3D applications. Users seamlessly maneuver through dense, high-polygon property environments.",
    tech: ["React+Vite", "Javascript", "Tailwind CSS"],
    github: "https://github.com/blockmob/city-crafter",
    link: "https://citycrafters.ae/manzar",
    category: "3D Visualization",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=3D%20real%20estate%20virtual%20tour%20luxury%20property%20interior%20render%20photorealistic%20modern%20apartment%20warm%20lighting&image_size=landscape_16_9",
  },
  {
    number: "11",
    title: "GamifyOne",
    description: "A comprehensive plug-and-play gamification plugin designed specifically for e-commerce and retail brands to increase interactive user retention.",
    longDesc: "Developed a rapid-integration plugin framework built with React and Vite focused entirely on boosting retail engagement. Reward systems, loyalty points, and interactive user progression elements.",
    tech: ["React+Vite", "Javascript", "Tailwind CSS"],
    github: "https://github.com/blockmob/city-crafter",
    link: "https://citycrafters.ae/gamify",
    category: "E-Commerce",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=gamified%20ecommerce%20loyalty%20rewards%20shop%20interface%20with%20trophies%20badges%20shopping%20cart%20vibrant%20colorful%20design&image_size=landscape_16_9",
  },
  {
    number: "12",
    title: "SUPA",
    description: "SUPA is a Solana-blockchain based SPL token app designed to empower users to easily create and conditionally deploy SPL tokens via chat commands.",
    longDesc: "Constructed an innovative, text-driven interface bridging complex blockchain interactions with familiar chat functionality. Empowering even non-technical users to mint, configure, and deploy SPL tokens.",
    tech: ["React+Vite", "Javascript", "CSS"],
    github: "https://github.com/ZainAli0102/Supa-Token",
    link: "https://supa-token.vercel.app/",
    category: "Web3",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=solana%20SPL%20token%20creator%20chat%20interface%20with%20purple%20gradient%20messaging%20app%20style%20crypto%20tokens&image_size=landscape_16_9",
  },
  {
    number: "13",
    title: "Surtaal USA",
    description: "An entertainment platform bringing culture and music to life featuring events across major US cities.",
    longDesc: "Developed a dynamic WordPress-based platform for Surtaal USA to manage and showcase cultural and musical events across the United States. Features include event schedules, integrated media.",
    tech: ["WordPress", "Elementor", "PHP"],
    link: "https://surtaalusa.com/",
    category: "Entertainment",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=music%20and%20culture%20events%20platform%20concert%20stage%20with%20bright%20lights%20crowd%20USA%20cities%20festive%20vibrant&image_size=landscape_16_9",
  },
  {
    number: "14",
    title: "Fahad Freight Logistics",
    description: "A reliable truck freight delivery platform offering fast, safe, and on-time city-to-city transportation services.",
    longDesc: "Engineered a fast and responsive logistics platform using React for Fahad Freight. The application streamlines city-to-city truck delivery services.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ahsanpasha/Fahad-Freight",
    link: "https://fahadfreightlogistic.com/",
    category: "Logistics",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=truck%20logistics%20freight%20transportation%20cargo%20delivery%20highway%20sunset%20professional%20industrial%20blue%20theme&image_size=landscape_16_9",
  },
  {
    number: "15",
    title: "SIM d.o.o.",
    description: "A corporate website for a precision CNC manufacturing and engineering company.",
    longDesc: "Developed a modern, multilingual corporate website for SIM d.o.o., a Croatian company specializing in advanced CNC production and precision metal machining.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ahsanpasha/simdoo",
    link: "https://simdoo.vercel.app/",
    category: "Manufacturing",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=precision%20CNC%20manufacturing%20factory%20machinery%20metal%20engineering%20industrial%20sparks%20professional%20clean%20design&image_size=landscape_16_9",
  },
  {
    number: "16",
    title: "StyleSwipe",
    description: "A Chrome browser extension that allows users to seamlessly customize and playfully swipe through different styling themes.",
    longDesc: "Created a lightweight and interactive Chrome browser extension designed to enhance the web browsing experience. StyleSwipe enables users to effortlessly apply and switch between various visual themes.",
    tech: ["JavaScript", "HTML/CSS", "Chrome API"],
    github: "https://github.com/ahsanpasha/theme-scoop",
    link: "https://chromewebstore.google.com/detail/styleswipe/daijmidbgnmcajdhmcediigodljlijnp?hl=en-GB&utm_source=ext_sidebar",
    category: "Browser Extension",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=chrome%20browser%20extension%20theme%20customization%20colorful%20swatches%20UI%20stylish%20minimal%20modern%20aesthetic&image_size=landscape_16_9",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="editorial-tag">Chapter 03 — Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Featured Projects
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg leading-relaxed mt-4">
            A curated collection of work spanning Web3, FinTech, AI, and beyond — each crafted with precision and purpose.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x md:flex-wrap gap-3 mb-12 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 border transition-all duration-300 snap-center whitespace-nowrap flex-shrink-0 ${activeCategory === cat
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-transparent border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-end gap-2 mb-4 text-muted-foreground pr-2">
          <span className="font-mono text-[10px] uppercase tracking-wider animate-pulse">Swipe to explore</span>

        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 pr-[5vw] md:pr-0">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.number}
              className="group relative bg-card border border-border hover:border-primary/40 transition-all duration-500 flex flex-col overflow-hidden w-[85vw] sm:w-[60vw] md:w-auto snap-center shrink-0 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Background large number */}
              <div className="absolute -bottom-8 -right-4 font-display text-[12rem] font-bold text-foreground/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-700 select-none z-0 leading-none">
                {project.number}
              </div>

              <div className="relative overflow-hidden aspect-[16/10] m-3 mb-0 rounded-[2px] z-10 border border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[15%] group-hover:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-primary text-primary-foreground backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 flex gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-primary-foreground border border-white/20 transition-all"
                      aria-label="View live site"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-foreground hover:text-background border border-white/20 transition-all"
                      aria-label="View source code"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 pt-5 flex flex-col flex-1 relative z-10">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-mono text-xs text-primary">{project.number} /</span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-muted/40 text-muted-foreground border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] uppercase tracking-wider text-primary hover:underline flex items-center gap-1.5 group/link"
                        >
                          Live <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground flex items-center gap-1.5 group/link"
                        >
                          Code <Github size={12} className="group-hover/link:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out z-20" />
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-border bg-card/50">
            <p className="font-body text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
