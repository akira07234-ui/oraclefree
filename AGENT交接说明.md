# AGENT 交接说明 — BaziOracle（oraclefree.com）

> 任何 AI Agent 接手本站开发前，先读本文件 + `README-DEPLOY.md` + `.workbuddy/memory/MEMORY.md`。

## 项目位置与结构

- 项目根：`C:\Users\Administrator\WorkBuddy\2026-08-29-21-47-11\bazioracle`
- `build/` = 站点生成器（Node，ES5），`cd build && node build.js` 输出到 `site/`
- `site/` = **部署内容**（1002 个 HTML / 5 语言 en/zh/es/ar/ja），Cloudflare Pages 直接发布它
- `site/assets/` = 手工维护（JS/CSS/vendor），**改这里不用跑 build**
- 语言包：`build/lang/zh-tools.js`（中文）、`es.js`/`ar.js`/`ja.js`（`tools.<工具>` 结构）；
  五行语料 `build/lang/wuxing.js`（五语言，注入 `bu.wx`）

## 修改 → 发布全流程

```bash
# 1) 改内容：build/ 下改源文件，site/assets/ 下改 JS/CSS
# 2) 若改过 build/：重新生成 + 回归
cd build
node build.js                 # 重新生成 site/
node test-wuxing.js           # 五行，755 项断言
node test-ziwei.js            # 紫微，全绿
# 3) 在用户电脑的 Git Bash（需全局代理）提交推送
cd "C:/Users/Administrator/WorkBuddy/2026-08-29-21-47-11/bazioracle"
git add -A
git commit -m "描述改动"
git push origin main
# 4) Cloudflare Pages 自动检测 GitHub 更新 → 自动重新部署，1-3 分钟生效
```

## 关键约定（踩过的坑，勿改）

- **五行分级口径**：`bazi-ui.js` 的 `elShare()` 用「自党比」(本气+生我者)/全局，
  与引擎日主旺衰同源。**不要改回按数量占比分级**，否则页首与下文自相矛盾（有断言锁定）
- **紫微索引**：iztro 的 `palaces[i]`/`horoscope().index`/`stars[]` 是数组槽位（寅宫起），
  盘面布局用地支槽位（0=子），换算 `(槽位+2)%12`；en-US 午宫罗马化是 `woo` 不是 `wu`
- **引擎 pillars 是对象** `{year,month,day,hour}`，取月支写 `res.pillars.month.zhi`
- 隐私承诺：排盘纯前端、生日不上传，**不要加**收集用户数据的脚本

## 上线信息

- 域名：`oraclefree.com`（Porkbun 注册 → Cloudflare DNS Free）
- 托管：Cloudflare Pages 项目 `oraclefree`，GitHub 仓库 `akira07234-ui/oraclefree`，分支 `main`，
  构建命令空，输出目录 `site`
- GSC：待提交 sitemap（`https://oraclefree.com/sitemap.xml`）
- ads.txt 仍为占位符，AdSense 等有流量后再申请
