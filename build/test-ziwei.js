/* Headless smoke test for site/assets/js/ziwei.js (v2 decadal / yearly / borrowed stars).
 * Run: node build/test-ziwei.js
 * Stubs just enough DOM to execute the widget and assert on the rendered HTML. */
"use strict";
var path = require("path");
var fs = require("fs");

var ROOT = path.join(__dirname, "..");
global.self = global;
global.window = global;
global.iztro = require(path.join(ROOT, "site/assets/vendor/iztro.min.js"));

function makeEl(name) {
  return {
    _name: name, _h: {}, value: "", textContent: "", innerHTML: "", className: "",
    kids: [], _q: {},
    appendChild: function (c) { this.kids.push(c); },
    addEventListener: function (t, fn) { (this._h[t] = this._h[t] || []).push(fn); },
    querySelector: function (s) { return this._q[s] || null; },
    scrollIntoView: function () {},
    fire: function (t) { (this._h[t] || []).forEach(function (f) { f({ preventDefault: function () {} }); }); }
  };
}

var form = makeEl("zw-form");
var out = makeEl("zw-out");
form._q["[name=timeIndex]"] = makeEl("sel");
form._q["[name=qyear]"] = makeEl("year");

global.document = {
  getElementById: function (id) { return id === "zw-form" ? form : (id === "zw-out" ? out : null); },
  createElement: function () { return makeEl("option"); }
};
global.FormData = function (f) { this._d = f._data || {}; };
global.FormData.prototype.get = function (k) { return this._d[k]; };

/* Load a language pack the same way build.js injects it (build.js:37/41 merges READINGS[lang].zp into zw). */
var READINGS = require("./lang/readings");
function loadPack(name) {
  if (name === "en") return null;
  var zw = name === "zh" ? require("./lang/zh-tools").zw : require("./lang/" + name).tools.zw;
  zw = JSON.parse(JSON.stringify(zw));
  zw.zp = READINGS[name].zp;
  return zw;
}

var fails = 0;
function ok(cond, label, detail) {
  if (cond) { console.log("  PASS  " + label); }
  else { fails++; console.log("  FAIL  " + label + (detail ? "\n        " + detail : "")); }
}

