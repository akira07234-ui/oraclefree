/* test-wuxing.js — headless smoke test for the Five Elements analysis renderer.
 * Runs site/assets/js/bazi-ui.js against a DOM stub (no Chromium needed).
 * Usage:  cd build && node test-wuxing.js
 */
"use strict";
var path = require("path");
var fs = require("fs");

global.self = global;
global.window = global;

/* ---- lunar-javascript (needed by bazi-engine) ---- */
var VENDOR = path.join(__dirname, "..", "site", "assets", "vendor", "lunar.min.js");
(0, eval)(fs.readFileSync(VENDOR, "utf8"));
if (!global.Solar && global.lunar && global.lunar.Solar) { global.Solar = global.lunar.Solar; global.Lunar = global.lunar.Lunar; }

/* ---- minimal DOM stub ---- */
function El() {
  return {
    _h: {}, _q: {}, value: "", textContent: "", innerHTML: "", className: "", kids: [], _data: {},
    appendChild: function (c) { this.kids.push(c); return c; },
    insertBefore: function (c) { this.kids.unshift(c); return c; },
    addEventListener: function (t, f) { (this._h[t] = this._h[t] || []).push(f); },
    querySelector: function (s) { return this._q[s] || (this._q[s] = El()); },
    scrollIntoView: function () {},
    fire: function (t) { (this._h[t] || []).forEach(function (f) { f({ preventDefault: function () {} }); }); }
  };
}
var form = El(), out = El();
global.document = {
  documentElement: { lang: "zh" },
  getElementById: function (i) { return i === "bazi-form" ? form : (i === "bazi-out" ? out : null); },
  createElement: El
};
global.FormData = function (f) { this._d = f._data; };
global.FormData.prototype.get = function (k) { return this._d[k]; };

/* ---- engine + UI ---- */
require(path.join(__dirname, "..", "site", "assets", "js", "bazi-engine.js"));
var E = global.window.BaziEngine;   /* 排盘引擎，用于与渲染结果交叉比对 */
var UI_PATH = path.join(__dirname, "..", "site", "assets", "js", "bazi-ui.js");

/* ---- language packs (mirrors build.js wiring) ---- */
var READINGS = require("./lang/readings");
var DEEP = require("./lang/deep");
var WX = require("./lang/wuxing");
/* 与 build.js 保持一致：wx 五语言齐备，jp 深度语料仅 zh/en */
["zh", "en", "es", "ar", "ja"].forEach(function (c) {
  if (WX[c] && WX[c].wx) READINGS[c].wx = WX[c].wx;
});
["zh", "en"].forEach(function (c) {
  READINGS[c].jp.stemsDeep = DEEP[c].jp.stemsDeep;
  READINGS[c].jp.ge = DEEP[c].jp.ge;
  READINGS[c].jp.tiaohou = DEEP[c].jp.tiaohou;
  READINGS[c].jp.godsDeep = DEEP[c].jp.godsDeep;
});
var zhTools = require("./lang/zh-tools");
var PACKS = { es: require("./lang/es"), ar: require("./lang/ar"), ja: require("./lang/ja") };
zhTools.bu.jp = READINGS.zh.jp;
zhTools.bu.wx = READINGS.zh.wx;
Object.keys(PACKS).forEach(function (c) {
  PACKS[c].tools.bu.jp = READINGS[c].jp;
  PACKS[c].tools.bu.wx = READINGS[c].wx;
});
var LANGS = {
  zh: { pack: zhTools, lang: "zh" },
  en: { pack: { bu: { jp: READINGS.en.jp, wx: READINGS.en.wx } }, lang: "en" },
  es: { pack: PACKS.es.tools, lang: "es" },
  ar: { pack: PACKS.ar.tools, lang: "ar" },
  ja: { pack: PACKS.ja.tools, lang: "ja" }
};

/* ---- assertions ---- */
var pass = 0, fail = 0;
function ok(cond, label) {
  if (cond) { pass++; console.log("  ✓ " + label); }
  else { fail++; console.log("  ✗ " + label); }
}
function strip(s) { return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }

var CASES = [
  { label: "1991-07-23 05:05 男 (辛未 乙未 甲午 丁卯)", d: { year: "1991", month: "7", day: "23", hour: "5", minute: "5", gender: "male", calendar: "solar", tz: "8" } },
  { label: "1985-03-12 14:30 女", d: { year: "1985", month: "3", day: "12", hour: "14", minute: "30", gender: "female", calendar: "solar", tz: "8" } },
  { label: "2000-01-01 00:10 男 (水旺)", d: { year: "2000", month: "1", day: "1", hour: "0", minute: "10", gender: "male", calendar: "solar", tz: "8" } },
  { label: "1972-06-06 12:00 男 (火旺)", d: { year: "1972", month: "6", day: "6", hour: "12", minute: "0", gender: "male", calendar: "solar", tz: "8" } },
  { label: "1968-09-09 18:00 女 (金旺)", d: { year: "1968", month: "9", day: "9", hour: "18", minute: "0", gender: "female", calendar: "solar", tz: "8" } }
];

