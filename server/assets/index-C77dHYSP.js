import { T as jsxRuntimeExports } from "./worker-entry-D1Y2Ppya.js";
import { L as Link, C as COUNTRY_ORDER, a as COUNTRIES } from "./router-HSVd_pVe.js";
import { P as PageShell } from "./site-shell-DLb-8c6m.js";
import { W as WorldMap } from "./world-map-B1qUJ6F2.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroImg = "/juan-valdez-insight/assets/hero-coffee-DrIvG97x.jpg";
const beansImg = "/juan-valdez-insight/assets/coffee-beans-g86kmWrq.jpg";
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Colombian coffee farmer in the Andes", width: 1920, height: 1080, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_145/0.92)] via-[oklch(0.22_0.05_60/0.78)] to-[oklch(0.22_0.05_60/0.45)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl text-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-accent" }),
          "International Business Case Competition · 2030"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl leading-[1.05] md:text-7xl", children: [
          "Global Expansion Strategy",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gold", children: "Juan Valdez Café" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-2xl text-lg text-cream/85 md:text-xl", children: [
          'A comprehensive, scientific framework to double sales by 2030 — shifting Juan Valdez from "selling coffee" to selling a',
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: " premium cultural heritage" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/solutions", className: "inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-warm)] transition-transform hover:-translate-y-0.5", children: "Explore the 5 Markets →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/framework", className: "inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-7 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/20", children: "See the Framework" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto -mb-10 max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-[var(--shadow-elegant)] sm:grid-cols-2 lg:grid-cols-4", children: [{
        label: "Sales Growth by 2030",
        value: "x2",
        sub: "Min. $280M USD"
      }, {
        label: "Internationalization",
        value: ">40%",
        sub: "of total revenue"
      }, {
        label: "Net Profitability",
        value: "≥5%",
        sub: "Margin maintained"
      }, {
        label: "Network Efficiency",
        value: ">85%",
        sub: "Stores w/ + EBITDA"
      }].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: k.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-4xl text-primary", children: k.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-secondary", children: k.sub })
      ] }, k.label)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pt-28 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-accent", children: "5 Priority Markets · 2030" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-primary md:text-5xl", children: "Where Juan Valdez goes next" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Selected through a three-filter framework (CAGE distance, Specialty Coffee potential, and Procafecol strategic fit). Click any highlighted country on the map to explore its tailored expansion solution." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorldMap, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: COUNTRY_ORDER.map((key) => {
        const c = COUNTRIES[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/solutions/$country", params: {
          country: key
        }, className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary", children: c.verdict })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl text-foreground", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-t border-border pt-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "CAGE Determinant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium text-secondary", children: c.cageFactor })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center text-sm font-semibold text-accent", children: [
            "Read strategy",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 transition-transform group-hover:translate-x-1", children: "→" })
          ] })
        ] }, key);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mt-16 overflow-hidden bg-(image:--gradient-coffee) py-24 text-cream", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beansImg, alt: "", "aria-hidden": "true", loading: "lazy", width: 1600, height: 900, className: "absolute inset-0 h-full w-full object-cover opacity-15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "Brand Positioning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-cream md:text-5xl", children: "The leading premium Colombian coffee brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-cream/85", children: [
            "Juan Valdez highlights its origin, quality, and the support of more than ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gold", children: "540,000 coffee-growing families" }),
            ", offering an authentic experience that connects coffee tradition with global modernity."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-4 sm:grid-cols-2", children: [["Identity & Origin", "The icon of Colombian coffee — authenticity and national pride."], ["Premium Segment", "Specialty coffees (Colina, Cumbre), freeze-dried & capsules."], ["Differentiated Model", "Network of 675+ stores with welcoming, modern environments."], ["Sustainability", "Direct value to coffee growers, climate action, circular economy."]].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-2xl border border-cream/30 bg-cream/15 p-5 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-gold", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-cream", children: d })
        ] }, t)) })
      ] }) })
    ] })
  ] });
}
export {
  HomePage as component
};
