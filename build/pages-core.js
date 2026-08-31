/* pages-core.js — home + tool pages, EN & ZH */
var tpl = require("./tpl");
var esc = tpl.esc;

function S(list) { return list.map(function (s) { return '<script src="' + s + (s.indexOf("/assets/") === 0 ? tpl.VER : "") + '"></script>'; }).join("\n"); }
function opts(from, to) { var out = []; for (var i = from; i <= to; i++) out.push("<option>" + i + "</option>"); return out.join(""); }
var YEAR_OPTS = opts(1940, 2030), MON_OPTS = opts(1, 12), DAY_OPTS = opts(1, 31), MIN_OPTS = opts(0, 59);
/* Build-time fallback for the Zi Wei fortune-year field; ziwei.js corrects it to the visitor's year. */
var NOW_Y = new Date().getFullYear();
var LUNAR_MON_OPTS = (function () { var s = ""; for (var i = 1; i <= 12; i++) { s += "<option value='" + i + "'>" + i + "月</option>"; s += "<option value='" + i + "'>闰" + i + "月</option>"; } return s; })();

/* ---------------- shared form markup ---------------- */
function baziForm(Z) {
  return '' +
  '<form id="bazi-form" class="card" style="text-align:left">' +
  '<div class="form-row">' +
  '<div class="field"><label>' + (Z ? "历法" : "Calendar") + '</label><select name="calendar"><option value="solar">' + (Z ? "公历（阳历）" : "Gregorian (solar)") + '</option><option value="lunar">' + (Z ? "农历（阴历）" : "Chinese lunar") + "</option></select></div>" +
  '<div class="field"><label>' + (Z ? "出生年份" : "Birth year") + '</label><select name="year">' + YEAR_OPTS + "</select></div>" +
  '<div class="field"><label>' + (Z ? "出生月份" : "Month") + '</label><select name="month">' + MON_OPTS + "</select></div>" +
  "</div>" +
  '<div class="form-row">' +
  '<div class="field"><label>' + (Z ? "出生日期" : "Day") + '</label><select name="day">' + DAY_OPTS + "</select></div>" +
  '<div class="field"><label>' + (Z ? "出生时间" : "Birth hour") + '</label><select name="hour"></select></div>' +
  '<div class="field"><label>' + (Z ? "分钟" : "Minute") + '</label><select name="minute">' + MIN_OPTS + '</select></div>' +
  "</div>" +
  '<div class="form-row">' +
  '<div class="field"><label>' + (Z ? "性别" : "Gender") + '</label><select name="gender"><option value="m">' + (Z ? "男" : "Male") + '</option><option value="f">' + (Z ? "女" : "Female") + "</option></select></div>" +
  '<div class="field"><label>' + (Z ? "出生时区" : "Birth timezone") + '</label><select name="tz">' + (function(){var s="";for(var i=-11;i<=12;i++){s+="<option value='"+i+"'"+(i===8?" selected":"")+">UTC" + (i>=0?"+":"") + i + "</option>";}return s;})() + "</select></div>" +
  '<div class="field"></div>' +
  "</div>" +
  '<details><summary style="cursor:pointer;color:var(--muted);font-size:.9rem;margin:6px 0 12px">' + (Z ? "高级：真太阳时校正（推荐）" : "Advanced: true solar time correction (recommended)") + "</summary>" +
  '<div class="form-row">' +
  '<div class="field"><label>' + (Z ? "出生地经度（如北京 116.4）" : "Birthplace longitude (e.g. Beijing 116.4)") + '</label><input name="longitude" type="number" step="0.1" min="-180" max="180" placeholder="116.4"></div>' +
  '<div class="field" style="justify-content:end"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" name="trueSolar" checked> ' + (Z ? "启用真太阳时校正" : "Enable true solar time") + "</label></div>" +
  '<div class="field"></div>' +
  "</div></details>" +
  '<button class="btn" type="submit">' + (Z ? "立即排盘" : "Calculate My Chart") + "</button>" +
  '<p style="margin:10px 0 0"><small>' + (Z ? "所有计算在您的浏览器本地完成，生日不会上传服务器。" : "All calculation happens locally in your browser — your birth data never leaves this page.") + "</small></p>" +
  "</form>";
}

var AD = '<div class="ad-slot"><ins class="adsbygoogle" style="display:block" data-ad-client="" data-ad-slot="" data-ad-format="auto" data-full-width-responsive="true"></ins></div>';

function hyForm(id, title) {
  return '<form id="' + id + '" class="card" onsubmit="return false"><h3 style="text-align:center">' + title + "</h3>" +
    '<div class="form-row">' +
    '<div class="field"><label>出生年份</label><select name="year">' + YEAR_OPTS + "</select></div>" +
    '<div class="field"><label>月份</label><select name="month">' + MON_OPTS + "</select></div>" +
    '<div class="field"><label>日期</label><select name="day">' + DAY_OPTS + "</select></div></div>" +
    '<div class="form-row">' +
    '<div class="field"><label>出生时间</label><select name="hour"></select></div>' +
    '<div class="field"><label>分钟</label><select name="minute">' + MIN_OPTS + "</select></div>" +
    '<div class="field"></div></div></form>';
}
function hyFormEn(id, title) {
  return '<form id="' + id + '" class="card" onsubmit="return false"><h3 style="text-align:center">' + title + "</h3>" +
    '<div class="form-row">' +
    '<div class="field"><label>Birth year</label><select name="year">' + YEAR_OPTS + "</select></div>" +
    '<div class="field"><label>Month</label><select name="month">' + MON_OPTS + "</select></div>" +
    '<div class="field"><label>Day</label><select name="day">' + DAY_OPTS + "</select></div></div>" +
    '<div class="form-row">' +
    '<div class="field"><label>Birth hour</label><select name="hour"></select></div>' +
    '<div class="field"><label>Minute</label><select name="minute">' + MIN_OPTS + "</select></div>" +
    '<div class="field"></div></div></form>';
}

