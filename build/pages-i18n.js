/* pages-i18n.js — builds all page types for a language pack (es/ar/ja) */
var tpl = require("./tpl");
var esc = tpl.esc;
var hexData = require("./data/hexagrams");
var zodiacData = require("./data/zodiac");
var guanyin = JSON.parse(require("fs").readFileSync(__dirname + "/data/guanyin.json", "utf8"));
var XIANG = require("./data/xiang");
/* Build-time fallback for the Zi Wei fortune-year field; ziwei.js corrects it to the visitor's year. */
var NOW_Y = new Date().getFullYear();
var BRANCH_INFO = {
  rat: ["子", "23:00–00:59"], ox: ["丑", "01:00–02:59"], tiger: ["寅", "03:00–05:00"], rabbit: ["卯", "05:00–07:00"],
  dragon: ["辰", "07:00–09:00"], snake: ["巳", "09:00–11:00"], horse: ["午", "11:00–12:59"], goat: ["未", "13:00–14:59"],
  monkey: ["申", "15:00–16:59"], rooster: ["酉", "17:00–18:59"], dog: ["戌", "19:00–20:59"], pig: ["亥", "21:00–22:59"]
};
var EM = { rat:"🐀", ox:"🐂", tiger:"🐅", rabbit:"🐇", dragon:"🐉", snake:"🐍", horse:"🐎", goat:"🐐", monkey:"🐒", rooster:"🐓", dog:"🐕", pig:"🐖" };
var TR = { qian:"☰ 乾", dui:"☱ 兑", li:"☲ 離", zhen:"☳ 震", xun:"☴ 巽", kan:"☵ 坎", gen:"☶ 艮", kun:"☷ 坤" };
var AD = '<div class="ad-slot"><ins class="adsbygoogle" style="display:block" data-ad-client="" data-ad-slot="" data-ad-format="auto" data-full-width-responsive="true"></ins></div>';

function opts(from, to) { var o = []; for (var i = from; i <= to; i++) o.push("<option>" + i + "</option>"); return o.join(""); }
var YEAR_OPTS = opts(1940, 2030), MON_OPTS = opts(1, 12), DAY_OPTS = opts(1, 31), MIN_OPTS = opts(0, 59);

function l10nScript(P) { return "<script>window.L10N = " + JSON.stringify(P.tools) + ';</script>\n'; }

function baziForm(P) {
  var F = P.form;
  var tz = (function () { var s = ""; for (var i = -11; i <= 12; i++) s += "<option value='" + i + "'" + (i === 8 ? " selected" : "") + ">UTC" + (i >= 0 ? "+" : "") + i + "</option>"; return s; })();
  return '<form id="bazi-form" class="card" style="text-align:left">' +
    '<div class="form-row">' +
    '<div class="field"><label>' + F.calendar + '</label><select name="calendar"><option value="solar">' + F.solar + '</option><option value="lunar">' + F.lunar + "</option></select></div>" +
    '<div class="field"><label>' + F.year + '</label><select name="year">' + YEAR_OPTS + "</select></div>" +
    '<div class="field"><label>' + F.month + '</label><select name="month">' + MON_OPTS + "</select></div></div>" +
    '<div class="form-row">' +
    '<div class="field"><label>' + F.day + '</label><select name="day">' + DAY_OPTS + "</select></div>" +
    '<div class="field"><label>' + F.hour + '</label><select name="hour"></select></div>' +
    '<div class="field"><label>' + F.minute + '</label><select name="minute">' + MIN_OPTS + '</select></div></div>' +
    '<div class="form-row">' +
    '<div class="field"><label>' + F.gender + '</label><select name="gender"><option value="m">' + F.male + '</option><option value="f">' + F.female + "</option></select></div>" +
    '<div class="field"><label>' + F.tz + '</label><select name="tz">' + tz + "</select></div>" +
    '<div class="field"></div></div>' +
    '<details><summary style="cursor:pointer;color:var(--muted);font-size:.9rem;margin:6px 0 12px">' + F.adv + "</summary>" +
    '<div class="form-row">' +
    '<div class="field"><label>' + F.lon + '</label><input name="longitude" type="number" step="0.1" min="-180" max="180" placeholder="116.4"></div>' +
    '<div class="field" style="justify-content:end"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" name="trueSolar" checked> ' + F.trueSolar + "</label></div>" +
    '<div class="field"></div></div></details>' +
    '<button class="btn" type="submit">' + F.btn + "</button>" +
    '<p style="margin:10px 0 0"><small>' + F.privacy + "</small></p></form>";
}

