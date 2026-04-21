import { T as jsxRuntimeExports } from "./worker-entry-D1Y2Ppya.js";
import { P as PageShell } from "./site-shell-DLb-8c6m.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-HSVd_pVe.js";
function FrameworkPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pt-20 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-accent", children: "Section 4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl text-primary", children: "Market Selection Framework" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 max-w-3xl text-lg text-muted-foreground", children: [
      "Objective: reduce to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5 high-priority markets" }),
      " for 2030. Selection passes through a two-axis filter — Market Attractiveness and Strategic Fit (CAGE) — refined by three sequential filters."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-3xl border border-accent/30 bg-accent/5 p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-accent", children: "Decision 0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl text-primary", children: "Consolidate or Expand?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-foreground/80", children: [
        "Evaluate whether growth in current markets is enough to 2x sales (Colombia + transformation). If ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "not sufficient → expansion" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-secondary", children: "Filter 1 · Macro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl text-primary", children: "Market Attractiveness — CAGE Distance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground italic", children: "Reference: CAGE Framework (Ghemawat, 2001 HBR) · Sakarya et al. 2007 Int. Marketing Review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-4", children: [["Cultural", "Language, coffee culture"], ["Administrative", "Ease of doing business"], ["Geographic", "Logistics from Colombia"], ["Economic", "GDP per capita, middle class"]].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-primary", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: d })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-medium text-accent", children: "→ Discard high-risk markets." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-secondary", children: "Filter 2 · Coffee Potential" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl text-primary", children: "Specialty Coffee Demand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground italic", children: "Reference: ICO 2023 · Statista Market Insights · Exhibit 9b" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: [["Per capita consumption", "Current volume and growth trend; population & urbanization."], ["Out-of-home culture", "Out-of-home volume; % sales in stores; retail price."], ["Competition", "Number of Starbucks stores + chains present."]].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-primary", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: d })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-medium text-accent", children: "→ Prioritize markets with greatest specialty demand." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-secondary", children: "Filter 3 · Procafecol Fit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl text-primary", children: "Strategic Fit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground italic", children: "Reference: Kotler (2005) Market Entry Framework · AAA Strategies (Ghemawat) · Case pp. 7-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-4", children: [["Entry Model", "Store / mass / e-comm / mixed; CAPEX required."], ["Available Partner", "Franchisee, JV or experienced distributor."], ["Purpose as Advantage", "B-Corp; sustainability valued by local consumer."], ["Logistic Viability", "FoNC-Almacafé chain into the new country."]].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-primary", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: d })
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 rounded-3xl bg-(image:--gradient-coffee) p-10 text-cream shadow-[var(--shadow-elegant)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "Composite Score" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl text-cream", children: "Prioritized List of 5 Markets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-baseline gap-3 rounded-2xl border border-cream/30 bg-cream/15 px-6 py-4 font-mono text-lg text-cream backdrop-blur", children: [
        "Score = F1 × ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-bold", children: "0.25" }),
        " + F2 × ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-bold", children: "0.45" }),
        " + F3 × ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-bold", children: "0.30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2 text-xs", children: ["Large Economies", "Emerging Coffee Markets", "Mature / Specialty", "Experience + Quality"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cream/40 bg-cream/15 px-3 py-1.5 text-cream font-medium", children: b }, b)) })
    ] })
  ] }) });
}
export {
  FrameworkPage as component
};
