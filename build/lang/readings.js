/* readings.js — per-language interpretation data for BaZi (jp) and Zi Wei (zp) renderings.
 * Classical quotes are kept in the original Chinese with local renderings. */
module.exports = {

/* ================= 中文 ================= */
zh: {
  jp: {
    title: "详细解盘",
    srcNote: "引文依通行本，字句或因版本而异；白话解读为现代转述，供文化学习与娱乐参考。",
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
    title: "命盘解读",
    srcLine: "星曜意象本于《紫微斗数全书》诸星论；白话为现代解读，供文化参考。",
    soulLab: "命宫",
    mutLab: "四化",
    mutNote: "化禄主机缘、化权主掌控、化科主名声、化忌主磨练——化在何宫，即人生着力处。",
    mutText: { "禄": "化禄：顺遂与机会。", "权": "化权：掌控与魄力。", "科": "化科：名声与贵人。", "忌": "化忌：磨练与执着。" },
    pal: {
      "命宫": "命宫主星是你的人生底色：看星性与四化，即知你的默认行事风格。",
      "官禄": "官禄宫看事业打法：主星即你的工作风格与成就路径。",
      "财帛": "财帛宫看进财方式：是稳守、是活络、还是以技生财。",
      "夫妻": "夫妻宫看亲密关系的画风：相处模式与相互成就之道。"
    },
    stars: {
      "紫微": "帝王之星：气度沉稳，天生主事者，宜居领导之位。",
      "天机": "军师之星：心思敏捷，善谋略、善应变。",
      "太阳": "光明之星：博爱外放、乐于付出，名声在外。",
      "武曲": "财星之星：果断务实，执行力与财事皆强。",
      "天同": "福气之星：随和乐观，安享而不争。",
      "廉贞": "感情与原则交织之星：成败系于一念之间的自律。",
      "天府": "库星：稳重大器，善积累与管理。",
      "太阴": "月亮之星：温柔细腻、重情内敛，利文书与田宅。",
      "贪狼": "多才之星：机缘与应酬皆旺，兴趣广而欲望盛。",
      "巨门": "口才之星：锐利善辨、长于研究，是非亦随之。",
      "天相": "印星：忠厚辅弼，天生的协调者与幕僚。",
      "天梁": "荫星：老成持重，逢凶化吉，宜专业与监护之职。",
      "七杀": "将星：冲劲十足，宜开创突破，忌久守成。",
      "破军": "耗星：破旧立新，变动之中得机遇。"
    }
  }
},

/* ================= English ================= */
en: {
  jp: {
    title: "Detailed Reading",
    srcNote: "Classical quotations follow popular printed editions; wording may vary between versions. Plain-language renderings are modern, for cultural learning and entertainment.",
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
    title: "Reading Your Chart",
    srcLine: "Star imagery follows the star lore of the Zi Wei Dou Shu Quan Shu; renderings are modern, for cultural reference.",
    soulLab: "Self Palace",
    mutLab: "Four Transformations",
    mutNote: "Lu favors, Quan empowers, Ke ennobles, Ji obstructs — the palace carrying each is where that theme plays out.",
    mutText: { "禄": "Lu: opportunity and flow.", "权": "Quan: control and drive.", "科": "Ke: reputation and mentors.", "忌": "Ji: friction — and mastery through it." },
    pal: {
      "命宫": "The Self Palace is your default operating style: read its stars and transformations.",
      "官禄": "The Career palace shows how you build — its stars are your working style.",
      "财帛": "The Wealth palace shows how money flows to you — earned, managed, or gathered.",
      "夫妻": "The Spouse palace sketches partnership — the flavor of your closest bond."
    },
    stars: {
      "紫微": "The Emperor: composed authority — a natural head who prefers to lead.",
      "天机": "The Strategist: quick, analytical; thrives on planning and change.",
      "太阳": "The Sun: generous and visible; gives freely and earns renown.",
      "武曲": "The Treasurer: decisive and hands-on; strong with money matters.",
      "天同": "The Enjoyer: easygoing optimism; a comfort-seeking peacemaker.",
      "廉贞": "The Judge: principle entangled with passion; integrity decides outcomes.",
      "天府": "The Vault: steady and managerial; accumulates and administers.",
      "太阴": "The Moon: gentle and introspective; strong with writing, property and care.",
      "贪狼": "The Desirer: versatile and sociable; many talents, many appetites.",
      "巨门": "The Orator: sharp inquiry and speech; scrutiny invites dispute.",
      "天相": "The Chancellor: loyal aide and mediator; order and fairness first.",
      "天梁": "The Guardian: seasoned elder energy; shelter in storms, suited to advisory roles.",
      "七杀": "The General: pioneering drive; built to break ground, not to hold it.",
      "破军": "The Reformer: demolish-then-rebuild; opportunity lives inside upheaval."
    }
  }
},

/* ================= Español ================= */
es: {
  jp: {
    title: "Lectura detallada",
    srcNote: "Citas según ediciones corrientes; la redacción puede variar. Las lecturas son versiones modernas, con fines culturales y de entretenimiento.",
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
    title: "Lectura del mapa",
    srcLine: "La imaginería de las estrellas sigue el Zi Wei Dou Shu Quan Shu; versiones modernas, con fines culturales.",
    soulLab: "Palacio del Yo",
    mutLab: "Cuatro transformaciones",
    mutNote: "Lu favorece, Quan empodera, Ke ennoblece, Ji obstaculiza — el palacio que la lleva es donde actúa el tema.",
    mutText: { "禄": "Lu: oportunidad y flujo.", "权": "Quan: control e ímpetu.", "科": "Ke: reputación y mentores.", "忌": "Ji: fricción — y dominio a través de ella." },
    pal: {
      "命宫": "El Palacio del Yo es tu estilo por defecto: lee sus estrellas y transformaciones.",
      "官禄": "El palacio de Carrera muestra cómo construyes: sus estrellas son tu estilo de trabajo.",
      "财帛": "El palacio de Riqueza muestra cómo te llega el dinero: ganado, gestionado o reunido.",
      "夫妻": "El palacio del Cónyuge esboza la pareja: el sabor del vínculo más cercano."
    },
    stars: {
      "紫微": "El Emperador: autoridad serena; lidera de natural.",
      "天机": "El Estratega: mente rápida, planifica y cambia.",
      "太阳": "El Sol: generoso y visible; da mucho y gana renombre.",
      "武曲": "El Tesorero: decidido y práctico; fuerte con el dinero.",
      "天同": "El Gozador: optimista tranquilo; pacificador comfortista.",
      "廉贞": "El Juez: principio y pasión entrelazados; la integridad decide.",
      "天府": "El Almacén: estable y gestor; acumula y administra.",
      "太阴": "La Luna: suave e introspectivo; escritura, propiedad y cuidado.",
      "贪狼": "El Deseante: versátil y sociable; muchos talentos y apetitos.",
      "巨门": "El Orador: indagación y palabra afiladas; el escrutinio trae dispute.",
      "天相": "El Canciller: aide leal y mediador; orden y justicia primero.",
      "天梁": "El Guardián: energía de anciano; refugio en la tormenta, consejero.",
      "七杀": "El General: ímpetu pionero; hecho para abrir camino, no para guardarlo.",
      "破军": "El Reformador: demoler y reconstruir; oportunidad dentro del cambio."
    }
  }
},

/* ================= العربية ================= */
ar: {
  jp: {
    title: "القراءة المفصلة",
    srcNote: "الاقتباسات وفق الطبعات الشائعة وقد تتفاوت الصياغة؛ والقراءات صياغات حديثة لأغراض ثقافية وترفيهية.",
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
    title: "قراءة الخريطة",
    srcLine: "صور النجوم من أدب نجوم تسي وي دو شو؛ والصياغات حديثة لأغراض ثقافية.",
    soulLab: "قصر الذات",
    mutLab: "التحولات الأربعة",
    mutNote: "لو تيسير، وتشوان سيطرة، وكه سمعة، وجي احتكاك — والقصر الحامل هو ميدان الموضوع.",
    mutText: { "禄": "لو: فرصة وانسياب.", "权": "تشوان: سيطرة ودافع.", "科": "كه: سمعة ومرشدون.", "忌": "جي: احتكاك — وإتقان عبره." },
    pal: {
      "命宫": "قصر الذات هو أسلوبك الافتراضي: اقرأ نجومه وتحولاته.",
      "官禄": "قصر المهنة يبين كيف تبني — نجومه أسلوب عملك.",
      "财帛": "قصر الثروة يبين كيف يأتي المال — مكتسبًا أو مدبرًا أو مجمعًا.",
      "夫妻": "قصر الزوج يرسم الشراكة — نكهة أقرب روابطك."
    },
    stars: {
      "紫微": "الإمبراطور: هيبة رزينة؛ قائد بالفطرة.",
      "天机": "الاستراتيجي: عقل سريع يحب التخطيط والتغيير.",
      "太阳": "الشمس: كريم ظاهر؛ يعطي ويكسب الذكر.",
      "武曲": "الخازن: حازم عملي؛ قوي بشؤون المال.",
      "天同": "المستمع: تفاؤل هادئ؛ مصالح بيّنة طلب راحة.",
      "廉贞": "القاضي: مبدأ متشابك بالعاطفة؛ والنزاهة تحسم.",
      "天府": "الخزين: ثابت إداري؛ يجمع ويدير.",
      "太阴": "القمر: رقيق متأمل؛ قوة في الكتابة والعقار والرعاية.",
      "贪狼": "نجم المواهب: متعدد المواهب اجتماعي، وشهية واسعة.",
      "巨门": "الخِطابي: سؤال ولسان حادان؛ والتدقيق يستدعي الجدل.",
      "天相": "المستشار: وزير وفيّ ووساط؛ النظام والإنصاف أولًا.",
      "天梁": "الجَلِي: طاقة شيخ محنّكة؛ مأوى في العواصف، وموضعه المشورة.",
      "七杀": "الجنرال: دافع سابغ؛ صُنع لفتح الطريق لا لحرسه.",
      "破军": "الإصلاحي: هدم ثم بناء؛ وفي التقلب فرصة."
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
    title: "命盤の読み方",
    srcLine: "星のイメージは『紫微斗数全書』の諸星論に拠る。解説は現代語の参考訳です。",
    soulLab: "命宮",
    mutLab: "四化",
    mutNote: "禄は恵み、権は掌握、科は名声、忌は試練。化のある宮が人生の焦点。",
    mutText: { "禄": "化禄：チャンスと流れ。", "权": "化権：掌握と推進力。", "科": "化科：名声と恩人。", "忌": "化忌：試練と、それを越えた達成。" },
    pal: {
      "命宮": "命宮の主星はあなたの既定の OS。星と四化を読めば基本スタイルが分かる。",
      "官祿": "官祿宮は仕事の型。主星がそのまま勤め方と成果への道。",
      "財帛": "財帛宮はお金の入り方。貯める型か、動かす型か、技で稼ぐ型か。",
      "夫妻": "夫妻宮はパートナーシップの趣。近しい絆の相性の色。"
    },
    stars: {
      "紫微": "帝星：落ち着いた威厳の生まれながらのリーダー。",
      "天機": "軍師星：頭の回転が速く、計画と変化に強い。",
      "太陽": "太陽星：博愛で目立ち、与えて名を得る。",
      "武曲": "財星：果断で実務。金銭の執行に強い。",
      "天同": "福星：おおらかで楽天、争わない調整者。",
      "廉貞": "情と原則が絡む星。節度が成否を分ける。",
      "天府": "庫星：安定した管理型。蓄えと運営の名手。",
      "太陰": "太陰星：繊細で内省。文筆・不動産・ケアに強い。",
      "貪狼": "多才の星：趣味と縁が広く、社交に強い。",
      "巨門": "口才の星：鋭い研究心と口才。探求とともに論争も呼ぶ。",
      "天相": "印星：忠厚な補佐役。生来のまとめ役。",
      "天梁": "蔭星：年長者の風格。荒波を庇い、相談役に向く。",
      "七殺": "将星：開拓の突進力。守るより切り拓く型。",
      "破軍": "耗星：壊して新たに築く。変動の中に機会。"
    }
  }
}
};
