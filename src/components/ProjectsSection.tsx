import { ArrowUpRight, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "GAYA WALLET EXTENSION",
    description: "A secure and user-friendly multi-chain crypto wallet browser extension enabling users to manage digital assets across Ethereum and Solana networks.",
    longDesc: "Engineered a robust, non-custodial browser extension wallet designed for seamless interoperability between Ethereum and Solana. Integrated core features like cross-chain token swaps, NFT gallery viewing, and secure direct dApp connections using Ethers.js and Web3.js. The UI was built from the ground up to ensure maximum accessibility and clarity for both novice and veteran crypto users.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Ethers.js", "Web3.js"],
    github: "https://github.com/abuhuraira1234567889/snap-sharing-portal",
    link: "https://chromewebstore.google.com/detail/gaya-wallet/jafcnkgjohihjfmepbibneldbgfnhaoo",
    category: "Web3",
  },
  {
    number: "02",
    title: "Evox",
    description: "A full-featured Property development platform where creators can issue Properties and Investors can easily buy property fractions with tokens.",
    longDesc: "Developed a groundbreaking real-estate tokenization platform bridging the gap between property developers and retail investors. Through advanced smart contract integration, developers can tokenize entire buildings, allowing users to purchase fractional ownership via Web3 wallets. The system accurately calculates and continuously distributes monthly ROI back to fractional holders.",
    tech: ["React", "JavaScript", "Web3 Intergration"],
    github: "https://github.com/blockmob/Investor-evox",
    link: "https://investor-evox.vercel.app/",
    category: "Real Estate Web3",
  },
  {
    number: "03",
    title: "Magnus Captial",
    description: "Magnus Capital offers AI-powered Autotrading, Forex & Crypto courses, live trading signals, and deep market insights to help grow your wealth.",
    longDesc: "Built a comprehensive financial education and trading ecosystem wrapped in a sleek, user-centric dashboard. Features include real-time, low-latency trading signals fetched via WebSockets, AI-driven auto-trading algorithms, and an extensive video library tailored for Forex and Crypto markets. A centralized state managed by Redux ensures rapid updates across concurrent UI modules.",
    tech: ["React", "Javascript", "Tailwind", "Redux"],
    github: "https://github.com/blockmob/magnus-webapp",
    link: "https://magnus-webapp.vercel.app/",
    category: "FinTech",
  },
  {
    number: "04",
    title: "Iltezam",
    description: "ILTEZAM is a digital platform built to unite the global Syrian community, enabling secure fundraising, volunteering, learning, and collaboration.",
    longDesc: "Architected a scalable, high-performance web platform using Next.js and TypeScript to serve as a secure social and humanitarian hub. The application features intricate role-based access for NGOs, donors, and volunteers, providing dynamic real-time job boards and global fundraising capabilities all within an optimized Server-Side Rendered (SSR) environment.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Redux"],
    github: "https://github.com/blockmob/iltezam",
    link: "https://iltezam.co/",
    category: "Social Impact",
  },
  {
    number: "05",
    title: "Trade Reward",
    description: "A crypto rewards platform letting users earn real tokens for everyday trading. Features staking mechanics to lock utility tokens for monthly yield.",
    longDesc: "Engineered a sophisticated DeFi rewards structure that actively syncs with supported broker APIs to track user transaction volumes. The integrated staking mechanism facilitates complex epoch-based token locking (e.g., EAI), automatically calculating APYs and instantly issuing multi-token rewards, including USDC, direct to users' connected wallets via smart contracts.",
    tech: ["React", "Javascript", "Redux"],
    github: "https://github.com/blockmob/Trade-Reward",
    link: "https://traderewards.io/",
    category: "DeFi / Rewards",
  },
  {
    number: "06",
    title: "Gaya Blockchain",
    description: "GAYA is a UAE-based Layer-1 blockchain supporting fast EVM compatibility, staking, utility tokens, and multi-chain operations via the ecosystem.",
    longDesc: "Designed the frontline interfaces and foundational exploration tools for physical Layer-1 blockchain architecture. Emphasized low-latency block-syncing displays and intuitive staking modules where validators and delegators secure the network. The interface serves as the central hub for the GAYA token utility, driving both governance and expansive DeFi participation.",
    tech: ["React", "Javascript", "CSS"],
    github: "https://github.com/blockmob/gaya-blockchain",
    link: "https://gayablockchain.io/",
    category: "Blockchain",
  },
  {
    number: "07",
    title: "GAYA Wallet",
    description: "GAYA Wallet is a next-generation, secure non-custodial multichain Web3 wallet supporting seamless transfers across various blockchain networks.",
    longDesc: "Developed a comprehensive Web3 wallet interface focused on removing UX barriers for onboarding new crypto users. Fully non-custodial and inherently multichain, the wallet handles secure key generations, custom RPC configurations, and integrates smoothly into varied dApp architectures across modern blockchain ecosystems without requiring centralized oversight.",
    tech: ["React", "Javascript", "CSS"],
    github: "https://github.com/blockmob/gaya-web-app",
    link: "https://gayawallet.com",
    category: "Web3",
  },
  {
    number: "08",
    title: "Raid Ai",
    description: "Powerful and intuitive Marketing Dashboard Analytics. Build and train your autonomous RAID Agents to seamlessly launch comprehensive campaigns.",
    longDesc: "Integrated advanced AI interfaces providing marketers unprecedented control over automated outreach operations. Users visually construct and train custom autonomous agents specifically optimized to raid social platforms or engage in targeted outreach. Real-time Redux state management ensures performance metrics seamlessly reflect the ongoing campaign analytics.",
    tech: ["React", "Javascript", "Redux"],
    github: "https://github.com/blockmob/RaidAI",
    link: "https://raid-ai-sigma.vercel.app/",
    category: "AI Marketing",
  },
  {
    number: "09",
    title: "City Crafters",
    description: "City Crafters is an elite Dubai-based game development studio specializing in high-fidelity mobile, VR, PC, console, and educational visual games.",
    longDesc: "Created the flagship digital hub for a premier game development studio. Engineered dynamic, highly-optimized React and Vite portals capable of smoothly rendering heavy multimedia assets and immersive web experiences. The platform acts as a high-performance central portfolio spanning diverse projects from intricate mobile gaming apps to complex VR environments.",
    tech: ["React+Vite", "Javascript", "Talwind CSS"],
    github: "https://github.com/blockmob/city-crafter",
    link: "https://citycrafters.ae",
    category: "Game Dev",
  },
  {
    number: "10",
    title: "MANZAR",
    description: "A fast cloud-based, browser-streamed 3D real-estate visualization and interactive tour platform engineered by the team at City Crafters Dubai.",
    longDesc: "Pioneered a sophisticated frontend architecture aimed at streamlining cloud-based 3D applications. Users seamlessly maneuver through dense, high-polygon property environments entirely within standard modern web browsers. React efficiently manages the complex overlay UI without bottlenecking underlying 3D tour rendering parameters.",
    tech: ["React+Vite", "Javascript", "Talwind CSS"],
    github: "https://github.com/blockmob/city-crafter",
    link: "https://citycrafters.ae/manzar",
    category: "3D Visualization",
  },
  {
    number: "11",
    title: "GamifyOne",
    description: "A comprehensive plug-and-play gamification plugin designed specifically for e-commerce and retail brands to increase interactive user retention.",
    longDesc: "Developed a rapid-integration plugin framework built with React and Vite focused entirely on boosting retail engagement. The architecture safely mounts over pre-existing e-commerce infrastructures, immediately activating reward systems, loyalty points, and interactive user progression elements without heavy refactoring of the storefront's native core.",
    tech: ["React+Vite", "Javascript", "Talwind CSS"],
    github: "https://github.com/blockmob/city-crafter",
    link: "https://citycrafters.ae/gamify",
    category: "E-Commerce",
  },
  {
    number: "12",
    title: "SUPA",
    description: "SUPA is a Solana-blockchain based SPL token app designed to empower users to easily create and conditionally deploy SPL tokens via chat commands.",
    longDesc: "Constructed an innovative, text-driven interface bridging complex blockchain interactions with familiar chat functionality. Empowering even non-technical users, it intercepts predefined chat commands and instantly routes them through secured Web3 pipelines to reliably mint, configure, and seamlessly deploy optimized SPL tokens directly onto the Solana mainnet.",
    tech: ["React+Vite", "Javascript", "CSS"],
    github: "https://github.com/ZainAli0102/Supa-Token",
    link: "https://supa-token.vercel.app/",
    category: "Web3",
  }
];

