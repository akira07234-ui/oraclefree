/* citations.js — classical text citations per language per article slug (appended to article html) */
function q(h2, zhQuote, render, sourceTxt, sourcesHtml, varnote) {
  return "<h2>" + h2 + "</h2>" +
    '<blockquote class="classic"><span class="zh-quote">「' + zhQuote + "」</span>" +
    (render ? '<span style="display:block;font-size:.95rem;color:var(--ink2);margin-top:8px">' + render + "</span>" : "") +
    '<cite class="cite">—— ' + sourceTxt + "</cite></blockquote>" +
    '<section class="sources"><ul>' + sourcesHtml + "</ul>" +
    '<p class="varnote">' + varnote + "</p></section>";
}
function s(h2, sourcesHtml, varnote) {
  return '<section class="sources"><h2>' + h2 + "</h2><ul>" + sourcesHtml + "</ul>" +
    '<p class="varnote">' + varnote + "</p></section>";
}

module.exports = {
  es: {
    "what-is-bazi": q("Del clásico", "以日为主，年为根，月为苗，日为花，时为果。",
      "«El tallo del día es el maestro: el año es la raíz, el mes el brote, el día la flor y la hora el fruto.»",
      "Yuanghai Ziping (渊海子平) · 论日为主",
      "<li><b>《渊海子平》</b>: primera gran compilación del método Ziping, atribuida a Xu Dasheng (dinastía Song).</li><li><b>《三命通会》</b>: enciclopedia del destino compilada por Wan Minying (1596), incluida en la biblioteca Siku Quanshu.</li><li><b>《周易》</b>: el clásico de los cambios, fuente de los 64 juicios que citamos.</li>",
      "Citas según ediciones corrientes; la redacción puede variar entre versiones. Nuestras lecturas son traducciones modernas, con fines culturales y de entretenimiento."),
    "true-solar-time": s("Sobre las fuentes",
      "<li><b>Li Xuzhong 李虚中</b> (761–813): pionero de la dinastía Tang en la lectura del destino por la hora de nacimiento; Han Yu dejó escrito su epitafio.</li><li><b>Xu Ziping 徐子平</b>: trasladó el análisis al tallo del día; de ahí el nombre «método Ziping».</li>",
      "Contenido cultural y de entretenimiento."),
    "jiaobei-guide": q("Del clásico", "手持杯珓导我掷，云此最吉余难同。",
      "«Me entrega los bloques y me pide lanzarlos: “Este es el más auspicioso — nada se le iguala.”»",
      "Han Yu (768–824), poema escrito en el templo del Monte Heng",
      "<li><b>Han Yu</b>: su verso documenta la práctica de los bloques en la China Tang, hace más de mil doscientos años.</li><li><b>杯珓 (beijiao)</b>: nombre antiguo de los bloques; el término inglés «poe» viene del minnan poa̍h-poe.</li>",
      "Contenido cultural y de entretenimiento."),
    "kau-cim-guide": s("Sobre el origen del texto",
      "<li><b>Edición popular de los cien signos</b>: los lot-books circularon en templos del sur de China desde la dinastía Song del Sur; cada templo conserva pequeñas variantes.</li><li><b>《周易》</b>: si buscas un método con fuente clásica exacta, los 64 juicios del I Ching provienen del texto original.</li>",
      "Seguimos la edición más difundida; nuestras lecturas son versiones modernas, no la voz de autoridad alguna."),
    "ziwei-guide": q("Del clásico", "学问之难，莫难于星命之学；而星命之学，莫难于紫微斗数。",
      "«De todas las disciplinas, ninguna es más difícil que leer el destino por las estrellas; y entre ellas, la más difícil es Zi Wei Dou Shu.»",
      "Tai Wei Fu, en el Zi Wei Dou Shu Quan Shu (compilado por Luo Hongxian, dinastía Ming)",
      "<li><b>《紫微斗数全书》</b>: texto fundacional del sistema, atribuido a Chen Tuan y compilado por Luo Hongxian.</li><li><b>Escuelas</b>: San He, Feixing y Zhongzhou difieren en detalles como la tabla de las cuatro transformaciones; usamos la convención mayoritaria de la biblioteca iztro.</li>",
      "Contenido cultural y de entretenimiento."),
    "five-elements-guide": q("Del clásico", "能知衰旺之真机，其于三命之奥，思过半矣。",
      "«Quien comprende el verdadero mecanismo de fuerza y debilidad tiene más de la mitad de los misterios del destino.»",
      "Di Tian Sui (滴天髓), comentado por Liu Ji (dinastía Ming)",
      "<li><b>《滴天髓》</b>: el clásico que hizo del análisis fuerza-debilidad el corazón del método Ziping; nuestra lectura simplificada es un primer paso por este camino.</li><li><b>《穷通宝鉴》</b>: el clásico del ajuste climático (tiaohou), aún no integrado en nuestro modelo simplificado.</li>",
      "Contenido cultural y de entretenimiento.")
  },
  ja: {
    "what-is-bazi": q("古典より", "以日为主，年为根，月为苗，日为花，时为果。",
      "「日干を主とす。年は根、月は苗、日は花、時は実なり。」",
      "『淵海子平』論日為主より",
      "<li><b>『淵海子平』</b>：子平法最初の集成書。宋・徐大升編と伝わる。</li><li><b>『三命通会』</b>：明・万民英撰（1596）。四庫全書に収録された命理の百科全書。</li><li><b>『周易』</b>：六十四卦の卦辞はすべてこの原典による。</li>",
      "引用は通行本による。字句は版本により多少異なります。当サイトの解説は現代語の参考訳です。"),
    "true-solar-time": s("源流ノート",
      "<li><b>李虚中（り・きょちゅう）</b>（761–813）：唐代、出生時刻による命判断の先駆者。韓愈が墓誌銘を記した。</li><li><b>徐子平（じょ・しへい）</b>：日干を中心に改めた五代の術士。「子平術」の名の由来。</li>",
      "文化・娯楽目的の内容です。"),
    "jiaobei-guide": q("古典より", "手持杯珓导我掷，云此最吉余难同。",
      "「手に杯珓を持って我に投ぜしめ、云わく『これ最も吉、余は同じくす難し』と。」",
      "唐・韓愈『謁衡岳廟遂宿岳寺題門楼』より",
      "<li><b>韓愈</b>：唐の大文人が杯珓占いを実録した詩。この作法が少なくとも千二百年の歴史を持つ証。</li><li><b>杯珓（はいかい）</b>：筊杯の古称。閩南語の「跋杯（poa̍h-poe）」が英語 Poe の語源。</li>",
      "文化・娯楽目的の内容です。"),
    "kau-cim-guide": s("テキストの由来について",
      "<li><b>観音霊签通行本</b>：南宋以来、江南・閩粤の廟で伝わる百签の签譜。寺により字句に異同があります。</li><li><b>『周易』</b>：確かな古典出典を持つ占法としては、六十四卦の卦辞がすべて『周易』原典によります。</li>",
      "当サイトは最も広く流布する通行本に拠り、解説は現代語の参考訳です。特定の「権威」の声ではありません。"),
    "ziwei-guide": q("古典より", "学问之难，莫难于星命之学；而星命之学，莫难于紫微斗数。",
      "「学問の難しさは星命の学に過ぎず。星命の学の難しさは、紫微斗数に過ぎず。」",
      "『紫微斗数全書』太微賦より（陳摶撰と伝えられ、明・羅洪先編）",
      "<li><b>『紫微斗数全書』</b>：陳摶（希夷先生）撰と伝わる紫微斗数の祖本。安星訣や諸星論はこれに出ず。</li><li><b>流派</b>：三合・飛星・中州などの分派があり、四化表などの細部で異同。当サイトはオープンソース iztro の主流の約定を採用。</li>",
      "文化・娯楽目的の内容です。"),
    "five-elements-guide": q("古典より", "能知衰旺之真机，其于三命之奥，思过半矣。",
      "「衰旺の真機を知り得れば、三命の奥において思うこと半ばを過ぐ。」",
      "『滴天髄』より（宋・京図撰と伝えられ、明・劉基注）",
      "<li><b>『滴天髄』</b>：旺衰分析を子平法の核心とした古典。当サイトの簡略化された旺衰判定は、その最初の一歩です。</li><li><b>『窮通宝鑑』</b>：月令による調候用神の原典（当サイトの簡略モデルは未対応）。</li>",
      "文化・娯楽目的の内容です。")
  },
  ar: {
    "what-is-bazi": q("من النصوص الكلاسيكية", "以日为主，年为根，月为苗，日为花，时为果。",
      "«يُتخذ سيف اليوم سيدًا: السنة جذر، والشهر غصن، واليوم زهرة، والساعة ثمرة.»",
      "يوان هاي تزي بينغ (渊海子平) · فصل «اليوم سيدًا»",
      "<li><b>《渊海子平》</b>: أول تجميع شامل لمنهج تزي بينغ، يُنسب إلى شو دا شنغ (أسرة سونغ).</li><li><b>《三命通会》</b>: موسوعة المصير لوان مين يينغ (1596).</li><li><b>《周易》</b>: كتاب التغييرات، مصدر أحكام الأشكال الـ64 التي نقتبسها.</li>",
      "الاقتباسات وفق الطبعات الشائعة؛ وقد تتفاوت الصياغة بين النسخ. قراءاتنا ترجمات حديثة لأغراض ثقافية وترفيهية."),
    "true-solar-time": s("عن المصادر",
      "<li><b>لي شي تشونغ 李虚中</b> (761–813): رائد أسرة تانغ في قراءة المصير من ساعة الميلاد، وترك له هان يو رثاءه.</li><li><b>شو تزي بينغ 徐子平</b>: نقل التحليل إلى سيف اليوم، ومنه سُمي المنهج «تزي بينغ».</li>",
      "محتوى ثقافي وترفيهي."),
    "jiaobei-guide": q("من النصوص الكلاسيكية", "手持杯珓导我掷，云此最吉余难同。",
      "«ناولني قطعتي الغيب فقال: ارمهما — هذه أومأ البشائر، وما دونها لا يُقارن.»",
      "هان يو (768–824)، قصيدة في معبد جبل هينغ",
      "<li><b>هان يو</b>: قصيدته توثق ممارسة قطع الغيب في الصين منذ أسرة تانغ — أي قبل أكثر من ألف ومئتي سنة.</li><li><b>杯珓 (بي جياو)</b>: الاسم القديم للقطع، ومن نطق ميننان جاءت الكلمة الإنجليزية Poe.</li>",
      "محتوى ثقافي وترفيهي."),
    "kau-cim-guide": s("عن أصل النص",
      "<li><b>النسخة الشائعة للمئة علامة</b>: دارت دفاتر القرعات في معابد جنوب الصين منذ أسرة سونغ الجنوبية، ولكل معبد فروق طفيفة في الصياغة.</li><li><b>《周易》</b>: إن أردت عرافة بمصدر كلاسيكي موثق، فأحكام الأشكال الـ64 كلها من النص الأصلي لكتاب التغييرات.</li>",
      "نعتمد النسخة الأوسع انتشارًا، وقراءاتنا صياغات حديثة — لا صوت أي «سلطة»."),
    "ziwei-guide": q("من النصوص الكلاسيكية", "学问之难，莫难于星命之学；而星命之学，莫难于紫微斗数。",
      "«ليس في العلم أصعب من قراءة المصير بالنجوم؛ وليس في قراءة النجوم أصعب من تسي وي دو شو.»",
      "تاي وي فو، في كتاب تسي وي دو شو تشوان شو (جمعه لو هونغ شيان، أسرة مينغ)",
      "<li><b>《紫微斗数全书》</b>: النص التأسيسي للنظام، يُنسب إلى تشن توان وجمعه لو هونغ شيان.</li><li><b>المدارس</b>: تفترق مدارس سان خه وفاي شينغ وتشونغ تشو في تفاصيل كجدول التحويلات الأربعة؛ ونعتمد اصطلاح مكتبة iztro الأكثر شيوعًا.</li>",
      "محتوى ثقافي وترفيهي."),
    "five-elements-guide": q("من النصوص الكلاسيكية", "能知衰旺之真机，其于三命之奥，思过半矣。",
      "«من أدرك الآلية الحقيقية للضعف والقوة، فنصف أسرار المصير بين يديه.»",
      "دي تيان سوِي (滴天髓)، بشرح ليو جي (أسرة مينغ)",
      "<li><b>《滴天髓》</b>: الكلاسيكي الذي جعل تحليل القوة والضعف قلب منهج تزي بينغ — وقراءتنا المبسطة خطوة أولى على طريقه.</li><li><b>《穷通宝鉴》</b>: مرجع «ضبط المناخ» حسب قمر الشهر (لم يُدمج في نموذجنا المبسط بعد).</li>",
      "محتوى ثقافي وترفيهي.")
  }
};