/* ================= HOME ================= */
function homeEn() {
  var tools = [
    ["八卦", "BaZi Calculator", "Four pillars, deep reading and remedies.", "/bazi/"],
    ["🀄", "Zi Wei Dou Shu", "Purple Star chart across the twelve palaces — career, love, wealth and health stars.", "/ziwei/"],
    ["🌙", "Moon Blocks (Jiaobei)", "Ask a yes/no question and cast the sacred blocks, exactly as done in Minnan temples.", "/jiaobei/"],
    ["🥢", "Guanyin Fortune Sticks", "Shake the cup, draw one of 100 classical signs with full interpretation.", "/kau-cim/"],
    ["☯️", "I Ching Coin Casting", "Toss three coins six times to receive one of the 64 hexagrams.", "/iching/"],
    ["🐀", "Zodiac Compatibility", "Check any two signs for Six-Harmony, Three-Harmony or clash pairs.", "/zodiac/"],
    ["📜", "Daily Almanac", "Today's auspicious hours, do's and don'ts from the traditional Tong Shu.", "/almanac/"],
    ["💭", "Dream Dictionary", "What does the Zhou Gong tradition say about last night's dream?", "/dreams/"]
  ].map(function (t) {
    return '<a class="card tool-card" href="' + t[3] + '"><span class="ic">' + t[0] + "</span><h3>" + t[1] + "</h3><p style='font-size:.92rem;color:var(--ink2)'>" + t[2] + "</p></a>";
  }).join("");

  var ld = {
    "@context": "https://schema.org", "@type": "WebSite",
    "name": "BaziOracle", "url": tpl.SITE_URL,
    "description": "Free BaZi marriage compatibility: enter both birth dates for a four-dimension classical scoring with remedies.",
    "inLanguage": ["en", "zh"]
  };

  var body = '' +
  '<section class="hero container"><div class="kicker">Marriage Match · His &amp; Hers · Classical</div>' +
  "<h1>BaZi Marriage Compatibility — Do You Two Match?</h1>" +
  '<p class="sub">Zodiac harmony, five-element balance, spouse palace and luck-cycle sync — four dimensions scored by the classical method, with remedies from the old books.</p>' +
  '<div class="divider">☰ ☯ ☷</div></section>' +
  '<section class="container" style="max-width:1000px">' +
  '<div class="grid g2">' + hyFormEn("hy-m", "Him (left)") + hyFormEn("hy-f", "Her (right)") + "</div>" +
  '<p class="center" style="margin-top:16px"><button id="hy-btn" class="btn">Score Our Match</button></p>' +
  '<div id="hy-out" class="result"></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">The four dimensions</div><h2>How We Score</h2></div>' +
  "<p><b>1 · Zodiac pairing:</b> the twelve animals form Six-Harmony pairs (Rat-Ox, Rabbit-Dog…) and Three-Harmony trios — and their shadows: Six-Clash, Six-Harm and Three-Punishment, the folk rhymes of 'rooster and dog never rest'.</p>" +
  "<p><b>2 · Five-element balance:</b> count each side's Wood, Fire, Earth, Metal and Water — one lacking what the other has in plenty is the classic complementary match.</p>" +
  "<p><b>3 · Day pillar & spouse palace:</b> the day branch is the spouse palace; its harmony or clash between two charts — and whose day stem is whose officer or wealth star — reads the balance of the bond.</p>" +
  "<p><b>4 · Luck cycles:</b> 'birds of a couple should fly the same weather' — decades of luck pillars running in sync is the classical sign of growing old together.</p>" +
  '<p><small>For a solo reading use the <a href="/bazi/">BaZi calculator</a> (deep reading & remedies). For a quick yes/no, <a href="/jiaobei/">cast the moon blocks</a>.</small></p></section>' +
  '<section class="block container"><div class="sec-head"><div class="kicker">One site, every tool</div><h2>Explore the Full Chinese Oracle</h2></div>' +
  '<div class="grid g4">' + tools + "</div></section>";

  return { title: "BaZi Marriage Compatibility — Zodiac, Elements, Palace & Luck Sync | BaziOracle",
    desc: "Free BaZi marriage compatibility: enter both birth dates for zodiac harmony, five-element balance, spouse palace and luck-cycle sync — scored by the classical method with remedies.",
    body: body, scripts: S(["/assets/vendor/lunar.min.js", "/assets/js/bazi-engine.js", "/assets/js/hunyin.js"]), jsonLd: [ld] };
}

