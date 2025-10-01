/**
 * Hindi locale data for Hatcher
 * Hatcher के लिए हिंदी लोकेल डेटा
 *
 * This file contains all translatable content for the Hindi version of the site.
 * इस फ़ाइल में साइट के हिंदी संस्करण के लिए सभी अनुवाद योग्य सामग्री शामिल है।
 */

const hi = {
  hero: {
    title: 'Constitutional IDE',
    tagline: 'एआई ड्रोन का एक बेड़ा कमांड करें जो आपके सोते समय कोड करता है। Autopilots तैनात करें जो सैन्य सटीकता के साथ आपके Playbooks का पालन करते हैं। वह IDE जहां आप कमांडर हैं, डिबगर नहीं।',
    ctaText: 'बेड़े में शामिल हों',
    ctaLink: '/hi/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'स्वायत्त एआई ड्रोन तैनात करें',
      description: 'एआई एजेंटों का बेड़ा लॉन्च करें जो आपके Playbooks को निष्पादित करते हैं। वे कोड करते हैं, परीक्षण करते हैं, और रिफैक्टर करते हैं जबकि आप सोते हैं। पूर्ण मिशन के साथ जागें।',
      link: '/hi/autopilots',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="20" width="12" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
              <path d="M18 24H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M30 24H38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M24 20V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M24 28V36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="10" cy="24" r="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="38" cy="24" r="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="36" r="4" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10 20V28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M6 24H14" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M38 20V28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M34 24H42" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M20 12H28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M24 32V40" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M20 36H28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <circle cx="24" cy="24" r="2" fill="currentColor"/>
            </svg>`
    },
    {
      title: 'Constitutional कमांड और नियंत्रण',
      description: 'आपके कोडिंग मानक अटूट कानून बन जाते हैं। प्रत्येक ड्रोन सैन्य सटीकता के साथ आपके संविधान का पालन करता है। कोई दुष्ट एआई नहीं।',
      link: '/hi/constitutional-engineering',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="24" r="12" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
              <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="24" r="3" fill="currentColor"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M24 32V40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M8 24H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M32 24H40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>`
    },
    {
      title: 'विज़ुअल मिशन योजना',
      description: 'उद्देश्यों को परिभाषित करने के लिए पॉइंट और क्लिक करें। एआई बेड़ा विज़ुअल कमांड समझता है, अस्पष्ट प्रॉम्प्ट नहीं। शून्य गलतफहमी।',
      link: '/hi/visual-to-code',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="32" height="28" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14 18H34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M14 24H28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="20" cy="30" r="2" fill="currentColor"/>
              <circle cx="28" cy="30" r="2" fill="currentColor"/>
              <circle cx="36" cy="30" r="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14 34L34 34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>
            </svg>`
    },
    {
      title: 'आपका किला, आपके नियम',
      description: '100% स्थानीय निष्पादन। Rust-संचालित सुरक्षा। आपका कोड कभी आपके कमांड सेंटर को नहीं छोड़ता। संपूर्ण परिचालन संप्रभुता।',
      link: '/hi/architecture',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8L8 20V40H18V30H30V40H40V20L24 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <rect x="14" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <rect x="28" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="24" cy="20" r="2" fill="currentColor"/>
            </svg>`
    }
  ],

  cta: {
    title: 'कमांड लेने के लिए तैयार हैं?',
    headline: 'एआई-नियंत्रित विकास के भविष्य को आकार देने वाले पहले कमांडरों में शामिल हों।',
    subheadline: 'बेड़ा इकट्ठा हो रहा है। शुरुआती कमांडरों को आजीवन प्राथमिकता पहुंच मिलती है।',
    buttons: [
      {
        label: 'Discord में शामिल हों',
        description: 'कमांडरों के समुदाय से जुड़ें',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'दर्शन पढ़ें',
        description: 'एआई नियंत्रण के लिए हमारे दृष्टिकोण को समझें',
        link: '/hi/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'GitHub पर स्टार करें',
        description: 'ओपन-सोर्स मिशन का समर्थन करें',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'The Constitutional IDE',
    legalText: '<a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MIT License</a> के तहत जारी।',
    attributionText: '<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> के साथ बनाया गया <a href="https://github.com/chrissmejia">Chriss Mejía</a> और <a href="/hi/community">Hatcher समुदाय</a> द्वारा।',
    copyrightText: '© {year} Hatcher DX. सर्वाधिकार सुरक्षित।',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'उत्पाद',
        links: [
          { text: 'शुरू करें', href: '/hi/getting-started' },
          { text: 'Code HAT', href: '/hi/features-code-hat' },
          { text: 'Gen HAT', href: '/hi/features-gen-hat' },
          { text: 'Visual HAT', href: '/hi/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/hi/features-time-graph-hat' }
        ]
      },
      {
        title: 'अवधारणाएं',
        links: [
          { text: 'दर्शन', href: '/hi/philosophy' },
          { text: 'Playbooks', href: '/hi/playbooks-system' },
          { text: 'Autopilots', href: '/hi/autopilots-system' },
          { text: 'Time Graph', href: '/hi/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/hi/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'समुदाय',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'योगदान', href: '/hi/contributing' },
          { text: 'समुदाय दिशानिर्देश', href: '/hi/community' }
        ]
      },
      {
        title: 'संसाधन',
        links: [
          { text: 'आर्किटेक्चर', href: '/hi/architecture' },
          { text: 'रोडमैप', href: '/hi/roadmap' },
          { text: 'रिलीज़', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'समस्याओं की रिपोर्ट करें', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Open Core Pact', href: '/hi/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'Command Deck सिस्टम',
    subtitle: 'चार युद्ध-परीक्षित सिस्टम जो आपको डिबगर से कमांडर में बदल देते हैं:',
    systems: [
      {
        title: 'Constitutional Playbooks',
        description: 'अपनी युद्ध योजनाएं एक बार लिखें। आपके कोडिंग मानक और आर्किटेक्चर पैटर्न अपरिवर्तनीय कानून बन जाते हैं जिनका प्रत्येक एआई ड्रोन को पालन करना होगा। कोई विचलन नहीं। कोई व्याख्या नहीं। शुद्ध निष्पादन।',
        link: '/hi/playbooks-system',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="28" height="36" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10 14H38" stroke="currentColor" stroke-width="1.5"/>
                <path d="M16 22H32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 28H32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 34H26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="34" cy="10" r="2" fill="currentColor"/>
                <path d="M34 8V40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 3" opacity="0.3"/>
              </svg>`
      },
      {
        title: 'Time Graph Engine',
        description: 'हर ऑपरेशन के लिए मिशन नियंत्रण। प्रत्येक ड्रोन की कार्रवाई को ट्रैक करें, असफल मिशनों को रिवाइंड करें, वैकल्पिक टाइमलाइन का पता लगाएं। आपका कमांड इतिहास हमेशा के लिए संरक्षित।',
        link: '/hi/pillars-time-graph',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16H40M8 24H40M8 32H40M16 8V40M24 8V40M32 8V40" stroke="currentColor" stroke-width="1" opacity="0.2"/>
                <path d="M12 36L20 28L28 32L36 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="36" r="3" fill="currentColor"/>
                <circle cx="20" cy="28" r="3" stroke="currentColor" stroke-width="1.5" fill="white"/>
                <circle cx="28" cy="32" r="3" stroke="currentColor" stroke-width="1.5" fill="white"/>
                <circle cx="36" cy="20" r="3" fill="currentColor"/>
                <path d="M28 32L32 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
                <circle cx="32" cy="24" r="2" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
              </svg>`
      },
      {
        title: 'Universal Fabricator',
        description: 'अपने शस्त्रागार से कोई भी हथियार तैनात करें। 2003 से वह युद्ध-परीक्षित C++ मॉड्यूल? COBOL तर्क जो आपके साम्राज्य को चलाता है? WebAssembly के माध्यम से तैनाती के लिए सभी संपत्तियां तैयार।',
        link: '/hi/pillars-universal-fabricator',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6L38 14V30L24 38L10 30V14L24 6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="18" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
                <path d="M24 6V18M24 30V38" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
                <path d="M10 14L18 18M30 18L38 14" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
                <path d="M10 30L18 30M30 30L38 30" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
              </svg>`
      },
      {
        title: 'किले-श्रेणी सुरक्षा',
        description: 'आपका कमांड सेंटर अभेद्य है। Rust-निर्मित दीवारें। शून्य क्लाउड एक्सपोज़र। हर ऑपरेशन स्थानीय। आपकी रणनीतियां, आपका कोड, आपकी संप्रभुता। कोई उल्लंघन संभव नहीं।',
        link: '/hi/philosophy',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L8 12V22C8 31.2 15.2 39.6 24 42C32.8 39.6 40 31.2 40 22V12L24 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="20" y="22" width="8" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <path d="M22 22V19C22 17.9 22.9 17 24 17C25.1 17 26 17.9 26 19V22" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="24" cy="27" r="1" fill="currentColor"/>
                <path d="M24 8L12 14V22C12 28 17 34 24 36" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
              </svg>`
      }
    ]
  },

  hats: {
    title: 'मुख्य HATs',
    subtitle: 'एक डेवलपर पूरे दिन "अलग-अलग टोपियां पहनता है"। Hatcher आपको हर काम के लिए एक समर्पित HAT, या कार्यस्थान देता है:',
    hats: [
      {
        title: 'Code HAT',
        description: 'Monaco द्वारा संचालित एक विश्व-स्तरीय कोड एडिटर, जब आप शुद्ध सृजन के प्रवाह में हों।',
        link: '/hi/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: 'प्रॉम्प्ट इंजीनियरिंग इंटरफ़ेस। एआई बेड़े के साथ आपकी सीधी संचार लाइन।',
        link: '/hi/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'UI घटकों को डिज़ाइन करने और उनके साथ इंटरैक्ट करने के लिए एक कार्यस्थान, डिज़ाइन और कोड को जोड़ना।',
        link: '/hi/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: 'परम ऑडिट टूल। हर बदलाव को देखने के लिए आपके प्रोजेक्ट के इतिहास का एक क्वांटम ग्राफ।',
        link: '/hi/features-time-graph-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 26 L17 22" stroke="currentColor" stroke-width="1.5"/>
                <path d="M18 18 L24 14" stroke="currentColor" stroke-width="1"/>
                <circle cx="26" cy="28" r="6" stroke="currentColor" fill="none" stroke-width="1.5"/>
                <circle cx="14" cy="20" r="4.5" stroke="currentColor" fill="none" stroke-width="1.3"/>
                <circle cx="25" cy="12" r="3" stroke="currentColor" fill="none" stroke-width="1"/>
              </svg>`
      }
    ]
  },

  metrics: {
    title: 'संख्याओं के अनुसार',
    metrics: [
      {
        number: '100%',
        label: 'टेस्ट कवरेज',
        description: 'एआई द्वारा स्वचालित, आपके द्वारा सत्यापित। आत्मविश्वास के साथ शिप करें।'
      },
      {
        number: '0%',
        label: 'क्लाउड निर्भरता',
        description: 'आपकी IP आपकी रहती है। कोई डेटा आपकी मशीन नहीं छोड़ता।'
      },
      {
        number: '∞',
        label: 'भाषा समर्थन',
        description: 'WebAssembly के माध्यम से COBOL से Rust तक। जो काम करता है उसका उपयोग करें।',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'एडमिरल के बारे में',
    name: 'Chriss Mejía',
    jobTitle: 'संस्थापक और प्रमुख सिस्टम आर्किटेक्ट',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'इंजीनियरिंग में मेरी यात्रा दो दशकों से अधिक फैली है, एक अग्रणी Silicon Valley एआई स्टार्टअप में VP के रूप में सेवा करने से लेकर YC-समर्थित उद्यम के लिए MVP बनाने तक, और 300-व्यक्ति उद्यम प्रभागों का नेतृत्व करने तक। अब उन उपकरणों का निर्माण कर रहा हूं जो विकास के अगले दशक को परिभाषित करेंगे।',
    quote: 'सॉफ़्टवेयर का भविष्य डेवलपर्स को बदलना नहीं है।<br><span class="quote-emphasis">यह उन्हें कमांड देना है।</span>',
    stats: [
      {
        number: '22',
        label: 'वर्ष इंजीनियरिंग सिस्टम'
      },
      {
        number: '300+',
        label: 'इंजीनियरों का नेतृत्व किया'
      },
      {
        number: 'YC',
        label: 'MVP निर्माता',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: 'एक्सप्लोर करने के लिए स्क्रॉल करें'
  }
}

export default hi

export type LocaleData = typeof hi