function run(lang, data, expectYear) {
  var dateStr = data.year + "-" + (+data.month) + "-" + (+data.day);
  console.log("\n==== " + lang + "  " + dateStr + "  查询 " + data.qyear + " 年 ====");
  global.window.L10N = { zw: loadPack(lang), bu: loadPack(lang) ? require("./lang/zh-tools").bu : undefined };
  if (lang !== "zh" && lang !== "en") {
    global.window.L10N = { zw: loadPack(lang) };
  }
  delete require.cache[require.resolve(path.join(ROOT, "site/assets/js/ziwei.js"))];
  out.innerHTML = ""; out.className = "";
  form._h = {}; form.kids = [];
  form._data = data;
  require(path.join(ROOT, "site/assets/js/ziwei.js"));
  form.fire("submit");
  var html = out.innerHTML;

  /* --- structural assertions that do not depend on language --- */
  ok(html.indexOf('class="zw-grid"') >= 0, "渲染出命盘网格");
  ok(html.indexOf("cur-decade") >= 0, "高亮当前大限宫 (cur-decade)");
  ok(html.indexOf("cur-year") >= 0, "高亮流年宫 (cur-year)");
  ok(html.indexOf("zw-legend") >= 0, "渲染图例");
  ok(html.indexOf("zw-dyn") >= 0, "渲染大限/流年解读面板");
  ok(html.indexOf("undefined") < 0 && html.indexOf("NaN") < 0, "渲染无 undefined/NaN 脏输出");
  if (lang !== "en") {
    ok(html.indexOf("针对性解读") >= 0 || html.indexOf("Lectura dirigida") >= 0 ||
       html.indexOf("للخريطة") >= 0 || html.indexOf("個別解読") >= 0,
      "针对性解读面板已渲染");
  }

  /* the four transformations must come from the pack, not the English fallback */
  var pack = global.window.L10N && global.window.L10N.zw;
  if (pack && pack.mut) {
    var mutRow = (html.match(/class="mut-row">([\s\S]*?)<\/p>/) || [])[1] || "";
    ok(mutRow.indexOf(pack.mut.lu) >= 0 && mutRow.indexOf(pack.mut.ji) >= 0,
      "四化术语已本地化 (禄=" + pack.mut.lu + " 忌=" + pack.mut.ji + ")",
      "实际: " + mutRow.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 80));
  }

  var decCount = (html.match(/class="dec"/g) || []).length;
  ok(decCount >= 10, "宫位标注大限年龄范围 (" + decCount + " 个)");

  /* --- cross-check the highlighted decade against iztro directly ---
   * Cast in the page's own language so palace names are comparable. */
  var izLang = (pack && pack.izLang) || "en-US";
  var chart = iztro.astro.bySolar(dateStr, +data.timeIndex, data.gender, true, izLang);
  var h = chart.horoscope(data.qyear + "-06-15");
  var decPal = chart.palaces[h.decadal.index];
  var age = h.age.nominalAge;
  ok(age >= decPal.decadal.range[0] && age <= decPal.decadal.range[1],
    "大限宫与虚岁自洽 (" + data.qyear + "年虚岁" + age + " 落 " + decPal.name +
    " [" + decPal.decadal.range[0] + "-" + decPal.decadal.range[1] + "])");

  /* the rendered grid must flag that same palace name as the current decade */
  var decCellRe = /<div class="zw-cell[^"]*cur-decade[^"]*">[\s\S]*?class="pal">([^<]+)/g;
  var m, names = [];
  while ((m = decCellRe.exec(html))) names.push(m[1]);
  ok(names.length === 1 && decPal.name.indexOf(names[0].replace(/（身宫）|\(Body\)/g, "")) === 0,
    "盘面高亮的正是该大限宫 (渲染:" + names.join(",") + " / 期望:" + decPal.name + ")");

  /* --- borrowed stars --- */
  var empties = chart.palaces.filter(function (p) { return p.majorStars.length === 0; });
  if (empties.length) {
    /* palace.index is the array slot; +6 lands on the opposite branch */
    var opp = chart.palaces[(empties[0].index + 6) % 12];
    ok(html.indexOf("star major borrowed") >= 0, "空宫渲染借星样式");
    ok(opp.majorStars.length === 0 || html.indexOf("borrow") >= 0, "标注借自 " + opp.name + " 宫");
  } else {
    ok(html.indexOf("star major borrowed") < 0, "本盘无空宫，无误标借星");
  }

  /* --- year switch re-render --- */
  var yIn = form._q["[name=qyear]"];
  var before = out.innerHTML;
  yIn.value = String(expectYear);
  yIn.fire("change");
  ok(out.innerHTML !== before && out.innerHTML.indexOf("zw-grid") >= 0,
    "切换年份 " + expectYear + " 后重新渲染");
  ok(out.innerHTML.indexOf("cur-decade") >= 0, "切换年份后仍保留大限高亮");
  return html;
}

/* 中文：水二局，官禄宫为空 */
run("zh", { year: "1991", month: "7", day: "23", timeIndex: "3", gender: "male", qyear: "2026" }, "2050");
/* 英文走 ziwei.js 内置 EN 兜底 */
run("en", { year: "1985", month: "3", day: "12", timeIndex: "6", gender: "female", qyear: "2026" }, "2031");
run("ja", { year: "2000", month: "1", day: "1", timeIndex: "0", gender: "male", qyear: "2028" }, "2040");
run("es", { year: "1975", month: "11", day: "8", timeIndex: "10", gender: "female", qyear: "2026" }, "2033");
run("ar", { year: "1990", month: "5", day: "5", timeIndex: "8", gender: "female", qyear: "2027" }, "2038");

console.log("\n" + (fails === 0 ? "全部断言通过" : fails + " 处断言失败"));
process.exit(fails === 0 ? 0 : 1);
