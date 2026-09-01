/* 边界审计脚本：立春/节气/晚子时/闰月/生肖口径 */
global.window = global;
Object.assign(global, require("../site/assets/vendor/lunar.min.js"));
require("../site/assets/js/bazi-engine.js");

var E = window.BaziEngine;
function show(label, input) {
  var r = E.compute(Object.assign({ tz: 8 }, input));
  var p = r.pillars;
  console.log(
    label.padEnd(34),
    p.year.gan + p.year.zhi, p.month.gan + p.month.zhi, p.day.gan + p.day.zhi, p.hour.gan + p.hour.zhi,
    "| 八字生肖(年支):" + (E.BRANCHES.indexOf(p.year.zhi) % 12 + 4) % 12,
    "animal(英文,年支):" + r.dayMaster.animal,
    "animalZh(农历):" + r.shengxiaoYear,
    "| lunarText:" + r.lunarText
  );
}

console.log("== 1. 基准案例（交接锁定）1991-07-23 05:05 → 辛未 乙未 甲午 丁卯 ==");
show("1991-07-23 05:05", { y: 1991, m: 7, d: 23, hour: 5, minute: 5 });

console.log("\n== 2. 立春边界 2024-02-04 立春 16:27（北京时间） ==");
show("2024-02-04 15:00 (立春前)", { y: 2024, m: 2, d: 4, hour: 15, minute: 0 });
console.log("   期望: 癸卯年 乙丑月 (未过立春)");
show("2024-02-04 17:30 (立春后)", { y: 2024, m: 2, d: 4, hour: 17, minute: 30 });
console.log("   期望: 甲辰年 丙寅月 (已过立春)");

console.log("\n== 3. 生肖矛盾检验：2024-02-05（立春后、春节2/10前） ==");
show("2024-02-05 12:00", { y: 2024, m: 2, d: 5, hour: 12, minute: 0 });
console.log("   期望: 八字年柱=甲辰(龙)；农历年仍是癸卯(兔) → 若两值不同即 UI 矛盾");

console.log("\n== 4. 晚子时 2025-02-03 23:30（立春 2025-02-03 22:10 后） ==");
show("2025-02-03 23:30", { y: 2025, m: 2, d: 3, hour: 23, minute: 30 });
show("2025-02-04 00:30", { y: 2025, m: 2, d: 4, hour: 0, minute: 30 });
console.log("   期望: 两者年柱都=乙巳(过了立春)。日柱: 流派1=2/3干支, 流派2(晚子算明天)=2/4干支");

console.log("\n== 5. 普通晚子时（不跨节气）2024-06-01 23:10 ==");
show("2024-06-01 23:10", { y: 2024, m: 6, d: 1, hour: 23, minute: 10 });
show("2024-06-01 22:30", { y: 2024, m: 6, d: 1, hour: 22, minute: 30 });
show("2024-06-02 00:30", { y: 2024, m: 6, d: 2, hour: 0, minute: 30 });

console.log("\n== 6. 闰月 2023-03-30（闰二月初九） ==");
show("2023-03-30 10:00", { y: 2023, m: 3, d: 30, hour: 10, minute: 0 });
console.log("   期望: 月柱=乙卯（闰二月不改变节气月，与惊蛰后二月同支）");

console.log("\n== 7. 农历输入回归 1991-06-12（农历）05:05 ==");
var solar = Solar.ymdToJulian ? null : null;
var l = Lunar.fromYmdHms(1991, 6, 12, 5, 5, 0);
var s = l.getSolar();
console.log("   农历1991-6-12 → 公历", s.toYmd(), "（应为 1991-07-23）");
