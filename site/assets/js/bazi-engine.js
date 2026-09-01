/* BaziEngine — BaZi (Four Pillars) computation on top of lunar-javascript.
 * Exposes window.BaziEngine.compute(input). Pure client-side. */
(function () {
  "use strict";

  var STEMS = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
  var STEM_EL = ["木","木","火","火","土","土","金","金","水","水"];
  var STEM_PY = ["Jiǎ","Yǐ","Bǐng","Dīng","Wù","Jǐ","Gēng","Xīn","Rén","Guǐ"];
  var BRANCHES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
  var BR_EL = ["水","土","木","木","土","火","火","土","金","金","土","水"];
  var BR_PY = ["Zǐ","Chǒu","Yín","Mǎo","Chén","Sì","Wǔ","Wèi","Shēn","Yǒu","Xū","Hài"];
  var BR_ANIMAL = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
  var BR_ANIMAL_ZH = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
  var EL_ORDER = ["木","火","土","金","水"];
  var EL_EN = { "木":"Wood", "火":"Fire", "土":"Earth", "金":"Metal", "水":"Water" };
  var SHISHEN = { 比肩:"Friend", 劫财:"Rival", 食神:"Talent", 伤官:"Rebel", 偏财:"Windfall", 正财:"Wealth", 七杀:"Warrior", 正官:"Officer", 偏印:"Mystic", 正印:"Scholar" };
  var SHISHEN_ZH_DESC = {
    比肩:"同我者，自立与同辈之助", 劫财:"同我异性，竞争与合作并存",
    食神:"我生者，才华与享受", 伤官:"我生异性，锋芒与创新",
    偏财:"我克者，机会之财", 正财:"我克异性，正职之财",
    七杀:"克我者，压力与魄力", 正官:"克我异性，规范与地位",
    偏印:"生我者，独特学识", 正印:"生我异性，庇护与学问"
  };
  var ZHI_HIDE = {
    "子":["癸"], "丑":["己","癸","辛"], "寅":["甲","丙","戊"], "卯":["乙"],
    "辰":["戊","乙","癸"], "巳":["丙","庚","戊"], "午":["丁","己"], "未":["己","丁","乙"],
    "申":["庚","壬","戊"], "酉":["辛"], "戌":["戊","辛","丁"], "亥":["壬","甲"]
  };
  var NAYIN = {};
  (function(){
    var names = ["海中金","炉中火","大林木","路旁土","剑锋金","山头火","涧下水","城头土","白蜡金","杨柳木","泉中水","屋上土","霹雳火","松柏木","长流水","沙中金","山下火","平地木","壁上土","金箔金","覆灯火","天河水","大驿土","钗钏金","桑柘木","大溪水","沙中土","天上火","石榴木","大海水"];
    for (var i = 0; i < 30; i++) {
      NAYIN[STEMS[(2*i)%10] + BRANCHES[(2*i)%12]] = names[i];
      NAYIN[STEMS[(2*i+1)%10] + BRANCHES[(2*i+1)%12]] = names[i];
    }
  })();

  function elIndex(el){ return EL_ORDER.indexOf(el); }

  // 十神: relationship of stem `og` to day stem `dg`
  function shiShen(dgIdx, ogIdx) {
    if (dgIdx === ogIdx) return "比肩";
    var dEl = elIndex(STEM_EL[dgIdx]), oEl = elIndex(STEM_EL[ogIdx]);
    var samePol = (dgIdx % 2) === (ogIdx % 2);
    if (oEl === dEl) return samePol ? "比肩" : "劫财";
    if ((dEl + 1) % 5 === oEl) return samePol ? "食神" : "伤官";   // I generate other
    if ((oEl + 1) % 5 === dEl) return samePol ? "偏印" : "正印";   // other generates me
    if ((dEl + 2) % 5 === oEl) return samePol ? "偏财" : "正财";   // I control other
    if ((oEl + 2) % 5 === dEl) return samePol ? "七杀" : "正官";   // other controls me
    return "";
  }

  // Equation-of-time + longitude correction, minutes.
  function trueSolarOffset(dateUTCms, longitude, tzOffset) {
    var d = new Date(dateUTCms);
    var start = Date.UTC(d.getUTCFullYear(), 0, 1);
    var N = Math.floor((dateUTCms - start) / 86400000) + 1;
    var B = 2 * Math.PI * (N - 81) / 364;
    var eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
    var lngCorr = 4 * (longitude - 15 * tzOffset);
    return lngCorr + eot;
  }

  function pillarInfo(ganIdx, zhiIdx, dgIdx) {
    var hide = ZHI_HIDE[BRANCHES[zhiIdx]].map(function (g) { return STEMS[STEMS.indexOf(g)]; });
    return {
      gan: STEMS[ganIdx], zhi: BRANCHES[zhiIdx],
      ganPy: STEM_PY[ganIdx], zhiPy: BR_PY[zhiIdx],
      ganEl: STEM_EL[ganIdx], zhiEl: BR_EL[zhiIdx],
      ganEn: (ganIdx % 2 === 0 ? "Yang " : "Yin ") + EL_EN[STEM_EL[ganIdx]],
      zhiEn: BR_ANIMAL[zhiIdx] + " (" + EL_EN[BR_EL[zhiIdx]] + ")",
      hide: hide,
      shishen: ganIdx === dgIdx ? "日主" : shiShen(dgIdx, ganIdx),
      nayin: NAYIN[STEMS[ganIdx] + BRANCHES[zhiIdx]] || ""
    };
  }

  function compute(input) {
    if (typeof Solar === "undefined") throw new Error("lunar library not loaded");
    var y = input.y, m = input.m, d = input.d;
    var y0 = y; /* original wall-clock birth year (before true-solar correction) */
    var h = input.hour | 0, mi = input.minute | 0;
    var genderMale = (input.gender === "m" || input.gender === "male" || input.gender === 1);

    // True solar time correction (applied on the wall-clock as if UTC, then read back)
    var corrApplied = 0;
    if (input.trueSolar) {
      var wall = Date.UTC(y, m - 1, d, h, mi);
      var off = trueSolarOffset(wall, input.longitude || 15 * (input.tz || 8), input.tz || 8);
      corrApplied = Math.round(off);
      wall += corrApplied * 60000;
      var c = new Date(wall);
      y = c.getUTCFullYear(); m = c.getUTCMonth() + 1; d = c.getUTCDate();
      h = c.getUTCHours(); mi = c.getUTCMinutes();
    }

    var solar, lunar;
    if (input.calendar === "lunar") {
      lunar = Lunar.fromYmdHms(y, m, d, h, mi, 0);
      solar = lunar.getSolar();
    } else {
      solar = Solar.fromYmdHms(y, m, d, h, mi, 0);
      lunar = solar.getLunar();
    }

    var ec = lunar.getEightChar();
    var dgIdx = STEMS.indexOf(ec.getDayGan());
    var pillars = {
      year: pillarInfo(STEMS.indexOf(ec.getYearGan()), BRANCHES.indexOf(ec.getYearZhi()), dgIdx),
      month: pillarInfo(STEMS.indexOf(ec.getMonthGan()), BRANCHES.indexOf(ec.getMonthZhi()), dgIdx),
      day: pillarInfo(dgIdx, BRANCHES.indexOf(ec.getDayZhi()), dgIdx),
      hour: pillarInfo(STEMS.indexOf(ec.getTimeGan()), BRANCHES.indexOf(ec.getTimeZhi()), dgIdx)
    };

    // Five-element scoring: stems 1.0; hidden stems 1.0/0.45/0.2
    var scores = { "木":0, "火":0, "土":0, "金":0, "水":0 };
    [pillars.year, pillars.month, pillars.day, pillars.hour].forEach(function (p) {
      scores[p.ganEl] += 1.0;
      var hide = ZHI_HIDE[p.zhi];
      var w = [1.0, 0.45, 0.2];
      hide.forEach(function (g, i) { scores[STEM_EL[STEMS.indexOf(g)]] += w[i] || 0.1; });
    });

    var dayEl = STEM_EL[dgIdx];
    var dElI = elIndex(dayEl);
    var resourceEl = EL_ORDER[(dElI + 4) % 5]; // 生我
    var self = scores[dayEl], support = scores[resourceEl];
    var total = 0; EL_ORDER.forEach(function (e) { total += scores[e]; });
    var ratio = (self + support) / total;
    var strength = ratio < 0.42 ? "weak" : ratio > 0.58 ? "strong" : "balanced";
    var favorable;
    if (strength === "weak") favorable = [dayEl, resourceEl];
    else if (strength === "strong") {
      favorable = [EL_ORDER[(dElI + 2) % 5], EL_ORDER[(dElI + 3) % 5], EL_ORDER[(dElI + 1) % 5]];
    } else {
      var weakest = EL_ORDER.slice().sort(function (a, b) { return scores[a] - scores[b]; })[0];
      favorable = [weakest];
    }
    var missing = EL_ORDER.filter(function (e) { return scores[e] < 0.01; });
    var strongest = EL_ORDER.slice().sort(function (a, b) { return scores[b] - scores[a]; })[0];

    // 大运
    var yun = ec.getYun(genderMale ? 1 : 0);
    var dayun = yun.getDaYun().filter(function (x) { return x.getGanZhi(); }).map(function (x) {
      return { gz: x.getGanZhi(), startAge: x.getStartAge(), endAge: x.getEndAge(), startYear: x.getStartYear(), endYear: x.getEndYear() };
    });

    var hourUnknown = input.hour === null || input.hour === undefined || input.hour < 0;

    return {
      pillars: pillars,
      birthYear: y0,
      scores: scores,
      missing: missing,
      strongest: strongest,
      dayMaster: {
        gan: STEMS[dgIdx], element: dayEl, elEn: EL_EN[dayEl],
        py: STEM_PY[dgIdx],
        strength: strength,
        strengthZh: strength === "weak" ? "偏弱" : strength === "strong" ? "偏强" : "中和",
        favorable: favorable,
        animal: BR_ANIMAL[BRANCHES.indexOf(ec.getYearZhi())],
        animalZh: BR_ANIMAL_ZH[BRANCHES.indexOf(ec.getYearZhi())]
      },
      dayun: dayun,
      yunStart: { y: yun.getStartYear(), m: yun.getStartMonth(), d: yun.getStartDay() },
      lunarText: lunar.getYearInGanZhi() + "年 " + lunar.getMonthInChinese() + "月" + lunar.getDayInChinese(),
      shengxiaoYear: lunar.getYearShengXiao(),
      correctionMinutes: corrApplied,
      hourUnknown: hourUnknown
    };
  }

  window.BaziEngine = {
    compute: compute,
    shiShen: shiShen,
    STEMS: STEMS, BRANCHES: BRANCHES, STEM_EL: STEM_EL, BR_EL: BR_EL,
    EL_ORDER: EL_ORDER, EL_EN: EL_EN, SHISHEN: SHISHEN, SHISHEN_ZH_DESC: SHISHEN_ZH_DESC,
    STEM_PY: STEM_PY, BR_PY: BR_PY, BR_ANIMAL: BR_ANIMAL
  };
})();
