/* Spanish language pack (chrome + tools + pages + articles) */
var C = require("./content-es");

function art(short, teaser, title, desc, html) { return { short: short, teaser: teaser, title: title, desc: desc, html: html }; }

var ARTICLES = {
  "what-is-bazi": art("¿Qué es el BaZi?", "Tallos, ramas, maestro del día y pilares de suerte: el mapa completo para principiantes.",
    "¿Qué es el BaZi? Guía de los Cuatro Pilares del Destino | BaziOracle",
    "Introducción clara al BaZi (Cuatro Pilares del Destino): los ocho caracteres, tallos celestes, ramas terrestres y cómo se lee una carta.",
    "<h1>¿Qué es el BaZi? Guía para principiantes</h1>" +
    "<p>El BaZi (八字, «ocho caracteres») es el sistema clásico chino de análisis del destino construido sobre tu momento de nacimiento. Escribe año, mes, día y hora como cuatro <em>pillares</em>, cada uno con un tallo celeste sobre una rama terrestre.</p>" +
    "<h2>Los diez tallos y las doce ramas</h2><p>Los diez tallos celestes recorren los cinco elementos en pares yang/yin: Jia y Yi son Madera, Bing y Ding son Fuego. Las doce ramas van de Zi (Rata) a Hai (Cerdo), cada una con su elemento y tallos ocultos.</p>" +
    "<h2>El maestro del día</h2><p>El tallo de tu pilar del día es el «tú» de la carta. La metodología Zi Ping pregunta: ¿qué tan fuerte es (apoyado por su elemento y el que lo alimenta)? Los elementos que fortalecen a un maestro débil —o temperan a uno fuerte— son los elementos favorables (喜用神).</p>" +
    "<h2>Los diez dioses y los pilares de suerte</h2><p>Cada tallo se relaciona con el maestro como uno de diez dioses: Amigo, Rival, Talento, Rebelde, Ganancia, Riqueza, Guerrero, Oficial, Místico y Erudito. Además, la carta asigna pilares de suerte de diez años (大运) que cambian el clima elemental de cada década.</p>" +
    "<h2>Pruébalo</h2><p>Calcula tu carta con corrección de hora solar en nuestra <a href='/es/'>calculadora BaZi gratis</a> y explora tus <a href='/es/five-elements/'>cinco elementos</a>.</p>" +
    '<p class="disclaimer">El BaZi es un arte interpretativo tradicional, presentado con fines culturales y de entretenimiento.</p>'),
  "true-solar-time": art("Hora solar verdadera", "La hora del reloj puede mover tu pilar de la hora: así se corrige.",
    "Hora Solar Verdadera: tu pilar de la hora podría estar mal | BaziOracle",
    "Cómo la longitud y la ecuación del tiempo desplazan el pilar de la hora del BaZi, y cómo nuestra calculadora lo corrige.",
    "<h1>Hora solar verdadera: por qué tu pilar de la hora podría estar mal</h1>" +
    "<p>La astrología clásica china nació en un mundo de relojes de sol: el mediodía era cuando el sol estaba más alto. Nuestros relojes son promedios políticos: China mantiene una sola hora desde Pekín hasta Kashgar, más de 60 grados de longitud.</p>" +
    "<h2>Dos correcciones</h2><p>Primero la <strong>longitud</strong>: el sol tarda cuatro minutos por grado, así que un nacimiento en Urumqi es casi dos horas «más temprano» en tiempo solar. Segundo, la <strong>ecuación del tiempo</strong>: la órbita inclinada de la Tierra desplaza el mediodía solar hasta unos 16 minutos al año.</p>" +
    "<h2>Por qué importa</h2><p>Las doce ramas de dos horas dividen el día solar exactamente en doce. Una corrección de 30-60 minutos suele cruzar el borde de una rama: cambia el pilar de la hora y a veces la fuerza de toda la carta.</p>" +
    "<p>Entra la longitud de tu ciudad (o solo tu zona horaria) y marca la casilla de hora solar verdadera en la <a href='/es/'>calculadora</a>: aplicamos ambas correcciones y mostramos los minutos ajustados.</p>" +
    '<p class="disclaimer">Con fines culturales y de entretenimiento. Ante la duda, el recuerdo familiar y el certificado de nacimiento valen más que cualquier fórmula.</p>'),
  "jiaobei-guide": art("Guía del jiaobei", "Los cuatro veredictos, el ritual de tres lanzamientos y el arte de preguntar.",
    "Jiaobei: cómo consultar los bloques de luna (Poe) | BaziOracle",
    "Guía completa del jiaobei o bloques de luna: historia, los cuatro veredictos, el ritual de tres lanzamientos y cómo formular la pregunta.",
    "<h1>Jiaobei: consultar los bloques de luna</h1>" +
    "<p>En cualquier templo de Fujian o Taiwán oirás un chasquido de madera sobre piedra: dos bloques en media luna lanzados al suelo, leídos según cómo caen. Es el <em>jiaobei</em> (筊杯), el oráculo sí/no más directo de la tradición china.</p>" +
    "<h2>Los cuatro veredictos</h2><ul><li><strong>Sagrado (圣筊)</strong> — un lado plano y uno curvo arriba: aprobado.</li><li><strong>Risa (笑筊)</strong> — ambos planos: la pregunta es confusa o el corazón no está quieto; reformula.</li><li><strong>Negativo (阴筊)</strong> — ambos curvos: no concedido; pospone o cambia de rumbo.</li><li><strong>De pie (立筊)</strong> — un bloque se queda de canto: rarísimo, gran advertencia.</li></ul>" +
    "<h2>El ritual de tres lanzamientos</h2><p>Una pregunta se completa con tres lanzamientos seguidos: tres sagrados es un sí pleno, dos un sí con esfuerzo, uno un quizás, ninguno un no. En <a href='/es/jiaobei/'>nuestros bloques online</a> contamos los tres por ti.</p>" +
    "<h2>Cómo preguntar</h2><p>Pregunta cosas concretas y en presente: «¿debo aceptar esta oferta hoy?» funciona; «¿seré rico?» solo gana una risa. Tras un sí, busca una respuesta más rica con los <a href='/es/kau-cim/'>palillos de la fortuna</a>.</p>" +
    '<p class="disclaimer">Con fines culturales y de entretenimiento.</p>'),
  "kau-cim-guide": art("Palillos de la fortuna", "El ritual, los cien signos y cómo confirmar con bloques.",
    "Kau Cim: los palillos de la fortuna de Guanyin | BaziOracle",
    "Cómo sacar y leer los palillos de Guanyin (kau cim): el ritual, los cien signos y la confirmación con bloques de luna.",
    "<h1>Kau Cim: los palillos de Guanyin</h1>" +
    "<p>El kau cim (求签) es el oráculo de los cien palillos de bambú de la tradición de Guanyin: quien pregunta agita el cilindro hasta que un palillo se levanta y cae. Cada palillo cita un episodio clásico y se gradúa como fortuna superior, media o inferior.</p>" +
    "<h2>El ritual</h2><ul><li>Di quién eres y qué preguntas: un asunto concreto.</li><li>Sostén el cilindro nivelado, con la mente asentada.</li><li>Inclínalo hasta que caiga exactamente uno.</li><li>Confirma con <a href='/es/jiaobei/'>bloques de luna</a>: veredicto sagrado acepta el signo.</li><li>Lee el poema y su interpretación.</li></ul>" +
    "<h2>Leer las notas</h2><p>Los signos superiores bendicen el empeño; los medios piden paciencia y método; los inferiores no son maldiciones sino correcciones de rumbo. Todos los cien signos están en nuestro <a href='/es/kau-cim/'>sessionador online</a>.</p>" +
    '<p class="disclaimer">Con fines culturales y de entretenimiento.</p>'),
  "ziwei-guide": art("Zi Wei Dou Shu", "Doce palacios, estrellas mayores y las cuatro transformaciones.",
    "Zi Wei Dou Shu: guía de la astrología de la estrella púrpura | BaziOracle",
    "Zi Wei Dou Shu explicado para principiantes: los doce palacios, las estrellas mayores, las cuatro transformaciones y cómo leer tu primera carta.",
    "<h1>Zi Wei Dou Shu para principiantes</h1>" +
    "<p>Si el BaZi es el mapa del tiempo de tus elementos, Zi Wei Dou Shu (紫微斗数) es el diagrama del castillo: tu vida repartida en doce palacios alrededor de un patio, cada uno guarnecido por estrellas simbólicas. Se atribuye al sabio taoísta Chen Tuan.</p>" +
    "<h2>Los doce palacios</h2><p>Cada sector gobierna un dominio: el Yo (temperamento), Hermanos, Cónyuge, Hijos, Riqueza, Salud, Viajes, Amigos, Carrera, Propiedad, Fortuna interior y Padres.</p>" +
    "<h2>Las estrellas</h2><p>Catorce estrellas mayores forman el esqueleto —el emperador Zi Wei, el estratega Tian Ji, el sol y la luna— junto a estrellas menores. Cuatro llevan transformaciones: Lu (florecer), Quan (poder), Ke (fama), Ji (obstrucción).</p>" +
    "<h2>Tu primera lectura</h2><p>Empieza por tres palacios: Yo (tu estilo), Carrera (cómo construyes) y Cónyuge (la asociación). Traza tu carta gratis en la <a href='/es/ziwei/'>calculadora Zi Wei</a>.</p>" +
    '<p class="disclaimer">Con fines culturales y de entretenimiento.</p>'),
  "five-elements-guide": art("Los cinco elementos", "Generación, control, fortaleza y elementos favorables: aplicados.",
    "Los cinco elementos en tu carta: Madera, Fuego, Tierra, Metal y Agua | BaziOracle",
    "Cómo los cinco elementos (Wu Xing) se generan y controlan, qué dice cada uno sobre el temperamento y cómo se eligen los elementos favorables.",
    "<h1>Los cinco elementos en tu carta</h1>" +
    "<p>El Wu Xing (五行) no son sustancias sino cinco verbos: crecer, encender, asentar, endurecer y fluir. Se alimentan en un ciclo de generación y se frenan en uno de control.</p>" +
    "<h2>Personalidades</h2><ul><li><strong>Madera</strong> — benevolente, ambiciosa, con principios.</li><li><strong>Fuego</strong> — apasionada, ceremoniosa, veloz.</li><li><strong>Tierra</strong> — fiable, inclusiva, el pilar de todos.</li><li><strong>Metal</strong> — decisiva, leal, amante de las reglas.</li><li><strong>Agua</strong> — lista, adaptable, profunda.</li></ul>" +
    "<h2>Fortaleza y elementos favorables</h2><p>Si el elemento del maestro del día y su madre escasean, la carta es «débil» y pide apoyo; si dominan, es «fuerte» y busca salidas: riqueza, oficial y expresión. Una carta equilibrada busca el elemento más raro para cerrar el circuito.</p>" +
    "<p>Calcula tu reparto en la <a href='/es/five-elements/'>calculadora de cinco elementos</a> o empieza por la <a href='/es/'>carta completa</a>.</p>" +
    '<p class="disclaimer">Con fines culturales y de entretenimiento.</p>')
};