function homeZh() {
  var tools = [
    ["八卦", "八字排盘", "四柱命理、详细解盘与化解建议。", "/zh/bazi/"],
    ["🀄", "紫微斗数排盘", "十二宫星盘一键排定，看事业、财帛、夫妻、健康诸宫主星。", "/zh/ziwei/"],
    ["🌙", "在线掷筊", "默念所问，掷出圣筊、笑筊或阴筊——闽南庙宇同款仪式。", "/zh/jiaobei/"],
    ["🥢", "观音灵签", "摇签筒抽一支灵签，一百签诗全签详解。", "/zh/kau-cim/"],
    ["☯️", "易经六十四卦", "三枚铜钱摇六次，起出你的本卦与变卦。", "/zh/iching/"],
    ["🐀", "生肖配对", "查任意两个生肖的六合、三合与相冲关系。", "/zh/zodiac/"],
    ["📜", "每日黄历", "今日宜忌、冲煞、吉神凶煞，老黄历一手掌握。", "/zh/almanac/"],
    ["💭", "周公解梦", "昨晚的梦，周公怎么说？", "/zh/dreams/"]
  ].map(function (t) {
    return '<a class="card tool-card" href="' + t[3] + '"><span class="ic">' + t[0] + "</span><h3>" + t[1] + "</h3><p style='font-size:.92rem;color:var(--ink2)'>" + t[2] + "</p></a>";
  }).join("");

  var faq = [
    ["什么是八字（四柱命理）？", "八字以天干地支记录出生的年、月、日、时，共四柱八个字。传统子平法通过分析日主与五行的强弱旺衰，推断性情特质、运势节奏与喜用方向。"],
    ["生日信息安全吗？", "安全。历法换算与排盘全部在您的浏览器本地用 JavaScript 完成，生日不会上传到任何服务器。"],
    ["不知道出生时辰怎么办？", "仍可排盘——时柱会按子时估算，结果仅供参考。建议询问家人或查看出生证明；时柱约占全盘四分之一的信息量。"],
    ["为什么需要真太阳时校正？", "古时以日晷计时。若出生地离时区中央经线较远，当地真太阳时可能比钟表时间快慢 30-60 分钟，足以改变时柱。本站已内置经度与均时差校正。"],
    ["算命准吗？", "把它当作一面文化镜子，用来照见与思考，而非一锤定音的判决。传统命理自己也说：性格即命运，选择在人为。"]
  ].map(function (f) {
    return '<details class="faq"><summary>' + f[0] + "</summary><p>" + f[1] + "</p></details>";
  }).join("");

  var ld = {
    "@context": "https://schema.org", "@type": "WebSite",
    "name": "BaziOracle 八字神谕", "url": tpl.SITE_URL + "/zh/",
    "description": "免费在线八字排盘、紫微斗数、掷筊、观音灵签、易经六十四卦、生肖配对、每日黄历与周公解梦。",
    "inLanguage": ["zh-CN", "en"]
  };
  var faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
    ["什么是八字（四柱命理）？", "八字以天干地支记录出生的年、月、日、时，共四柱八个字，传统子平法通过五行旺衰推断性情与运势。"],
    ["生日信息安全吗？", "安全。排盘计算全部在浏览器本地完成，生日不会上传服务器。"],
    ["不知道出生时辰怎么办？", "时柱按子时估算，结果仅供参考；建议向家人核实确切时辰。"],
    ["为什么需要真太阳时校正？", "出生地离时区中央经线越远，真太阳时与钟表时差距越大，可能改变时柱；本站自动完成经度与均时差校正。"],
    ["算命准吗？", "仅供文化参考与自我思考，性格与选择才是命运的主笔。"]
  ].map(function (f) { return { "@type": "Question", "name": f[0], "acceptedAnswer": { "@type": "Answer", "text": f[1] } }; }) };

  var body = '' +
  '<section class="hero container"><div class="kicker">姻缘合婚 · 男左女右 · 古籍为据</div>' +
  "<h1>八字合婚 — 输入两人生日，看你们配不配</h1>" +
  '<p class="sub">属相六合三合、五行互补、日柱夫妻宫、大运同步——四维合参，依《子平真诠》《穷通宝鉴》之法，即刻打分并给出化解之道。</p>' +
  '<div class="divider">☰ ☯ ☷</div></section>' +
  '<section class="container" style="max-width:1000px">' +
  '<div class="grid g2">' + hyForm("hy-m", "男方（左）") + hyForm("hy-f", "女方（右）") + "</div>" +
  '<p class="center" style="margin-top:16px"><button id="hy-btn" class="btn">开始合婚打分</button></p>' +
  '<div id="hy-out" class="result"></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">合婚四维</div><h2>我们怎么算</h2></div>' +
  "<p><b>① 属相配对：</b>十二生肖之间有「六合」（如鼠配牛、兔配狗）、「三合」之说，属相相合被认为是好姻缘；相对的有「六冲」「六害」「三刑」，比如民间常说的鸡犬不宁、龙虎相斗。</p>" +
  "<p><b>② 五行互补：</b>把两人八字里的金木水火土数一数——一方明显缺某一行、另一方恰好旺盛，就算「互补」，被认为是好搭配；五行相克严重则视为不合。</p>" +
  "<p><b>③ 日柱与夫妻宫：</b>八字中的日支被视为夫妻宫。两人日支之间是相合还是相冲，以及日主天干的关系（一方是否是另一方的「官星」「财星」），都会拿来分析谁旺谁、谁管谁。</p>" +
  "<p><b>④ 大运走势：</b>「夫妻同林鸟，大运要同到」——两人未来几十年的大运是否同步，运气曲线合拍的夫妻才能白头偕老。</p>" +
  '<p><small>想单独排盘？用 <a href="/zh/bazi/">八字排盘</a>（含详细解盘与化解建议）。问事用 <a href="/zh/jiaobei/">在线掷筊</a>。</small></p></section>' +
  '<section class="block container"><div class="sec-head"><div class="kicker">八字 · 紫微 · 灵签</div><h2>命理工具，一站全齐</h2></div>' +
  '<div class="grid g4">' + tools + "</div></section>";

  return { title: "八字合婚_生肖配对_四柱合参在线打分 | 八字神谕 BaziOracle",
    desc: "免费八字合婚：输入男女双方生日，属相六合三合、五行互补、日柱夫妻宫、大运同步四维打分，附古籍依据的化解建议。",
    body: body, scripts: S(["/assets/vendor/lunar.min.js", "/assets/js/bazi-engine.js", "/assets/js/hunyin.js"]), jsonLd: [ld] };
}

/* ================= BAZI SUBPAGE ================= */
function baziPage(Z) {
  var p = Z ? "/zh/bazi/" : "/bazi/";
  var tools = Z ? [
    ["🀄", "紫微斗数排盘", "十二宫星盘一键排定。", "/zh/ziwei/"],
    ["💞", "八字合婚", "输入两人生日，四维打分。", "/zh/"],
    ["🌙", "在线掷筊", "三筊定一问。", "/zh/jiaobei/"]
  ] : [
    ["🀄", "Zi Wei Dou Shu", "Twelve-palace star chart.", "/ziwei/"],
    ["💞", "Marriage Match", "Four-dimension scoring.", "/"],
    ["🌙", "Moon Blocks", "Ask and cast.", "/jiaobei/"]
  ].map(function (t) {
    return '<a class="card tool-card" href="' + t[3] + '"><span class="ic">' + t[0] + "</span><h3>" + t[1] + "</h3><p style='font-size:.92rem;color:var(--ink2)'>" + t[2] + "</p></a>";
  }).join("");
  var faq = [
    [Z ? "什么是八字（四柱命理）？" : "What is BaZi?", Z ? "八字以天干地支记录出生的年、月、日、时，共四柱八个字。传统子平法通过分析日主与五行的强弱旺衰，推断性情特质、运势节奏与喜用方向。" : "BaZi writes your birth moment as four pillars of eight characters; Zi Ping method reads the day master's strength against the five elements."],
    [Z ? "生日信息安全吗？" : "Is my birth data safe?", Z ? "安全。历法换算与排盘全部在您的浏览器本地完成，生日不会上传到任何服务器。" : "All calculation runs locally in your browser; birth data never leaves this page."],
    [Z ? "不知道出生时辰怎么办？" : "Unknown birth time?", Z ? "仍可排盘——时柱会按子时估算，结果仅供参考。" : "The hour pillar defaults to Zi hour; results are indicative only."],
    [Z ? "为什么需要真太阳时校正？" : "Why true solar time?", Z ? "古时以日晷计时。若出生地离时区中央经线较远，当地真太阳时可能比钟表时间快慢 30-60 分钟，足以改变时柱。" : "Local solar time can differ 30-60 minutes from clock time — enough to change the hour pillar."],
    [Z ? "算命准吗？" : "Is it accurate?", Z ? "把它当作一面文化镜子，用来照见与思考，而非一锤定音的判决。性格即命运，选择在人为。" : "Treat it as a cultural mirror for reflection, not a verdict."]
  ].map(function (f) {
    return '<details class="faq"><summary>' + f[0] + "</summary><p>" + f[1] + "</p></details>";
  }).join("");
  var body = '' +
  '<section class="hero container"><div class="kicker">' + (Z ? "免费 · 隐私 · 真太阳时校正" : "Free · Private · True Solar Time") + "</div>" +
  "<h1>" + (Z ? "免费八字排盘 — 四柱命理 · 详细解盘 · 化解建议" : "Free BaZi Calculator — Four Pillars, Deep Reading & Remedies") + "</h1>" +
  '<p class="sub">' + (Z ? "输入出生日期时辰，排出四柱八字、格局、调候、大运，并给出依古籍的详细解盘与开运化解之道。" : "Enter your birth data for four pillars, structure, climate adjustment and luck cycles — with classical deep reading and remedies.") + "</p>" +
  '<div class="divider">☰ ☯ ☷</div></section>' +
  '<section class="container" style="max-width:860px">' + baziForm(Z) +
  '<div class="result" id="bazi-out"></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">' + (Z ? "认识传统" : "The tradition") + "</div><h2>" + (Z ? "什么是八字？" : "What Is BaZi?") + "</h2></div>" +
  (Z ? "<p>八字（四柱）以年、月、日、时四组干支记录出生时刻，天干在上、地支在下，共八个字，构成你出生一瞬的五行能量地图。传统子平法比较五行的力量，找出日主强弱、喜用神与十年大运。延伸阅读：<a href='/zh/learn/what-is-bazi/'>八字入门</a>。</p>"
     : "<p>BaZi writes your birth moment as four pillars of eight characters — a map of the five elements at your first breath. Zi Ping methodology weighs these elements to find your day master's strength, favorable elements and decade luck pillars. Full guide: <a href='/learn/what-is-bazi/'>What is BaZi</a>.</p>") +
  "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">FAQ</div><h2>' + (Z ? "常见问题" : "Questions") + "</h2></div>" + faq + "</section>" +
  '<section class="block container"><div class="sec-head"><h2>' + (Z ? "继续探索" : "Keep Exploring") + "</h2></div>" +
  '<div class="grid g4">' + tools + "</div></section>";
  return {
    title: Z ? "免费八字排盘_四柱命理_详细解盘_化解建议 | 八字神谕" : "Free BaZi Calculator — Four Pillars, Deep Reading & Remedies | BaziOracle",
    desc: Z ? "免费在线八字排盘：真太阳时校正、格局、调候、大运、详细解盘与开运化解建议，古籍为据。" : "Free BaZi calculator with true solar time, structure, climate adjustment, luck pillars, deep classical reading and remedies.",
    body: body,
    scripts: S(["/assets/vendor/lunar.min.js", "/assets/js/bazi-engine.js", "/assets/js/bazi-ui.js"]) + '<script>BaziUI.initForm("bazi-form","bazi-out");</script>',
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "八字排盘" : "BaZi Calculator"]]
  };
}

