import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { COUNTRIES, COUNTRY_ORDER, type CountryKey } from "@/data/countries";
import geoUrl from "@/assets/world-countries-110m.json?url";

const GEO_URL = geoUrl;

// ISO 3166-1 numeric codes used by world-atlas
const ISO_TO_KEY: Record<string, CountryKey> = {
  "840": "usa",
  "826": "uk",
  "410": "korea",
  "682": "saudi",
  "484": "mexico",
};

// Marker coordinates [lon, lat]
const MARKERS: Record<CountryKey, [number, number]> = {
  usa: [-98, 39],
  uk: [-1.5, 53],
  korea: [127.8, 36.5],
  saudi: [45, 24],
  mexico: [-102, 23],
};

export function WorldMap() {
  const [hovered, setHovered] = useState<CountryKey | null>(null);
  const navigate = useNavigate();

  const go = (key: CountryKey) => {
    navigate({ to: "/solutions/$country", params: { country: key } });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-(image:--gradient-warm) p-2 shadow-[var(--shadow-elegant)] sm:p-4">
      <ComposableMap
        projectionConfig={{ scale: 155 }}
        width={980}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Ocean */}
        <rect width={980} height={500} fill="oklch(0.93 0.03 220)" />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const iso = String(geo.id);
              const key = ISO_TO_KEY[iso];
              const isTarget = !!key;
              const isHover = key && hovered === key;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => key && go(key)}
                  onMouseEnter={() => key && setHovered(key)}
                  onMouseLeave={() => key && setHovered(null)}
                  style={{
                    default: {
                      fill: isTarget
                        ? "oklch(0.52 0.18 30)"
                        : "oklch(0.86 0.02 75)",
                      stroke: "oklch(0.65 0.02 75)",
                      strokeWidth: 0.4,
                      outline: "none",
                      cursor: isTarget ? "pointer" : "default",
                      transition: "fill 0.2s ease",
                    },
                    hover: {
                      fill: isTarget
                        ? "oklch(0.32 0.06 150)"
                        : "oklch(0.86 0.02 75)",
                      stroke: "oklch(0.32 0.06 150)",
                      strokeWidth: isTarget ? 0.8 : 0.4,
                      outline: "none",
                      cursor: isTarget ? "pointer" : "default",
                    },
                    pressed: {
                      fill: "oklch(0.32 0.06 150)",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {COUNTRY_ORDER.map((key) => {
          const c = COUNTRIES[key];
          const isHover = hovered === key;
          return (
            <Marker
              key={key}
              coordinates={MARKERS[key]}
              onClick={() => go(key)}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              style={{ default: { cursor: "pointer" } }}
            >
              <circle
                r={isHover ? 7 : 5}
                fill="oklch(0.32 0.06 150)"
                stroke="oklch(0.96 0.025 85)"
                strokeWidth={2}
              />
              <text
                textAnchor="middle"
                y={-12}
                fontSize={12}
                fontWeight={700}
                fill="oklch(0.18 0.03 60)"
                style={{
                  paintOrder: "stroke",
                  stroke: "oklch(0.96 0.025 85)",
                  strokeWidth: 4,
                  pointerEvents: "none",
                }}
              >
                {c.flag} {c.name}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Hover info card */}
      <div
        className="pointer-events-none absolute bottom-4 left-4 right-4 max-w-md rounded-2xl border border-border bg-card/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur transition-opacity sm:bottom-6 sm:left-6 sm:right-auto"
        style={{ opacity: hovered ? 1 : 0.6 }}
      >
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
            <div className="mt-2 text-xs font-semibold text-accent">
              Click to view full strategy →
            </div>
          </>
        ) : (
          <>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Interactive Map
            </div>
            <div className="mt-1 font-display text-xl text-foreground">
              5 Priority Markets · 2030
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Hover or tap any highlighted country (in red) to explore its
              tailored expansion solution.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