function jbHomeSection(P) {
  var J = P.pages.jiaobei;
  var jb = P.tools.jb;
  return '<section class="block container" id="home-jiaobei">' +
    '<div class="sec-head"><div class="kicker">' + J.kicker + "</div><h2>" + J.homeTitle + "</h2><p>" + J.homeSub + "</p></div>" +
    '<div style="max-width:640px;margin:0 auto"><div class="card center">' +
    '<input id="jb-q" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:8px;font-family:inherit" placeholder="' + esc(jb.qPh) + '">' +
    tpl.jbStage +
    '<div id="jb-round" style="color:var(--muted);font-size:.85rem">' + jb.threeNote + "</div>" +
    '<div id="jb-verdict" class="jb-verdict"></div><div id="jb-desc" style="color:var(--ink2)"></div><div id="jb-hist" class="jb-hist"></div>' +
    '<p style="margin-top:16px"><button id="jb-btn" class="btn">' + jb.throw + "</button>" +
    '<button id="jb-again" class="btn ghost" style="display:none">' + jb.restart + "</button>" +
    '<button id="jb-copy" class="btn gold" style="display:none">' + jb.copy + "</button></p>" +
    '<p style="margin:12px 0 0"><a href="' + P.prefix + '/jiaobei/">' + J.rulesLink + " →</a></p>" +
    "</div></div>" + AD + "</section>";
}

function pageHome(P) {
  var H = P.pages.home;
  var tools = H.tools.map(function (t) {
    return '<a class="card tool-card" href="' + P.prefix + t[3] + '"><span class="ic">' + t[0] + "</span><h3>" + t[1] + "</h3><p style='font-size:.92rem;color:var(--ink2)'>" + t[2] + "</p></a>";
  }).join("");
  var faq = H.faq.map(function (f) { return '<details class="faq"><summary>' + f[0] + "</summary><p>" + f[1] + "</p></details>"; }).join("");
  var faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": H.faq.map(function (f) { return { "@type": "Question", "name": f[0], "acceptedAnswer": { "@type": "Answer", "text": f[1] } }; }) };
  var ld = { "@context": "https://schema.org", "@type": "WebSite", "name": "BaziOracle", "url": tpl.SITE_URL + P.prefix + "/", "inLanguage": P.htmlLang };
  var body = '<section class="hero container"><div class="kicker">' + H.kicker + "</div><h1>" + H.h1 + "</h1>" +
    '<p class="sub">' + H.sub + '</p><div class="divider">☰ ☯ ☷</div></section>' +
    '<section class="container" style="max-width:860px">' + baziForm(P) + '<div class="result" id="bazi-out"></div>' + AD + "</section>" +
    jbHomeSection(P) +
    '<section class="block container"><div class="sec-head"><div class="kicker">' + H.toolsKicker + "</div><h2>" + H.toolsTitle + "</h2></div>" +
    '<div class="grid g4">' + tools + "</div></section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + H.whatKicker + "</div><h2>" + H.whatTitle + "</h2></div>" +
    "<p>" + H.what1 + "</p><p>" + H.what2 + "</p></section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + H.faqKicker + "</div><h2>" + H.faqTitle + "</h2></div>" + faq + "</section>";
  return { enPath: "/", title: H.title, desc: H.desc, body: body, jsonLd: [ld, faqLd],
    scripts: l10nScript(P) + tpl.S(["/assets/vendor/lunar.min.js", "/assets/js/bazi-engine.js", "/assets/js/bazi-ui.js"]) + '\n<script>BaziUI.initForm("bazi-form","bazi-out");</script>\n' + tpl.S(["/assets/js/jiaobei.js"]) };
}

