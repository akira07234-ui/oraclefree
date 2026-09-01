/* pages-content.js — learn articles, about, privacy, learn index (EN & ZH) */
var tpl = require("./tpl");

/* classical citation blocks (E-E-A-T) */
function cite(zhQuote, source, enRender) {
  return '<blockquote class="classic"><span class="zh-quote">「' + zhQuote + '」</span>' +
    (enRender ? '<span style="display:block;font-size:.95rem;color:var(--ink2);margin-top:8px">' + enRender + "</span>" : "") +
    '<cite class="cite">—— ' + source + "</cite></blockquote>";
}
function sources(items, lang) {
  var Z = lang === "zh";
  return '<section class="sources"><h2>' + (Z ? "经典出处" : "Classical Sources") + "</h2><ul>" +
    items.map(function (it) { return "<li><b>" + it[0] + "</b>" + it[1] + "</li>"; }).join("") + "</ul>" +
    '<p class="varnote">' + (Z ? "引文依通行本，个别字句或因版本而异；本站解读为现代白话转述。"
      : "Quotations follow popular printed editions; wording may vary slightly between editions. Our readings are modern plain-language renderings.") + "</p></section>";
}

var ARTICLES = {
  "what-is-bazi": {
    en: {
      title: "What Is BaZi? A Beginner's Guide to the Four Pillars of Destiny",
      desc: "A clear beginner's introduction to BaZi (Four Pillars of Destiny): the eight characters, heavenly stems, earthly branches, day master, and how a reading works.",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>What Is BaZi? A Beginner's Guide to Four Pillars of Destiny</h1>" +
        "<p>BaZi (八字), literally \"eight characters\", is the classical Chinese system of destiny analysis built on your birth moment. It writes the year, month, day and hour of birth as four <em>pillars</em>, each made of one heavenly stem (天干) above one earthly branch (地支) — four pillars, eight characters.</p>" +
        "<h2>The ten stems and twelve branches</h2>" +
        "<p>The ten heavenly stems — Jia, Yi, Bing, Ding, Wu, Ji, Geng, Xin, Ren, Gui — cycle through the five elements in yang and yin pairs: Jia and Yi are Wood, Bing and Ding are Fire, and so on. The twelve branches run from Zi (Rat) to Hai (Pig), each carrying its own element and hidden stems beneath the surface.</p>" +
        "<h2>The day master: who you are in the chart</h2>" +
        "<p>The stem of your day pillar is called the Day Master — the \"you\" at the center of the chart. Zi Ping methodology then asks two questions: how strong is the Day Master (supported by its own element and the element that feeds it), and which elements does the chart need? Elements that strengthen a weak Day Master, or temper an over-strong one, are called the favorable elements (喜用神).</p>" +
        "<h2>Ten gods: the cast of characters</h2>" +
        "<p>Every other stem in the chart relates to the Day Master as one of the ten gods — Friend, Rival, Talent, Rebel, Windfall, Wealth, Warrior, Officer, Mystic and Scholar. They describe the people, drives and resources around you: Wealth gods are what you control and earn, Officer gods are discipline and status, Resource gods are learning and protection.</p>" +
        "<h2>Luck pillars: the moving calendar of life</h2>" +
        "<p>Beyond the static chart, BaZi assigns a sequence of ten-year <em>luck pillars</em> (大运), running forward or in reverse depending on your gender and the polarity of your birth year. Each pillar shifts the elemental weather of a decade, which is why the same chart can blossom early or late.</p>" +
        "<h2>Try it yourself</h2>" +
        "<p>Cast your own chart with true-solar-time precision on our <a href='/'>free BaZi calculator</a>, then explore your <a href='/five-elements/'>five elements</a>. For the cultural background of the stems and branches, see the <a href='/learn/true-solar-time/'>true solar time guide</a>.</p>" +
        "<h2>From the classics</h2>" +
        cite("人禀天地，命属阴阳；生居覆载之内，尽在五行之中。", "《渊海子平·继善篇》（旧题宋·徐大升辑）", "\"Humans are endowed by heaven and earth; life belongs to yin and yang — within the covering of the cosmos, all rests within the five elements.\" — Yuanhai Ziping, Ji Shan Pian"),
        cite("以日为主，年为根，月为苗，日为花，时为果。", "《渊海子平·论日为主》", "\"Take the day stem as the master: the year is the root, the month the sprout, the day the flower, the hour the fruit.\" — Yuanhai Ziping, On the Day as Master") +
        sources([["《渊海子平》", "：旧题宋·徐大升据唐·李虚中、五代徐子平之法辑成，子平命理第一部集成之作。"], ["《三命通会》", "：明·万民英撰（1596 年成书），《四库全书》收录的命理百科全书。"], ["《周易》", "：群经之首，卦爻辞成于西周至春秋。"]], "zh") +
        '<p class="disclaimer">BaZi is a traditional interpretive art, presented here for Character — not the chart — is the author of destiny.</p>' +
        "</article>";
      }
    },
    zh: {
      title: "八字入门：四柱命理是什么？新手完整指南",
      desc: "八字（四柱命理）新手入门：天干地支、四柱排法、日主旺衰、十神与大运，一文讲清八字的底层逻辑。",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>八字入门：四柱命理是什么？</h1>" +
        "<p>八字（四柱命理）以出生时刻为坐标，把年、月、日、时分别写成一柱——每柱由一个天干与一个地支组成，四柱共八个字，故名「八字」。</p>" +
        "<h2>十天干与十二地支</h2>" +
        "<p>十天干为甲、乙、丙、丁、戊、己、庚、辛、壬、癸，按阴阳两两配五行：甲乙属木、丙丁属火、戊己属土、庚辛属金、壬癸属水。十二地支从子（鼠）到亥（猪），每个地支除本气五行外，底下还藏着一到三个天干（藏干）。</p>" +
        "<h2>日主：命盘的中心</h2>" +
        "<p>日柱的天干称为「日主」，就是命盘中的你。子平法接着问两个问题：日主是强是弱（看本气与生它的印星支持多少），以及全局最需要什么。帮弱日主、制强日主的元素，就是「喜用神」。</p>" +
        "<h2>十神：命盘中的角色</h2>" +
        "<p>其余各干与日主的关系构成十神：比肩、劫财、食神、伤官、偏财、正财、七杀、正官、偏印、正印。它们分别描绘你身边的人事物：财星是你要驾驭的财富与目标，官杀是规范与压力，印星是学问与庇护，食伤是才华与表达。</p>" +
        "<h2>大运：人生十年的天气</h2>" +
        "<p>静态的命盘之外，八字还按性别与年干阴阳排出顺行或逆行的十年「大运」。每一步大运改变十年的五行气候——同一个命盘，有人早发，有人晚成，差别往往就在大运的节拍。</p>" +
        "<h2>自己排一排</h2>" +
        "<p>用我们的<a href='/zh/'>免费八字排盘</a>（支持真太阳时校正）排出你的四柱，再看<a href='/zh/five-elements/'>五行查询</a>找喜用神。历法与时间的细节可读<a href='/zh/learn/true-solar-time/'>真太阳时校正指南</a>。</p>" +
        "<h2>古籍原文</h2>" +
        cite("人禀天地，命属阴阳；生居覆载之内，尽在五行之中。", "《渊海子平·继善篇》（旧题宋·徐大升辑）"),
        cite("以日为主，年为根，月为苗，日为花，时为果。", "《渊海子平·论日为主》") +
        sources([["《渊海子平》", "：旧题宋·徐大升据唐·李虚中、五代徐子平之法辑成，子平命理第一部集成之作。"], ["《三命通会》", "：明·万民英撰（1596 年成书），《四库全书》收录的命理百科全书。"], ["《周易》", "：群经之首，卦爻辞成于西周至春秋。"]], "zh") +
        '<p class="disclaimer">八字是一门传统解读艺术，本站内容性格与选择，才是命运的主笔。</p>' +
        "</article>";
      }
    }
  },

  "true-solar-time": {
    en: {
      title: "True Solar Time: Why Your BaZi Hour Pillar Might Be Wrong",
      desc: "Clock time is not solar time. How longitude and the equation of time shift your BaZi hour pillar, and how our calculator corrects it.",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>True Solar Time: Why Your Hour Pillar Might Be Wrong</h1>" +
        "<p>Classical Chinese astrology was invented in a world of sundials. Time, for the ancients, was <em>solar</em> — noon was when the sun stood highest. Our wall clocks are political averages: China keeps one clock from Beijing to Kashgar, a longitude span of over 60 degrees.</p>" +
        "<h2>Two corrections</h2>" +
        "<p>Converting clock time to local true solar time involves two adjustments. First, <strong>longitude</strong>: the sun needs four minutes to cross one degree of longitude, so a birth in Urumqi (87.6°E) happens nearly two hours 'earlier' in solar terms than the Beijing clock suggests. Second, the <strong>equation of time</strong>: the earth's tilted, elliptical orbit makes solar noon drift up to about 16 minutes from mean noon through the year.</p>" +
        "<h2>Why it matters: the hour pillar</h2>" +
        "<p>The twelve two-hour branches (Zi 23:00–00:59, Chou 01:00–02:59 …) are exactly one solar day divided twelve ways. A 30–60 minute solar correction often moves the birth across a branch boundary — changing the hour pillar, the hidden stems, and sometimes the strength of the whole chart. The day pillar can also shift for births near midnight.</p>" +
        "<h2>How our calculator handles it</h2>" +
        "<p>Enter your birthplace longitude (or just your timezone) and check the true-solar-time box: we apply the four-minutes-per-degree longitude offset plus the equation of time for your birth date, then cast the chart on the corrected moment. The result shows exactly how many minutes were corrected.</p>" +
        "<p>Cast your corrected chart on the <a href='/'>BaZi calculator</a> — and if you were born near an hour boundary, try both with and without the correction to compare.</p>" +
        "<h2>A note on sources</h2>" +
        "<p>The hour system itself is ancient: Tang-dynasty masters like Li Xuzhong (李虚中, 761–813) already read destinies from birth timings, and the five-dynasties master Xu Ziping moved the analysis to the day pillar — but all of them worked from sundial and water-clock time, not administrative clocks. True solar correction is therefore not an innovation but a return to how the tradition always read time.</p>" +
        sources([["李虚中", "：唐代命理先驱，《韩昌黎文集》载韩愈为其作墓志铭，称其推命「百不失一二」。"], ["徐子平", "：五代宋初术士，改以日干为核心，后世遂称此学为「子平术」。"], ["《渊海子平》", "：子平法的第一部集成著作，旧题宋·徐大升辑。"]], "en") +
        '<p class="disclaimer">When in doubt about your birth time, family recollection and birth records beat any formula.</p>' +
        "</article>";
      }
    },
    zh: {
      title: "真太阳时校正：你的时柱可能排错了",
      desc: "钟表时间不等于太阳时间。经度与均时差如何影响八字时柱，本站排盘如何自动完成真太阳时校正。",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>真太阳时校正：你的时柱可能排错了</h1>" +
        "<p>古典命理诞生于日晷时代，古人眼中的时间就是太阳时间——正午即日影最短之时。而今天的钟表时间是行政平均值：全国用同一张时刻表，从北京到喀什，经度跨度超过 60 度。</p>" +
        "<h2>两项校正</h2>" +
        "<p>把钟表时间换算为当地真太阳时需要两步。第一是<strong>经度</strong>：太阳每跨 1 度经度需 4 分钟，乌鲁木齐（东经 87.6°）的太阳时间比北京钟表时间慢近两小时。第二是<strong>均时差</strong>：地球公转轨道是椭圆、地轴有倾角，太阳正午在一年中会比平均正午早晚漂移约 16 分钟。</p>" +
        "<h2>为什么它影响时柱</h2>" +
        "<p>十二时辰（子 23:00–00:59、丑 01:00–02:59……）正是把一个太阳日十二等分。30-60 分钟的太阳时修正常常正好跨过时辰边界——时柱变了，藏干变了，有时整个命盘的旺衰都要重算；接近午夜出生者甚至日柱也会变。</p>" +
        "<h2>本站怎么处理</h2>" +
        "<p>在<a href='/zh/'>排盘页</a>填入出生地经度（或只选时区）并勾选真太阳时校正，我们会先按「每度 4 分钟」的经度修正加当日均时差把时刻校正到位，再用校正后的时刻起盘，并显示校正了多少分钟。</p>" +
        "<p>如果你的出生时间恰在时辰边界附近，建议开、关校正各排一次，对比时柱差异。</p>" +
        "<h2>源流小考</h2>" +
        "<p>时辰体系古已有之：唐代李虚中（761–813）已用出生时辰论命，五代徐子平改为以日干为核心——但他们用的都是日晷与漏刻之「真时」，而非行政钟表。真太阳时校正并非创新，而是回到这门学问阅读时间的原始方式。</p>" +
        sources([["李虚中", "：唐代命理先驱，《韩昌黎文集》载韩愈为其作墓志铭，称其推命「百不失一二」。"], ["徐子平", "：五代宋初术士，改以日干为核心，后世遂称此学为「子平术」。"], ["《渊海子平》", "：子平法的第一部集成著作，旧题宋·徐大升辑。"]], "zh") +
        '<p class="disclaimer">出生时间拿不准时，家人的记忆和出生证明比任何公式都可靠。</p>' +
        "</article>";
      }
    }
  },

  "jiaobei-guide": {
    en: {
      title: "Jiaobei Guide: How to Ask the Moon Blocks (Poe Divination)",
      desc: "The complete guide to jiaobei (poe / moon block) divination: history, the four verdicts, the three-throw ritual, and how to phrase a proper question.",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>Jiaobei Guide: Asking the Moon Blocks</h1>" +
        "<p>Walk into any temple in Fujian, Taiwan or the Chaoshan region and you will hear a crisp clack of wood on stone: two crescent blocks thrown to the ground, read where they settle. This is <em>jiaobei</em> (筊杯) — known in English as moon blocks or poe divination — the most direct yes/no oracle in the Chinese tradition.</p>" +
        "<h2>The four verdicts</h2>" +
        "<ul><li><strong>Sacred blocks (圣筊)</strong> — one flat side up, one curved side up: the classic yang-yin embrace. Approved.</li>" +
        "<li><strong>Laughing blocks (笑筊)</strong> — both flat sides up: the deity smiles; your question is unclear or your heart not settled. Rephrase and ask again.</li>" +
        "<li><strong>Negative blocks (阴筊)</strong> — both curved sides up: not granted. Postpone, change the plan, or ask about something else.</li>" +
        "<li><strong>Standing blocks (立筊)</strong> — a block lands on its edge: vanishingly rare, treated as a strong warning to reflect before proceeding.</li></ul>" +
        "<h2>The three-throw ritual</h2>" +
        "<p>One question is completed by three consecutive throws: three sacred verdicts is a full yes, two a conditional yes, one a grudging maybe, none a no. In temples the asker first states their name, address and question aloud, then throws. The same etiquette applies online — <a href='/jiaobei/'>our moon blocks</a> count the three throws for you.</p>" +
        "<h2>How to phrase the question</h2>" +
        "<p>Jiaobei answers concrete, present-tense questions, not vague horizons. \"Should I accept the offer from Company X today?\" works; \"Will I be rich?\" only earns a laugh. If you keep receiving laughing blocks, tradition says the issue is the question or the querent — not the oracle.</p>" +
        "<h2>A tradition that traveled</h2>" +
        "<p>Block divination is attested from the Tang dynasty and spread with Minnan emigration through Taiwan, Hong Kong and Southeast Asia. Wherever a Mazu or Guanyin temple stands, the blocks still click. For a richer, narrative answer after a yes, draw one of the <a href='/kau-cim/'>100 Guanyin fortune sticks</a>.</p>" +
        "<h2>From the classics</h2>" +
        cite("手持杯珓导我掷，云此最吉余难同。", "唐·韩愈《谒衡岳庙遂宿岳寺题门楼》", "\"Handing me the cup-divination blocks, he bade me throw them: 'This is the most auspicious — the rest cannot compare.'\" — Han Yu (768–824), poem at Mount Heng's temple. The verse records block divination as a living practice in Tang China.") +
        sources([["韩愈《谒衡岳庙》", "：唐代诗文中的杯珓问神实录，说明此俗至少已有一千二百年历史。"], ["杯珓", "：即筊杯古称，宋以后「筊」「珓」混用，闽南语今仍称「跋杯」（poa̍h-poe），英语 Poe 即由此音译。"]], "en") +
        '' +
        "</article>";
      }
    },
    zh: {
      title: "掷筊指南：怎么问圣杯才算问对了？",
      desc: "掷筊（掷圣杯）完整指南：筊杯历史、圣笑阴立四种筊象、三筊定一问的规矩，以及如何把问题问到点子上。",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>掷筊指南：怎么问圣杯才算问对了？</h1>" +
        "<p>走进福建、台湾、潮汕的任何一座庙宇，都能听到木杯落地清脆的「嗒」声：两片月牙形筊杯掷于地，看它们躺成什么姿势。这就是<b>掷筊</b>——中式传统里最直接的「是/否」问神方式。</p>" +
        "<h2>四种筊象</h2>" +
        "<ul><li><b>圣筊</b>——一平一凸，一阴一阳相拥：应允。</li>" +
        "<li><b>笑筊</b>——两平面朝上：神明笑了，问题不清或心未定，重新措辞再问。</li>" +
        "<li><b>阴筊</b>——两凸面朝上：不允。宜缓、宜改，或另问他事。</li>" +
        "<li><b>立筊</b>——筊杯立起：极罕见的大警示，务必三思而后行。</li></ul>" +
        "<h2>三筊定一问</h2>" +
        "<p>一问以连续三掷为准：三圣为大允，两圣为可，一圣为勉强，零圣为不允。庙里的规矩是先自报姓名、住址与所问之事，再掷筊。线上同理——<a href='/zh/jiaobei/'>本站的在线掷筊</a>会替你数好三次。</p>" +
        "<h2>问题要怎么问</h2>" +
        "<p>掷筊回答具体、当下的问题，不回答模糊的远景。「今天这家公司的 offer 我该不该接」是好问题；「我将来会不会有钱」只会换来笑筊。连续掷出笑筊，按传统的说法，问题出在提问的人或问法，而不在神明。</p>" +
        "<h2>一路南传的仪式</h2>" +
        "<p>杯珓问卜唐代已见记载，随闽南移民传入台湾、香港与南洋。凡有妈祖庙、观音庙处，皆有筊杯声。得到应允后想要更丰厚的指引，可再求一支<a href='/zh/kau-cim/'>观音灵签</a>。</p>" +
        "<h2>古籍实录</h2>" +
        cite("手持杯珓导我掷，云此最吉余难同。", "唐·韩愈《谒衡岳庙遂宿岳寺题门楼》") +
        sources([["韩愈《谒衡岳庙》", "：唐代诗文中的杯珓问神实录，说明此俗至少已有一千二百年历史。"], ["杯珓", "：即筊杯古称，宋以后「筊」「珓」混用，闽南语今仍称「跋杯」（poa̍h-poe），英语 Poe 即由此音译。"]], "zh") +
        '' +
        "</article>";
      }
    }
  },

  "kau-cim-guide": {
    en: {
      title: "Kau Cim: The Guanyin Fortune Sticks, Explained",
      desc: "How to draw and read Guanyin kau cim (fortune sticks): the ritual, the 100 signs, fortune grades, and pairing the draw with moon blocks.",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>Kau Cim: Drawing the Guanyin Fortune Sticks</h1>" +
        "<p>Kau Cim (求签) is the bamboo-stick oracle of the Guanyin tradition: one hundred numbered sticks rest in a cylinder; the asker shakes it gently until a single stick rises and falls out. Each stick carries a poem quoting a classical episode, graded as upper, middle or lower fortune.</p>" +
        "<h2>The ritual, step by step</h2>" +
        "<ul><li>State who you are and what you ask — name, home, and one concrete question.</li>" +
        "<li>Hold the cylinder level; kneel or stand with a settled mind.</li>" +
        "<li>Tilt it until exactly one stick emerges. Two or none at once — start over.</li>" +
        "<li>Confirm the stick with <a href='/jiaobei/'>moon blocks</a>: a sacred verdict accepts the sign; a negative one asks you to redraw.</li>" +
        "<li>Read the poem and its interpretation.</li></ul>" +
        "<h2>Reading the grades</h2>" +
        "<p>Upper signs (上签) bless the endeavor; middle signs (中签) counsel patience and correct method; lower signs (下签) are not curses but course corrections — traditionally read as \"not this way, not now\". The poems' historical heroes give the flavor: Su Qin's second exam, Kongming's strategy, Han Xin's patience under humiliation.</p>" +
        "<h2>One question, one stick</h2>" +
        "<p>Kau Cim rewards the same discipline as jiaobei: one concrete question at a time. Draw again on another day rather than redrawing five times in a row.</p>" +
        "<p>Ready to draw? <a href='/kau-cim/'>Shake the cup online</a> — all hundred signs are here with full interpretations in English and Chinese.</p>" +
        "<h2>On the text's origin</h2>" +
        "<p>Unlike BaZi or the I Ching, the Guanyin oracle has no single ancient \"original\": the hundred signs circulated as temple lot-book texts from the Southern Song onward, with regional temples preserving slightly different wordings. Our edition follows the widely printed popular version, and every reading on this site is a modern plain-language rendering of it — offered as cultural heritage, not as the voice of any authority.</p>" +
        sources([["观音灵签通行本", "：明以来江南、闽粤庙宇流传的百签签谱，各寺版本互有出入。"], ["《周易》", "：若求有确切古籍出处的占法，六十四卦卦辞均出自《周易》古经（见我们的 I Ching 各卦页）。"]], "en") +
        '' +
        "</article>";
      }
    },
    zh: {
      title: "观音灵签怎么求？求签解签完整指南",
      desc: "观音灵签求签解签指南：求签仪式步骤、一百签的构成、上中下签怎么读，以及掷筊确认的配套做法。",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>观音灵签怎么求？</h1>" +
        "<p>求签（观音灵签）是观音信仰中最流行的占卜方式：竹签筒中置一百支编号签条，求签人轻轻摇动，直到其中一支跃出。每支签上题着一首签诗，取材历史典故，分上、中、下三种签格。</p>" +
        "<h2>求签步骤</h2>" +
        "<ul><li>报上姓名、住址与所问之事——一次只问一件具体的事。</li>" +
        "<li>签筒端平，跪站皆可，心定再摇。</li>" +
        "<li>倾斜签筒至恰好跌出一支；一次出两支或不出，重新来过。</li>" +
        "<li>以<a href='/zh/jiaobei/'>掷筊</a>确认：得圣筊则此签有效，得阴筊则重新求签。</li>" +
        "<li>读签诗与解曰。</li></ul>" +
        "<h2>签格怎么读</h2>" +
        "<p>上签主事成；中签教人守正待时、讲究方法；下签并非凶咒，而是「此路不通、此机未到」的改道提醒。签诗里的历史人物自带注脚：苏秦的第二次科考、孔明的运筹、韩信的胯下之忍。</p>" +
        "<h2>一问一签</h2>" +
        "<p>求签与掷筊一样讲究纪律：一次一问。不吉时改日再求，胜过连求五次。</p>" +
        "<p>想抽一支？<a href='/zh/kau-cim/'>在线摇签</a>——一百签诗文详解全收录。</p>" +
        "<h2>关于文本来源</h2>" +
        "<p>与八字、周易不同，观音灵签并没有一部单一的「古籍原典」：百签签谱自南宋起在庙宇间流传，各地寺院版本互有出入。本站采用流传最广的通行本，并如实说明——签诗是传统民间文本，本站解读为现代白话转述，而非任何「权威断言」。</p>" +
        sources([["观音灵签通行本", "：明以来江南、闽粤庙宇流传的百签签谱，各寺版本互有出入。"], ["《周易》", "：若求有确切古籍出处的占法，六十四卦卦辞均出自《周易》古经（见本站各卦页）。"]], "zh") +
        '' +
        "</article>";
      }
    }
  },

  "ziwei-guide": {
    en: {
      title: "Zi Wei Dou Shu: A Beginner's Guide to Purple Star Astrology",
      desc: "Zi Wei Dou Shu explained for beginners: the twelve palaces, major stars, the four transformations, and how to read your first chart.",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>Zi Wei Dou Shu: Purple Star Astrology for Beginners</h1>" +
        "<p>If BaZi is the weather map of your elements, Zi Wei Dou Shu (紫微斗数) is the castle diagram: your life arranged into twelve palaces around a courtyard, each garrisoned by symbolic stars. Attributed to the Daoist sage Chen Tuan of the Five Dynasties era, it is the second great pillar of Chinese fate calculation.</p>" +
        "<h2>The twelve palaces</h2>" +
        "<p>The chart is a square of twelve sectors named by earthly branch, each governing a domain: the Self palace (temperament), Siblings, Spouse, Children, Wealth, Health, Travel, Friends, Career, Property, Fortune (inner life) and Parents. To read a domain, look at the stars garrisoning its palace.</p>" +
        "<h2>The stars</h2>" +
        "<p>Fourteen major stars form the backbone — the emperor star Zi Wei, the strategist Tian Ji, the sun and moon Tai Yang and Tai Yin, the warrior Wu Qu, the benefactor Tian Tong, and so on — joined by minor stars of speed, charm or noise. Each star brightens or dims by palace (its \"brightness\" grade), and four stars can carry a transformation: Lu (flourish), Quan (power), Ke (fame), Ji (obstruction).</p>" +
        "<h2>Your first reading</h2>" +
        "<p>Start with three palaces: the Self palace describes your operating style; the Career palace shows how you build; the Spouse palace sketches partnership. Notice which major stars sit there and whether any carry a transformation — Ji on a Career star says the work path has friction to manage, Lu on a Wealth star says resources flow when you show up.</p>" +
        "<p>Cast your chart free on our <a href='/ziwei/'>Zi Wei Dou Shu calculator</a> — twelve palaces, major and minor stars, transformations, soul and body stars, in English or Chinese.</p>" +
        "<h2>How to read the palaces</h2>" +
        "<p><b>Self palaces vs. other palaces.</b> Life, Wealth, Career, Property, Fortune and Health are 'self palaces' — they speak to your own pattern, money, work, home, spirit and body. Siblings, Spouse, Children, Travel, Friends and Parents are 'other palaces' — they speak to the six relations. An auspicious star in a self palace benefits you directly; in an other palace it often shows up through a relative.</p>" +
        "<p><b>The trine and opposition (三方四正).</b> No palace is read alone: take it with its trine (the other two palaces in its earthly-branch group — 申子辰 / 寅午戌 / 巳酉丑 / 亥卯未) and its opposition (the clashing branch). If the Life Palace sits at 子, its trine is 申 and 辰 and its opposition 午 — the four together form the full picture.</p>" +
        "<p><b>Four things per palace:</b> ① the major star sets the frame (exalted or fallen); ② auspicious and malefic minor stars raise or lower it; ③ the four transformations (Lu, Quan, Ke, Ji) show which way it moves; ④ the trine and opposition meet or break it.</p>" +
        "<h2>Soul &amp; Body stars</h2>" +
        "<p>Once the Life Palace is fixed, two stars govern the self: the <b>Soul star (命主)</b> is set by the Life Palace's branch; the <b>Body star (身主)</b> by the birth-year branch. The table follows the Complete Book's rule:</p>" +
        "<div class='scrollx'><table class='t'><tr><th>Branch</th><th>Soul star (Life Palace)</th><th>Body star (birth year)</th></tr>" + (function () { var B = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]; var P = ["Zi","Chou","Yin","Mao","Chen","Si","Wu","Wei","Shen","You","Xu","Hai"]; var M = {子:"Tanlang",丑:"Jumen",寅:"Lucun",卯:"Wenqu",辰:"Lianzhen",巳:"Wuqu",午:"Po Jun",未:"Wuqu",申:"Lianzhen",酉:"Wenqu",戌:"Lucun",亥:"Jumen"}; var S = {子:"Huoxing",丑:"Tianxiang",寅:"Tianliang",卯:"Tiantong",辰:"Wenchang",巳:"Tianji",午:"Huoxing",未:"Tianxiang",申:"Tianliang",酉:"Tiantong",戌:"Wenchang",亥:"Tianji"}; return B.map(function (b, i) { return "<tr><td><b>" + b + " " + P[i] + "</b></td><td>" + M[b] + "</td><td>" + S[b] + "</td></tr>"; }).join(""); })() + "</table></div>" +
        "<h2>From the classics</h2>" +
        cite("学问之难，莫难于星命之学；而星命之学，莫难于紫微斗数。", "《紫微斗数全书·太微赋》（题宋·陈抟撰，明·罗洪先辑）", "\"Of all learning, none is harder than the study of fate by the stars; and among star-fate studies, none is harder than Zi Wei Dou Shu.\" — Tai Wei Fu, in the Zi Wei Dou Shu Quan Shu, the tradition's foundational compilation.") +
        sources([["《紫微斗数全书》", "：题宋·陈抟（希夷先生）撰、明·罗洪先辑刊，紫微斗数通行祖本，安星诀与诸星论皆出于此。"], ["门派说明", "：紫微斗数流传中形成三合、飞星、中州派等分支，四化表等细节各派略有出入；本站采用 iztro 开源库的主流约定，属通行解法之一。"]], "en") +
        '' +
        "</article>";
      }
    },
    zh: {
      title: "紫微斗数入门：十二宫、主星与四化怎么看？",
      desc: "紫微斗数新手指南：十二宫各管什么、十四主星性格、四化禄权科忌，以及拿到命盘后先看哪三宫。",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>紫微斗数入门</h1>" +
        "<p>如果说八字是五行的天气图，紫微斗数就是人生的城堡图：十二座宫位围成一周，每座宫里驻扎着不同的星曜。相传为五代道士陈抟（希夷先生）所创，是中国命理的第二大支柱。</p>" +
        "<h2>十二宫</h2>" +
        "<p>命盘按地支分为十二宫：命宫（自我与性格底色）、兄弟、夫妻、子女、财帛、疾厄、迁移、交友、官禄、田宅、福德、父母。想看哪个人生领域，就去看驻守该宫的星曜组合。</p>" +
        "<h2>星曜</h2>" +
        "<p>十四主星是骨架——帝星紫微、军师天机、太阳太阴、武曲、天同……再辅以辅星杂曜。每颗星依宫位不同有「庙旺利陷」的亮度；禄存化曜则给星曜叠加「化禄、化权、化科、化忌」四种状态：禄为丰隆、权为掌执、科为名声、忌为牵绊。</p>" +
        "<h2>拿到命盘先看三处</h2>" +
        "<p>先看命宫（你的默认操作系统），再看官禄宫（你怎么建功），最后看夫妻宫（亲密关系的画风）。留意宫内主星是否带化：官禄宫主星化忌，说明事业路上有需要经营的摩擦；财帛宫化禄，说明肯入场就有资源。</p>" +
        "<p>用我们的<a href='/zh/ziwei/'>免费紫微排盘</a>立即起盘：十二宫主副星、化曜、命主身主，中英文都支持。</p>" +
        "<h2>十二宫怎么读</h2>" +
        "<p><b>先分我宫、他宫。</b>命宫、财帛、官禄、田宅、福德、疾厄为「我宫」，主自身的格局、财禄、事业、家业、精神与体质；兄弟、夫妻、子女、迁移、交友、父母为「他宫」，主六亲与人我关系。断一宫吉凶，先看它落我宫还是他宫——吉星入我宫其福归己，入他宫多应验在六亲身上。</p>" +
        "<p><b>再看三方四正。</b>单看一宫不够，须连同它的三方（地支三合：申子辰、寅午戌、巳酉丑、亥卯未中同局的另两宫）与对宫（地支相冲之宫）合参，是为「三方四正」。如命宫落子，三方为同属水局的申、辰二宫，对宫为相冲的午——四者合看，方成一宫完整格局。主星、辅星、四化皆以三方四正论其会照与冲破。</p>" +
        "<p><b>每宫看四件事：</b>① 主星定格局（十四正曜入庙旺得地则吉、落陷失所则减）；② 辅星煞星增减吉凶（左辅右弼文昌文曲为佐，擎羊陀罗火星铃星地空地劫为扰）；③ 四化（化禄化权化科化忌）定该宫「动」的方向与得失；④ 三方四正的会照冲破。四者合参，一宫之断方成。</p>" +
        "<h2>命主星 · 身主星</h2>" +
        "<p>安命之后，另取二星为一身主宰：<b>命主星</b>依命宫所在地支而定，主一生性分之归属；<b>身主星</b>依生年地支而定，主后天行藏之所系。下表依《全书》安命主、身主诀：</p>" +
        "<div class='scrollx'><table class='t'><tr><th>地支</th><th>命主星（命宫落此支）</th><th>身主星（生年落此支）</th></tr>" + (function () { var B = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]; var A = {子:"鼠",丑:"牛",寅:"虎",卯:"兔",辰:"龙",巳:"蛇",午:"马",未:"羊",申:"猴",酉:"鸡",戌:"狗",亥:"猪"}; var M = {子:"贪狼",丑:"巨门",寅:"禄存",卯:"文曲",辰:"廉贞",巳:"武曲",午:"破军",未:"武曲",申:"廉贞",酉:"文曲",戌:"禄存",亥:"巨门"}; var S = {子:"火星",丑:"天相",寅:"天梁",卯:"天同",辰:"文昌",巳:"天机",午:"火星",未:"天相",申:"天梁",酉:"天同",戌:"文昌",亥:"天机"}; return B.map(function (b) { return "<tr><td><b>" + b + "（" + A[b] + "）</b></td><td>" + M[b] + "</td><td>" + S[b] + "</td></tr>"; }).join(""); })() + "</table></div>" +
        "<h2>古籍原文</h2>" +
        cite("学问之难，莫难于星命之学；而星命之学，莫难于紫微斗数。", "《紫微斗数全书·太微赋》（题宋·陈抟撰，明·罗洪先辑）") +
        sources([["《紫微斗数全书》", "：题宋·陈抟（希夷先生）撰、明·罗洪先辑刊，紫微斗数通行祖本，安星诀与诸星论皆出于此。"], ["门派说明", "：紫微斗数流传中形成三合、飞星、中州派等分支，四化表等细节各派略有出入；本站采用 iztro 开源库的主流约定，属通行解法之一。"]], "zh") +
        '' +
        "</article>";
      }
    }
  },

  "five-elements-guide": {
    en: {
      title: "The Five Elements: Wood, Fire, Earth, Metal and Water in Your Chart",
      desc: "How the Chinese five elements (Wu Xing) generate and control each other, what each element says about temperament, and how favorable elements are chosen.",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>The Five Elements in Your Chart</h1>" +
        "<p>The Wu Xing (五行) — Wood, Fire, Earth, Metal, Water — are not substances but five verbs: growth, ignition, stabilization, hardening and flowing. They feed one another in a generation cycle (Wood feeds Fire, Fire makes Earth/ash, Earth bears Metal, Metal collects Water, Water nourishes Wood) and check one another in a control cycle (Wood parts Earth, Earth dams Water, Water douses Fire, Fire melts Metal, Metal chops Wood).</p>" +
        "<h2>Element personalities</h2>" +
        "<ul><li><strong>Wood</strong> — benevolent, upward-striving, principled; grows patiently but can grow rigid.</li>" +
        "<li><strong>Fire</strong> — passionate, ceremonial, fast-moving; illuminates and consumes.</li>" +
        "<li><strong>Earth</strong> — trustworthy, inclusive, the load-bearer; slow to move, impossible to topple.</li>" +
        "<li><strong>Metal</strong> — decisive, loyal, rule-loving; sharp, and it knows it.</li>" +
        "<li><strong>Water</strong> — clever, adaptive, deep; it goes around what it cannot go through.</li></ul>" +
        "<h2>Strength, weakness and favorable elements</h2>" +
        "<p>A chart is weighed by how its eight characters distribute across the five elements. If your Day Master's element and its mother element are scarce, the chart is \"weak\" and wants support: favorable elements are its own element and the one that generates it. If they dominate, the chart is \"strong\" and wants outlets: wealth (what it controls), officer (what disciplines it) and output (what it generates). A balanced chart seeks the rarest element to complete the circuit.</p>" +
        "<h2>Using the reading</h2>" +
        "<p>Tradition applies favorable elements through direction, color, season and career flavor — a Water-favorable chart gravitates north, to black and blue, to fluid and analytical work. Treat these as gentle preferences, not prescriptions.</p>" +
        "<p>Run your own distribution on the <a href='/five-elements/'>Five Elements calculator</a>, or start from the full <a href='/'>BaZi chart</a>.</p>" +
        "<h2>From the classics</h2>" +
        cite("五行者，往来乎天地之间而不穷者也，故谓之行。", "《渊海子平·论五行》", "\"The five phases move to and fro between heaven and earth without end — therefore they are called 'movements' (xing).\" — Yuanhai Ziping, On the Five Phases."),
        cite("能知衰旺之真机，其于三命之奥，思过半矣。", "《滴天髓》（旧题宋·京图撰，明·刘基注）", "\"Grasp the true mechanism of strength and weakness, and you have half of the mysteries of destiny.\" — Di Tian Sui, the classic that made strength-weakness analysis the heart of Zi Ping method. Our simplified strength reading is exactly a first step down this road.") +
        sources([["《渊海子平》", "：子平法第一部集成著作，旧题宋·徐大升辑。"], ["《滴天髓》", "：旧题宋·京图撰、明·刘基注，清·任铁樵作疏后大行于世，论旺衰喜用之祖。"], ["《穷通宝鉴》", "：原名《栏江网》，清·余春台编，按月令取调候用神之经典（本站简化模型暂未纳入调候法）。"], ["《三命通会》", "：明·万民英撰（1596），《四库全书》收录的命理百科。"]], "en") +
        '' +
        "</article>";
      }
    },
    zh: {
      title: "五行详解：金木水火土的性格与喜用神",
      desc: "五行相生相克的原理、五种元素的典型性格、日主强弱与喜用神的判断思路，以及如何把五行落实到生活。",
      body: function () {
        return '<article class="doc block container">' +
        "<h1>你命盘里的五行</h1>" +
        "<p>五行不是五种物质，而是五个动词：木是生发、火是升腾、土是承载、金是肃敛、水是流变。它们在相生循环里彼此滋养（木生火、火生土、土生金、金生水、水生木），又在相克循环里彼此制衡（木克土、土克水、水克火、火克金、金克木）。</p>" +
        "<h2>五行性格</h2>" +
        "<ul><li><b>木</b>——仁慈进取、有原则，像树一样耐心生长，也容易长成固执。</li>" +
        "<li><b>火</b>——热情外放、重礼重仪式，行动最快，也最容易燃烧自己。</li>" +
        "<li><b>土</b>——踏实守信、包容担当，最难挪动，也最不容易倒下。</li>" +
        "<li><b>金</b>——果敢重义、爱规则讲效率，锋芒自现。</li>" +
        "<li><b>水</b>——机敏善变通、思虑深，走不通的路就绕过去。</li></ul>" +
        "<h2>旺衰与喜用神</h2>" +
        "<p>看八字先把八个字按五行归类称重。若日主本气与生它的印星都稀薄，命局偏「弱」，喜用是本气与印星；若它们过旺，命局偏「强」，喜用是财星（我克）、官星（克我）与食伤（我生）这几个出口；命局中和，则找全局最稀缺的元素补全循环。</p>" +
        "<h2>怎么用起来</h2>" +
        "<p>传统把喜用神落地方位、颜色、季节与行业气质：喜水者亲北方、黑蓝色、流动与分析性强的工作。这些是「顺势借力」的参考，不是硬性处方。</p>" +
        "<p>用<a href='/zh/five-elements/'>五行查询</a>看看自己的分布，或从<a href='/zh/'>完整八字排盘</a>开始。</p>" +
        "<h2>古籍原文</h2>" +
        cite("五行者，往来乎天地之间而不穷者也，故谓之行。", "《渊海子平·论五行》"),
        cite("能知衰旺之真机，其于三命之奥，思过半矣。", "《滴天髓》（旧题宋·京图撰，明·刘基注）") +
        sources([["《渊海子平》", "：子平法第一部集成著作，旧题宋·徐大升辑。"], ["《滴天髓》", "：旧题宋·京图撰、明·刘基注，清·任铁樵作疏后大行于世，论旺衰喜用之祖。"], ["《穷通宝鉴》", "：原名《栏江网》，清·余春台编，按月令取调候用神之经典（本站简化模型暂未纳入调候法）。"], ["《三命通会》", "：明·万民英撰（1596），《四库全书》收录的命理百科。"]], "zh") +
        '' +
        "</article>";
      }
    }
  }
};

