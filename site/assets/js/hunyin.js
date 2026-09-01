/* hunyin.js v2 — 八字合婚：四维打分 + 化解之道（男左女右，中英双语） */
(function () {
  "use strict";
  var E = window.BaziEngine;
  if (!E || !document.getElementById("hy-m")) return;
  var ZH = (document.documentElement.lang || "").indexOf("zh") === 0;

  var L = ZH ? {
    him: "男方（左）", her: "女方（右）", unknown: "时辰未知", btn: "开始合婚打分",
    score: "总分", verdict: ["天作之合", "上等婚配", "中平之配，相处的艺术", "需要磨合的一对", "慎重考量，多沟通多体谅"],
    cats: ["属相配对", "五行互补", "日柱夫妻宫", "大运同步"],
    secZo: "属相配对：", secWx: "五行互补", secRz: "日柱与夫妻宫", secDy: "大运走势", secOther: "其他流派参考", secHj: "化解之道",
    dayZhiRel: "日支关系：", dayGanRel: "日主天干：", scoreOf: "得分",
    nayinLine: "纳音五行：男方年命「{a}」，女方年命「{b}」——民间亦有以纳音论生克的流派，属民俗参考。",
    ziweiLine: "更细致的合婚可用紫微斗数将两人命盘互相比对；面相、手相则属辅助观感。",
    sameNote: "两人五行分布相近，无明显的互补或相克。",
    wuxTable: ["五行", "男方", "女方"],
    dyTable: ["男方大运", "女方大运", "同步度"], dyNote: "俗话说「夫妻同林鸟，大运要同到」——两人各自当前与后续五步大运对照如下：",
    sync: ["同步", "相生", "相异"], du: "步对照",
    disclaim: "合婚结果由传统规则简化计算。姻缘大事，终究看两个人的真心与经营。",
    errDate: "日期无效（请检查双方日期，特殊日期可能不存在）",
    pillars: ["年柱", "月柱", "日柱", "时柱"],
    dmLine: "日主", nyLine: "纳音", animal: "属",
    folk: {
      "申酉": "民间口诀有「鸡猴不到头」之说——但申酉同属金，五行并不相克，此说多为趣谈，不必当真。",
      "寅未": "民间有「羊落虎口」之说——然寅与未并无刑冲，属趣谈一类，姑妄听之。",
      "寅辰": "民间有「龙虎相斗」的说法——寅辰亦无正式刑冲，聊备一格。",
      "酉戌": "俗语「鸡犬不宁」正是从酉戌相害来的。"
    },
    rel: {
      "六合": "{k}六合——地支暗合，天然的默契。", "三合": "{k}三合，同气连枝。",
      "六冲": "{k}六冲——正面对撞，需要刻意经营与分工。", "六害": "{k}相害——细节里互相消耗，多坦白沟通可解。",
      "相刑": "{k}相刑——规矩与摩擦并存，立好边界反而和睦。", "平": "{k}无刑冲合害——缘分中性，成色靠二人经营。"
    },
    sanheTxt: { "子辰申": "申子辰合成水局", "寅午戌": "寅午戌合成火局", "卯未亥": "亥卯未合成木局", "巳酉丑": "巳酉丑合成金局" },
    gods: {
      "比肩": "两人日主同气（比劫）——像朋友也像镜子，懂彼此也容易较劲。",
      "正财": "女方日主是男方的「财星」——传统命书中男主外的经典组合。",
      "偏财": "女方日主是男方的「财星」——传统命书中男主外的经典组合。",
      "正官": "男方日主是女方的「官星」——传统命书中「夫为妻纲」的组合。",
      "七杀": "男方日主是女方的「官星」——传统命书中「夫为妻纲」的组合。",
      "正印": "一方日主生另一方（印星关系）——滋养型相处，被生的一方有福气。",
      "偏印": "一方日主生另一方（印星关系）——滋养型相处，被生的一方有福气。",
      "食神": "一方日主生另一方（食伤关系）——欣赏型的相处，看得到对方的好。",
      "伤官": "一方日主生另一方（食伤关系）——欣赏型的相处，看得到对方的好。",
      "default": "日干相克——谁管谁并不重要，商量着来最好。"
    },
    wxComp: "{e}：一方明显偏弱、另一方恰好旺盛——互补。", wxSame: "两人日主同属{e}，同气相求。",
    wxSheng: "{a}生{b}：{who}日主生{who2}日主，滋养型的搭配。", wxKe: "{a}克{b}：日主五行相克，注意语气与分寸。",
    wxMiss: "{w}——正所谓五行互补。",
    hy: {
      title: "化解之道（依古籍）",
      intro: "以下化解之法，依《协纪辨方书》五行方位择吉之说与《玉匣记》属相调解之通行本整理；民俗参考，姻缘在人。",
      chongTitle: "冲则用合解（六合调解）",
      chong: "{k}相冲，古法「以合解冲」：可借「{m1}」或「{m2}」之生肖调解——具体做法如：婚房装饰或随身饰物中带有调解生肖的意象；若计划生育，属调解生肖的宝宝亦是民间所说的桥梁。",
      haiTitle: "害刑用三合解",
      hai: "{k}相害（刑），可用三合局化解：属「{t}」的朋友、同事多走动，或家居东方（木位）布置绿植，取「生」之意。",
      wxTitle: "五行互补化解",
      wxGood: "两人五行天然互补（{d}），是古籍所称的好搭配——保持即可：家居多用双方共同喜用之色。",
      wxBad: "两人五行相克处较多，化解之法：家居与穿搭多用双方共同的喜用神颜色；重要决策多选双方喜用神的方位与时辰。",
      dyTitle: "大运异步化解",
      dy: "两人大运节奏不同步时，《滴天髓》所谓「知命」即是解法：知道对方正在低谷或高峰，便不会错怪对方的冷淡或忙碌——「知命者不怨天」。",
      generalTitle: "通用化解（择吉与相处之道）",
      general: "① 择吉日成婚：《协纪辨方书》为乾隆钦定的择日权威，避开双方生肖的冲日、选双方喜用神当值之日；② 婚房主色取两人八字共同喜用的五行之色；③ 民间有「相冲者聚少离多反成美」之说——适当的独处空间反而化解日常冲撞；④ 终极化解是《易经》的道理：阴阳互补、各守其位——谁强谁弱不重要，重要的是位置对了。",
      quote: { t: "一阴一阳之谓道。", s: "《周易·系辞》", d: "阴阳相反相成，正是夫妻之道的总纲——冲不可怕，不怕互补才可怕。" }
    }
  } : {
    him: "Him (left)", her: "Her (right)", unknown: "Unknown hour", btn: "Score Our Match",
    score: "Score", verdict: ["A heaven-made match", "An excellent match", "Balanced — the art of living together", "A pair that needs polishing", "Handle with care and honest talk"],
    cats: ["Zodiac", "Elements", "Spouse Palace", "Luck Sync"],
    secZo: "Zodiac: ", secWx: "Five-Element Balance", secRz: "Day Pillar & Spouse Palace", secDy: "Luck Cycles", secOther: "Other Schools", secHj: "Remedies (from the classics)",
    dayZhiRel: "Day branches: ", dayGanRel: "Day stems: ", scoreOf: "score",
    nayinLine: "NaYin: his year \"{a}\", her year \"{b}\" — the folk school reads pairings by NaYin images.",
    ziweiLine: "Finer matching compares two Zi Wei charts; face and palm reading remain auxiliary.",
    sameNote: "The two charts distribute similarly — no sharp complement or clash.",
    wuxTable: ["Element", "Him", "Her"],
    dyTable: ["His luck", "Her luck", "Sync"], dyNote: "\"Birds of a couple should fly the same weather\" — five current and upcoming luck pillars, side by side:",
    sync: ["synced", "generating", "divergent"], du: " pillars",
    disclaim: "Computed by simplified traditional rules, Marriage is written by two people's hearts.",
    errDate: "Invalid date (please check both dates)",
    pillars: ["Year", "Month", "Day", "Hour"],
    dmLine: "DM", nyLine: "NaYin", animal: "",
    folk: {
      "申酉": "The folk rhyme says \"rooster and monkey won't grow old together\" — yet both are Metal, no clash in the elements; take it as folklore.",
      "寅未": "The folk saying \"goat falls into the tiger's mouth\" — no formal clash between Yin and Wei; folklore only.",
      "寅辰": "\"Dragon and tiger fight\" — no formal punishment between Yin and Chen; noted for completeness.",
      "酉戌": "\"Rooster and dog never rest\" comes from the You-Xu harm."
    },
    rel: {
      "六合": "{k} Six Harmony — hidden accord, natural rapport.", "三合": "{k} Three Harmony — same current.",
      "六冲": "{k} Six Clash — head-on friction; needs structure.", "六害": "{k} Harm — quiet drain; honesty is the antidote.",
      "相刑": "{k} Punishment — friction over boundaries; clear roles help.", "平": "{k} neutral — no interaction; the pair is what you make it."
    },
    sanheTxt: { "子辰申": "Shen-Zi-Chen water frame", "寅午戌": "Yin-Wu-Xu fire frame", "卯未亥": "Hai-Mao-Wei wood frame", "巳酉丑": "Si-You-Chou metal frame" },
    gods: {
      "比肩": "Same qi as peers — like friends and mirrors; deep understanding with rivalry.",
      "正财": "Her day stem is his Wealth star — the classic 'provider' pairing.",
      "偏财": "Her day stem is his Wealth star — the classic 'provider' pairing.",
      "正官": "His day stem is her Officer star — the classic traditional pairing.",
      "七杀": "His day stem is her Officer star — the classic traditional pairing.",
      "正印": "One nourishes the other (resource) — the caretaking pairing; the fed one is blessed.",
      "偏印": "One nourishes the other (resource) — the caretaking pairing.",
      "食神": "One produces the other (output) — the admiring pairing.",
      "伤官": "One produces the other (output) — the admiring pairing.",
      "default": "Day stems clash — who leads doesn't matter; deciding together does."
    },
    wxComp: "{e}: one lacking exactly what the other has — complementary.", wxSame: "Both day masters are {e} — same qi.",
    wxSheng: "{a} generates {b}: {who}'s day master feeds {who2}'s — a nurturing pair.", wxKe: "{a} controls {b}: mind tone and timing.",
    wxMiss: "{w} — the classic five-element complement.",
    hy: {
      title: "Remedies (from the classics)",
      intro: "The remedies below follow the Xie Ji Bian Fang Shu (direction, color, date selection) and the folk mediation lore of Yu Xia Ji; cultural reference only.",
      chongTitle: "Resolve clash with harmony (Six-Harmony mediation)",
      chong: "{k} clash — the classical cure is 'harmony resolves clash': invite {m1} or {m2} as mediator — e.g., decor or keepsakes carrying the mediating animal; in folk custom a child of the mediating sign is called the bridge.",
      haiTitle: "Resolve harm with the trine",
      hai: "{k} harm/punishment — resolve via the trine: more time with friends of {t}, or green plants in the east (wood corner) of the home.",
      wxTitle: "Element remedies",
      wxGood: "Your elements complement naturally ({d}) — the classic good pairing: keep it; decorate in both shared favorable colors.",
      wxBad: "Several elemental frictions: decorate and dress in both charts' shared favorable colors; schedule big decisions on days and directions of your favorable elements.",
      dyTitle: "When luck cycles diverge",
      dy: "When your decades run out of sync, Di Tian Sui's 'knowing fate' is the cure: knowing the other is in a trough or a peak, you stop misreading their silence or busyness.",
      generalTitle: "Universal remedies (dates & the way of living)",
      general: "1) Marry on a chosen date per the Xie Ji Bian Fang Shu, avoiding clash days of both signs; 2) paint the home in both charts' shared favorable colors; 3) folk wisdom for clashing pairs: a little distance dissolves daily friction; 4) the ultimate remedy is the Yi Jing's own law: one yin, one yang — position matters more than strength.",
      quote: { t: "一阴一阳之谓道。", s: "Zhou Yi, Xi Ci", d: "Yin and yang complete each other — the very rule of marriage: clash isn't the problem; failing to complement is." }
    }
  };

  var BR = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  var ZOD = ZH ? ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"] : ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
  var LIUHE = { "子": "丑", "丑": "子", "寅": "亥", "亥": "寅", "卯": "戌", "戌": "卯", "辰": "酉", "酉": "辰", "巳": "申", "申": "巳", "午": "未", "未": "午" };
  var SANHE = [["子", "辰", "申"], ["寅", "午", "戌"], ["卯", "未", "亥"], ["巳", "酉", "丑"]];
  var CHONG = { "子午": 1, "午子": 1, "丑未": 1, "未丑": 1, "寅申": 1, "申寅": 1, "卯酉": 1, "酉卯": 1, "辰戌": 1, "戌辰": 1, "巳亥": 1, "亥巳": 1 };
  var HAI = { "子未": 1, "未子": 1, "丑午": 1, "午丑": 1, "寅巳": 1, "巳寅": 1, "卯辰": 1, "辰卯": 1, "申亥": 1, "亥申": 1, "酉戌": 1, "戌酉": 1 };
  var XING = { "子卯": 1, "卯子": 1, "寅巳": 1, "巳寅": 1, "巳申": 1, "申巳": 1, "丑未": 1, "未丑": 1, "丑戌": 1, "戌丑": 1, "未戌": 1, "戌未": 1, "辰辰": 1, "午午": 1, "酉酉": 1, "亥亥": 1 };

  function bkey(a, b) {
    return [BR.indexOf(a), BR.indexOf(b)].sort(function (x, y) { return x - y; }).map(function (i) { return BR[i]; }).join("");
  }
  function inSanhe(a, b) { return SANHE.some(function (t) { return t.indexOf(a) >= 0 && t.indexOf(b) >= 0; }); }
  function sanheFrame(a, b) {
    var f = SANHE.filter(function (t) { return t.indexOf(a) >= 0 || t.indexOf(b) >= 0; })[0];
    return f ? f.join("") : "";
  }
  function branchRel(a, b) {
    var k = bkey(a, b);
    if (LIUHE[a] === b) return { c: "六合", k: k };
    if (inSanhe(a, b)) return { c: "三合", k: k };
    if (CHONG[k]) return { c: "六冲", k: k };
    if (HAI[k]) return { c: "六害", k: k };
    if (XING[k]) return { c: "相刑", k: k };
    return { c: "平", k: k };
  }
  function relText(r) {
    var t = L.rel[r.c].replace("{k}", r.k);
    if (r.c === "三合") { var f = L.sanheTxt[sanheFrame(r.k[0], r.k[1])]; if (f) t = f + "，同气连枝。"; }
    return t;
  }

  /* ---------- 表单 ---------- */
  var fm = document.getElementById("hy-m"), ff = document.getElementById("hy-f"), btn = document.getElementById("hy-btn"), out = document.getElementById("hy-out");
  if (!fm || !ff || !btn) return;
  [fm, ff].forEach(function (form) {
    var hourSel = form.querySelector("[name=hour]");
    var unk = document.createElement("option");
    unk.value = "-1"; unk.textContent = L.unknown;
    hourSel.appendChild(unk);
    for (var h = 0; h < 24; h++) {
      var idx = Math.floor(((h + 1) % 24) / 2);
      var o = document.createElement("option");
      o.value = h; o.textContent = (h < 10 ? "0" : "") + h + ":00 · " + BR[idx];
      hourSel.appendChild(o);
    }
  });

  function readForm(form) {
    var fd = new FormData(form);
    return { y: +fd.get("year"), m: +fd.get("month"), d: +fd.get("day"), hour: +fd.get("hour") < 0 ? null : +fd.get("hour"), minute: +(fd.get("minute") || 0) };
  }

  /* ---------- 评分 ---------- */
  function scoreZodiac(ra, rb) {
    var res = branchRel(ra, rb);
    var base = { "六合": 30, "三合": 26, "六冲": 4, "六害": 6, "相刑": 8 }[res.c] || 15;
    var folk = L.folk[bkey(ra, rb)] || "";
    return { pts: base, lab: res.c, txt: relText(res), folk: folk, rel: res };
  }
  function scoreWuxing(ra, rb) {
    var txts = [], pts = 10, comp = [];
    E.EL_ORDER.forEach(function (e) {
      var a = ra.scores[e], b = rb.scores[e];
      if ((a < 1 && b >= 2) || (b < 1 && a >= 2)) { comp.push(e); txts.push(L.wxComp.replace("{e}", e)); }
    });
    pts += Math.min(comp.length, 3) * 5;
    var ea = E.STEM_EL[E.STEMS.indexOf(ra.dayMaster.gan)];
    var eb = E.STEM_EL[E.STEMS.indexOf(rb.dayMaster.gan)];
    var iA = E.EL_ORDER.indexOf(ea), iB = E.EL_ORDER.indexOf(eb);
    if (ea === eb) { pts += 4; txts.push(L.wxSame.replace("{e}", ea)); }
    else if ((iA + 1) % 5 === iB) { pts += 7; txts.push(L.wxSheng.replace("{a}", ea).replace("{b}", eb).replace("{who}", ZH ? "男方" : "his").replace("{who2}", ZH ? "女方" : "her")); }
    else if ((iB + 1) % 5 === iA) { pts += 7; txts.push(L.wxSheng.replace("{a}", eb).replace("{b}", ea).replace("{who}", ZH ? "女方" : "her").replace("{who2}", ZH ? "男方" : "his")); }
    else if ((iA + 2) % 5 === iB || (iB + 2) % 5 === iA) { pts -= 4; txts.push(L.wxKe.replace("{a}", ea).replace("{b}", eb)); }
    var miss = [];
    E.EL_ORDER.forEach(function (e) {
      if (ra.scores[e] < 0.01 && rb.scores[e] >= 0.5) miss.push((ZH ? "男缺" : "he lacks ") + e + (ZH ? "女有" : " she has ") + e);
      if (rb.scores[e] < 0.01 && ra.scores[e] >= 0.5) miss.push((ZH ? "女缺" : "she lacks ") + e + (ZH ? "男有" : " he has ") + e);
    });
    if (miss.length) txts.push(miss.join("; ") + L.wxMiss.replace("{w}", ""));
    return { pts: Math.max(0, Math.min(25, Math.round(pts))), txts: txts, comp: comp };
  }
  function scoreRizhu(ra, rb) {
    var dzA = ra.pillars.day.zhi, dzB = rb.pillars.day.zhi;
    var rel = branchRel(dzA, dzB);
    var dzPts = { "六合": 11, "三合": 8, "平": 5, "六害": 2, "相刑": 1, "六冲": 0 }[rel.c];
    var gM = E.STEMS.indexOf(ra.dayMaster.gan), gF = E.STEMS.indexOf(rb.dayMaster.gan);
    var godF = E.shiShen(gM, gF), godM = E.shiShen(gF, gM);
    var stemPts, stemTxt;
    if (godF === "正财" || godF === "偏财" || godM === "正官" || godM === "七杀") { stemPts = 11; stemTxt = L.gods[godF === "正财" || godF === "偏财" ? godF : godM]; }
    else if (godF === "正印" || godF === "偏印" || godM === "正印" || godM === "偏印" || godF === "食神" || godF === "伤官") { stemPts = 12; stemTxt = L.gods[godF] || L.gods[godM]; }
    else if (godF === "比肩" || godF === "劫财") { stemPts = 9; stemTxt = L.gods["比肩"]; }
    else { stemPts = 8; stemTxt = L.gods["default"]; }
    return { pts: Math.max(0, Math.min(25, dzPts + stemPts)), dz: rel, dzPts: dzPts, stemTxt: stemTxt };
  }
  function scoreDayun(ra, rb) {
    var ageM = new Date().getFullYear() - (ra.birthYear || 0) + 1;
    var ageF = new Date().getFullYear() - (rb.birthYear || 0) + 1;
    function cur(res, age) { for (var i = 0; i < res.dayun.length; i++) { var d = res.dayun[i]; if (age >= d.startAge && age <= d.endAge) return i; } return 1; }
    var iM = cur(ra, ageM), iF = cur(rb, ageF);
    var rows = [], pts = 0;
    for (var k = 0; k < 5; k++) {
      var da = ra.dayun[iM + k], db = rb.dayun[iF + k];
      if (!da || !db) break;
      var ea = E.STEM_EL[E.STEMS.indexOf(da.gz[0])];
      var eb = E.STEM_EL[E.STEMS.indexOf(db.gz[0])];
      var w = 0, tag = 2;
      if (ea === eb) { w = 4; tag = 0; }
      else if ((E.EL_ORDER.indexOf(ea) + 1) % 5 === E.EL_ORDER.indexOf(eb) || (E.EL_ORDER.indexOf(eb) + 1) % 5 === E.EL_ORDER.indexOf(ea)) { w = 2.5; tag = 1; }
      pts += w;
      rows.push("<tr><td>" + da.gz + "（" + ea + "）</td><td>" + db.gz + "（" + eb + "）</td><td>" + L.sync[tag] + "</td></tr>");
    }
    return { pts: Math.min(20, Math.round(pts)), rows: rows };
  }

  /* ---------- 化解之道 ---------- */
  function remedies(male, female, zo, wx, rz, dy) {
    var h = ['<div class="panel"><h3>' + L.hy.title + '</h3><p><small>' + L.hy.intro + "</small></p>"];
    h.push('<blockquote class="classic" style="margin:8px 0"><span class="zh-quote">「' + L.hy.quote.t + '」</span><cite class="cite">—— ' + L.hy.quote.s + "</cite></blockquote>");
    /* 冲害刑化解：以合解冲 */
    var conflicts = [];
    if (zo.lab === "六冲") conflicts.push(zo.rel);
    if (rz.dz.c === "六冲") conflicts.push(rz.dz);
    var harms = [];
    if (zo.lab === "六害" || zo.lab === "相刑") harms.push(zo.rel);
    if (rz.dz.c === "六害" || rz.dz.c === "相刑") harms.push(rz.dz);
    if (conflicts.length) {
      var r0 = conflicts[0];
      var m1 = LIUHE[r0.k[0]], m2 = LIUHE[r0.k[1]];
      h.push("<h3>" + L.hy.chongTitle + "</h3><p>" + L.hy.chong.replace("{k}", r0.k).replace("{m1}", m1 + ZOD[BR.indexOf(m1)]).replace("{m2}", m2 + ZOD[BR.indexOf(m2)]) + "</p>");
    }
    if (harms.length) {
      var r1 = harms[0];
      var t = sanheFrame(r1.k[0], r1.k[1]);
      h.push("<h3>" + L.hy.haiTitle + "</h3><p>" + L.hy.hai.replace("{k}", r1.k).replace("{t}", t) + "</p>");
    }
    /* 五行化解 */
    h.push("<h3>" + L.hy.wxTitle + "</h3><p>" + (wx.comp.length ? L.hy.wxGood.replace("{d}", wx.comp.join("、")) : (wx.txts.some(function (t) { return t.indexOf("克") >= 0 || t.indexOf("controls") >= 0; }) ? L.hy.wxBad : L.hy.wxGood.replace("{d}", "—"))) + "</p>");
    /* 大运化解 */
    if (dy.pts < 10) h.push("<h3>" + L.hy.dyTitle + "</h3><p>" + L.hy.dy + "</p>");
    /* 通用 */
    h.push("<h3>" + L.hy.generalTitle + "</h3><p>" + L.hy.general + "</p>");
    h.push("</div>");
    return h.join("\n");
  }

  function pillarMini(res, title) {
    var cards = ["year", "month", "day", "hour"].map(function (kk, i) {
      var p = res.pillars[kk];
      return '<div class="pillar"><div class="lab">' + L.pillars[i] + '</div><div class="gz"><span class="y">' + p.gan + "</span>" + p.zhi + '</div><div class="meta">' + p.ganEl + p.zhiEl + "</div></div>";
    }).join("");
    return '<div class="panel"><h3>' + title + " · " + L.animal + res.dayMaster.animalZh + "</h3>" +
      '<div class="pillars">' + cards + "</div>" +
      '<p style="margin:10px 0 0"><small>' + L.dmLine + " " + res.dayMaster.gan + "（" + res.dayMaster.element + "）· " + L.nyLine + "「" + res.pillars.year.nayin + "」</small></p></div>";
  }

  function render(male, female) {
    var zo = scoreZodiac(male.pillars.year.zhi, female.pillars.year.zhi);
    var wx = scoreWuxing(male, female);
    var rz = scoreRizhu(male, female);
    var dy = scoreDayun(male, female);
    var total = zo.pts + wx.pts + rz.pts + dy.pts;
    var vi = total >= 85 ? 0 : total >= 70 ? 1 : total >= 55 ? 2 : total >= 40 ? 3 : 4;
    var cats = [
      { n: L.cats[0], g: zo.pts, m: 30, d: zo.lab },
      { n: L.cats[1], g: wx.pts, m: 25, d: wx.comp.length ? (ZH ? "互补 ✓" : "complement ✓") : "—" },
      { n: L.cats[2], g: rz.pts, m: 25, d: rz.dz.c },
      { n: L.cats[3], g: dy.pts, m: 20, d: dy.rows.length + L.du }
    ];
    var h = [];
    h.push('<div class="panel center"><div class="hy-big">' + total + "<small>/100</small></div><div style=\"font-size:1.3rem;font-weight:700;color:var(--verm)\">" + L.verdict[vi] + "</div>" +
      '<div class="hy-cats">' + cats.map(function (c) {
        return '<div class="hy-cat"><b>' + c.g + "</b>/" + c.m + '<div class="hy-bar"><i style="width:' + Math.round(c.g / c.m * 100) + '%"></i></div><small>' + c.n + " · " + c.d + "</small></div>";
      }).join("") + "</div></div>");
    h.push('<div class="grid g2">' + pillarMini(male, L.him) + pillarMini(female, L.her) + "</div>");
    h.push('<div class="panel"><h3>' + L.secZo + male.dayMaster.animalZh + " × " + female.dayMaster.animalZh + " — " + zo.lab + "</h3><p>" + zo.txt + "</p>" + (zo.folk ? '<p><small>' + zo.folk + "</small></p>" : "") + "</div>");
    h.push('<div class="panel"><h3>' + L.secWx + "</h3>");
    (wx.txts.length ? wx.txts : [L.sameNote]).forEach(function (t) { h.push("<p>" + t + "</p>"); });
    h.push('<div class="scrollx"><table class="t"><tr><th>' + L.wuxTable[0] + "</th><th>" + L.wuxTable[1] + "</th><th>" + L.wuxTable[2] + "</th></tr>" +
      E.EL_ORDER.map(function (e) { return "<tr><td>" + e + "</td><td>" + male.scores[e].toFixed(1) + "</td><td>" + female.scores[e].toFixed(1) + "</td></tr>"; }).join("") + "</table></div></div>");
    h.push('<div class="panel"><h3>' + L.secRz + "</h3><p><b>" + L.dayZhiRel + "</b>" + relText(rz.dz) + "（" + L.scoreOf + " " + rz.dzPts + "）</p><p><b>" + L.dayGanRel + "</b>" + rz.stemTxt + "（" + L.scoreOf + " " + (rz.pts - rz.dzPts) + "）</p></div>");
    h.push('<div class="panel"><h3>' + L.secDy + "</h3><p>" + L.dyNote + "</p>" +
      '<div class="scrollx"><table class="t"><tr><th>' + L.dyTable[0] + "</th><th>" + L.dyTable[1] + "</th><th>" + L.dyTable[2] + "</th></tr>" + dy.rows.join("") + "</table></div></div>");
    h.push(remedies(male, female, zo, wx, rz, dy));
    h.push('<div class="panel"><h3>' + L.secOther + "</h3><p>" + L.nayinLine.replace("{a}", male.pillars.year.nayin).replace("{b}", female.pillars.year.nayin) + "</p><p>" + L.ziweiLine + "</p></div>");
    h.push('<p class="disclaimer">' + L.disclaim + "</p>");
    return h.join("\n");
  }

  btn.addEventListener("click", function () {
    var male, female;
    try {
      male = E.compute(Object.assign({ gender: "m", calendar: "solar", tz: 8 }, readForm(fm)));
      female = E.compute(Object.assign({ gender: "f", calendar: "solar", tz: 8 }, readForm(ff)));
    } catch (e) {
      out.className = "result show";
      out.innerHTML = '<div class="panel">' + L.errDate + "</div>";
      return;
    }
    out.className = "result show";
    out.innerHTML = render(male, female);
    out.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
