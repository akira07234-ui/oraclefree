/* jiaobei.js v3 — top-down realistic throw: arc from the hand, spin, mid-air face flip, wood clack */
(function () {
  "use strict";
  var EN = {
    throw: "Cast the Blocks", throw3: "Throw %d of 3", threeNote: "Three throws complete one question",
    sheng: "Sacred Answer — Yes", xiao: "Laughing — Unclear", yin: "No — Rejected",
    shengD: "The divine approves; proceed with your question.",
    xiaoD: "The answer is unclear — calm your mind and ask again.",
    yinD: "Not granted; postpone or change course.",
    finTitle: "Three Throws Complete",
    fin: ["Not granted — reconsider.", "Partly granted — keep working at it.", "Largely granted — the way is open.", "Three sacred throws — highly auspicious!"],
    restart: "Ask Another", copy: "Copy Result", copied: "Copied ✓",
    qPh: "Your question (optional, hold it in mind)",
    share: "I cast the moon blocks at BaziOracle asking \"{q}\": {r}", none: "(not given)"
  };
  var T = (window.L10N && window.L10N.jb) || EN;
  for (var k in EN) if (T[k] === undefined) T[k] = EN[k];
  var pageEn = (document.documentElement.lang || "en").indexOf("en") === 0;
  var applyStatic = pageEn || !!(window.L10N && window.L10N.jb);

  var btn = document.getElementById("jb-btn");
  if (!btn) return;
  var qEl = document.getElementById("jb-q");
  var verdictEl = document.getElementById("jb-verdict");
  var descEl = document.getElementById("jb-desc");
  var histEl = document.getElementById("jb-hist");
  var roundEl = document.getElementById("jb-round");
  var again = document.getElementById("jb-again");
  var copy = document.getElementById("jb-copy");
  var muteBtn = document.getElementById("jb-mute");
  var pieces = [document.getElementById("jb-b1"), document.getElementById("jb-b2")];
  var shadows = [], bodies = [];
  pieces.forEach(function (p) {
    shadows.push(p ? p.querySelector(".jb-sh") : null);
    bodies.push(p ? p.querySelector(".jb-body") : null);
  });

  if (applyStatic) {
    if (qEl && T.qPh) qEl.placeholder = T.qPh;
    if (roundEl) roundEl.textContent = T.threeNote;
    if (again) again.textContent = T.restart;
    if (copy) copy.textContent = T.copy;
    btn.textContent = T.throw;
  }

  var reduceMotion = false;
  try { reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  /* ---------- sound ---------- */
  var muted = false, actx = null, noiseBuf = null;
  try { muted = localStorage.getItem("jbMuted") === "1"; } catch (e) {}
  function muteIcon() { if (muteBtn) muteBtn.textContent = muted ? "🔇" : "🔊"; }
  muteIcon();
  if (muteBtn) muteBtn.addEventListener("click", function () {
    muted = !muted;
    try { localStorage.setItem("jbMuted", muted ? "1" : "0"); } catch (e) {}
    muteIcon();
  });
  function ensureAudio() {
    if (muted) return null;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!actx) actx = new AC();
      if (actx.state === "suspended" && actx.resume) { try { actx.resume(); } catch (e) {} }
      if (!noiseBuf) {
        noiseBuf = actx.createBuffer(1, 2400, actx.sampleRate);
        var d = noiseBuf.getChannelData(0);
        for (var i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2.6);
      }
      return actx;
    } catch (e) { return null; }
  }
  function clack(delay) {
    try {
      var ctx = ensureAudio();
      if (!ctx) return;
      var t = ctx.currentTime + (delay || 0);
      var src = ctx.createBufferSource(); src.buffer = noiseBuf;
      var bp = ctx.createBiquadFilter(); bp.type = "bandpass";
      bp.frequency.value = 1700 + Math.random() * 600; bp.Q.value = 1.1;
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.55, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.085);
      src.connect(bp); bp.connect(g); g.connect(ctx.destination); src.start(t);
      var o = ctx.createOscillator();
      o.frequency.setValueAtTime(190, t); o.frequency.exponentialRampToValueAtTime(85, t + 0.07);
      var g2 = ctx.createGain();
      g2.gain.setValueAtTime(0.32, t); g2.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      o.connect(g2); g2.connect(ctx.destination); o.start(t); o.stop(t + 0.1);
    } catch (e) { /* audio is decorative — never break the flow */ }
  }

  /* ---------- animation (top-down) ---------- */
  var round = 0, scores = [], q = "", busy = false, running = [];

  function handPose(i) { return "translate(" + (i === 0 ? -26 : 26) + "px,116px) rotate(" + (i === 0 ? -8 : 8) + "deg) scale(0.85)"; }
  function resetBlocks() {
    running.forEach(function (a) { try { a.cancel(); } catch (e) {} });
    running = [];
    [0, 1].forEach(function (i) {
      if (!pieces[i]) return;
      pieces[i].style.transform = handPose(i);
      pieces[i].classList.remove("dome");
      if (shadows[i]) { shadows[i].style.opacity = ""; shadows[i].style.transform = ""; }
    });
  }
  resetBlocks();

  function landSpot(i) {
    var side = i === 0 ? -1 : 1;
    return {
      x: side * (58 + Math.random() * 42),
      y: -38 + Math.random() * 52,
      tilt: Math.random() * 34 - 17
    };
  }

  function fly(i, dome, onLand) {
    var p = pieces[i], sh = shadows[i], body = bodies[i];
    var spot = landSpot(i);
    var fromX = i === 0 ? -26 : 26, fromY = 116;
    var spins = (380 + Math.random() * 320) * (Math.random() < 0.5 ? -1 : 1);
    var total = 660 + Math.random() * 140;
    var landRot = spins + spot.tilt;

    var arc = p.animate([
      { transform: "translate(" + fromX + "px," + fromY + "px) rotate(0deg) scale(0.85)", offset: 0, easing: "cubic-bezier(.3,.3,.55,1)" },
      { transform: "translate(" + (fromX + spot.x * 0.42) + "px," + (fromY * 0.34 + spot.y * 0.52) + "px) rotate(" + spins * 0.55 + "deg) scale(1.14)", offset: 0.5, easing: "cubic-bezier(.2,.5,.4,1)" },
      { transform: "translate(" + spot.x + "px," + spot.y + "px) rotate(" + landRot + "deg) scale(1)", offset: 1 }
    ], { duration: total, fill: "forwards" });
    if (sh) sh.animate([
      { opacity: 0.3, transform: "scale(0.82)" },
      { opacity: 0.12, transform: "scale(0.6)", offset: 0.5 },
      { opacity: 0.5, transform: "scale(1)" }
    ], { duration: total, fill: "forwards" });
    running.push(arc);

    /* mid-air turnover: squeeze + swap face at the apex */
    setTimeout(function () {
      try {
        if (body) body.animate([
          { transform: "scaleX(1)" },
          { transform: "scaleX(0.12)", offset: 0.5 },
          { transform: "scaleX(1)" }
        ], { duration: 190, easing: "ease-in-out" });
      } catch (e) {}
      if (dome) p.classList.add("dome"); else p.classList.remove("dome");
    }, total * 0.42);

    arc.onfinish = function () {
      try {
        p.style.transform = "translate(" + spot.x + "px," + spot.y + "px) rotate(" + landRot + "deg) scale(1)";
        if (sh) { sh.style.opacity = ""; sh.style.transform = ""; }
        try { arc.cancel(); } catch (e) {}
        clack(0);
        if (reduceMotion) { if (onLand) onLand(); return; }
        var sq = p.animate([
          { transform: p.style.transform + " scale(1)" },
          { transform: p.style.transform + " scale(1.06,0.9)", offset: 0.4 },
          { transform: p.style.transform + " scale(1)" }
        ], { duration: 210 });
        running.push(sq);
        sq.onfinish = function () { if (onLand) onLand(); };
      } catch (e) {
        p.style.transform = "translate(" + spot.x + "px," + spot.y + "px) rotate(" + landRot + "deg) scale(1)";
        if (onLand) onLand();
      }
    };
    /* safety net: flow must complete even if finish events are lost */
    setTimeout(function () { if (onLand) onLand(); }, total + 650);
  }

  function reveal(el) { el.classList.remove("jb-show"); void el.offsetWidth; el.classList.add("jb-show"); }

  btn.addEventListener("click", function () {
    if (busy) return;
    busy = true;
    ensureAudio();
    if (round === 0) {
      scores = []; q = (qEl.value || "").trim();
      verdictEl.classList.remove("jb-show");
      verdictEl.textContent = ""; descEl.textContent = ""; histEl.textContent = "";
      resetBlocks();
    }
    round++;
    roundEl.textContent = T.throw3.replace("%d", round);

    var v1 = Math.random() < 0.5 ? 0 : 1;
    var v2 = Math.random() < 0.5 ? 0 : 1;
    var landed = 0, done = false;
    function onBoth() {
      landed++;
      if (done || landed < 2) return;
      done = true;
      var sum = v1 + v2, cls, txt, dsc;
      if (sum === 1) { cls = "sheng"; txt = T.sheng; dsc = T.shengD; scores.push(1); }
      else if (sum === 0) { cls = "xiao"; txt = T.xiao; dsc = T.xiaoD; scores.push(0); }
      else { cls = "yin"; txt = T.yin; dsc = T.yinD; scores.push(0); }
      verdictEl.className = "jb-verdict " + cls;
      verdictEl.textContent = txt;
      reveal(verdictEl);
      descEl.textContent = dsc;
      histEl.textContent = (histEl.textContent ? histEl.textContent + " · " : "") + txt.split("—")[0].trim();
      if (round >= 3) {
        var total = scores.reduce(function (a, b) { return a + b; }, 0);
        setTimeout(function () {
          verdictEl.textContent = T.finTitle + " · " + T.fin[total];
          reveal(verdictEl);
          descEl.textContent = scores.map(function (s, i) { return (i + 1) + ": " + (s ? "✓" : "×"); }).join("  ");
          btn.style.display = "none";
          if (again) again.style.display = "inline-block";
          if (copy) copy.style.display = "inline-block";
          busy = false;
        }, 850);
        round = 0;
        return;
      }
      busy = false;
    }
    setTimeout(function () {
      fly(0, v1 === 1, onBoth);
      fly(1, v2 === 1, onBoth);
    }, reduceMotion ? 0 : 80);
  });

  if (again) again.addEventListener("click", function () {
    round = 0; scores = [];
    btn.style.display = "inline-block";
    again.style.display = "none";
    if (copy) copy.style.display = "none";
    verdictEl.classList.remove("jb-show");
    verdictEl.textContent = ""; descEl.textContent = ""; histEl.textContent = "";
    resetBlocks();
  });

  if (copy) copy.addEventListener("click", function () {
    var text = T.share.replace("{q}", q || T.none).replace("{r}", verdictEl.textContent);
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { copy.textContent = T.copied; });
  });
})();