function pageFive(P) {
  var F = P.pages.five;
  var rows = F.imgRows.map(function (r) { return "<tr><td><b>" + r[0] + "</b></td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>"; }).join("");
  var body = '<section class="hero container"><div class="kicker">' + F.kicker + "</div><h1>" + F.h1 + "</h1>" +
    '<p class="sub">' + F.sub + "</p></section>" +
    '<section class="container" style="max-width:860px">' + baziForm(P) + '<div class="result" id="bazi-out"></div>' + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + F.tableKicker + "</div><h2>" + F.tableTitle + "</h2></div>" +
    '<div class="scrollx"><table class="t"><tr><th>' + F.th[0] + "</th><th>" + F.th[1] + "</th><th>" + F.th[2] + "</th></tr>" + rows + "</table></div>" +
    '<p class="mt2">' + F.outro.replace("{bazi}", P.prefix + "/").replace("{learn}", P.prefix + "/learn/five-elements-guide/") + "</p></section>";
  return { enPath: "/five-elements/", title: F.title, desc: F.desc, body: body,
    scripts: l10nScript(P) + tpl.S(["/assets/vendor/lunar.min.js", "/assets/js/bazi-engine.js", "/assets/js/bazi-ui.js"]) + '\n<script>BaziUI.initForm("bazi-form","bazi-out",{focus:"elements"});</script>',
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/five-elements/", F.crumb]] };
}

function pageZiwei(P) {
  var Z = P.pages.ziwei;
  var palRows = Z.palaces.map(function (x) { return "<tr><td><b>" + x[0] + "</b></td><td>" + x[1] + "</td></tr>"; }).join("");
  var body = '<section class="hero container"><div class="kicker">' + Z.kicker + "</div><h1>" + Z.h1 + "</h1>" +
    '<p class="sub">' + Z.sub + "</p></section>" +
    '<section class="container" style="max-width:760px"><form id="zw-form" class="card" style="text-align:left">' +
    '<div class="form-row">' +
    '<div class="field"><label>' + Z.date + '</label><input type="date" name="date" required></div>' +
    '<div class="field"><label>' + Z.hour + '</label><select name="timeIndex"></select></div>' +
    '<div class="field"><label>' + Z.gender + '</label><select name="gender"><option value="male">' + P.form.male + '</option><option value="female">' + P.form.female + "</option></select></div>" +
    '<div class="field"><label>' + P.tools.zw.queryYear + '</label><input type="number" name="year" min="1900" max="2100" step="1" value="' + NOW_Y + '" inputmode="numeric"><small style="opacity:.7">' + P.tools.zw.queryYearHint + "</small></div></div>" +
    '<button class="btn" type="submit">' + Z.btn + "</button></form>" +
    '<div class="result" id="zw-out"></div>' + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + Z.palKicker + "</div><h2>" + Z.palTitle + "</h2></div>" +
    '<div class="scrollx"><table class="t"><tr><th>' + Z.palTh[0] + "</th><th>" + Z.palTh[1] + "</th></tr>" + palRows + "</table></div>" +
    "<p class='mt2'>" + Z.intro + "</p></section>";
  return { enPath: "/ziwei/", title: Z.title, desc: Z.desc, body: body,
    scripts: l10nScript(P) + tpl.S(["/assets/vendor/iztro.min.js", "/assets/js/ziwei.js"]),
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/ziwei/", Z.crumb]] };
}

function pageJiaobei(P) {
  var J = P.pages.jiaobei;
  var ruleRows = J.rules.map(function (r) { return "<tr><td><b>" + r[0] + "</b></td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>"; }).join("");
  var body = '<section class="hero container"><div class="kicker">' + J.kicker + "</div><h1>" + J.h1 + "</h1>" +
    '<p class="sub">' + J.sub + "</p></section>" +
    '<section class="container" style="max-width:760px"><div class="card center">' +
    '<input id="jb-q" class="field" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:8px;font-family:inherit" placeholder="' + esc(P.tools.jb.qPh) + '">' +
    tpl.jbStage +
    '<div id="jb-round" style="color:var(--muted);font-size:.85rem">' + P.tools.jb.threeNote + "</div>" +
    '<div id="jb-verdict" class="jb-verdict"></div><div id="jb-desc" style="color:var(--ink2)"></div><div id="jb-hist" class="jb-hist"></div>' +
    '<p style="margin-top:16px"><button id="jb-btn" class="btn">' + P.tools.jb.throw + "</button>" +
    '<button id="jb-again" class="btn ghost" style="display:none">' + P.tools.jb.restart + "</button>" +
    '<button id="jb-copy" class="btn gold" style="display:none">' + P.tools.jb.copy + "</button></p></div>" + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + J.rulesKicker + "</div><h2>" + J.rulesTitle + "</h2></div>" +
    '<div class="scrollx"><table class="t"><tr><th>' + J.rulesTh[0] + "</th><th>" + J.rulesTh[1] + "</th><th>" + J.rulesTh[2] + "</th></tr>" + ruleRows + "</table></div>" +
    "<h2 class='mt2'>" + J.howTitle + "</h2><p>" + J.how + "</p>" +
    "<h3>" + J.originTitle + "</h3><p>" + J.origin + "</p></section>";
  return { enPath: "/jiaobei/", title: J.title, desc: J.desc, body: body,
    scripts: l10nScript(P) + tpl.S(["/assets/js/jiaobei.js"]),
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/jiaobei/", J.crumb]] };
}

function pageKaucim(P) {
  var K = P.pages.kaucim;
  var links = guanyin.map(function (s) {
    var loc = P.signs[s.id];
    var t = loc ? loc[0] : s.title;
    return '<a class="tag" href="' + P.prefix + "/kau-cim/sign-" + s.id + '/" title="' + esc(t) + '">' + s.id + " · " + esc(t.length > 12 ? t.slice(0, 12) + "…" : t) + "</a>";
  }).join(" ");
  var locMap = {};
  guanyin.forEach(function (s) {
    var loc = P.signs[s.id];
    locMap[s.id] = loc ? { t: loc[0], x: loc[1], a: loc[2] || "" } : { t: s.title, x: "", a: "" };
  });
  var body = '<section class="hero container"><div class="kicker">' + K.kicker + "</div><h1>" + K.h1 + "</h1>" +
    '<p class="sub">' + K.sub + "</p></section>" +
    "<script>window.KAU_LOC = " + JSON.stringify(locMap) + ';</script>' +
    '<section class="container center" style="max-width:560px">' +
    '<div id="kc-cup" class="kc-cup"></div>' +
    '<p style="margin-top:20px"><button id="kc-btn" class="btn"></button></p>' +
    '<div id="kc-out"></div>' + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + K.aboutKicker + "</div><h2>" + K.aboutTitle + "</h2></div>" +
    "<p>" + K.about1 + "</p><p>" + K.about2 + "</p>" +
    '<div class="sec-head mt2"><h3>' + K.allTitle + "</h3></div><p>" + links + "</p></section>";
  return { enPath: "/kau-cim/", title: K.title, desc: K.desc, body: body,
    scripts: l10nScript(P) + tpl.S(["/assets/js/kau-cim.js"]),
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/kau-cim/", K.crumb]] };
}

function pageZodiac(P) {
  var Z = P.pages.zodiac;
  var tiles = zodiacData.map(function (z) {
    var loc = P.zodiac[z.key];
    return '<a class="zo-tile" href="' + P.prefix + "/zodiac/" + z.key + '/"><span class="em">' + EM[z.key] + '</span><span class="ch">' + loc.n + '</span><span class="en">' + loc.e + "</span></a>";
  }).join("");
  var body = '<section class="hero container"><div class="kicker">' + Z.kicker + "</div><h1>" + Z.h1 + "</h1>" +
    '<p class="sub">' + Z.sub + "</p></section>" +
    '<section class="container"><div class="zo-grid">' + tiles + "</div></section>" +
    '<section class="container" style="max-width:720px"><div class="sec-head"><div class="kicker">' + Z.compatKicker + "</div><h2>" + Z.compatTitle + "</h2></div>" +
    '<form id="zc-form" class="card"><div class="form-row">' +
    '<div class="field"><label>' + P.tools.zc.a + '</label><select name="a"></select></div>' +
    '<div class="field"><label>' + P.tools.zc.b + '</label><select name="b"></select></div>' +
    '<div class="field" style="justify-content:end"><button class="btn" type="submit">' + P.tools.zc.btn + "</button></div>" +
    '</div></form><div class="result" id="zc-out"></div>' + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + Z.rulesKicker + "</div><h2>" + Z.rulesTitle + "</h2></div>" +
    "<p>" + Z.rules + "</p></section>";
  var zdata = zodiacData.map(function (z) { return { key: z.key, local: P.zodiac[z.key].n, en: z.en }; });
  return { enPath: "/zodiac/", title: Z.title, desc: Z.desc, body: body,
    scripts: l10nScript(P) + "<script>window.ZODIAC_DATA = " + JSON.stringify(zdata) + ';</script>\n' + tpl.S(["/assets/js/zodiac.js"]),
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/zodiac/", Z.crumb]] };
}

function pageAlmanac(P) {
  var A = P.pages.almanac;
  var body = '<section class="hero container"><div class="kicker">' + A.kicker + "</div><h1>" + A.h1 + "</h1>" +
    '<p class="sub">' + A.sub + "</p></section>" +
    '<section class="container" style="max-width:760px"><form id="al-form" class="card"><div class="form-row">' +
    '<div class="field"><label>' + P.tools.al.pick + '</label><input type="date" name="date" required></div>' +
    '<div class="field" style="justify-content:end"><button class="btn" type="submit">' + P.tools.al.btn + "</button></div>" +
    '<div class="field"></div></div></form><div class="result" id="al-out"></div>' + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + A.howKicker + "</div><h2>" + A.howTitle + "</h2></div>" +
    "<p>" + A.how1 + "</p><p>" + A.how2 + "</p></section>";
  return { enPath: "/almanac/", title: A.title, desc: A.desc, body: body,
    scripts: l10nScript(P) + tpl.S(["/assets/vendor/lunar.min.js", "/assets/js/almanac-terms.js", "/assets/js/almanac.js"]),
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/almanac/", A.crumb]] };
}

function pageIching(P) {
  var I = P.pages.iching;
  var links = hexData.map(function (hx) {
    return '<a class="tag" href="' + P.prefix + "/iching/hexagram-" + hx.n + '/">' + hx.n + " · " + hx.name + " " + hx.py + "</a>";
  }).join(" ");
  var body = '<section class="hero container"><div class="kicker">' + I.kicker + "</div><h1>" + I.h1 + "</h1>" +
    '<p class="sub">' + I.sub + "</p></section>" +
    '<section class="container center" style="max-width:640px"><div class="card">' +
    '<div id="ic-stage"><p>' + I.stage + "</p></div>" +
    '<p><button id="ic-btn" class="btn"></button></p><div id="ic-out"></div></div>' + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + I.methodKicker + "</div><h2>" + I.methodTitle + "</h2></div>" +
    "<p>" + I.method + "</p>" +
    '<div class="sec-head mt2"><h3>' + I.allTitle + "</h3></div><p>" + links + "</p></section>";
  return { enPath: "/iching/", title: I.title, desc: I.desc, body: body,
    scripts: l10nScript(P) + "<script>window.IC_THEME = " + JSON.stringify(P.hex) + ';</script>\n' + tpl.S(["/assets/js/iching.js"]),
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/iching/", I.crumb]] };
}

function pageDreams(P) {
  var D = P.pages.dreams;
  var body = '<section class="hero container"><div class="kicker">' + D.kicker + "</div><h1>" + D.h1 + "</h1>" +
    '<p class="sub">' + D.sub + "</p></section>" +
    '<section class="container" style="max-width:860px"><div class="field"><input id="dream-q"></div>' +
    '<div id="dream-box"><div id="dream-list"></div></div>' + AD + "</section>" +
    '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + D.howKicker + "</div><h2>" + D.howTitle + "</h2></div>" +
    "<p>" + D.how + "</p></section>";
  return { enPath: "/dreams/", title: D.title, desc: D.desc, body: body,
    scripts: l10nScript(P) + "<script>window.DREAMS_LOC = " + JSON.stringify(P.dreams) + ';</script>\n' + tpl.S(["/assets/js/dreams.js"]),
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/dreams/", D.crumb]] };
}

function pageLearn(P) {
  var L = P.pages.learn;
  var cards = Object.keys(P.articles).map(function (slug) {
    var a = P.articles[slug];
    return '<a class="card tool-card" href="' + P.prefix + "/learn/" + slug + '/"><h3>' + a.short + "</h3><p style='color:var(--ink2);font-size:.92rem'>" + a.teaser + "</p></a>";
  }).join("");
  var body = '<section class="hero container"><div class="kicker">' + L.kicker + "</div><h1>" + L.h1 + "</h1>" +
    '<p class="sub">' + L.sub + '</p></section><section class="container"><div class="grid g3">' + cards + "</div></section>";
  return { enPath: "/learn/", title: L.title, desc: L.desc, body: body,
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/learn/", L.crumb]] };
}

function pageArticle(P, slug) {
  var a = P.articles[slug];
  var path = P.prefix + "/learn/" + slug + "/";
  var extra = (P.citations && P.citations[slug]) || "";
  return { enPath: "/learn/" + slug + "/", title: a.title, desc: a.desc,
    body: '<article class="doc block container">' + a.html + extra + "</article>",
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/learn/", P.pages.learn.crumb], [path, a.short]] };
}

function pageAbout(P) {
  var A = P.pages.about;
  return { enPath: "/about/", title: A.title, desc: A.desc, body: '<article class="doc block container">' + A.html + "</article>",
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/about/", A.crumb]] };
}

function pagePrivacy(P) {
  var A = P.pages.privacy;
  return { enPath: "/privacy/", title: A.title, desc: A.desc, body: '<article class="doc block container">' + A.html + "</article>",
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/privacy/", A.crumb]] };
}

function pageAnimal(P, key) {
  var z = zodiacData.filter(function (x) { return x.key === key; })[0];
  var loc = P.zodiac[key];
  var info = BRANCH_INFO[key];
  var p = P.prefix + "/zodiac/" + key + "/";
  function names(keys) {
    return keys.map(function (k) {
      return '<a class="tag" href="' + P.prefix + "/zodiac/" + k + '/">' + P.zodiac[k].n + "</a>";
    }).join(" ");
  }
  var years = z.years.slice().reverse().join(", ");
  var body = '<section class="hero container"><div class="kicker">' + EM[key] + " " + info[0] + "</div>" +
    "<h1>" + loc.h1 + "</h1>" + '<p class="sub">' + loc.traits + "</p></section>" +
    '<section class="container" style="max-width:860px">' +
    '<div class="panel"><h2>' + P.animalYearsTitle + "</h2><p>" + years + " …</p>" +
    "<p><small>" + (P.animalYearsNote.replace("{b}", info[0]).replace("{h}", info[1]).replace("{bazi}", P.prefix + "/")) + "</small></p></div>" +
    '<div class="panel"><h2>' + P.animalCareerTitle + "</h2><p>" + loc.career + "</p></div>" +
    '<div class="panel"><h2>' + P.animalMatchTitle + "</h2>" +
    "<p>" + P.animalBest + " " + names(z.best) + "</p>" +
    "<p>" + P.animalWorst + " " + names(z.worst) + "</p>" +
    '<p><a class="btn small" href="' + P.prefix + '/zodiac/">' + P.animalCheck + "</a></p></div>" +
    '<div class="panel"><h2>' + P.animalLuckyTitle + "</h2><p>" + P.animalNumbers + " " + z.lucky.join(", ") + " · " + P.animalColors + " " + loc.colors + "</p></div>" + AD +
    '<div class="panel"><h2>' + P.animalBeyondTitle + "</h2><p>" + P.animalBeyond.replace("{bazi}", P.prefix + "/").replace("{ziwei}", P.prefix + "/ziwei/") + "</p></div></section>";
  return { enPath: "/zodiac/" + key + "/", title: loc.title, desc: loc.desc, body: body,
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/zodiac/", P.pages.zodiac.crumb], [p, loc.n]] };
}

function pageHexagram(P, hx) {
  var theme = P.hex[hx.n];
  var p = P.prefix + "/iching/hexagram-" + hx.n + "/";
  var lines = hx.lines.split("").map(function (c) {
    return '<span class="hexline' + (c === "0" ? " yin" : "") + '"></span>';
  }).join("");
  var nav = [];
  if (hx.n > 1) nav.push('<a class="tag" href="' + P.prefix + "/iching/hexagram-" + (hx.n - 1) + '/">← ' + (hx.n - 1) + "</a>");
  nav.push('<a class="tag" href="' + P.prefix + '/iching/">' + P.hexAll + "</a>");
  if (hx.n < 64) nav.push('<a class="tag" href="' + P.prefix + "/iching/hexagram-" + (hx.n + 1) + '/">' + (hx.n + 1) + " →</a>");
  var body = '<article class="doc block container">' +
    "<h1>" + P.hexH1.replace("{n}", hx.n).replace("{name}", hx.name).replace("{py}", hx.py) + (hx.up === hx.low ? " " + P.hexPure : "") + "</h1>" +
    '<p class="center" style="margin:16px 0"><span class="hexgram" style="transform:scale(1.2)">' + lines + "</span></p>" +
    "<p class='center'><span class='tag'>" + P.hexAbove + " " + TR[hx.up] + "</span> <span class='tag'>" + P.hexBelow + " " + TR[hx.low] + "</span></p>" +
    "<h2>" + P.hexJudgmentTitle + "</h2>" +
    '<blockquote class="panel" style="font-size:1.15rem;text-align:center">' + hx.judg + "</blockquote>" +
    "<h2>" + (P.xiangTitle || "The Image") + "</h2>" +
    '<blockquote class="classic" style="margin:8px 0"><span class="zh-quote">「' + (XIANG[hx.n] ? XIANG[hx.n].z : "") + '」</span>' +
    '<span style="display:block;font-size:.95rem;color:var(--ink2);margin-top:8px">' + theme + "</span>" +
    '<cite class="cite">—— 《周易·大象传》</cite></blockquote>' +
    "<p>" + theme + "</p>" + AD +
    "<p>" + nav.join(" ") + "</p>" +
    '<p class="disclaimer">' + P.hexDisc + "</p></article>";
  return { enPath: "/iching/hexagram-" + hx.n + "/", title: P.hexTitle.replace("{n}", hx.n).replace("{name}", hx.name).replace("{py}", hx.py), desc: theme.slice(0, 150), body: body,
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/iching/", P.pages.iching.crumb], [p, hx.n + " " + hx.name]] };
}

function pageSign(P, s) {
  var loc = P.signs[s.id];
  var lv = s.type.slice(0, 2);
  var cls = lv === "上签" ? "green" : lv === "下签" ? "red" : "";
  var grade = (P.tools.kc.grades && P.tools.kc.grades[lv]) || lv;
  var p = P.prefix + "/kau-cim/sign-" + s.id + "/";
  var poem = s.poetry.split("。").filter(Boolean).map(function (l) { return '<span class="l">' + l + "。</span>"; }).join("");
  var prev = s.id > 1 ? '<a class="tag" href="' + P.prefix + "/kau-cim/sign-" + (s.id - 1) + '/">← ' + (s.id - 1) + "</a>" : "";
  var next = s.id < 100 ? '<a class="tag" href="' + P.prefix + "/kau-cim/sign-" + (s.id + 1) + '/">' + (s.id + 1) + " →</a>" : "";
  var body = '<article class="doc block container">' +
    "<h1>" + P.signH1.replace("{n}", s.id).replace("{title}", loc ? loc[0] : s.title) + "</h1>" +
    "<p><span class='tag " + cls + "'>" + grade + (s.type.slice(2) || "") + "</span></p>" +
    "<h2>" + P.signPoemTitle + "</h2>" +
    '<p class="kc-poem">' + poem + "</p>" +
    "<h2>" + P.signMeaningTitle + "</h2><p>" + (loc ? loc[1] : "") + "</p>" +
    (loc && loc[2] ? "<p><b>" + (P.tools.kc.advice || "") + ":</b> " + loc[2] + "</p>" : "") + AD +
    "<p>" + prev + ' <a class="tag" href="' + P.prefix + '/kau-cim/">' + P.signAgain + "</a> " + next + "</p>" +
    '<p class="disclaimer">' + P.signDisc + "</p></article>";
  return { enPath: "/kau-cim/sign-" + s.id + "/", title: P.signTitle.replace("{n}", s.id).replace("{title}", loc ? loc[0] : s.title).replace("{grade}", grade), desc: (loc ? loc[1] : "").slice(0, 150), body: body,
    crumbs: [[P.prefix + "/", P.crumbHome], [P.prefix + "/kau-cim/", P.pages.kaucim.crumb], [p, (P.signWord || "No.") + " " + s.id]] };
}

function page404(P) {
  var body = '<section class="hero container"><h1>404 · ' + P.p404 + '</h1><p class="sub">' + P.p404Sub + '</p><p style="margin-top:18px"><a class="btn" href="' + P.prefix + '/">' + P.p404Btn + "</a></p></section>";
  return { enPath: "/404.html", title: "404 · BaziOracle", desc: "404", body: body };
}

module.exports = { pageHome: pageHome, pageFive: pageFive, pageZiwei: pageZiwei, pageJiaobei: pageJiaobei, pageKaucim: pageKaucim, pageZodiac: pageZodiac, pageAlmanac: pageAlmanac, pageIching: pageIching, pageDreams: pageDreams, pageLearn: pageLearn, pageArticle: pageArticle, pageAbout: pageAbout, pagePrivacy: pagePrivacy, pageAnimal: pageAnimal, pageHexagram: pageHexagram, pageSign: pageSign, page404: page404 };
