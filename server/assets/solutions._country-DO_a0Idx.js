import { T as jsxRuntimeExports } from "./worker-entry-D1Y2Ppya.js";
import { P as PageShell } from "./site-shell-DLb-8c6m.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-HSVd_pVe.js";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-xl px-6 py-32 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-primary", children: "Something went wrong" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: error.message })
] }) });
export {
  SplitErrorComponent as errorComponent
};
