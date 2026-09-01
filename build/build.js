/* build.js — generate the full static site (en/zh/es/ar/ja) into ../site */
var fs = require("fs");
var path = require("path");
var tpl = require("./tpl");
var core = require("./pages-core");
var content = require("./pages-content");
var gen = require("./pages-generated");
var i18n = require("./pages-i18n");

var guanyin = JSON.parse(fs.readFileSync(path.join(__dirname, "data/guanyin.json"), "utf8"));
var guanyinEn = require("./data/guanyin-en");
var hexagrams = require("./data/hexagrams");
var zodiac = require("./data/zodiac");
var dreams = require("./data/dreams");
var zhTools = require("./lang/zh-tools");

var PACKS = { es: require("./lang/es"), ar: require("./lang/ar"), ja: require("./lang/ja") };
var READINGS = require("./lang/readings");
var DEEP = require("./lang/deep");
var WX = require("./lang/wuxing");   /* 五行经典文献语料（洪范 / 五行大义 / 三命通会 / 素问 / 滴天髓） */
/* 五行语料五语言齐备，需覆盖全部语言（jp/zw 深度语料仍只做 zh/en） */
["zh", "en", "es", "ar", "ja"].forEach(function (c) {
  if (WX[c] && WX[c].wx) READINGS[c].wx = WX[c].wx;
});
["zh","en"].forEach(function (c) {
  READINGS[c].jp.stemsDeep = DEEP[c].jp.stemsDeep;
  READINGS[c].jp.ge = DEEP[c].jp.ge;
  READINGS[c].jp.tiaohou = DEEP[c].jp.tiaohou;
  READINGS[c].jp.godsDeep = DEEP[c].jp.godsDeep;
  READINGS[c].jp.nayin = DEEP[c].jp.nayin;
  READINGS[c].jp.sec2 = DEEP[c].jp.sec2;
  READINGS[c].zp.starsLong = DEEP[c].zp.starsLong;
  READINGS[c].zp.palDeep = DEEP[c].zp.palDeep;
});
zhTools.bu.jp = READINGS.zh.jp;
zhTools.bu.wx = READINGS.zh.wx;
zhTools.zw.zp = READINGS.zh.zp;
Object.keys(PACKS).forEach(function (c) {
  PACKS[c].tools.bu.jp = READINGS[c].jp;
  PACKS[c].tools.bu.wx = READINGS[c].wx;
  PACKS[c].tools.zw.zp = READINGS[c].zp;
});

