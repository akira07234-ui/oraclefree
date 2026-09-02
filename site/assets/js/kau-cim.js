/* kau-cim.js — Guanyin fortune stick draw, config via window.L10N.kc + window.KAU_LOC */
(function () {
  "use strict";
  var EN = { btn: "Shake & Draw", meaning: "Meaning", theme: "Theme", advice: "Advice",
    full: "Full interpretation", gradeOf: function (t) { return t; } };
  var T = (window.L10N && window.L10N.kc) || EN;
  for (var k in EN) if (T[k] === undefined) T[k] = EN[k];
  var LOC = window.KAU_LOC || {};
  var pageEn = (document.documentElement.lang || "en").indexOf("en") === 0;
  var ZH = (document.documentElement.lang || "").indexOf("zh") === 0;
  var reduceMotion = false;
  try { reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var applyStatic = pageEn || !!(window.L10N && window.L10N.kc);

  var cup = document.getElementById("kc-cup");
  if (!cup) return;
  var btn = document.getElementById("kc-btn");
  if (btn && applyStatic) btn.textContent = T.btn;
  var out = document.getElementById("kc-out");

  function luckBadge(type) {
    var lv = type.slice(0, 2);
    var cls = lv === "上签" ? "green" : lv === "下签" ? "red" : "";
    var lab = T.grades ? (T.grades[lv] || type) : type;
    var palace = (lab === lv) ? type.slice(2) : "";
    return '<span class="tag ' + cls + '">' + lab + (palace || "") + "</span>";
  }

  btn.addEventListener("click", function () {
    btn.disabled = true;
    cup.classList.add("kc-shaking");
    out.className = "result";
    out.innerHTML = "";
    setTimeout(function () {
      cup.classList.remove("kc-shaking");
      var rendered = false;
      function finish() { if (rendered) return; rendered = true; fetchRender(); }
      if (reduceMotion) { finish(); return; }
      /* one stick leaps out of the cup while the draw resolves */
      var fly = document.createElement("span");
      fly.className = "kc-fly";
      cup.appendChild(fly);
      try {
        var anim = fly.animate([
          { transform: "translateY(30px) rotate(0deg)", opacity: 0 },
          { transform: "translateY(-132px) rotate(-14deg)", opacity: 1, offset: 0.35 },
          { transform: "translateY(-150px) rotate(-10deg)", opacity: 1, offset: 0.55 },
          { transform: "translateY(90px) rotate(10deg)", opacity: 0 }
        ], { duration: 950, easing: "cubic-bezier(.3,.4,.5,1)" });
        anim.onfinish = function () { if (fly.parentNode) fly.parentNode.removeChild(fly); };
      } catch (e) { if (fly.parentNode) fly.parentNode.removeChild(fly); }
      setTimeout(finish, 550);
    }, 1500);
  });

  function fetchRender() {
    fetch("/assets/data/guanyin.json").then(function (r) { return r.json(); }).then(function (data) {
      var s = data[Math.floor(Math.random() * data.length)];
      var loc = LOC[s.id] || null;
      var stamp = '<span class="seal-stamp" aria-hidden="true">' + (ZH ? "灵" : "靈") + "</span>";
      out.innerHTML =
        '<div class="panel center">' + stamp +
        '<div class="kc-stick" style="margin:0 auto 14px">' + s.id + " · " + (loc ? loc.t : s.title) + "</div>" +
        "<h3>" + (loc ? loc.t : s.title) + (loc ? "" : "") + "</h3>" +
        "<p>" + luckBadge(s.type) + "</p>" +
        '<p class="kc-poem">' + s.poetry.split("。").filter(Boolean).map(function (l) { return '<span class="l">' + l + "。</span>"; }).join("") + "</p>" +
        "<p><b>" + T.meaning + "：</b>" + s.meaning + "</p>" +
        (loc && loc.x ? "<p>" + loc.x + "</p>" : "") +
        (loc && loc.a ? "<p><b>" + T.advice + ":</b> " + loc.a + "</p>" : "") +
        '<p><a class="btn small" href="' + (document.documentElement.getAttribute("data-prefix") || "") + '/kau-cim/sign-' + s.id + '/">' + T.full + "</a></p>" +
        "</div>";
      out.className = "result show";
      out.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
      btn.disabled = false;
    }).catch(function () { btn.disabled = false; });
  }
})();