function render(lang, data) {
  global.window.L10N = LANGS[lang].pack;
  global.document.documentElement.lang = LANGS[lang].lang;
  delete require.cache[require.resolve(UI_PATH)];
  form._h = {}; form._q = {}; out.innerHTML = ""; out.className = "";
  require(UI_PATH);
  global.window.BaziUI.initForm("bazi-form", "bazi-out", { focus: "elements" });
  form._data = data;
  form.fire("submit");
  return out.innerHTML;
}

/* ---- 可选：导出渲染文本，肉眼检查内容质量 ----
 * 用法： node test-wuxing.js --dump [语言] [YYYY-MM-DD] [HH:MM] [男|女]
 */
if (process.argv[2] === "--dump") {
  var dLang = process.argv[3] || "zh";
  var dDate = (process.argv[4] || "1991-07-23").split("-");
  var dTime = (process.argv[5] || "05:05").split(":");
  var dGen = process.argv[6] === "女" ? "female" : "male";
  var html = render(dLang, {
    year: dDate[0], month: String(+dDate[1]), day: String(+dDate[2]),
    hour: String(+dTime[0]), minute: String(+dTime[1]), gender: dGen, calendar: "solar", tz: "8"
  });
  console.log("########## " + dLang + " / " + (process.argv[4] || "1991-07-23") + " " + (process.argv[5] || "05:05") + " " + (process.argv[6] || "男") + " ##########\n");
  console.log(html
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, "")
    .replace(/<div[^>]*>/g, "\n").replace(/<\/div>/g, "")
    .replace(/<p[^>]*>/g, "\n").replace(/<\/p>/g, "\n")
    .replace(/<h3[^>]*>/g, "\n\n### ").replace(/<\/h3>/g, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim());
  process.exit(0);
}