/* ================= FIVE ELEMENTS ================= */
function fiveElements(Z) {
  var p = Z ? "/zh/five-elements/" : "/five-elements/";
  var body = '' +
  '<section class="hero container"><div class="kicker">' + (Z ? "五行 · 金木水火土" : "Wood · Fire · Earth · Metal · Water") + "</div>" +
  "<h1>" + (Z ? "五行查询与喜用神分析" : "Five Elements Calculator") + "</h1>" +
  '<p class="sub">' + (Z ? "从八字看五行力量的分布，找出你命中最旺的元素、缺失的元素与最需要的喜用神。" : "See how Wood, Fire, Earth, Metal and Water distribute across your chart — your strongest element, what is missing, and what your chart is asking for.") + "</p></section>" +
  '<section class="container" style="max-width:860px">' + baziForm(Z) +
  '<div class="result" id="bazi-out"></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px">' +
  '<div class="sec-head"><div class="kicker">The five phases</div><h2>' + (Z ? "五行性格速查" : "Five Element Personalities") + "</h2></div>" +
  '<table class="t"><tr><th>' + (Z ? "元素" : "Element") + "</th><th>" + (Z ? "意象" : "Image") + "</th><th>" + (Z ? "性格倾向" : "Temperament") + "</th></tr>" +
  "<tr><td>木 Wood</td><td>" + (Z ? "树木向上生长" : "A tree growing upward") + "</td><td>" + (Z ? "仁慈进取、有原则、爱成长" : "Benevolent, ambitious, principled, growth-loving") + "</td></tr>" +
  "<tr><td>火 Fire</td><td>" + (Z ? "火焰向上照明" : "Flame leaping upward") + "</td><td>" + (Z ? "热情外放、重礼、行动快" : "Passionate, expressive, courteous, quick to act") + "</td></tr>" +
  "<tr><td>土 Earth</td><td>" + (Z ? "大地承载万物" : "Earth bearing all things") + "</td><td>" + (Z ? "踏实守信、包容、稳如磐石" : "Reliable, trustworthy, inclusive, steady") + "</td></tr>" +
  "<tr><td>金 Metal</td><td>" + (Z ? "金石铿锵有声" : "Resounding metal") + "</td><td>" + (Z ? "果敢义气、重规则、效率高" : "Decisive, loyal, rule-valuing, efficient") + "</td></tr>" +
  "<tr><td>水 Water</td><td>" + (Z ? "流水绕行千里" : "Water flowing a thousand miles") + "</td><td>" + (Z ? "机敏变通、思虑深、以柔克刚" : "Clever, adaptable, deep-thinking, softly unstoppable") + "</td></tr></table>" +
  "<p class='mt2'>" + (Z ? "想看完整四柱与大运？回到 <a href='/zh/'>八字排盘</a>；或读一读 <a href='/zh/learn/five-elements-guide/'>五行性格与喜用神指南</a>。" : "Want the full four pillars and luck cycles? Return to the <a href='/'>BaZi calculator</a>, or read the <a href='/learn/five-elements-guide/'>Five Elements & favorable elements guide</a>.") + "</p></section>";
  return {
    title: Z ? "五行查询_五行缺失与喜用神在线分析 | 八字神谕" : "Five Elements Calculator — Find Your Element Balance & Favorable Elements | BaziOracle",
    desc: Z ? "输入生日即可分析八字五行的旺衰分布、缺失元素与喜用神，附五行性格速查表。" : "Enter your birth date to see the five-element balance of your chart, missing elements, favorable elements, and what each element says about temperament.",
    body: body, scripts: S(["/assets/vendor/lunar.min.js", "/assets/js/bazi-engine.js", "/assets/js/bazi-ui.js"]) + '<script>BaziUI.initForm("bazi-form","bazi-out",{focus:"elements"});</script>',
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "五行查询" : "Five Elements"]]
  };
}

