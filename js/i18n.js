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
            'hub.footer.text': 'Viento Argentino — Energía eólica, hidrógeno verde y desarrollo argentino'
        },
        en: {
            'common.brand': 'Viento Argentino',
            'common.nav.home': 'Home',
            'common.nav.hub': 'Patagonia Green Ammonia Hub',
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
            'hub.footer.text': 'Viento Argentino — Wind power, green hydrogen, and Argentine development'
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
