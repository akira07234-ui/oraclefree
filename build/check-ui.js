/* check-ui.js — verify built site contains the v19 UI pieces */
var fs = require("fs");
function read(f) { return fs.readFileSync(f, "utf8"); }
function chk(name, h, tests) {
  console.log("--- " + name);
  tests.forEach(function (t) { console.log("  " + (t[1] ? "PASS" : "FAIL") + " " + t[0]); });
}
var en = read("index.html");
chk("index.html (en)", en, [
  ["v19 css ref", en.indexOf("style.css?v=19") >= 0],
  ["v19 main.js ref", en.indexOf("main.js?v=19") >= 0],
  ["desk switch", en.indexOf("lang-switch lang-desk") >= 0],
  ["drawer switch", en.indexOf("lang-switch lang-drawer") >= 0],
  ["drawer inside main-nav", /<nav class="main-nav"><nav class="lang-switch lang-drawer"/.test(en)]
]);
var tw = read("zh-tw/index.html");
chk("zh-tw/index.html", tw, [
  ["zh switcher link (desk)", tw.indexOf('<a href="/zh/">簡體中文</a>') >= 0],
  ["zh switcher link (drawer)", tw.indexOf('<a href="/zh/">簡體中文</a>') >= 0],
  ["lang=zh-TW", tw.indexOf('<html lang="zh-TW"') >= 0],
  ["s2t injected", tw.indexOf("/assets/js/s2t.js?v=19") >= 0]
]);
var twAl = read("zh-tw/almanac/index.html");
chk("zh-tw/almanac (deep page)", twAl, [
  ["zh switcher deep link", twAl.indexOf('<a href="/zh/almanac/">簡體中文</a>') >= 0],
  ["tw switcher deep link on", twAl.indexOf('<a href="/zh-tw/almanac/" class="lang-on">繁體中文</a>') >= 0]
]);
var css = read("assets/css/style.css");
console.log("--- style.css pieces: " + ["seal-stamp", "kc-fly", "ic-coin", "lang-drawer", "panelIn", "kcTips", "prefers-reduced-motion"].map(function (k) { return k + ":" + (css.indexOf(k) >= 0); }).join(" "));
var o = 0, c = 0; css.split("").forEach(function (ch) { if (ch === "{") o++; if (ch === "}") c++; });
console.log("  css braces " + o + "/" + c + (o === c ? " BALANCED" : " MISMATCH"));
var kc = read("assets/js/kau-cim.js"), ic = read("assets/js/iching.js"), mj = read("assets/js/main.js");
console.log("--- kau-cim stamp:" + (kc.indexOf("seal-stamp") >= 0) + " fly:" + (kc.indexOf("kc-fly") >= 0) +
  " | iching coins:" + (ic.indexOf("ic-coin") >= 0) + " stamp:" + (ic.indexOf("seal-stamp") >= 0) +
  " | main.js reveal:" + (mj.indexOf("IntersectionObserver") >= 0));
