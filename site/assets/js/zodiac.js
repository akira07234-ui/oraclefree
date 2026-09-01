/* zodiac.js — compatibility checker, config via window.L10N.zc + window.ZODIAC_DATA */
(function () {
  "use strict";
  var EN = {
    a: "Your sign", b: "Their sign", btn: "Check Match",
    score: "Match score",
    same: { t: "Same Sign (Bi He)", b: "Same signs mirror each other — deep understanding, shared blind spots. For 辰午酉亥 (Dragon, Horse, Rooster, Pig) a same-branch 'self-punishment' can add stubborn clashes; mutual reminders keep it balanced." },
    six: { t: "Six Harmony — A Heaven-Made Match", b: "子丑·寅亥·卯戌·辰酉·巳申·午未 — the classical Six Harmony pairs, from the old 'sun–moon conjunction' idea (Xieji Bianfang Shu). A one-to-one hidden bond; excellent for love or partnership." },
    trio: { t: "Three Harmony — Kindred Ambition", b: "申子辰水·亥卯未木·寅午戌火·巳酉丑金 — a full birth-to-treasury elemental trine (Sanming Tonghui). Three on the same frequency, each magnifying the other; ideal for building things together." },
    clash: { t: "Clash — Opposing Currents", b: "子午·丑未·寅申·卯酉·辰戌·巳亥 — the six oppositions, branches seven apart, like winter against summer (Sanming Tonghui). Clash brings motion and friction; with clear roles it turns into complementary energy." },
    harm: { t: "Harm — A Clash Behind the Bond", b: "子未·丑午·寅巳·卯辰·申亥·酉戌 — the six harms, born when one sign's clash breaks the other's harmony (Sanming Tonghui). A quiet drain; honesty is the antidote." },
    xing: { t: "Punishment — Friction Over Bonds", b: "子卯 (incivility), 丑戌未 (reliance on power), 寅巳申 (ingratitude) — the three punishments (Sanming Tonghui). Rules rub against goodwill; clear boundaries turn it into mutual sharpening." },
    neutral: { t: "Neutral — It's Up to You", b: "No direct harmony, clash, harm or punishment between the two branches — a neutral tie. How it turns out is what you make of it; check the two charts' favorable elements for more." }
  };
  var T = (window.L10N && window.L10N.zc) || EN;
  for (var k in EN) if (T[k] === undefined) T[k] = EN[k];

  var form = document.getElementById("zc-form");
  if (!form) return;
  var out = document.getElementById("zc-out");
  var DATA = window.ZODIAC_DATA || [];
  var byKey = {}; DATA.forEach(function (z) { byKey[z.key] = z; });
  var KEYS = DATA.map(function (z) { return z.key; });

  var SIX = { "ox-rat": 1, "pig-tiger": 1, "dog-rabbit": 1, "dragon-rooster": 1, "monkey-snake": 1, "goat-horse": 1 };
  var TRIOS = [["rat", "dragon", "monkey"], ["tiger", "horse", "dog"], ["rabbit", "goat", "pig"], ["snake", "rooster", "ox"]];
  var CHASH = { "horse-rat": 1, "goat-ox": 1, "monkey-tiger": 1, "rabbit-rooster": 1, "dog-dragon": 1, "pig-snake": 1 };
  var HAI = { "goat-rat": 1, "horse-ox": 1, "snake-tiger": 1, "dragon-rabbit": 1, "pig-monkey": 1, "dog-rooster": 1 };
  var XING = { "rabbit-rat": 1, "dog-ox": 1, "dog-goat": 1 };

  function kk(a, b) { return [a, b].sort().join("-"); }
  function trio(a, b) { return TRIOS.some(function (t) { return t.indexOf(a) >= 0 && t.indexOf(b) >= 0; }); }
  function nameOf(key) { return byKey[key] ? (byKey[key].local || byKey[key].en || key) : key; }

  [form.a, form.b].forEach(function (sel) {
    KEYS.forEach(function (k) {
      var o = document.createElement("option");
      o.value = k; o.textContent = nameOf(k);
      sel.appendChild(o);
    });
  });

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var a = form.a.value, b = form.b.value;
    var v;
    if (a === b) v = T.same;
    else if (SIX[kk(a, b)]) { v = T.six; v._score = 95; }
    else if (trio(a, b)) { v = T.trio; v._score = 88; }
    else if (CHASH[kk(a, b)]) { v = T.clash; v._score = 40; }
    else if (HAI[kk(a, b)]) { v = T.harm; v._score = 50; }
    else if (XING[kk(a, b)]) { v = T.xing; v._score = 55; }
    else { v = T.neutral; v._score = 72; }
    var score = v._score || 75;
    out.className = "result show";
    out.innerHTML = '<div class="panel"><h3>' + nameOf(a) + " × " + nameOf(b) + " — " + v.t + "</h3>" +
      '<p><span class="tag ' + (score >= 80 ? "green" : score >= 60 ? "" : "red") + '">' + T.score + ": " + score + "/100</span></p><p>" + v.b + "</p></div>";
    out.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();