function articlePage(lang, slug, meta) {
  var Z = lang === "zh";
  var m = meta[slug][lang];
  var path = (Z ? "/zh/learn/" : "/learn/") + slug + "/";
  return {
    title: m.title + (Z ? " | 八字神谕" : " | BaziOracle"),
    desc: m.desc,
    body: m.body(),
    jsonLd: { "@context": "https://schema.org", "@type": "Article", "headline": m.title, "description": m.desc,
      "author": { "@type": "Organization", "name": "BaziOracle" }, "inLanguage": Z ? "zh-CN" : "en" },
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [Z ? "/zh/learn/" : "/learn/", Z ? "命理课堂" : "Learn"], [path, Z ? m.title : m.title]]
  };
}

function learnIndex(lang) {
  var Z = lang === "zh";
  var items = [
    ["what-is-bazi", Z ? "八字入门：四柱命理是什么" : "What Is BaZi? Four Pillars of Destiny", Z ? "天干地支、日主旺衰、十神与大运，一篇讲透。" : "Stems, branches, the day master and luck pillars — the complete beginner map."],
    ["true-solar-time", Z ? "真太阳时校正指南" : "True Solar Time Explained", Z ? "钟表时间与太阳时间的差距，可能改变你的时柱。" : "Why clock time can misplace your hour pillar — and how we fix it."],
    ["jiaobei-guide", Z ? "掷筊指南：怎么问圣杯" : "Jiaobei Guide: Asking the Moon Blocks", Z ? "圣笑阴立四筊、三筊定一问，问对了才算数。" : "The four verdicts, the three-throw ritual and the art of the question."],
    ["kau-cim-guide", Z ? "观音灵签求签指南" : "Kau Cim: Fortune Sticks Explained", Z ? "求签步骤、签格读法与掷筊确认。" : "The ritual, the grades and confirming with moon blocks."],
    ["ziwei-guide", Z ? "紫微斗数入门" : "Zi Wei Dou Shu for Beginners", Z ? "十二宫、十四主星与四化，先看哪三宫。" : "Twelve palaces, fourteen stars, four transformations — where to start."],
    ["five-elements-guide", Z ? "五行性格与喜用神" : "The Five Elements in Your Chart", Z ? "相生相克、旺衰喜用，把五行落到实处。" : "Generation, control, strength and favorable elements — applied."]
  ];
  var cards = items.map(function (it) {
    return '<a class="card tool-card" href="' + (Z ? "/zh/learn/" : "/learn/") + it[0] + '/"><h3>' + it[1] + "</h3><p style='color:var(--ink2);font-size:.92rem'>" + it[2] + "</p></a>";
  }).join("");
  var body = '<section class="hero container"><div class="kicker">' + (Z ? "命理课堂" : "Learn") + "</div><h1>" + (Z ? "命理课堂：从入门到上手" : "Guides: From First Steps to First Reading") + "</h1>" +
    '<p class="sub">' + (Z ? "六篇核心指南，把八字、五行、紫微、掷筊与灵签的底层逻辑讲清楚。" : "Six core guides that explain how BaZi, the five elements, Zi Wei Dou Shu, moon blocks and fortune sticks actually work.") + "</p></section>" +
    '<section class="container"><div class="grid g3">' + cards + "</div></section>";
  return {
    title: Z ? "命理课堂_八字紫微掷筊入门指南 | 八字神谕" : "Learn Chinese Fortune Telling — BaZi, Zi Wei, I Ching Guides | BaziOracle",
    desc: Z ? "八字、五行、紫微斗数、掷筊、观音灵签的入门指南与实践方法，全部免费阅读。" : "Free beginner guides to BaZi, five elements, Zi Wei Dou Shu, moon blocks and Guanyin fortune sticks — how the systems actually work.",
    body: body,
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [Z ? "/zh/learn/" : "/learn/", Z ? "命理课堂" : "Learn"]]
  };
}

