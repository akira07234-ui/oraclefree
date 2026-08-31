/* almanac.js v2 — daily almanac with localized term translations + day summary */
(function () {
  "use strict";
  var ZH = document.documentElement.lang.indexOf("zh") === 0;
  var T = (window.L10N && window.L10N.al) || {
    lunar: "Lunar", dayPillar: "Day Pillar", month: "Month", clash: "Clash", clashes: "Clashes",
    shaDir: "Sha direction", ausp: "AUSPICIOUS FOR", avoid: "AVOID", lucky: "Lucky stars", malefic: "Malefic",
    note: "Traditional almanac guidance, for cultural reference.",
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    pick: "Pick a date", btn: "Read the Almanac",
    shaLocal: {},
    clashNote: "The 'Clash' tells you which zodiac animal is in direct opposition to today's earthly branch.",
    luckyNote: "Lucky stars are favorable celestial influences. Malefic stars are disruptive influences.",
    yiNote: "Green items are supported by today's energy.",
    jiNote: "Red items are opposed by today's energy.",
    daySummary: "Day Summary"
  };
  var TERMS = window.ALM_TERMS || {};
  var lang = document.documentElement.lang.split("-")[0] || "en";
  var terms = TERMS[lang] ? TERMS[lang].terms : TERMS.en ? TERMS.en.terms : {};

  function termTrans(term) { return terms[term] || ""; }

  var form = document.getElementById("al-form");
  if (!form) return;
  var out = document.getElementById("al-out");
  var dateInput = form.querySelector("[name=date]");
  var today = new Date();
  dateInput.value = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");

  var SHA = { "申子辰": "南", "寅午戌": "北", "巳酉丑": "东", "亥卯未": "西" };
  var BR = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  var ANIMAL = ZH ? ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"] : ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
  var SHA_EN = { "南": "South", "北": "North", "东": "East", "西": "West" };
  var YI_LAB = ZH ? "宜" : T.ausp || "FAVORABLE";
  var JI_LAB = ZH ? "忌" : T.avoid || "AVOID";

  function termLine(x, isGreen) {
    var tr = termTrans(x);
    var cls = isGreen ? "green" : "red";
    var html = '<span class="tag ' + cls + '">' + x + "</span>";
    if (tr && !ZH) html += ' <small style="color:var(--muted);font-size:.78rem;display:inline-block;margin-left:4px">' + tr + "</small>";
    return html;
  }

  function render() {
    var p = dateInput.value.split("-");
    var solar = Solar.fromYmd(+p[0], +p[1], +p[2]);
    var lunar = solar.getLunar();
    var dayZhi = lunar.getDayZhi();
    var zi = BR.indexOf(dayZhi);
    var chongZhi = BR[(zi + 6) % 12];
    var sha = "—";
    for (var trio in SHA) if (trio.indexOf(dayZhi) >= 0) { sha = SHA[trio]; break; }
    var shaShown = T.shaLocal ? (T.shaLocal[sha] || sha) : (SHA_EN[sha] || sha);
    var yi = lunar.getDayYi().slice(0, 12);
    var ji = lunar.getDayJi().slice(0, 12);
    var fest = (solar.getFestivals() || []).concat(lunar.getFestivals() || []).join(" · ");
    var zhDate = lunar.getYearInGanZhi() + "年 " + lunar.getMonthInChinese() + "月" + lunar.getDayInChinese();
    var wd = T.weekdays[solar.getWeek()];
    var dayGz = lunar.getDayInGanZhi();

    var yiHtml = yi.map(function (x) { return termLine(x, true); }).join(" ");
    var jiHtml = ji.map(function (x) { return termLine(x, false); }).join(" ");

    var clashNoteHtml = "";
    var lang0 = document.documentElement.lang.split("-")[0] || "en";
    var termData = TERMS[lang0];
    if (termData) {
      clashNoteHtml = '<div class="panel" style="margin-top:14px;background:#fbf3df;border-left:4px solid var(--gold)"><h4 style="margin:0 0 8px;color:var(--gold)">' +
        (ZH ? "如何读懂黄历" : "How to Read the Almanac") + "</h4>" +
        '<p style="margin:0 0 8px"><b>' + T.clash + '：</b>' + (termData.clashNote || "") + "</p>" +
        '<p style="margin:0 0 8px"><b>' + T.lucky + '：</b>' + (termData.luckyNote || "") + "</p>" +
        '<p style="margin:0 0 8px"><b>' + YI_LAB + '：</b>' + (termData.yiNote || "") + "</p>" +
        '<p style="margin:0"><b>' + JI_LAB + '：</b>' + (termData.jiNote || "") + "</p></div>";
    }

    var daySummaryHtml = "";
    if (ZH) {
      daySummaryHtml = '<div class="panel" style="margin-top:14px;background:#f6efdb;border-left:4px solid var(--gold)"><h4 style="margin:0 0 6px;color:var(--gold)">今日概览</h4><p style="margin:0">日干支「' + dayGz + "」，冲" + chongZhi + "煞" + sha + "。属" + ANIMAL[(zi + 6) % 12] + "者今日行事宜低调。吉神护佑之事宜主动推进，凶煞所临之事宜避。</p></div>";
    }

    out.className = "result show";
    out.innerHTML =
      '<div class="panel">' +
      "<h3>" + (+p[1]) + " / " + (+p[2]) + " · " + wd + (fest ? ' <span class="tag red">' + fest + "</span>" : "") + "</h3>" +
      "<p><b>" + T.lunar + "：</b>" + zhDate + " · " + lunar.getYearShengXiao() + "</p>" +
      "<p><b>" + T.dayPillar + "：</b>" + dayGz + "　<b>" + T.month + "：</b>" + lunar.getMonthInGanZhi() + "</p>" +
      "<p><b>" + T.clash + "：</b>" + T.clashes + " " + chongZhi + " (" + ANIMAL[(zi + 6) % 12] + ") · " + T.shaDir + ": " + shaShown + "</p>" +
      '<div class="grid g2"><div><h3 style="color:var(--ok)">' + YI_LAB + '</h3><p>' + yiHtml + "</p></div>" +
      '<div><h3 style="color:var(--verm)">' + JI_LAB + "</h3><p>" + jiHtml + "</p></div></div>" +
      "<p><b>" + T.lucky + "：</b>" + lunar.getDayJiShen().slice(0, 6).join("、") + "　<b>" + T.malefic + "：</b>" + lunar.getDayXiongSha().slice(0, 4).join("、") + "</p>" +
      "</div>" +
      daySummaryHtml + clashNoteHtml +
      '<p class="disclaimer mb0">' + T.note + "</p></div>";
  }

  form.addEventListener("submit", function (ev) { ev.preventDefault(); render(); });
  render();
})();