const ProjectsSection = () => {
  const [active, setActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setActive(((currentPage + 1) % totalPages) * itemsPerPage);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setActive(((currentPage - 1 + totalPages) % totalPages) * itemsPerPage);
  };

  return (
    <section id="projects" className="py-24 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="editorial-tag">Chapter 03</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
              Selected Works
            </h2>
          </div>
        </div>

        {/* Project Selector — horizontal tabs */}
        <div className="flex border border-border mb-0 bg-card">
          <div className="flex flex-1 overflow-hidden">
            {currentProjects.map((p, i) => {
              const globalIndex = currentPage * itemsPerPage + i;
              return (
                <button
                  key={globalIndex}
                  onClick={() => setActive(globalIndex)}
                  className={`flex-1 py-4 text-center transition-all duration-300 border-b-2 border-r border-border ${active === globalIndex
                    ? "border-b-primary text-primary"
                    : "border-b-transparent text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span className="font-mono text-xs block">{p.number}</span>
                  <span className="font-display text-sm md:text-base font-semibold hidden sm:block mt-1 truncate px-2">
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex flex-col w-12 flex-shrink-0">
            <button onClick={handlePrevPage} className="flex-1 flex items-center justify-center hover:bg-muted transition-colors border-b border-border text-muted-foreground hover:text-foreground">
              <ChevronUp size={16} />
            </button>
            <button onClick={handleNextPage} className="flex-1 flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Active Project Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border border-t-0 bg-background">
          {/* Left: Big number + category */}
          <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between border-r border-border relative overflow-hidden">
            <span className="font-display text-[10rem] lg:text-[14rem] font-black leading-none text-foreground/[0.04] absolute -top-8 -left-4">
              {projects[active].number}
            </span>
            <div className="relative z-10">
              <span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 border border-primary text-primary mb-4">
                {projects[active].category}
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {projects[active].title}
              </h3>
            </div>

            <div className="relative z-10 mt-8 flex flex-col gap-3">
              {projects[active].link && (
                <a
                  href={projects[active].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary hover:underline"
                >
                  View Live <ArrowUpRight size={14} />
                </a>
              )}
              {projects[active].github && (
                <a
                  href={projects[active].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground hover:underline"
                >
                  View GitHub <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Right: Description + tech */}
          <div className="lg:col-span-9 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="font-display text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                {projects[active].description}
              </p>
              <div className="editorial-divider mb-6" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {projects[active].longDesc}
              </p>
            </div>

            {/* Tech stack as visual blocks */}
            <div className="mt-10 flex flex-wrap gap-3">
              {projects[active].tech.map((t, i) => (
                <div
                  key={t}
                  className="group relative px-4 py-3 border border-border hover:border-primary transition-colors"
                >
                  <span className="font-mono text-[10px] text-muted-foreground absolute top-1 right-2 opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project thumbnails row */}
        {/* <div className="flex border border-border border-t-0 bg-background overflow-hidden">
          <div className="flex flex-1">
            {currentProjects.map((p, i) => {
              const globalIndex = currentPage * itemsPerPage + i;
              return (
                <button
                  key={globalIndex}
                  onClick={() => setActive(globalIndex)}
                  className={`flex-1 p-4 text-left transition-all duration-300 border-r border-border ${active === globalIndex ? "bg-primary/5" : "hover:bg-secondary/50"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${active === globalIndex ? "bg-primary" : "bg-border"}`} />
                    <span className={`font-mono text-[10px] uppercase tracking-wider transition-colors truncate ${active === globalIndex ? "text-primary" : "text-muted-foreground"
                      }`}>
                      {p.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="w-12 flex-shrink-0 bg-card border-l border-border" />
        </div> */}
        {/* Active Project Category */}
        <div className="flex border border-border border-t-0 bg-background overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="flex-1 p-4 flex items-center gap-2 relative z-10">
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
              {projects[active].category}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