function aboutPage(lang) {
  var Z = lang === "zh";
  var body = '<article class="doc block container">' +
    "<h1>" + (Z ? "关于 BaziOracle 八字神谕" : "About BaziOracle") + "</h1>" +
    "<p>" + (Z ? "BaziOracle（八字神谕）是一个免费的中文命理工具站，把传统东方命理以现代、双语、注重隐私的方式呈现：八字排盘、紫微斗数、掷筊、观音灵签、易经六十四卦、生肖配对、每日黄历与周公解梦。所有排盘计算在浏览器本地完成，生日等输入不上传服务器。" : "BaziOracle is a free, bilingual home for Chinese fortune-telling traditions — BaZi charts, Zi Wei Dou Shu, moon blocks, Guanyin fortune sticks, the I Ching, zodiac compatibility, a daily almanac and a dream dictionary — presented with a modern interface and genuine respect for the sources. All calculations run locally in your browser; birth data never leaves your device.") + "</p>" +
    "<h2>" + (Z ? "我们的原则" : "Our Principles") + "</h2><ul>" +
    "<li>" + (Z ? "内容免费开放，不设付费墙。" : "Free and open access — no paywalls.") + "</li>" +
    "<li>" + (Z ? "工具透明：算法说明写在明处，可自行验证。" : "Transparent tools: methods are documented so you can verify them.") + "</li>" +
    "<li>" + (Z ? "尊重传统：签诗、卦辞、筊象规则均依传统文本。" : "Respectful of tradition: signs, judgments and verdicts follow classical texts.") + "</li>" +
    "<li>" + (Z ? "诚实定位：命理是文化镜子，不是人生判决。" : "Honest framing: divination is a cultural mirror, not a verdict.") + "</li></ul>" +
    '<p><a href="' + (Z ? "/" : "/zh/") + '">' + (Z ? "切换到英文站" : "Switch to the Chinese site") + "</a></p></article>";
  return { title: Z ? "关于我们 | 八字神谕 BaziOracle" : "About Us | BaziOracle", desc: Z ? "了解 BaziOracle 八字神谕的理念与原则。" : "About BaziOracle — free, bilingual, privacy-first Chinese fortune-telling tools.", body: body,
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [Z ? "/zh/about/" : "/about/", Z ? "关于" : "About"]] };
}

