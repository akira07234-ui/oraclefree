/* tpl.js — multi-language page shell (en/zh/es/ar/ja), header/footer, SEO */
var SITE_URL = process.env.SITE_URL || "https://www.bazioracle.com";

var LANGS = [
  { code: "en", prefix: "", htmlLang: "en", dir: "ltr", label: "English", font: "" },
  { code: "zh", prefix: "/zh", htmlLang: "zh-CN", dir: "ltr", label: "中文", font: "" },
  { code: "es", prefix: "/es", htmlLang: "es", dir: "ltr", label: "Español", font: "" },
  { code: "ar", prefix: "/ar", htmlLang: "ar", dir: "rtl", label: "العربية", font: "Noto+Naskh+Arabic:wght@400;600;700" },
  { code: "ja", prefix: "/ja", htmlLang: "ja", dir: "ltr", label: "日本語", font: "Noto+Serif+JP:wght@400;600;700" }
];
var VER = "?v=16";

var JB_STAGE = '<div id="jb-stage" class="jb-stage">' +
  '<div class="jb-piece" id="jb-b1"><div class="jb-sh"></div><div class="jb-body"><div class="jb-f jb-f-flat"></div><div class="jb-f jb-f-dome"></div></div></div>' +
  '<div class="jb-piece" id="jb-b2"><div class="jb-sh"></div><div class="jb-body"><div class="jb-f jb-f-flat"></div><div class="jb-f jb-f-dome"></div></div></div>' +
  '<button id="jb-mute" class="jb-mute" type="button" aria-label="sound">🔊</button>' +
  "</div>";

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function langByCode(code) { for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i]; return LANGS[0]; }

function langPaths(enPath) {
  return LANGS.map(function (L) { return { code: L.code, path: L.prefix + (enPath === "/" ? "/" : enPath) }; });
}

function head(o) {
  var L = langByCode(o.code);
  var url = SITE_URL + L.prefix + (o.enPath === "/" ? "/" : o.enPath);
  var fonts = "family=Cormorant+Garamond:wght@500;600;700&family=Noto+Serif+SC:wght@400;600;700";
  if (L.font) fonts += "&" + L.font;
  var alts = langPaths(o.enPath).map(function (x) {
    return '<link rel="alternate" hreflang="' + x.code + '" href="' + SITE_URL + x.path + '">\n';
  }).join("");
  var ld = o.jsonLd || null;
  return '<!DOCTYPE html>\n<html lang="' + L.htmlLang + '" dir="' + L.dir + '">\n<head>\n' +
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
    "<title>" + esc(o.title) + "</title>\n" +
    '<meta name="description" content="' + esc(o.desc) + '">\n' +
    '<link rel="canonical" href="' + url + '">\n' + alts +
    '<link rel="alternate" hreflang="x-default" href="' + SITE_URL + (o.enPath === "/" ? "/" : o.enPath) + '">\n' +
    '<meta property="og:title" content="' + esc(o.title) + '">\n<meta property="og:description" content="' + esc(o.desc) + '">\n' +
    '<meta property="og:url" content="' + url + '">\n<meta property="og:type" content="website">\n' +
    '<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
    '<link href="https://fonts.googleapis.com/css2?' + fonts + '&display=swap" rel="stylesheet">\n' +
    '<link rel="stylesheet" href="/assets/css/style.css' + VER + '">\n' +
    (ld ? '<script type="application/ld+json">' + JSON.stringify(ld) + "</script>\n" : "") +
    "</head>\n" +
    '<body data-prefix="' + (o.prefix || "") + '"' + (L.dir === "rtl" ? ' class="rtl"' : "") + ">\n";
}

function header(pack, enPath) {
  var here = pack.prefix + (enPath === "/" ? "/" : enPath);
  var nav = pack.nav.map(function (item) {
    return '<a href="' + item[0] + '"' + (item[0] === here ? ' class="on"' : "") + ">" + item[1] + "</a>";
  }).join("");
  var sw = langPaths(enPath).map(function (x) {
    var L = langByCode(x.code);
    var on = L.code === pack.code;
    return '<a href="' + x.path + '"' + (on ? ' class="lang-on"' : "") + ">" + L.label + "</a>";
  }).join('<span class="lang-sep">·</span>');
  return '<header class="site-head"><div class="container">' +
    '<a class="logo" href="' + pack.prefix + '/"><span class="seal">命</span><span class="en">BaziOracle</span><span style="opacity:.6;font-size:.85rem">' + esc(pack.brand) + "</span></a>" +
    '<button class="nav-toggle">☰</button>' +
    '<nav class="lang-switch">' + sw + "</nav>" +
    '<nav class="main-nav">' + nav + "</nav>" +
    "</div></header>\n";
}

function footer(pack) {
  var t = pack.foot;
  return '<footer class="site-foot"><div class="container"><div class="cols">' +
    "<div><h4>BaziOracle " + esc(pack.brand) + "</h4>" +
    "<p style='font-size:.9rem'>" + t.blurb + "</p></div>" +
    "<div><h4>" + t.toolsTitle + "</h4>" + t.tools.map(function (x) { return '<a href="' + x[0] + '">' + x[1] + "</a>"; }).join("") + "</div>" +
    "<div><h4>" + t.learnTitle + "</h4>" +
    '<a href="' + pack.prefix + '/learn/">' + t.learnLabel + "</a>" +
    '<a href="' + pack.prefix + '/about/">' + t.aboutLabel + "</a>" +
    '<a href="' + pack.prefix + '/privacy/">' + t.privacyLabel + "</a>" +
    "</div></div>" +
    '<div class="legal">© <span id="foot-year"></span> BaziOracle · ' + t.legal + "</div></div></footer>\n";
}

function breadcrumb(items) {
  return '<div class="container"><nav class="crumb">' + items.map(function (it, i) {
    return i === items.length - 1 ? "<span>" + it[1] + "</span>" : '<a href="' + it[0] + '">' + it[1] + "</a> › ";
  }).join("") + "</nav></div>";
}

function crumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(function (it, i) {
      return { "@type": "ListItem", "position": i + 1, "name": it[1], "item": SITE_URL + it[0] };
    })
  };
}

function S(list) {
  return list.map(function (s) { return '<script src="' + s + VER + '"></script>'; }).join("\n");
}

function page(pack, o) {
  var body = header(pack, o.enPath);
  if (o.crumbs) body += breadcrumb(o.crumbs);
  body += o.body;
  body += footer(pack);
  body += (o.scripts || "") + '\n<script src="/assets/js/main.js' + VER + '"></script>\n</body>\n</html>';
  return head({ code: pack.code, enPath: o.enPath, title: o.title, desc: o.desc, jsonLd: o.jsonLd, prefix: pack.prefix }) + body;
}

module.exports = { SITE_URL: SITE_URL, LANGS: LANGS, esc: esc, page: page, crumbLd: crumbLd, S: S, langPaths: langPaths, langByCode: langByCode, VER: VER, jbStage: JB_STAGE };
