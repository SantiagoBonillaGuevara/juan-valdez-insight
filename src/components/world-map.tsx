import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { COUNTRIES, COUNTRY_ORDER, type CountryKey } from "@/data/countries";

/**
 * Interactive world map highlighting the 5 selected expansion markets.
 * Uses a stylised public-domain world outline (simplified) plus highlighted
 * country shapes that act as clickable links to each solution route.
 */
export function WorldMap() {
  const [hovered, setHovered] = useState<CountryKey | null>(null);
  const navigate = useNavigate();

  const go = (key: CountryKey) => {
    navigate({ to: "/solutions/$country", params: { country: key } });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-[var(--gradient-warm)] p-4 shadow-[var(--shadow-elegant)]">
      <svg
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Interactive world map of Juan Valdez priority markets"
      >
        {/* Ocean background */}
        <rect width="1000" height="500" fill="oklch(0.95 0.02 220)" />

        {/* Stylised continents (simplified silhouettes) */}
        <g className="jv-country" aria-hidden="true">
          {/* North America */}
          <path d="M 100 130 L 310 130 L 320 200 L 280 270 L 220 295 L 180 285 L 140 240 L 95 200 Z" />
          {/* Central / South America */}
          <path d="M 220 285 L 285 285 L 305 340 L 280 430 L 240 460 L 215 430 L 220 350 Z" />
          {/* Europe */}
          <path d="M 460 140 L 560 140 L 570 200 L 530 215 L 480 215 L 460 180 Z" />
          {/* Africa */}
          <path d="M 470 220 L 580 220 L 600 320 L 555 410 L 510 405 L 480 320 Z" />
          {/* Middle East / Arabian peninsula area */}
          <path d="M 570 200 L 640 205 L 660 270 L 610 280 L 575 250 Z" />
          {/* Asia */}
          <path d="M 600 130 L 870 135 L 890 220 L 830 260 L 760 250 L 690 230 L 640 200 Z" />
          {/* SE Asia / India */}
          <path d="M 700 240 L 790 245 L 800 300 L 730 310 L 705 280 Z" />
          {/* Australia */}
          <path d="M 820 340 L 910 340 L 920 400 L 870 420 L 825 400 Z" />
        </g>

        {/* Highlighted target markets */}
        <g>
          {COUNTRY_ORDER.map((key) => {
            const c = COUNTRIES[key];
            const isHover = hovered === key;
            return (
              <g key={key}>
                <path
                  d={c.mapPath}
                  className="jv-country-active"
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => go(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      go(key);
                    }
                  }}
                  aria-label={`Open Juan Valdez expansion strategy for ${c.name}`}
                />
                {/* Pin */}
                <circle
                  cx={c.labelXY[0]}
                  cy={c.labelXY[1]}
                  r={isHover ? 7 : 5}
                  fill="oklch(0.32 0.06 150)"
                  stroke="oklch(0.96 0.025 85)"
                  strokeWidth={2}
                  className="pointer-events-none transition-all"
                />
              </g>
            );
          })}
        </g>

        {/* Country labels */}
        {COUNTRY_ORDER.map((key) => {
          const c = COUNTRIES[key];
          return (
            <text
              key={`lbl-${key}`}
              x={c.labelXY[0]}
              y={c.labelXY[1] - 12}
              textAnchor="middle"
              className="pointer-events-none"
              fontSize="13"
              fontWeight={700}
              fill="oklch(0.22 0.04 60)"
              style={{ paintOrder: "stroke", stroke: "oklch(0.96 0.025 85)", strokeWidth: 4 }}
            >
              {c.name}
            </text>
          );
        })}
      </svg>

      {/* Hover info card */}
      <div className="pointer-events-none absolute bottom-6 left-6 right-6 max-w-md rounded-2xl border border-border bg-card/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur transition-opacity"
           style={{ opacity: hovered ? 1 : 0.55 }}>
        {hovered ? (
          <>
            <div className="text-xs uppercase tracking-[0.18em] text-accent">
              {COUNTRIES[hovered].flag} Target Market
            </div>
            <div className="mt-1 font-display text-2xl text-primary">
              {COUNTRIES[hovered].name}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {COUNTRIES[hovered].tagline}
            </div>
            <div className="mt-2 text-xs font-medium text-secondary">
              Click to view full strategy →
            </div>
          </>
        ) : (
          <>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Interactive Map</div>
            <div className="mt-1 font-display text-xl text-foreground">
              5 Priority Markets · 2030
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Hover or tap any highlighted country to explore its tailored
              expansion solution.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