/* ================= ZIWEI ================= */
function ziwei(Z) {
  var p = Z ? "/zh/ziwei/" : "/ziwei/";
  var pal = Z
    ? [["命宫","Self & temperament"],["兄弟","Siblings"],["夫妻","Spouse"],["子女","Children"],["财帛","Wealth"],["疾厄","Health"],["迁移","Travel"],["交友","Friends"],["官禄","Career"],["田宅","Property"],["福德","Fortune & mind"],["父母","Parents"]]
    : [["Self Palace","命宫 — self & temperament"],["Siblings","兄弟宫"],["Spouse","夫妻宫"],["Children","子女宫"],["Wealth","财帛宫"],["Health","疾厄宫"],["Travel","迁移宫"],["Friends","交友宫"],["Career","官禄宫"],["Property","田宅宫"],["Fortune","福德宫"],["Parents","父母宫"]];
  var palRows = pal.map(function (x) { return "<tr><td><b>" + x[0] + "</b></td><td>" + x[1] + "</td></tr>"; }).join("");
  var body = '' +
  '<section class="hero container"><div class="kicker">紫微斗数 · Purple Star Astrology</div>' +
  "<h1>" + (Z ? "免费紫微斗数排盘" : "Free Zi Wei Dou Shu Chart") + "</h1>" +
  '<p class="sub">' + (Z ? "输入出生资料，立即排出十二宫紫微命盘：主星、辅星、化曜、命主与身主一应俱全。" : "Enter your birth details to chart the twelve palaces — major stars, minor stars, transformations, soul and body stars.") + "</p></section>" +
  '<section class="container" style="max-width:760px"><form id="zw-form" class="card" style="text-align:left">' +
  '<div class="form-row">' +
  '<div class="field"><label>' + (Z ? "出生日期（公历）" : "Birth date (Gregorian)") + '</label><input type="date" name="date" required></div>' +
  '<div class="field"><label>' + (Z ? "出生时辰" : "Birth hour") + '</label><select name="timeIndex"></select></div>' +
  '<div class="field"><label>' + (Z ? "性别" : "Gender") + '</label><select name="gender"><option value="male">' + (Z ? "男" : "Male") + '</option><option value="female">' + (Z ? "女" : "Female") + "</option></select></div>" +
  '<div class="field"><label>' + (Z ? "流年查询年份" : "Fortune year") + '</label><input type="number" name="year" min="1900" max="2100" step="1" value="' + NOW_Y + '" inputmode="numeric" aria-describedby="zw-year-hint"><small id="zw-year-hint" style="opacity:.7">' + (Z ? "用于推算流年宫位与当前大限" : "Drives the yearly palace and the decade you are in") + "</small></div>" +
  "</div>" +
  '<button class="btn" type="submit">' + (Z ? "排出命盘" : "Cast My Chart") + "</button></form>" +
  '<div class="result" id="zw-out"></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">Twelve palaces</div><h2>' + (Z ? "十二宫各管什么？" : "What the Twelve Palaces Govern") + "</h2></div>" +
  '<div class="scrollx"><table class="t"><tr><th>' + (Z ? "宫位" : "Palace") + "</th><th>" + (Z ? "主管" : "Governs") + "</th></tr>" + palRows + "</table></div>" +
  "<p class='mt2'>" + (Z ? "紫微斗数相传由五代道士陈抟（希夷先生）所创，以紫微星为首的百余颗虚星布入十二宫，配合四化（禄权科忌）推演人生格局。新生建议先看<b>命宫</b>与<b>官禄宫</b>的主星组合。延伸阅读：<a href='/zh/learn/ziwei-guide/'>紫微斗数入门指南</a>。" : "Zi Wei Dou Shu, attributed to the Daoist sage Chen Tuan, scatters over a hundred symbolical stars through twelve palaces and reads life through their combinations and the four transformations (Lu, Quan, Ke, Ji). Start with the major stars of your <b>Self</b> and <b>Career</b> palaces. Read the <a href='/learn/ziwei-guide/'>beginner's guide to Zi Wei Dou Shu</a>.") + "</p></section>";
  return {
    title: Z ? "紫微斗数排盘_免费在线紫微命盘查询 | 八字神谕" : "Free Zi Wei Dou Shu Chart — Purple Star Astrology Calculator | BaziOracle",
    desc: Z ? "免费在线紫微斗数排盘：十二宫主星副星、化曜、命主身主，输入生日时辰即可排出。" : "Free online Zi Wei Dou Shu (Purple Star) chart: twelve palaces with major and minor stars, transformations, soul and body stars — cast instantly from your birth data.",
    body: body, scripts: S(["/assets/vendor/iztro.min.js", "/assets/js/ziwei.js"]),
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "紫微斗数" : "Zi Wei Dou Shu"]]
  };
}

