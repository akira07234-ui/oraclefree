/* deep.js — deep classical interpretation data (zh + en), merged into readings before build. */
module.exports = {

zh: {
  jp: {
    sec2: { a:"一 · 日主本性", b:"二 · 格局（子平真诠·月令取格）", c:"三 · 月令提纲与调候", d:"四 · 旺衰与喜用", e:"五 · 十神与四柱", f:"六 · 大运节奏", g:"七 · 纳音年命" },
    stemsDeep: {
      "甲": "甲为十干之首，阳木参天，主正直、进取与担当。性格如大树：目标一旦确立便稳步向上，不喜投机取巧。优点是有原则、能扛事、天生具备组织感；缺点是固执、不善转弯、认死理。事业上宜实业、管理、工程、基建等需要长期积累的领域；感情上外刚内柔，认定便不轻弃——但要学会把「为你好」换成「你说了算」。",
      "乙": "乙为阴木，如花草藤萝：姿态柔软而生命力顽强，环境愈恶劣愈见韧劲。性格机变、亲和、擅长借力使力与顺势而为。优点是适应力、审美与人缘；缺点是依赖性强、遇大事易犹豫。事业上宜设计、外交、教育、艺术、护理等以柔克刚的领域。感情细腻重氛围，需要被需要的感觉。",
      "丙": "丙为阳火，如太阳普照：热情大方、光明磊落，是天生的感染力中心，走到哪里都自带光圈。优点是坦率、慷慨、行动力快、乐于助人；缺点是性急、好面子、易虎头蛇尾。事业上宜传媒、演讲、能源、餐饮、文体等照亮他人的行业。感情热烈直接，爱得快——也要防热度降得快。",
      "丁": "丁为阴火，如灯烛星火：温和细腻、洞察幽微，善于在细节处持续发光。优点是专注、体贴、耐性佳、直觉强；缺点是多思敏感、易钻牛角尖。事业上宜研究、文字、医护、心理、玄学等静水深流的领域。感情含蓄而深情，一旦认定便是长明灯。",
      "戊": "戊为阳土，如城墙大地：厚重稳健、守信重诺，是天生的承重者。优点是可靠、包容、抗压力冠绝十干；缺点是保守、慢热、不擅变通。事业上宜地产、管理、金融、基建等承载型行业。感情踏实长情，浪漫不是他的语言， reliable 才是。",
      "己": "己为阴土，如田园沃土：包容滋养、细腻务实，善于培育与整合资源。优点是亲和、细心、执行力稳、同理心强；缺点是易操心、多虑、习惯为他人而活。事业上宜教育、心理、餐饮、行政、社工等滋养型行业。感情温厚体贴，是细水长流的陪伴者。",
      "庚": "庚为阳金，如刀剑矿石：刚毅果决、讲义气、执行力冠绝十干。优点是敢做敢当、抗打抗压、危机感强；缺点是刚硬易折、言辞带刀、易树敌。事业上宜军警、工程、外科、竞技、重工业等淬炼型行业。感情直来直往，硬汉柔情——把刀放进鞘里，把人放进心里。",
      "辛": "辛为阴金，如珠玉首饰：精致敏锐、爱憎分明，对品质与细节近乎苛刻。优点是审美、精确、自尊自爱；缺点是娇贵、敏感、易较真翻旧账。事业上宜金融、精工、时尚、鉴定、艺术等精粹型行业。感情重感觉与尊重——被珍惜时闪耀，被怠慢时黯淡。",
      "壬": "壬为阳水，如江河奔流：智慧通达、胸怀宽广、适应力冠绝十干。优点是机变、大气、善整合资源；缺点是浮动、不安定、计划赶不上变化。事业上宜贸易、物流、智库、传媒、咨询等流动型行业。感情奔放洒脱——需要一条确定的河床，才不会漂成传说。",
      "癸": "癸为阴水，如雨露泉水：温柔细腻、直觉超强、润物无声。优点是聪慧、共情、以柔克刚；缺点是多愁、内耗、易悲观。事业上宜研究、心理、企划、灵性、医药等静水深流的领域。感情含蓄深情，需要足够的安全感才能开放自己。"
    },
    ge: {
      title: "格局",
      secName: "七 · 格局（月令取格）",
      quote: { t: "八字用神，专求月令，以日干配月令地支，而生克不同，格局分焉。财官印食，此用神之善而顺用之者也；煞伤劫刃，用神之不善而逆用之者也。", s: "《子平真诠·论用神》" },
      calcLab: "定格依据",
      shunNi: { shun: "财、官、印、食为四吉神，宜顺用（生扶保护）", ni: "杀、伤、劫、刃为四凶神，宜逆用（制伏化泄）" },
      geTexts: {
        "正官格": "官星当令，规矩自成。此格之人重名誉、守纪律、有领导与自律的天性，社会评价高，宜公职、管理、体制内发展。顺用之道：官星喜财星生扶、印星护身，最忌伤官克官。现代语境：规则型赛道里，你最容易出头。",
        "七杀格": "七杀当令，压力与魄力同源。此格之人果决刚强、抗压极强，乱世用杀，宜军警、外科、攻坚型创业。逆用之道：七杀须食神制杀或印星化杀，无制则伤身招祸，有制则掌权柄。现代语境：把压力变燃料，是你的功课。",
        "正财格": "正财当令，勤俭务实。此格之人财商稳健、脚踏实地，善积累、重信用，宜金融、实业、经营管理。顺用之道：财喜食神生财、官星护财，忌比劫争夺。现代语境：你的财富靠日拱一卒，不靠风口。",
        "偏财格": "偏财当令，财自天来。此格之人机敏活络、出手大方，善抓机会、长于流通与资源整合，宜贸易、投资、中介、自媒体。顺用之道：偏财亦喜食伤生扶、官星守护，忌比劫分夺。现代语境：钱来自移动与信息差，坐守则失。",
        "正印格": "正印当令，庇护与学问之星。此格之人仁慈聪慧、重学习与名誉，多得长辈贵人之力，宜学术、教育、文化、医疗。顺用之道：印喜官星生印（官印相生），最忌财星坏印。现代语境：你的护城河是专业深度与信誉。",
        "偏印格": "偏印当令，独特学识之星。此格之人直觉敏锐、钻研冷门，宜研究、技术、玄学、艺术等深度领域。逆用之道：偏印最忌夺食（克伤食神），喜偏财制衡。现代语境：把冷门钻研到极致，就是你的稀缺性。",
        "食神格": "食神当令，才华与福气之星。此格之人温和乐观、有表达欲与生活情趣，宜创作、餐饮、演讲、教学。顺用之道：食神喜生财（食神生财格），忌偏印夺食。现代语境：把你的表达与手艺产品化，福气自来。",
        "伤官格": "伤官当令，才华锋芒之星。此格之人聪明外露、敢破敢立，创造力与破坏力一体两面，宜创意、技术、自由职业。逆用之道：伤官喜配印（伤官配印）或生财（伤官生财），最忌无制无化。现代语境：锋芒要配上交付，才不是任性。",
        "建禄格": "月令建禄，比肩当令。此格之人自立自强、白手起家，不靠祖荫靠双手，宜合伙与实干行业。用神之道：禄多喜财官，无财官则劳碌。现代语境：你就是自己的原始股，关键是找到变现的出口。",
        "羊刃格": "月令羊刃，劫财当令。此格之人魄力极强、敢作敢当，天生的攻坚者与开拓者，宜竞争激烈的领域。逆用之道：羊刃喜官杀制刃（杀刃相制为大用），无制则刚极易折。现代语境：把血性装进规则里，就是王牌。"
      }
    },
    tiaohou: {
      title: "调候用神",
      secName: "八 · 调候（穷通宝鉴）",
      src: "依《穷通宝鉴》（原名《栏江网》）通行本调候用神简表；精确取用仍需通观全局。",
      intro: "调候即调节命局的寒暖燥湿：夏用水、冬用火是通则。下表是你日主与出生月份对应的调候用神提要。",
      table: {
        "甲": { "寅": { t: "丙、癸", d: "初春余寒未退，寒木向阳，丙暖癸润。" }, "卯": { t: "庚、丙、丁、戊、己", d: "阳刃驾杀，专用庚金。" }, "辰": { t: "庚、丁、壬", d: "木气渐老，庚金修剪、丁火成器。" }, "巳": { t: "癸、丁、庚", d: "木性渐焦，先调后扶。" }, "午": { t: "癸、丁、庚", d: "火旺木焚，重癸润局。" }, "未": { t: "癸、丁、庚", d: "木气归库，癸水为先。" }, "申": { t: "庚、丁、壬", d: "秋木用庚，丁火制金。" }, "酉": { t: "庚、丙、丁", d: "金锐木危，丁火制金为要。" }, "戌": { t: "庚、甲、丁、壬", d: "秋深土燥，甲疏壬润。" }, "亥": { t: "庚、丁、丙", d: "寒木向阳，丁火为暖。" }, "子": { t: "丁、庚、丙", d: "寒木喜丁，庚劈甲引丁。" }, "丑": { t: "丁、庚、丙", d: "天寒地冻，火暖为先。" } },
        "乙": { "寅": { t: "丙、癸", d: "得丙而荣，得癸而润。" }, "卯": { t: "丙、癸", d: "春花开放，丙癸并用。" }, "辰": { t: "癸、丙、戊", d: "木气需培，癸丙戊共济。" }, "巳": { t: "癸", d: "上火下水，癸水为先。" }, "午": { t: "癸、丙", d: "花木向阳，重癸防灼。" }, "未": { t: "癸、丙", d: "燥土需润，癸丙共调。" }, "申": { t: "丙、癸、己", d: "金气当令，丙癸制化。" }, "酉": { t: "癸、丙、丁", d: "秋花待护，癸水滋根。" }, "戌": { t: "癸、辛", d: "根气归库，癸辛相济。" }, "亥": { t: "丙", d: "水寒木冷，专取丙火。" }, "子": { t: "丙", d: "寒木向荣，专用丙火。" }, "丑": { t: "丙", d: "冻土寒花，丙火解冻。" } },
        "丙": { "寅": { t: "壬、庚", d: "火得木生，壬水辅威。" }, "卯": { t: "壬、己", d: "木多火炎，壬水为制。" }, "辰": { t: "壬、甲", d: "火气渐明，壬甲并用。" }, "巳": { t: "壬、庚、癸", d: "火气渐烈，壬庚为佐。" }, "午": { t: "壬、庚", d: "羊刃当令，壬水制刃。" }, "未": { t: "壬、庚", d: "火气归库，壬庚并用。" }, "申": { t: "壬、戊", d: "丙火泄气，戊土护壬。" }, "酉": { t: "壬、癸", d: "火气渐敛，壬水辅辉。" }, "戌": { t: "甲、壬", d: "火气入墓，甲壬相济。" }, "亥": { t: "甲、戊、庚、壬", d: "火寒需木，甲为引。" }, "子": { t: "壬、戊、己", d: "冬火近寒，戊制水势。" }, "丑": { t: "壬、甲", d: "晦火之地，甲木生辉。" } },
        "丁": { "寅": { t: "甲、庚", d: "甲为丁之母，庚劈甲引丁。" }, "卯": { t: "庚、甲", d: "印旺用财，庚甲并见。" }, "辰": { t: "甲、庚", d: "湿木晦火，庚甲同用。" }, "巳": { t: "甲、壬", d: "火气渐旺，壬水为调。" }, "午": { t: "壬、庚、癸", d: "火炎土燥，重壬调候。" }, "未": { t: "甲、壬、庚", d: "燥土晦火，甲壬庚共济。" }, "申": { t: "甲、庚、丙、戊", d: "财旺身弱，甲木引丁。" }, "酉": { t: "甲、庚、丙、戊", d: "财旺身弱，同上取用。" }, "戌": { t: "甲、庚、戊", d: "火气入墓，甲庚为用。" }, "亥": { t: "甲、庚", d: "寒灯向暖，甲庚引燃。" }, "子": { t: "甲、庚", d: "七杀攻身，庚甲并用。" }, "丑": { t: "甲、庚", d: "湿土晦光，甲庚同取。" } },
        "戊": { "寅": { t: "丙、甲、癸", d: "春土气虚，丙甲癸并用。" }, "卯": { t: "丙、甲、癸", d: "官杀当令，印化为要。" }, "辰": { t: "甲、丙、癸", d: "土厚需疏，甲为首功。" }, "巳": { t: "甲、丙、癸", d: "火土同旺，癸水调候。" }, "午": { t: "壬、甲、丙、癸", d: "土燥火炎，重壬润局。" }, "未": { t: "癸、丙、甲", d: "土燥之极，癸水为先。" }, "申": { t: "丙、癸、甲", d: "金泄土气，丙癸并用。" }, "酉": { t: "丙、癸", d: "泄气之土，丙暖癸润。" }, "戌": { t: "甲、丙、癸", d: "土厚极需甲疏。" }, "亥": { t: "甲、丙", d: "寒土需丙，甲木疏土。" }, "子": { t: "丙、甲", d: "财旺身寒，丙甲并用。" }, "丑": { t: "丙、甲", d: "冻土寒湿，丙火解冻。" } },
        "己": { "寅": { t: "丙、庚、甲", d: "春土气虚，丙暖甲疏。" }, "卯": { t: "甲、癸、丙", d: "杀重身轻，印化为要。" }, "辰": { t: "丙、癸、甲", d: "湿土需丙，甲疏癸润。" }, "巳": { t: "癸、丙", d: "火土同旺，癸水为先。" }, "午": { t: "癸、丙", d: "燥土之极，重癸调候。" }, "未": { t: "癸、丙", d: "土燥土焦，癸丙共济。" }, "申": { t: "丙、癸", d: "金泄土气，丙癸并用。" }, "酉": { t: "丙、癸", d: "泄气之土，丙暖癸润。" }, "戌": { t: "甲、丙、癸", d: "土厚极需甲疏。" }, "亥": { t: "丙、甲、戊", d: "冬土非丙暖不生。" }, "子": { t: "丙、甲、戊", d: "财旺身寒，丙甲并用。" }, "丑": { t: "丙、甲、戊", d: "冻土寒湿，丙火为先。" } },
        "庚": { "寅": { t: "戊、甲、壬、丙、丁", d: "金嫩木旺，戊土生金、丙丁锻炼。" }, "卯": { t: "丁、甲、庚、丙", d: "财旺身弱，丁火锻金。" }, "辰": { t: "甲、丁、壬、癸", d: "土润金生，丁甲为用。" }, "巳": { t: "壬、戊、丙、丁", d: "火炼金成器，壬水调候。" }, "午": { t: "壬、癸", d: "火烈金熔，重壬救之。" }, "未": { t: "丁、甲", d: "火气炼金，丁甲为用。" }, "申": { t: "丁、甲", d: "金气当令，丁甲锻炼成器。" }, "酉": { t: "丁、甲、丙", d: "羊刃喜锻，丁甲并用。" }, "戌": { t: "甲、壬", d: "土厚金埋，甲疏壬洗。" }, "亥": { t: "丁、甲、丙", d: "金寒水冷，丁甲丙同取。" }, "子": { t: "丁、甲、丙", d: "金寒水冷，同上取用。" }, "丑": { t: "丙、丁、甲", d: "冻金寒水，丙丁暖炼。" } },
        "辛": { "寅": { t: "己、壬、庚", d: "金嫩木旺，己土生金、壬水淘洗。" }, "卯": { t: "壬、甲", d: "绝地之金，壬水泄秀。" }, "辰": { t: "壬、甲", d: "土厚埋金，壬洗甲疏。" }, "巳": { t: "壬、甲、癸", d: "火炼辛金，壬水为要。" }, "午": { t: "壬、己、癸", d: "火炎金脆，重壬护之。" }, "未": { t: "壬、庚、甲", d: "燥土埋金，壬庚甲并用。" }, "申": { t: "壬、甲、戊", d: "金气得地，壬甲为用。" }, "酉": { t: "壬、甲", d: "建禄之金，壬水淘洗。" }, "戌": { t: "壬、甲", d: "土厚埋金，壬洗甲疏。" }, "亥": { t: "壬、丙", d: "金寒水冷，丙火为暖。" }, "子": { t: "丙、戊、壬、甲", d: "金寒水冷，丙戊并用。" }, "丑": { t: "丙、壬、戊、己", d: "冬金寒湿，丙暖为先。" } },
        "壬": { "寅": { t: "庚、丙、戊", d: "水木清华，庚金发源、丙火取暖。" }, "卯": { t: "戊、辛、庚", d: "泄气之水，戊辛并用。" }, "辰": { t: "甲、庚", d: "水入库中，甲庚并用。" }, "巳": { t: "壬、辛、庚、癸", d: "水气渐弱，比劫帮扶。" }, "午": { t: "癸、庚、辛", d: "财旺身弱，比劫分财。" }, "未": { t: "辛、甲", d: "官星当令，辛甲为用。" }, "申": { t: "戊、丁", d: "金水同旺，戊土筑堤、丁火暖局。" }, "酉": { t: "甲、庚", d: "印旺泄官，甲庚并用。" }, "戌": { t: "甲、丙", d: "水气入库，甲丙并用。" }, "亥": { t: "戊、丙、庚", d: "建禄之水，戊土筑堤。" }, "子": { t: "戊、丙", d: "羊刃之水，戊土为堤、丙火为暖。" }, "丑": { t: "丙、丁、甲", d: "水冷金寒，丙丁暖局。" } },
        "癸": { "寅": { t: "辛、丙", d: "水木清华，辛金发源、丙火向暖。" }, "卯": { t: "庚、辛", d: "泄气之水，庚辛发源。" }, "辰": { t: "庚、辛、丙", d: "水库之水，庚辛丙并用。" }, "巳": { t: "辛", d: "财旺身弱，专取辛金。" }, "午": { t: "庚、辛、壬、癸", d: "财旺身弱，比劫分财。" }, "未": { t: "庚、辛、壬、癸", d: "同上，比劫帮扶。" }, "申": { t: "丁", d: "金旺水白，丁火暖金。" }, "酉": { t: "辛、丙", d: "印旺之水，丙火向暖。" }, "戌": { t: "辛、甲、壬、癸", d: "水入库中，辛甲并用。" }, "亥": { t: "庚、辛、戊、丁", d: "水旺之极，戊堤丁暖。" }, "子": { t: "丙、辛", d: "冰冻之水，丙火解冻、辛金发源。" }, "丑": { t: "丙、丁", d: "寒极之水，丙丁暖局。" } }
      }
    },
    godsDeep: {
      "比肩": "比肩是与日主同气的朋友与合伙人。正面看：自立、讲义气、抗压力大，适合合伙与团队作战；负面看：易固执己见、争抢资源。事业上宜协作型行业；财务上忌与朋友账目不清、忌为人担保。感情中同辈竞争明显，先立信任，再谈合伙。",
      "劫财": "劫财是与日主阴阳相异的竞争者。正面看：魄力大、行动快、社交煽动力强，危机时刻敢出手；负面看：冲动破财、易被朋友拖累。事业上宜业务、销售、危机公关等冲锋型岗位；理财最忌担保与借贷。感情里是最热烈的追求者——先管住钱包，再谈感情。",
      "食神": "食神是我生之物，温和的才华与福气之星。正面看：乐观、有口福、表达自然、艺术感觉好；负面看：安于现状、缺乏锐气。事业上宜创作、餐饮、教育、内容等输出型行业——食神生财，把爱好产品化就是正途。感情里温柔体贴，是长期关系的润滑剂。",
      "伤官": "伤官是我生的异性之物，才华外露而带刺。正面看：聪明绝顶、创造力强、敢挑战权威；负面看：言语锋利、目无规矩、易与上司冲突。事业宜创意、技术、自由职业——锋芒必须配上交付。感情里魅力大、要求也高：把「伤官见官」的脾气留给世界，别留给爱人。",
      "偏财": "偏财是我克之物中的机会之财。正面看：机敏、慷慨、财路活络，善抓风口与人脉变现；负面看：多头经营、难以守成。事业宜贸易、投资、中介、自媒体等流动领域。感情里大方浪漫、异性缘旺——账要管好，心也要收好。",
      "正财": "正财是我克之物中的正职之财。正面看：勤俭踏实、重信用、积少成多；负面看：保守、计较、缺乏冒险精神。事业宜金融、实业、经营管理等正途行业。感情里专一顾家，是最适合过日子的星——记得偶尔浪漫，别让日子只剩算术。",
      "七杀": "七杀是克我的同性之力，压力与魄力的双重来源。正面看：果断、抗压、执行力惊人，乱世之中最先出头；负面看：刚愎、暴烈、树敌也快。事业宜军警、外科、攻坚型创业。感情里爱得浓烈、控制欲强——把杀气留在战场，把温柔留给枕边人。",
      "正官": "正官是克我的异性之力，规矩、地位与名誉之星。正面看：自律、端正、天生的管理者，社会评价高；负面看：保守、压力大、易被规则绑住。事业宜公职、管理、法务等体制型赛道。感情里靠谱专一、责任感强——偶尔也要为爱人破一次例。",
      "偏印": "偏印是生我的同性之物，独特学识与直觉之星。正面看：钻研力强、直觉准、擅长冷门绝学；负面看：多疑孤僻、虎头蛇尾（枭神夺食）。事业宜研究、技术、玄学、艺术等深度领域。感情里需要精神共鸣，怕吵闹怕肤浅——找一个安静懂你的人。",
      "正印": "正印是生我的异性之物，庇护与学问之星。正面看：仁厚、爱学习、贵人运旺，母性与庇护力强；负面看：依赖、想得太多做得太少。事业宜学术、教育、文化、医疗。感情里温柔可靠，是被依赖的那一个——记得偶尔也依赖一下对方。"
    },
    nayin: {
      "海中金": "海中之金，藏锋于渊：大器晚成之象，早年宜蓄力，中晚年方见真章。",
      "炉中火": "炉中之火，假薪而燃：借势而成之火，得平台则烈，失其位则微，宜依附有力的组织。",
      "大林木": "平地成林之木：枝繁叶茂，有担当有格局，宜众业共建，不宜孤木自赏。",
      "路旁土": "路旁之土，养万物而自无功名：踏实奉献，甘为他人作嫁，晚运自厚。",
      "剑锋金": "刚炼成锋之金：锋芒毕露，宜再得水淬砺，刚中带柔方成大器。",
      "山头火": "山头之火，高而显赫：光而不久，需续薪继力，登高更宜慎。",
      "涧下水": "山涧细流：源清而势未成，积小流以成江海，中年之后豁然开朗。",
      "城头土": "城墙之土，护家卫国之象：责任心重，守成有余，开拓稍欠。",
      "白蜡金": "初炼之金，光泽未定：品格高贵而尚待琢磨，早年多变，磨后生辉。",
      "杨柳木": "杨柳之木，随风起舞：柔韧多姿、人缘极佳，宜艺文之业，须防随波无定。",
      "泉中水": "井泉之水，源源不竭：清冽自守，宜专业深耕，细水长流终成大器。",
      "屋上土": "栋梁之土，覆屋庇人：成熟稳重，护家有功，事业宜与团体共成。",
      "霹雳火": "雷霆之火：爆发力惊人，一鸣惊人的命运曲线，宜防大起大落。",
      "松柏木": "松柏之木，凌冬不凋：意志坚忍，愈挫愈勇，久经风霜自成栋梁。",
      "长流水": "长流之水，汪洋万里之势：源源不绝，宜流动性事业，行运愈晚愈佳。",
      "沙中金": "沙里淘金：含藏不露，须人工提炼方见真价，晚成而愈显珍贵。",
      "山下火": "山下灯火，如日落余晖：温和明丽，宜文教艺术，晚运更胜早运。",
      "平地木": "平地之木，资粮万物：务实亲民，宜与人共荣，切忌孤高自许。",
      "壁上土": "壁上之土，粉饰门面：宜美与秩序，护内有功，向外发展稍怯。",
      "金箔金": "金之薄者如箔：华美精巧，宜技艺展示；根基须防浮薄。",
      "覆灯火": "覆灯之火，照明之火：照人而不灼人，宜夜作、文思、医卜玄学。",
      "天河水": "天上之水，银河之象：志气高远、超然物外，宜思想创意，落地须刻意。",
      "大驿土": "驿道之土，通达四方：交游广阔、资讯发达，宜交通、贸易、中介。",
      "钗钏金": "钗钏之金，装饰之美：精美贵气，宜美业技艺；金气柔，忌烈火重锻。",
      "桑柘木": "桑柘之木，养蚕之用：利他之木，宜民生行业，勤则衣食无忧。",
      "大溪水": "大溪之水，奔流赴海：冲劲十足，宜顺势而行，逆流则劳。",
      "沙中土": "沙中之土，疏松涵水：包容性强，宜研究与整合；立足须防流沙。",
      "天上火": "天上之火，日光普照：普济万物、公平无私，宜公共服务。",
      "石榴木": "石榴之木，花果并茂：表现力与成果皆丰，宜行销演艺，防锋芒过露。",
      "大海水": "大海之水，浩瀚无涯：包容万象，气度非凡；旺极宜防泛滥，宜有归处。"
    }
  },
  zp: {
    starsLong: {
      "紫微": "紫微为帝座之星，中天之尊。坐命者气度沉稳、自尊心极强，天生带着「说了算」的气场：喜欢掌舵而非划桨，习惯被依赖而非依赖人。优点是有格局、能担事、危难时反而镇定；短板是耳根软时易被小人包围、得意时听不进谏言。此星宜领导、管理与决策类角色——人生课题是学会授权与倾听，帝座配得上百官朝拱，也怕孤君。"
      ,
      "天机": "天机为军师之星，智慧与变化之星。坐命者头脑极快、观察入微，天生爱分析、爱规划、爱问为什么；对数字、逻辑、玄学都有天然的亲近感。优点是谋略与应变；短板是思多行少、情绪易随想法起伏。宜策略、研究、顾问、技术等动脑的领域——天机的人生课题，是把「想得多」变成「想得深，再落地」。",
      "太阳": "太阳为博爱之星，光明普照。坐命者热情外放、乐于付出、责任心强，习惯性地照顾别人、点亮别人，名声与人缘往往不请自来。优点是坦率、有正义感、行动力强；短板是付出过度而忽略自己、易招是非——太阳越亮，影子越多。宜公众事务、传媒、教育、医疗等「照见他人」的领域。",
      "武曲": "武曲为财星，将星带刀。坐命者果断务实、行动力与执行力冠绝，对钱与数字天然敏感，认定目标便一往无前。优点是敢做敢当、效率惊人；短板是刚硬急躁、不擅表达柔软。宜金融、工程、创业、业务等「要结果」的领域——武曲的人生课题，是把刀锋收进鞘里，对亲近的人慢一点、软一点。",
      "天同": "天同为福气之星，如春风化雨。坐命者随和乐观、与世无争、人缘极好，天生懂得享受生活、化解冲突。优点是亲和力、情绪稳定、大难不死的福气；短板是易安于现状、缺乏进取的狠劲。宜服务业、疗愈、文化、团队润滑剂的角色——天同的人生课题，是别把「知足」过成「躺平」。",
      "廉贞": "廉贞为囚星，感情与原则交织之星。坐命者爱憎分明、原则感极强，对认定的标准寸步不让；才华与脾气一样突出。优点是自律、有骨气、审美好；短板是固执、情绪内耗、爱之深责之切。宜法务、品控、艺术、政治等需要底线的领域——廉贞的人生课题，是坚持原则而不被原则困死。",
      "天府": "天府为库星，南斗之主，稳重如国库。坐命者大气、保守、善积累与管理，天生有「把东西放对地方」的能力，财务与组织能力俱佳。优点是可靠、气度、安全感足；短板是保守、不易冒险、防备心重。宜管理、财务、行政、物业等「守成与运营」的领域——天府的人生课题，是守住库也要敢于开新库。",
      "太阴": "太阴为月亮之星，温柔与内敛之光。坐命者细腻敏感、体贴入微、审美出众，习惯把情绪藏进夜里慢慢消化。优点是共情、耐心、文书与审美的天赋；短板是易多愁善感、优柔寡断。宜文字、设计、研究、医疗、不动产等「静水深流」的领域——太阴的人生课题，是接纳自己的阴晴圆缺。",
      "贪狼": "贪狼为欲望与多才之星，应酬与机缘之王。坐命者兴趣广泛、多才多艺、社交场上如鱼得水，对新鲜事物的渴望永远在线。优点是魅力、学习力、开创力；短板是欲望多而专注少、易始乱终弃。宜业务、娱乐、创意、公关等领域——贪狼的人生课题，是把欲望炼成专注，把应酬变成资源。",
      "巨门": "巨门为暗曜，口才与探究之星。坐命者观察锐利、逻辑清晰、敢说别人不敢说的话，天生适合研究、质疑与深度对话。优点是洞察、辩才、专业深度；短板是多疑、口舌招忌、容易把话说尽。宜法务、咨询、传媒、教学、研究等「以口与脑为业」的领域——巨门的人生课题，是把利口化成利器而非利刃。",
      "天相": "天相为印星，宰相辅弼之星。坐命者忠厚稳重、公正调和，天生擅长协调矛盾、辅佐他人成事，是团队里最可靠的大管家。优点是尽责、周全、信义为先；短板是不愿担当最终决策、易被大势推着走。宜管理副手、行政、人力资源、法务等「二把手」领域——天相的人生课题，是辅佐有成之后，敢不敢自己坐上主位。",
      "天梁": "天梁为荫星，老人星，逢凶化吉之星。坐命者老成持重、正义感强、喜欢照顾人讲道理，天生自带「大家长」气质，危难时常有贵人缘。优点是稳重、善分析、有庇护力；短板是说教、固执、把责任都往身上揽。宜医疗、法律、教育、保险等「守护与顾问」领域——天梁的人生课题，是照顾别人之前，先允许自己被照顾。",
      "七杀": "七杀为将星，肃杀与冲锋之星。坐命者胆识过人、决断果敢、抗压能力极强，人生关键词是「开创」与「突破」，最怕一成不变。优点是勇敢、执行、危局中的爆发力；短板是急躁、固执、易因冒进而受伤。宜创业攻坚、军警、外科、竞技等强竞争领域——七杀的人生课题，是把冲锋养成策略，而不是把策略冲成冲锋。",
      "破军": "破军为耗星，破旧立新之星。坐命者变动心强、敢舍敢得、人生轨迹常呈「推倒重建」的节奏，最不怕的就是从头再来。优点是开创、适应、危机中的爆发力；短板是冲动、难守成、易半途而废。宜创新、改造、危机处理等「变局」领域——破军的人生课题，是学会在重建之前，先想清楚要留下什么。"
    },
    palDeep: {
      "官禄": "官禄宫看事业的「打法」：主星决定你的工作风格——开创型星宜攻坚与创业，管理型星宜守成与运营，才艺型星宜表达与创作；再观四化落于何星，便知这十年该在哪个方向发力。",
      "财帛": "财帛宫看钱的「来路」：财星坐守善经营，印星坐守凭专业，食伤坐守凭才华与手艺；财帛宫的短板，往往不是赚不到，而是留不住——看化忌便知漏洞在哪。",
      "夫妻": "夫妻宫看亲密关系的「画风」：主星的性别气质与亮度，常对应你吸引来的人的类型；化禄则甜蜜易得，化忌则功课必至——夫妻宫从来不是说谁好谁坏，而是教你用对的姿势去爱。"
    }
  }
},

en: {
  jp: {
    sec2: { a:"1 · The Day Master", b:"2 · Structure (Ziping Zhenquan, Month Command)", c:"3 · Month Command & Climate (Tiaohou)", d:"4 · Strength & Favorable Elements", e:"5 · Ten Gods Across the Pillars", f:"6 · The Luck Rhythm", g:"7 · Year NaYin" },
    stemsDeep: {
      "甲": "Jia, the great tree: principled, ambitious and dependable, you grow toward a goal in slow, certain movements and despise shortcuts. Strengths: integrity, endurance, natural organization. Weaknesses: stubbornness and a poor instinct for detours. Suited to industry, management, engineering and any field where patience compounds. In love you are loyal to a fault — try swapping 'I know best' for 'you decide'.",
      "乙": "Yi, the supple vine: soft-spoken but nearly unkillable, you thrive by adapting, charming and attaching yourself to stronger structures. Strengths: adaptability, aesthetics, likability. Weaknesses: dependency and hesitation at big moments. Suited to design, diplomacy, education, care and the arts. In love you need to feel needed.",
      "丙": "Bing, the sun's fire: radiant, generous and honest, you are the natural center of warmth in any room. Strengths: candor, courage, fast action. Weaknesses: impatience, pride, bursts that fizzle. Suited to media, speaking, energy, hospitality — any stage that lights others. In love you burn bright; guard the fuel.",
      "丁": "Ding, the lamp's flame: gentle outside, luminous inside, you glow longest in detail and depth. Strengths: focus, empathy, intuition. Weaknesses: overthinking, sensitivity, spirals. Suited to research, writing, medicine, psychology, the quiet arts. In love you are a long-burning lamp, not a firework.",
      "戊": "Wu, the mountain-earth: heavy, trustworthy and immovable in the best way, you are the natural load-bearer. Strengths: reliability, tolerance, pressure-tolerance. Weaknesses: conservatism, slow warmth, rigidity. Suited to property, management, finance, infrastructure. In love you are loyal for decades — romance isn't your language, reliability is.",
      "己": "Ji, the garden soil: humble, nourishing and quietly systematic, you create value by cultivating people and projects. Strengths: empathy, care, steady execution. Weaknesses: worry, overthinking, living for others. Suited to education, psychology, food, administration, social work. In love you are the long, steady companion.",
      "庚": "Geng, the raw sword-metal: decisive, fierce and loyal, with terrifying execution under pressure. Strengths: courage, endurance, crisis performance. Weaknesses: harshness, quick temper, enemies made along the way. Suited to military, engineering, surgery, competitive fields. In love: a soft heart inside hard armor — sheathe the blade at home.",
      "辛": "Xin, the jeweled metal: refined, perceptive and uncompromising about quality. Strengths: aesthetics, precision, self-respect. Weaknesses: delicacy, sensitivity, keeping score. Suited to finance, fine craftsmanship, fashion, appraisal. In love you shine when cherished and dim when neglected.",
      "壬": "Ren, the great waters: broad-minded, quick-witted and endlessly adaptive. Strengths: resourcefulness, magnanimity, integration of people and ideas. Weaknesses: restlessness, drifting plans. Suited to trade, logistics, strategy, media, consulting. In love you need a riverbed — commitment is what keeps the current from becoming a flood.",
      "癸": "Gui, the gentlest water, dew and springs: subtle, intuitive and quietly nourishing. Strengths: intelligence, empathy, overcoming hardness with softness. Weaknesses: melancholy, inner friction, pessimism in the dark hours. Suited to research, psychology, planning, medicine, contemplative fields. In love you are deep and quiet — you open only where you feel safe."
    },
    ge: {
      title: "Structure (Geju)",
      secName: "7 · Structure — the Month Command",
      quote: { t: "八字用神，专求月令，以日干配月令地支，而生克不同，格局分焉。财官印食，此用神之善而顺用之者也；煞伤劫刃，用神之不善而逆用之者也。", s: "《子平真诠·论用神》", ve: "\"The yongshen is sought from the month command alone: pairing the day stem with the month branch, their relations divide the structures. Wealth, officer, resource and output are the 'kind' gods — support them. Killer, rebel, rival and blade are the 'unkind' gods — restrain or transform them.\"" },
      calcLab: "Basis of determination",
      shunNi: { shun: "Kind gods (wealth, officer, resource, output) are supported", ni: "Unkind gods (killer, rebel, rival, blade) are restrained or transformed" },
      geTexts: {
        "正官格": "Officer structure: born under the star of order. You value honor, discipline and rank; rule-bound tracks suit you best. Supported by wealth and resource stars; harmed by the rebel. Modern note: in structured games you rise fastest.",
        "七杀格": "Killer structure: pressure and power share one root. You are decisive under extreme stress — built for hard industries, emergencies and founding battles. Must be restrained (by output) or transformed (by resource). Modern note: turning pressure into fuel is your curriculum.",
        "正财格": "Earned-wealth structure: steady, frugal and creditworthy; wealth compounds brick by brick. Supported by output and officer; opposed by rivals. Modern note: your fortune comes from daily progress, not windfalls.",
        "偏财格": "Windfall structure: sharp, generous and mobile; you catch opportunities and monetize networks. Supported by output and officer; opposed by rivals. Modern note: money follows movement and information gaps — sitting still loses it.",
        "正印格": "Resource structure: the star of protection and learning. Kind, scholarly, helped by elders and mentors; suited to academia, education, culture, medicine. Supported by the officer (officer-resource flow); harmed by wealth. Modern note: your moat is depth plus reputation.",
        "偏印格": "Mystic-resource structure: unusual learning and sharp intuition; suited to research, technology, esoterica, art. Harmed when it crushes your output; balanced by wealth. Modern note: mastering the obscure is your scarcity.",
        "食神格": "Output structure: the star of talent and quiet good fortune. Optimistic and expressive; suited to creation, food, teaching, content. Supported by wealth (output generating wealth); harmed by the mystic resource. Modern note: productize your expression and fortune follows.",
        "伤官格": "Rebel-talent structure: brilliant, sharp-tongued, allergic to authority; creation and destruction share one root. Suited to creative and independent fields. Loves the resource (rebel with resource) or wealth (rebel generating wealth); hates being uncontained. Modern note: edge must ship, or it's just attitude.",
        "建禄格": "Established-vigor structure: self-made by nature, relying on your own hands rather than inheritance; suited to partnerships and hands-on industries. Favors wealth and officer; without them, toil. Modern note: you are your own seed stock — find the exit for your output.",
        "羊刃格": "Blade structure: extreme drive and daring, the natural vanguard, made for brutal competition. Favors the officer/killer restraining the blade (a grand combination); unrestrained it snaps. Modern note: put the aggression inside rules and it becomes your trump card."
      }
    },
    tiaohou: {
      title: "Climate Adjustment (Tiaohou)",
      secName: "8 · Climate — the Qiong Tong Bao Jian",
      src: "Per the popular adjustment table of the Qiong Tong Bao Jian; precise selection still requires the whole chart.",
      intro: "Tiaohou means correcting the chart's climate — heat, cold, dryness or wetness. Use water in hot seasons, fire in cold ones. Below are the adjustment stems for your day master in your birth month.",
      table: {
        "甲": { "寅": { t: "丙、癸", d: "Late winter chill — warm the wood toward the sun." }, "卯": { t: "庚、丙、丁、戊、己", d: "Blade month — metal prunes the dense growth." }, "辰": { t: "庚、丁、壬", d: "Aging wood — metal prunes, fire refines." }, "巳": { t: "癸、丁、庚", d: "Wood begins to scorch — adjust first." }, "午": { t: "癸、丁、庚", d: "Blazing season — heavy water." }, "未": { t: "癸、丁、庚", d: "Wood returns to store — water leads." }, "申": { t: "庚、丁、壬", d: "Autumn metal — fire controls the axe." }, "酉": { t: "庚、丙、丁", d: "Sharp metal threatens — fire is essential." }, "戌": { t: "庚、甲、丁、壬", d: "Deep autumn, dry earth — wood loosens, water moistens." }, "亥": { t: "庚、丁、丙", d: "Cold wood turns to the sun." }, "子": { t: "丁、庚、丙", d: "Freezing wood — fire warms, metal feeds the flame." }, "丑": { t: "丁、庚、丙", d: "Frozen ground — warmth first." } },
        "乙": { "寅": { t: "丙、癸", d: "Flourishes with warmth and moisture." }, "卯": { t: "丙、癸", d: "Spring bloom — both together." }, "辰": { t: "癸、丙、戊", d: "Cultivate the root." }, "巳": { t: "癸", d: "Fire above — water leads." }, "午": { t: "癸、丙", d: "Midsummer scorch — heavy dew." }, "未": { t: "癸、丙", d: "Dry earth — moisten and warm." }, "申": { t: "丙、癸、己", d: "Metal commands — temper it." }, "酉": { t: "癸、丙、丁", d: "Autumn flower — water the root." }, "戌": { t: "癸、辛", d: "Return to store — water and polish." }, "亥": { t: "丙", d: "Cold wood — fire alone." }, "子": { t: "丙", d: "Deep winter — sun only." }, "丑": { t: "丙", d: "Frozen bloom — fire thaws." } },
        "丙": { "寅": { t: "壬、庚", d: "Wood feeds fire — water steadies the blaze." }, "卯": { t: "壬、己", d: "Too much wood — water checks it." }, "辰": { t: "壬、甲", d: "Brightening — water and wood together." }, "巳": { t: "壬、庚、癸", d: "Heat grows — water assists." }, "午": { t: "壬、庚", d: "Blade month — water restrains." }, "未": { t: "壬、庚", d: "Returning to store — both apply." }, "申": { t: "壬、戊", d: "Fire drains — earth guards the water." }, "酉": { t: "壬、癸", d: "Dimming — water polishes the glow." }, "戌": { t: "甲、壬", d: "Entering the tomb — wood and water aid." }, "亥": { t: "甲、戊、庚、壬", d: "Cold fire — wood as kindling." }, "子": { t: "壬、戊、己", d: "Winter flame — earth dams the water." }, "丑": { t: "壬、甲", d: "Gloom hides the fire — wood revives it." } },
        "丁": { "寅": { t: "甲、庚", d: "Mother-wood feeds the lamp; metal splits the kindling." }, "卯": { t: "庚、甲", d: "Heavy resource — wealth balances." }, "辰": { t: "甲、庚", d: "Wet wood dims — both are used." }, "巳": { t: "甲、壬", d: "Heat grows — water moderates." }, "午": { t: "壬、庚、癸", d: "Blazing — heavy adjustment." }, "未": { t: "甲、壬、庚", d: "Dry earth dims the light — three-way balance." }, "申": { t: "甲、庚、丙、戊", d: "Wealth-heavy — wood rekindles." }, "酉": { t: "甲、庚、丙、戊", d: "Same principle applies." }, "戌": { t: "甲、庚、戊", d: "Entering the tomb — wood and metal." }, "亥": { t: "甲、庚", d: "The cold lamp turns to warmth." }, "子": { t: "甲、庚", d: "Killer pressure — both apply." }, "丑": { t: "甲、庚", d: "Wet earth dims — same pair." } },
        "戊": { "寅": { t: "丙、甲、癸", d: "Spring earth is weak — warm, loosen, moisten." }, "卯": { t: "丙、甲、癸", d: "Officer pressure — transform via resource." }, "辰": { t: "甲、丙、癸", d: "Thick earth — wood loosens first." }, "巳": { t: "甲、丙、癸", d: "Earth and fire blaze — dew moderates." }, "午": { t: "壬、甲、丙、癸", d: "Scorched — heavy water." }, "未": { t: "癸、丙、甲", d: "Extreme dryness — water leads." }, "申": { t: "丙、癸、甲", d: "Metal drains — warm and moisten." }, "酉": { t: "丙、癸", d: "Drained earth — warmth and dew." }, "戌": { t: "甲、丙、癸", d: "Very thick — loosen with wood." }, "亥": { t: "甲、丙", d: "Cold earth — fire warms." }, "子": { t: "丙、甲", d: "Wealth-heavy and cold — both together." }, "丑": { t: "丙、甲", d: "Frozen ground — fire first." } },
        "己": { "寅": { t: "丙、庚、甲", d: "Spring earth — warm, loosen, moisten." }, "卯": { t: "甲、癸、丙", d: "Killer pressure — transform via resource." }, "辰": { t: "丙、癸、甲", d: "Wet earth — all three cooperate." }, "巳": { t: "癸、丙", d: "Earth and fire blaze — dew leads." }, "午": { t: "癸、丙", d: "Extreme dryness — heavy dew." }, "未": { t: "癸、丙", d: "Same — water and warmth." }, "申": { t: "丙、癸", d: "Metal drains — warm and moisten." }, "酉": { t: "丙、癸", d: "Drained — warmth and dew." }, "戌": { t: "甲、丙、癸", d: "Thick — loosen with wood." }, "亥": { t: "丙、甲、戊", d: "Winter earth won't grow without fire." }, "子": { t: "丙、甲、戊", d: "Wealth-heavy and cold — both." }, "丑": { t: "丙、甲、戊", d: "Frozen — fire first." } },
        "庚": { "寅": { t: "戊、甲、壬、丙、丁", d: "Young metal in lush wood — earth feeds, fire tempers." }, "卯": { t: "丁、甲、庚、丙", d: "Wealth-heavy — fire forges the blade." }, "辰": { t: "甲、丁、壬、癸", d: "Moist earth generates — fire applies the edge." }, "巳": { t: "壬、戊、丙、丁", d: "Forging season — water moderates." }, "午": { t: "壬、癸", d: "Blazing metal melts — heavy water rescues." }, "未": { t: "丁、甲", d: "Forging continues — both apply." }, "申": { t: "丁、甲", d: "Metal commands — fire gives the edge." }, "酉": { t: "丁、甲、丙", d: "Blade month — temper it." }, "戌": { t: "甲、壬", d: "Thick earth buries — loosen and wash." }, "亥": { t: "丁、甲、丙", d: "Cold metal — warmth and kindling." }, "子": { t: "丁、甲、丙", d: "Same — cold requires fire." }, "丑": { t: "丙、丁、甲", d: "Frozen metal — warmth forges." } },
        "辛": { "寅": { t: "己、壬、庚", d: "Young metal — earth feeds, water polishes." }, "卯": { t: "壬、甲", d: "Metal at its weakest — water reveals its brilliance." }, "辰": { t: "壬、甲", d: "Thick earth buries — wash and loosen." }, "巳": { t: "壬、甲、癸", d: "Forging — heavy water guards." }, "午": { t: "壬、己、癸", d: "Blazing — protect the jewel." }, "未": { t: "壬、庚、甲", d: "Dry burial — three-way rescue." }, "申": { t: "壬、甲、戊", d: "Metal at home — wash and loosen." }, "酉": { t: "壬、甲", d: "Established vigor — water polishes." }, "戌": { t: "壬、甲", d: "Burial again — same pair." }, "亥": { t: "壬、丙", d: "Cold metal — fire warms." }, "子": { t: "丙、戊、壬、甲", d: "Deep cold — warmth plus grounding." }, "丑": { t: "丙、壬、戊、己", d: "Winter jewel — fire leads." } },
        "壬": { "寅": { t: "庚、丙、戊", d: "Clear waters — metal sources, fire warms, earth banks." }, "卯": { t: "戊、辛、庚", d: "Drained waters — ground and source." }, "辰": { t: "甲、庚", d: "Water in store — both cooperate." }, "巳": { t: "壬、辛、庚、癸", d: "Weakening — peers assist." }, "午": { t: "癸、庚、辛", d: "Wealth-heavy — rivals share the load." }, "未": { t: "辛、甲", d: "Officer commands — polish and loosen." }, "申": { t: "戊、丁", d: "Metal-water strength — bank and warm." }, "酉": { t: "甲、庚", d: "Heavy resource — both cooperate." }, "戌": { t: "甲、丙", d: "Water in store — loosen and warm." }, "亥": { t: "戊、丙、庚", d: "Established vigor — bank the flood." }, "子": { t: "戊、丙", d: "Blade month — dam and warm." }, "丑": { t: "丙、丁、甲", d: "Frozen waters — warmth first." } },
        "癸": { "寅": { t: "辛、丙", d: "Clear streams — source and sun." }, "卯": { t: "庚、辛", d: "Drained — metal sources the flow." }, "辰": { t: "庚、辛、丙", d: "Water in store — three cooperate." }, "巳": { t: "辛", d: "Wealth-heavy — metal alone." }, "午": { t: "庚、辛、壬、癸", d: "Wealth-heavy — peers assist." }, "未": { t: "庚、辛、壬、癸", d: "Same principle." }, "申": { t: "丁", d: "Bright metal — fire warms the source." }, "酉": { t: "辛、丙", d: "Heavy resource — warmth welcomes it." }, "戌": { t: "辛、甲、壬、癸", d: "Water in store — polish and flow." }, "亥": { t: "庚、辛、戊、丁", d: "Peak water — dam and warm." }, "子": { t: "丙、辛", d: "Frozen dew — sun thaws, metal sources." }, "丑": { t: "丙、丁", d: "Coldest water — double warmth." } }
      }
    },
    godsDeep: {
      "比肩": "Peers and partners — the same qi as your day master. Upside: self-reliance, loyalty and pressure-tolerance; excellent in teams and partnerships. Downside: stubbornness and turf wars. Business: collaborative industries; never mix friendship with unclear accounts. In love, peer rivalry is real — build trust before building together.",
      "劫财": "The rival — same element, opposite polarity. Upside: boldness, speed and social magnetism; first to act in a crisis. Downside: impulsive losses and friends who drag you down. Business: sales, frontline and crisis roles; never guarantee others' debts. In love, the most passionate pursuer — guard the wallet before guarding the heart.",
      "食神": "The gourmet-talent — what you gently produce. Upside: optimism, taste, natural expression, artistic ease. Downside: complacency, lack of edge. Business: creation, food, education, content — output generating wealth is the classic path. In love, warmth and steadiness — the lubricant of long bonds.",
      "伤官": "The rebel-talent — brilliant, sharp and allergic to rules. Upside: genius-level creativity and courage against authority. Downside: a tongue that cuts and conflicts with bosses. Business: creative, technical and independent fields — the edge must ship. In love, magnetic and demanding: save the temper for the world, not for your love.",
      "偏财": "Windfall wealth — the opportunistic side of what you control. Upside: quick, generous, alive to trends and networks. Downside: many fronts, weak retention. Business: trade, investment, broking, self-media. In love, romantic and popular — manage the accounts, and manage the heart.",
      "正财": "Earned wealth — the steady side of what you control. Upside: diligent, thrifty, trustworthy; wealth compounds. Downside: conservative and penny-wise moments. Business: finance, industry, operations. In love, faithful and domestic — the marry-material star. Remember occasional romance, or life becomes arithmetic.",
      "七杀": "The warrior — same-polarity pressure that forges authority. Upside: decisiveness, pressure-tolerance, terrifying execution; first to rise in chaos. Downside: arrogance, ferocity, quick enemies. Business: military, surgery, hard founding battles. In love, intense and possessive — leave the killer instinct on the battlefield.",
      "正官": "The officer — opposite-polarity discipline: order, rank and reputation. Upside: self-discipline, decency, natural management; high social evaluation. Downside: conservatism and rule-bound stress. Business: public service, management, law. In love, faithful and responsible — but break one rule now and then for your love.",
      "偏印": "The mystic — same-polarity resource: unusual learning and intuition. Upside: research depth, gut instinct, esoteric mastery. Downside: suspicion, loneliness, many starts few finishes. Business: research, technology, esoterica, art. In love you need resonance and quiet — find someone who understands silence.",
      "正印": "The scholar-protector — opposite-polarity resource: shelter and scholarship. Upside: kindness, learning, magnificent mentor luck. Downside: dependency, thinking over doing. Business: academia, education, culture, medicine. In love you are the dependable one — remember it's allowed to lean sometimes too."
    },
    nayin: {
      "海中金": "Gold within the sea: the blade hidden in the deep — a late bloomer; store your strength early, shine late.",
      "炉中火": "Fire in the furnace: it burns by borrowed fuel — strong on a platform, weak off it. Attach to strong organizations.",
      "大林木": "Forest on the plain: lush and responsible — built for shared enterprises, not solo display.",
      "路旁土": "Earth by the roadside: it feeds all things without credit — devoted labor, rich later years.",
      "剑锋金": "Newly forged blade-edge metal: sharp and showy — quench with water; softness inside hardness makes the true weapon.",
      "山头火": "Fire on the mountaintop: high and conspicuous — brilliant but brief; keep adding fuel and mind the height.",
      "涧下水": "The mountain stream: pure but not yet mighty — small streams make rivers; clarity after middle age.",
      "城头土": "Earth of the city wall: the guardian's soil — deep responsibility, great at holding, slower at expanding.",
      "白蜡金": "Wax-pale metal, newly cast: noble but unfinished — early volatility, polish brings the shine.",
      "杨柳木": "Willow wood: dancing with the wind — flexible, charming, artistic; beware rootlessness.",
      "泉中水": "Spring water, never exhausted: pure and self-possessed — deep specialization becomes greatness.",
      "屋上土": "Earth on the rooftop: the mature guardian — steady, protective, thriving with a team.",
      "霹雳火": "Lightning fire: explosive power — a life curve of sudden fame; guard against crashes.",
      "松柏木": "Pine and cypress: unbending in winter — grit that hardens with every storm into true timber.",
      "长流水": "Ever-flowing water with ocean momentum: endless currents suit mobile trades — better and better with age.",
      "沙中金": "Gold in the sand: hidden value — panning reveals the price; late-blooming and precious.",
      "山下火": "Fire at the mountain's foot, the sunset glow: mild and lovely — arts and teaching; later years outshine early ones.",
      "平地木": "Trees on the plain: practical and communal — thrive with others, never aloof.",
      "壁上土": "Earth on the wall, decorating the facade: beauty and order — strong at protecting home, timid abroad.",
      "金箔金": "Gold leaf: exquisite and delicate — display and craft; mind the thin foundation.",
      "覆灯火": "The covered lamp: light that illuminates without burning — night work, letters, the mystical.",
      "天河水": "Water of the Milky Way: lofty and otherworldly — ideas and imagination; landing them takes effort.",
      "大驿土": "Earth of the great post road: wide connections and information — trade, transport, brokerage.",
      "钗钏金": "Jewelry metal: ornamental beauty — fine industries and craft; soft metal fears heavy forging.",
      "桑柘木": "Mulberry wood that feeds silkworms: the giving tree — livelihood trades; diligence feeds you well.",
      "大溪水": "The great stream running to the sea: momentum — go with the flow; against it, only toil.",
      "沙中土": "Earth within the sand: loose and absorbent — research and integration; mind the shifting ground.",
      "天上火": "Fire in the sky, sunlight over all: impartial generosity — public service shines here.",
      "石榴木": "Pomegranate wood, flowers and fruit at once: showmanship with results — marketing and stage; mind the thorns."
    }
  },
  zp: {
    starsLong: {
      "紫微": "Zi Wei, the Emperor star enthroned at the center of heaven. Composed, dignified, allergic to being told what to do: you naturally take the helm and are used to being depended on. Strengths: vision, composure under crisis, the capacity to carry others. Weaknesses: pride, isolation at the top, listening last. Suited to leadership, management and decisions — the emperor deserves a court, so learn to delegate and to listen.",
      "天机": "Tian Ji, the strategist's star: quicksilver mind, analytical by nature, in love with plans, patterns and the question behind the question. Strengths: insight, adaptability, intellectual depth. Weaknesses: thinking more than moving, moods following thoughts. Suited to strategy, research, consulting and technology — the lesson is to think deeply, then land it.",
      "太阳": "Tai Yang, the Sun: generous, visible and responsible, you instinctively light up others and are cared about whether you like it or not. Strengths: candor, justice, momentum. Weaknesses: over-giving, and the brighter the sun the longer the shadow. Suited to public affairs, media, education, medicine.",
      "武曲": "Wu Qu, the treasurer with a blade: decisive, hands-on, instinctively fluent with money and numbers, unstoppable once the target is set. Strengths: courage, efficiency, results. Weaknesses: hardness, impatience, poverty of soft words. Suited to finance, engineering, founding, sales — the lesson: sheathe the blade for the people closest to you.",
      "天同": "Tian Tong, the star of easy fortune: amiable, optimistic, a peacemaker who knows how to enjoy life and defuse conflict. Strengths: likability, calm, survivor's luck. Weaknesses: comfort-seeking and a missing killer instinct. Suited to service, healing, culture and the team-hygienist role — the lesson: don't let contentment become lying flat.",
      "廉贞": "Lian Zhen, the judge entangled: principle fused with passion, unbending about the standards you hold. Strengths: discipline, backbone, aesthetics. Weaknesses: stubbornness, inner friction, loving deeply and blaming deeply. Suited to law, quality control, art, politics — the lesson: hold principles without being imprisoned by them.",
      "天府": "Tian Fu, the treasury of the southern pole: steady, managerial, a natural at accumulating and administering. Strengths: reliability, magnanimity, safety. Weaknesses: conservatism, risk-aversion, heavy defenses. Suited to management, finance, administration, property — the lesson: guard the vault, but dare to open a new one.",
      "太阴": "Tai Yin, the Moon: gentle, introspective and aesthetically gifted, digesting emotions quietly at night. Strengths: empathy, patience, letters, design and care. Weaknesses: moodiness and indecision. Suited to writing, design, research, medicine, property — the lesson: accept your own phases.",
      "贪狼": "Tan Lang, the star of appetite and many talents: endlessly curious, socially magnetic, forever hungry for the new. Strengths: charm, learning speed, opening new ground. Weaknesses: scattered desires, abandoned beginnings. Suited to business development, entertainment, creative and PR — the lesson: distill desire into focus.",
      "巨门": "Ju Men, the orator-skeptic: razor observation, relentless questioning, brave enough to say the unsayable. Strengths: insight, debate, professional depth. Weaknesses: suspicion and disputes that follow the tongue. Suited to law, consulting, media, teaching, research — the lesson: turn the sharp tongue into a sharp instrument, not a blade at friends.",
      "天相": "Tian Xiang, the chancellor's seal: loyal, fair and forever harmonizing, the most reliable second-in-command any team could ask for. Strengths: duty, thoroughness, good faith. Weaknesses: reluctance to take the final call. Suited to deputy management, administration, HR, legal — the lesson: after mastering the supporting role, dare to sit in the main seat.",
      "天梁": "Tian Liang, the guardian elder: seasoned, principled, protective — the natural mentor with guardian-angel luck in crises. Strengths: steadiness, analysis, shelter. Weaknesses: preaching, stubbornness, carrying everyone's burdens. Suited to medicine, law, education, insurance and advisory — the lesson: allow yourself to be cared for, too.",
      "七杀": "Qi Sha, the general: fearless, decisive and built for breakthroughs; the keywords are pioneering and breaking through, and routine is your only true enemy. Strengths: courage, execution, explosive power in crises. Weaknesses: impatience, recklessness, wounds from charging. Suited to founding, military, surgery, competition — the lesson: turn charging into strategy, not strategy into charging.",
      "破军": "Po Jun, the reformer's star: change-hungry, willing to lose everything to rebuild, with a life trajectory of demolish-then-construct. Strengths: innovation, adaptation, explosive power in upheaval. Weaknesses: impulsiveness, weak retention, abandoned halves. Suited to innovation, restructuring, crisis roles — the lesson: before rebuilding, decide what is worth keeping."
    },
    palDeep: {
      "官禄": "The Career palace shows your working style: pioneering stars charge and found, managerial stars operate and scale, artistic stars express and create — and the transformation sitting on those stars tells you exactly which decade to push that direction.",
      "财帛": "The Wealth palace shows how money arrives: wealth stars earn by operating, resource stars by expertise, output stars by craft — and where Ji sits is usually the hole the money leaks from.",
      "夫妻": "The Spouse palace sketches the flavor of your closest bond: the stars' temperament often mirrors the person you attract — Lu sweetens the bond, Ji makes it the curriculum. It never says who is good or bad; it teaches the right posture to love in." }
    }
  }
};