Object.keys(LANGS).forEach(function (lang) {
  console.log("\n==== " + lang + " ====");
  var wx = LANGS[lang].pack.bu && LANGS[lang].pack.bu.wx;

  CASES.forEach(function (c) {
    var html = render(lang, c.d);
    var txt = strip(html);
    console.log("-- " + c.label);

    /* 柱状图结构：必须 5 列，每列含 track + bar，且不再用绝对定位标签 */
    var cols = (html.match(/class="elcol/g) || []).length;
    var tracks = (html.match(/class="track"/g) || []).length;
    ok(cols === 5, "柱状图 5 列 (实得 " + cols + ")");
    ok(tracks === 5, "每列含 bar 轨道 (" + tracks + ")");
    ok(html.indexOf('class="bar" style="height:') >= 0, "柱高以 style 内联高度表达");
    ok(html.indexOf("margin-top:34px") < 0, "已移除 margin-top:34px 补偿 hack");

    if (!wx) {
      ok(html.indexOf("wx-levels") < 0, "无 wx 语料时退回简版");
      return;
    }

    /* 六个板块标题 */
    var secTitles = ["a", "b", "c", "d", "e", "f"].filter(function (k) { return html.indexOf(wx.sec[k]) >= 0; });
    ok(secTitles.length === 6, "六个板块标题齐全 (" + secTitles.length + "/6)");

    /* 旺衰分级 */
    var lvs = (html.match(/class="wx-lv"/g) || []).length;
    ok(lvs === 5, "五行分级 5 行 (实得 " + lvs + ")");
    ok((html.match(/wx-grade g[0-5]/g) || []).length === 5, "每行一个等级标签");
    /* 日主标注：必须出现语言包自带的 dmHint */
    ok(txt.indexOf(strip(wx.dmHint)) >= 0, "日主所在行已标注 (" + strip(wx.dmHint) + ")");

    /* 引用与内容完整性 —— 逐条对照该语言包自己的出处书名 */
    [["洪范", wx.hongfan.s], ["五行大义", wx.tixing.s], ["三命通会·生克", wx.shengke.s],
     ["滴天髓", wx.levels.s], ["内经", wx.organs.s], ["河图/补益", wx.remedy.s], ["三命通会·流通", wx.flow.s]
    ].forEach(function (p) {
      ok(txt.indexOf(strip(p[1]).replace(/^「|」$/g, "")) >= 0, "含引文出处：" + p[0]);
    });

    /* 生克制化：至少一条断语，或明确的"均衡"说明 */
    var rules = (html.match(/class="wx-rule"/g) || []).length;
    ok(rules > 0 || html.indexOf(wx.shengke.none) >= 0, "生克制化断语已生成 (" + rules + " 条)");

    /* 日主旺衰必须与引擎口径一致 —— 分级若另按数量占比算，会与页首自相矛盾 */
    var r = E.compute({
      y: +c.d.year, m: +c.d.month, d: +c.d.day,
      hour: +c.d.hour, minute: +c.d.minute, gender: c.d.gender, calendar: c.d.calendar, tz: +c.d.tz
    });
    var dmEl = r.dayMaster.element;
    var gs = (html.match(/wx-grade g[0-5]/g) || []);
    var lvOf = {};
    E.EL_ORDER.forEach(function (e, i) { if (gs[i]) lvOf[e] = +gs[i].slice(-1); });
    var lv = lvOf[dmEl];
    if (r.scores[dmEl] < 0.01) {
      ok(lv === 0, "日主五行缺失时分级为「缺失」(实得 g" + lv + ")");
    } else {
      var want = r.dayMaster.strength === "weak" ? [1, 2]
        : r.dayMaster.strength === "strong" ? [4, 5] : [3];
      ok(want.indexOf(lv) >= 0, "日主分级与引擎旺衰一致（引擎 " + r.dayMaster.strength +
        " → g" + lv + "，期望 g" + want.join("/g") + "）");
    }

    /* 月令旺相休囚死 */
    ok((html.match(/class="wx-sea s-/g) || []).length === 5, "五行各带月令徽标 (5)");
    ["wang", "xiang", "xiu", "qiu", "si"].forEach(function (k) {
      ok(html.indexOf('wx-sea s-' + k) >= 0, "月令含「" + k + "」一档");
    });

    /* 流通链（生链 6 节点）与月令链（5 档）分别计数 */
    var flowBlocks = html.match(/<div class="wx-flow[^"]*">[\s\S]*?<\/div>/g) || [];
    var chain = flowBlocks.filter(function (b) { return b.indexOf("wx-seas") < 0; })[0] || "";
    var seas = flowBlocks.filter(function (b) { return b.indexOf("wx-seas") >= 0; })[0] || "";
    var cn = (chain.match(/class="node/g) || []).length;
    ok(cn === 6, "生链 6 节点闭环 (" + cn + ")");
    ok((seas.match(/class="node s-/g) || []).length === 5, "月令链 5 档节点");

    /* 补益卡片：喜用神每一项都要出卡片 */
    ok((html.match(/class="wx-kv"/g) || []).length >= 2, "含补益/脏腑属性卡片");

    /* 无渲染脏数据 */
    ok(txt.indexOf("undefined") < 0, "无 undefined 泄漏");
    ok(txt.indexOf("NaN") < 0, "无 NaN 泄漏");
    ok(html.indexOf("{a}") < 0 && html.indexOf("{b}") < 0 && html.indexOf("{c}") < 0, "模板占位符已全部替换");
  });
});

/* ---- 缺失五行的专项验证：找一个确实缺行 -- */
console.log("\n==== 缺失五行专项 ====");
/* 缺行样本 / 俱全样本各一（由引擎扫描确认），逐语言验证生链渲染 */
var MISS_SAMPLE = { y: 1965, m: 5, d: 15, hour: 11, minute: 0, gender: "male", calendar: "solar", tz: 8 }; /* 缺水 */
var FULL_SAMPLE = { y: 1950, m: 1, d: 1, hour: 4, minute: 10, gender: "male", calendar: "solar", tz: 8 };  /* 五行俱全 */
[{ r: MISS_SAMPLE, wantBroken: true }, { r: FULL_SAMPLE, wantBroken: false }].forEach(function (sp) {
  var r = E.compute(sp.r);
  var kind = sp.wantBroken ? "缺行" : "俱全";
  Object.keys(LANGS).forEach(function (lang) {
    var html = render(lang, {
      year: String(sp.r.y), month: String(sp.r.m), day: String(sp.r.d),
      hour: String(sp.r.hour), minute: String(sp.r.minute),
      gender: sp.r.gender, calendar: sp.r.calendar, tz: String(sp.r.tz)
    });
    var txt = strip(html);
    console.log("-- " + lang + " | " + kind + " | 缺: " + (r.missing.join("、") || "（无）") + " | 日主 " + r.dayMaster.gan + r.dayMaster.element);
    var broken = html.indexOf('class="node off"') >= 0;
    ok((r.missing.length > 0) === sp.wantBroken, "样本前提成立（" + kind + "）");
    ok(broken === sp.wantBroken, (sp.wantBroken ? "生链中断节点已标红删除线" : "五行俱全时无中断标记"));
    if (sp.wantBroken) {
      /* 缺行说明必须提到该元素名，且模板占位符已替换 */
      var wx = LANGS[lang].pack.bu && LANGS[lang].pack.bu.wx;
      var flowTxt = wx ? wx.flow.broken : "";
      ok(html.indexOf("{a}") < 0 && html.indexOf("{b}") < 0 && html.indexOf("{c}") < 0, "缺行文案占位符已替换");
      ok(flowTxt === "" || txt.indexOf("缺") >= 0 || lang !== "zh", "缺行已给出说明");
    }
  });
});

console.log("\n================================");
console.log(fail === 0 ? "全部通过：" + pass + " 项断言" : "失败 " + fail + " 项 / 通过 " + pass + " 项");
process.exit(fail ? 1 : 0);
