/**
 * BackgroundEffects — Fullscreen fixed wavy grid
 * Rendered as an actual inline SVG so it always shows.
 */
const BackgroundEffects = () => {
  return (
    <>
      {/* Base background color layer */}
      <div
        className="fixed inset-0 -z-20"
        style={{ backgroundColor: "hsl(var(--background))" }}
      />

      {/* Wavy grid SVG — always on top of base color, behind all content */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <pattern
              id="wavy-grid"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              {/* Horizontal wavy lines */}
              <path
                d="M0 20 C20 14, 40 26, 80 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path
                d="M0 40 C20 34, 40 46, 80 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path
                d="M0 60 C20 54, 40 66, 80 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              {/* Vertical wavy lines */}
              <path
                d="M20 0 C14 20, 26 40, 20 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path
                d="M40 0 C34 20, 46 40, 40 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path
                d="M60 0 C54 20, 66 40, 60 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </pattern>

            {/* Radial fade mask — grid visible in center, fades to edges */}
            <radialGradient id="fade-mask" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#fade-mask)" />
            </mask>
          </defs>

          {/* The actual grid rect */}
          <rect
            width="100%"
            height="100%"
            fill="url(#wavy-grid)"
            mask="url(#grid-mask)"
            className="text-foreground"
            style={{ opacity: 0.05 }}
          />
        </svg>
      </div>
    </>
  );
};

export default BackgroundEffects;
