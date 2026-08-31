/* bazi-ui.js — shared BaZi form + renderer, config-driven via window.L10N.bu (EN fallback). v2: deep reading. */
(function () {
  "use strict";
  var EN = {
    els: { "木": "Wood", "火": "Fire", "土": "Earth", "金": "Metal", "水": "Water" },
    gods: { 比肩: "Friend", 劫财: "Rival", 食神: "Talent", 伤官: "Rebel", 偏财: "Windfall", 正财: "Wealth", 七杀: "Warrior", 正官: "Officer", 偏印: "Mystic", 正印: "Scholar", 日主: "Day Master" },
    hourWord: "hour", hourUnknown: "Unknown birth time",
    pillars: ["Year", "Month", "Day", "Hour"],
    dayMaster: "Day Master", strengthLab: "Strength",
    strength: { weak: "weak", balanced: "balanced", strong: "strong" },
    favorable: "Favorable", missing: "Missing", allFive: "All five present",
    hidden: "Hidden Stems", hideLab: "hide:",
    luck: "Luck Pillars (10-year cycles)", th: ["Pillar", "Age", "Years"],
    corr: "True solar time correction applied: {n} min.",
    unknownWarn: "⚠️ Birth time unknown — the hour pillar defaults to Zi (23:00–00:59) and is indicative only.",
    yourFour: "Your Four Pillars", signWord: "sign",
    fiveTitle: "Five Elements Strength", elSays: "What your element says",
    strongestIs: "Your strongest element is",
    missingNote: "Missing:", presentNote: "All five elements are present — a well-circulated chart.",
    balanceNote: " — traditionally balanced via name, direction or color.",
    discFull: "Computed with simplified traditional Zi Ping rules, for cultural & entertainment reference. Your destiny remains in your own hands.",
    discEl: "A simplified model, for cultural & entertainment reference.",
    fiveTitlePg: "Your Five Elements",
    invalidDate: "Invalid date — please check your input (lunar dates must really exist).",
    personality: {
      "木": "Like a tree growing upward — benevolent, ambitious and principled; growth-oriented, sometimes stubborn.",
      "火": "Like flame leaping upward — passionate, expressive and courteous; quick to act, watch the impatience.",
      "土": "Like broad earth — reliable, trustworthy and inclusive; the steadiest force on any team.",
      "金": "Like resounding metal — decisive, loyal and candid; values rules, justice and efficiency.",
      "水": "Like flowing water — clever, adaptable and deep-thinking; softness that overcomes hardness."
    }
  };
  var BU = (window.L10N && window.L10N.bu) || EN;
  for (var k0 in EN) if (BU[k0] === undefined) BU[k0] = EN[k0];

  var E = window.BaziEngine;
  var isZh = (document.documentElement.lang || "").indexOf("zh") === 0;
  function elName(e) { var l = BU.els[e]; return (l && l !== e) ? e + " " + l : e; }
  function godName(g) { var l = BU.gods[g]; return (l && l !== g) ? l + " · " + g : g; }
  var HOUR_NAMES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

  function hourLabel(h) {
    var idx = Math.floor(((h + 1) % 24) / 2);
    var w = BU.hourWord ? " " + BU.hourWord : "";
    return (String(h).padStart(2, "0")) + ":00 · " + HOUR_NAMES[idx] + w;
  }

  function initForm(formId, outId, opts) {
    opts = opts || {};
    var form = document.getElementById(formId);
    var out = document.getElementById(outId);
    if (!form || !out) return;

    var hourSel = form.querySelector("[name=hour]");
    for (var h = 0; h < 24; h++) {
      var o = document.createElement("option");
      o.value = h; o.textContent = hourLabel(h);
      hourSel.appendChild(o);
    }
    var unk = document.createElement("option");
    unk.value = "-1"; unk.textContent = BU.hourUnknown;
    hourSel.insertBefore(unk, hourSel.firstChild);

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var fd = new FormData(form);
      var input = {
        y: +fd.get("year"), m: +fd.get("month"), d: +fd.get("day"),
        hour: +fd.get("hour") < 0 ? null : +fd.get("hour"),
        minute: +(fd.get("minute") || 0),
        gender: fd.get("gender"),
        calendar: fd.get("calendar") || "solar",
        tz: +(fd.get("tz") || 8),
        longitude: fd.get("longitude") ? +fd.get("longitude") : null,
        trueSolar: fd.get("trueSolar") === "on"
      };
      if (input.hour === null) { input.hour = 0; input.hourUnknown = true; }
      var res;
      try { res = E.compute(input); }
      catch (e) {
        out.className = "result show";
        out.innerHTML = '<div class="panel">' + BU.invalidDate + "</div>";
        return;
      }
      if (input.hourUnknown) res.hourUnknown = true;
      out.className = "result show";
      out.innerHTML = opts.focus === "elements" ? renderElements(res) : renderFull(res);
      out.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function elBar(res) {
    var max = 0.0001, total = 0;
    E.EL_ORDER.forEach(function (e) { max = Math.max(max, res.scores[e]); total += res.scores[e]; });
    if (!total) total = 1;
    var dmEl = res.dayMaster.element;
    return '<div class="elbar">' + E.EL_ORDER.map(function (e) {
      var pct = Math.round(res.scores[e] / max * 100);
      var share = Math.round(res.scores[e] / total * 100);
      var cls = "elcol" + (e === dmEl ? " is-dm" : "") + (res.scores[e] < 0.01 ? " is-out" : "");
      return '<div class="' + cls + '">' +
        '<span class="val">' + res.scores[e].toFixed(1) + "</span>" +
        '<div class="track"><div class="bar" style="height:' + Math.max(4, pct) + '%"></div></div>' +
        '<span class="nm">' + elName(e) + "</span>" +
        '<span class="pct">' + share + "%</span>" +
        "</div>";
    }).join("") + "</div>";
  }

  function pillarCard(nameLab, p) {
    var ss = p.shishen === "日主" ? godName("日主") : godName(p.shishen);
    return '<div class="pillar"><div class="lab">' + nameLab + "</div>" +
      '<div class="gz"><span class="y">' + p.gan + "</span>" + p.zhi + "</div>" +
      '<div class="meta">' + p.ganPy + " " + p.zhiPy + "</div>" +
      '<div class="meta">' + p.ganEl + p.zhiEl + "</div>" +
      '<div class="meta">' + ss + "</div></div>";
  }

  function favTags(list) {
    return list.map(function (e) { return '<span class="tag green">' + elName(e) + "</span>"; }).join(" ");
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function kv(label, val) {
    if (val === undefined || val === null || val === "") return "";
    return "<div><b>" + esc(label) + "</b>" + esc(val) + "</div>";
  }

  /* 五行生克链：木 → 火 → 土 → 金 → 水 → 木 */
  var GEN_NEXT = { "木": "火", "火": "土", "土": "金", "金": "水", "水": "木" };
  var GEN_PREV = { "火": "木", "土": "火", "金": "土", "水": "金", "木": "水" };

  /* 月支 → 当令五行 */
  var BR_EL = { "寅": "木", "卯": "木", "巳": "火", "午": "火", "申": "金", "酉": "金",
                "亥": "水", "子": "水", "辰": "土", "戌": "土", "丑": "土", "未": "土" };

  /* 旺相休囚死：按「当令者旺，我生者相，生我者休，克我者囚，我克者死」推。
   * 返回 { wang, xiang, xiu, qiu, si } 五个元素名。 */
  function seasonStates(monthZhi) {
    var S = BR_EL[monthZhi];
    if (!S) return null;
    return {
      el: S,
      wang: S,                          /* 当令 */
      xiang: GEN_NEXT[S],               /* 我生者 */
      xiu: GEN_PREV[S],                 /* 生我者 */
      qiu: GEN_PREV[GEN_PREV[S]],       /* 克我者 */
      si: GEN_NEXT[GEN_NEXT[S]]         /* 我克者 */
    };
  }

  /* 五行旺衰分级：0 缺失 / 1 太弱 / 2 偏弱 / 3 中和 / 4 偏旺 / 5 太旺
   *
   * 判据用「自党比」——（本气 + 生我者）÷ 全局，即子平的扶抑法：
   * 自党（比劫 + 印绶）与异党（官杀 + 财 + 食伤）相权。
   * 这与 bazi-engine 判定日主旺衰用的是同一条公式，
   * 因此下面每一行等级与页首「日主旺衰」必然自洽，不会各说各话。
   * 数量占比仍单独保留（柱状图用），它只说明「有多少」，不说明「得不得力」。 */
  function elShare(res) {
    var total = 0;
    E.EL_ORDER.forEach(function (e) { total += res.scores[e]; });
    if (!total) total = 1;
    /* 注意：引擎的 pillars 是 { year, month, day, hour } 对象，不是数组 */
    var mz = res.pillars && res.pillars.month && res.pillars.month.zhi;
    var st = seasonStates(mz);
    var seaOf = {};
    if (st) {
      ["wang", "xiang", "xiu", "qiu", "si"].forEach(function (k) { seaOf[st[k]] = k; });
    }
    var by = {};
    E.EL_ORDER.forEach(function (e) {
      var share = res.scores[e] / total;
      var self = (res.scores[e] + res.scores[GEN_PREV[e]]) / total;   /* 自党比 */
      var lv;
      if (res.scores[e] < 0.01) lv = 0;
      else if (self < 0.20) lv = 1;
      else if (self < 0.42) lv = 2;
      else if (self <= 0.58) lv = 3;
      else if (self < 0.75) lv = 4;
      else lv = 5;
      by[e] = { score: res.scores[e], share: share, self: self, lv: lv, sea: seaOf[e] || "" };
    });
    return { total: total, by: by, season: st, monthZhi: mz };
  }

  /* ---------- 详细解盘 v2 ---------- */
  function quote(t, s, ve) {
    return '<blockquote class="classic" style="margin:8px 0"><span class="zh-quote">「' + t + "」</span>" +
      (ve ? '<span style="display:block;font-size:.95rem;color:var(--ink2);margin-top:8px">' + ve + "</span>" : "") +
      '<cite class="cite">—— ' + s + "</cite></blockquote>";
  }

  function renderReading(res) {
    var jp = BU.jp;
    if (!jp) return "";
    var dm = res.dayMaster;
    var dgIdx = E.STEMS.indexOf(dm.gan);
    var S2 = jp.sec2 || jp.sec;
    var h = ['<div class="panel"><h3>' + jp.title + '</h3><p><small>' + jp.srcNote + "</small></p></div>"];

    /* 一 · 日主本性（深度） */
    var st = jp.stems[dm.gan];
    var deep = jp.stemsDeep ? jp.stemsDeep[dm.gan] : null;
    if (st) {
      h.push('<div class="panel"><h3>' + S2.a + "</h3>" + quote(st.v, st.s, st.ve));
      if (deep) {
        deep.split("。").filter(Boolean).forEach(function (sent) { h.push("<p>" + sent + "。</p>"); });
      } else {
        h.push("<p>" + st.r + "</p>");
      }
      h.push("</div>");
    }

    /* 二 · 格局（子平真诠·月令取格） */
    if (jp.ge) {
      var hideStems = res.pillars.month.hide;
      var otherGans = [res.pillars.year.gan, res.pillars.month.gan, res.pillars.hour.gan];
      var geStem = hideStems[0], geTou = false;
      for (var gi = 0; gi < hideStems.length; gi++) {
        if (otherGans.indexOf(hideStems[gi]) >= 0) { geStem = hideStems[gi]; geTou = true; break; }
      }
      var gIdx = E.STEMS.indexOf(geStem);
      var gGod = E.shiShen(dgIdx, gIdx);
      var geMap = { "正官": "正官格", "七杀": "七杀格", "正财": "正财格", "偏财": "偏财格", "正印": "正印格", "偏印": "偏印格", "食神": "食神格", "伤官": "伤官格", "比肩": "建禄格", "劫财": "羊刃格" };
      var geName = geMap[gGod] || (isZh ? "月令本气格" : "Month-Qi Structure");
      var shun = (gGod === "正官" || gGod === "正财" || gGod === "偏财" || gGod === "正印" || gGod === "食神");
      h.push('<div class="panel"><h3>' + jp.ge.secName + "</h3>" + quote(jp.ge.quote.t, jp.ge.quote.s, jp.ge.quote.ve));
      h.push("<p><b>" + jp.ge.calcLab + "：</b>" + (isZh
        ? "月令「" + res.pillars.month.zhi + "」藏 " + hideStems.join("、") + "；" + (geTou ? "「" + geStem + "」透于天干" : "以本气取用") + "，据《子平真诠》法定为【" + geName + "】。"
        : "Hidden in the month: " + hideStems.join(", ") + "; " + geStem + (geTou ? " emerges in the stems" : " taken as primary qi") + " — structure: [" + geName + "].") + "</p>");
      h.push("<p>" + (jp.ge.geTexts[geName] || "") + "</p>");
      h.push('<p><span class="tag ' + (shun ? "green" : "red") + '">' + gGod + " · " + (shun ? jp.ge.shunNi.shun : jp.ge.shunNi.ni) + "</span></p></div>");
    }

    /* 三 · 月令提纲与调候 */
    var mz = res.pillars.month.zhi;
    var season = null;
    ["寅卯辰", "巳午未", "申酉戌", "亥子丑"].forEach(function (kk) { if (kk.indexOf(mz) >= 0) season = jp.seasons[kk]; });
    h.push('<div class="panel"><h3>' + S2.c + "</h3>" + quote(jp.jishan.t, jp.jishan.s, jp.jishan.ve));
    if (season) h.push("<p>" + (isZh ? mz + "月 · " : "") + season.n + " — " + (isZh ? "当令：" : "commands: ") + season.w + "。 " + season.t + "</p>");
    if (jp.tiaohou) {
      var th = jp.tiaohou.table[dm.gan] && jp.tiaohou.table[dm.gan][mz];
      if (th) h.push("<p><b>" + (jp.tiaohou.title || "调候") + "（" + dm.gan + " × " + mz + "月）：" + th.t + "</b> — " + th.d + '</p><p><small>' + jp.tiaohou.src + "</small></p>");
    }
    h.push("</div>");

    /* 四 · 旺衰与喜用 */
    h.push('<div class="panel"><h3>' + S2.d + "</h3>" + quote(jp.ditian.t, jp.ditian.s, jp.ditian.ve));
    h.push("<p>" + jp.strength[dm.strength] + "</p>");
    h.push("<p><b>" + jp.favLab + "：</b></p>");
    dm.favorable.forEach(function (e) {
      h.push('<p><span class="tag green">' + elName(e) + "</span> " + ((jp.favApp && jp.favApp[e]) || "") + "</p>");
    });
    h.push("</div>");

    /* 五 · 十神与四柱（深度） */
    h.push('<div class="panel"><h3>' + S2.e + "</h3>" + quote(jp.hezhi.t, jp.hezhi.s, jp.hezhi.ve));
    var items = [
      [res.pillars.year.gan, 0],
      [res.pillars.month.gan, 1],
      [res.pillars.day.hide[0], 2],
      [res.pillars.hour.gan, 3]
    ];
    items.forEach(function (it, idx) {
      var gI = E.STEMS.indexOf(it[0]);
      if (gI < 0) return;
      var god = E.shiShen(dgIdx, gI);
      var lab = idx === 2 ? BU.pillars[2] + "（" + res.pillars.day.zhi + "）" : BU.pillars[idx];
      var deepTxt = (jp.godsDeep && jp.godsDeep[god]) || (jp.gods && jp.gods[god]) || "";
      h.push("<p><b>" + lab + "</b> · " + godName(god) + "</p><p>" + deepTxt + '</p><p><small>' + (jp.pos && jp.pos[idx] || "") + "</small></p>");
    });
    h.push("</div>");

    /* 六 · 大运节奏 */
    h.push('<div class="panel"><h3>' + S2.f + "</h3><p>" + jp.dayunNote + "</p>");
    var age = new Date().getFullYear() - (res.birthYear || 0) + 1;
    var cur = null;
    res.dayun.forEach(function (d) { if (!cur && age >= d.startAge && age <= d.endAge) cur = d; });
    if (cur) {
      var g4 = E.STEMS.indexOf(cur.gz[0]);
      var god4 = g4 >= 0 ? E.shiShen(dgIdx, g4) : "";
      h.push("<p><b>" + jp.dayunLead.replace("{gz}", cur.gz).replace("{a}", cur.startAge).replace("{b}", cur.endAge).replace("{god}", godName(god4)) + "</b> " + ((jp.godsDeep && jp.godsDeep[god4]) || "") + "</p>");
    } else {
      h.push("<p>" + (jp.dayunNone || "") + "</p>");
    }
    h.push("</div>");

    /* 七 · 纳音年命（深度） */
    var ny = res.pillars.year.nayin || "—";
    var nyDeep = jp.nayin ? jp.nayin[ny] : null;
    h.push('<div class="panel"><h3>' + S2.g + "</h3><p>" + jp.nayinLine.replace("{ny}", ny) + "</p>");
    if (nyDeep) h.push("<p>" + nyDeep + "</p>");
    h.push('<p><small>' + (jp.nayinSrc || "") + "</small></p></div>");

    return h.join("\n");
  }

  function renderFull(res) {
    var dm = res.dayMaster;
    var missHtml = res.missing.length
      ? res.missing.map(function (e) { return '<span class="tag red">' + elName(e) + "</span>"; }).join(" ")
      : '<span class="tag green">' + BU.allFive + "</span>";
    var hideInfo = Object.keys(res.pillars).map(function (k) {
      var p = res.pillars[k];
      return '<div class="tag">' + p.gan + p.zhi + " " + BU.hideLab + " " + p.hide.join(" ") + "</div>";
    }).join(" ");
    var rows = res.dayun.slice(0, 9).map(function (dy) {
      return "<tr><td>" + dy.gz + "</td><td>" + dy.startAge + "–" + dy.endAge + "</td><td>" + dy.startYear + "–" + dy.endYear + "</td></tr>";
    }).join("");
    return '<div class="panel"><h3>' + BU.yourFour + " <small>" + res.lunarText + " · " + BU.signWord + " " + (isZh ? dm.animalZh : dm.animal) + "</small></h3>" +
      '<div class="pillars">' +
      pillarCard(BU.pillars[0], res.pillars.year) +
      pillarCard(BU.pillars[1], res.pillars.month) +
      pillarCard(BU.pillars[2], res.pillars.day) +
      pillarCard(BU.pillars[3], res.pillars.hour) +
      "</div>" +
      (res.hourUnknown ? "<p><small>" + BU.unknownWarn + "</small></p>" : "") +
      (res.correctionMinutes ? "<p><small>" + BU.corr.replace("{n}", res.correctionMinutes) + "</small></p>" : "") +
      "</div>" +
      '<div class="panel"><h3>' + BU.fiveTitle + "</h3>" + elBar(res) +
      "<p>" +
      '<span class="tag">' + BU.dayMaster + ": <b>" + dm.gan + " (" + elName(dm.element) + ")</b></span> " +
      '<span class="tag">' + BU.strengthLab + ": " + BU.strength[dm.strength] + "</span> " +
      BU.favorable + ": " + favTags(dm.favorable) + "<br>" +
      BU.missing + ": " + missHtml +
      "</p></div>" +
      '<div class="panel"><h3>' + BU.hidden + "</h3><p>" + hideInfo + "</p></div>" +
      renderReading(res) +
      (res.dayun.length
        ? '<div class="panel"><h3>' + BU.luck + '</h3><div class="scrollx"><table class="t"><tr><th>' + BU.th[0] + "</th><th>" + BU.th[1] + "</th><th>" + BU.th[2] + "</th></tr>" + rows + "</table></div>"
        : '<div class="panel">') +
      '<p class="disclaimer mb0">' + BU.discFull + "</p></div>";
  }

  /* ---------- 五行分析深度版（引《尚书·洪范》《五行大义》《三命通会》《素问》《滴天髓》） ---------- */
  function renderElements(res) {
    var dm = res.dayMaster;
    var WX = BU.wx;
    var h = [];

    h.push('<div class="panel"><h3>' + BU.fiveTitlePg + "</h3>" + elBar(res) +
      "<p>" +
      '<span class="tag">' + BU.dayMaster + ": <b>" + dm.gan + " (" + elName(dm.element) + ")</b></span> " +
      '<span class="tag">' + BU.strengthLab + ": " + BU.strength[dm.strength] + "</span> " +
      BU.favorable + ": " + favTags(dm.favorable) +
      "</p></div>");

    /* 语言包未提供五行经典文案时，退回旧版简版 */
    if (!WX || !WX.sec) {
      h.push('<div class="panel"><p><b>' + BU.elSays + "：</b>" + BU.personality[dm.element] + "</p>" +
        "<p>" + BU.strongestIs + " <b>" + res.strongest + " (" + BU.els[res.strongest] + ")</b>. " +
        (res.missing.length ? BU.missingNote + " <b>" + res.missing.map(function (e) { return elName(e); }).join(", ") + "</b>" + BU.balanceNote : BU.presentNote) + "</p>" +
        '<p class="disclaimer mb0">' + BU.discEl + "</p></div>");
      return h.join("\n");
    }

    var SH = elShare(res);
    var dmEl = dm.element;
    var LAB = WX.lab || {};

    /* 一 · 洪范五行本义 */
    h.push('<div class="panel"><h3>' + WX.sec.a + "</h3>" + quote(WX.hongfan.t, WX.hongfan.s, WX.hongfan.ve));
    var hf = WX.hongfanEl[dmEl];
    if (hf) {
      h.push('<div class="wx-kv">' +
        kv(LAB.nature, hf.z) + kv(LAB.taste, hf.wei) +
        kv(WX.dmLab || BU.dayMaster, elName(dmEl)) + "</div>");
      h.push("<p>" + esc(hf.d) + "</p>");
    }
    if (BU.personality && BU.personality[dmEl]) h.push("<p><b>" + BU.elSays + "：</b>" + BU.personality[dmEl] + "</p>");
    h.push("</div>");

    /* 二 · 五行体性 */
    h.push('<div class="panel"><h3>' + WX.sec.b + "</h3>" + quote(WX.tixing.t, WX.tixing.s, WX.tixing.ve));
    if (WX.tixing.quote2) h.push(quote(WX.tixing.quote2.t, WX.tixing.quote2.s));
    var tx = WX.tixing.el[dmEl];
    if (tx) {
      h.push("<p><b>" + elName(dmEl) + "</b></p>");
      h.push(quote(tx.t, tx.s));
      h.push("<p>" + esc(tx.d) + "</p>");
    }
    h.push("</div>");

    /* 三 · 力量诊断 · 旺衰分级 */
    h.push('<div class="panel"><h3>' + WX.sec.c + "</h3>" + quote(WX.levels.t, WX.levels.s, WX.levels.ve));
    h.push('<div class="wx-levels">');
    E.EL_ORDER.forEach(function (e) {
      var d = SH.by[e], L = WX.levels[d.lv] || {};
      h.push('<div class="wx-lv"><div class="wx-el">' + esc(elName(e)) +
        (e === dmEl ? "<i>" + esc(WX.dmHint) + "</i>" : "") +
        '</div><div><span class="wx-grade g' + d.lv + '">' + esc(L.n) + "</span>" +
        (d.sea ? '<span class="wx-sea s-' + d.sea + '" title="' + esc(WX.seasLab) + '">' +
          esc(WX.seasName[d.sea]) + "</span>" : "") +
        '<span class="wx-desc">' + esc(WX.scoreLab) + " " + d.score.toFixed(1) +
        " · " + esc(WX.shareLab) + " " + Math.round(d.share * 100) + "%" +
        " · " + esc(WX.selfLab) + " " + Math.round(d.self * 100) + "%</span>" +
        '<p class="wx-desc">' + esc(L.d) + "</p>");
      var ou = WX.overUnder[e];
      if (ou && d.lv >= 4 && ou.over) h.push(quote(ou.over.t, ou.over.s, ou.over.d));
      else if (ou && d.lv <= 1 && ou.under) h.push(quote(ou.under.t, ou.under.s, ou.under.d));
      h.push("</div></div>");
    });
    h.push("</div>");
    /* 月令旺相休囚死：说明数量占比看不出来的那一层 */
    if (SH.season) {
      var SN = WX.seasName, ord = ["wang", "xiang", "xiu", "qiu", "si"];
      h.push('<p class="wx-grp">' + esc(WX.seasLab) + "：" + esc(SH.monthZhi) + "月 · " +
        esc(elName(SH.season.el)) + esc(SN.wang) + "</p>");
      h.push('<div class="wx-flow wx-seas">');
      ord.forEach(function (k, i) {
        if (i) h.push('<span class="arw">›</span>');
        h.push('<span class="node s-' + k + '">' + esc(elName(SH.season[k])) +
          "<em>" + esc(SN[k]) + "</em></span>");
      });
      h.push("</div>");
      h.push("<p><small>" + esc(WX.seasNote) + "</small></p>");
    }
    if (WX.overUnder.note) h.push("<p><small>" + esc(WX.overUnder.note) + "</small></p>");
    h.push('<p class="disclaimer mb0">' + esc(WX.disc) + "</p></div>");

    /* 四 · 生克制化断语 */
    h.push('<div class="panel"><h3>' + WX.sec.d + "</h3>" + quote(WX.shengke.t, WX.shengke.s, WX.shengke.ve));
    var SK = WX.shengke, picked = [], seen = {};
    function addRule(grp, el) {
      var r = SK[grp] && SK[grp][el];
      if (!r || seen[grp + el]) return;
      seen[grp + el] = 1;
      picked.push({ g: grp, label: SK.grpLabel[grp] || "", t: r.t, ve: r.ve });
    }
    E.EL_ORDER.forEach(function (e) {
      var lv = SH.by[e].lv;
      if (lv >= 4) { addRule("A", e); addRule("F", e); }
      else if (lv <= 1) addRule("E", e);
    });
    /* 日主与其余四行的生克关系：生我 / 我生 / 我克 / 克我 */
    var resEl = GEN_PREV[dmEl];        /* 生我 · 印 */
    var outEl = GEN_NEXT[dmEl];        /* 我生 · 食伤 */
    var weaEl = GEN_NEXT[outEl];       /* 我克 · 财 */
    var offEl = GEN_PREV[resEl];       /* 克我 · 官杀 */
    if (SH.by[resEl].lv >= 4) addRule("B", dmEl);
    if (SH.by[outEl].lv >= 4) addRule("C", dmEl);
    if (SH.by[weaEl].lv >= 4) addRule("D", dmEl);
    if (SH.by[dmEl].lv >= 4) { addRule("A", dmEl); addRule("F", dmEl); }
    if (SH.by[dmEl].lv <= 2 && SH.by[offEl].lv >= 4) addRule("E", dmEl);

    if (picked.length) {
      var lastG = null;
      picked.forEach(function (r) {
        if (r.g !== lastG) {
          h.push('<p class="wx-grp">' + esc(r.label) + "</p>");
          lastG = r.g;
        }
        h.push('<div class="wx-rule"><span class="zh-quote">「' + esc(r.t) + "」</span>" +
          '<span class="wx-classic">' + esc(r.ve) + "</span></div>");
      });
    } else {
      h.push("<p>" + esc(WX.shengke.none) + "</p>");
    }

    /* 五行流通 */
    h.push(quote(WX.flow.t, WX.flow.s, WX.flow.ve));
    if (!res.missing.length) {
      h.push("<p>" + esc(WX.flow.ok) + "</p>");
    } else {
      res.missing.forEach(function (e) {
        h.push("<p>" + esc(WX.flow.broken)
          .replace("{a}", esc(elName(e)))
          .replace("{b}", esc(elName(GEN_PREV[e])))
          .replace("{c}", esc(elName(e))) + "</p>");
      });
    }
    h.push('<div class="wx-flow">');
    var node = "木";
    for (var fi = 0; fi < 6; fi++) {
      if (fi) h.push('<span class="arw">→</span>');
      h.push('<span class="node' + (res.scores[node] >= 0.01 ? "" : " off") + '">' + esc(elName(node)) + "</span>");
      node = GEN_NEXT[node];
    }
    h.push("</div></div>");

    /* 五 · 五脏情志 */
    var OR = WX.organs, og = OR.el[dmEl];
    h.push('<div class="panel"><h3>' + WX.sec.e + "</h3>" + quote(OR.t, OR.s, OR.ve));
    if (og) {
      h.push('<div class="wx-kv">' +
        kv(LAB.zang, og.zang) + kv(LAB.fu, og.fu) + kv(LAB.ti, og.ti) +
        kv(LAB.qiao, og.qiao) + kv(LAB.zhi, og.zhi) + kv(LAB.wei, og.wei) +
        kv(LAB.se, og.se) + kv(LAB.fang, og.fang) + kv(LAB.ji, og.ji) +
        kv(LAB.yin, og.yin) + kv(LAB.de, og.de) + "</div>");
      h.push("<p>" + esc(og.d) + "</p>");
      h.push("<p><b>" + esc(LAB.shengKe) + "：</b>" + esc(og.sheng) + "</p>");
    }
    h.push("<p><small>" + esc(OR.note) + "</small></p></div>");

    /* 六 · 补益与调候 */
    var RM = WX.remedy;
    h.push('<div class="panel"><h3>' + WX.sec.f + "</h3>" + quote(RM.t, RM.s, RM.ve));
    h.push("<p><b>" + esc(WX.favLead) + "：</b>" + esc(WX.favNote) + "</p>");
    dm.favorable.forEach(function (e) {
      var r = RM.el[e];
      if (!r) return;
      h.push("<p><b>" + esc(elName(e)) + "</b> — " + esc(r.d) + "</p>");
      h.push('<div class="wx-kv">' +
        kv(LAB.fang, r.fang) + kv(LAB.se, r.se) + kv(LAB.ji, r.ji) +
        kv(LAB.num, r.num) + kv(LAB.shi, r.shi) + kv(LAB.wu, r.wu) +
        kv(LAB.de, r.de) + "</div>");
    });
    h.push("<p><small>" + esc(RM.note) + "</small></p>");
    h.push('<p class="disclaimer mb0">' + esc(WX.disc) + "</p></div>");

    return h.join("\n");
  }

  window.BaziUI = { initForm: initForm };
})();
