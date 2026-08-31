/* pages-generated.js — zodiac animal pages, hexagram pages, guanyin sign pages */
var tpl = require("./tpl");
var esc = tpl.esc;
var XIANG = require("./data/xiang");
var YAO = require("./data/yao");
var TUAN = require("./data/tuan");

var BRANCH_INFO = {
  rat: { branch: "子", hour: "23:00–00:59", season: "midwinter, the hour of hidden potential" },
  ox: { branch: "丑", hour: "01:00–02:59", season: "late winter, the quiet before the thaw" },
  tiger: { branch: "寅", hour: "03:00–05:00", season: "the first stirring of spring" },
  rabbit: { branch: "卯", hour: "05:00–07:00", season: "sunrise, gentleness at dawn" },
  dragon: { branch: "辰", hour: "07:00–09:00", season: "late spring showers" },
  snake: { branch: "巳", hour: "09:00–11:00", season: "early summer warmth" },
  horse: { branch: "午", hour: "11:00–12:59", season: "high noon, peak yang" },
  goat: { branch: "未", hour: "13:00–14:59", season: "early summer afternoon shade" },
  monkey: { branch: "申", hour: "15:00–16:59", season: "late summer playfulness" },
  rooster: { branch: "酉", hour: "17:00–18:59", season: "autumn dusk, harvest time" },
  dog: { branch: "戌", hour: "19:00–20:59", season: "autumn night watch" },
  pig: { branch: "亥", hour: "21:00–22:59", season: "early winter rest" }
};
var EM = { rat:"🐀", ox:"🐂", tiger:"🐅", rabbit:"🐇", dragon:"🐉", snake:"🐍", horse:"🐎", goat:"🐐", monkey:"🐒", rooster:"🐓", dog:"🐕", pig:"🐖" };

function zodiacAnimal(Z, z) {
  var p = (Z ? "/zh/zodiac/" : "/zodiac/") + z.key + "/";
  var info = BRANCH_INFO[z.key];
  var years = z.years.slice().reverse().join(", ");
  function names(keys) {
    return keys.map(function (k) {
      var t = zodiacLookup(k);
      return '<a class="tag" href="' + (Z ? "/zh/zodiac/" : "/zodiac/") + k + '/">' + (Z ? t.zh : t.en) + "</a>";
    }).join(" ");
  }
  var body = '' +
  '<section class="hero container"><div class="kicker">' + EM[z.key] + " " + z.branch + " · " + (Z ? "第" + (zodiacIndex(z.key) + 1) + "位" : "sign " + (zodiacIndex(z.key) + 1) + " of 12") + "</div>" +
  "<h1>" + (Z ? "属" + z.zh + "的人：性格、配对与运程" : "The " + z.en + " (" + z.zh + " " + z.py + ") — Personality, Matches & Years") + "</h1>" +
  '<p class="sub">' + z.traits + "</p></section>" +
  '<section class="container" style="max-width:860px">' +
  '<div class="panel"><h2>' + (Z ? "出生年份" : "Birth Years") + "</h2><p>" + years + " …</p>" +
  "<p><small>" + (Z
    ? "对应地支 " + z.branch + "，时辰 " + info.hour + "。注意：农历新年或立春前后出生者需以八字排盘精确判定属相。"
    : "Branch " + z.branch + ", governing the hours " + info.hour + " and the season of " + info.season + ". If you were born in January or February, confirm your sign with a full <a href='/'>BaZi calculation</a> — the lunar new year moves.") + "</small></p></div>" +
  (Z ? '<div class="panel"><h2>性格与事业</h2><p>' + z.traitsZh + "</p><p><b>适合方向：</b>" + z.careerZh + "</p></div>"
     : '<div class="panel"><h2>Career & Working Style</h2><p>' + z.career + "</p></div>") +
  '<div class="panel"><h2>' + (Z ? "最佳与最需磨合的配对" : "Best & Hardest Matches") + "</h2>" +
  "<p>" + (Z ? "六合三合（最合拍）：" : "Six & Three Harmony (best matches): ") + names(z.best) + "</p>" +
  "<p>" + (Z ? "相冲相害（需要经营）：" : "Clash & harm (needs work): ") + names(z.worst) + "</p>" +
  '<p><a class="btn small" href="' + (Z ? "/zh/zodiac/" : "/zodiac/") + '">' + (Z ? "查询与TA的配对" : "Check a pairing") + "</a></p></div>" +
  '<div class="panel"><h2>' + (Z ? "幸运档案" : "Lucky Profile") + "</h2>" +
  "<p>" + (Z ? "幸运数字：" + z.lucky.join("、") + "　幸运颜色：" + z.colors + "　幸运花：" + z.flower : "Lucky numbers: " + z.lucky.join(", ") + " · Lucky colors: " + z.colors + " · Lucky flowers: " + z.flower) + "</p></div>" + AD_SLOT +
  '<div class="panel"><h2>' + (Z ? "不止看生肖" : "Beyond the Zodiac") + "</h2><p>" +
  (Z ? "生肖只是年柱地支的一角。完整的你，要看<a href='/zh/'>四柱八字</a>与<a href='/zh/ziwei/'>紫微命盘</a>。" : "Your animal is only the year branch — one slice of the chart. See your full four pillars with the <a href='/'>BaZi calculator</a> or your star palaces with <a href='/ziwei/'>Zi Wei Dou Shu</a>.") + "</p></div></section>";
  return {
    title: Z ? "属" + z.zh + "的性格与配对_" + z.years.slice(-1)[0] + "年属" + z.zh + "的是什么命 | 八字神谕" : z.en + " Chinese Zodiac — Personality, Best Matches, Birth Years | BaziOracle",
    desc: (Z ? "属" + z.zh + "的人性格" + z.traitsZh.slice(0, 20) + "……与" : "The " + z.en + " sign: " + z.traits.split(".")[0] + ". Best matches, clash pairs, birth years and lucky colors — ") + (Z ? z.en + " 生肖详解。" : "the full guide to sign " + z.zh + " (" + z.py + ")."),
    body: body,
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [Z ? "/zh/zodiac/" : "/zodiac/", Z ? "生肖" : "Zodiac"], [p, Z ? "属" + z.zh : z.en]]
  };
}