/* ================= JIAOBEI ================= */
function jiaobei(Z) {
  var p = Z ? "/zh/jiaobei/" : "/jiaobei/";
  var rules = Z
    ? [["圣筊","一平一凸","神明应允，所问可行","green"],["笑筊","两平面朝上","所问未明或心不诚，静心重问",""],["阴筊","两凸面朝上","神明不允，宜缓宜改","red"],["立筊","筊杯立起","极罕见之大警示，慎之又慎","red"]]
    : [["Sacred (Shèng)", "One flat, one curved", "Approved — proceed", "green"],["Laughing (Xiào)", "Both flat sides up", "Question unclear or heart not sincere — ask again calmly", ""],["Negative (Yīn)", "Both curved sides up", "Not granted — postpone or change course", "red"],["Standing (Lì)", "A block stands on edge", "Extremely rare, a grave omen — utmost caution", "red"]];
  var ruleRows = rules.map(function (r) { return "<tr><td><b>" + r[0] + "</b></td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>"; }).join("");
  var body = '' +
  '<section class="hero container"><div class="kicker">掷筊 · Moon Block Divination</div>' +
  "<h1>" + (Z ? "在线掷筊 — 问事求圣杯" : "Online Moon Blocks — Ask and Cast") + "</h1>" +
  '<p class="sub">' + (Z ? "这是闽南与台湾庙宇里最日常的问神方式：双手捧筊，默念所问，掷于地——一平一凸即为圣筊。" : "The everyday oracle of Minnan and Taiwanese temples: hold the crescent blocks, silently ask your question, and cast — one flat side and one curved side is the sacred answer.") + "</p></section>" +
  '<section class="container" style="max-width:760px"><div class="card center">' +
  '<input id="jb-q" class="field" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:8px;font-family:var(--serif)" placeholder="' + (Z ? "心中默问之事（可选）" : "Your question (optional, hold it in mind)") + '">' +
  tpl.jbStage +
  '<div id="jb-round" style="color:var(--muted);font-size:.85rem">' + (Z ? "连续掷三次方为一问" : "Three throws complete one question") + "</div>" +
  '<div id="jb-verdict" class="jb-verdict"></div><div id="jb-desc" style="color:var(--ink2)"></div><div id="jb-hist" class="jb-hist"></div>' +
  '<p style="margin-top:16px"><button id="jb-btn" class="btn">' + (Z ? "掷筊" : "Cast the Blocks") + '</button>' +
  '<button id="jb-again" class="btn ghost" style="display:none">' + (Z ? "再问一事" : "Ask Another") + '</button>' +
  '<button id="jb-copy" class="btn gold" style="display:none">' + (Z ? "复制结果" : "Copy Result") + "</button></p>" +
  "</div>" + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">The rules</div><h2>' + (Z ? "四种筊象的含义" : "The Four Verdicts") + "</h2></div>" +
  '<div class="scrollx"><table class="t"><tr><th>' + (Z ? "筊象" : "Verdict") + "</th><th>" + (Z ? "形态" : "Pattern") + "</th><th>" + (Z ? "含义" : "Meaning") + "</th></tr>" + ruleRows + "</table></div>" +
  "<h2 class='mt2'>" + (Z ? "掷筊的正确姿势" : "How to Ask Properly") + "</h2>" +
  (Z
    ? "<p>一问一事，问题要具体到「现在」与「这件事」：不说「我今年运势如何」，而问「这份offer我今天该不该接」。标准流程是连掷三次：三圣为应允，两圣为可，一圣为勉强，零圣为不允。掷出笑筊通常说明问题问得含糊，或心还没定下来。</p><p>想换个方式问神？试试 <a href='/zh/kau-cim/'>观音灵签</a> 或 <a href='/zh/iching/'>易经摇卦</a>。</p>"
    : "<p>Ask one clear, present-tense question at a time — not \"how is my year\", but \"should I accept this offer today\". One question is completed by three consecutive throws: three sacred answers mean yes, two mean proceed with effort, one means grudgingly, none means no. A laughing verdict usually means the question was vague or the heart undecided.</p><p>Prefer a richer answer? Try <a href='/kau-cim/'>Guanyin fortune sticks</a> or <a href='/iching/'>I Ching coins</a>.</p>") +
  "<h3>" + (Z ? "筊杯从哪里来" : "Where the blocks come from") + "</h3>" +
  (Z
    ? "<p>筊杯以月牙形的两片木头制成，平面为阳、凸面为阴，象征一阴一阳之谓道。这一传统可追溯至唐代，宋以后随闽粤移民传入台湾与南洋，至今仍是福建、台湾、潮汕庙宇中最常用的问神仪式。英文里它被称为 Jiaobei、Poe 或 Moon Blocks。</p>"
    : "<p>Jiaobei (筊杯) are two crescent-shaped wooden blocks — the flat side is yang, the curved side yin, embodying the dance of the two primal forces. The practice dates to Tang-dynasty China and traveled with Minnan emigrants to Taiwan and Southeast Asia, where temple courtyards still echo with the click of blocks on stone. English speakers know them as jiaobei, poe, or moon blocks.</p>");
  return {
    title: Z ? "在线掷筊_掷圣杯问事_免费虚拟筊杯 | 八字神谕" : "Online Jiaobei — Free Moon Block (Poe) Divination | BaziOracle",
    desc: Z ? "免费在线掷筊问事：默念所问，连掷三次看圣筊、笑筊、阴筊，附完整筊象规则与闽南掷筊文化介绍。" : "Cast moon blocks online for free: ask a question, throw three times, and read the sacred, laughing or negative verdict — with the complete rules and Minnan temple tradition explained.",
    body: body, scripts: S(["/assets/js/jiaobei.js"]),
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "在线掷筊" : "Moon Blocks"]]
  };
}

/* ================= KAU CIM index ================= */
function kauCimIndex(Z, signData, signEn) {
  var p = Z ? "/zh/kau-cim/" : "/kau-cim/";
  var links = signData.map(function (s) {
    var t = Z ? s.title : ((signEn[s.id] && signEn[s.id].enTitle) || s.title);
    return '<a class="tag" href="' + p + "sign-" + s.id + '/" title="' + esc(t) + '">' + s.id + " · " + esc(t.length > 9 ? t.slice(0, 9) + "…" : t) + "</a>";
  }).join(" ");
  var body = '' +
  '<section class="hero container"><div class="kicker">观音灵签 · 100 Signs</div>' +
  "<h1>" + (Z ? "观音灵签在线求签" : "Kau Cim — Draw a Guanyin Fortune Stick") + "</h1>" +
  '<p class="sub">' + (Z ? "摇动签筒，抽出一支灵签。一百支签诗收录完整，每支都附详解。" : "Shake the cup, draw one stick out of a hundred classical signs — every sign with a full interpretation.") + "</p></section>" +
  (Z ? "" : "<script>window.KAU_EN = " + JSON.stringify(signEn) + ';</script>') +
  '<section class="container center" style="max-width:560px">' +
  '<div id="kc-cup" class="kc-cup"></div>' +
  '<p style="margin-top:20px"><button id="kc-btn" class="btn">' + (Z ? "诚心摇签" : "Shake & Draw") + "</button></p>" +
  '<div id="kc-out"></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker"> Tradition</div><h2>' + (Z ? "观音灵签是什么" : "About Guanyin Kau Cim") + "</h2></div>" +
  (Z
    ? "<p>观音灵签共一百支，流传于江南闽粤各地观音庙宇，相传起于南宋。求签时先默念姓名、住址与所问之事，摇出签支后掷筊确认。签分上、中、下，签诗多取材于历史典故（如苏秦得志、孔明点将），解签须结合所问之事。</p><p>本站收录全部一百支签的诗文与解曰，并提供 <a href='/zh/jiaobei/'>在线掷筊</a> 供确认。心诚则灵，签文仅供参考。</p>"
    : "<p>Kau Cim — the Guanyin oracle of one hundred numbered sticks — has been drawn in Guanyin temples since the Southern Song. The asker names themselves and their question, shakes the bamboo cup until one stick rises, then confirms the answer with moon blocks. Each sign quotes a classical episode — Su Qin's triumph, Kongming reviewing troops — and is graded upper, middle or lower fortune.</p><p>All hundred signs are here with their poems and interpretations, alongside our <a href='/jiaobei/'>online moon blocks</a> for confirmation. Draw with a sincere heart; read with an open mind.</p>") +
  '<div class="sec-head mt2"><h3>' + (Z ? "全部一百签" : "All 100 Signs") + "</h3></div><p>" + links + "</p></section>";
  return {
    title: Z ? "观音灵签在线求签_100签签诗详解 | 八字神谕" : "Kau Cim Online — Guanyin Fortune Sticks, All 100 Signs Interpreted | BaziOracle",
    desc: Z ? "观音灵签在线求签：摇签抽签，一百签签诗、吉凶与解曰完整收录。" : "Draw a Guanyin fortune stick online — all 100 signs with poems, fortune grades and full interpretations, in English and Chinese.",
    body: body, scripts: S(["/assets/js/kau-cim.js"]),
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "观音灵签" : "Fortune Sticks"]]
  };
}

