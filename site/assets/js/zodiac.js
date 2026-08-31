/* zodiac.js — compatibility checker, config via window.L10N.zc + window.ZODIAC_DATA */
(function () {
  "use strict";
  var EN = {
    a: "Your sign", b: "Their sign", btn: "Check Match",
    score: "Match score",
    same: { t: "Same Sign Pair", b: "Two of the same sign mirror each other — deep understanding with shared blind spots. Generally favorable with occasional friction." },
    six: { t: "Six Harmony — A Heaven-Made Match", b: "This is one of the classical Six Harmony pairs — complementary temperaments and natural rapport, excellent for love or partnership." },
    trio: { t: "Three Harmony — Kindred Ambition", b: "You share a Three Harmony trine — energies on the same frequency, each magnifying the other." },
    clash: { t: "Clash — Opposing Currents", b: "Clashing signs create friction. With clear boundaries and divided roles, opposition can turn into complementary strength." },
    harm: { t: "Harm — Silent Drain", b: "Harming pairs drain each other in small ways — extra honesty and communication are the antidote." },
    neutral: { t: "Neutral — It's Up to You", b: "No major interaction in classical terms — the pairing is what you make of it." }
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
    else { v = T.neutral; v._score = 72; }
    var score = v._score || 75;
    out.className = "result show";
    out.innerHTML = '<div class="panel"><h3>' + nameOf(a) + " × " + nameOf(b) + " — " + v.t + "</h3>" +
      '<p><span class="tag ' + (score >= 80 ? "green" : score >= 60 ? "" : "red") + '">' + T.score + ": " + score + "/100</span></p><p>" + v.b + "</p></div>";
    out.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();
