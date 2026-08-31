/* iching.js v3 — full classical casting result: 卦辞+彖传+象传+动爻爻辞+变卦 */
(function () {
  "use strict";
  var ZH = document.documentElement.lang.indexOf("zh") === 0;
  var T = ZH ? {
    btn: "起卦", tossing: "投掷铜钱中……心诚则灵", judgment: "卦辞",
    tuan: "《彖》曰", xiang: "《象》曰", changing: "动爻", to: "之卦",
    noChanging: "六爻皆不动，以本卦卦辞占之。",
    readFull: "阅读本卦详解", changingLab: "动爻爻辞（占断之要）",
    transLab: "变卦", noTrans: "六爻安静，无变卦。以本卦断之。",
    tip: "占法：一爻动看动爻爻辞；多爻动以本卦为主、变卦为终局参考；六爻皆静以卦辞断之。",
    disc: "卦辞、爻辞引自《周易》古经；《彖》《象》为《易传》十大翼文；现代白话为 BaziOracle 参考解读。"
  } : {
    btn: "Cast the Coins", tossing: "Tossing the coins… hold your question in mind",
    judgment: "Judgment", tuan: "Tuan Commentary", xiang: "The Image Says",
    changing: "Changing lines", to: "transforms to",
    noChanging: "No changing lines — read the primary hexagram as is.",
    readFull: "Read full interpretation", changingLab: "Changing Line Texts (the key to your reading)",
    transLab: "Transformed Hexagram", noTrans: "No transformation — read the primary hexagram alone.",
    tip: "Method: one changing line — read that line's text. Multiple lines — primary hexagram for the situation, transformed for the outcome. No changing lines — read the judgment alone.",
    disc: "Judgments and line texts from the Zhouyi (public domain); Tuan and Xiang from the Ten Wings; modern renderings by BaziOracle."
  };

  var btn = document.getElementById("ic-btn");
  if (!btn) return;
  btn.textContent = T.btn;
  var stage = document.getElementById("ic-stage");
  var out = document.getElementById("ic-out");
  var HEX = null, TUAN = null, YAO = null, XIANG = null;

  Promise.all([
    fetch("/assets/data/hexagrams.json").then(function (r) { return r.json(); }),
    fetch("/assets/data/tuan.json").then(function (r) { return r.json(); }),
    fetch("/assets/data/yao.json").then(function (r) { return r.json(); })
  ]).then(function (results) {
    HEX = results[0]; TUAN = results[1]; YAO = results[2];
    return fetch("/assets/data/xiang.json").then(function (r) { return r.json(); });
  }).then(function (d) { XIANG = d; });

  function findHex(lines) { for (var i = 0; i < HEX.length; i++) if (HEX[i].lines === lines) return HEX[i]; return null; }
  function hexVisual(lines) {
    return '<span class="hexgram">' + lines.split("").map(function (c) {
      return '<span class="hexline' + (c === "0" ? " yin" : "") + '"></span>';
    }).join("") + "</span>";
  }
  function yaoName(pos, isYang) {
    var names = ["初", "二", "三", "四", "五", "上"];
    var num = isYang ? "九" : "六";
    if (pos === 0) return names[0] + num;
    if (pos === 5) return names[5] + num;
    return num + names[pos];
  }

  btn.addEventListener("click", function () {
    if (!HEX || !TUAN || !YAO || !XIANG) return;
    btn.disabled = true;
    stage.innerHTML = "<p>" + T.tossing + "</p><p style='font-size:2rem'>⛲</p>";
    var lines = "", changing = [], throws = 0;
    var timer = setInterval(function () {
      throws++;
      var sum = 0;
      for (var c = 0; c < 3; c++) sum += Math.random() < 0.5 ? 3 : 2;
      if (sum === 9) { changing.push(throws); lines = "1" + lines; }
      else if (sum === 8) { lines = "0" + lines; }
      else if (sum === 7) { lines = "1" + lines; }
      else { changing.push(throws); lines = "0" + lines; }
      if (throws >= 6) {
        clearInterval(timer);
        var h = findHex(lines);
        var transformed = null;
        if (changing.length) {
          var t = lines.split("");
          changing.forEach(function (pos) { t[pos - 1] = t[pos - 1] === "1" ? "0" : "1"; });
          transformed = findHex(t.join(""));
        }
        var yaoNames = ["初", "二", "三", "四", "五", "上"];
        var h3 = "<h3>" + (ZH ? "第" + h.n + "卦 · " + h.name + "（" + h.py + "）" : "Hexagram " + h.n + " · " + h.name + " (" + h.py + ") — " + h.en) + "</h3>";
        var judgBlock = "<p style='font-size:1.15rem'><b>" + T.judgment + "：</b>" + h.judg + "</p>";
        var tuanTxt = TUAN[h.n] || "";
        var tuanBlock = tuanTxt ? '<blockquote class="classic" style="margin:8px 0"><span class="zh-quote">' + tuanTxt + "</span>" + (ZH ? "" : '<span style="display:block;font-size:.9rem;color:var(--ink2);margin-top:6px">The Tuan (judgment commentary) from the Ten Wings explains the hexagram name and its core dynamic.</span>') + '<cite class="cite">——《易传·彖传》</cite></blockquote>' : "";
        var xiangTxt = XIANG[h.n] || {};
        var xiangBlock = xiangTxt.z ? '<blockquote class="classic" style="margin:8px 0"><span class="zh-quote">「象曰：' + xiangTxt.z + '」</span>' + (ZH ? "" : '<span style="display:block;font-size:.9rem;color:var(--ink2);margin-top:6px">' + xiangTxt.e + "</span>") + '<cite class="cite">——《易传·象传》</cite></blockquote>' : "";
        var themeBlock = "<p style='margin:10px 0'>" + (ZH ? h.theme : (h.themeEn || h.judgEn)) + "</p>";
        var changingBlock = "";
        if (changing.length) {
          var yaoTexts = changing.map(function (pos) {
            var isYang = lines[pos - 1] === "1";
            var nm = yaoName(pos - 1, isYang);
            var txt = (YAO[h.n] && YAO[h.n][pos - 1]) || "";
            return "<p><b>" + nm + "：</b>" + txt + "</p>";
          }).join("");
          changingBlock = '<div class="panel" style="margin-top:14px;border-left:4px solid var(--verm)"><h3 style="color:var(--verm)">' + T.changingLab + "</h3>" + yaoTexts + "</div>";
        } else {
          changingBlock = "<p>" + T.noChanging + "</p>";
        }
        var transBlock = "";
        if (transformed) {
          transBlock = '<div class="panel" style="margin-top:10px"><h3>' + T.transLab + " · " + (ZH ? "第" + transformed.n + "卦 " + transformed.name : "Hexagram " + transformed.n + " · " + transformed.name + " (" + transformed.py + ")") + "</h3>" +
            hexVisual(transformed.lines) +
            '<p style="margin-top:10px"><b>' + T.judgment + "：</b>" + transformed.judg + "</p></div>";
        }
        out.innerHTML = '<div class="panel center">' +
          h3 + hexVisual(h.lines) +
          '<div style="margin-top:14px;text-align:left">' +
          judgBlock + tuanBlock + xiangBlock + themeBlock +
          changingBlock + transBlock +
          "</div>" +
          '<p style="margin-top:10px"><a class="btn small" href="' + (document.body.getAttribute("data-prefix") || "") + '/iching/hexagram-' + h.n + '/">' + T.readFull + "</a></p>" +
          '<p class="disclaimer" style="text-align:left">' + T.tip + "</p>" +
          '<p class="disclaimer" style="text-align:left;margin-top:4px">' + T.disc + "</p>" +
          "</div>";
        btn.disabled = false;
        out.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 550);
  });
})();