/* ================= ZODIAC index ================= */
function zodiacIndex(Z, zodiacData) {
  var p = Z ? "/zh/zodiac/" : "/zodiac/";
  var EM = { rat:"🐀", ox:"🐂", tiger:"🐅", rabbit:"🐇", dragon:"🐉", snake:"🐍", horse:"🐎", goat:"🐐", monkey:"🐒", rooster:"🐓", dog:"🐕", pig:"🐖" };
  var tiles = zodiacData.map(function (z) {
    return '<a class="zo-tile" href="' + p + z.key + '/"><span class="em">' + EM[z.key] + '</span><span class="ch">' + z.zh + '</span><span class="en">' + (Z ? z.en : z.zh + " · " + z.en) + "</span></a>";
  }).join("");
  var body = '' +
  '<section class="hero container"><div class="kicker">十二生肖 · Chinese Zodiac</div>' +
  "<h1>" + (Z ? "生肖配对与十二生肖详解" : "Zodiac Compatibility & the Twelve Signs") + "</h1>" +
  '<p class="sub">' + (Z ? "查一查你与TA的六合三合，或点进自己的生肖看性格、幸运色与逐年运程。" : "Check any pairing for harmony or clash, or open your own sign for personality, lucky colors and yearly outlook.") + "</p></section>" +
  '<section class="container"><div class="zo-grid">' + tiles + "</div></section>" +
  '<section class="container" style="max-width:720px"><div class="sec-head"><div class="kicker">Compatibility</div><h2>' + (Z ? "生肖配对查询" : "Zodiac Compatibility Checker") + "</h2></div>" +
  '<form id="zc-form" class="card"><div class="form-row">' +
  '<div class="field"><label>' + (Z ? "你的生肖" : "Your sign") + '</label><select name="a"></select></div>' +
  '<div class="field"><label>' + (Z ? "对方生肖" : "Their sign") + '</label><select name="b"></select></div>' +
  '<div class="field" style="justify-content:end"><button class="btn" type="submit">' + (Z ? "配一配" : "Check Match") + "</button></div>" +
  "</div></form><div class=\"result\" id=\"zc-out\"></div>" + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">How it works</div><h2>' + (Z ? "六合、三合与相冲" : "Six Harmony, Three Harmony & Clash") + "</h2></div>" +
  (Z
    ? "<p>传统合婚以地支关系论吉凶：六合是两两暗合（如鼠牛、虎猪），三合是四组同气连枝的铁三角（申子辰、寅午戌、巳酉丑、亥卯未），相冲则是六组对角线上的正面碰撞（鼠马、牛羊、虎猴、兔鸡、龙狗、蛇猪）。相冲并非不能在一起，而是需要更多磨合与分工。</p><p>想知道更完整的自己？用 <a href='/zh/'>八字排盘</a> 看你的年柱地支与全局五行。</p>"
    : "<p>Classical pairing reads the earthly branches: Six Harmony pairs bond in secret (Rat-Ox, Tiger-Pig…), Three Harmony trios share one current (Shen-Zi-Chen, Yin-Wu-Xu, Si-You-Chou, Hai-Mao-Wei), and the six clash pairs sit diametrically opposite on the zodiac wheel (Rat-Horse, Ox-Goat…). A clash is not a curse — it is friction that needs structure and space.</p><p>For a fuller picture of yourself, cast your full chart with the <a href='/'>BaZi calculator</a>.</p>") + "</section>";
  return {
    title: Z ? "生肖配对查询_十二生肖性格详解 | 八字神谕" : "Chinese Zodiac Compatibility Checker & 12 Signs Guide | BaziOracle",
    desc: Z ? "十二生肖配对查询：六合三合相冲一键判定；含十二生肖性格、幸运色与最佳配对详解。" : "Check Chinese zodiac compatibility for any pair — Six Harmony, Three Harmony and clash verdicts — plus full guides to all twelve signs.",
    body: body, scripts: (Z ? "" : "<script>window.ZODIAC_DATA = " + JSON.stringify(zodiacData) + ";</script>\n") + S(["/assets/js/zodiac.js"]),
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "生肖" : "Zodiac"]]
  };
}

/* ================= ALMANAC ================= */
function almanac(Z) {
  var p = Z ? "/zh/almanac/" : "/almanac/";
  var body = '' +
  '<section class="hero container"><div class="kicker">' + (Z ? "老黄历 · 通书" : "Tong Shu · Chinese Almanac") + "</div>" +
  "<h1>" + (Z ? "每日黄历宜忌查询" : "Daily Chinese Almanac") + "</h1>" +
  '<p class="sub">' + (Z ? "今日宜忌、冲煞方位、吉神凶煞与农历干支，选日子、看日子都在这里。" : "Auspicious and inauspicious activities, clash directions, lucky stars and the lunar calendar day — for choosing wedding dates, signing days and moving days.") + "</p></section>" +
  '<section class="container" style="max-width:760px"><form id="al-form" class="card"><div class="form-row">' +
  '<div class="field"><label>' + (Z ? "选择日期" : "Pick a date") + '</label><input type="date" name="date" required></div>' +
  '<div class="field" style="justify-content:end"><button class="btn" type="submit">' + (Z ? "查询黄历" : "Read the Almanac") + "</button></div>" +
  '<div class="field"></div></div></form><div class="result" id="al-out"></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">How to read it</div><h2>' + (Z ? "黄历怎么用" : "How to Use an Almanac") + "</h2></div>" +
  (Z
    ? "<p>老黄历以当日干支为核心，列出十二类日常事务的宜与忌：嫁娶、祭祀、出行、开市、动土、安葬等。「冲煞」提示当日地支所冲的生肖，属相相冲者行事多留意；「煞」指该日不利的方位。</p><p>挑「宜嫁娶」或「宜开市」的日子时，先锁定事宜，再核对是否与当事人生肖相冲。想看更长期的节奏，可以用 <a href='/zh/'>八字排盘</a> 的十年大运。</p>"
    : "<p>The almanac centers on the day's ganzhi and lists the classic twelve activities — marrying, worship, travel, opening a business, breaking ground, burial — as favorable or not. The \"clash\" note names the animal sign opposed that day (those born under it take extra care) and the compass direction of the day's sha energy.</p><p>To pick a wedding or opening date: scan for the right activity first, then check no key person's sign is clashed. For the longer rhythm of your life chapters, cast your ten-year luck pillars with the <a href='/'>BaZi calculator</a>.</p>") + "</section>";
  return {
    title: Z ? "今日黄历_每日宜忌冲煞查询_老黄历 | 八字神谕" : "Daily Chinese Almanac — Auspicious Days, Yi Ji & Clash | BaziOracle",
    desc: Z ? "免费查询每日老黄历：宜忌事项、冲煞方位、吉神凶煞、农历干支，选日子必备。" : "Free daily Chinese almanac (Tong Shu): what to do and avoid each day, clash signs and directions, lucky stars and lunar dates — for choosing the right day.",
    body: body, scripts: (Z ? "" : "<script>window.DREAMS_LOC = " + JSON.stringify(require("./data/dreams").map(function(d){return {c:d.cat, t:d.en, m:d.mEn};})) + "</script>\n") + S(["/assets/vendor/lunar.min.js", "/assets/js/almanac-terms.js", "/assets/js/almanac.js"]),
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "每日黄历" : "Almanac"]]
  };
}

