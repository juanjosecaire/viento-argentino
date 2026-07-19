(function () {
    'use strict';

    var STORAGE_KEY = 'viento-argentino-lang';
    var DEFAULT_LANG = 'es';
    var ASYNC_LOCALES = {
        fr: 'js/locales/fr.json',
        de: 'js/locales/de.json',
        it: 'js/locales/it.json',
        no: 'js/locales/no.json'
    };

    var strings = {
        es: {
            'common.brand': 'Viento Argentino',
            'common.nav.home': 'Inicio',
            'common.nav.hub': 'Patagonia Green Ammonia Hub',
            'common.nav.camino': 'Se hace camino al andar',
            'common.nav.project': 'Proyecto',
            'common.nav.language': 'Idioma',
            'common.backTitle': 'Volver atrás',
            'common.lang.es': 'Español',
            'common.lang.en': 'English',

            'index.meta.title': 'Viento Argentino | Potencial eólico en la Patagonia',
            'index.meta.description': 'Evaluación del recurso eólico en la Patagonia argentina: 9.600 TWh anuales, equivalencia con petróleo, comparación con Vaca Muerta, el PBI y la energía nuclear mundial.',
            'index.hero.title': 'Potencial del viento en la Patagonia',
            'index.hero.lead': 'Evaluación del recurso eólico patagónico y su equivalencia económica en dólares frente a combustibles fósiles, Vaca Muerta, el PBI y la energía nuclear mundial.',
            'index.hero.btnSummary': 'Ver resumen del estudio',
            'index.hero.btnPdf': 'Leer documento (PDF)',
            'index.metric1.desc': 'potencial eólico anual estimado en la Patagonia argentina.',
            'index.metric2.desc': 'valor económico equivalente en petróleo (Brent ~67 USD/barril).',
            'index.metric3.desc': 'el consumo eléctrico anual total de Argentina (~140 TWh).',
            'index.acc1.title': 'Potencial del viento en la Patagonia Argentina',
            'index.acc1.p1': 'Según estudios citados en el análisis, el potencial eólico total anual de la Patagonia argentina se estima en aproximadamente <strong>9.600 TWh</strong> de electricidad generable. El cálculo considera entre 4.100 y 5.200 horas de carga plena al año y velocidades medias del viento superiores a 9 m/s.',
            'index.acc1.p2': 'El recurso se concentra principalmente en Chubut, Santa Cruz y Río Negro, donde el viento es uno de los mejores del mundo. A escala nacional, ese potencial teórico equivale a unas <strong>68 veces</strong> el consumo eléctrico anual de Argentina, cercano a 140 TWh.',
            'index.acc1.p3': 'El objetivo del análisis es dimensionar ese recurso no solo en energía, sino también en términos económicos: cuánto petróleo equivalente representaría y qué significa en dólares frente a otras referencias argentinas e internacionales.',
            'index.acc2.title': 'Equivalencia con petróleo',
            'index.acc2.p1': 'Para comparar con combustibles fósiles, el análisis toma el petróleo crudo como referencia. Supone que generar 9.600 TWh en plantas térmicas requeriría convertir energía térmica en electricidad con una eficiencia del 40 % (típica de plantas convencionales o de ciclo combinado).',
            'index.acc2.li1': '1 TWh de electricidad ≈ 2,5 TWh de energía térmica.',
            'index.acc2.li2': '1 TWh térmico ≈ 588.235 barriles de petróleo (5,8 millones de BTU por barril).',
            'index.acc2.li3': '1 TWh de electricidad ≈ 1.470.588 barriles de petróleo.',
            'index.acc2.li4': 'Para 9.600 TWh: ≈ <strong>14.117.640.000 barriles</strong> de petróleo equivalente.',
            'index.acc2.p2': 'Con Brent a unos 67 USD por barril (dato del estudio), el valor total aproximado es de <strong>945.000 millones de USD</strong>: el petróleo que habría que importar o producir para igualar esa electricidad con fuentes fósiles.',
            'index.acc3.title': 'Comparación con Vaca Muerta',
            'index.acc3.p1': 'Hacia 2028 se proyecta que Vaca Muerta supere el millón de barriles diarios de petróleo crudo, es decir unos 365 millones de barriles anuales. Si se comparan los 14.117 millones de barriles equivalentes al potencial eólico patagónico con esa producción anual de Vaca Muerta, el cociente es de aproximadamente <strong>39 veces</strong> la producción anual de Vaca Muerta en términos energéticos equivalentes.',
            'index.acc3.p2': 'La comparación no implica que todo el viento se convierta de inmediato en electricidad exportable, pero sí muestra la escala extraordinaria del recurso frente al principal polo hidrocarburífero argentino.',
            'index.acc4.title': 'Comparación con el PBI',
            'index.acc4.p1': 'El análisis contrasta los 945.000 millones de USD del potencial eléctrico teórico con un PBI nominal proyectado de Argentina de unos 746.840 millones de USD. La división da un factor de <strong>1,26</strong>, es decir un PBI completo más un 26 % adicional.',
            'index.acc4.p2': 'Expresado de otro modo: el valor teórico anual del viento patagónico, convertido a equivalencia petrolera, superaría el tamaño del PBI argentino en esa proyección.',
            'index.acc5.title': 'Un día de viento en la Patagonia',
            'index.acc5.p1': 'Si se reparte el valor anual de 945.000 millones de USD entre 365 días, se obtiene aproximadamente <strong>2.589 millones de USD por día</strong>. En otras palabras, eso representaría lo que produciría un día de viento en la Patagonia, según las cifras del estudio.',
            'index.acc6.title': 'Comparación con energía nuclear',
            'index.acc6.p1': 'La flota mundial de unos 440 reactores nucleares genera entre 2.600 y 2.700 TWh al año. El potencial patagónico teórico equivaldría a unas <strong>3,5 a 4 veces</strong> la producción nuclear mundial actual, o más de mil grandes reactores operando a plena carga.',
            'index.acc6.p2': 'En síntesis: el recurso eólico patagónico es enorme a escala global, pero su desarrollo pleno exige resolver transmisión, almacenamiento y la relación entre demanda local y exportación.',
            'index.footer.btnPdf': 'Documento completo (PDF)',
            'index.footer.btnHub': 'Programa Patagonia Green Ammonia Hub',
            'index.footer.text': 'Viento Argentino — Potencial eólico y riqueza energética argentina',

            'hub.meta.title': 'Patagonia Green Ammonia Hub | Viento Argentino',
            'hub.meta.description': 'Propuesta para transformar el viento patagónico en hidrógeno verde, amoníaco verde y fertilizantes ecológicos. Hub industrial, marco RIGI e inversión nacional en la Patagonia.',
            'hub.hero.title': 'Programa Patagonia Green Ammonia Hub',
            'hub.hero.lead': 'Una propuesta para transformar el viento patagónico en energía, hidrógeno verde, amoníaco verde y fertilizantes ecológicos competitivos para el mundo.',
            'hub.hero.btnSummary': 'Ver resumen del proyecto',
            'hub.hero.btnPdf': 'Leer documento (PDF)',
            'hub.metric1.desc': 'del potencial eólico patagónico estaría actualmente aprovechado, según el planteo del proyecto.',
            'hub.metric2.desc': 'de nueva capacidad eólica propuesta para una primera escala industrial del hub.',
            'hub.metric3.desc': 'de estabilidad fiscal y regulatoria posible bajo el régimen RIGI.',
            'hub.acc1.title': 'Viento: la mayor riqueza argentina',
            'hub.acc1.p1': 'Para los especialistas en energía, el viento en la región Patagónica es uno de los mejores del mundo para producir energía eólica. Tiene promedios de velocidad muy superiores a la media mundial y una persistencia que puede superar el 50 % o 60 %.',
            'hub.acc1.p2': 'Además, la Patagonia cuenta con una disponibilidad de espacio prácticamente ilimitada para instalar parques eólicos, con menor oposición territorial que en regiones densamente pobladas como Europa. Esta combinación de viento, tierra y salida atlántica puede convertirse en una ventaja estratégica para Argentina.',
            'hub.acc1.p3': 'Esta web propone un plan para radicar industrias que quieran sustituir energías fósiles por energía eólica patagónica. La primera tarea es dimensionar la riqueza potencial del viento si se lo transforma en electricidad, hidrógeno verde, amoníaco verde y fertilizantes ecológicos.',
            'hub.acc2.title': 'Patagonia Green Ammonia Hub',
            'hub.acc2.p1': 'El proyecto plantea crear un hub industrial para producir amoníaco verde a gran escala. El proceso parte de energía eólica, que alimenta electrolizadores para producir hidrógeno verde. Luego ese hidrógeno se combina con nitrógeno del aire para obtener amoníaco, base de fertilizantes ecológicos y posible combustible marítimo del futuro.',
            'hub.acc2.li1': 'Producción integrada: parque eólico, electrólisis, síntesis de amoníaco y terminal de exportación.',
            'hub.acc2.li2': 'Escala objetivo: entre 1 y 5 millones de toneladas anuales de amoníaco verde en etapas maduras.',
            'hub.acc2.li3': 'Mercados posibles: Europa y Asia, donde crece la demanda de productos bajos en carbono.',
            'hub.acc2.li4': 'Ventaja ambiental: reducción casi total de emisiones frente al amoníaco gris producido con gas fósil.',
            'hub.acc3.title': 'Por qué la Patagonia',
            'hub.acc3.p1': 'La Patagonia reúne condiciones difíciles de replicar: vientos sostenidos, grandes superficies disponibles, acceso al Atlántico y provincias con necesidad de desarrollo industrial. Estas características permiten imaginar complejos exportadores ubicados cerca de los recursos naturales y de los puertos.',
            'hub.acc3.li1': 'Santa Cruz, Chubut, Río Negro y Tierra del Fuego aparecen como zonas prioritarias.',
            'hub.acc3.li2': 'Los puertos de Puerto Deseado, Comodoro Rivadavia, San Julián o Punta Colorada podrían ser nodos logísticos.',
            'hub.acc3.li3': 'La desalinización de agua de mar permitiría producir hidrógeno sin competir con agua dulce continental.',
            'hub.acc3.li4': 'La infraestructura común puede desarrollarse con esquemas público-privados.',
            'hub.acc4.title': 'RIGI e incentivos para invertir',
            'hub.acc4.p1': 'El proyecto propone usar el RIGI como herramienta central para atraer inversión directa extranjera y capital nacional. El régimen ofrece estabilidad fiscal y regulatoria, beneficios impositivos, libre disponibilidad de divisas y reglas de largo plazo para proyectos de gran escala.',
            'hub.acc4.li1': 'Declarar al hub de interés nacional estratégico.',
            'hub.acc4.li2': 'Crear una ventanilla única para aprobar proyectos integrados con velocidad.',
            'hub.acc4.li3': 'Invitar a las provincias patagónicas a sumar incentivos locales.',
            'hub.acc4.li4': 'Promocionar internacionalmente la fórmula: viento patagónico más RIGI igual a fertilizantes verdes competitivos.',
            'hub.acc5.title': 'Dólares del colchón y fondo de inversión',
            'hub.acc5.p1': 'Una parte importante del proyecto consiste en canalizar ahorros argentinos en dólares hacia inversión productiva. Para eso se propone crear un fondo fiduciario o vehículo financiero que permita participar con montos mucho menores que los requeridos para un gran proyecto RIGI individual.',
            'hub.acc5.li1': 'Fondo Patagonia Green Ammonia con suscripciones en dólares.',
            'hub.acc5.li2': 'Participación de pequeños y medianos inversores nacionales.',
            'hub.acc5.li3': 'Beneficios fiscales si el capital permanece invertido varios años.',
            'hub.acc5.li4': 'Transformación de dólares ociosos en empleo, exportaciones e infraestructura.',
            'hub.acc6.title': 'Comparación con Vaca Muerta',
            'hub.acc6.p1': 'El análisis compara este hub con Vaca Muerta porque ambos son proyectos patagónicos de gran escala, orientados a generar exportaciones, inversión y divisas. La diferencia central es que Vaca Muerta se basa en hidrocarburos, mientras que el Green Ammonia Hub apunta a una cadena industrial net-zero.',
            'hub.acc6.li1': 'Ambos necesitan estabilidad regulatoria, infraestructura y participación provincial.',
            'hub.acc6.li2': 'Vaca Muerta ya demostró que los grandes proyectos pueden atraer capital si hay reglas claras.',
            'hub.acc6.li3': 'El hub verde podría captar financiamiento climático internacional.',
            'hub.acc6.li4': 'Un proyecto exitoso podría mejorar la percepción de riesgo país al generar divisas genuinas.',
            'hub.acc7.title': 'Tecnología: electrólisis capilar',
            'hub.acc7.p1': 'El análisis destaca la electrólisis capilar como una innovación capaz de reducir el consumo eléctrico para producir hidrógeno verde. Esta tecnología evita pérdidas asociadas a burbujas en los electrodos y podría bajar el costo del hidrógeno en regiones con energía renovable muy barata, como la Patagonia.',
            'hub.acc7.li1': 'Consumo estimado cercano a 40-41,5 kWh por kilo de hidrógeno.',
            'hub.acc7.li2': 'Mejora potencial de 15 % a 20 % frente a tecnologías comerciales tradicionales.',
            'hub.acc7.li3': 'Mayor competitividad del amoníaco verde frente al amoníaco gris.',
            'hub.acc7.li4': 'Más atractivo para inversores, compradores internacionales y financiamiento verde.',
            'hub.acc8.title': 'Beneficios esperados',
            'hub.acc8.p1': 'Si Argentina logra ejecutar esta estrategia con foco y velocidad, la Patagonia podría convertirse en un polo exportador de fertilizantes ecológicos y derivados del hidrógeno verde. El beneficio no sería solamente ambiental, sino también industrial, fiscal, financiero y geopolítico.',
            'hub.acc8.li1': 'Exportaciones por miles de millones de dólares anuales.',
            'hub.acc8.li2': 'Creación de empleo calificado y desarrollo regional.',
            'hub.acc8.li3': 'Mayor infraestructura portuaria, energética y logística.',
            'hub.acc8.li4': 'Menor dependencia de combustibles fósiles y fertilizantes importados.',
            'hub.acc8.li5': 'Posible reducción del riesgo país al demostrar capacidad de atraer inversión productiva de largo plazo.',
            'hub.footer.btnPdf': 'Documento completo (PDF)',
            'hub.footer.btnHome': 'Volver al inicio',
            'hub.footer.text': 'Viento Argentino — Energía eólica, hidrógeno verde y desarrollo argentino',

            'camino.meta.title': 'Se hace camino al andar | Viento Argentino',
            'camino.meta.description': 'Patagonia como región global de industrialización carbono neutral: ~4.000 TWh de potencial eólico, parques industriales, seguridad jurídica, net zero y el proyecto Se hace camino al andar.',
            'camino.hero.title': 'Se hace camino al andar',
            'camino.hero.lead': 'Patagonia como región global de industrialización carbono neutral: potencial eólico, parques industriales, seguridad jurídica, cooperación internacional y descarbonización industrial a escala mundial.',
            'camino.hero.btnSummary': 'Ver resumen del estudio',
            'camino.hero.btnPdf': 'Leer documento (PDF)',
            'camino.metric1.desc': 'potencial eólico anual estimado de la Patagonia según el Mapa Eólico Argentino.',
            'camino.metric2.desc': 'del potencial teórico que estaría aprovechado hoy (10–11 TWh/año de generación actual).',
            'camino.metric3.desc': 'aerogeneradores de 8 MW necesarios para capturar el potencial completo (~912 GW instalados).',
            'camino.acc1.title': 'Potencial eólico total y aprovechamiento actual',
            'camino.acc1.p1': 'Según estudios del Mapa Eólico Argentino, Argentina posee un potencial teórico de generación eólica de alrededor de <strong>6.000 TWh/año</strong>. La Patagonia concentra entre el 60 % y el 70 % de ese recurso, lo que equivale a unos <strong>3.600–4.200 TWh/año</strong>.',
            'camino.acc1.p2': 'Con datos oficiales más precisos (≈ 6.086 TWh nacional y dos tercios en Patagonia), el potencial patagónico se estima en <strong>~4.000 TWh/año</strong> con <strong>~1.470 GW</strong> de potencia instalable. El consumo eléctrico argentino ronda los 130–150 TWh/año: el potencial patagónico equivaldría a unas <strong>25–30 veces</strong> ese consumo.',
            'camino.acc1.li1': 'Potencial anual estimado de la Patagonia: 3.600–4.200 TWh/año (60–70 % del potencial nacional de ~6.000 TWh).',
            'camino.acc1.li2': 'Según datos oficiales: ~4.000 TWh/año y ~1.470 GW de potencia instalable equivalente.',
            'camino.acc1.li3': 'Generación eólica actual en Patagonia: ~10–11 TWh/año (59 % de la eólica nacional).',
            'camino.acc1.li4': 'Porcentaje aprovechado: 0,25–0,30 % del potencial teórico; el 99,7 % permanece sin explotar.',
            'camino.acc1.p3': 'La Patagonia presenta velocidades medias de 9 a 12 m/s y factores de capacidad que superan el 45 % en muchos sitios, lo que la sitúa entre los mejores recursos eólicos terrestres del planeta. Por cada MWh producido hoy, el recurso natural permitiría producir del orden de <strong>300 a 400 veces más energía</strong>, si no existieran limitaciones económicas, ambientales y de transmisión.',
            'camino.acc2.title': 'Escala industrial e inversión requerida',
            'camino.acc2.p1': 'Para capturar el potencial completo se necesitarían unos <strong>114.000 aerogeneradores de 8 MW</strong> con factor de capacidad del 50 %, generando ~35 GWh/año por turbina. La potencia instalada total sería de <strong>~912 GW</strong>.',
            'camino.acc2.li1': '~114.000 aerogeneradores de 8 MW con factor de capacidad del 50 %.',
            'camino.acc2.li2': 'Potencia instalada total: ~912 GW.',
            'camino.acc2.li3': 'Inversión estimada: USD 1,1–1,8 billones según costo por MW (USD 1,2–2,0 millones/MW).',
            'camino.acc2.li4': 'Con transmisión, almacenamiento e hidrógeno verde: USD 2–3 billones para el sistema completo.',
            'camino.acc2.p2': 'Esa inversión equivale a aproximadamente <strong>dos veces el PBI anual argentino</strong> (~USD 600–700 mil millones). En la práctica, los proyectos se plantean por etapas: el 10 % del potencial (~400 TWh/año) requeriría ~91 GW y ~USD 140.000 millones; el 25 % (~1.000 TWh/año) implicaría ~228 GW y ~USD 340.000 millones. El potencial teórico podría abastecer a <strong>27 Argentinas</strong>, <strong>8 Alemanias</strong> o <strong>9 Francias</strong> en términos energéticos.',
            'camino.acc3.title': 'Dólares del colchón y rendimiento para inversores',
            'camino.acc3.p1': 'En un escenario teórico optimista, los <strong>USD 250.000 millones</strong> estimados como dólares fuera del sistema financiero (según INDEC y otras fuentes) permitirían instalar unos <strong>167 GW</strong> de potencia eólica a USD 1,5 millones/MW.',
            'camino.acc3.li1': 'USD 250.000 millones (estimación de dólares fuera del sistema) permitirían instalar ~167 GW.',
            'camino.acc3.li2': 'Eso representa ~18 % del potencial teórico total y ~730 TWh/año de generación.',
            'camino.acc3.li3': 'Rendimiento neto estimado para inversores: 6–8 % (USD 40/MWh), 10–13 % (USD 60/MWh), 14–18 % (USD 80/MWh).',
            'camino.acc3.li4': 'Comparación: depósitos bancarios 1–5 %, bonos 4–7 %, parques eólicos maduros 6–12 %.',
            'camino.acc3.p2': 'Los ahorristas podrían obtener retornos del orden de <strong>8–12 % anual en dólares</strong> durante décadas, con un flujo distribuible de USD 20.000–30.000 millones por año. Eso equivaldría a <strong>5 veces el consumo eléctrico argentino</strong> y transformaría a Argentina en exportador energético de escala mundial, aunque seguirían siendo necesarios refuerzos en transmisión, almacenamiento e hidrógeno verde.',
            'camino.acc4.title': 'Parques industriales globales',
            'camino.acc4.p1': 'La propuesta plantea desarrollar <strong>parques industriales</strong> para radicar industrias mundiales de alto consumo energético que hoy funcionan con combustibles fósiles. Países como Australia, Arabia Saudita (NEOM), Noruega e Islandia ya intentan atraer industrias intensivas en energía hacia regiones con renovables baratas.',
            'camino.acc4.li1': 'Industrias objetivo: aluminio, hidrógeno verde, acero verde, fertilizantes, centros de datos IA, desalinización y combustibles sintéticos.',
            'camino.acc4.li2': 'Modelo A: vender electricidad. Modelo B: exportar moléculas (H₂, amoníaco, e-fuels). Modelo C: atraer industrias (mayor valor agregado).',
            'camino.acc4.li3': 'Con el 18 % del potencial (730 TWh/año), el valor energético anual rondaría USD 30.000–36.000 millones.',
            'camino.acc4.li4': 'Transformado en productos industriales, el valor podría superar USD 150.000 millones anuales.',
            'camino.acc4.p2': 'La Patagonia ofrece vientos de clase mundial, baja densidad poblacional, grandes extensiones, acceso atlántico y posibilidad de combinar eólica, solar e hidrógeno verde. El obstáculo principal no es tecnológico sino <strong>financiero e institucional</strong>: seguridad jurídica, estabilidad regulatoria por 30–40 años, infraestructura portuaria y garantías de repatriación de capital.',
            'camino.acc5.title': 'Dominio industrial permanente y zona de paz',
            'camino.acc5.p1': 'Para industrias que invierten USD 5.000–20.000 millones por complejo, el <strong>dominio industrial permanente condicionado</strong> reduce el riesgo regulatorio, mejora la valuación del proyecto y facilita el financiamiento. No es cesión de soberanía: el territorio sigue siendo argentino.',
            'camino.acc5.li1': 'Dominio industrial permanente condicionado: derechos mientras exista actividad productiva.',
            'camino.acc5.li2': 'Prohibición expresa de industrias militares y fabricación de armas.',
            'camino.acc5.li3': 'No es cesión de soberanía: el territorio sigue siendo argentino, con jurisdicción nacional.',
            'camino.acc5.li4': 'Derechos para empresas privadas, no para Estados extranjeros; prohibición de especulación inmobiliaria.',
            'camino.acc5.p2': 'La exclusión de industrias militares permite presentar el proyecto como una <strong>Zona Internacional de Desarrollo Industrial Pacífico</strong>. La combinación de energía renovable barata, suelo permanente, seguridad jurídica y actividad exclusivamente civil podría ser uno de los elementos más poderosos de atracción de inversiones, comparable en ambición a zonas como Shenzhen o Jebel Ali Free Zone.',
            'camino.acc6.title': 'Seguridad jurídica y marco institucional',
            'camino.acc6.p1': 'Para comprometer decenas de miles de millones durante décadas, los inversores buscan protección constitucional del derecho de propiedad, estabilidad tributaria, libertad para remitir utilidades, arbitraje internacional y contratos de largo plazo.',
            'camino.acc6.li1': 'Ley nacional y garantías constitucionales reforzadas para proteger inversiones de largo plazo.',
            'camino.acc6.li2': 'Capítulo constitucional aplicable a toda la región: propiedad privada, estabilidad tributaria, libertad de comercio.',
            'camino.acc6.li3': 'Neutralidad política y militar; igualdad de trato para empresas argentinas y extranjeras.',
            'camino.acc6.li4': 'Compatible con un marco de libertad económica, baja carga tributaria y Estado mínimo.',
            'camino.acc6.p2': 'El éxito político dependería de que la población perciba que las garantías extraordinarias atraen inversiones extraordinarias: tierra bajo soberanía argentina, sin actividades militares, cientos de miles de empleos, desarrollo de infraestructura y exportaciones crecientes. El activo más valioso del proyecto podría terminar siendo la <strong>estabilidad institucional</strong>, incluso por encima del viento.',
            'camino.acc7.title': 'Mitigación climática y liderazgo net zero',
            'camino.acc7.p1': 'El argumento climático podría ser más fuerte que la rentabilidad: no se trata solo de generar renovables para consumo local, sino de <strong>descarbonizar industrias globales</strong> que hoy dependen de carbón, petróleo o gas.',
            'camino.acc7.li1': 'Descarbonizar industrias globales que hoy dependen de carbón, petróleo o gas.',
            'camino.acc7.li2': 'Sectores migratorios: aluminio, acero, fertilizantes, hidrógeno, química pesada, IA y minerales críticos.',
            'camino.acc7.li3': 'Ventaja competitiva creciente frente a impuestos al carbono (p. ej. mecanismos de la UE).',
            'camino.acc7.li4': 'Exportar acero verde, aluminio verde, hidrógeno, fertilizantes y combustibles sintéticos con baja huella.',
            'camino.acc7.p2': 'Argentina podría pasar de actor menor en el clima a posición singular: no por reducir emisiones propias (pequeña fracción mundial), sino por permitir que industrias internacionales reduzcan <strong>cientos de millones de toneladas de CO₂</strong>. El proyecto se define como una <strong>Región Global de Industrialización Carbono Neutral</strong>, con potencial geopolítico similar al del petróleo en el siglo XX, pero basado en energía renovable.',
            'camino.acc8.title': 'Síntesis: Región Global de Industrialización Carbono Neutral',
            'camino.acc8.p1': 'El proyecto <strong>"Se hace camino al andar"</strong> sintetiza la visión de transformar la Patagonia en la mayor región industrial del mundo impulsada por energía renovable, destinada exclusivamente a actividades civiles, productivas, tecnológicas y ambientalmente sostenibles.',
            'camino.acc8.li1': '<strong>Soberanía argentina:</strong> jurisdicción nacional, sin cesión territorial a Estados.',
            'camino.acc8.li2': '<strong>Zona de producción pacífica:</strong> actividades civiles, científicas y tecnológicas exclusivamente.',
            'camino.acc8.li3': '<strong>Recurso estratégico:</strong> ~4.000 TWh/año de potencial eólico, más de 25 veces el consumo argentino.',
            'camino.acc8.li4': '<strong>Posicionamiento:</strong> Argentina como capital mundial de la industrialización carbono neutral.',
            'camino.acc8.li5': '<strong>Cuarto pilar:</strong> conocimiento — universidades, centros de investigación e incubadoras tecnológicas.',
            'camino.acc8.p2': 'La misión es demostrar que crecimiento económico, libertad económica, protección ambiental, cooperación internacional y paz pueden integrarse en un único proyecto de desarrollo para las próximas generaciones. Industrias objetivo: hidrógeno verde, amoníaco verde, acero verde, aluminio verde, fertilizantes, minerales críticos, centros de datos IA, química avanzada y combustibles sintéticos.',
            'camino.acc9.title': 'Centros de datos: Tierra y espacio',
            'camino.acc9.p1': 'Los centros de datos orbitales alimentados por energía solar son técnicamente posibles y ya se estudian, pero durante gran parte del siglo XXI serán un <strong>complemento</strong>, no un reemplazo, de los centros terrestres.',
            'camino.acc9.li1': 'Etapa 1 (actual): centros de datos terrestres cerca de energía barata y fibra óptica.',
            'camino.acc9.li2': 'Etapa 2 (2030–2045): gigantes alimentados por renovables en Patagonia, Canadá, Escandinavia y Australia.',
            'camino.acc9.li3': 'Etapa 3 (2045–2070): centros orbitales especializados como complemento, no reemplazo.',
            'camino.acc9.li4': 'Próximos 30–50 años: 90 %+ de la IA seguirá en la Tierra; la Patagonia es candidata ideal.',
            'camino.acc9.p2': 'La Patagonia industrial podría ser uno de los lugares más competitivos del mundo para alojar IA: electricidad abundante, refrigeración, terreno, estabilidad política y conectividad. Antes de centros orbitales masivos, es más probable ver <strong>parques de IA de cientos de gigavatios</strong> en regiones con renovables abundantes.',
            'camino.acc10.title': 'Wind Catcher Systems onshore',
            'camino.acc10.p1': 'Si se quisiera aprovechar una fracción significativa del potencial patagónico, el cuello de botella no sería el viento sino la <strong>capacidad industrial para fabricar e instalar millones de componentes</strong>. El sistema Wind Catcher de Wind Catching Systems (Noruega) reemplaza una turbina gigante por muchas turbinas pequeñas.',
            'camino.acc10.li1': 'Palas pequeñas (~15 m) permiten fabricación masiva, estandarización y logística por camión.',
            'camino.acc10.li2': 'Ventajas: producción industrial, menor dependencia de transporte especial y mayor resiliencia ante fallas.',
            'camino.acc10.li3': 'Desafíos: aerodinámica (rotores grandes son más eficientes), complejidad mecánica y coste estructural por MW.',
            'camino.acc10.li4': 'Propuesta patagónica: torres modulares, fabricación local y diseño optimizado para manufactura robotizada.',
            'camino.acc10.p2': 'La pregunta clave deja de ser cómo hacer el mejor aerogenerador y pasa a ser <strong>cómo fabricar millones de componentes al menor costo posible</strong>, como ocurrió con los paneles solares. Si se diseña un sistema eólico optimizado para manufactura masiva robotizada, el impacto económico podría ser tan importante como el propio recurso eólico patagónico.',
            'camino.footer.btnPdf': 'Documento completo (PDF)',
            'camino.footer.btnHub': 'Patagonia Green Ammonia Hub',
            'camino.footer.btnHome': 'Volver al inicio',
            'camino.footer.text': 'Viento Argentino — Patagonia, energía renovable e industrialización carbono neutral'
        },
        en: {
            'common.brand': 'Viento Argentino',
            'common.nav.home': 'Home',
            'common.nav.hub': 'Patagonia Green Ammonia Hub',
            'common.nav.camino': 'Se hace camino al andar',
            'common.nav.project': 'Project',
            'common.nav.language': 'Language',
            'common.backTitle': 'Go back',
            'common.lang.es': 'Español',
            'common.lang.en': 'English',

            'index.meta.title': 'Viento Argentino | Wind potential in Patagonia',
            'index.meta.description': 'Assessment of wind resources in Argentine Patagonia: 9,600 TWh per year, oil equivalence, and comparison with Vaca Muerta, GDP, and global nuclear power.',
            'index.hero.title': 'Wind potential in Patagonia',
            'index.hero.lead': 'Assessment of Patagonian wind resources and their economic equivalence in US dollars compared with fossil fuels, Vaca Muerta, GDP, and global nuclear power.',
            'index.hero.btnSummary': 'View study summary',
            'index.hero.btnPdf': 'Read document (PDF)',
            'index.metric1.desc': 'estimated annual wind potential in Argentine Patagonia.',
            'index.metric2.desc': 'equivalent economic value in oil (Brent ~USD 67/barrel).',
            'index.metric3.desc': 'Argentina\'s total annual electricity consumption (~140 TWh).',
            'index.acc1.title': 'Wind potential in Argentine Patagonia',
            'index.acc1.p1': 'According to studies cited in the analysis, the total annual wind potential of Argentine Patagonia is estimated at approximately <strong>9,600 TWh</strong> of generable electricity. The calculation considers between 4,100 and 5,200 full-load hours per year and average wind speeds above 9 m/s.',
            'index.acc1.p2': 'The resource is concentrated mainly in Chubut, Santa Cruz, and Río Negro, where wind is among the best in the world. Nationally, that theoretical potential equals about <strong>68 times</strong> Argentina\'s annual electricity consumption, close to 140 TWh.',
            'index.acc1.p3': 'The goal of the analysis is to size this resource not only in energy terms but also economically: how much equivalent oil it would represent and what it means in dollars compared with other Argentine and international benchmarks.',
            'index.acc2.title': 'Equivalence with oil',
            'index.acc2.p1': 'To compare with fossil fuels, the analysis uses crude oil as a reference. It assumes that generating 9,600 TWh in thermal plants would require converting thermal energy to electricity at 40% efficiency (typical of conventional or combined-cycle plants).',
            'index.acc2.li1': '1 TWh of electricity ≈ 2.5 TWh of thermal energy.',
            'index.acc2.li2': '1 TWh thermal ≈ 588,235 barrels of oil (5.8 million BTU per barrel).',
            'index.acc2.li3': '1 TWh of electricity ≈ 1,470,588 barrels of oil.',
            'index.acc2.li4': 'For 9,600 TWh: ≈ <strong>14,117,640,000 barrels</strong> of oil equivalent.',
            'index.acc2.p2': 'With Brent at about USD 67 per barrel (study data), the approximate total value is <strong>USD 945 billion</strong>: the oil that would have to be imported or produced to match that electricity from fossil sources.',
            'index.acc3.title': 'Comparison with Vaca Muerta',
            'index.acc3.p1': 'By 2028, Vaca Muerta is projected to exceed one million barrels of crude oil per day, or about 365 million barrels per year. Comparing the 14,117 million barrel equivalent of Patagonian wind potential with Vaca Muerta\'s annual production yields a ratio of approximately <strong>39 times</strong> Vaca Muerta\'s annual output in energy-equivalent terms.',
            'index.acc3.p2': 'This comparison does not mean all wind would immediately become exportable electricity, but it shows the extraordinary scale of the resource compared with Argentina\'s main hydrocarbon hub.',
            'index.acc4.title': 'Comparison with GDP',
            'index.acc4.p1': 'The analysis contrasts USD 945 billion of theoretical electricity potential with a projected Argentine nominal GDP of about USD 746.84 billion. The ratio is <strong>1.26</strong>, or one full GDP plus an additional 26%.',
            'index.acc4.p2': 'In other words: the theoretical annual value of Patagonian wind, converted to oil equivalence, would exceed the size of Argentina\'s GDP in that projection.',
            'index.acc5.title': 'One day of wind in Patagonia',
            'index.acc5.p1': 'Spreading the annual value of USD 945 billion over 365 days yields approximately <strong>USD 2.589 billion per day</strong>. In other words, that is what one day of wind in Patagonia would produce, according to the study figures.',
            'index.acc6.title': 'Comparison with nuclear power',
            'index.acc6.p1': 'The global fleet of about 440 nuclear reactors generates between 2,600 and 2,700 TWh per year. The theoretical Patagonian potential would equal about <strong>3.5 to 4 times</strong> current global nuclear output, or more than a thousand large reactors at full capacity.',
            'index.acc6.p2': 'In short: Patagonian wind is huge on a global scale, but full development requires solving transmission, storage, and the balance between local demand and export.',
            'index.footer.btnPdf': 'Full document (PDF)',
            'index.footer.btnHub': 'Patagonia Green Ammonia Hub program',
            'index.footer.text': 'Viento Argentino — Wind potential and Argentina\'s energy wealth',

            'hub.meta.title': 'Patagonia Green Ammonia Hub | Viento Argentino',
            'hub.meta.description': 'Proposal to turn Patagonian wind into green hydrogen, green ammonia, and ecological fertilizers. Industrial hub, RIGI framework, and national investment in Patagonia.',
            'hub.hero.title': 'Patagonia Green Ammonia Hub Program',
            'hub.hero.lead': 'A proposal to turn Patagonian wind into energy, green hydrogen, green ammonia, and ecological fertilizers competitive worldwide.',
            'hub.hero.btnSummary': 'View project summary',
            'hub.hero.btnPdf': 'Read document (PDF)',
            'hub.metric1.desc': 'of Patagonian wind potential would currently be utilized, according to the project.',
            'hub.metric2.desc': 'of new wind capacity proposed for an initial industrial scale of the hub.',
            'hub.metric3.desc': 'of possible fiscal and regulatory stability under the RIGI regime.',
            'hub.acc1.title': 'Wind: Argentina\'s greatest wealth',
            'hub.acc1.p1': 'For energy specialists, wind in the Patagonian region is among the best in the world for producing wind power. Average speeds are well above the global mean, with persistence that can exceed 50% or 60%.',
            'hub.acc1.p2': 'Patagonia also has virtually unlimited space for wind farms, with less land-use conflict than densely populated regions such as Europe. This combination of wind, land, and Atlantic access can become a strategic advantage for Argentina.',
            'hub.acc1.p3': 'This site proposes a plan to attract industries that want to replace fossil fuels with Patagonian wind power. The first task is to size the potential wealth of wind if converted into electricity, green hydrogen, green ammonia, and ecological fertilizers.',
            'hub.acc2.title': 'Patagonia Green Ammonia Hub',
            'hub.acc2.p1': 'The project proposes an industrial hub to produce green ammonia at scale. It starts with wind power feeding electrolyzers to produce green hydrogen. That hydrogen is then combined with nitrogen from the air to obtain ammonia, the basis for ecological fertilizers and a possible future maritime fuel.',
            'hub.acc2.li1': 'Integrated production: wind farm, electrolysis, ammonia synthesis, and export terminal.',
            'hub.acc2.li2': 'Target scale: 1 to 5 million tonnes of green ammonia per year at maturity.',
            'hub.acc2.li3': 'Possible markets: Europe and Asia, where demand for low-carbon products is growing.',
            'hub.acc2.li4': 'Environmental advantage: near-total emission reduction compared with grey ammonia from fossil gas.',
            'hub.acc3.title': 'Why Patagonia',
            'hub.acc3.p1': 'Patagonia combines hard-to-replicate conditions: sustained winds, large available areas, Atlantic access, and provinces that need industrial development. These features support export complexes near natural resources and ports.',
            'hub.acc3.li1': 'Santa Cruz, Chubut, Río Negro, and Tierra del Fuego are priority zones.',
            'hub.acc3.li2': 'Ports at Puerto Deseado, Comodoro Rivadavia, San Julián, or Punta Colorada could serve as logistics hubs.',
            'hub.acc3.li3': 'Seawater desalination would allow hydrogen production without competing for continental freshwater.',
            'hub.acc3.li4': 'Shared infrastructure can be developed through public-private schemes.',
            'hub.acc4.title': 'RIGI and investment incentives',
            'hub.acc4.p1': 'The project proposes using RIGI as the main tool to attract foreign direct investment and domestic capital. The regime offers fiscal and regulatory stability, tax benefits, free use of export proceeds, and long-term rules for large-scale projects.',
            'hub.acc4.li1': 'Declare the hub a strategic national interest.',
            'hub.acc4.li2': 'Create a one-stop shop to approve integrated projects quickly.',
            'hub.acc4.li3': 'Invite Patagonian provinces to add local incentives.',
            'hub.acc4.li4': 'Promote internationally: Patagonian wind plus RIGI equals competitive green fertilizers.',
            'hub.acc5.title': 'Mattress dollars and investment fund',
            'hub.acc5.p1': 'An important part of the project is channeling Argentine savings in dollars into productive investment. A trust or financial vehicle would allow participation with amounts far below those required for a single large RIGI project.',
            'hub.acc5.li1': 'Patagonia Green Ammonia Fund with subscriptions in dollars.',
            'hub.acc5.li2': 'Participation by small and medium domestic investors.',
            'hub.acc5.li3': 'Tax benefits if capital remains invested for several years.',
            'hub.acc5.li4': 'Turning idle dollars into jobs, exports, and infrastructure.',
            'hub.acc6.title': 'Comparison with Vaca Muerta',
            'hub.acc6.p1': 'The analysis compares this hub with Vaca Muerta because both are large-scale Patagonian projects aimed at exports, investment, and foreign exchange. The key difference is that Vaca Muerta is hydrocarbon-based, while the Green Ammonia Hub targets a net-zero industrial chain.',
            'hub.acc6.li1': 'Both need regulatory stability, infrastructure, and provincial participation.',
            'hub.acc6.li2': 'Vaca Muerta already showed that large projects can attract capital when rules are clear.',
            'hub.acc6.li3': 'The green hub could attract international climate finance.',
            'hub.acc6.li4': 'A successful project could improve country risk perception by generating genuine foreign exchange.',
            'hub.acc7.title': 'Technology: capillary electrolysis',
            'hub.acc7.p1': 'The analysis highlights capillary electrolysis as an innovation that can reduce electricity use to produce green hydrogen. It avoids losses from bubbles on electrodes and could lower hydrogen cost where renewable energy is very cheap, such as Patagonia.',
            'hub.acc7.li1': 'Estimated consumption close to 40–41.5 kWh per kilogram of hydrogen.',
            'hub.acc7.li2': 'Potential 15% to 20% improvement over conventional commercial technologies.',
            'hub.acc7.li3': 'Greater competitiveness of green ammonia versus grey ammonia.',
            'hub.acc7.li4': 'More attractive to investors, international buyers, and green finance.',
            'hub.acc8.title': 'Expected benefits',
            'hub.acc8.p1': 'If Argentina executes this strategy with focus and speed, Patagonia could become an export hub for ecological fertilizers and green hydrogen derivatives. Benefits would be environmental, industrial, fiscal, financial, and geopolitical.',
            'hub.acc8.li1': 'Exports worth billions of dollars per year.',
            'hub.acc8.li2': 'Skilled jobs and regional development.',
            'hub.acc8.li3': 'More port, energy, and logistics infrastructure.',
            'hub.acc8.li4': 'Less dependence on imported fossil fuels and fertilizers.',
            'hub.acc8.li5': 'Possible reduction in country risk by attracting long-term productive investment.',
            'hub.footer.btnPdf': 'Full document (PDF)',
            'hub.footer.btnHome': 'Back to home',
            'hub.footer.text': 'Viento Argentino — Wind power, green hydrogen, and Argentine development',

            'camino.meta.title': 'Se hace camino al andar | Viento Argentino',
            'camino.meta.description': 'Patagonia as a global carbon-neutral industrialization region: ~4,000 TWh of wind potential, industrial parks, legal security, net zero, and the Se hace camino al andar project.',
            'camino.hero.title': 'Se hace camino al andar',
            'camino.hero.lead': 'Patagonia as a global carbon-neutral industrialization region: wind potential, industrial parks, legal security, international cooperation, and global industrial decarbonization.',
            'camino.hero.btnSummary': 'View study summary',
            'camino.hero.btnPdf': 'Read document (PDF)',
            'camino.metric1.desc': 'estimated annual wind potential of Patagonia according to the Argentine Wind Map.',
            'camino.metric2.desc': 'of theoretical potential currently utilized (~10–11 TWh/year of current generation).',
            'camino.metric3.desc': '8 MW wind turbines needed to capture full potential (~912 GW installed).',
            'camino.acc1.title': 'Total wind potential and current utilization',
            'camino.acc1.p1': 'According to the Argentine Wind Map, Argentina has a theoretical wind generation potential of around <strong>6,000 TWh/year</strong>. Patagonia concentrates 60% to 70% of that resource, equivalent to about <strong>3,600–4,200 TWh/year</strong>.',
            'camino.acc1.p2': 'With more precise official data (≈ 6,086 TWh nationally and two-thirds in Patagonia), Patagonian potential is estimated at <strong>~4,000 TWh/year</strong> with <strong>~1,470 GW</strong> of installable capacity. Argentine electricity consumption is around 130–150 TWh/year: Patagonian potential would equal about <strong>25–30 times</strong> that consumption.',
            'camino.acc1.li1': 'Estimated annual Patagonian potential: 3,600–4,200 TWh/year (60–70% of ~6,000 TWh national potential).',
            'camino.acc1.li2': 'According to official data: ~4,000 TWh/year and ~1,470 GW of equivalent installable capacity.',
            'camino.acc1.li3': 'Current wind generation in Patagonia: ~10–11 TWh/year (59% of national wind power).',
            'camino.acc1.li4': 'Utilization rate: 0.25–0.30% of theoretical potential; 99.7% remains unexploited.',
            'camino.acc1.p3': 'Patagonia shows average wind speeds of 9 to 12 m/s and capacity factors exceeding 45% in many sites, placing it among the best terrestrial wind resources on the planet. For each MWh produced today, the natural resource would allow producing on the order of <strong>300 to 400 times more energy</strong>, if there were no economic, environmental, and transmission limitations.',
            'camino.acc2.title': 'Industrial scale and required investment',
            'camino.acc2.p1': 'Capturing full potential would require about <strong>114,000 wind turbines of 8 MW</strong> with a 50% capacity factor, generating ~35 GWh/year per turbine. Total installed capacity would be <strong>~912 GW</strong>.',
            'camino.acc2.li1': '~114,000 wind turbines of 8 MW with a 50% capacity factor.',
            'camino.acc2.li2': 'Total installed capacity: ~912 GW.',
            'camino.acc2.li3': 'Estimated investment: USD 1.1–1.8 trillion depending on cost per MW (USD 1.2–2.0 million/MW).',
            'camino.acc2.li4': 'Including transmission, storage, and green hydrogen: USD 2–3 trillion for the full system.',
            'camino.acc2.p2': 'That investment equals approximately <strong>twice Argentina\'s annual GDP</strong> (~USD 600–700 billion). In practice, projects are staged: 10% of potential (~400 TWh/year) would require ~91 GW and ~USD 140 billion; 25% (~1,000 TWh/year) would imply ~228 GW and ~USD 340 billion. Theoretical potential could supply <strong>27 Argentinas</strong>, <strong>8 Germanys</strong>, or <strong>9 Frances</strong> in energy terms.',
            'camino.acc3.title': 'Mattress dollars and investor returns',
            'camino.acc3.p1': 'In an optimistic theoretical scenario, the estimated <strong>USD 250 billion</strong> held outside the financial system (according to INDEC and other sources) would allow installing about <strong>167 GW</strong> of wind power at USD 1.5 million/MW.',
            'camino.acc3.li1': 'USD 250 billion (estimate of dollars outside the system) would allow installing ~167 GW.',
            'camino.acc3.li2': 'That represents ~18% of total theoretical potential and ~730 TWh/year of generation.',
            'camino.acc3.li3': 'Estimated net return for investors: 6–8% (USD 40/MWh), 10–13% (USD 60/MWh), 14–18% (USD 80/MWh).',
            'camino.acc3.li4': 'Comparison: bank deposits 1–5%, bonds 4–7%, mature wind farms 6–12%.',
            'camino.acc3.p2': 'Savers could obtain returns on the order of <strong>8–12% per year in dollars</strong> for decades, with a distributable flow of USD 20–30 billion per year. That would equal <strong>5 times Argentina\'s electricity consumption</strong> and transform Argentina into a world-scale energy exporter, though reinforcements in transmission, storage, and green hydrogen would still be needed.',
            'camino.acc4.title': 'Global industrial parks',
            'camino.acc4.p1': 'The proposal envisions developing <strong>industrial parks</strong> to host world industries with high energy consumption that today run on fossil fuels. Countries such as Australia, Saudi Arabia (NEOM), Norway, and Iceland already try to attract energy-intensive industries to regions with cheap renewables.',
            'camino.acc4.li1': 'Target industries: aluminum, green hydrogen, green steel, fertilizers, AI data centers, desalination, and synthetic fuels.',
            'camino.acc4.li2': 'Model A: sell electricity. Model B: export molecules (H₂, ammonia, e-fuels). Model C: attract industries (higher value added).',
            'camino.acc4.li3': 'With 18% of potential (730 TWh/year), annual energy value would be around USD 30–36 billion.',
            'camino.acc4.li4': 'Converted into industrial products, value could exceed USD 150 billion per year.',
            'camino.acc4.p2': 'Patagonia offers world-class winds, low population density, vast areas, Atlantic access, and the possibility of combining wind, solar, and green hydrogen. The main obstacle is not technological but <strong>financial and institutional</strong>: legal security, 30–40 years of regulatory stability, port infrastructure, and capital repatriation guarantees.',
            'camino.acc5.title': 'Permanent industrial domain and peace zone',
            'camino.acc5.p1': 'For industries investing USD 5–20 billion per complex, <strong>conditional permanent industrial domain</strong> reduces regulatory risk, improves project valuation, and facilitates financing. It is not a surrender of sovereignty: the territory remains Argentine.',
            'camino.acc5.li1': 'Conditional permanent industrial domain: rights while productive activity exists.',
            'camino.acc5.li2': 'Express prohibition of military industries and weapons manufacturing.',
            'camino.acc5.li3': 'Not a surrender of sovereignty: territory remains Argentine under national jurisdiction.',
            'camino.acc5.li4': 'Rights for private companies, not foreign states; prohibition of real estate speculation.',
            'camino.acc5.p2': 'Excluding military industries allows presenting the project as an <strong>International Zone for Peaceful Industrial Development</strong>. The combination of cheap renewable energy, permanent land rights, legal security, and exclusively civil activity could be one of the most powerful investment attraction elements, comparable in ambition to zones such as Shenzhen or Jebel Ali Free Zone.',
            'camino.acc6.title': 'Legal security and institutional framework',
            'camino.acc6.p1': 'To commit tens of billions over decades, investors seek constitutional protection of property rights, tax stability, freedom to remit profits, international arbitration, and long-term contracts.',
            'camino.acc6.li1': 'National law and reinforced constitutional guarantees to protect long-term investments.',
            'camino.acc6.li2': 'Constitutional chapter applicable to the whole region: private property, tax stability, free trade.',
            'camino.acc6.li3': 'Political and military neutrality; equal treatment for Argentine and foreign companies.',
            'camino.acc6.li4': 'Compatible with an economic freedom framework, low tax burden, and minimal state.',
            'camino.acc6.p2': 'Political success would depend on the population perceiving that extraordinary guarantees attract extraordinary investments: land under Argentine sovereignty, no military activities, hundreds of thousands of jobs, infrastructure development, and growing exports. The project\'s most valuable asset could end up being <strong>institutional stability</strong>, even above wind power.',
            'camino.acc7.title': 'Climate mitigation and net-zero leadership',
            'camino.acc7.p1': 'The climate argument could be stronger than profitability: it is not only about generating renewables for local consumption, but about <strong>decarbonizing global industries</strong> that today depend on coal, oil, or gas.',
            'camino.acc7.li1': 'Decarbonize global industries that today depend on coal, oil, or gas.',
            'camino.acc7.li2': 'Migrating sectors: aluminum, steel, fertilizers, hydrogen, heavy chemistry, AI, and critical minerals.',
            'camino.acc7.li3': 'Growing competitive advantage against carbon taxes (e.g. EU mechanisms).',
            'camino.acc7.li4': 'Export green steel, green aluminum, hydrogen, fertilizers, and synthetic fuels with low footprint.',
            'camino.acc7.p2': 'Argentina could move from a minor climate actor to a singular position: not by reducing its own emissions (a small global fraction), but by allowing international industries to reduce <strong>hundreds of millions of tonnes of CO₂</strong>. The project is defined as a <strong>Global Carbon-Neutral Industrialization Region</strong>, with geopolitical potential similar to oil in the 20th century, but based on renewable energy.',
            'camino.acc8.title': 'Synthesis: Global Carbon-Neutral Industrialization Region',
            'camino.acc8.p1': 'The <strong>"Se hace camino al andar"</strong> project synthesizes the vision of transforming Patagonia into the world\'s largest industrial region powered by renewable energy, dedicated exclusively to civil, productive, technological, and environmentally sustainable activities.',
            'camino.acc8.li1': '<strong>Argentine sovereignty:</strong> national jurisdiction, no territorial cession to states.',
            'camino.acc8.li2': '<strong>Peaceful production zone:</strong> exclusively civil, scientific, and technological activities.',
            'camino.acc8.li3': '<strong>Strategic resource:</strong> ~4,000 TWh/year of wind potential, more than 25 times Argentine consumption.',
            'camino.acc8.li4': '<strong>Positioning:</strong> Argentina as the world capital of carbon-neutral industrialization.',
            'camino.acc8.li5': '<strong>Fourth pillar:</strong> knowledge — universities, research centers, and technology incubators.',
            'camino.acc8.p2': 'The mission is to show that economic growth, economic freedom, environmental protection, international cooperation, and peace can integrate into a single development project for coming generations. Target industries: green hydrogen, green ammonia, green steel, green aluminum, fertilizers, critical minerals, AI data centers, advanced chemistry, and synthetic fuels.',
            'camino.acc9.title': 'Data centers: Earth and space',
            'camino.acc9.p1': 'Orbital data centers powered by solar energy are technically possible and already being studied, but for much of the 21st century they will be a <strong>complement</strong>, not a replacement, for terrestrial centers.',
            'camino.acc9.li1': 'Stage 1 (current): terrestrial data centers near cheap energy and fiber optics.',
            'camino.acc9.li2': 'Stage 2 (2030–2045): giants powered by renewables in Patagonia, Canada, Scandinavia, and Australia.',
            'camino.acc9.li3': 'Stage 3 (2045–2070): specialized orbital centers as complement, not replacement.',
            'camino.acc9.li4': 'Next 30–50 years: 90%+ of AI will remain on Earth; Patagonia is an ideal candidate.',
            'camino.acc9.p2': 'Industrial Patagonia could be one of the world\'s most competitive places to host AI: abundant electricity, cooling, land, political stability, and connectivity. Before massive orbital centers, <strong>AI parks of hundreds of gigawatts</strong> in regions with abundant renewables are more likely.',
            'camino.acc10.title': 'Onshore Wind Catcher Systems',
            'camino.acc10.p1': 'If a significant fraction of Patagonian potential were to be utilized, the bottleneck would not be wind but <strong>industrial capacity to manufacture and install millions of components</strong>. The Wind Catcher system by Wind Catching Systems (Norway) replaces one giant turbine with many small turbines.',
            'camino.acc10.li1': 'Small blades (~15 m) enable mass production, standardization, and truck logistics.',
            'camino.acc10.li2': 'Advantages: industrial production, less dependence on special transport, and greater resilience to failures.',
            'camino.acc10.li3': 'Challenges: aerodynamics (large rotors are more efficient), mechanical complexity, and structural cost per MW.',
            'camino.acc10.li4': 'Patagonian proposal: modular towers, local manufacturing, and design optimized for robotic mass production.',
            'camino.acc10.p2': 'The key question stops being how to build the best wind turbine and becomes <strong>how to manufacture millions of components at the lowest possible cost</strong>, as happened with solar panels. If a wind system optimized for robotic mass manufacturing is designed, the economic impact could be as important as Patagonian wind itself.',
            'camino.footer.btnPdf': 'Full document (PDF)',
            'camino.footer.btnHub': 'Patagonia Green Ammonia Hub',
            'camino.footer.btnHome': 'Back to home',
            'camino.footer.text': 'Viento Argentino — Patagonia, renewable energy, and carbon-neutral industrialization'
        }
    };

    function hasLocale(lang) {
        return Boolean(strings[lang]);
    }

    function getLang() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored && (hasLocale(stored) || ASYNC_LOCALES[stored])) {
            return stored;
        }
        return DEFAULT_LANG;
    }

    function t(key, lang) {
        var L = lang || getLang();
        if (strings[L] && strings[L][key] !== undefined) {
            return strings[L][key];
        }
        if (strings[DEFAULT_LANG][key] !== undefined) {
            return strings[DEFAULT_LANG][key];
        }
        if (strings.en && strings.en[key] !== undefined) {
            return strings.en[key];
        }
        return '';
    }

    function loadLocale(lang) {
        if (hasLocale(lang) || !ASYNC_LOCALES[lang]) {
            return Promise.resolve();
        }
        return fetch(ASYNC_LOCALES[lang])
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Locale not found: ' + lang);
                }
                return response.json();
            })
            .then(function (data) {
                strings[lang] = data;
            })
            .catch(function () {
                strings[lang] = strings.en || strings[DEFAULT_LANG];
            });
    }

    function applyLangSync(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;

        var page = document.body.getAttribute('data-page');
        if (page) {
            document.title = t(page + '.meta.title', lang);
            var meta = document.querySelector('meta[name="description"]');
            if (meta) {
                meta.setAttribute('content', t(page + '.meta.description', lang));
            }
        }

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var value = t(key, lang);
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.setAttribute('title', t(el.getAttribute('data-i18n-title'), lang));
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-title'), lang));
        });

        document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
            var code = btn.getAttribute('data-set-lang');
            btn.classList.toggle('active', code === lang);
            btn.setAttribute('aria-current', code === lang ? 'true' : 'false');
        });

        var toggle = document.getElementById('langDropdown');
        if (toggle) {
            toggle.setAttribute('aria-label', t('common.nav.language', lang));
        }
    }

    function applyLang(lang) {
        return loadLocale(lang).then(function () {
            applyLangSync(lang);
        });
    }

    function init() {
        var lang = getLang();
        applyLang(lang);

        document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyLang(btn.getAttribute('data-set-lang'));
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.VientoI18n = { applyLang: applyLang, getLang: getLang, t: t };
})();