function zodiacLookup(key) { return require("./data/zodiac").find(function (z) { return z.key === key; }); }
function zodiacIndex(key) { return require("./data/zodiac").findIndex(function (z) { return z.key === key; }); }
var AD_SLOT = '<div class="ad-slot"><ins class="adsbygoogle" style="display:block" data-ad-client="" data-ad-slot="" data-ad-format="auto" data-full-width-responsive="true"></ins></div>';

function hexagramPage(Z, hx, all) {
  var p = (Z ? "/zh/iching/hexagram-" : "/iching/hexagram-") + hx.n + "/";
  var TR = { qian: "☰ 乾 Heaven", dui: "☱ 兑 Lake", li: "☲ 离 Fire", zhen: "☳ 震 Thunder", xun: "☴ 巽 Wind", kan: "☵ 坎 Water", gen: "☶ 艮 Mountain", kun: "☷ 坤 Earth" };
  var above = all.filter(function (x) { return x.n === hx.n; })[0];
  var lines = hx.lines.split("").map(function (c, i) {
    return '<span class="hexline' + (c === "0" ? " yin" : "") + '" title="line ' + (6 - i) + '"></span>';
  }).join("");
  var nav = [];
  if (hx.n > 1) nav.push('<a class="tag" href="' + (Z ? "/zh/iching/hexagram-" : "/iching/hexagram-") + (hx.n - 1) + '/">← ' + (hx.n - 1) + "</a>");
  nav.push('<a class="tag" href="' + (Z ? "/zh/iching/" : "/iching/") + '">' + (Z ? "六十四卦目录" : "All 64") + "</a>");
  if (hx.n < 64) nav.push('<a class="tag" href="' + (Z ? "/zh/iching/hexagram-" : "/iching/hexagram-") + (hx.n + 1) + '/">' + (hx.n + 1) + " →</a>");
  var body = '' +
  '<article class="doc block container">' +
  "<h1>" + (Z ? "第" + hx.n + "卦 " + hx.name + "：" + hx.zhu + (hx.up === hx.low ? "（八纯卦）" : "") : "Hexagram " + hx.n + " — " + hx.name + " (" + hx.py + "), " + hx.en) + "</h1>" +
  '<p class="center" style="margin:16px 0"><span class="hexgram" style="transform:scale(1.2)">' + lines + "</span></p>" +
  "<p class='center'><span class='tag'>" + (Z ? "上卦：" + TR[hx.up] : "Above: " + TR[hx.up]) + "</span> <span class='tag'>" + (Z ? "下卦：" + TR[hx.low] : "Below: " + TR[hx.low]) + "</span></p>" +
  "<h2>" + (Z ? "卦辞" : "The Judgment") + "</h2>" +
  '<blockquote class="panel" style="font-size:1.15rem;text-align:center">' + hx.judg + "</blockquote>" +
  "<p>" + (Z ? hx.theme : hx.judgEn) + "</p>" +
  "<h2>" + (Z ? "《象》曰" : "The Image (Daxiang)") + "</h2>" +
  '<blockquote class="classic" style="margin:8px 0"><span class="zh-quote">「' + (XIANG[hx.n] ? XIANG[hx.n].z : "") + '」</span>' +
  (Z ? "" : '<span style="display:block;font-size:.95rem;color:var(--ink2);margin-top:8px">' + (XIANG[hx.n] ? XIANG[hx.n].e : "") + "</span>") +
  '<cite class="cite">—— 《周易·大象传》（The Image Commentary）</cite></blockquote>' +
  "<h2>" + (Z ? "《彖》曰" : "The Tuan Commentary") + "</h2>" +
  '<blockquote class="classic" style="margin:8px 0"><span class="zh-quote">' + (TUAN[hx.n] || "") + '</span><cite class="cite">——《易传·彖传》</cite></blockquote>' +
  "<h2>" + (Z ? "六爻爻辞" : "The Six Line Texts") + "</h2>" +
  '<div class="scrollx"><table class="t">' + (YAO[hx.n] || []).map(function (y) {
    var parts = y.split("：");
    return "<tr><td style='white-space:nowrap'><b>" + parts[0] + "</b></td><td>" + parts.slice(1).join("：") + "</td></tr>";
  }).join("") + "</table></div>" +
  "<h2>" + (Z ? "白话解读" : "In Plain Terms") + "</h2>" +
  "<p>" + (Z ? hx.theme + "占得此卦，先读卦辞原文，再结合所问之事体会卦象的时机与姿态。" : hx.theme + " When you receive this hexagram, hold the judgment beside your question: it describes a posture and a season, not a script.") + "</p>" +
  AD_SLOT +
  "<p>" + nav.join(" ") + "</p>" +
  '<p class="disclaimer">I Ching judgments quoted from the Zhouyi (public domain); modern renderings by BaziOracle, for cultural and entertainment reference. ' + (Z ? "卦辞引自《周易》古经。" : "") + "</p>" +
  "</article>";
  return {
    title: Z ? "易经第" + hx.n + "卦_" + hx.name + "卦(" + hx.py + ")卦辞详解 | 八字神谕" : "I Ching Hexagram " + hx.n + " — " + hx.name + " (" + hx.py + "): " + hx.en + " | BaziOracle",
    desc: Z ? "周易第" + hx.n + "卦" + hx.name + "卦卦辞原文与白话解读：" + hx.theme : "Hexagram " + hx.n + " " + hx.name + " (" + hx.en + "): the Zhouyi judgment and a modern reading — " + hx.theme,
    body: body,
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [Z ? "/zh/iching/" : "/iching/", Z ? "易经六十四卦" : "I Ching"], [p, hx.n + " " + hx.name]]
  };
}