/* ================= I CHING index ================= */
function ichingIndex(Z, hexData) {
  var p = Z ? "/zh/iching/" : "/iching/";
  var links = hexData.map(function (hx) {
    return '<a class="tag" href="' + p + "hexagram-" + hx.n + '/">' + hx.n + " · " + hx.name + " " + hx.py + "</a>";
  }).join(" ");
  var body = '' +
  '<section class="hero container"><div class="kicker">周易 · I Ching</div>' +
  "<h1>" + (Z ? "易经六十四卦在线摇卦" : "I Ching Online — Cast the Coins") + "</h1>" +
  '<p class="sub">' + (Z ? "静心默想所问之事，三枚铜钱摇六次，起出本卦与变卦，阅读三千年的智慧。" : "Hold your question, toss three coins six times, and receive one of the sixty-four hexagrams — three thousand years of wisdom in one reading.") + "</p></section>" +
  '<section class="container center" style="max-width:640px"><div class="card">' +
  '<div id="ic-stage"><p>' + (Z ? "点击下方按钮开始摇卦" : "Press the button to begin casting") + "</p></div>" +
  '<p><button id="ic-btn" class="btn">' + (Z ? "起卦" : "Cast the Coins") + "</button></p>" +
  '<div id="ic-out"></div></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">The method</div><h2>' + (Z ? "摇卦方法与卦象规则" : "The Casting Method") + "</h2></div>" +
  (Z
    ? "<p>传统以三枚铜钱起卦：有字面为阴（2），无字面为阳（3），三枚相加得 6、7、8、9——6 为老阴、9 为老阳，为动爻；7 为少阳、8 为少阴。六掷成一卦，动爻变而得变卦。一爻动看动爻，多爻动则以本卦为主、变卦为终局参考。</p><p>六十四卦的卦辞均出自《周易》古经，本站为每一卦撰写了白话解读页。求事业可兼看 <a href='/zh/ziwei/'>紫微官禄宫</a>。</p>"
    : "<p>The classical method uses three coins: inscribed side counts 2 (yin), reverse counts 3 (yang); their sum gives 6, 7, 8 or 9 — six and nine are \"old\" changing lines, seven and eight are \"young\". Six throws build the hexagram from bottom to top; changing lines transform it into a second hexagram, the shape of things to come.</p><p>Every hexagram page here quotes the Zhouyi judgment with a modern reading. For career questions, cross-check the Career palace of your <a href='/ziwei/'>Zi Wei chart</a>.</p>") +
  '<div class="sec-head mt2"><h3>' + (Z ? "六十四卦目录" : "All 64 Hexagrams") + "</h3></div><p>" + links + "</p></section>";
  return {
    title: Z ? "易经在线摇卦_六十四卦卦辞详解 | 八字神谕" : "I Ching Online — Cast Three Coins, All 64 Hexagrams Interpreted | BaziOracle",
    desc: Z ? "周易六十四卦在线摇卦：三枚铜钱六掷起卦，自动判动爻与变卦，附全部卦辞白话解读。" : "Cast the I Ching online: three coins, six throws, automatic changing lines and transformed hexagram — plus all 64 judgments with modern interpretations.",
    body: body, scripts: S(["/assets/js/iching.js"]),
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "易经" : "I Ching"]]
  };
}

/* ================= DREAMS ================= */
function dreams(Z) {
  var p = Z ? "/zh/dreams/" : "/dreams/";
  var body = '' +
  '<section class="hero container"><div class="kicker">' + (Z ? "周公解梦" : "Zhou Gong's Dream Dictionary") + "</div>" +
  "<h1>" + (Z ? "周公解梦词典" : "Dream Dictionary — Chinese Tradition") + "</h1>" +
  '<p class="sub">' + (Z ? "梦见蛇、掉牙、被追、飞翔……输入关键词查一查传统解梦怎么说。" : "Snakes, falling teeth, being chased, flying — search what the Zhou Gong tradition says about your dream.") + "</p></section>" +
  '<section class="container" style="max-width:860px"><div class="field"><input id="dream-q" placeholder="' + (Z ? "搜索梦境关键词，如：蛇 / 水 / 考试" : "Search a dream keyword, e.g. snake / water / exam") + '"></div>' +
  '<div id="dream-box"><div id="dream-list"></div></div>' + AD + "</section>" +
  '<section class="block container" style="max-width:860px"><div class="sec-head"><div class="kicker">Reading dreams</div><h2>' + (Z ? "解梦的正确姿势" : "How to Read a Dream") + "</h2></div>" +
  (Z
    ? "<p>《周公解梦》是流传最广的民间解梦体系，多用象征与谐音（如棺材谐音「官财」）。解梦的铁律是：同一个梦，心境不同、近事不同，含义便不同。梦更多反映你自己的情绪与挂虑，把它当作自我梳理的材料最好。</p><p>想知道更长期的运势底色，可以用 <a href='/zh/'>八字排盘</a> 看五行与喜用神。</p>"
    : "<p>Zhou Gong's dream dictionary, the most widespread folk system in China, reads dreams through symbols and puns (a coffin, guancai, puns on \"office and riches\"). The iron rule of dream reading: the same image means different things in different moods and seasons of life. Dreams mostly mirror your own emotions — treat them as material for self-reflection.</p><p>For the longer fortune beneath the dreams, cast your elements with the <a href='/'>BaZi calculator</a>.</p>") + "</section>";
  return {
    title: Z ? "周公解梦大全_在线查询梦境含义 | 八字神谕" : "Dream Dictionary — Zhou Gong Dream Interpretation Online | BaziOracle",
    desc: Z ? "周公解梦在线查询：梦见蛇、水、掉牙、考试等常见梦境的传统释义，支持关键词搜索。" : "Zhou Gong's dream dictionary online: search the traditional Chinese meanings of snakes, water, falling teeth, exams and a hundred common dreams.",
    body: body, scripts: (Z ? "" : "<script>window.DREAMS_LOC = " + JSON.stringify(require("./data/dreams").map(function(d){return {c:d.cat, t:d.en, m:d.mEn};})) + "</script>\n") + S(["/assets/js/dreams.js"]),
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [p, Z ? "周公解梦" : "Dreams"]]
  };
}

module.exports = { homeEn: homeEn, homeZh: homeZh, baziPage: baziPage, fiveElements: fiveElements, ziwei: ziwei, jiaobei: jiaobei, kauCimIndex: kauCimIndex, zodiacIndex: zodiacIndex, almanac: almanac, ichingIndex: ichingIndex, dreams: dreams, baziForm: baziForm };
