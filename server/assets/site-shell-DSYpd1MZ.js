import { T as jsxRuntimeExports } from "./worker-entry-D8Od7FdA.js";
import { L as Link } from "./router-CcyQv-4L.js";
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg shadow-[var(--shadow-soft)]", children: "JV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-primary", children: "Juan Valdez" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "IBCC · Global Strategy 2030" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-8 text-sm font-medium md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", activeOptions: { exact: true }, activeProps: { className: "text-accent" }, className: "text-foreground/80 hover:text-primary transition-colors", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/diagnosis", activeProps: { className: "text-accent" }, className: "text-foreground/80 hover:text-primary transition-colors", children: "Diagnosis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/framework", activeProps: { className: "text-accent" }, className: "text-foreground/80 hover:text-primary transition-colors", children: "Framework" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/markets", activeProps: { className: "text-accent" }, className: "text-foreground/80 hover:text-primary transition-colors", children: "Markets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/solutions", activeProps: { className: "text-accent" }, className: "text-foreground/80 hover:text-primary transition-colors", children: "Solutions" })
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border/60 bg-(image:--gradient-coffee) text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-cream", children: "Juan Valdez" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-cream", children: "Comprehensive Global Expansion Strategy · Prepared for the International Business Case Competition (IBCC)." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold", children: "Sections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/diagnosis", className: "hover:text-gold", children: "Diagnosis & KPIs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/framework", className: "hover:text-gold", children: "Selection Framework" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/markets", className: "hover:text-gold", children: "Market Comparison" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/solutions", className: "hover:text-gold", children: "Country Solutions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold", children: "2030 Promise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-cream", children: '"Shifting the brand from selling coffee to selling a premium cultural heritage." Doubling sales by 2030 with >40% revenue from abroad.' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-cream/20 py-5 text-center text-xs text-cream/80", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Juan Valdez IBCC Strategic Brief — All content for academic purposes."
    ] })
  ] });
}
function PageShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  PageShell as P
};
