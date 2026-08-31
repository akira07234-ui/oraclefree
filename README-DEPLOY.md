# BaziOracle 八字神谕 — 部署指南

一个纯静态的**五语言**命理工具站（英语/中文/西班牙语/阿拉伯语RTL/日语，每语言 195 页 = 975 个 HTML），
无需数据库、无需服务端，部署目标：**Cloudflare Pages**（免费、无限带宽、允许商用）。

## 语言版本

| 路径 | 语言 | 说明 |
|---|---|---|
| `/` | English | 主站，x-default |
| `/zh/` | 简体中文 | 完整镜像 |
| `/es/` | Español | 完整镜像（含100签西语释义） |
| `/ar/` | العربية | 完整镜像，**RTL 从右到左** |
| `/ja/` | 日本語 | 完整镜像（紫微用 ja-JP 原生星名） |

每个页面头部有五语言切换器；hreflang 互链与 sitemap 已覆盖全部语言。

## 目录结构

```
bazioracle/
├── site/                 ← 部署这个目录（全部静态文件）
│   ├── index.html        ← 英文首页（八字排盘主工具）
│   ├── zh/  es/  ar/  ja/   ← 其他语言镜像（/路径/结构相同）
│   ├── ziwei/  jiaobei/  kau-cim/ (含 sign-1..100)  zodiac/ (含 12 生肖页)
│   ├── iching/ (含 hexagram-1..64)  almanac/  dreams/  five-elements/
│   ├── learn/ (6 篇指南)  about/  privacy/  404.html
│   ├── sitemap.xml  robots.txt  ads.txt
│   └── assets/
│       ├── vendor/       ← lunar.min.js（历法）+ iztro.min.js（紫微，支持 ja-JP）
│       ├── js/           ← 各工具逻辑（配置驱动：window.L10N 注入语言包，EN 兜底）
│       ├── css/  img/  data/（灵签/64卦/解梦 JSON）
├── build/                ← 站点生成器（Node 脚本，改内容后重新生成）
│   ├── build.js  tpl.js  pages-core.js(en/zh)  pages-i18n.js(es/ar/ja)
│   ├── pages-content.js  pages-generated.js
│   ├── data/（64卦、生肖、解梦、观音灵签100签 + 英文释义）
│   └── lang/（es.js/ar.js/ja.js 语言包 + content-*.js 内容数据 + zh-tools.js）
```

## 一、部署到 Cloudflare Pages（10 分钟）

1. 登录 https://dash.cloudflare.com → **Workers & Pages → Create → Pages → Upload assets**
2. 项目名填 `bazioracle`（会得到 `bazioracle.pages.dev` 免费域名）
3. 把 `site/` 文件夹**整个拖进**上传框（或打包 zip 上传），点 Deploy
4. 部署完成后访问 `https://bazioracle.pages.dev` 验证

### 绑定自定义域名（可选但推荐）
Pages 项目 → **Custom domains → Set up a custom domain**，按提示到域名商加 CNAME。
域名可在 Namecheap/Cloudflare/阿里云购买（.com 约 60-100 元/年）。

### 改域名后必须重新生成 sitemap
```bash
cd build
SITE_URL=https://你的域名 node build.js
```
然后重新上传 `site/`。（默认占位域名是 `https://www.bazioracle.com`，换品牌名同理，
全局替换 `build/` 里的 "BaziOracle" 字符串后重新 build。）

## 二、上线后第一周动作（对应哥飞打法）

1. **Google Search Console**：添加资源（域名前缀）→ 提交 `sitemap.xml`
2. **Google Analytics**：在 Cloudflare Pages 的每个页面 `</head>` 前注入 GA4 代码
   （或用 Cloudflare Web Analytics，免打脚本）
3. **AdSense**：站点有真实流量后再申请（新站 2-4 周后再申请通过率高）；
   批准后把发布商 ID 填入 `site/ads.txt` 并替换各页面 `data-ad-client` 占位符
4. **建站前置检查**：访问 /、/zh/、/ziwei/、/jiaobei/、/kau-cim/ 各点一遍工具，
   确认 pages.dev 上一切正常

## 三、内容与 SEO 要点（已内置）

