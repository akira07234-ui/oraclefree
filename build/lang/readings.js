/* readings.js — per-language interpretation data for BaZi (jp) and Zi Wei (zp) renderings.
 * Classical quotes are kept in the original Chinese with local renderings. */
module.exports = {

/* ================= 中文 ================= */
zh: {
  jp: {
    title: "详细解盘",
    srcNote: "引文依通行本，字句或因版本而异；白话解读为现代转述。",
    sec: { a: "一 · 日主本性", b: "二 · 月令提纲", c: "三 · 旺衰与喜用", d: "四 · 十神与四柱", e: "五 · 大运节奏", f: "六 · 纳音年命" },
    jishan: { t: "欲知贵贱，先观月令乃提纲。", s: "《渊海子平·继善篇》" },
    ditian: { t: "能知衰旺之真机，其于三命之奥，思过半矣。", s: "《滴天髓》" },
    hezhi: { t: "何知其人富？财气通门户。何知其人贵？官星有理会。", s: "《滴天髓·何知章》" },
    nayinSrc: "纳音取象之说见《三命通会·论纳音取象》：以物象喻六十甲子之气性。",
    stems: {
      "甲": { v: "甲木参天，脱胎要火。春不容金，秋不容土。火炽乘龙，水宕骑虎。地润天和，植立千古。", s: "《滴天髓·十干体象》", r: "甲是参天大树、栋梁之木：有担当、肯向上，需要火来焕发（表达与机遇），也需要水土滋养（根基与人脉）。" },
      "乙": { v: "乙木虽柔，刲羊解牛。怀丁抱丙，跨凤乘猴。虚湿之地，骑马亦忧。藤萝系甲，可春可秋。", s: "《滴天髓·十干体象》", r: "乙是花草藤萝：柔韧灵活、善于借力生长，遇到可靠的平台便能成就自己。" },
      "丙": { v: "丙火猛烈，欺霜侮雪。能煅庚金，逢辛反怯。土众成慈，水猖显节。虎马犬乡，甲来成灭。", s: "《滴天髓·十干体象》", r: "丙是太阳之火：光明磊落、感染力强，天然引人注目，但也怕被过度消耗。" },
      "丁": { v: "丁火柔中，内性昭融。抱乙而孝，合壬而忠。旺而不烈，衰而不穷。如有嫡母，可秋可冬。", s: "《滴天髓·十干体象》", r: "丁是灯烛之火：外柔内热、细腻持久，擅长在细节处持续发光。" },
      "戊": { v: "戊土固重，既中且正。静翕动辟，万物司命。水润物生，火燥物病。若在艮坤，怕冲宜静。", s: "《滴天髓·十干体象》", r: "戊是城墙大地：厚重温正、值得信赖，是团队最稳定的地基。" },
      "己": { v: "己土卑湿，中正蓄藏。不愁木盛，不畏水狂。火少火晦，金多金光。若要物旺，宜助宜帮。", s: "《滴天髓·十干体象》", r: "己是田园之土：包容善养、默默耕耘，能滋养身边的人与事。" },
      "庚": { v: "庚金带煞，刚健为最。得水而清，得火而锐。土润则生，土干则脆。能赢甲兄，输于乙妹。", s: "《滴天髓·十干体象》", r: "庚是刀剑之金：果敢刚毅、执行力强，经磨炼方能成器。" },
      "辛": { v: "辛金软弱，温润而清。畏土之多，乐水之盈。能扶社稷，能救生灵。热则喜母，寒则喜丁。", s: "《滴天髓·十干体象》", r: "辛是珠玉之金：精致敏锐、重品过节，宜被打磨雕琢，不宜被埋没。" },
      "壬": { v: "壬水通河，能泄金气。刚中之德，周流不滞。通根透癸，冲天奔地。化则有情，从则相济。", s: "《滴天髓·十干体象》", r: "壬是江河之水：胸怀宽广、机变流通，奔流不息、遇阻则绕。" },
      "癸": { v: "癸水至弱，达于天津。得龙而运，功化斯神。不愁火土，不论庚辛。合戊见火，化象斯真。", s: "《滴天髓·十干体象》", r: "癸是雨露之水：温润细腻、润物无声，以柔济物，于无声处成事。" }
    },
    seasons: {
      "寅卯辰": { n: "春", w: "木", t: "春季木气当令，万物生发；月令之气与我日主的关系，定全局的第一层基调。" },
      "巳午未": { n: "夏", w: "火", t: "夏季火气当令，气象炎上；调候与平衡在此季尤为要紧。" },
      "申酉戌": { n: "秋", w: "金", t: "秋季金气当令，肃敛收成；此时之木火皆需根气支撑。" },
      "亥子丑": { n: "冬", w: "水", t: "冬季水气当令，寒气先务温暖——古人所谓调候为先。" }
    },
    strength: {
      weak: "日主偏弱，如苗待雨：喜生扶（本气与印星），忌再受克泄；顺势蓄力为宜。",
      balanced: "日主中和，格局周流：行运顺逆皆有余地，重点看大运引动何方。",
      strong: "日主偏强，如木成林：喜泄耗（财官食伤）为出口，让力量有处可去。"
    },
    favLab: "开运参考（依喜用神之传统对应）",
    favApp: {
      "木": "方位东、色绿、晨时；生长型行业——教育、文创、医药。",
      "火": "方位南、色红、午时；表达型行业——能源、传媒、餐饮。",
      "土": "居中、色黄；承载型行业——地产、农业、管理、仓储。",
      "金": "方位西、色白；肃敛型行业——金融、机械、司法。",
      "水": "方位北、色黑蓝；流动型行业——贸易、物流、智库。"
    },
    pos: [
      "年柱见之：祖上根基与少年环境，宫位在「远」。",
      "月柱见之：父母兄弟与青年舞台，宫位在「近」。",
      "日支见之：配偶与中年内心，宫位在「身」。",
      "时柱见之：子女晚景与志趣归宿，宫位在「果」。"
    ],
    gods: {
      "比肩": "自立自强，同辈可倚；善合作也易较劲。",
      "劫财": "魄力大、出手快；豪爽与破财一线之隔。",
      "食神": "才艺口福，温和有表达；传统称为福气之星。",
      "伤官": "聪明外露、敢破规则；才华与是非同源。",
      "偏财": "机会之财，活络大方；宜机动经营、广结善缘。",
      "正财": "正职之财，勤俭踏实；积少成多、稳中有进。",
      "七杀": "压力与魄力同来；扛得住则权威自显。",
      "正官": "规矩与地位；守正则贵，过拘则束。",
      "偏印": "独特学识与直觉；防多学少成、思多行少。",
      "正印": "庇护与学问；得长辈之助，心地仁厚。"
    },
    dayunNote: "大运十年一步，是全局五行的气候；运干与日主所成之十神，就是这十年的主旋律。",
    dayunLead: "当前行 {gz} 运（虚岁 {a}–{b}）：运干与日主成「{god}」。",
    dayunNone: "大运按出生与节气推算，虚岁未入首运或数据不足时暂不显示。",
    nayinLine: "年命纳音「{ny}」——古人以物象取意，象此气之形。"
  },
  zp: {
    title: "命盘针对性解读",
    srcLine: "以下依《紫微斗数全书》诸星古性与四化之理，结合【本盘实际】坐守的星曜、庙旺利陷与生年四化落宫而作，非通用套话；白话为现代转述。",
    soulLab: "命格主调",
    mutLab: "四化",
    mutNote: "化禄主机缘、化权主掌控、化科主名声、化忌主磨练——化在何宫，即人生着力处。",
    mutText: { "禄": "化禄：顺遂与机会。", "权": "化权：掌控与魄力。", "科": "化科：名声与贵人。", "忌": "化忌：磨练与执着。" },
    bodyLab: "身宫 · 后天重心",
    bodyNote: "身宫是你后天着力所在，其落宫提示中年后人生的重心。",
    sanheLab: "三方四正 · 格局辅助",
    sanheNote: "命宫的三方（同三合局的两宫）与对宫（迁移）共同构成格局的外围，主星会照于此，影响你能量的发挥方式。",
    huaLab: "生年四化 · 人生主线",
    wxju: {
      "水二局": { g: "水二局，智主流转，如水之就下。", m: "二岁起大限，起运最早；一生多迁移变化，宜以智取胜、顺势而为。" },
      "木三局": { g: "木三局，仁主生发，如木之渐长。", m: "三岁起运，成事靠成长与积累，宜深耕一域，忌频繁折迁改道。" },
      "金四局": { g: "金四局，义主肃敛，如金之成器。", m: "四岁起运，原则与执行力强，宜立规矩、以专业与纪律立身。" },
      "土五局": { g: "土五局，信主厚重，如土之载物。", m: "五岁起运，大器晚成之格；稳扎稳打、厚积薄发，忌急于求成。" },
      "火六局": { g: "火六局，礼主炎上，如火之明动。", m: "六岁起运，热情与爆发力强，宜借势而动，防急躁燎原。" }
    },
    geju: [
      { name: "杀破狼格", need: ["七杀", "破军", "贪狼"], scope: "sanfang", g: "七杀、破军、贪狼三方会齐，古谓之『杀破狼』，变动开创之局。", m: "人生节奏大开大合、不安于现状，宜走开拓、竞争、变革型路线；成在敢闯，败在浮躁。" },
      { name: "机月同梁格", need: ["天机", "太阴", "天同", "天梁"], scope: "sanfang", g: "机、月、同、梁四方会齐，古诀『机月同梁作吏人』。", m: "宜在稳定组织中做专业与管理，靠稳健与专业立身；激进创业非所长。" },
      { name: "紫府同宫格", need: ["紫微", "天府"], scope: "ming", g: "紫微、天府同守命宫，帝座与库星同宫，尊贵富厚之格。", m: "领导气质与统筹力兼备、格局高；须防好面子、决策偏保守。" },
      { name: "府相朝垣格", need: ["天府", "天相"], scope: "sanfang", g: "天府、天相会照命宫，谓之『府相朝垣』，主食禄安稳。", m: "衣食丰足、贵人多助，宜在大平台、大机构中掌事发光。" },
      { name: "日月同临格", need: ["太阳", "太阴"], scope: "ming", g: "太阳、太阴同守命宫，日月同临，阴阳兼备。", m: "刚柔并济、外放与内敛兼具，宜协调调度类角色；感情上易左右权衡。" },
      { name: "火贪格", need: ["贪狼", "火星"], scope: "ming", g: "贪狼与火星同宫，古诀『火贪志气高』，主横发之机。", m: "机遇型爆发格局，机会一来成绩斐然；宜趁势而上，防暴起暴落。" },
      { name: "铃贪格", need: ["贪狼", "铃星"], scope: "ming", g: "贪狼与铃星同宫，同主意外机遇与横发。", m: "善捕冷门机会，宜创新领域；须练守成之功，防得而复失。" }
    ],
    jixing: ["左辅", "右弼", "文昌", "文曲", "天魁", "天钺", "禄存"],
    shaxing: ["擎羊", "陀罗", "火星", "铃星", "地空", "地劫"],
    jisha: {
      jiLab: "六吉星会命",
      jiText: "吉星会照，主助力、才华与贵人——辅弼得人、昌曲添才、魁钺引路、禄存稳财，格局为之提亮。",
      shaLab: "六煞星会命",
      shaText: "煞星会照，主竞争与磨砺——羊陀磨性、火铃添急、空劫减实；煞不为凶，砺之则能成大器。"
    },
    mzLab: "命主 · 身主",
    mzNote: "命主星看天性所近，身主星看后天所归，二星之性可参下列解读。",
    emptySec: "本宫无正曜，参对宫或借星而论，重在后天经营。",
    secs: [["官禄", "事业"], ["财帛", "财运"], ["夫妻", "感情"]],
    noStar: "本宫无十四正曜（空宫），须借对宫主星论之——性格带有对宫之星的影子，早年多变化、易受环境影响。",
    bright: { "庙": "星之优点尽显", "旺": "能量充沛、发挥有力", "得": "顺遂发挥", "利": "平稳发挥", "平": "中性发挥", "不": "优点受抑", "陷": "短板当家，须后天磨砺方显" },
    hua: {
      "禄": "化禄——财禄与顺遂流入此宫，是资源与机会所在，宜把握生发。",
      "权": "化权——主导与掌控之力聚于此宫，宜主动争取，惟防过于强势。",
      "科": "化科——名声、贵人与化解之力在此宫，逢凶呈祥，利考试、声望与人际。",
      "忌": "化忌——执念与阻碍缠于此宫，是你此生的功课所在，需用心经营、勿钻牛角。"
    },
    palDomain: {
      "命宫": "性格底色与一生格局", "兄弟": "手足与亲近伙伴", "夫妻": "婚姻与感情对象", "子女": "子女、晚辈与创作",
      "财帛": "理财与赚钱方式", "疾厄": "体质与健康", "迁移": "外出、人际舞台与外在际遇", "仆役": "朋友、下属与众人缘",
      "官禄": "事业、功名与做事方式", "田宅": "不动产、家宅与根基", "福德": "精神世界、兴趣与享福", "父母": "父母长辈与上司，亦主相貌"
    },
    stars: {
      "紫微": { g: "紫微属土，中天尊星，为帝座，化气曰尊。", m: "领导格、自尊心强、格局高、好体面，喜掌权不喜受制；天生要当主角，须学谦下方能服众。" },
      "天机": { g: "天机属木，南斗益算之星，化气曰善。", m: "智慧谋略之星，心思活络、反应快、多才艺、善规划；易多思多虑、临事犹豫、心绪不宁。" },
      "太阳": { g: "太阳属火，中天大贵，化气曰贵。", m: "光明博爱之星，主施予、重名声、热心付出、照拂他人；男命多应于父夫子，易劳心耗神、爱面子。" },
      "武曲": { g: "武曲属金，北斗财星，化气曰财。", m: "刚毅果决的财星，主行动力、务实理财、说做就做；性刚孤克，重实际而轻情感表达。" },
      "天同": { g: "天同属水，南斗福星，化气曰福。", m: "福泽之星，主安逸知足、人缘和善、有童心与享受；易懒散、缺冲劲、情绪敏感、遇难想躲。" },
      "廉贞": { g: "廉贞属火，北斗囚星，化气曰囚，为次桃花。", m: "复杂多才之星，原则与欲望交织、感情浓烈、有手腕魄力；易钻牛角尖、爱憎分明、惹是非。" },
      "天府": { g: "天府属土，南斗令星，为财库，化气曰令。", m: "稳重库星，主守成、包容、善理财藏富、有领导气度；偏保守、怕变动、重面子，宜开创为辅。" },
      "太阴": { g: "太阴属水，中天贵星，化气曰富，主母、妻、女。", m: "柔智之星，主细腻洁净、重感情、善积蓄、有审美与直觉；易多愁善感、内敛被动、追求完美。" },
      "贪狼": { g: "贪狼属木，北斗桃花之星，主欲望与才艺。", m: "多才多欲之星，善交际、有魅力、兴趣广、机遇多；易博而不精、耽于享乐、感情多扰。" },
      "巨门": { g: "巨门属水，北斗暗星，化气曰暗。", m: "口舌思辨之星，观察入微、能言善道、研究心强；易多疑、招口舌是非、暗中生波。" },
      "天相": { g: "天相属水，斗中印星，为官禄主，化气曰印。", m: "辅佐印星，主公正尽责、重形象、善协调、乐于成人之美；易受制于人、耳根软、需靠贵人。" },
      "天梁": { g: "天梁属土，南斗荫星，为老人星，化气曰荫。", m: "荫庇解厄之星，主清高正直、善逢凶化吉、有长辈缘、乐于庇护；易好说教、清闲自命、逢劳。" },
      "七杀": { g: "七杀属金，南斗将星，主肃杀。", m: "将星，主刚烈独立、冒险犯难、执行力强、说干就干；易冲动孤克、人生起伏大、不喜束缚。" },
      "破军": { g: "破军属水，北斗耗星，化气曰耗。", m: "先锋耗星，主开创变革、先破后立、不安于现状；易冲动耗损、起伏反复、需学收尾。" }
    }
  }
},

/* ================= English ================= */
en: {
  jp: {
    title: "Detailed Reading",
    srcNote: "Classical quotations follow popular printed editions; wording may vary between versions. Plain-language renderings are modern.",
    sec: { a: "1 · The Day Master", b: "2 · The Month Command", c: "3 · Strength & Favorable Elements", d: "4 · Ten Gods Across the Pillars", e: "5 · The Luck Rhythm", f: "6 · Year NaYin" },
    jishan: { t: "欲知贵贱，先观月令乃提纲。", s: "《渊海子平·继善篇》", ve: "\"To know rank and worth, first read the month command — it is the outline of the whole chart.\"" },
    ditian: { t: "能知衰旺之真机，其于三命之奥，思过半矣。", s: "《滴天髓》", ve: "\"Grasp the true mechanism of strength and weakness, and more than half the mysteries of destiny are yours.\"" },
    hezhi: { t: "何知其人富？财气通门户。何知其人贵？官星有理会。", s: "《滴天髓·何知章》", ve: "\"How do we know one is wealthy? Wealth-qi passes through the gate. How do we know one is honored? The officer star is in accord.\"" },
    nayinSrc: "NaYin imagery is expounded in the San Ming Tong Hui chapter 'On NaYin Images': the sixty pairings are figured through things.",
    stems: {
      "甲": { v: "甲木参天，脱胎要火。春不容金，秋不容土。火炽乘龙，水宕骑虎。地润天和，植立千古。", s: "《滴天髓·十干体象》", ve: "Jia — the towering tree: it kindles with fire, and stands for ages when earth is moist and heaven kind.", r: "A natural pillar: responsible and upward-striving; you need expression (fire) and rooted support (water, earth) to flourish." },
      "乙": { v: "乙木虽柔，刲羊解牛。怀丁抱丙，跨凤乘猴。虚湿之地，骑马亦忧。藤萝系甲，可春可秋。", s: "《滴天髓·十干体象》", ve: "Yi — the supple vine: gentle, yet able to fell the ram and ox; clasping strong stems, it thrives in any season.", r: "Adaptable and resilient: you grow by climbing what is strong — platforms and mentors are your leverage." },
      "丙": { v: "丙火猛烈，欺霜侮雪。能煅庚金，逢辛反怯。土众成慈，水猖显节。虎马犬乡，甲来成灭。", s: "《滴天髓·十干体象》", ve: "Bing — the fierce sun: it scorns frost and snow, tempers raw metal, yet shows restraint before refined Xin.", r: "Radiant and charismatic: you light up rooms and give freely; guard your fuel against burnout." },
      "丁": { v: "丁火柔中，内性昭融。抱乙而孝，合壬而忠。旺而不烈，衰而不穷。如有嫡母，可秋可冬。", s: "《滴天髓·十干体象》", ve: "Ding — the lamplight: soft without, luminous within; neither wild in strength nor dead in decline.", r: "Quiet persistence: warmth in the details; you shine longest in focused, craftsmanlike work." },
      "戊": { v: "戊土固重，既中且正。静翕动辟，万物司命。水润物生，火燥物病。若在艮坤，怕冲宜静。", s: "《滴天髓·十干体象》", ve: "Wu — the solid earth: centered and upright, steward of the seasons; moistened it generates, scorched it sickens.", r: "The steady foundation: reliable and trusted; you are at your best when others build on your structure." },
      "己": { v: "己土卑湿，中正蓄藏。不愁木盛，不畏水狂。火少火晦，金多金光。若要物旺，宜助宜帮。", s: "《滴天髓·十干体象》", ve: "Ji — the garden soil: humble and storing; it fears neither dense wood nor wild water, and nurtures what grows.", r: "The nurturer: patient and inclusive; you create value by cultivating people and projects over time." },
      "庚": { v: "庚金带煞，刚健为最。得水而清，得火而锐。土润则生，土干则脆。能赢甲兄，输于乙妹。", s: "《滴天髓·十干体象》", ve: "Geng — the strong-armed metal: hardiest of all; water clarifies it, fire gives it an edge.", r: "Decisive and tough: execution is your gift; discipline and refinement turn raw metal into a blade." },
      "辛": { v: "辛金软弱，温润而清。畏土之多，乐水之盈。能扶社稷，能救生灵。热则喜母，寒则喜丁。", s: "《滴天髓·十干体象》", ve: "Xin — the delicate jewel-metal: warm, clear and refined; it can uphold a realm and rescue the living.", r: "Precise and quality-minded: you thrive when polished by practice — not when buried in bulk." },
      "壬": { v: "壬水通河，能泄金气。刚中之德，周流不滞。通根透癸，冲天奔地。化则有情，从则相济。", s: "《滴天髓·十干体象》", ve: "Ren — the great waters reaching the river-mouth: resolute virtue, flowing without pause.", r: "Broad-minded and fluid: resourceful across boundaries; keep a current running, never a swamp." },
      "癸": { v: "癸水至弱，达于天津。得龙而运，功化斯神。不愁火土，不论庚辛。合戊见火，化象斯真。", s: "《滴天髓·十干体象》", ve: "Gui — the softest water, reaching the heavenly ford: with the dragon it works magical transformations.", r: "Gentle insight: nourishing and subtle; your influence flows from quiet consistency." }
    },
    seasons: {
      "寅卯辰": { n: "spring", w: "Wood", t: "Wood commands in spring — the season of growth sets the chart's first tone." },
      "巳午未": { n: "summer", w: "Fire", t: "Fire commands in summer — a blazing climate where balance and 'climate adjustment' matter most." },
      "申酉戌": { n: "autumn", w: "Metal", t: "Metal commands in autumn — the season of harvest and discipline; wood and fire need roots here." },
      "亥子丑": { n: "winter", w: "Water", t: "Water commands in winter — a cold climate; the ancients put warmth first." }
    },
    strength: {
      weak: "The Day Master is weak — a seedling awaiting rain: favor support (its own and resource elements), avoid further drain.",
      balanced: "The Day Master is balanced — a well-circulated chart; the luck pillars set the tempo.",
      strong: "The Day Master is strong — a dense forest: favor outlets (wealth, officer, output) so the power has somewhere to go."
    },
    favLab: "Practical correspondences (traditional pairings)",
    favApp: {
      "木": "East, green, mornings; growth fields — education, creative work, healthcare.",
      "火": "South, red, midday; expressive fields — energy, media, hospitality.",
      "土": "Home ground, yellow; load-bearing fields — property, agriculture, management.",
      "金": "West, white; disciplined fields — finance, engineering, law.",
      "水": "North, black & blue; fluid fields — trade, logistics, research."
    },
    pos: [
      "Year pillar: ancestors and childhood setting — the 'far' palace.",
      "Month pillar: parents, siblings and your youthful stage — the 'near' palace.",
      "Day branch: spouse and your inner middle years — the 'self' palace.",
      "Hour pillar: children, later years and where your aims land — the 'fruit' palace."
    ],
    gods: {
      "比肩": "Peers & partnership: self-reliance plus allies — cooperation with a competitive edge.",
      "劫财": "The rival: bold and fast; mind shared money and disputes.",
      "食神": "The gourmet-talent: expression, taste and ease — a star of quiet good fortune.",
      "伤官": "The rebel-talent: brilliant and rule-bending; brilliance and friction share one root.",
      "偏财": "Windfall wealth: opportunistic and generous; suits flexible, mobile ventures.",
      "正财": "Earned wealth: steady and thrifty; compounds slowly and surely.",
      "七杀": "The warrior: pressure that forges authority — bear it and command.",
      "正官": "The officer: order, rank and reputation; upright dignity — or constraint if excessive.",
      "偏印": "The mystic: unusual learning and intuition; beware wide but shallow study.",
      "正印": "The scholar-protector: mentor luck, learning and kindness."
    },
    dayunNote: "Luck pillars run ten years each — the climate of your chart; the pillar stem's relation to your Day Master sets that decade's theme.",
    dayunLead: "Current pillar {gz} (ages {a}–{b}): its stem forms {god} with your Day Master.",
    dayunNone: "Luck pillars are derived from the solar terms of your birth; the current pillar cannot be shown right now.",
    nayinLine: "Year NaYin: “{ny}” — the sixty pairings take their images from things, per the San Ming Tong Hui."
  },
  zp: {
    title: "Targeted Chart Reading",
    srcLine: "Built from THIS chart — the stars actually seated, their brightness and the natal transformations, read per the star lore of the Zi Wei Dou Shu Quan Shu. Modern renderings, not boilerplate.",
    soulLab: "Life Pattern",
    mutLab: "Four Transformations",
    mutNote: "Lu favors, Quan empowers, Ke ennobles, Ji obstructs — the palace carrying each is where that theme plays out.",
    mutText: { "禄": "Lu: opportunity and flow.", "权": "Quan: control and drive.", "科": "Ke: reputation and mentors.", "忌": "Ji: friction — and mastery through it." },
    bodyLab: "Body Palace · Where Life Concentrates",
    bodyNote: "The Body Palace is where your effort lands after youth. It falls in",
    sanheLab: "Trine & Opposition · The Frame",
    sanheNote: "A palace is read together with its trine partners and its opposition; the stars meeting there shape how your energy expresses.",
    huaLab: "Natal Transformations · The Main Line",
    noStar: "No major star sits here (an empty palace) — it reads through the opposite palace's stars; early years shift with the environment.",
    bright: { "庙": "exalted — strengths fully shine", "旺": "strong — full flow", "得": "well-placed — smooth", "利": "favorable — steady", "平": "neutral", "不": "weakened — held back", "陷": "fallen — weaknesses lead; discipline turns it" },
    hua: {
      "禄": "Hua Lu — resources and flow pour into this palace: the place of opportunity; invest and grow here.",
      "权": "Hua Quan — command and drive concentrate here: claim the lead, mind the steamroller.",
      "科": "Hua Ke — reputation, mentors and rescue live here: it turns misfortune around; good for exams, standing and networks.",
      "忌": "Hua Ji — obsession and friction bind this palace: your life's coursework; manage it, don't spiral on it."
    },
    palDomain: {
      "命宫": "core temperament and life pattern", "兄弟": "siblings and close peers", "夫妻": "marriage and the partner", "子女": "children, juniors and creative work",
      "财帛": "money style and income", "疾厄": "body and health", "迁移": "the outside world and openings abroad", "仆役": "friends, subordinates and the crowd",
      "官禄": "career, achievement and working style", "田宅": "property, home and foundations", "福德": "inner life, tastes and blessing", "父母": "parents, elders and bosses; also the face"
    },
    geju: [
      { name: "Sha-Po-Lang Frame", need: ["七杀", "破军", "贪狼"], scope: "sanfang", g: "Qi Sha, Po Jun and Tan Lang meet across the trine — the classic frame of upheaval and pioneering.", m: "Life in big swings, allergic to standing still; built for pioneering, competitive, transformative paths. Boldness wins, restlessness loses." },
      { name: "Ji-Yue-Tong-Liang Frame", need: ["天机", "太阴", "天同", "天梁"], scope: "sanfang", g: "Tian Ji, Tai Yin, Tian Tong and Tian Liang meet across the trine — the classics say 'Ji Yue Tong Liang makes the skilled official'.", m: "Built for professional and managerial mastery inside stable structures; wild gambles are not the edge here." },
      { name: "Zi-Fu in the Life Palace", need: ["紫微", "天府"], scope: "ming", g: "Zi Wei and Tian Fu share the Life Palace — emperor and treasury together, a noble and wealthy frame.", m: "Command plus administration in one frame; watch vanity and conservative calls." },
      { name: "Fu-Xiang Saluting the Frame", need: ["天府", "天相"], scope: "sanfang", g: "Tian Fu and Tian Xiang salute the Life Palace — the frame of steady provision.", m: "Provision and patrons come; best shining inside large platforms and institutions." },
      { name: "Sun & Moon Together", need: ["太阳", "太阴"], scope: "ming", g: "Tai Yang and Tai Yin share the Life Palace — sun and moon in one person, firm and flexible at once.", m: "Suited to coordination roles; in love, prone to weighing both sides." },
      { name: "Huo-Tan Frame", need: ["贪狼", "火星"], scope: "ming", g: "Tan Lang with Huo Xing in the Life Palace — the classics say 'Huo Tan, ambition runs high': sudden fortune.", m: "When the chance comes, results explode. Ride it; mind the crash." },
      { name: "Ling-Tan Frame", need: ["贪狼", "铃星"], scope: "ming", g: "Tan Lang with Ling Xing in the Life Palace — sudden fortune from unexpected quarters.", m: "Catches off-beat openings; suited to new frontiers — learn to hold what you win." }
    ],
    jixing: ["左辅", "右弼", "文昌", "文曲", "天魁", "天钺", "禄存"],
    shaxing: ["擎羊", "陀罗", "火星", "铃星", "地空", "地劫"],
    jisha: {
      jiLab: "Benefic stars meeting the frame",
      jiText: "Benefics add help, talent and patrons — Zuo/You bring people, Chang/Qu bring craft, Kui/Yue open doors, Lu Cun steadies money.",
      shaLab: "Malefic stars meeting the frame",
      shaText: "Malefics add grit — Yang/Tuo grind, Huo/Ling hasten, Kong/Jie thin the substance; tempered, they forge the bigger frame."
    },
    mzLab: "Soul & Body Stars",
    mzNote: "The Soul star shows the innate bent, the Body star the later course; read their natures below.",
    emptySec: "No major star sits here — read it through the opposite palace; the real work is running your own side well.",
    secs: [["官禄", "Career"], ["财帛", "Wealth"], ["夫妻", "Love"]],
    stars: {
      "紫微": { g: "Zi Wei — Earth, the Emperor Star of the central palace; Hua Qi: Nobility.", m: "Leader archetype: high self-regard, big-picture vision, a natural head who dislikes taking orders. Learn humility and people follow." },
      "天机": { g: "Tian Ji — Wood, the Strategist Star of the Southern Dipper; Hua Qi: Benevolent Ingenuity.", m: "Quick, analytical, multi-talented, a born planner. Prone to overthinking and second-guessing." },
      "太阳": { g: "Tai Yang — Fire, the Sun, great nobility of the central palace; Hua Qi: Honor.", m: "Radiant and generous: gives publicly, cares widely, prizes reputation. In male charts it speaks for father, husband and sons; watch burnout and pride." },
      "武曲": { g: "Wu Qu — Metal, the Wealth Star of the Northern Dipper; Hua Qi: Wealth.", m: "Decisive and hands-on with money and execution: acts first, values results over sentiment. Strong, solitary by temperament." },
      "天同": { g: "Tian Tong — Water, the Blessing Star of the Southern Dipper; Hua Qi: Fortune.", m: "Easygoing, well-liked, young at heart. Watch complacency, low aggression and mood-driven retreat." },
      "廉贞": { g: "Lian Zhen — Fire, the Prison Star of the Northern Dipper; Hua Qi: Restraint; secondary romance star.", m: "Principle wrestling with desire: intense, charismatic, politically adept. Pitfalls: fixation, love-hate extremes, self-made drama." },
      "天府": { g: "Tian Fu — Earth, the Marshal Star of the Southern Dipper, the Treasury; Hua Qi: Command.", m: "The steady vault: conservative, inclusive, a natural administrator of money and people. Pairs best with a bold partner." },
      "太阴": { g: "Tai Yin — Water, the Moon, noble star of the central palace; Hua Qi: Riches; signifies mother, wife, daughters.", m: "Gentle intelligence: refined, feeling, a saver with aesthetic and intuitive gifts. Prone to melancholy, passivity and perfectionism." },
      "贪狼": { g: "Tan Lang — Wood, the Romance Star of the Northern Dipper; star of appetite and many talents.", m: "Versatile and magnetic: broad interests, strong social play, opportunity-rich. Pitfalls: jack of all trades, indulgence, romantic entanglement." },
      "巨门": { g: "Ju Men — Water, the Dark Star of the Northern Dipper; Hua Qi: Obscurity.", m: "The investigator-orator: sharp eyes, sharper tongue, research-driven. Pitfalls: suspicion, disputes, trouble brewing quietly." },
      "天相": { g: "Tian Xiang — Water, the Seal Star, master of the Career palace; Hua Qi: the Seal.", m: "The loyal chancellor: fair, dutiful, polished, a natural mediator. Leans on patrons; learns to own decisions." },
      "天梁": { g: "Tian Liang — Earth, the Shade Star of the Southern Dipper, the Elder; Hua Qi: Shelter.", m: "The guardian-elder: upright, turns misfortune around, drawn to protect and advise. Pitfalls: preaching, aloofness, shouldering too much." },
      "七杀": { g: "Qi Sha — Metal, the General Star of the Southern Dipper; its nature is stern authority.", m: "Fierce independence, appetite for risk, relentless execution. Pitfalls: impulsiveness, solitude, dramatic ups and downs." },
      "破军": { g: "Po Jun — Water, the Ruin Star of the Northern Dipper; Hua Qi: Expenditure.", m: "The vanguard: breaks first, builds after, allergic to stagnation. Pitfalls: impulsive losses, volatile cycles — learn to finish." }
    }
  }
},

/* ================= Español ================= */
es: {
  jp: {
    title: "Lectura detallada",
    srcNote: "Citas según ediciones corrientes; la redacción puede variar. Las lecturas son versiones modernas.",
    sec: { a: "1 · El Maestro del Día", b: "2 · El Mando del Mes", c: "3 · Fuerza y elementos favorables", d: "4 · Los Diez Dioses en los pilares", e: "5 · El ritmo de la suerte", f: "6 · NaYin del año" },
    jishan: { t: "欲知贵贱，先观月令乃提纲。", s: "《渊海子平·继善篇》", ve: "«Para saber rango y valía, lee primero el mando del mes: es el esquema de todo el mapa.»" },
    ditian: { t: "能知衰旺之真机，其于三命之奥，思过半矣。", s: "《滴天髓》", ve: "«Quien comprende el mecanismo de fuerza y debilidad tiene más de la mitad de los misterios del destino.»" },
    hezhi: { t: "何知其人富？财气通门户。何知其人贵？官星有理会。", s: "《滴天髓·何知章》", ve: "«¿Cómo saber si habrá riqueza? El qi de la riqueza cruza la puerta. ¿Y honor? La estrella del cargo está en sintonía.»" },
    nayinSrc: "La imaginería NaYin se expone en San Ming Tong Hui, capítulo «Sobre las imágenes NaYin».",
    stems: {
      "甲": { v: "甲木参天，脱胎要火。", s: "《滴天髓》", ve: "Jia — el árbol que toca el cielo: florece con fuego y echa raíces con agua y tierra.", r: "Pilar natural: responsable y ambicioso; te sostienen la expresión y las raíces." },
      "乙": { v: "乙木虽柔，刲羊解牛。", s: "《滴天髓》", ve: "Yi — la enredadera flexible: suave, pero capaz; crece apoyándose en lo fuerte.", r: "Adaptable y resistente: tu palanca son las plataformas y los mentores." },
      "丙": { v: "丙火猛烈，欺霜侮雪。", s: "《滴天髓》", ve: "Bing — el fuego del sol: ardiente, honesto y radiante.", r: "Carismático e inspirador; cuida tu combustible para no quemarte." },
      "丁": { v: "丁火柔中，内性昭融。", s: "《滴天髓》", ve: "Ding — la luz de la lámpara: blanda fuera, luminosa dentro.", r: "Constancia silenciosa: brillas en el trabajo detallista y artesano." },
      "戊": { v: "戊土固重，既中且正。", s: "《滴天髓》", ve: "Wu — la gran tierra: sólida, centrada y digna de confianza.", r: "Cimiento estable: rindes al máximo cuando otros construyen sobre ti." },
      "己": { v: "己土卑湿，中正蓄藏。", s: "《滴天髓》", ve: "Ji — la tierra de huerto: humilde, nutritiva y almacenista.", r: "El cultivador: creas valor acompañando personas y proyectos." },
      "庚": { v: "庚金带煞，刚健为最。", s: "《滴天髓》", ve: "Geng — el metal del arma: el más duro; el agua lo aclara, el fuego lo afila.", r: "Decidido y tenaz: la disciplina convierte tu esfuerzo en filo." },
      "辛": { v: "辛金软弱，温润而清。", s: "《滴天髓》", ve: "Xin — el metal joya: delicado, cálido y claro.", r: "Preciso y estético: prosperas pulido por la práctica, no en masa." },
      "壬": { v: "壬水通河，能泄金气。", s: "《滴天髓》", ve: "Ren — las grandes aguas: virtud resoluta, flujo sin pausa.", r: "Amplio y fluido: ingenio que atraviesa fronteras; mantén corriente." },
      "癸": { v: "癸水至弱，达于天津。", s: "《滴天髓》", ve: "Gui — el agua más suave, rocío que alcanza el cielo.", r: "Perspicacia suave: tu influencia nace de la constancia callada." }
    },
    seasons: {
      "寅卯辰": { n: "primavera", w: "Madera", t: "En primavera manda la Madera: el tono inicial del mapa." },
      "巳午未": { n: "verano", w: "Fuego", t: "En verano manda el Fuego: aquí el ajuste climático importa más." },
      "申酉戌": { n: "otoño", w: "Metal", t: "En otoño manda el Metal: cosecha y disciplina; Madera y Fuego necesitan raíces." },
      "亥子丑": { n: "invierno", w: "Agua", t: "En invierno manda el Agua: clima frío, los antiguos ponían el calor primero." }
    },
    strength: {
      weak: "Maestro débil — plantila que espera lluvia: favorece el apoyo propio y del recurso; evita más drenaje.",
      balanced: "Maestro equilibrado — mapa bien circulado; los pilares de suerte marcan el ritmo.",
      strong: "Maestro fuerte — bosque denso: favorece salidas (riqueza, cargo, expresión) para que la fuerza vaya a algún sitio."
    },
    favLab: "Correspondencias prácticas (tradicionales)",
    favApp: {
      "木": "Este, verde, mañanas; sectores de crecimiento: educación, creación, salud.",
      "火": "Sur, rojo, mediodía; sectores expresivos: energía, medios, hostelería.",
      "土": "Tierra propia, amarillo; sectores de carga: propiedad, agricultura, gestión.",
      "金": "Oeste, blanco; sectores disciplinados: finanzas, ingeniería, derecho.",
      "水": "Norte, negro y azul; sectores fluidos: comercio, logística, investigación."
    },
    pos: [
      "Pilar del año: raíces y entorno de la infancia — el palacio «lejano».",
      "Pilar del mes: padres, hermanos y tu escenario juvenil — el palacio «cercano».",
      "Rama del día: pareja e intimidad de la madurez — el palacio «propio».",
      "Pilar de la hora: hijos, tarde de la vida y destino de tus metas — el «fruto»."
    ],
    gods: {
      "比肩": "Iguales y sociedad: autosuficiencia con aliados, y un punto competitivo.",
      "劫财": "El rival: audaz y rápido; cuida el dinero compartido y las disputas.",
      "食神": "El talento-gourmet: expresión, gusto y calma; estrella de buena fortuna serena.",
      "伤官": "El talento-rebelde: brillante y rompe reglas; el brillo y la fricción comparten raíz.",
      "偏财": "Riqueza oportunista: generosa y móvil; ideal para ventures flexibles.",
      "正财": "Riqueza ganada: constante y ahorrativa; se compone despacio y seguro.",
      "七杀": "El guerrero: presión que forja autoridad; si la soportas, comandarás.",
      "正官": "El oficial: orden, rango y reputación; dignidad erguida — o jaula si excesivo.",
      "偏印": "El místico: saber poco común e intuición; evita estudiar mucho y aplicar poco.",
      "正印": "El erudito-protector: suerte de mentores, aprendizaje y bondad."
    },
    dayunNote: "Los pilares de suerte duran diez años — el clima del mapa; el tallo del pilar, según su relación con tu Maestro, marca el tema de la década.",
    dayunLead: "Pilar actual {gz} (edades {a}–{b}): su tallo forma {god} con tu Maestro del Día.",
    dayunNone: "Los pilares se derivan de los términos solares; ahora no se puede mostrar el pilar actual.",
    nayinLine: "NaYin del año: «{ny}» — las sesenta parejas toman sus imágenes de las cosas, según el San Ming Tong Hui."
  },
  zp: {
    title: "Lectura dirigida del mapa",
    srcLine: "Construida desde ESTE mapa — las estrellas realmente sentadas, su brillo y las transformaciones natales, leídas según el saber estelar del Zi Wei Dou Shu Quan Shu. Versiones modernas, sin fórmulas de serie.",
    soulLab: "Patrón vital",
    mutLab: "Cuatro transformaciones",
    mutNote: "Lu favorece, Quan empodera, Ke ennoblece, Ji obstaculiza — el palacio que la lleva es donde actúa el tema.",
    mutText: { "禄": "Lu: oportunidad y flujo.", "权": "Quan: control e ímpetu.", "科": "Ke: reputación y mentores.", "忌": "Ji: fricción — y dominio a través de ella." },
    bodyLab: "Palacio del Cuerpo · donde se concentra la vida",
    bodyNote: "El Palacio del Cuerpo es donde aterriza tu esfuerzo tras la juventud. Cae en",
    sanheLab: "Trino y oposición · el armazón",
    sanheNote: "Un palacio se lee junto a sus dos trinos y su oposición; las estrellas que ahí se cruzan moldean cómo se expresa tu energía.",
    huaLab: "Transformaciones natales · la línea maestra",
    noStar: "No hay estrella mayor aquí (palacio vacío) — se lee por las del palacio opuesto; los primeros años cambian con el entorno.",
    emptySec: "No hay estrella mayor aquí — lee por el palacio opuesto; el verdadero trabajo es llevar bien tu propia parte.",
    secs: [["官禄", "Carrera"], ["财帛", "Riqueza"], ["夫妻", "Amor"]],
    bright: { "庙": "exaltada — fortalezas en pleno brillo", "旺": "fuerte — flujo pleno", "得": "bien ubicada — expresión fluida", "利": "favorable — expresión estable", "平": "neutra", "不": "debilitada — retenida", "陷": "caída — mandan las carencias; la disciplina lo corrige" },
    hua: {
      "禄": "Hua Lu — recursos y flujo entran en este palacio: el lugar de la oportunidad; invierte y haz crecer aquí.",
      "权": "Hua Quan — mando e ímpetu se concentran aquí: toma la iniciativa, sin atropellar.",
      "科": "Hua Ke — reputación, mentores y remedio viven aquí: vuelve propicia la adversidad; favorece exámenes, prestigio y redes.",
      "忌": "Hua Ji — obsesión y fricción atan este palacio: es tu tarea de vida; gestionala, no des vueltas sobre ella."
    },
    palDomain: {
      "命宫": "temperamento y patrón vital", "兄弟": "hermanos y cercanos", "夫妻": "matrimonio y pareja", "子女": "hijos, jóvenes y obra creativa",
      "财帛": "dinero e ingresos", "疾厄": "cuerpo y salud", "迁移": "el mundo exterior y las oportunidades fuera", "仆役": "amigos, subordinados y el público",
      "官禄": "carrera, logros y estilo de trabajo", "田宅": "propiedad, hogar y cimientos", "福德": "vida interior, gustos y bendición", "父母": "padres, mayores y jefes; también el rostro"
    },
    geju: [
      { name: "Eje Sha-Po-Lang", need: ["七杀", "破军", "贪狼"], scope: "sanfang", g: "Qi Sha, Po Jun y Tan Lang se reúnen en el trino — el eje clásico de convulsión y pioneería.", m: "Vida de grandes vaivenes, alérgica a la quietud; hecho para caminos pioneros, competitivos y transformadores. Gana el audaz, pierde el inquieto." },
      { name: "Eje Ji-Yue-Tong-Liang", need: ["天机", "太阴", "天同", "天梁"], scope: "sanfang", g: "Tian Ji, Tai Yin, Tian Tong y Tian Liang se reúnen en el trino — los clásicos dicen «Ji Yue Tong Liang hace al funcionario diestro».", m: "Hecho para el dominio profesional y directivo en estructuras estables; la apuesta salvaje no es tu fuerte." },
      { name: "Zi-Fu en el Palacio del Yo", need: ["紫微", "天府"], scope: "ming", g: "Zi Wei y Tian Fu comparten el Palacio del Yo — emperador y almacén juntos: cuadro noble y opulento.", m: "Mando y administración en un solo cuadro; cuida la vanidad y las decisiones tímidas." },
      { name: "Fu-Xiang saludando el armazón", need: ["天府", "天相"], scope: "sanfang", g: "Tian Fu y Tian Xiang saludan el Palacio del Yo — el cuadro del sustento estable.", m: "Sustento y padrinos llegan; brillas mejor dentro de grandes plataformas e instituciones." },
      { name: "Sol y Luna juntos", need: ["太阳", "太阴"], scope: "ming", g: "Tai Yang y Tai Yin comparten el Palacio del Yo — sol y luna en una persona: firmeza y flexibilidad a la vez.", m: "Apto para roles de coordinación; en el amor, tenderás a sopesar ambos lados." },
      { name: "Eje Huo-Tan", need: ["贪狼", "火星"], scope: "ming", g: "Tan Lang con Huo Xing en el Palacio del Yo — los clásicos dicen «Huo Tan, alta ambición»: fortuna súbita.", m: "Cuadro de explosión por oportunidad: cuando llega, los resultados estallan. Móntala; cuida el desplome." },
      { name: "Eje Ling-Tan", need: ["贪狼", "铃星"], scope: "ming", g: "Tan Lang con Ling Xing en el Palacio del Yo — fortuna súbita desde rincones inesperados.", m: "Caza aperturas poco comunes; apto para fronteras nuevas — aprende a sostener lo ganado." }
    ],
    jixing: ["左辅", "右弼", "文昌", "文曲", "天魁", "天钺", "禄存"],
    shaxing: ["擎羊", "陀罗", "火星", "铃星", "地空", "地劫"],
    jisha: {
      jiLab: "Estrellas benéficas en el armazón",
      jiText: "Las benéficas suman ayuda, talento y padrinos — Zuo/You traen gente, Chang/Qu traen oficio, Kui/Yue abren puertas, Lu Cun asienta el dinero.",
      shaLab: "Estrellas malignas en el armazón",
      shaText: "Las malignas suman fricción — Yang/Tuo desgastan, Huo/Ling aceleran, Kong/Jie adelgazan la sustancia; templadas, forjan el cuadro mayor."
    },
    mzLab: "Estrellas del Alma y del Cuerpo",
    mzNote: "La estrella del Alma muestra la inclinación innata; la del Cuerpo, el rumbo posterior. Lee sus naturalezas abajo.",
    stars: {
      "紫微": { g: "Zi Wei — Tierra, la Estrella Emperador del palacio central; su transformación es la Nobleza.", m: "Arquetipo de líder: alta autoestima, visión amplia, un jefe natural que no acepta órdenes. Aprende humildad y la gente te seguirá." },
      "天机": { g: "Tian Ji — Madera, la Estrella Estratega de la Osa del Sur; su transformación es la Bondad ingeniosa.", m: "Rápido, analítico, polifacético, planificador nato. Riesgo: pensar de más y dudar." },
      "太阳": { g: "Tai Yang — Fuego, el Sol, gran nobleza del palacio central; su transformación es el Honor.", m: "Radioso y generoso: da en público, cuida a muchos, valora el renombre. En cartas masculinas habla del padre, el marido, los hijos; cuida el desgaste y el orgullo." },
      "武曲": { g: "Wu Qu — Metal, la Estrella de la Riqueza de la Osa del Norte; su transformación es la Riqueza.", m: "Decidido y práctico con el dinero y la ejecución: actúa primero, valora resultados sobre sentimientos." },
      "天同": { g: "Tian Tong — Agua, la Estrella de la Fortuna de la Osa del Sur; su transformación es la Dicha.", m: "Tranquilo, querido, joven de espíritu. Riesgo: comodidad, poca agresividad, retirarse por emociones." },
      "廉贞": { g: "Lian Zhen — Fuego, la Estrella Prisión de la Osa del Norte; su transformación es la Contención; estrella romántica secundaria.", m: "Principio en pugna con el deseo: intenso, carismático, hábil político. Riesgo: obsesión, amor-odio, drama propio." },
      "天府": { g: "Tian Fu — Tierra, la Estrella Mariscal de la Osa del Sur, el Almacén; su transformación es el Mando.", m: "El almacén estable: conservador, inclusivo, administrador natural de dinero y gente. Funciona mejor con una pareja audaz." },
      "太阴": { g: "Tai Yin — Agua, la Luna, noble del palacio central; su transformación es la Riqueza; significa madre, esposa, hijas.", m: "Inteligencia suave: refinado, sensible, ahorrador, con estética e intuición. Riesgo: melancolía, pasividad, perfeccionismo." },
      "贪狼": { g: "Tan Lang — Madera, la Estrella del Romance de la Osa del Norte; estrella del apetito y los talentos.", m: "Versátil y magnético: intereses amplios, juego social fuerte, muchas oportunidades. Riesgo: hacedor de muchos oficios, excesos, enredos amorosos." },
      "巨门": { g: "Ju Men — Agua, la Estrella Oscura de la Osa del Norte; su transformación es la Oscuridad.", m: "Investigador-orador: ojo fino, lengua más fina, vocación de estudio. Riesgo: sospecha, disputas, problemas a fuego lento." },
      "天相": { g: "Tian Xiang — Agua, la Estrella del Sello, señora del palacio de Carrera; su transformación es el Sello.", m: "El canciller leal: justo, cumplidor, pulido, mediador nato. Se apoya en padrinos; aprende a decidir por sí mismo." },
      "天梁": { g: "Tian Liang — Tierra, la Estrella del Amparo de la Osa del Sur, el Anciano; su transformación es el Amparo.", m: "El guardián mayor: recto, convierte la desgracia en aprendizaje, protege y aconseja. Riesgo: sermonear, altivez, cargar con todo." },
      "七杀": { g: "Qi Sha — Metal, la Estrella General de la Osa del Sur; su naturaleza es la autoridad severa.", m: "Independencia feroz, apetito de riesgo, ejecución implacable. Riesgo: impulsividad, soledad, altibajos dramáticos." },
      "破军": { g: "Po Jun — Agua, la Estrella de la Ruina de la Osa del Norte; su transformación es el Gasto.", m: "La vanguardia: rompe primero, construye después, alérgico a la quietud. Riesgo: pérdidas impulsivas, ciclos volátiles — aprende a terminar." }
    }
  }
},

/* ================= العربية ================= */
ar: {
  jp: {
    title: "القراءة المفصلة",
    srcNote: "الاقتباسات وفق الطبعات الشائعة وقد تتفاوت الصياغة؛ والقراءات صياغات حديثة.",
    sec: { a: "١ · سيد اليوم", b: "٢ · أمر الشهر", c: "٣ · القوة والعناصر المحببة", d: "٤ · الآلهة العشرة في الأعمدة", e: "٥ · إيقاع الحظ", f: "٦ · نا يين السنة" },
    jishan: { t: "欲知贵贱，先观月令乃提纲。", s: "《渊海子平·继善篇》", ve: "«لفهم المكانة، اقرأ أولًا أمر الشهر — فهو هيكل الخريطة كلها.»" },
    ditian: { t: "能知衰旺之真机，其于三命之奥，思过半矣。", s: "《滴天髓》", ve: "«من أدرك سر القوة والضعف، ملك أكثر من نصف أسرار المصير.»" },
    hezhi: { t: "何知其人富？财气通门户。何知其人贵？官星有理会。", s: "《滴天髓·何知章》", ve: "«كيف نعلم الغنى؟ إذا عبر qi الثروة الباب. وكيف الشرف؟ إذا انسجمت نجمة المنصب.»" },
    nayinSrc: "صور نا يين مشروحة في كتاب سان مينغ تونغ هوي، فصل «صور نا يين».",
    stems: {
      "甲": { v: "甲木参天，脱胎要火。", s: "《滴天髓》", ve: "جيا — الشجرة العتيقة: تزدهر بالنار وتتأصل بالماء والتراب.", r: "عماد طبيعي: مسؤول طموح؛ يعينك التعبير والجذور." },
      "乙": { v: "乙木虽柔，刲羊解牛。", s: "《滴天髓》", ve: "يي — الكرمة المرنة: رقيقة لكنها قادرة، تنمو متسلقة القوي.", r: "متكيف صامد: نقتك المنصات والموجهون." },
      "丙": { v: "丙火猛烈，欺霜侮雪。", s: "《滴天髓》", ve: "بينغ — نار الشمس: ملتهبة صادقة مشرقة.", r: "كاريزمي ملهم؛ احفظ وقودك من الاحتراق." },
      "丁": { v: "丁火柔中，内性昭融。", s: "《滴天髓》", ve: "دينغ — ضوء المصباح: لين ظاهرًا مضيء باطنًا.", r: "مثابرة هادئة: تلمع في العمل الدقيق الحرفي." },
      "戊": { v: "戊土固重，既中且正。", s: "《滴天髓》", ve: "وو — الأرض العظيمة: راسخة وسطية موثوقة.", r: "أساس ثابت: تبرز حين يبني الآخرون فوقك." },
      "己": { v: "己土卑湿，中正蓄藏。", s: "《滴天髓》", ve: "جي — تربة البستان: متواضعة مغذية مختزنة.", r: "الراعي: تصنع القيمة بتنمية الناس والمشاريع." },
      "庚": { v: "庚金带煞，刚健为最。", s: "《滴天髓》", ve: "قنغ — معدن السيف: الأصلب؛ الماء يصقله والنار تسنّه.", r: "حازم عنيد: الإتقان يحول جهدك إلى نصل." },
      "辛": { v: "辛金软弱，温润而清。", s: "《滴天髓》", ve: "شين — معدن الجوهرة: رقيق دافئ نقي.", r: "دقيق ذوق: تزدهر بصقل الممارسة لا بالكم." },
      "壬": { v: "壬水通河，能泄金气。", s: "《滴天髓》", ve: "رن — المياه العظيمة: فضيلة حازمة جارية لا تتوقف.", r: "رحب الاطر: بارع عبر الحدود؛ أبقِ التيار جاريًا." },
      "癸": { v: "癸水至弱，达于天津。", s: "《滴天髓》", ve: "قوي — أرقّ الماء بلوغ الندى السماوي.", r: "بصيرة رقيقة: تأثيرك من الهدوء المتواصل." }
    },
    seasons: {
      "寅卯辰": { n: "الربيع", w: "الخشب", t: "الخشب يسود في الربيع: نبرة الخريطة الأولى." },
      "巳午未": { n: "الصيف", w: "النار", t: "النار تسود في الصيف: هنا يأتي دور «ضبط المناخ»." },
      "申酉戌": { n: "الخريف", w: "المعدن", t: "المعدن يسود في الخريف: حصاد وانضباط، وخدام النار تحتاج جذورًا." },
      "亥子丑": { n: "الشتاء", w: "الماء", t: "الماء يسود في الشتاء: مناخ بارد، والقدماء يقدّمون الدفء." }
    },
    strength: {
      weak: "سيد اليوم ضعيف — غرسة تطلب مطر: فضّل الدعم (عنصره وعنصر الإطعام) ولا تزد التصريف.",
      balanced: "سيد اليوم متوازن — خريطة جيدة الدوران؛ أعمدة الحظ تضبط الإيقاع.",
      strong: "سيد اليوم قوي — غابة كثيفة: فضّل المخارج (ثروة ومنصب وتعبير) ليجد القوة مخرجًا."
    },
    favLab: "المقابلات العملية (تقليدية)",
    favApp: {
      "木": "الشرق والأخضر والصباح؛ مجالات النمو: تعليم وإبداع وصحة.",
      "火": "الجنوب والأحمر والظهر؛ مجالات التعبير: طاقة وإعلام وضيافة.",
      "土": "الأرض الأم والأصفر؛ مجالات التحمل: عقار وزراعة وإدارة.",
      "金": "الغرب والأبيض؛ مجالات الانضباط: مال وهندسة وعدالة.",
      "水": "الشمال والأسود والأزرق؛ مجالات الجريان: تجارة ولوجستيات وبحوث."
    },
    pos: [
      "عمود السنة: الجذور وبيئة الطفولة — القصر «البعيد».",
      "عمود الشهر: الوالدان والإخوة ومسرح الشباب — القصر «القريب».",
      "فرع اليوم: الزوج وباطن منتصف العمر — قصر «الذات».",
      "عمود الساعة: الأبناء وآخر العمر ومصير الأهداف — «الثمرة»."
    ],
    gods: {
      "比肩": "الأقران والشراكة: اعتماد على النفس مع حلفاء، وحدة تنافسية.",
      "劫财": "الغريم: جسور سريع؛ احذر المال المشترك والخصومات.",
      "食神": "نجم الموهبة والشهية: تعبير وذوق وسكينة — حظ هادئ.",
      "伤官": "نجم التمرد الموهوب: لامع خارج القواعد؛ والامتياز والخلاف سواء الأصل.",
      "偏财": "ثروة الفرص: كريم متنقل؛ يناسب المشاريع المرنة.",
      "正财": "ثروة الكدّ: ثابت مقتصد؛ تتراكم ببطء وأمان.",
      "七杀": "المحارب: ضغط يصوغ السلطان — احتمله لتأمر.",
      "正官": "العسكري: نظام ومقام وسمعة — وقار مستقيم أو قيد إن أفرط.",
      "偏印": "الصوفي: علم غريب وحدس؛ احذر التعلم الواسع الضحل.",
      "正印": "العالِم الحامي: حظ الموجهين والتعلم والرفق."
    },
    dayunNote: "أعمدة الحظ عشر سنوات لكل منها — مناخ خريطتك؛ وعلاقة سيف العمود بسيد اليوم تحدد موضوع العقد.",
    dayunLead: "العمود الحالي {gz} (الأعمار {a}–{b}): سيفه يكوّن {god} مع سيد يومك.",
    dayunNone: "تُشتق الأعمدة من مصطلحات الشمس الشمسية؛ لا يمكن عرض العمود الحالي الآن.",
    nayinLine: "نا يين السنة: «{ny}» — الستون ثنائيًا تأخذ صورها من الأشياء، وفق سان مينغ تونغ هوي."
  },
  zp: {
    title: "قراءة موجَّهة للخريطة",
    srcLine: "مبنية من هذه الخريطة نفسها — النجوم الجالسة فعلًا وبريقها وتحولات الميلاد، وفق أدب النجوم في كتاب تسي وي دو شو تشوان شو. صياغات حديثة، لا قوالب جاهزة.",
    soulLab: "النمط الحياتي",
    mutLab: "التحولات الأربعة",
    mutNote: "لو تيسير، وتشوان سيطرة، وكه سمعة، وجي احتكاك — والقصر الحامل هو ميدان الموضوع.",
    mutText: { "禄": "لو: فرصة وانسياب.", "权": "تشوان: سيطرة ودافع.", "科": "كه: سمعة ومرشدون.", "忌": "جي: احتكاك — وإتقان عبره." },
    bodyLab: "قصر الجسد · حيث يتركز العمر",
    bodyNote: "قصر الجسد هو حيث يهبط جهدك بعد الشباب. يقع في",
    sanheLab: "الثالوث والمقابل · الهيكل",
    sanheNote: "يُقرأ القصر مع شريكي الثالوث وخصمه؛ والنجوم المتقاطعة هناك تصوغ كيف تتجلّى طاقتك.",
    huaLab: "تحولات الميلاد · الخط الرئيسي",
    noStar: "لا نجم كبير جالس هنا (قصر فارغ) — يُقرأ عبر نجوم القصر المقابل؛ والسنوات الأولى تتقلب مع البيئة.",
    emptySec: "لا نجم كبير هنا — اقرأ عبر القصر المقابل؛ والعمل الحقيقي أن تحسن جانبك أنت.",
    secs: [["官禄", "المهنة"], ["财帛", "الثروة"], ["夫妻", "الحب"]],
    bright: { "庙": "مُشرِف — تلمع المزايا كاملة", "旺": "قوي — انسياب كامل", "得": "حسن الموضع — انسياب سلس", "利": "مؤاتٍ — انسياب مستقر", "平": "محايد", "不": "مُضعَف — محجوب", "陷": "ساقط — تتصدر الضعفات؛ والانضباط يقلبه" },
    hua: {
      "禄": "هوا لو — الموارد والانسياب يصبّان في هذا القصر: موضع الفرصة؛ استثمر وأنمِ هنا.",
      "权": "هوا تشوان — السيطرة والدافع يت集中ان هنا: خذ المبادرة، واحذر الساحق.",
      "科": "هوا كه — الذكر والمريدون والفرج هنا: يقلب الشدة، وينفع الاختبارات والسمعة والعلاقات.",
      "忌": "هوا جي — الهوس والاحتكاك يقيّدان هذا القصر: درس عمرك؛ أدِرْه ولا تدور في حلقته."
    },
    palDomain: {
      "命宫": "المزاج الجوهري ونمط العمر", "兄弟": "الإخوة والأقران", "夫妻": "الزواج والشريك", "子女": "الأبناء والأصاغر والعمل الإبداعي",
      "财帛": "أسلوب المال والدخل", "疾厄": "الجسد والصحة", "迁移": "الخارج والفرص في الغربة", "仆役": "الأصدقاء والمرؤوسون والعامة",
      "官禄": "المهنة والإنجاز وأسلوب العمل", "田宅": "العقار والبيت والأساس", "福德": "الحياة الداخلية والذوق والبركة", "父母": "الوالدان والكبار والرؤساء؛ وكذلك الملامح"
    },
    geju: [
      { name: "محور شا-بو-لانغ", need: ["七杀", "破军", "贪狼"], scope: "sanfang", g: "تلتقي تشي شا وبو جون وتان لانغ في الثالوث — المحور الكلاسيكي للهزجة والريادة.", m: "عمر بمدارج كبرى، كاره للسكون؛ صُنع للمسارات الريادية والتنافسية والتحويلية. يفوز الجسور ويخسر القلِق." },
      { name: "محور جي-يويه-تونغ-ليانغ", need: ["天机", "太阴", "天同", "天梁"], scope: "sanfang", g: "تلتقي تيان جي وتاي ين وتيان تونغ وتيان ليانغ في الثالوث — يقول الكلاسيك «جي يويه تونغ ليانغ يصنع الموظف الماهر».", m: "مصنوع للإتقان المهني والإداري داخل هياكل مستقرة؛ والمقامرة الجامحة ليست حذّاك." },
      { name: "تسي-فو في قصر الذات", need: ["紫微", "天府"], scope: "ming", g: "تسي وي وتيان فو يتشاركان قصر الذات — الإمبراطور والخزين معًا: محور نبيل غني.", m: "قيادة وإدارة في محور واحد؛ احذر الغرور والقرارات المترددة." },
      { name: "فو-شيان يحيّون الهيكل", need: ["天府", "天相"], scope: "sanfang", g: "تيان فو وتيان شيان يحيّون قصر الذات — محور الرزق المستقر.", m: "الرزق والمريدون يأتون؛ تتألق أفضل داخل منصات ومؤسسات كبرى." },
      { name: "الشمس والقمر معًا", need: ["太阳", "太阴"], scope: "ming", g: "تاي يانغ وتاي ين يتشاركان قصر الذات — شمس وقمر في شخص واحد: حزم ومرونة معًا.", m: "ملائم لأدوار التنسيق؛ وفي الحب تميل إلى موازنة الطرفين." },
      { name: "محور هوو-تان", need: ["贪狼", "火星"], scope: "ming", g: "تان لانغ مع هوو شينغ في قصر الذات — يقول الكلاسيك «هوو تان، طموح عالٍ»: رزق مفاجئ.", m: "محور انفجار بالفرصة: حين تأتي تنفجر النتائج. ارْكَبها؛ واحذر الانهيار." },
      { name: "محور لينغ-تان", need: ["贪狼", "铃星"], scope: "ming", g: "تان لانغ مع لينغ شينغ في قصر الذات — رزق مفاجئ من جهات غير متوقعة.", m: "يصطاد الفتحات النادرة؛ ملائم للحدود الجديدة — تعلّم أن تحفظ ما كسبت." }
    ],
    jixing: ["左辅", "右弼", "文昌", "文曲", "天魁", "天钺", "禄存"],
    shaxing: ["擎羊", "陀罗", "火星", "铃星", "地空", "地劫"],
    jisha: {
      jiLab: "نجوم نافعة تحيط الهيكل",
      jiText: "النافعة تضيف عونًا وموهبة ومريدين — تسو/يو تجلب الناس، تشانغ/تشو تجلب الصنعة، كوي/يويه يفتحون الأبواب، لو تسون يثبّت المال.",
      shaLab: "نجوم مؤذية تحيط الهيكل",
      shaText: "المؤذية تضيف احتكاكًا — يانغ/تو تسلي، هوو/لينغ تعجّل، كونغ/جيه تنقص الجوهر؛ ومع التململ تُطوَّع لتصوغ الهيكل الأكبر."
    },
    mzLab: "نجم الروح ونجم الجسد",
    mzNote: "نجم الروح يبين الميل الفطري، ونجم الجسد المسار اللاحق؛ اقرأ طبيعتيهما أدناه.",
    stars: {
      "紫微": { g: "تسي وي — تراب، نجم الإمبراطور للقصر المركزي؛ تحوله: النُّبل.", m: "أركيتيب القائد: ثقة ذات عالية، رؤية واسعة، رئيس بالفطرة لا يقبل الأوامر. تعلّم التواضع يتبعك الناس." },
      "天机": { g: "تيان جي — خشب، نجم الاستراتيجي للدارة الجنوبية؛ تحوله: الود الخيّاط.", m: "سريع تحليلي متعدد المواهب مخطط بالفطرة. الخطر: الإفراط في التفكير والتردد." },
      "太阳": { g: "تاي يانغ — نار، الشمس، عظيم النبل للقصر المركزي؛ تحوله: الشرف.", m: "مشعّ كريم: يعطي علنًا، يرعى الكثيرًا، يقدّر الذكر. في خرائط الرجال يتحدث عن الأب والزوج والأبناء؛ احذر الإنهاك والكِبر." },
      "武曲": { g: "وو تشو — معدن، نجم الثروة للدارة الشمالية؛ تحوله: الثروة.", m: "حازم عملي في المال والتنفيذ: يفعل أولًا، ويقدّر النتائج على المشاعر. طبع قوي منعزل." },
      "天同": { g: "تيان تونغ — ماء، نجم البركة للدارة الجنوبية؛ تحوله: السعادة.", m: "ودود محبوب فتي القلب. الخطر: الاسترخاء، ضعف الحسم، الانسحاب العاطفي." },
      "廉贞": { g: "ليان تشن — نار، نجم السجن للدارة الشمالية؛ تحوله: الكف؛ ونجم رومانسي ثانوي.", m: "مبدأ يتشابك مع الرغبة: حادّ كاريزمي ذو ذكاء سياسي. الخطر: الهوس، الحب-الكراهية، الدراما ذاتية الصنع." },
      "天府": { g: "تيان فو — تراب، النجم المارشال للدارة الجنوبية، الخزين؛ تحوله: القيادة.", m: "الخزين الثابت: محافظ شامل، مدير فطري للمال والناس. يزدهر مع شريك جسور." },
      "太阴": { g: "تاي ين — ماء، القمر، نبيل القصر المركزي؛ تحوله: الغنى؛ يرمز للأم والزوجة والبنات.", m: "ذكاء رقيق: مصقول عاطفي، مدخّر، بذائقة وحدس. الخطر: الحزن، السلبية، الكمالية." },
      "贪狼": { g: "تان لانغ — خشب، نجم الرومانسية للدارة الشمالية؛ نجم الشهية والمواهب.", m: "متعدد جاذب: اهتمامات واسعة، حضور اجتماعي قوي، فرص كثيرة. الخطر: حِرَف بلا إتقان، إفراطات، تشابك عاطفي." },
      "巨门": { g: "جيو من — ماء، النجم المظلم للدارة الشمالية؛ تحوله: الظلمة.", m: "الباحث-الخاطب: عين دقيقة ولسان أحدث، شغف بالبحث. الخطر: الريبة، الجدل، ما يتدبر على مهل." },
      "天相": { g: "تيان شيان — ماء، نجم الختم، سيد قصر المهنة؛ تحوله: الختم.", m: "الوزير الوفي: عادل ملتزم مصقول وسيط فطري. يستند إلى المرضى؛ ويتعلم أن يقرر بنفسه." },
      "天梁": { g: "تيان ليانغ — تراب، نجم الظل للدارة الجنوبية، الشيخ؛ تحوله: الظل.", m: "الولي الشيخ: مستقيم يحوّل الشدة، يرعى وينصح. الخطر: المواعظ، الرفعة، حَمل كل شيء." },
      "七杀": { g: "تشي شا — معدن، نجم الجنرال للدارة الجنوبية؛ طبيعته السلطة الصارمة.", m: "استقلال جسور، شهية مخاطرة، تنفيذ لا يرحم. الخطر: الاندفاع، العزلة، مدارج صاعدة هابطة." },
      "破军": { g: "بو جيون — ماء، نجم الخراب للدارة الشمالية؛ تحوله: الإنفاق.", m: "الطليعة: يكسر أولًا ويبني بعد، حديث القصور. الخطر: خسائر اندفاعية ودورات متقلبة — تعلّم أن تختم." }
    }
  }
},

/* ================= 日本語 ================= */
ja: {
  jp: {
    title: "詳細解盤",
    srcNote: "引用は通行本による。字句は版本で多少異なります。解説は現代語の参考訳です。",
    sec: { a: "一 · 日主の本性", b: "二 · 月令の提綱", c: "三 · 旺衰と喜用", d: "四 · 十神と四柱", e: "五 · 大運のリズム", f: "六 · 納音の年命" },
    jishan: { t: "欲知贵贱，先观月令乃提纲。", s: "《淵海子平・継善篇》", ve: "「貴賤を知らんと欲すれば、先ず月令を観て提綱と為す。」" },
    ditian: { t: "能知衰旺之真机，其于三命之奥，思过半矣。", s: "《滴天髄》", ve: "「衰旺の真機を知り得れば、三命の奥において思うこと半ばを過ぐ。」" },
    hezhi: { t: "何知其人富？财气通门户。何知其人贵？官星有理会。", s: "《滴天髄・何知章》", ve: "「何以その人の富を知る。財の気门户に通ずればなり。何以その人の貴を知る。官星に理会有ればなり。」" },
    nayinSrc: "納音取象は『三命通会』論納音取象に拠る。六十干支を物象に喻える。",
    stems: {
      "甲": { v: "甲木参天，脱胎要火。", s: "《滴天髄・十干体象》", ve: "甲は天に聳える大木。火を受けて輝き、水と土の滋養を得て長く立つ。", r: "天然の大黒柱。責任感と向上心のかたまり。表現（火）と支え（水・土）が命綱。" },
      "乙": { v: "乙木虽柔，刲羊解牛。", s: "《滴天髄・十干体象》", ve: "乙はしなやかな蔓。柔らかだが羊も解く力があり、強いものに寄って伸びる。", r: "適応力と粘り。頼れる舞台と師があなたの梃子。" },
      "丙": { v: "丙火猛烈，欺霜侮雪。", s: "《滴天髄・十干体象》", ve: "丙は太陽の火。霜雪をも欺く烈しさで、周囲を照らす。", r: "カリスマと放射力。人を照らす反面、燃え尽きに注意。" },
      "丁": { v: "丁火柔中，内性昭融。", s: "《滴天髄・十干体象》", ve: "丁は灯の火。外は柔らかく、内は明るく、旺いても烈せず衰えても窮せず。", r: "静かな持続力。細部に光る職人気質の仕事が得意。" },
      "戊": { v: "戊土固重，既中且正。", s: "《滴天髄・十干体象》", ve: "戊は堅固な大地。中正にして万物の司。", r: "揺るがぬ基盤。人があなたの上に築くことで力を発揮。" },
      "己": { v: "己土卑湿，中正蓄藏。", s: "《滴天髄・十干体象》", ve: "己は田園の土。卑しみ湛えて、木盛を憂えず水狂を畏れず。", r: "育てる者。人と物を時間かけて耕し価値にする。" },
      "庚": { v: "庚金带煞，刚健为最。", s: "《滴天髄・十干体象》", ve: "庚は帯煞の金。剛健最たり、水を得て清く火を得て鋭し。", r: "果断でタフ。鍛錬が努力を刃に変える。" },
      "辛": { v: "辛金软弱，温润而清。", s: "《滴天髄・十干体象》", ve: "辛は珠玉の金。温潤にして清く、社稷を扶け生霊を救う。", r: "精緻で品質眼。実務で磨かれるほど輝く。" },
      "壬": { v: "壬水通河，能泄金气。", s: "《滴天髄・十干体象》", ve: "壬は河に通ずる水。剛中の徳あり、周流して滞らず。", r: "広く流動的。境界を越える発想。澱ませず流せ。" },
      "癸": { v: "癸水至弱，达于天津。", s: "《滴天髄・十干体象》", ve: "癸は至弱の水にして天津に達す。龍を得て運行すれば功化神の如し。", r: "静かな洞察。地味な積み重ねが影響力になる。" }
    },
    seasons: {
      "寅卯辰": { n: "春", w: "木", t: "春は木の季節。生発の気命式の第一のトーンを決める。" },
      "巳午未": { n: "夏", w: "火", t: "夏は火の季節。炎上の気候では調候の balance が要。" },
      "申酉戌": { n: "秋", w: "金", t: "秋は金の季節。収穫と肃殺。木火は根気を要す。" },
      "亥子丑": { n: "冬", w: "水", t: "冬は水の季節。寒気には先ず温かさ（調候）を。" }
    },
    strength: {
      weak: "日主弱 ― 雨を待つ苗。自元素と印星の支援を喜び、さらなる剋泄を忌む。",
      balanced: "日主中和 ― 巡りの良い命式。大運がテンポを決める。",
      strong: "日主強 ― 茂る林。財・官・食傷の出口を作り力を流すのが吉。"
    },
    favLab: "開運の伝統的対応",
    favApp: {
      "木": "東・緑・朝。成長型分野：教育・クリエイティブ・医療。",
      "火": "南・赤・昼。表現型分野：エネルギー・メディア・飲食。",
      "土": "本地・黄。支える分野：不動産・農業・管理。",
      "金": "西・白。精鋭型分野：金融・エンジニアリング・法務。",
      "水": "北・黒青。流動型分野：貿易・ロジ・調査研究。"
    },
    pos: [
      "年柱に見れば：ルーツと少年期の環境 ― 「遠」の宮。",
      "月柱に見れば：父母兄弟と青年期の舞台 ― 「近」の宮。",
      "日支に見れば：配偶者と中年の内面 ― 「身」の宮。",
      "時柱に見れば：子・晩年・志の行き先 ― 「実」の宮。"
    ],
    gods: {
      "比肩": "自立と仲間。協力もでき競いもする。",
      "劫财": "胆力と速さ。共同の金と争いに注意。",
      "食神": "表現と味覚と余裕。静かな福の星。",
      "傷官": "鋭い才と反骨。光と摩擦は同根。",
      "偏財": "機会の財。機動的に動く稼ぎに向く。",
      "正財": "本業の財。堅実に積むタイプ。",
      "七殺": "圧力がそのまま迫力。耐えれば権威が付く。",
      "正官": "規律と地位。正しければ貴、過ぎれば束縛。",
      "偏印": "独特な学識と直感。広く浅くになりがちに注意。",
      "印綬": "庇護と学問。長年の助けと仁厚な心。"
    },
    dayunNote: "大運は十年一運の五行の気候。運干と日主の十神関係が、その十年の主題になる。",
    dayunLead: "現在大運 {gz}（数え {a}〜{b} 歳）：運干は日主に対し「{god}」。",
    dayunNone: "大運は節気に応じて推算するため、現在の運は表示できません。",
    nayinLine: "年命の納音は「{ny}」― 六十干支を物象に喻えたものです（三命通会による）。"
  },
  zp: {
    title: "命盤の個別解読",
    srcLine: "この命盤に実際に坐する星・その明暗・生年四化から、『紫微斗数全書』の星性に基づいて読み解きます。汎用の定型文ではなく、盤ごとの個別解読（現代語）です。",
    soulLab: "命格の基調",
    mutLab: "四化",
    mutNote: "禄は恵み、権は掌握、科は名声、忌は試練。化のある宮が人生の焦点。",
    mutText: { "禄": "化禄：チャンスと流れ。", "权": "化権：掌握と推進力。", "科": "化科：名声と恩人。", "忌": "化忌：試練と、それを越えた達成。" },
    bodyLab: "身宮 · 後天の重心",
    bodyNote: "身宮は若き日を過ぎたのち、あなたの力の注ぐ先。その落宮は",
    sanheLab: "三方四正 · 格局の補助",
    sanheNote: "命宮は三合の二宮と対宮と併せて読む。そこに会する星が、エネルギーの現れ方を形づくる。",
    huaLab: "生年四化 · 人生の主線",
    noStar: "この宮に正曜なし（空宮）。対宮の星を借りて論じる——若い頃の変転が多く、環境の影響を受けやすい。",
    emptySec: "この宮に正曜なし。対宮や借星で論じ、後天の研鑽が要る。",
    secs: [["官禄", "仕事"], ["财帛", "金運"], ["夫妻", "恋愛"]],
    bright: { "庙": "廟旺——星の長所が全開", "旺": "旺——エネルギー満ち、力強い", "得": "得地——自在に発揮", "利": "得利——安定して発揮", "平": "平——中性的", "不": "不得地——長所が抑えられる", "陷": "陥落——短所が支配。鍛錬で変える" },
    hua: {
      "禄": "化禄——この宮に財禄と順風が流れ込む。機会の座。ここで育てよ。",
      "权": "化権——主導権と推進力がこの宮に集う。リードせよ。強引は禁物。",
      "科": "化科——名声・恩人・救済はこの宮に。逆境を好転させ、試験・評判・人脈に効く。",
      "忌": "化忌——執着と障害がこの宮に絡む。生涯の課題。丁寧に管理し、深追いするな。"
    },
    palDomain: {
      "命宫": "気質と一生の格局", "兄弟": "兄弟姉妹と親しい仲間", "夫妻": "結婚とパートナー", "子女": "子・後輩・創作物",
      "财帛": "お金の入り方と管理", "疾厄": "身体と健康", "迁移": "外出・対外的舞台と機縁", "仆役": "友人・部下・大衆との縁",
      "官禄": "仕事・功名・やり方", "田宅": "不動産・住まい・土台", "福德": "内面・趣味と福", "父母": "両親・長上・上司。相貌も"
    },
    geju: [
      { name: "殺破狼格", need: ["七杀", "破军", "贪狼"], scope: "sanfang", g: "七殺・破軍・貪狼が三方に会す。古に『殺破狼』と称す。変動と開拓の局。", m: "人生は大きく動き、現状維持が苦手。開拓・競争・変革の道に向く。大胆さが勝ち、浮つきが負け。" },
      { name: "機月同梁格", need: ["天机", "太阴", "天同", "天梁"], scope: "sanfang", g: "機・月・同・梁が四方に会す。古訣に『機月同梁作吏人』。", m: "安定した組織内の専門職・管理職に向く。突発的な起業冒険は得意ではない。" },
      { name: "紫府同宮格", need: ["紫微", "天府"], scope: "ming", g: "紫微と天府が命宮を共守。帝座と庫星が同宮する尊貴富厚の局。", m: "指導気質と統率力を兼ね、格局は高い。見栄と慎重すぎる決断に注意。" },
      { name: "府相朝垣格", need: ["天府", "天相"], scope: "sanfang", g: "天府と天相が命宮に会照。『府相朝垣』といい、食禄安穏の局。", m: "衣食豊かで貴人多し。大きなプラットフォーム・組織の中で輝く型。" },
      { name: "日月同臨格", need: ["太阳", "太阴"], scope: "ming", g: "太陽と太陰が命宮を共守。日月同臨、陰陽を兼ねる。", m: "剛柔を併せ持ち、調整役に向く。恋愛では両天秤をかけやすい。" },
      { name: "火貪格", need: ["贪狼", "火星"], scope: "ming", g: "貪狼と火星が同宮。古訣に『火貪志気高』。横発の機。", m: "機会一到で結果が爆発する型。勢いに乗れ。急上昇急降下に注意。" },
      { name: "鈴貪格", need: ["贪狼", "铃星"], scope: "ming", g: "貪狼と鈴星が同宮。思いがけぬ機会と横発を同じくする。", m: "穴場を捉えるのが上手。新領域に向く——勝った分を守ることを覚えよ。" }
    ],
    jixing: ["左辅", "右弼", "文昌", "文曲", "天魁", "天钺", "禄存"],
    shaxing: ["擎羊", "陀罗", "火星", "铃星", "地空", "地劫"],
    jisha: {
      jiLab: "六吉星の会照",
      jiText: "吉星の会照は助力・才芸・贵人を意味する。輔弼は人、昌曲は才、魁鉞は門を開き、禄存は財を安定させる。",
      shaLab: "六煞星の会照",
      shaText: "煞星は競争と研摩——羊陀は性を磨き、火鈴は急かし、空劫は実りを削る。煞は凶ではなく、鍛えれば大きな格局を為す。"
    },
    mzLab: "命主 · 身主",
    mzNote: "命主星は生来の性質を、身主星は後天の行方を示す。下にその性を読む。",
    emptySec: "この宮に正曜なし。対宮や借星で論じ、後天の研鑽が要る。",
    stars: {
      "紫微": { g: "紫微は土、中天の尊星にして帝座。化気は「尊」。", m: "リーダー型：自尊心が高く、視座が大きく、生まれながらの先頭。命令されるより命じたい。謙虚を学べば人は従う。" },
      "天机": { g: "天機は木、南斗の益算の星。化気は「善」。", m: "軍師型：頭の回転が速く、多才で計画上手。考えすぎと躊躇いが癖。" },
      "太阳": { g: "太陽は火、中天の大貴。化気は「貴」。", m: "放射的で博愛：公に与え、広く世話を焼き、名声を重んじる。男命では父・夫・息子に応じ、燃え尽きと虚栄に注意。" },
      "武曲": { g: "武曲は金、北斗の財星。化気は「財」。", m: "お金と実行に果断：まず動き、結果を感情より重んじる。剛直で孤高の気質。" },
      "天同": { g: "天同は水、南斗の福星。化気は「福」。", m: "おおらかで人望があり、心は若い。注意：気怠さ、決断力の不足、感情による撤退。" },
      "廉贞": { g: "廉貞は火、北斗の囚星。化気は「囚」。次桃花。", m: "原則と欲望が交差する星：情が濃く、カリスマと手腕。注意：凝り固まり、愛憎の極端、自作のドラマ。" },
      "天府": { g: "天府は土、南斗の令星にして庫星。化気は「令」。", m: "安定の庫星：保守的で包容力があり、金と人の運用の名手。大胆な相方と組むと活きる。" },
      "太阴": { g: "太陰は水、中天の貴星。化気は「富」。母・妻・娘を象る。", m: "柔らかな知性：繊細で情が深く、貯め上手、審美眼と直感。注意：憂い、受身、完璧主義。" },
      "贪狼": { g: "貪狼は木、北斗の桃花星。欲望と多才の星。", m: "多才で魅力的：趣味も縁も広く、機会に富む。注意：器用貧乏、享楽、恋の絡み。" },
      "巨门": { g: "巨門は水、北斗の暗星。化気は「暗」。", m: "探究の雄弁家：観察眼鋭く、研究心が強い。注意：疑い、口論、静かに進む波紋。" },
      "天相": { g: "天相は水、斗中の印星にして官禄主。化気は「印」。", m: "忠厚な補佐役：公正で勤勉、洗練され、生来の調整者。頼りがち——自ら決断することを学ぶ。" },
      "天梁": { g: "天梁は土、南斗の蔭星にして老人星。化気は「蔭」。", m: "守護の長老：清廉にして災いを転じる。人を庇い、助言したがる。注意：説教くささ、高慢、引き受けすぎ。" },
      "七杀": { g: "七殺は金、南斗の将星。その性は厳粛な権威。", m: "猛然たる独立と冒険、遂行は鉄火。注意：衝動、孤高、激しい浮き沈み。" },
      "破军": { g: "破軍は水、北斗の耗星。化気は「耗」。", m: "先鋒の星：先に壊し、後に築く。停滞が天敵。注意：衝動的な損失、変転の繰り返し——終わらせる技術を。" }
    }
  }
}
};