var SITE = path.join(__dirname, "..", "site");
function write(rel, html) {
  var file = path.join(SITE, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

/* ---------- data files for client fetch ---------- */
write(path.join("assets", "data", "guanyin.json"), JSON.stringify(guanyin));
write(path.join("assets", "data", "hexagrams.json"), JSON.stringify(hexagrams));
write(path.join("assets", "data", "dreams.json"), JSON.stringify(dreams));
var TUAN = require("./data/tuan");
var YAO = require("./data/yao");
var XIANG = require("./data/xiang");
write(path.join("assets", "data", "tuan.json"), JSON.stringify(TUAN));
write(path.join("assets", "data", "yao.json"), JSON.stringify(YAO));
write(path.join("assets", "data", "xiang.json"), JSON.stringify(XIANG));

/* ---------- favicon ---------- */
write(path.join("assets", "img", "favicon.svg"),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#b23a2e"/><text x="32" y="44" font-size="36" text-anchor="middle" fill="#fff" font-family="serif" font-weight="bold">命</text></svg>');

/* ---------- page registry: one entry per enPath (shared across languages) ---------- */
var reg = {}; // enPath -> {priority, changefreq}
function mark(enPath, pr, cf) { if (!reg[enPath]) reg[enPath] = { priority: pr, changefreq: cf }; }

/* ================= EN + ZH (legacy builders, with L10N injection for zh) ================= */
function zhInjections(scripts) {
  var inj = "<script>window.L10N = " + JSON.stringify(zhTools) + ';</script>\n' +
    "<script>window.ZODIAC_DATA = " + JSON.stringify(zodiac.map(function (z) { return { key: z.key, local: z.zh }; })) + ';</script>\n' +
    "<script>window.IC_THEME = " + JSON.stringify(hexagrams.reduce(function (o, h) { o[h.n] = h.theme; return o; }, {})) + ';</script>\n' +
    "<script>window.DREAMS_LOC = " + JSON.stringify(dreams.map(function (d) { return { c: d.cat, t: d.zh, m: d.mZh }; })) + ';</script>\n';
  return inj + scripts;
}

function emitLegacy(lang) {
  var Z = lang === "zh";
  function wrap(def, enPath, pr, cf) {
    if (Z) def.scripts = zhInjections(def.scripts || "");
    var html = tpl.page({ code: lang, prefix: Z ? "/zh" : "", brand: Z ? "八字神谕" : "Chinese Oracle", nav: lang === "zh" ? require("./lang/zh-nav") : require("./lang/en-nav"), foot: Z ? require("./lang/zh-foot") : require("./lang/en-foot") }, Object.assign({ enPath: enPath }, def));
    write((enPath === "/" ? "" : (Z ? "/zh" : "") + enPath).replace(/^\//, "") === "" ? "index.html" : ((Z ? "zh" : "") + (enPath === "/" ? "/index.html" : enPath + "index.html")).replace(/^\//, ""), html);
    mark(enPath, pr, cf);
  }

  var enNav = [["/", "Home"], ["/bazi/", "BaZi"], ["/ziwei/", "Zi Wei"], ["/jiaobei/", "Moon Blocks"], ["/kau-cim/", "Fortune Sticks"], ["/zodiac/", "Zodiac"], ["/iching/", "I Ching"], ["/almanac/", "Almanac"], ["/five-elements/", "Five Elements"], ["/dreams/", "Dreams"], ["/learn/", "Learn"]];
  var zhNav = [["/zh/", "首页"], ["/zh/bazi/", "八字排盘"], ["/zh/ziwei/", "紫微斗数"], ["/zh/jiaobei/", "在线掷筊"], ["/zh/kau-cim/", "观音灵签"], ["/zh/zodiac/", "生肖配对"], ["/zh/iching/", "易经六十四卦"], ["/zh/almanac/", "每日黄历"], ["/zh/five-elements/", "五行查询"], ["/zh/dreams/", "周公解梦"], ["/zh/learn/", "命理课堂"]];
  var enFoot = { blurb: "Free Chinese fortune-telling tools: BaZi calculator, Zi Wei Dou Shu charts, moon block divination, Guanyin fortune sticks, I Ching coins, zodiac compatibility, a daily almanac and a dream dictionary — Eastern wisdom in a modern interface.", toolsTitle: "Tools", learnTitle: "Learn", learnLabel: "Guides & Articles", aboutLabel: "About", privacyLabel: "Privacy Policy", tools: [["/", "Marriage Match"], ["/bazi/", "BaZi Calculator"], ["/ziwei/", "Zi Wei Dou Shu"], ["/jiaobei/", "Moon Block Divination"], ["/kau-cim/", "Guanyin Fortune Sticks"], ["/iching/", "I Ching Coins"], ["/zodiac/", "Zodiac Compatibility"], ["/almanac/", "Daily Almanac"], ["/dreams/", "Dream Dictionary"]], legal: "Your destiny is written by your own choices." };
  var zhFoot = { blurb: "免费的中文命理工具站：八字合婚、八字排盘、紫微斗数、掷筊问事、观音灵签、易经六十四卦、生肖配对、每日黄历与周公解梦。传统东方智慧，现代界面呈现。", toolsTitle: "工具", learnTitle: "了解更多", learnLabel: "命理课堂", aboutLabel: "关于本站", privacyLabel: "隐私政策", tools: [["/zh/", "八字合婚"], ["/zh/bazi/", "八字排盘"], ["/zh/ziwei/", "紫微斗数排盘"], ["/zh/jiaobei/", "在线掷筊"], ["/zh/kau-cim/", "观音灵签"], ["/zh/iching/", "易经六十四卦"], ["/zh/zodiac/", "生肖配对"], ["/zh/almanac/", "每日黄历"], ["/zh/dreams/", "周公解梦"]], legal: "命运始终由你自己的选择书写。" };
  var pack = { code: lang, prefix: Z ? "/zh" : "", brand: Z ? "八字神谕" : "Chinese Oracle", nav: Z ? zhNav : enNav, foot: Z ? zhFoot : enFoot };

  function emit(def, enPath, pr, cf) {
    if (Z) def.scripts = zhInjections(def.scripts || "");
    else def.scripts = '<script>window.L10N=window.L10N||{};window.L10N.bu=Object.assign(window.L10N.bu||{},{jp:' + JSON.stringify(READINGS.en.jp) + ',wx:' + JSON.stringify(READINGS.en.wx) + '});window.L10N.zw=Object.assign(window.L10N.zw||{},{zp:' + JSON.stringify(READINGS.en.zp) + '});</script>\n' + (def.scripts || "");
    var html = tpl.page(pack, Object.assign({ enPath: enPath }, def));
    var rel = enPath === "/" ? "index.html" : (Z ? "zh/" : "") + enPath.replace(/^\//, "") + "index.html";
    if (enPath === "/" && Z) rel = "zh/index.html";
    write(rel, html);
    mark(enPath, pr, cf);
  }

  emit(Z ? core.homeZh() : core.homeEn(), "/", "1.0", "weekly");
  var list = [
    [core.baziPage(Z), "/bazi/", "0.9"],
    [core.fiveElements(Z), "/five-elements/", "0.8"],
    [core.ziwei(Z), "/ziwei/", "0.9"],
    [core.jiaobei(Z), "/jiaobei/", "0.9"],
    [core.kauCimIndex(Z, guanyin, guanyinEn), "/kau-cim/", "0.9"],
    [core.zodiacIndex(Z, zodiac), "/zodiac/", "0.9"],
    [core.almanac(Z), "/almanac/", "0.8"],
    [core.ichingIndex(Z, hexagrams), "/iching/", "0.9"],
    [core.dreams(Z), "/dreams/", "0.8"],
    [content.learnIndex(lang), "/learn/", "0.7"],
    [content.aboutPage(lang), "/about/", "0.3"],
    [content.privacyPage(lang), "/privacy/", "0.2"]
  ];
  Object.keys(content.ARTICLES).forEach(function (slug) {
    list.push([content.articlePage(lang, slug, content.ARTICLES), "/learn/" + slug + "/", "0.6"]);
  });
  zodiac.forEach(function (z) { list.push([gen.zodiacAnimal(Z, z), "/zodiac/" + z.key + "/", "0.6"]); });
  hexagrams.forEach(function (hx) { list.push([gen.hexagramPage(Z, hx, hexagrams), "/iching/hexagram-" + hx.n + "/", "0.5"]); });
  guanyin.forEach(function (s) { list.push([gen.signPage(Z, s, guanyinEn[s.id]), "/kau-cim/sign-" + s.id + "/", "0.4"]); });
  list.forEach(function (it) { emit(it[0], it[1], it[2], "monthly"); });
}

/* ================= ES / AR / JA (pack-driven builders) ================= */
function emitPack(P) {
  function emit(def, enPath, pr, cf) {
    var html = tpl.page(P, Object.assign({ enPath: enPath }, def));
    var rel = P.prefix.slice(1) + (enPath === "/" ? "/index.html" : enPath + "index.html");
    write(rel, html);
    mark(enPath, pr, cf);
  }
  emit(i18n.pageHome(P), "/", "1.0", "weekly");
  emit(i18n.pageFive(P), "/five-elements/", "0.8", "monthly");
  emit(i18n.pageZiwei(P), "/ziwei/", "0.9", "monthly");
  emit(i18n.pageJiaobei(P), "/jiaobei/", "0.9", "monthly");
  emit(i18n.pageKaucim(P), "/kau-cim/", "0.9", "monthly");
  emit(i18n.pageZodiac(P), "/zodiac/", "0.9", "monthly");
  emit(i18n.pageAlmanac(P), "/almanac/", "0.8", "monthly");
  emit(i18n.pageIching(P), "/iching/", "0.9", "monthly");
  emit(i18n.pageDreams(P), "/dreams/", "0.8", "monthly");
  emit(i18n.pageLearn(P), "/learn/", "0.7", "monthly");
  emit(i18n.pageAbout(P), "/about/", "0.3", "monthly");
  emit(i18n.pagePrivacy(P), "/privacy/", "0.2", "monthly");
  Object.keys(P.articles).forEach(function (slug) {
    emit(i18n.pageArticle(P, slug), "/learn/" + slug + "/", "0.6", "monthly");
  });
  zodiac.forEach(function (z) { emit(i18n.pageAnimal(P, z.key), "/zodiac/" + z.key + "/", "0.6", "monthly"); });
  hexagrams.forEach(function (hx) { emit(i18n.pageHexagram(P, hx), "/iching/hexagram-" + hx.n + "/", "0.5", "monthly"); });
  guanyin.forEach(function (s) { emit(i18n.pageSign(P, s), "/kau-cim/sign-" + s.id + "/", "0.4", "monthly"); });
}

emitLegacy("en");
emitLegacy("zh");
Object.keys(PACKS).forEach(function (code) { emitPack(PACKS[code]); });

/* ---------- 404 (en/zh + new langs) ---------- */
function notFound(html, rel) { write(rel, html); }
["", "zh/"].forEach(function (pre) {
  var Z = pre === "zh/";
  var body = '<section class="hero container"><h1>404 · ' + (Z ? "此路未通" : "Page not found") + '</h1><p class="sub">' +
    (Z ? "命盘里有变卦，网页也偶有迷路。回到首页重新出发：" : "Even the I Ching has a Before Completion hexagram. Head back and recast:") + "</p>" +
    '<p style="margin-top:18px"><a class="btn" href="/' + pre + '">' + (Z ? "回首页" : "Home") + "</a></p></section>";
  var nav = Z ? [["/zh/", "八字排盘"], ["/zh/ziwei/", "紫微斗数"], ["/zh/jiaobei/", "在线掷筊"], ["/zh/kau-cim/", "观音灵签"], ["/zh/zodiac/", "生肖配对"], ["/zh/iching/", "易经六十四卦"], ["/zh/almanac/", "每日黄历"], ["/zh/five-elements/", "五行查询"], ["/zh/dreams/", "周公解梦"], ["/zh/learn/", "命理课堂"]] : [["/", "BaZi"], ["/ziwei/", "Zi Wei"], ["/jiaobei/", "Moon Blocks"], ["/kau-cim/", "Fortune Sticks"], ["/zodiac/", "Zodiac"], ["/iching/", "I Ching"], ["/almanac/", "Almanac"], ["/five-elements/", "Five Elements"], ["/dreams/", "Dreams"], ["/learn/", "Learn"]];
  var foot = Z ? { blurb: "免费的中文命理工具站。", toolsTitle: "工具", learnTitle: "了解更多", learnLabel: "命理课堂", aboutLabel: "关于本站", privacyLabel: "隐私政策", tools: [], legal: "" } : { blurb: "Free Chinese fortune-telling tools.", toolsTitle: "Tools", learnTitle: "Learn", learnLabel: "Guides", aboutLabel: "About", privacyLabel: "Privacy", tools: [], legal: "" };
  var pack = { code: Z ? "zh" : "en", prefix: Z ? "/zh" : "", brand: Z ? "八字神谕" : "Chinese Oracle", nav: nav, foot: foot };
  write(pre + "404.html", tpl.page(pack, { enPath: "/404.html", title: Z ? "404 | 八字神谕" : "404 | BaziOracle", desc: "404", body: body }));
});
Object.keys(PACKS).forEach(function (code) {
  var P = PACKS[code];
  var d = i18n.page404(P);
  write(P.prefix.slice(1) + "/404.html", tpl.page(P, Object.assign({ enPath: "/404.html" }, d)));
});

/* ---------- sitemap (all languages, hreflang x5 + x-default) ---------- */
var today = new Date().toISOString().slice(0, 10);
var urls = Object.keys(reg).filter(function (p) { return p !== "/404.html"; }).map(function (enPath) {
  var alts = tpl.langPaths(enPath).map(function (x) {
    return '    <xhtml:link rel="alternate" hreflang="' + x.code + '" href="' + tpl.SITE_URL + x.path + '"/>\n';
  }).join("") + '    <xhtml:link rel="alternate" hreflang="x-default" href="' + tpl.SITE_URL + (enPath === "/" ? "/" : enPath) + '"/>\n';
  var locs = tpl.langPaths(enPath).map(function (x) {
    var r = reg[enPath];
    return "  <url>\n    <loc>" + tpl.SITE_URL + x.path + "</loc>\n" +
      (r.priority ? "    <priority>" + r.priority + "</priority>\n" : "") +
      (r.changefreq ? "    <changefreq>" + r.changefreq + "</changefreq>\n" : "") +
      "    <lastmod>" + today + "</lastmod>\n" + alts + "  </url>";
  }).join("\n");
  return locs;
}).join("\n");
write("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + urls + "\n</urlset>\n");

/* ---------- robots & ads.txt ---------- */
write("robots.txt", "User-agent: *\nAllow: /\n\nSitemap: " + tpl.SITE_URL + "/sitemap.xml\n");
write("ads.txt", "# Replace the line below with your own AdSense publisher id after approval.\n# google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0\n");

var n = 0;
(function count(dir) {
  fs.readdirSync(dir).forEach(function (f) {
    var p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) count(p); else n++;
  });
})(SITE);
console.log("Build complete:", n, "files in site/");