- 每页独立 title/description/canonical + hreflang（en/zh/x-default）
- 结构化数据：首页 WebSite + FAQPage，工具页 Article/BreadcrumbList
- 390 页内容农场：64 卦 ×2、观音灵签 100 签 ×2、12 生肖 ×2、6 篇指南 ×2
- 内链网状结构：每个工具页互链、卦页/签页有前后翻页
- 外链建议：Reddit（r/astrology, r/Taoism, r/ChineseWanderer）、TikTok 发掷筊短视频、
  Hacker News Show HN、中文可投小众开发者社区

## 四、修改内容 / 加页面的方法

全部页面由生成器产出，改内容请改 `build/` 下的源文件再重新生成：

| 要改什么 | 改哪个文件 |
|---|---|
| 首页文案 / FAQ / 工具卡片（英/中） | `build/pages-core.js` |
| 西/阿/日全站文案与界面 | `build/lang/es.js` `ar.js` `ja.js` |
| 西/阿/日的生肖、64卦、100签、解梦内容 | `build/lang/content-es.js` `content-ar.js` `content-ja.js` |
| 六篇 Learn 指南、关于、隐私（英/中） | `build/pages-content.js` |
| 生肖页 / 64卦页 / 灵签页模板（英/中） | `build/pages-generated.js` |
| 新语言版页面模板 | `build/pages-i18n.js` |
| 灵签英文释义 | `build/data/guanyin-en.js` |
| 生肖数据 / 解梦词条 / 64卦（源数据） | `build/data/*.js` |
| 页头导航 / 页脚 / 五语言切换器 / SEO 头 | `build/tpl.js` |
| 站点域名 / 品牌名 | `build/tpl.js` 顶部 SITE_URL + 全局替换 |
| 紫微盘逻辑（大限/流年/借星） | `site/assets/js/ziwei.js`（英文兜底文案在文件顶部 `EN` 对象） |
| 八字盘渲染 / 五行分析六段式 | `site/assets/js/bazi-ui.js`（`elShare` 定分级口径，勿改回数量占比） |
| 五行经典文献语料（五语言） | `build/lang/wuxing.js` → 注入到 `bu.wx` |
| 紫微盘回归测试 | `cd build && node test-ziwei.js`（五语言 × 12 项断言） |
| 五行分析回归测试 | `cd build && node test-wuxing.js`（五语言，755 项断言） |
|   ↳ 导出渲染文本肉眼校对 | `node test-wuxing.js --dump zh 1991-07-23 05:05 男` |

> ⚠️ `site/assets/` **不由** `build.js` 生成，是直接编辑的源文件。改 JS / CSS 后
> **不要**重新 build 来"生效"——直接把 `assets/` 一起上传即可（build 会保留它）。

改完执行：`cd build && node build.js`，然后把 `site/` 重新上传（或接 GitHub 自动部署）。

## 五、技术说明

- **八字/黄历**：lunar-javascript（MIT），纯前端计算
- **紫微斗数**：iztro（MIT），支持 en-US / zh-CN / ja-JP 输出。紫微盘 v2 已支持
  **大限**（每宫标注十年年龄范围，高亮当前大限宫）、**流年**（可切换查询年份，高亮流年宫
  并给出流年四化与流年星）、**小限**，以及**空宫借对宫主星**
- **观音灵签**：传统 100 签文本（公开领域），英文释义为本站撰写
- **隐私**：所有排盘在浏览器本地完成，生日不上传（这也是隐私政策页的承诺）
- **变现路径**：起步挂 AdSense → 有流量后接 Paddle/Lemon Squeezy 卖 AI 深度报告
  （对接 Gemini API，套壳模式，API key 放后端，绝不放前端）

## 六、已知边界（v1）

- 五行分析的**旺衰分级用「自党比」**——(本气 + 生我者) ÷ 全局，即子平扶抑法。
  与日主旺衰判定同源，两者不会互相打架。数量占比只作柱状图参考，不参与分级
- **月令（旺相休囚死）按单月支推**，未细分节气深浅（如未月上下半月土火之气有别）
- 《内经》诸条以**取象比类**借用，页面已明确标注不作医学诊断
- 紫微盘大限/流年为**简化行限法**：按五行局起运、每宫十年顺行或逆行，未纳入命宫吉凶与
  大限四化的深层互动；空宫已借对宫主星，但借星亮度沿用对宫原值
- 八字喜用神为简化规则（旺衰法），页面已标注"供文化娱乐参考"
- 掷筊为伪随机（Math.random），追求仪式感可后续接入真随机源
- 解梦词典 v1 收录 ~110 条常见梦境，可持续扩充 `build/data/dreams.js`
