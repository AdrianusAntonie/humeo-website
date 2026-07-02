(function () {
  const translations = {
    nl: {
      'meta.index.title': 'Humeo | Meer zeggenschap, meer werkplezier',
      'meta.index.description': 'Humeo helpt organisaties zeggenschap en werkplezier vergroten onder medewerkers, management en directie, met een heldere aanpak in 6 stappen.',

      'skip.content': 'Direct naar inhoud',
      'aria.hoofdnav': 'Hoofdnavigatie',
      'aria.menuopen': 'Menu openen',
      'aria.taal': 'Taal',
      'aria.stappenlijst': 'Stappen van de aanpak',

      'nav.aanpak': 'Aanpak',
      'nav.voorwie': 'Voor wie',
      'nav.overons': 'Over ons',
      'nav.contact': 'Contact',

      'cta.plan': 'Plan een kennismaking',
      'cta.bekijk': 'Bekijk de aanpak',
      'cta.paragraph': 'In een gesprek van 20 minuten bespreken we wat er speelt binnen jouw organisatie, en of de pilot van 6 stappen daarbij past.',

      'hero.eyebrow': 'DIGITAAL LEIDERSCHAP',
      'hero.h1.line1': 'Meer zeggenschap.',
      'hero.h1.line2': 'Meer werkplezier.',
      'hero.paragraph': 'Wanneer medewerkers weinig invloed ervaren op hun werk, dalen werkplezier, betrokkenheid en eigenaarschap. Humeo vergroot zeggenschap onder medewerkers, management en directie, gelijktijdig.',
      'hero.tagline': 'PILOT IN 6 STAPPEN · ZEGGENSCHAP ALS HEFBOOM · ZONDER COMPLEXITEIT',
      'hero.card1.eyebrow': 'DE BELANGRIJKSTE KNOP',
      'hero.card1.title': 'Zeggenschap',
      'hero.card1.text': 'Meepraten, meebepalen, invloed uitoefenen',
      'hero.card2.eyebrow': 'GELIJKTIJDIG VOOR',
      'hero.card2.item1': 'Medewerkers',
      'hero.card2.item2': 'Management',
      'hero.card2.item3': 'Directie',

      'zorg.eyebrow': 'VOORBEELD · DE ZORGSECTOR',
      'zorg.h2': 'Zeggenschap speelt overal. In de zorg is de urgentie nu extra zichtbaar',
      'zorg.paragraph': "Humeo werkt sectorbreed. Deze drie cijfers laten zien waarom de zorg, als voorbeeld, nu zo'n directe aanleiding biedt.",
      'zorg.card1.title': 'Zeggenschap',
      'zorg.card1.text': 'Meepraten, meebepalen en invloed uitoefenen: één van de belangrijkste knoppen waar zorgorganisaties aan kunnen en moeten draaien.',
      'zorg.card1.source': 'Bron: NVZ, 2026',
      'zorg.card2.text': 'Ziekteverzuim in de zorg, het op een na hoogste niveau in 25 jaar, in het eerste kwartaal van 2026.',
      'zorg.card2.source': 'Bron: Skipr, juni 2026',
      'zorg.card3.text': 'Gemiddelde kosten van ziekteverzuim en uitval, per zorgmedewerker.',
      'zorg.card3.source': 'Bron: Rijksoverheid, 2026',

      'aanpak.eyebrow': 'DE AANPAK',
      'aanpak.h2': 'Eén aanpak, in zes heldere stappen',
      'aanpak.paragraph': 'Geen ingewikkeld veranderprogramma, wel een concrete, herhaalbare manier om zeggenschap binnen jouw organisatie te vergroten. Klik een stap aan.',
      'step.phase.pilot': 'PILOT',
      'step.phase.vervolg': 'VERVOLGTRAJECT · 6–12 MAANDEN',
      'step1.label': 'Kennismaking',
      'step2.label': 'Thermometer',
      'step3.label': 'Workshop',
      'step4.label': 'Terugkoppeling',
      'step5.label': 'Workshops',
      'step6.label': 'KPI-monitoring',
      'step6.h3': 'Actief KPI-monitoring',
      'step1.text': 'We bespreken met het management team wat er speelt, waar de drukte zit en welke workshop daar het beste op aansluit.',
      'step2.text': 'We halen op wat er écht speelt in het team: waar loopt het vast, en wat is er nodig om de workshop voor te bereiden?',
      'step3.text': 'Het team brainstormt: wie pakt iets concreet op, en wat heeft diegene nodig om dat te realiseren?',
      'step4.text': 'We koppelen terug wat er speelt en welke acties al klaarstaan, met een data-analyse als routekaart voor de vervolgstappen.',
      'step5.text': 'De geïdentificeerde uitdagingen worden omgezet in concrete acties en workshops die bijdragen aan duurzame verbetering.',

      'dashboard.eyebrow': 'ACTIEF KPI-MONITORING',
      'dashboard.h2': 'Zie wat zeggenschap oplevert',
      'dashboard.paragraph': 'Doorlopend inzicht in de effectiviteit van verbeterinitiatieven, met datagedreven dashboards om op resultaat te sturen.',
      'dashboard.callout1.title': 'ZEGGENSCHAPSCORE OMHOOG',
      'dashboard.callout1.text': 'Elk kwartaal opnieuw gemeten via de thermometer',
      'dashboard.callout2.title': 'MINDER VERZUIM',
      'dashboard.callout2.text': 'Vergeleken met het sectorgemiddelde',
      'dashboard.sidebar.dashboard': 'Dashboard',
      'dashboard.sidebar.zeggenschap': 'Zeggenschap',
      'dashboard.sidebar.verzuim': 'Verzuim',
      'dashboard.sidebar.acties': 'Acties',
      'dashboard.sidebar.workshops': 'Workshops',
      'dashboard.stat1.label': 'Zeggenschapscore',
      'dashboard.stat2.label': 'Verzuim dit kwartaal',
      'dashboard.stat3.label': 'Acties afgerond',
      'dashboard.progress.title': 'VOORTGANG ACTIES',
      'dashboard.action1.text': 'Onboarding herzien · Klantenservice',
      'dashboard.action1.status': 'Afgerond',
      'dashboard.action2.text': 'Overdracht-protocol · Supportteam',
      'dashboard.action2.status': 'In uitvoering',
      'dashboard.action3.text': 'Dienstroosters team B · Operations',
      'dashboard.action3.status': 'Gepland',

      'voorwie.eyebrow': 'DE KERN VAN ONZE AANPAK',
      'voorwie.h2': 'Het mes snijdt aan twee kanten.',
      'voorwie.paragraph': 'Door te focussen op zeggenschap verbeteren we de situatie voor medewerkers én voor management en directie, gelijktijdig.',
      'voorwie.medewerkers.eyebrow': 'VOOR MEDEWERKERS',
      'voorwie.medewerkers.item1': 'Meer invloed op het eigen werk',
      'voorwie.medewerkers.item2': 'Ruimte om zelf een vraagstuk op te pakken',
      'voorwie.medewerkers.item3': 'Minder druk, meer werkplezier',
      'voorwie.management.eyebrow': 'VOOR MANAGEMENT & DIRECTIE',
      'voorwie.management.item1': 'Concreet zicht op wat er speelt',
      'voorwie.management.item2': 'Taken structureel verdeeld in het team',
      'voorwie.management.item3': 'Sturen op resultaat met harde data',

      'onderzoek.eyebrow': 'WAT ONDERZOEK LAAT ZIEN',
      'onderzoek.quote': 'Autonomie is, naast competentie en verbondenheid, een van de drie psychologische basisbehoeften die motivatie en werkplezier op het werk bepalen.',
      'onderzoek.source': 'Bron: Zelfdeterminatietheorie, Deci & Ryan',

      'team.eyebrow': 'HET TEAM',
      'team.h2': 'De mensen achter Humeo',
      'team.paragraph': 'Een klein team met een duidelijke missie: organisaties helpen om zeggenschap en werkplezier merkbaar te vergroten.',
      'team.role.strategy': 'STRATEGY LEAD',
      'team.role.tech': 'TECH LEAD',
      'team.role.product': 'PRODUCT LEAD',
      'team.role.partnership': 'PARTNERSHIP LEAD',
      'team.role.adviseur': 'ADVISEUR',

      'footer.tagline': 'Digitaal leiderschap dat zeggenschap en werkplezier merkbaar vergroot.',
      'footer.aanpak.title': 'AANPAK',
      'footer.aanpak.link1': 'Kennismaking & thermometer',
      'footer.aanpak.link2': 'Workshops',
      'footer.aanpak.link3': 'KPI-monitoring',
      'footer.aanpak.link4': 'Voor wie',
      'footer.bedrijf.title': 'BEDRIJF',
      'footer.bedrijf.overons': 'Over ons',
      'footer.bedrijf.contact': 'Contact',
      'footer.volgons.title': 'VOLG ONS',
      'footer.copyright': '© 2026 Humeo B.V. Alle rechten voorbehouden.',
      'footer.privacy': 'Privacy',
      'footer.voorwaarden': 'Voorwaarden',
    },
    en: {
      'meta.index.title': 'Humeo | More autonomy, more job satisfaction',
      'meta.index.description': 'Humeo helps organizations increase autonomy and job satisfaction among employees, management and leadership, with a clear 6-step approach.',

      'skip.content': 'Skip to content',
      'aria.hoofdnav': 'Main navigation',
      'aria.menuopen': 'Open menu',
      'aria.taal': 'Language',
      'aria.stappenlijst': 'Steps of the approach',

      'nav.aanpak': 'Approach',
      'nav.voorwie': "Who it's for",
      'nav.overons': 'About us',
      'nav.contact': 'Contact',

      'cta.plan': 'Book an introduction',
      'cta.bekijk': 'See the approach',
      'cta.paragraph': "In a 20-minute conversation, we discuss what's going on within your organization and whether the 6-step pilot is a good fit.",

      'hero.eyebrow': 'DIGITAL LEADERSHIP',
      'hero.h1.line1': 'More autonomy.',
      'hero.h1.line2': 'More job satisfaction.',
      'hero.paragraph': 'When employees experience little influence over their work, job satisfaction, engagement and ownership decline. Humeo increases autonomy for employees, management and leadership, all at the same time.',
      'hero.tagline': 'PILOT IN 6 STEPS · AUTONOMY AS LEVERAGE · WITHOUT COMPLEXITY',
      'hero.card1.eyebrow': 'THE MOST IMPORTANT LEVER',
      'hero.card1.title': 'Autonomy',
      'hero.card1.text': 'Having a say, co-deciding, exerting influence',
      'hero.card2.eyebrow': 'SIMULTANEOUSLY FOR',
      'hero.card2.item1': 'Employees',
      'hero.card2.item2': 'Management',
      'hero.card2.item3': 'Leadership',

      'zorg.eyebrow': 'EXAMPLE · THE HEALTHCARE SECTOR',
      'zorg.h2': 'Autonomy matters everywhere. In healthcare, the urgency is especially visible right now',
      'zorg.paragraph': 'Humeo works across sectors. These three figures show why healthcare, as an example, is such a pressing case right now.',
      'zorg.card1.title': 'Autonomy',
      'zorg.card1.text': 'Having a say, co-deciding and exerting influence: one of the most important levers healthcare organizations can and must use.',
      'zorg.card1.source': 'Source: NVZ, 2026',
      'zorg.card2.text': 'Sick leave in healthcare, the second-highest level in 25 years, in the first quarter of 2026.',
      'zorg.card2.source': 'Source: Skipr, June 2026',
      'zorg.card3.text': 'Average cost of sick leave and dropout, per healthcare employee.',
      'zorg.card3.source': 'Source: Dutch government, 2026',

      'aanpak.eyebrow': 'THE APPROACH',
      'aanpak.h2': 'One approach, in six clear steps',
      'aanpak.paragraph': 'No complicated change program, just a concrete, repeatable way to increase autonomy within your organization. Click a step to explore.',
      'step.phase.pilot': 'PILOT',
      'step.phase.vervolg': 'FOLLOW-UP TRACK · 6–12 MONTHS',
      'step1.label': 'Introduction',
      'step2.label': 'Temperature check',
      'step3.label': 'Workshop',
      'step4.label': 'Feedback',
      'step5.label': 'Workshops',
      'step6.label': 'KPI monitoring',
      'step6.h3': 'Active KPI monitoring',
      'step1.text': "We discuss with the management team what's going on, where the pressure points are, and which workshop best fits the situation.",
      'step2.text': "We find out what's really going on in the team: where things get stuck, and what's needed to prepare the workshop?",
      'step3.text': 'The team brainstorms: who picks up something concrete, and what do they need to make it happen?',
      'step4.text': "We report back on what's going on and which actions are already lined up, with a data analysis as a roadmap for next steps.",
      'step5.text': 'The identified challenges are translated into concrete actions and workshops that contribute to lasting improvement.',

      'dashboard.eyebrow': 'ACTIVE KPI MONITORING',
      'dashboard.h2': 'See what autonomy delivers',
      'dashboard.paragraph': 'Ongoing insight into the effectiveness of improvement initiatives, with data-driven dashboards to steer toward results.',
      'dashboard.callout1.title': 'AUTONOMY SCORE UP',
      'dashboard.callout1.text': 'Re-measured every quarter via the temperature check',
      'dashboard.callout2.title': 'LESS ABSENTEEISM',
      'dashboard.callout2.text': 'Compared to the sector average',
      'dashboard.sidebar.dashboard': 'Dashboard',
      'dashboard.sidebar.zeggenschap': 'Autonomy',
      'dashboard.sidebar.verzuim': 'Absenteeism',
      'dashboard.sidebar.acties': 'Actions',
      'dashboard.sidebar.workshops': 'Workshops',
      'dashboard.stat1.label': 'Autonomy score',
      'dashboard.stat2.label': 'Absenteeism this quarter',
      'dashboard.stat3.label': 'Actions completed',
      'dashboard.progress.title': 'ACTION PROGRESS',
      'dashboard.action1.text': 'Onboarding revised · Customer service',
      'dashboard.action1.status': 'Completed',
      'dashboard.action2.text': 'Handover protocol · Support team',
      'dashboard.action2.status': 'In progress',
      'dashboard.action3.text': 'Shift schedules team B · Operations',
      'dashboard.action3.status': 'Planned',

      'voorwie.eyebrow': 'THE CORE OF OUR APPROACH',
      'voorwie.h2': "It's a win on both sides.",
      'voorwie.paragraph': 'By focusing on autonomy, we improve the situation for employees as well as for management and leadership, at the same time.',
      'voorwie.medewerkers.eyebrow': 'FOR EMPLOYEES',
      'voorwie.medewerkers.item1': 'More influence over their own work',
      'voorwie.medewerkers.item2': 'Room to take ownership of a challenge',
      'voorwie.medewerkers.item3': 'Less pressure, more job satisfaction',
      'voorwie.management.eyebrow': 'FOR MANAGEMENT & LEADERSHIP',
      'voorwie.management.item1': "Concrete insight into what's going on",
      'voorwie.management.item2': 'Tasks structurally distributed within the team',
      'voorwie.management.item3': 'Steering on results with hard data',

      'onderzoek.eyebrow': 'WHAT RESEARCH SHOWS',
      'onderzoek.quote': 'Autonomy is, alongside competence and relatedness, one of the three basic psychological needs that determine motivation and job satisfaction at work.',
      'onderzoek.source': 'Source: Self-Determination Theory, Deci & Ryan',

      'team.eyebrow': 'THE TEAM',
      'team.h2': 'The people behind Humeo',
      'team.paragraph': 'A small team with a clear mission: helping organizations noticeably increase autonomy and job satisfaction.',
      'team.role.strategy': 'STRATEGY LEAD',
      'team.role.tech': 'TECH LEAD',
      'team.role.product': 'PRODUCT LEAD',
      'team.role.partnership': 'PARTNERSHIP LEAD',
      'team.role.adviseur': 'ADVISOR',

      'footer.tagline': 'Digital leadership that noticeably increases autonomy and job satisfaction.',
      'footer.aanpak.title': 'APPROACH',
      'footer.aanpak.link1': 'Introduction & temperature check',
      'footer.aanpak.link2': 'Workshops',
      'footer.aanpak.link3': 'KPI monitoring',
      'footer.aanpak.link4': "Who it's for",
      'footer.bedrijf.title': 'COMPANY',
      'footer.bedrijf.overons': 'About us',
      'footer.bedrijf.contact': 'Contact',
      'footer.volgons.title': 'FOLLOW US',
      'footer.copyright': '© 2026 Humeo B.V. All rights reserved.',
      'footer.privacy': 'Privacy',
      'footer.voorwaarden': 'Terms',
    },
  };

  const STORAGE_KEY = 'humeo-lang';

  function getLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'nl';
  }

  function t(key, lang) {
    const dict = translations[lang || getLang()];
    return dict && Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
  }

  function formatNum(value, decimals, lang) {
    const locale = (lang || getLang()) === 'en' ? 'en-US' : 'nl-NL';
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  function apply(lang) {
    if (lang !== 'en' && lang !== 'nl') lang = 'nl';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(translations[lang], key)) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr').split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (attr && key && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
          el.setAttribute(attr, translations[lang][key]);
        }
      });
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
    });
    positionLangSliders();

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    document.dispatchEvent(new CustomEvent('humeo:langchange', { detail: { lang } }));
  }

  function positionLangSliders() {
    document.querySelectorAll('.lang-toggle').forEach((toggle) => {
      const slider = toggle.querySelector('.lang-slider');
      const activeBtn = toggle.querySelector('.lang-btn.is-active');
      if (!slider || !activeBtn) return;
      slider.style.width = activeBtn.offsetWidth + 'px';
      slider.style.transform = 'translateX(' + (activeBtn.offsetLeft - 3) + 'px)';
    });
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    apply(saved === 'en' ? 'en' : 'nl');

    // A click anywhere on the toggle (not just precisely on a letter) flips
    // the language, so the whole pill acts as a single switch.
    document.querySelectorAll('.lang-toggle').forEach((toggle) => {
      toggle.addEventListener('click', () => apply(getLang() === 'en' ? 'nl' : 'en'));
    });

    window.addEventListener('resize', positionLangSliders);
  }

  window.HumeoI18n = { init, apply, getLang, t, formatNum };
})();
