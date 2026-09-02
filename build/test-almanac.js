/* test-almanac.js — headless repro for the almanac form (ponytail: one runnable check) */
"use strict";
var path = require("path");
var fs = require("fs");

global.self = global;
global.window = global;

/* read the REAL injected L10N from the built page */
var page = fs.readFileSync(path.join(__dirname, "..", "site", "zh", "almanac", "index.html"), "utf8");
var m = page.match(/window\.L10N = (\{[\s\S]*?\});\s*<\/script>/);
if (!m) { console.log("FAIL: cannot extract L10N from page"); process.exit(1); }
global.window.L10N = JSON.parse(m[1]);
global.document = { documentElement: { lang: "zh" } };

/* load lunar (same way bazi pages do) */
(0, eval)(fs.readFileSync(path.join(__dirname, "..", "site", "assets", "vendor", "lunar.min.js"), "utf8"));
if (!global.Solar && global.lunar && global.lunar.Solar) global.Solar = global.lunar.Solar;
console.log("Solar available:", typeof global.Solar);

/* load almanac-terms */
(0, eval)(fs.readFileSync(path.join(__dirname, "..", "site", "assets", "js", "almanac-terms.js"), "utf8"));
console.log("ALM_TERMS langs:", Object.keys(global.ALM_TERMS || {}));

/* DOM stub */
function El(id) {
  return {
    _id: id, value: "", innerHTML: "", className: "", _h: {},
    querySelector: function () { return El(); },
    addEventListener: function (t, f) { this._h[t] = f; },
    fire: function (t) { this._h[t] && this._h[t]({ preventDefault: function () {} }); }
  };
}
var form = El("al-form"), out = El("al-out");
global.document = {
  documentElement: { lang: "zh" },
  getElementById: function (id) { return id === "al-form" ? form : id === "al-out" ? out : null; }
};

try {
  (0, eval)(fs.readFileSync(path.join(__dirname, "..", "site", "assets", "js", "almanac.js"), "utf8"));
  console.log("almanac.js loaded, auto-render fired");
  console.log("out.className:", JSON.stringify(out.className));
  console.log("out.innerHTML length:", out.innerHTML.length);
  console.log("first 300 chars:", out.innerHTML.slice(0, 300).replace(/<[^>]+>/g, " ").trim());
} catch (e) {
  console.log("!!! JS ERROR:", e.message);
  console.log(e.stack.split("\n").slice(0, 4).join("\n"));
}
