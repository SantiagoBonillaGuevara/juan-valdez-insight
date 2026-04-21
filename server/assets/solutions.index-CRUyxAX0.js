import { T as jsxRuntimeExports } from "./worker-entry-D8Od7FdA.js";
import { C as COUNTRY_ORDER, L as Link, a as COUNTRIES } from "./router-CcyQv-4L.js";
import { P as PageShell } from "./site-shell-DSYpd1MZ.js";
import { W as WorldMap } from "./world-map-BCWu8GA8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function SolutionsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pt-20 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-accent", children: "Section 7 · Solutions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl text-primary", children: "Five Tailored Expansion Strategies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-3xl text-lg text-muted-foreground", children: "Each market receives a bespoke entry model — calibrated to its cultural codes, regulatory environment and consumer maturity. Click a country on the map below to read its full strategy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorldMap, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: COUNTRY_ORDER.map((key) => {
        const c = COUNTRIES[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/solutions/$country", params: {
          country: key
        }, className: "group flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: c.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-primary", children: c.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent", children: [
              "Strategy 7.",
              COUNTRY_ORDER.indexOf(key) + 1
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/85", children: c.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid gap-2 text-xs sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/60 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-wide text-muted-foreground", children: "Entry Strategy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium text-secondary", children: c.entryStrategy })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/60 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-wide text-muted-foreground", children: "CAGE Factor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium text-secondary", children: c.cageFactor })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center text-sm font-semibold text-accent", children: [
            "Read full strategy",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 transition-transform group-hover:translate-x-1", children: "→" })
          ] })
        ] }, key);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-(image:--gradient-coffee) p-10 text-cream shadow-[var(--shadow-elegant)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "Section 8 · Conclusion" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-cream", children: "A Scientific Selection Framework" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-cream", children: [
        "The solution for Juan Valdez isn't just opening more stores, but implementing a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gold", children: "Scientific Selection Framework" }),
        ' that balances economic appeal with administrative ease. The goal of doubling sales by 2030 depends on 40% of revenue coming from abroad — shifting the brand from a "selling coffee" model to one of "selling a premium cultural heritage".'
      ] })
    ] }) })
  ] });
}
export {
  SolutionsPage as component
};
