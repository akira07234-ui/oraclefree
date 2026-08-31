/* ziwei.js — Purple Star Astrology chart via iztro, config via window.L10N.zw
 * v2: adds decadal (Da Xian) ranges on every palace, current-decade / yearly /
 *     small-limit highlighting, borrowed stars for empty palaces, a fortune-year
 *     selector and a decadal + yearly reading panel.
 */
(function () {
  "use strict";
  var EN = {
    soul: "Soul", body: "Body", element: "Element", chart: "Zi Wei Dou Shu Chart",
    title: "Your Purple Star Chart",
    disc: "Zi Wei Dou Shu is a deep system; this chart shows the twelve palaces with major & minor stars, for cultural & entertainment reference.",
    discDY: "Decadal and yearly readings use the traditional palace-walking method with a simplified rule set; for cultural & entertainment reference.",
    bodyPalace: " (Body)",
    ti: ["Zi (early) 00:00–00:59", "Chou 01:00–02:59", "Yin 03:00–04:59", "Mao 05:00–06:59", "Chen 07:00–08:59", "Si 09:00–10:59", "Wu 11:00–12:59", "Wei 13:00–14:59", "Shen 15:00–16:59", "You 17:00–18:59", "Xu 19:00–20:59", "Hai 21:00–22:59", "Zi (late) 23:00–23:59"],
    mut: { lu: "Lu", quan: "Quan", ke: "Ke", ji: "Ji", a: "Lu", b: "Quan", c: "Ke", d: "Ji" },
    izLang: "en-US", showBrightness: false, cornerRoman: true,
    /* --- v2 --- */
    queryYear: "Fortune year",
    queryYearHint: "The year to read — drives the yearly palace and the decade you are in",
    decadal: "Decade", yearly: "Year", xiaoxian: "Small limit",
    ageRange: "Ages {a}–{b}", ageWord: "Age {n}", nominalAge: "Nominal age {n}",
    decTitle: "Decadal Fortune · Da Xian",
    yearTitle: "Yearly Fortune · Liu Nian",
    decNote: "One decade lights up a single life area. Its heavenly stem drives the decade's four transformations.",
    yearNote: "The year palace overlays on your decade for twelve months at a time.",
    mutLab: "Four transformations",
    decStars: "Decadal stars", yearStars: "Yearly stars",
    emptyPal: "Empty palace",
    borrowNote: "No major stars of its own — it reads through the stars borrowed from the opposite palace",
    borrowed: "borrowed", borrowFrom: "from {p}",
    nowDec: "Decade you are in", nowYear: "Year {y}", nowXx: "Small limit",
    palaceLabel: "Palace", stemLabel: "Stem–branch",
    outOfRange: "Year {y} falls outside the range covered by this chart.",
    badYear: "Please enter a year between 1900 and 2100.",
    legend: "Legend",
    legendCur: "decade you are in", legendYear: "year {y}", legendXx: "small limit", legendBorrow: "borrowed star", legendEmpty: "empty palace"
  };
  var T = (window.L10N && window.L10N.zw) || EN;
  for (var k in EN) if (T[k] === undefined) T[k] = EN[k];

  var form = document.getElementById("zw-form");
  if (!form) return;
  var out = document.getElementById("zw-out");
  var LAYOUT = [5, 6, 7, 8, 4, "C", 9, 3, 10, 2, 1, 0, 11];
  var BR_ZH = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  var BR_EN = ["zi", "chou", "yin", "mao", "chen", "si", "wu", "wei", "shen", "you", "xu", "hai"];
  /* iztro romanises the 午 branch as "woo" under en-US. Without this alias the
   * Wu palace silently vanished from the grid on en/es/ar (and its decadal
   * range, borrow target and highlights were all lost with it). */
  var BR_ALIAS = { woo: 6, wu: 6 };
  var MUT_ORDER = ["lu", "quan", "ke", "ji"];
  var MUT_ZH = { "禄": "lu", "权": "quan", "科": "ke", "忌": "ji" };

  var sel = form.querySelector("[name=timeIndex]");
  T.ti.forEach(function (t, i) {
    var o = document.createElement("option"); o.value = i; o.textContent = t; sel.appendChild(o);
  });

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? "" : s); }
  /* iztro returns the four transformations either romanised ("lu") or in CJK
   * form ("禄") depending on the cast language; normalise both to a lookup key. */
  function mutKey(m) {
    var s = String(m);
    return MUT_ZH[s] || s.toLowerCase();
  }
  function mutWord(m) {
    return (T.mut && T.mut[mutKey(m)]) || m;
  }
  function mutBadge(m) {
    if (!m) return "";
    return ' <sup style="color:#b23a2e">' + esc(mutWord(m)) + "</sup>";
  }
  function brIndex(br) {
    var i = BR_ZH.indexOf(br);
    if (i >= 0) return i;
    var s = String(br).toLowerCase();
    if (BR_ALIAS[s] !== undefined) return BR_ALIAS[s];
    return BR_EN.indexOf(s);
  }
  function starHtml(stars, cls, borrowed) {
    return stars.map(function (s) {
      var b = s.brightness && T.showBrightness ? " · " + s.brightness : "";
      var mark = borrowed ? ' <i style="opacity:.65;font-style:normal;font-size:.7em">(' + esc(T.borrowed) + ")</i>" : "";
      return '<span class="star ' + cls + (borrowed ? " borrowed" : "") + '">' + esc(s.name) + mutBadge(s.mutagen) + b + mark + "</span>";
    }).join("");
  }
  /* Four transformations arrive as [Lu, Quan, Ke, Ji] star-name arrays. */
  function mutLine(names) {
    if (!names || !names.length) return "";
    return names.map(function (n, i) {
      return '<span class="tag">' + esc(n) + " " + esc(mutWord(MUT_ORDER[i])) + "</span>";
    }).join(" ");
  }
  function flattenStars(group) {
    var arr = [];
    (group || []).forEach(function (s) { (s || []).forEach(function (x) { if (x && x.name) arr.push(x.name); }); });
    return arr;
  }
  function fmt(tpl, map) {
    return String(tpl).replace(/\{(\w+)\}/g, function (_, k) { return map[k] != null ? map[k] : ""; });
  }
  /* Empty palaces read through the opposite palace (index + 6). */
  function majorsWithBorrow(palacesByIndex, idx) {
    var p = palacesByIndex[idx];
    if (!p) return { stars: [], borrowed: false };
    if (p.majorStars && p.majorStars.length) return { stars: p.majorStars, borrowed: false, own: true };
    var opp = palacesByIndex[(idx + 6) % 12];
    if (opp && opp.majorStars && opp.majorStars.length) {
      return { stars: opp.majorStars, borrowed: true, from: opp.name };
    }
    return { stars: [], borrowed: false, empty: true };
  }

  /* ---------- state ---------- */
  var STATE = null; /* { chart, zhByIdx, byIdx, brOfArr, arrOfBr, queryYear, horo } */

  /* iztro indexes two different ways and we have to bridge them:
   *   - chart.palaces[i] / palace.index / horoscope().*.index / *.stars[]  -> ARRAY slot
   *     (the palaces array always starts at the Yin 寅 palace)
   *   - our LAYOUT grid                                                    -> EARTHLY-BRANCH slot (0 = Zi 子)
   * Empty-palace borrowing (branch + 6) is done on the branch slot. */
  function buildIndexMaps(chart) {
    var brOfArr = [], arrOfBr = {};
    chart.palaces.forEach(function (p, i) {
      var br = brIndex(p.earthlyBranch);
      brOfArr[i] = br;
      arrOfBr[br] = i;
    });
    return { brOfArr: brOfArr, arrOfBr: arrOfBr };
  }

  function computeHoro(chart, queryYear) {
    /* Mid-year keeps us safely inside the requested lunar year. */
    var d = queryYear + "-06-15";
    try { return chart.horoscope(d); } catch (e) { return null; }
  }

  /* ---------- chart grid ---------- */
  function gridHtml() {
    var S = STATE;
    var cells = LAYOUT.map(function (entry) {
      if (entry === "C") {
        return '<div class="zw-center" style="grid-column:span 2;grid-row:span 2"><div>' + esc(T.soul) + ": <b>" + esc(S.chart.soul) + "</b></div><div>" + esc(T.body) + ": <b>" + esc(S.chart.body) + "</b></div><div>" + esc(T.element) + ": <b>" + esc(S.chart.fiveElementsClass) + "</b></div><div style='margin-top:6px;opacity:.8'>" + esc(T.chart) + "</div></div>";
      }
      var p = S.byIdx[entry];
      var corner = T.cornerRoman ? BR_EN[entry] : BR_ZH[entry];
      if (!p) return '<div class="zw-cell"><div class="pal">' + esc(corner) + "</div></div>";

      var mj = majorsWithBorrow(S.byIdx, entry);
      var h = S.horo;
      var slot = S.arrOfBr[entry]; /* array slot for horoscope lookups */
      var isDec = h && h.decadal && S.brOfArr[h.decadal.index] === entry;
      var isYear = h && h.yearly && S.brOfArr[h.yearly.index] === entry;
      var isXx = h && h.age && S.brOfArr[h.age.index] === entry;
      var cls = "zw-cell";
      if (p.isBodyPalace) cls += " body";
      if (isDec) cls += " cur-decade";
      if (isYear) cls += " cur-year";
      if (isXx) cls += " cur-xx";

      var dec = p.decadal;
      var decTag = dec && dec.range ? '<div class="dec">' + esc(fmt(T.ageRange, { a: dec.range[0], b: dec.range[1] })) + "</div>" : "";
      var flags = [];
      if (isDec) flags.push('<span class="flag f-dec">' + esc(T.decadal) + "</span>");
      if (isYear) flags.push('<span class="flag f-year">' + esc(T.yearly) + "</span>");
      if (isXx) flags.push('<span class="flag f-xx">' + esc(T.xiaoxian) + "</span>");
      var flagHtml = flags.length ? '<div class="flags">' + flags.join("") + "</div>" : "";

      /* yearly / decadal travelling stars that land on this palace */
      var extra = [];
      if (h && h.decadal && h.decadal.stars) extra = extra.concat(flattenStars([h.decadal.stars[slot]]).map(function (n) { return '<span class="star dstar">' + esc(n) + "</span>"; }));
      if (h && h.yearly && h.yearly.stars) extra = extra.concat(flattenStars([h.yearly.stars[slot]]).map(function (n) { return '<span class="star ystar">' + esc(n) + "</span>"; }));

      var emptyNote = mj.empty ? '<div class="emptypal">' + esc(T.emptyPal) + "</div>" : "";
      var fromNote = mj.borrowed ? '<div class="borrow">' + esc(fmt(T.borrowFrom, { p: mj.from })) + "</div>" : "";

      return '<div class="' + cls + '">' +
        flagHtml +
        '<div class="pal">' + esc(p.name) + (p.isBodyPalace ? esc(T.bodyPalace) : "") + "</div>" +
        '<div class="stem-branch">' + esc(p.heavenlyStem) + " " + esc(corner) + "</div>" +
        decTag + emptyNote + fromNote +
        starHtml(mj.stars, "major", mj.borrowed) + starHtml(p.minorStars, "minor") +
        extra.join("") +
        "</div>";
    }).join("");
    return '<div class="zw-grid">' + cells + "</div>";
  }

  function legendHtml() {
    var S = STATE;
    var y = S.queryYear;
    return '<div class="zw-legend">' +
      '<span class="lg"><i class="sw sw-dec"></i>' + esc(T.legendCur) + "</span>" +
      '<span class="lg"><i class="sw sw-year"></i>' + esc(fmt(T.legendYear, { y: y })) + "</span>" +
      '<span class="lg"><i class="sw sw-xx"></i>' + esc(T.legendXx) + "</span>" +
      '<span class="lg"><i class="sw sw-borrow"></i>' + esc(T.legendBorrow) + "</span>" +
      '<span class="lg"><i class="sw sw-empty"></i>' + esc(T.legendEmpty) + "</span>" +
      "</div>";
  }

  /* ---------- decadal + yearly reading ---------- */
  function dynHtml() {
    var S = STATE, h = S.horo;
    if (!h) return "";
    var zp = T.zp || {};
    var decPalace = S.byIdx[S.brOfArr[h.decadal.index]];
    var yearPalace = S.byIdx[S.brOfArr[h.yearly.index]];
    var xxPalace = S.byIdx[S.brOfArr[h.age.index]];
    var dec = decPalace && decPalace.decadal;
    var arr = ['<div class="panel zw-dyn" style="margin-top:14px">'];

    arr.push('<h3>' + esc(T.decTitle) + "</h3><p><small>" + esc(T.decNote) + "</small></p>");
    if (decPalace) {
      arr.push('<p class="dyn-line"><b>' + esc(decPalace.name) + "</b> · " +
        esc(dec ? dec.heavenlyStem + dec.earthlyBranch : "") +
        (dec && dec.range ? " · <small>" + esc(fmt(T.ageRange, { a: dec.range[0], b: dec.range[1] })) + "</small>" : "") +
        (h.age && h.age.nominalAge != null ? " · <small>" + esc(fmt(T.nominalAge, { n: h.age.nominalAge })) + "</small>" : "") +
        "</p>");
      var deepKey = zp.palDeep || zp.pal;
      if (deepKey) {
        var zhDec = S.zhByIdx[S.brOfArr[h.decadal.index]];
        if (zhDec && deepKey[zhDec.name]) arr.push("<p>" + deepKey[zhDec.name] + "</p>");
      }
      var dmut = h.decadal.mutagen;
      if (dmut && dmut.length) arr.push('<p class="mut-row">' + esc(T.mutLab) + ": " + mutLine(dmut) + "</p>");
      var ds = flattenStars(h.decadal.stars);
      if (ds.length) arr.push('<p class="mut-row">' + esc(T.decStars) + ': <span class="tag">' + esc(ds.join(" · ")) + "</span></p>");
    }

    arr.push('<h3 style="margin-top:14px">' + esc(fmt(T.nowYear, { y: S.queryYear })) + "</h3><p><small>" + esc(T.yearNote) + "</small></p>");
    if (yearPalace) {
      arr.push('<p class="dyn-line"><b>' + esc(yearPalace.name) + "</b> · " +
        esc(h.yearly.heavenlyStem + h.yearly.earthlyBranch) + "</p>");
      var deepKey2 = zp.palDeep || zp.pal;
      if (deepKey2) {
        var zhYr = S.zhByIdx[S.brOfArr[h.yearly.index]];
        if (zhYr && deepKey2[zhYr.name]) arr.push("<p>" + deepKey2[zhYr.name] + "</p>");
      }
      var ymut = h.yearly.mutagen;
      if (ymut && ymut.length) arr.push('<p class="mut-row">' + esc(T.mutLab) + ": " + mutLine(ymut) + "</p>");
      var ys = flattenStars(h.yearly.stars);
      if (ys.length) arr.push('<p class="mut-row">' + esc(T.yearStars) + ': <span class="tag">' + esc(ys.join(" · ")) + "</span></p>");
    }
    if (xxPalace) {
      arr.push('<p class="dyn-line"><small>' + esc(T.nowXx) + ": <b>" + esc(xxPalace.name) + "</b> · " +
        esc(h.age.heavenlyStem + h.age.earthlyBranch) + "</small></p>");
    }
    arr.push('<p class="disclaimer mb0">' + esc(T.discDY) + "</p>");
    arr.push("</div>");
    return arr.join("\n");
  }

  /* ---------- existing static reading (kept) ---------- */
  function readingHtml() {
    var S = STATE;
    var zp = T.zp;
    if (!zp) return "";
    function zhOf(dp) { return S.zhByIdx[brIndex(dp.earthlyBranch)] || null; }
    function starTexts(dp, limit) {
      var zc = zhOf(dp);
      if (!zc) return [];
      var mj = majorsWithBorrow(S.byIdx, brIndex(dp.earthlyBranch));
      var useZh = zc;
      if (mj.borrowed) useZh = S.zhByIdx[(brIndex(dp.earthlyBranch) + 6) % 12] || zc;
      var arr = useZh.majorStars.map(function (s) {
        var txt = (zp.starsLong && zp.starsLong[s.name]) || zp.stars[s.name] || null;
        return txt ? "<b>" + s.name + "</b> " + txt : null;
      }).filter(Boolean);
      return limit ? arr.slice(0, limit) : arr;
    }
    function findPal(zhName) {
      for (var i = 0; i < S.chart.palaces.length; i++) {
        var zc = zhOf(S.chart.palaces[i]);
        if (zc && zc.name === zhName) return S.chart.palaces[i];
      }
      return null;
    }
    var MUTN = { "禄": "禄", "权": "权", "科": "科", "忌": "忌", lu: "禄", quan: "权", ke: "科", ji: "忌", a: "禄", b: "权", c: "科", d: "忌" };
    var h = ['<div class="panel" style="margin-top:14px"><h3>' + zp.title + '</h3><p><small>' + zp.srcLine + "</small></p>"];
    var self = findPal("命宫");
    if (self) {
      h.push('<h3 style="margin-top:10px">' + zp.soulLab + " · " + self.name + "</h3>");
      starTexts(self).forEach(function (t) { h.push("<p>" + t + "</p>"); });
      h.push("<p>" + ((zp.palDeep && zp.palDeep["命宫"]) || zp.pal["命宫"] || "") + "</p>");
    }
    ["官禄", "财帛", "夫妻"].forEach(function (zhName) {
      var pp = findPal(zhName);
      if (!pp) return;
      h.push('<h3 style="margin-top:10px">' + pp.name + "</h3>");
      h.push("<p>" + ((zp.palDeep && zp.palDeep[zhName]) || zp.pal[zhName] || "") + "</p>");
      starTexts(pp, 2).forEach(function (t) { h.push("<p>" + t + "</p>"); });
    });
    var muts = [];
    S.chart.palaces.forEach(function (pp) {
      pp.majorStars.forEach(function (s) {
        if (!s.mutagen) return;
        var kk = String(s.mutagen).toLowerCase();
        var m = (T.mut && T.mut[kk]) || (zp.mutText && zp.mutText[MUTN[kk]]) || String(s.mutagen);
        muts.push(s.name + " " + m + " · " + pp.name);
      });
    });
    if (muts.length) {
      h.push('<h3 style="margin-top:10px">' + zp.mutLab + "</h3><p>" + zp.mutNote + "</p>");
      muts.forEach(function (m) { h.push('<p><span class="tag">' + m + "</span></p>"); });
    }
    h.push("</div>");
    return h.join("\n");
  }

  function render() {
    out.className = "result show";
    out.innerHTML = '<div class="panel"><h3>' + esc(T.title) + "</h3>" +
      legendHtml() + gridHtml() +
      dynHtml() + readingHtml() +
      '<p class="disclaimer mb0">' + esc(T.disc) + "</p></div>";
  }

  function cast() {
    if (typeof iztro === "undefined") { out.innerHTML = '<div class="panel">Library failed to load.</div>'; return; }
    var fd = new FormData(form);
    var dateStr = fd.get("date");
    if (!dateStr) return;
    var parts = dateStr.split("-");
    var y = parseInt(fd.get("year"), 10);
    if (!y || y < 1900 || y > 2100) { out.innerHTML = '<div class="panel">' + esc(T.badYear) + "</div>"; return; }
    var chart;
    try {
      chart = iztro.astro.bySolar(parts[0] + "-" + (+parts[1]) + "-" + (+parts[2]), +fd.get("timeIndex"), fd.get("gender"), true, T.izLang);
    } catch (e) {
      out.innerHTML = '<div class="panel">Error: ' + esc(e.message) + "</div>";
      return;
    }
    var byIdx = {};
    chart.palaces.forEach(function (p) { byIdx[brIndex(p.earthlyBranch)] = p; });
    var zhByIdx = {};
    try {
      var zhChart = iztro.astro.bySolar(parts[0] + "-" + (+parts[1]) + "-" + (+parts[2]), +fd.get("timeIndex"), fd.get("gender"), true, "zh-CN");
      zhChart.palaces.forEach(function (pp) { zhByIdx[brIndex(pp.earthlyBranch)] = pp; });
    } catch (e) { /* readings degrade gracefully */ }
    var maps = buildIndexMaps(chart);
    STATE = {
      chart: chart, byIdx: byIdx, zhByIdx: zhByIdx,
      brOfArr: maps.brOfArr, arrOfBr: maps.arrOfBr,
      queryYear: y, horo: computeHoro(chart, y)
    };
    render();
    out.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  form.addEventListener("submit", function (ev) { ev.preventDefault(); cast(); });

  /* Live re-render when only the fortune year changes (no need to re-cast the chart). */
  var yearInput = form.querySelector("[name=year]");
  if (yearInput) {
    /* The markup carries a build-time default; refresh it to the visitor's year. */
    yearInput.value = new Date().getFullYear();
    yearInput.addEventListener("change", function () {
      if (!STATE) return;
      var y = parseInt(yearInput.value, 10);
      if (!y || y < 1900 || y > 2100) return;
      STATE.queryYear = y;
      STATE.horo = computeHoro(STATE.chart, y);
      render();
    });
  }
})();