function privacyPage(lang) {
  var Z = lang === "zh";
  var body = '<article class="doc block container">' +
    "<h1>" + (Z ? "隐私政策" : "Privacy Policy") + "</h1>" +
    "<p>" + (Z ? "本站的核心工具（八字排盘、五行查询、紫微排盘、掷筊、灵签、摇卦、黄历）全部使用 JavaScript 在您的浏览器本地运行。您输入的生日、性别与出生地等数据<b>不会上传到我们的服务器</b>，也不会与任何第三方共享。" : "The core tools of this site (BaZi calculator, five elements, Zi Wei chart, moon blocks, fortune sticks, I Ching coins, almanac) run entirely in your browser with JavaScript. Birth data you enter is <b>never uploaded to our servers</b> and never shared with third parties.") + "</p>" +
    "<h2>" + (Z ? "统计与广告" : "Analytics & Advertising") + "</h2>" +
    "<p>" + (Z ? "本站可能使用 Google Analytics 与 Google AdSense。广告服务商可能使用 Cookie 展示个性化广告；您可在 Google 广告设置中管理个性化选项。若我们接入广告，本页将更新具体的服务商名单。" : "This site may use Google Analytics and Google AdSense. Advertising partners may use cookies to personalize ads; you can manage personalization in your Google Ad Settings. If advertising is enabled, this page will list the specific providers.") + "</p>" +
    "<h2>" + (Z ? "本地存储" : "Local Storage") + "</h2><p>" + (Z ? "部分工具可能把您最近的输入保存在浏览器本地存储中以便回填，清除浏览器数据即可删除。" : "Some tools may keep your recent inputs in browser local storage for convenience; clearing site data removes them.") + "</p>" +
    "<h2>" + (Z ? "联系" : "Contact") + "</h2><p>" + (Z ? "如有隐私相关问题，请通过站点页脚的联系方式与我们联系。" : "For privacy questions, contact us via the details in the site footer.") + "</p>" +
    '<p class="disclaimer">' + (Z ? "本政策最后更新于站点上线日，重大变更将在本页公告。" : "Last updated at site launch; material changes will be announced on this page.") + "</p></article>";
  return { title: Z ? "隐私政策 | 八字神谕 BaziOracle" : "Privacy Policy | BaziOracle", desc: Z ? "BaziOracle 隐私政策：排盘本地计算，生日不上传服务器。" : "BaziOracle privacy policy: all charts are computed locally; birth data is never uploaded.", body: body,
    crumbs: [[Z ? "/zh/" : "/", Z ? "首页" : "Home"], [Z ? "/zh/privacy/" : "/privacy/", Z ? "隐私政策" : "Privacy"]] };
}

module.exports = { ARTICLES: ARTICLES, articlePage: articlePage, learnIndex: learnIndex, aboutPage: aboutPage, privacyPage: privacyPage };
