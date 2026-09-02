/* test-almanac-tw.js — headless check of the /zh-tw/ almanac page:
   page shell (lang, s2t.js injection, L10N) + real render converted through
   the generated s2t map (simulates what the runtime converter does in-browser) */
"use strict";
var path = require("path");
var fs = require("fs");

function fail(msg) { console.log("FAIL: " + msg); process.exit(1); }

/* page shell */
var page = fs.readFileSync(path.join(__dirname, "..", "site", "zh-tw", "almanac", "index.html"), "utf8");
if (!/<html lang="zh-TW"/.test(page)) fail("html lang is not zh-TW");
if (page.indexOf('/assets/js/s2t.js?v=') < 0) fail("s2t.js not injected");
if (page.indexOf('canonical" href=') < 0 || page.indexOf('/zh-tw/almanac/') < 0) fail("canonical missing");
if (page.indexOf('hreflang="zh" href="https://www.bazioracle.com/zh/') < 0) fail("hreflang zh link wrong");
if (page.indexOf('<a href="/zh/almanac/">簡體中文</a>') < 0) fail("switcher 簡體中文 link wrong");
if (page.indexOf('window.L10N') < 0) fail("L10N injection missing");

/* s2t map */
var s2tSrc = fs.readFileSync(path.join(__dirname, "..", "site", "assets", "js", "s2t.js"), "utf8");
var map = JSON.parse(s2tSrc.match(/var MAP = (\{[\s\S]*?\});/)[1]);
function conv(s) { var o = "", i, c, m; for (i = 0; i < s.length; i++) { c = s.charAt(i); m = map[c]; o += (m || c); } return o; }

/* real render with lang=zh-TW (same stubs as test-almanac.js) */
global.self = global; global.window = global;
var m = page.match(/window\.L10N = (\{[\s\S]*?\});\s*<\/script>/);
if (!m) fail("cannot extract L10N from page");
global.window.L10N = JSON.parse(m[1]);
(0, eval)(fs.readFileSync(path.join(__dirname, "..", "site", "assets", "vendor", "lunar.min.js"), "utf8"));
if (!global.Solar && global.lunar && global.lunar.Solar) global.Solar = global.lunar.Solar;
(0, eval)(fs.readFileSync(path.join(__dirname, "..", "site", "assets", "js", "almanac-terms.js"), "utf8"));

function El(id) {
  return { _id: id, value: "", innerHTML: "", className: "", _h: {},
    querySelector: function () { return El(); },
    addEventListener: function (t, f) { this._h[t] = f; },
    fire: function (t) { this._h[t] && this._h[t]({ preventDefault: function () {} }); } };
}
var form = El("al-form"), out = El("al-out");
global.document = {
  documentElement: { lang: "zh-TW" },
  getElementById: function (id) { return id === "al-form" ? form : id === "al-out" ? out : null; }
};

(0, eval)(fs.readFileSync(path.join(__dirname, "..", "site", "assets", "js", "almanac.js"), "utf8"));
if (out.className !== "result show") fail("render did not run (className=" + out.className + ")");
if (out.innerHTML.length < 500) fail("render output too short");

/* fixed known pairs in the map (date-independent) */
if (map["\u8ba2"] !== "\u8a02") fail("map 订→訂 wrong"); /* 訂 */
if (map["\u7eb3"] !== "\u7d0d") fail("map 纳→納 wrong"); /* 納 */
if (map["\u51b2"] !== "\u885d") fail("map 冲→衝 wrong"); /* 衝 */
if (map["\u9f99"] !== "\u9f8d") fail("map 龙→龍 wrong"); /* 龍 */

/* converted through the runtime map: the render always contains 冲 (clash label) */
var twHtml = conv(out.innerHTML);
if (out.innerHTML.indexOf("\u51b2") < 0) fail("raw render unexpectedly lacks 冲");
if (twHtml.indexOf("\u885d") < 0) fail("converted render lacks 衝 (clash)");           /* 衝 */
if (twHtml.indexOf("\u6982\u89bd") < 0) fail("converted render lacks 概覽 (day summary)"); /* 概覽 */

console.log("PASS: zh-tw almanac page + render + s2t conversion all OK");
console.log("render length:", out.innerHTML.length, "| map entries:", Object.keys(map).length, "| 冲→衝 applied:", twHtml.indexOf("\u885d") >= 0);
