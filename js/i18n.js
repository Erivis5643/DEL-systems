(function () {
  'use strict';

  var translations = {
    de: {
      'nav.packages': 'Produkt-Pakete',
      'nav.packages_short': 'Pakete',
      'nav.about': 'Über uns',
      'nav.contact': 'Kontakt',
      'hero.title_main': 'Mehr Umsatz. Weniger Aufwand.',
      'hero.title_sub': 'KI-Automatisierung, die Ihr Business skaliert.',
      'hero.subtitle': 'Testen Sie unseren KI-Agenten eine Woche lang kostenlos – ganz ohne Risiko für Sie.',
      'hero.cta_packages': 'Pakete entdecken',
      'hero.cta_demo': 'Live testen',
      'hero.scroll_cue': 'demo-bot unten',
      'story1.label': 'Problem',
      'story1.heading': 'Ihr Team sollte keine Zeit mit Routineaufgaben verschwenden.',
      'story1.body': 'Viele Mitarbeiter verbringen einen erheblichen Teil ihrer Arbeitszeit mit sich wiederholenden Aufgaben: E-Mails beantworten, Termine verschieben, Daten manuell übertragen. Das kostet Zeit, Geld – und am Ende auch Motivation.',
      'story2.label': 'Lösung',
      'story2.heading': 'Der digitale Kundensupport, der nie schläft.',
      'story2.body': 'Unsere maßgeschneiderten KI-Agenten übernehmen dort, wo der Mensch an seine Grenzen stößt: Sie qualifizieren Leads rund um die Uhr, beantworten Kundenanfragen in Sekundenschnelle und buchen Termine direkt in Ihrem Kalender – zuverlässig, konsistent und ohne Wartezeiten.',
      'story3.label': 'Vertrauen',
      'story3.heading': 'Eine Woche testen. Null Risiko für Sie.',
      'story3.body': 'Bevor Sie sich entscheiden, überzeugen Sie sich selbst: Bei Basis KI-Agent und Sales & Support KI erhalten Sie eine volle Woche kostenlosen Testbetrieb – unverbindlich und ohne jegliche Kosten. Zeigt sich, dass der Agent für Ihr Business funktioniert, führen wir die Zusammenarbeit gemeinsam fort. Überzeugt es Sie nicht, zahlen Sie nichts – ganz einfach.',
      'story4.label': 'ABLAUF',
      'story4.heading': 'Von Ihrer Website direkt zu Ihrem persönlichen KI-Agenten.',
      'flow1.title': 'Kurzes Kennenlernen',
      'flow1.text': 'In einem kurzen Gespräch (z. B. per Zoom) besprechen wir gemeinsam, was Ihr KI-Agent können soll und wie er zu Ihrem Business passt.',
      'flow2.title': 'Automatische Vorbereitung',
      'flow2.text': 'Parallel dazu analysieren wir Ihre Website, damit Ihr Agent von Anfang an weiß, was Sie anbieten – ohne dass Sie uns alles doppelt erklären müssen.',
      'flow3.title': 'Eine Woche live, kostenlos',
      'flow3.text': 'Ihr KI-Agent geht für eine Woche in den Testbetrieb. Sie erleben live, wie er arbeitet – ganz ohne Risiko.',
      'flow4.title': 'Gemeinsam weiterwachsen',
      'flow4.text': 'Zeigt sich, dass sich die Investition für Sie rechnet, starten wir gemeinsam in die reguläre Zusammenarbeit – zu fairen, transparenten Konditionen.',
      'pricing.label': 'Produkt-Pakete',
      'pricing.title': 'Wählen Sie Ihren KI-Agenten',
      'pricing.subtitle': 'Transparente Preise. Keine versteckten Kosten. Eine Woche kostenlos testen.',
      'pricing.month': 'Monat',
      'pricing.popular': 'Beliebt',
      'pricing.cta_test': 'Kostenlos testen',
      'pricing.cta_consult': 'Beratungsgespräch vereinbaren',
      'pkg1.name': 'Basis KI-Agent',
      'pkg1.trial': '1 Woche kostenlos testen. Danach:',
      'pkg1.f1': 'E-Mail-Automatisierung',
      'pkg1.f2': 'FAQ-Beantwortung',
      'pkg1.f3': 'Basis-Integrationen',
      'pkg2.name': 'Sales & Support KI',
      'pkg2.trial': '1 Woche kostenlos testen. Danach:',
      'pkg2.f1': 'Lead-Qualifizierung 24/7',
      'pkg2.f2': 'Terminbuchung',
      'pkg2.f3': 'CRM-Integration',
      'pkg2.f4': 'Multi-Channel-Support',
      'pkg3.name': 'Deep Automation',
      'pkg3.f1': 'ERP-Anbindung',
      'pkg3.f2': 'Custom Workflows',
      'pkg3.f3': 'Datenbank-Automatisierung',
      'pkg3.f4': 'Dedizierter Support',
      'table.title': 'Was ist inklusive?',
      'table.feature': 'Leistung',
      'table.basis': 'Basis',
      'table.deep': 'Deep Automation',
      'table.r1': 'Kostenlose Testwoche',
      'table.r2': 'Website & WhatsApp Chat',
      'table.r3': 'Schnelle Einrichtung',
      'table.r4': '24/7 Lead-Qualifizierung',
      'table.r5': 'Intelligente Terminbuchung',
      'table.r6': 'Multi-Channel-Support (z. B. Website, WhatsApp, Instagram)',
      'table.r7': 'CRM-Anbindung (z. B. Brevo, HubSpot)',
      'table.r8': 'Komplexe Workflows & ERP-Anbindung',
      'table.r9': 'Datenbank-Integrationen & monatliche Optimierung',
      'lead.title': 'Genug gelesen – testen Sie uns live.',
      'lead.subtitle': 'Stellen Sie unserer KI Ihre Fragen – direkt hier auf der Seite.',
      'lead.bot_text': 'KI-Bot Platzhalter',
      'lead.bot_hint': 'Hier wird Ihr Chatbot eingebettet',
      'about.label': 'Über uns',
      'about.intro': 'Wir sind DEL-systems – eine KI-Automatisierungs-Agentur, die Unternehmen dabei hilft, repetitive Prozesse intelligent zu delegieren und wertvolle Zeit zurückzugewinnen.',
      'about.mission_title': 'Unsere Mission',
      'about.mission_p1': 'Wir glauben, dass Menschen ihre Kreativität und Strategie einbringen sollten – nicht in E-Mail-Fluten und Copy-Paste-Aufgaben versinken. Deshalb entwickeln wir maßgeschneiderte KI-Agenten, die genau dort ansetzen, wo manuelle Arbeit am meisten kostet.',
      'about.mission_p2': 'Von der ersten Lead-Qualifizierung bis zur komplexen ERP-Automatisierung: Wir bauen Systeme, die Ihren Präferenzen entsprechen und innerhalb weniger Tage betriebsbereit sind.',
      'about.diff_title': 'Was uns auszeichnet',
      'about.diff_p1': 'Schnelle Implementierung statt monatelangem Warten. Transparente Preise statt undurchsichtiger Beratungshonorare. Und ein Team, das Technologie für messbare Ergebnisse in Ihrem Business einsetzt.',
      'about.next_title': 'Bereit für den nächsten Schritt?',
      'about.next_p1': 'Entdecken Sie unsere Produkt-Pakete oder testen Sie unsere KI direkt auf der Startseite. Wir freuen uns auf Ihre Anfrage.',
      'about.packages_link': 'Produkt-Pakete',
      'about.next_p2': 'Für formelle Anfragen erreichen Sie uns auch per E-Mail unter info@del-systems.at.',
    },
    en: {
      'nav.packages': 'Products',
      'nav.packages_short': 'Plans',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.title_main': 'More Revenue. Less Effort.',
      'hero.title_sub': 'AI automation that scales your business.',
      'hero.subtitle': 'Try our AI agent free for one week – completely risk-free.',
      'hero.cta_packages': 'Explore Plans',
      'hero.cta_demo': 'Live Demo',
      'hero.scroll_cue': 'demo-bot below',
      'story1.label': 'Problem',
      'story1.heading': 'Your team shouldn\'t waste time on routine tasks.',
      'story1.body': 'Many employees spend a significant portion of their working time on repetitive tasks: answering emails, rescheduling appointments, manually transferring data. This costs time, money – and ultimately motivation.',
      'story2.label': 'Solution',
      'story2.heading': 'The digital customer support that never sleeps.',
      'story2.body': 'Our custom AI agents step in where humans reach their limits: they qualify leads around the clock, answer customer inquiries in seconds, and book appointments directly in your calendar – reliably, consistently, and without waiting times.',
      'story3.label': 'Trust',
      'story3.heading': 'One week trial. Zero risk for you.',
      'story3.body': 'Before you decide, see for yourself: with the Basic AI Agent and Sales & Support AI, you get a full week of free trial operation – no obligation and no cost whatsoever. If the agent works for your business, we continue together. If not, you pay nothing – simple as that.',
      'story4.label': 'PROCESS',
      'story4.heading': 'From your website directly to your personal AI agent.',
      'flow1.title': 'Brief Introduction',
      'flow1.text': 'In a short call (e.g. via Zoom) we discuss together what your AI agent should be able to do and how it fits your business.',
      'flow2.title': 'Automatic Preparation',
      'flow2.text': 'In parallel, we analyze your website so your agent knows from the start what you offer – without you having to explain everything twice.',
      'flow3.title': 'One Week Live, Free',
      'flow3.text': 'Your AI agent goes into trial operation for one week. You experience live how it works – completely risk-free.',
      'flow4.title': 'Grow Together',
      'flow4.text': 'If the investment proves worthwhile for you, we start the regular collaboration together – on fair, transparent terms.',
      'pricing.label': 'Products',
      'pricing.title': 'Choose Your AI Agent',
      'pricing.subtitle': 'Transparent pricing. No hidden costs. One week free trial.',
      'pricing.month': 'month',
      'pricing.popular': 'Popular',
      'pricing.cta_test': 'Try for Free',
      'pricing.cta_consult': 'Schedule Consultation',
      'pkg1.name': 'Basic AI Agent',
      'pkg1.trial': '1 week free trial. Then:',
      'pkg1.f1': 'Email Automation',
      'pkg1.f2': 'FAQ Answering',
      'pkg1.f3': 'Basic Integrations',
      'pkg2.name': 'Sales & Support AI',
      'pkg2.trial': '1 week free trial. Then:',
      'pkg2.f1': 'Lead Qualification 24/7',
      'pkg2.f2': 'Appointment Booking',
      'pkg2.f3': 'CRM Integration',
      'pkg2.f4': 'Multi-Channel Support',
      'pkg3.name': 'Deep Automation',
      'pkg3.f1': 'ERP Integration',
      'pkg3.f2': 'Custom Workflows',
      'pkg3.f3': 'Database Automation',
      'pkg3.f4': 'Dedicated Support',
      'table.title': 'What\'s included?',
      'table.feature': 'Feature',
      'table.basis': 'Basic',
      'table.deep': 'Deep Automation',
      'table.r1': 'Free Trial Week',
      'table.r2': 'Website & WhatsApp Chat',
      'table.r3': 'Fast Setup',
      'table.r4': '24/7 Lead Qualification',
      'table.r5': 'Smart Appointment Booking',
      'table.r6': 'Multi-Channel Support (e.g. Website, WhatsApp, Instagram)',
      'table.r7': 'CRM Integration (e.g. Brevo, HubSpot)',
      'table.r8': 'Complex Workflows & ERP Integration',
      'table.r9': 'Database Integrations & Monthly Optimization',
      'lead.title': 'Enough reading – test us live.',
      'lead.subtitle': 'Ask our AI your questions – right here on the page.',
      'lead.bot_text': 'AI Bot Placeholder',
      'lead.bot_hint': 'Your chatbot will be embedded here',
      'about.label': 'About Us',
      'about.intro': 'We are DEL-systems – an AI automation agency that helps businesses intelligently delegate repetitive processes and reclaim valuable time.',
      'about.mission_title': 'Our Mission',
      'about.mission_p1': 'We believe people should bring their creativity and strategy to the table – not drown in email floods and copy-paste tasks. That\'s why we develop custom AI agents that target exactly where manual work costs the most.',
      'about.mission_p2': 'From the first lead qualification to complex ERP automation: we build systems that match your preferences and are ready to operate within days.',
      'about.diff_title': 'What Sets Us Apart',
      'about.diff_p1': 'Fast implementation instead of months of waiting. Transparent pricing instead of opaque consulting fees. And a team that uses technology to deliver measurable results for your business.',
      'about.next_title': 'Ready for the Next Step?',
      'about.next_p1': 'Explore our Products or test our AI directly on the homepage. We look forward to your inquiry.',
      'about.packages_link': 'Products',
      'about.next_p2': 'For formal inquiries, you can also reach us by email at info@del-systems.at.',
    }
  };

  var currentLang = localStorage.getItem('del_lang') || 'de';

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    document.documentElement.lang = lang;

    var label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'de' ? 'EN' : 'DE';

    var btn = document.getElementById('langSwitch');
    if (btn) btn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln');
  }

  function toggleLang() {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    localStorage.setItem('del_lang', currentLang);
    applyTranslations(currentLang);
  }

  function init() {
    var btn = document.getElementById('langSwitch');
    if (btn) btn.addEventListener('click', toggleLang);
    if (currentLang !== 'de') applyTranslations(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