function signPage(Z, s, en) {
  var p = (Z ? "/zh/kau-cim/sign-" : "/kau-cim/sign-") + s.id + "/";
  var lv = s.type.slice(0, 2);
  var cls = lv === "上签" ? "green" : lv === "下签" ? "red" : "";
  var poem = s.poetry.split("。").filter(Boolean).map(function (l) { return '<span class="l">' + l + "。</span>"; }).join("");
  var prev = s.id > 1 ? '<a class="tag" href="' + (Z ? "/zh/kau-cim/sign-" : "/kau-cim/sign-") + (s.id - 1) + '/">← ' + (s.id - 1) + "</a>" : "";
  var next = s.id < 100 ? '<a class="tag" href="' + (Z ? "/zh/kau-cim/sign-" : "/kau-cim/sign-") + (s.id + 1) + '/">' + (s.id + 1) + " →</a>" : "";
  var body = '' +
  '<article class="doc block container">' +
  "<h1>" + (Z ? "观音灵签第" + s.id + "签：" + s.title : "Guanyin Sign No. " + s.id + " — " + s.title + (en ? " (" + en.enTitle + ")" : "")) + "</h1>" +
  "<p><span class='tag " + cls + "'>" + s.type + "</span></p>" +
  '<h2>' + (Z ? "签诗" : "The Poem") + "</h2>" +
  '<p class="kc-poem">' + poem + "</p>" +
  "<h2>" + (Z ? "解曰" : "The Meaning") + "</h2>" +
  "<p>" + s.meaning + "</p>" +
  "<p><b>" + (Z ? "古人典故" : "The allusion") + "：</b>" + s.title + (Z ? "。签诗以这一典故起兴，读签时可体会故事中人物的处境与本签的呼应。" : " — the poem borrows this episode; read your question against how the story's figure fared.") + "</p>" +
  (en ? "<h2>In English</h2><p><b>Theme:</b> " + en.theme + "</p><p><b>Advice:</b> " + en.advice + "</p>" : "") +
  AD_SLOT +
  "<p>" + prev + ' <a class="tag" href="' + (Z ? "/zh/kau-cim/" : "/kau-cim/") + '">' + (Z ? "再求一签" : "Draw again") + "</a> " + next + "</p>" +
  '<p class="disclaimer">' + (Z ? "签诗与解曰为传统文本，释义供文化娱乐参考。" : "Poems and interpretations follow the traditional text; readings are for cultural and entertainment reference.") + "</p>" +
  "</article>";
  return {
    title: Z ? "观音灵签第" + s.id + "签_" + s.title + "_" + lv + "签诗详解 | 八字神谕" : "Guanyin Sign " + s.id + " — " + s.title + (en ? " (" + en.enTitle + ")" : "") + " | BaziOracle",
    desc: Z ? "观音灵签第" + s.id + "签（" + s.type + "）：" + s.title + "。签诗、吉凶与解曰详解。" : "Guanyin fortune stick No. " + s.id + " (" + s.type + "): " + s.title + " — poem, grade and full interpretation.",
    body: body,
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [Z ? "/zh/kau-cim/" : "/kau-cim/", Z ? "观音灵签" : "Fortune Sticks"], [p, (Z ? "第" : "No.") + s.id + "签"]]
  };
}

module.exports = { zodiacAnimal: zodiacAnimal, hexagramPage: hexagramPage, signPage: signPage };