module.exports = {
  citations: require('./citations.js')['es'],
  code: "es", prefix: "/es", htmlLang: "es", brand: "Oráculo Chino", crumbHome: "Inicio",
  nav: [["/es/", "BaZi"], ["/es/ziwei/", "Zi Wei"], ["/es/jiaobei/", "Bloques de Luna"], ["/es/kau-cim/", "Palillos"], ["/es/zodiac/", "Zodiaco"], ["/es/iching/", "I Ching"], ["/es/almanac/", "Almanaque"], ["/es/five-elements/", "5 Elementos"], ["/es/dreams/", "Sueños"], ["/es/learn/", "Guías"]],
  foot: {
    blurb: "Herramientas gratuitas de adivinación china: calculadora BaZi, cartas Zi Wei Dou Shu, bloques de luna, palillos de Guanyin, I Ching, compatibilidad del zodiaco, almanaque diario y diccionario de sueños.",
    toolsTitle: "Herramientas", learnTitle: "Aprender", learnLabel: "Guías y artículos", aboutLabel: "Acerca de", privacyLabel: "Privacidad",
    tools: [["/es/", "Calculadora BaZi"], ["/es/ziwei/", "Zi Wei Dou Shu"], ["/es/jiaobei/", "Bloques de Luna"], ["/es/kau-cim/", "Palillos de Guanyin"], ["/es/iching/", "I Ching"], ["/es/zodiac/", "Zodiaco"], ["/es/almanac/", "Almanaque"], ["/es/dreams/", "Sueños"]],
    legal: "Todo el contenido se ofrece con fines culturales y de entretenimiento; no constituye consejo sobre vida, salud ni finanzas. Tu destino lo escribes tú."
  },
  form: {
    calendar: "Calendario", solar: "Gregoriano", lunar: "Lunar chino", year: "Año de nacimiento", month: "Mes", day: "Día",
    hour: "Hora de nacimiento", minute: "Minuto", gender: "Género", male: "Masculino", female: "Femenino",
    tz: "Zona horaria", adv: "Avanzado: corrección de hora solar verdadera (recomendado)", lon: "Longitud del lugar de nacimiento (p. ej. Pekín 116.4)",
    trueSolar: "Activar hora solar verdadera", btn: "Calcular mi carta",
    privacy: "Todo el cálculo ocurre en tu navegador: tu fecha de nacimiento nunca sale de esta página."
  },
  tools: {
    bu: {
      els: { "木": "Madera", "火": "Fuego", "土": "Tierra", "金": "Metal", "水": "Agua" },
      gods: { 比肩: "Amigo", 劫财: "Rival", 食神: "Talento", 伤官: "Rebelde", 偏财: "Ganancia", 正财: "Riqueza", 七杀: "Guerrero", 正官: "Oficial", 偏印: "Místico", 正印: "Erudito", 日主: "Maestro del Día" },
      hourWord: "h", hourUnknown: "Hora de nacimiento desconocida",
      pillars: ["Año", "Mes", "Día", "Hora"],
      dayMaster: "Maestro del Día", strengthLab: "Fuerza",
      strength: { weak: "débil", balanced: "equilibrado", strong: "fuerte" },
      favorable: "Favorables", missing: "Ausentes", allFive: "Los cinco presentes",
      hidden: "Tallos ocultos", hideLab: "ocultos:",
      luck: "Pilares de suerte (ciclos de 10 años)", th: ["Pilar", "Edad", "Años"],
      corr: "Corrección de hora solar verdadera: {n} min.",
      unknownWarn: "⚠️ Hora desconocida: el pilar de la hora se calcula como Zi (23:00–00:59) y es solo orientativo.",
      yourFour: "Tus Cuatro Pilares", lunarWord: "lunar", signWord: "signo",
      fiveTitle: "Fuerza de los cinco elementos", elSays: "Lo que tu elemento dice de ti",
      strongestIs: "Tu elemento más fuerte es",
      missingNote: "Faltan:", presentNote: "Los cinco elementos están presentes: una carta bien circulada.",
      balanceNote: ": equilíbralo tradicionalmente con nombre, dirección o color.",
      discFull: "Cálculo con reglas tradicionales simplificadas, con fines culturales y de entretenimiento. Tu destino sigue en tus manos.",
      discEl: "Modelo simplificado, con fines culturales y de entretenimiento.",
      fiveTitlePg: "Tus cinco elementos",
      invalidDate: "Fecha no válida: revisa los datos (las fechas lunares deben existir de verdad).",
      personality: {
        "木": "Como un árbol que crece hacia arriba: benevolente, ambicioso y con principios; a veces terco.",
        "火": "Como una llama que salta: apasionado, expresivo y cortés; rápido para actuar.",
        "土": "Como la tierra ancha: fiable, digno de confianza e inclusivo; la fuerza más estable del equipo.",
        "金": "Como el metal que resuena: decidido, leal y franco; valora las reglas y la eficiencia.",
        "水": "Como el agua que fluye: listo, adaptable y profundo; la suavidad que vence."
      }
    },
    zw: {
      soul: "Alma", body: "Cuerpo", element: "Elemento", chart: "Carta Zi Wei Dou Shu",
      title: "Tu carta Zi Wei (Estrella Púrpura)",
      disc: "Zi Wei Dou Shu es un sistema profundo; esta carta muestra los doce palacios con estrellas mayores y menores, con fines culturales y de entretenimiento.",
      bodyPalace: " (Cuerpo)",
      ti: ["Zi 00:00–00:59", "Chou 01:00–02:59", "Yin 03:00–04:59", "Mao 05:00–06:59", "Chen 07:00–08:59", "Si 09:00–10:59", "Wu 11:00–12:59", "Wei 13:00–14:59", "Shen 15:00–16:59", "You 17:00–18:59", "Xu 19:00–20:59", "Hai 21:00–22:59", "Zi 23:00–23:59"],
      izLang: "en-US", showBrightness: false, cornerRoman: true,
      mut: { lu: "Lu", quan: "Quan", ke: "Ke", ji: "Ji", a: "Lu", b: "Quan", c: "Ke", d: "Ji" },
      queryYear: "Año a consultar", queryYearHint: "El año que se lee: define el palacio anual y la década en curso",
      decadal: "Década", yearly: "Año", xiaoxian: "Límite menor",
      ageRange: "Edades {a}–{b}", ageWord: "Edad {n}", nominalAge: "Edad nominal {n}",
      decTitle: "Fortuna decenal · Da Xian", yearTitle: "Fortuna anual · Liu Nian",
      decNote: "Cada década enciende un área de la vida durante diez años; su tallo celeste rige las cuatro transformaciones del decenio.",
      yearNote: "El palacio del año se superpone al de la década durante doce meses.",
      mutLab: "Cuatro transformaciones", decStars: "Estrellas decenales", yearStars: "Estrellas anuales",
      emptyPal: "Palacio vacío", borrowNote: "Sin estrellas mayores propias: se interpreta con las del palacio opuesto.",
      borrowed: "prestada", borrowFrom: "de {p}",
      nowDec: "Década actual", nowYear: "Año {y}", nowXx: "Límite menor",
      palaceLabel: "Palacio", stemLabel: "Tallo–rama",
      outOfRange: "El año {y} queda fuera del alcance de esta carta.",
      badYear: "Introduce un año entre 1900 y 2100.",
      legend: "Leyenda", legendCur: "década en curso", legendYear: "año {y}",
      legendXx: "límite menor", legendBorrow: "estrella prestada", legendEmpty: "palacio vacío",
      discDY: "Las lecturas decenales y anuales siguen el método tradicional de recorrido de palacios con reglas simplificadas; con fines culturales y de entretenimiento."
    },
    jb: {
      throw: "Lanzar los bloques", threeNote: "Tres lanzamientos completan una pregunta", throw3: "Lanzamiento %d de 3",
      sheng: "Sagrado — Sí", xiao: "Risa — Nada claro", yin: "Negativo — No",
      shengD: "Lo divino aprueba: prosigue con tu pregunta.",
      xiaoD: "La respuesta no está clara: calma tu mente y vuelve a preguntar.",
      yinD: "No concedido: pospone o cambia de rumbo.",
      finTitle: "Tres lanzamientos completos",
      fin: ["No concedido: replantéalo.", "Parcialmente concedido: sigue esforzándote.", "En gran parte concedido: el camino está abierto.", "¡Tres lanzamientos sagrados: muy auspicioso!"],
      restart: "Otra pregunta", copy: "Copiar resultado", copied: "Copiado ✓",
      qPh: "Tu pregunta (opcional, tenla en mente)",
      share: "Lancé los bloques de luna en BaziOracle preguntando «{q}»: {r}", none: "(sin pregunta)"
    },
    kc: {
      btn: "Agitar y sacar", meaning: "Significado", advice: "Consejo", full: "Interpretación completa",
      grades: { "上签": "Superior", "中签": "Media", "下签": "Inferior" }
    },
    zc: {
      a: "Tu signo", b: "Su signo", btn: "Comprobar", score: "Afinidad",
      same: { t: "Mismo signo", b: "Dos del mismo signo se reflejan: comprensión profunda con puntos ciegos compartidos. Favorable en general, con fricciones ocasionales." },
      six: { t: "Armonía Seis: pareja del cielo", b: "Es una de las parejas clásicas de Armonía Seis: temperamentos complementarios y química natural, excelente para el amor o la sociedad." },
      trio: { t: "Armonía Tres: misma corriente", b: "Comparten un trino de Armonía Tres: energías a la misma frecuencia, cada uno magnifica al otro." },
      clash: { t: "Choque: corrientes opuestas", b: "Los signos en choque generan fricción. Con límites claros y papeles repartidos, la oposición se vuelve fuerza complementaria." },
      harm: { t: "Daño: desgaste silencioso", b: "Las parejas que se dañan se desgastan en detalles: la antídoto es más honestidad y comunicación." },
      neutral: { t: "Neutral: depende de ti", b: "Sin interacción mayor en términos clásicos: la pareja es lo que ambos hagan de ella." }
    },
    ic: {
      btn: "Lanzar las monedas", tossing: "Lanzando las monedas… sostén tu pregunta en la mente",
      judgment: "Oráculo", changing: "Líneas mutables", to: "se transforma en",
      noChanging: "Sin líneas mutables: lee el hexagrama tal cual.",
      readFull: "Leer interpretación completa",
      hex: "Hexagrama {n} · {name} ({py})"
    },
    al: {
      lunar: "Lunar", dayPillar: "Pilar del día", month: "Mes", clash: "Choque", clashes: "Choca con",
      shaDir: "dirección Sha", ausp: "FAVORABLE PARA", avoid: "EVITAR", lucky: "Estrellas de suerte", malefic: "Maléficas",
      note: "Guía tradicional de almanaque, con fines culturales.",
      weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      pick: "Elige una fecha", btn: "Leer el almanaque",
      shaLocal: { "南": "Sur", "北": "Norte", "东": "Este", "西": "Oeste" }
    },
    dr: {
      searchPh: "Busca una palabra: serpiente, agua…", none: "No hay sueños que coincidan.",
      cats: { animals: "Animales", people: "Personas", nature: "Naturaleza", places: "Lugares", actions: "Acciones", objects: "Objetos" }
    }
  },
  pages: {
    home: {
      title: "Calculadora BaZi gratis — Cuatro Pilares del Destino y adivinación china | BaziOracle",
      desc: "Calculadora BaZi online gratis con corrección de hora solar verdadera. Cuatro Pilares, cinco elementos, pilares de suerte, más Zi Wei Dou Shu, bloques de luna y palillos de la fortuna.",
      kicker: "Gratis · Privado · Bilingüe", h1: "Calculadora BaZi gratis — Cuatro Pilares del Destino",
      sub: "Introduce tu fecha y hora de nacimiento para revelar tus Cuatro Pilares, tu equilibrio de cinco elementos y tus pilares de suerte; luego explora Zi Wei Dou Shu, los bloques de luna y más.",
      toolsKicker: "Ocho herramientas, un oráculo", toolsTitle: "Explora el oráculo chino completo",
      tools: [
        ["🀄", "Zi Wei Dou Shu", "La carta de la Estrella Púrpura en los doce palacios: carrera, amor, riqueza y salud.", "/ziwei/"],
        ["🌙", "Bloques de Luna (Jiaobei)", "Haz una pregunta y lanza los bloques sagrados, como en los templos de Minnan.", "/jiaobei/"],
        ["🥢", "Palillos de Guanyin", "Agita el vaso y saca uno de los cien signos clásicos con interpretación completa.", "/kau-cim/"],
        ["☯️", "I Ching con monedas", "Lanza tres monedas seis veces y recibe uno de los 64 hexagramas.", "/iching/"],
        ["🐀", "Compatibilidad del zodiaco", "Comprueba cualquier pareja: Armonía Seis, Armonía Tres o choque.", "/zodiac/"],
        ["📜", "Almanaque diario", "Horas auspiciosas y qué hacer y evitar según el Tong Shu tradicional.", "/almanac/"],
        ["🌬️", "Lectura de cinco elementos", "¿Qué elemento gobierna tu carta: Madera, Fuego, Tierra, Metal o Agua?", "/five-elements/"],
        ["💭", "Diccionario de sueños", "Qué dice la tradición de Zhou Gong sobre el sueño de anoche.", "/dreams/"]
      ],
      whatKicker: "La tradición", whatTitle: "¿Qué es el BaZi?",
      what1: "El BaZi (八字) escribe tu momento de nacimiento como cuatro pilares —año, mes, día y hora— cada uno con un tallo celeste sobre una rama terrestre: ocho caracteres en total.",
      what2: "La metodología Zi Ping sopesa los cinco elementos para hallar la fuerza de tu maestro del día, sus elementos favorables y los pilares de suerte de cada década. Guía completa: <a href='/es/learn/what-is-bazi/'>¿qué es el BaZi?</a>",
      faqKicker: "Preguntas", faqTitle: "Preguntas frecuentes",
      faq: [
        ["¿Qué es el BaZi?", "El BaZi registra el tallo celeste y la rama terrestre de tu año, mes, día y hora de nacimiento: ocho caracteres en cuatro pilares. La tradición Zi Ping lee la fuerza del maestro del día frente a los cinco elementos."],
        ["¿Mis datos están seguros?", "Sí. La conversión de calendario y el cálculo corren por completo en tu navegador con JavaScript. Tu fecha de nacimiento nunca se envía a ningún servidor."],
        ["¿Y si no sé mi hora de nacimiento?", "Puedes calcular igual: el pilar de la hora usará la hora Zi y la lectura será orientativa. Pregunta a tu familia o revisa tu certificado de nacimiento."],
        ["¿Por qué importa la hora solar verdadera?", "Si naciste lejos del meridiano central de tu zona horaria, la hora solar local puede diferir 30-60 minutos: suficiente para cambiar el pilar de la hora."],
        ["¿Es exacta la adivinación?", "Tómala como un espejo cultural para reflexionar, no como un veredicto. La tradición misma lo dice: el carácter forja el destino."]
      ]
    },
    five: {
      title: "Calculadora de cinco elementos — equilibrio y elementos favorables | BaziOracle",
      desc: "Introduce tu fecha de nacimiento y descubre el equilibrio de Madera, Fuego, Tierra, Metal y Agua en tu carta, los elementos ausentes y los favorables.",
      kicker: "Madera · Fuego · Tierra · Metal · Agua", h1: "Calculadora de los cinco elementos",
      sub: "Mira cómo se reparten los cinco elementos en tu carta: el más fuerte, lo que falta y lo que tu carta está pidiendo.",
      crumb: "5 Elementos", tableKicker: "Las cinco fases", tableTitle: "Personalidad de los cinco elementos",
      th: ["Elemento", "Imagen", "Temperamento"],
      imgRows: [["Madera 木", "Un árbol que crece", "Benevolente, ambicioso, con principios"], ["Fuego 火", "Llama que salta", "Apasionado, expresivo, veloz"], ["Tierra 土", "La tierra que todo la sostiene", "Fiable, inclusivo, estable"], ["Metal 金", "Metal que resuena", "Decidido, leal, eficiente"], ["Agua 水", "Agua que fluye", "Listo, adaptable, profundo"]],
      outro: "¿Quieres los cuatro pilares completos? Vuelve a la <a href='{bazi}'>calculadora BaZi</a> o lee la <a href='{learn}'>guía de los cinco elementos</a>."
    },
    ziwei: {
      title: "Carta Zi Wei Dou Shu gratis — astrología de la Estrella Púrpura | BaziOracle",
      desc: "Carta Zi Wei Dou Shu online gratis: doce palacios con estrellas mayores y menores, transformaciones, alma y cuerpo.",
      kicker: "紫微斗數 · Estrella Púrpura", h1: "Carta Zi Wei Dou Shu gratis",
      sub: "Introduce tus datos de nacimiento para trazar los doce palacios: estrellas mayores, menores, transformaciones, alma y cuerpo.",
      crumb: "Zi Wei", date: "Fecha de nacimiento (gregoriana)", hour: "Hora de nacimiento", gender: "Género", btn: "Trazar mi carta",
      palKicker: "Doce palacios", palTitle: "Qué gobierna cada palacio", palTh: ["Palacio", "Gobierna"],
      palaces: [["Yo (Ming)", "Temperamento y destino propio"], ["Hermanos", "Hermanos y cercanos"], ["Cónyuge", "Matrimonio y pareja"], ["Hijos", "Hijos y discípulos"], ["Riqueza", "Dinero y recursos"], ["Salud", "Cuerpo y salud"], ["Viajes", "Viajes y cambios"], ["Amigos", "Amistades y socios"], ["Carrera", "Profesión y logros"], ["Propiedad", "Hogar y bienes"], ["Fortuna", "Vida interior y suerte"], ["Padres", "Padres y protectores"]],
      intro: "Zi Wei Dou Shu, atribuido al sabio Chen Tuan, reparte más de un centenar de estrellas simbólicas por doce palacios y lee la vida a través de sus combinaciones y las cuatro transformaciones (Lu, Quan, Ke, Ji). Empieza por las estrellas mayores de tus palacios <b>Yo</b> y <b>Carrera</b>. Guía: <a href='/es/learn/ziwei-guide/'>introducción al Zi Wei Dou Shu</a>."
    },
    jiaobei: {
      title: "Jiaobei online — adivinación con bloques de luna (Poe) | BaziOracle",
      desc: "Lanza los bloques de luna online gratis: pregunta, lanza tres veces y lee el veredicto sagrado, de risa o negativo.",
      kicker: "擲筊 · Bloques de Luna", h1: "Bloques de luna online — pregunta y lanza",
      sub: "El oráculo cotidiano de los templos de Minnan y Taiwán: sostén los bloques en media luna, pregunta en silencio y lanza.",
      homeTitle: "Lanza los bloques aquí mismo", homeSub: "El oráculo más directo de la tradición: piensa una pregunta concreta y lanza tres veces. Un lado plano y uno curvo es un sí sagrado.", rulesLink: "Reglas completas y el ritual de tres lanzamientos", crumb: "Bloques de Luna", rulesKicker: "Las reglas", rulesTitle: "Los cuatro veredictos", rulesTh: ["Veredicto", "Patrón", "Significado"],
      rules: [["Sagrado (圣筊)", "Un plano, uno curvo", "Aprobado: prosigue", ""], ["Risa (笑筊)", "Ambos planos arriba", "Pregunta confusa o corazón inquieto: reformula", ""], ["Negativo (阴筊)", "Ambos curvos arriba", "No concedido: pospone o cambia", ""], ["De pie (立筊)", "Un bloque de canto", "Rarísimo: gran advertencia", ""]],
      howTitle: "Cómo preguntar bien",
      how: "Pregunta una sola cosa concreta y en presente: no «cómo será mi año», sino «¿debo aceptar esta oferta hoy?». Tres lanzamientos seguidos completan la pregunta: tres sagrados es sí, dos es adelante con esfuerzo, uno es con esfuerzo, ninguno es no.",
      originTitle: "De dónde vienen los bloques",
      origin: "El jiaobei son dos bloques en media luna: el lado plano es yang, el curvo es yin. La práctica se documenta desde la dinastía Tang y viajó con la emigración de Minnan a Taiwán y el Sudeste Asiático. En inglés se conocen como jiaobei, poe o moon blocks."
    },
    kaucim: {
      title: "Kau Cim online — los cien palillos de Guanyin interpretados | BaziOracle",
      desc: "Saca un palillo de la fortuna de Guanyin online: los cien signos con poemas, grados e interpretaciones completas.",
      kicker: "觀音靈簽 · 100 signos", h1: "Kau Cim — saca un palillo de Guanyin",
      sub: "Agita el vaso y saca uno de los cien signos clásicos, cada uno con interpretación completa.",
      crumb: "Palillos", aboutKicker: "La tradición", aboutTitle: "Sobre el kau cim de Guanyin",
      about1: "El kau cim reúne cien palillos numerados que se sacan en los templos de Guanyin desde la dinastía Song del Sur. Quien pregunta se nombra y formula su asunto, agita el vaso de bambú hasta que un palillo sube y confirma con bloques de luna.",
      about2: "Los cien signos están aquí con sus poemas e interpretaciones, junto a nuestros <a href='/es/jiaobei/'>bloques de luna online</a>. Saca con corazón sincero; lee con mente abierta.",
      allTitle: "Los cien signos"
    },
    zodiac: {
      title: "Compatibilidad del zodiaco chino y guía de los 12 signos | BaziOracle",
      desc: "Comprueba la compatibilidad del zodiaco chino de cualquier pareja — Armonía Seis, Armonía Tres o choque — más guías de los doce signos.",
      kicker: "十二生肖 · Zodiaco chino", h1: "Compatibilidad y los doce signos",
      sub: "Comprueba cualquier pareja o entra en tu signo: personalidad, colores de la suerte y parejas ideales.",
      crumb: "Zodiaco", compatKicker: "Compatibilidad", compatTitle: "Comprobador de compatibilidad",
      rulesKicker: "Cómo funciona", rulesTitle: "Armonía Seis, Armonía Tres y choque",
      rules: "La tradición lee las ramas terrestres: las parejas de Armonía Seis se ligan en secreto (Rata-Buey, Tigre-Cerdo…), los trinos de Armonía Tres comparten una misma corriente, y las seis parejas en choque se sientan en diagonal opuesta en la rueda. Un choque no es una maldición: es fricción que pide estructura y espacio."
    },
    almanac: {
      title: "Almanaque chino diario — días auspiciosos, Yi Ji y choques | BaziOracle",
      desc: "Almanaque chino (Tong Shu) diario gratis: qué hacer y evitar cada día, signos en choque, direcciones y estrellas.",
      kicker: "通書 · Almanaque Tong Shu", h1: "Almanaque chino diario",
      sub: "Actividades auspiciosas y que evitar, direcciones de choque, estrellas de suerte y el día lunar: para elegir fechas.",
      crumb: "Almanaque", howKicker: "Cómo leerlo", howTitle: "Cómo usar un almanaque",
      how1: "El almanaque gira en torno al ganzhi del día y lista las actividades clásicas —casarse, viajar, abrir un negocio— como favorables o no. La nota de «choque» nombra al signo animal opuesto ese día y la dirección de la energía sha.",
      how2: "Para elegir fecha de boda o inauguración: busca primero la actividad correcta y comprueba que ninguna persona clave esté en choque. Para el ritmo largo de tu vida, traza tus pilares de suerte con la <a href='/es/'>calculadora BaZi</a>."
    },
    iching: {
      title: "I Ching online — lanza las monedas, los 64 hexagramas | BaziOracle",
      desc: "Lanza el I Ching online: tres monedas, seis tiros, líneas mutables y hexagrama transformado, con los 64 oráculos interpretados.",
      kicker: "周易 · I Ching", h1: "I Ching online — lanza las monedas",
      sub: "Sostén tu pregunta, lanza tres monedas seis veces y recibe uno de los sesenta y cuatro hexagramas.",
      crumb: "I Ching", stage: "Pulsa el botón para comenzar",
      methodKicker: "El método", methodTitle: "Cómo se lanzan las monedas",
      method: "El método clásico usa tres monedas: la cara inscrita vale 2 (yin), el reverso 3 (yang); su suma da 6, 7, 8 o 9 — el seis y el nueve son líneas «viejas» que cambian. Seis tiros construyen el hexagrama de abajo arriba; las líneas mutables lo transforman en un segundo hexagrama, la forma de lo que viene.",
      allTitle: "Los 64 hexagramas"
    },
    dreams: {
      title: "Diccionario de sueños — interpretación china online | BaziOracle",
      desc: "Diccionario de sueños de Zhou Gong online: busca el significado tradicional de serpientes, agua, dientes y más.",
      kicker: "周公解夢 · Zhou Gong", h1: "Diccionario de sueños chino",
      sub: "Serpientes, dientes que caen, persecuciones, vuelo: busca lo que dice la tradición de Zhou Gong sobre tu sueño.",
      crumb: "Sueños", howKicker: "Leer sueños", howTitle: "Cómo interpretar un sueño",
      how: "El diccionario de Zhou Gong, el sistema popular más extendido de China, lee los sueños mediante símbolos y juegos de palabras. La regla de oro: la misma imagen significa cosas distintas según tu estado y tu temporada de vida. Los sueños son material para reflexionar sobre ti."
    },
    learn: {
      title: "Guías de adivinación china — BaZi, Zi Wei, I Ching | BaziOracle",
      desc: "Guías gratuitas para principiantes de BaZi, cinco elementos, Zi Wei Dou Shu, bloques de luna y palillos de Guanyin.",
      kicker: "Aprende", h1: "Guías: del primer paso a la primera lectura",
      sub: "Seis guías esenciales que explican cómo funcionan de verdad el BaZi, los cinco elementos, el Zi Wei Dou Shu y más.", crumb: "Guías"
    },
    about: {
      title: "Acerca de BaziOracle | BaziOracle", desc: "Sobre BaziOracle: herramientas gratuitas de adivinación china, bilingües y con privacidad primero.", crumb: "Acerca de",
      html: "<h1>Acerca de BaziOracle</h1><p>BaziOracle es un hogar gratuito y multilingüe de las tradiciones adivinatorias chinas —cartas BaZi, Zi Wei Dou Shu, bloques de luna, palillos de Guanyin, I Ching, zodiaco, almanaque y sueños— con una interfaz moderna y respeto genuino por las fuentes. Todos los cálculos corren en tu navegador; tus datos nunca salen de tu dispositivo.</p><h2>Nuestros principios</h2><ul><li>Acceso libre y gratuito, sin muros de pago.</li><li>Herramientas transparentes: los métodos están documentados.</li><li>Respeto por la tradición: signos, oráculos y veredictos siguen los textos clásicos.</li><li>Encuadre honesto: la adivinación es un espejo cultural, no un veredicto.</li></ul>"
    },
    privacy: {
      title: "Política de privacidad | BaziOracle", desc: "Política de privacidad de BaziOracle: todos los cálculos son locales; los datos nunca se suben.", crumb: "Privacidad",
      html: "<h1>Política de privacidad</h1><p>Las herramientas principales de este sitio (calculadora BaZi, cinco elementos, carta Zi Wei, bloques de luna, palillos, I Ching, almanaque) funcionan por completo en tu navegador con JavaScript. Los datos de nacimiento que introduzcas <b>nunca se suben a nuestros servidores</b> ni se comparten con terceros.</p><h2>Analítica y publicidad</h2><p>Este sitio puede usar Google Analytics y Google AdSense. Los socios publicitarios pueden usar cookies para personalizar anuncios; puedes gestionarlo en la configuración de anuncios de Google.</p><h2>Almacenamiento local</h2><p>Algunas herramientas pueden guardar tus últimas entradas en el almacenamiento local del navegador por comodidad; borrar los datos del sitio las elimina.</p>"
    }
  },
  articles: ARTICLES,
  zodiac: C.ZOD,
  hex: C.HEX,
  signs: C.SIGNS,
  dreams: C.DREAMS,
  animalYearsTitle: "Años de nacimiento",
  animalYearsNote: "Rama {b}, regenta las horas {h}. Si naciste en enero o febrero, confirma tu signo con un <a href='{bazi}'>cálculo BaZi completo</a>: el año lunar chino se mueve.",
  animalCareerTitle: "Carrera y estilo de trabajo", animalMatchTitle: "Mejores y peores parejas",
  animalBest: "Armonías (mejor pareja):", animalWorst: "Choques (requieren trabajo):", animalCheck: "Comprobar una pareja",
  animalLuckyTitle: "Perfil de la suerte", animalNumbers: "Números de la suerte:", animalColors: "Colores:",
  animalBeyondTitle: "Más allá del zodiaco", animalBeyond: "Tu animal es solo la rama del año: una porción de la carta. Ve tus cuatro pilares completos con la <a href='{bazi}'>calculadora BaZi</a> o tus palacios de estrellas con <a href='{ziwei}'>Zi Wei Dou Shu</a>.",
  hexH1: "Hexagrama {n} — {name} ({py})", hexPure: "(hexagrama puro)", hexAbove: "Arriba:", hexBelow: "Abajo:",
  hexJudgmentTitle: "El oráculo (texto clásico)", hexDisc: "Los juicios proceden del Zhouyi (dominio público); las lecturas modernas son de BaziOracle, con fines culturales y de entretenimiento.",
  hexTitle: "Hexagrama {n} del I Ching — {name} ({py}) | BaziOracle", hexAll: "Los 64",
  signH1: "Palillo n.º {n} de Guanyin — {title}", signPoemTitle: "El poema", signMeaningTitle: "Interpretación",
  signTitle: "Palillo {n} de Guanyin — {title} ({grade}) | BaziOracle", signAgain: "Sacar otro", signDisc: "Poemas e interpretaciones siguen el texto tradicional; con fines culturales y de entretenimiento.", signWord: "Signo",
  p404: "Página no encontrada", p404Sub: "Hasta el I Ching tiene un hexagrama de Antes de la Culminación. Vuelve y lanza de nuevo:", p404Btn: "Inicio"
};
