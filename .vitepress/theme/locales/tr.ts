/**
 * Turkish locale data for Hatcher
 * Hatcher için Türkçe yerel ayar verileri
 *
 * This file contains all translatable content for the Turkish version of the site.
 * Bu dosya, sitenin Türkçe sürümü için tüm çevrilebilir içeriği içerir.
 */

const tr = {
  hero: {
    title: 'Anayasal IDE',
    tagline: 'Siz uyurken kodlayan AI drone filosuna komuta edin. Askeri hassasiyetle playbook\'larınızı takip eden autopilotları devreye alın. Hata ayıklayıcı değil, Komutan olduğunuz IDE.',
    ctaText: 'Filoya Katıl',
    ctaLink: '/tr/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'Otonom AI Drone\'ları Devreye Alın',
      description: 'Playbook\'larınızı çalıştıran AI ajan filolarını başlatın. Siz uyurken kodlar, test eder ve yeniden düzenlerler. Tamamlanmış görevlerle uyanın.',
      link: '/tr/autopilots',
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
      title: 'Anayasal Komuta ve Kontrol',
      description: 'Kodlama standartlarınız kırılmaz yasalara dönüşür. Her drone anayasanızı askeri hassasiyetle takip eder. Başıboş AI yok.',
      link: '/tr/constitutional-engineering',
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
      title: 'Görsel Görev Planlama',
      description: 'Hedefleri tanımlamak için tıklayın. AI filosu belirsiz istemler değil görsel komutları anlar. Sıfır yanlış anlaşılma.',
      link: '/tr/visual-to-code',
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
      title: 'Kaleniz, Kurallarınız',
      description: '%100 yerel yürütme. Rust destekli güvenlik. Kodunuz asla komuta merkezinizden ayrılmaz. Tam operasyonel egemenlik.',
      link: '/tr/architecture',
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
    title: 'Komuta Almaya Hazır mısınız?',
    headline: 'AI kontrollü geliştirmenin geleceğini şekillendiren ilk komutanlar arasında olun.',
    subheadline: 'Filo toplanıyor. Erken komutanlara ömür boyu öncelikli erişim.',
    buttons: [
      {
        label: 'Discord\'a Katıl',
        description: 'Komutanlar topluluğuyla bağlantı kurun',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'Felsefeyi Okuyun',
        description: 'AI kontrolü vizyonumuzu anlayın',
        link: '/tr/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'GitHub\'da Yıldız Verin',
        description: 'Açık kaynak misyonunu destekleyin',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'Anayasal IDE',
    legalText: '<a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MIT Lisansı</a> altında yayınlanmıştır.',
    attributionText: '<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> ile <a href="https://github.com/chrissmejia">Chriss Mejía</a> ve <a href="/tr/community">Hatcher topluluğu</a> tarafından geliştirilmiştir.',
    copyrightText: '© {year} Hatcher DX. Tüm hakları saklıdır.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'Ürün',
        links: [
          { text: 'Başlarken', href: '/tr/getting-started' },
          { text: 'Code HAT', href: '/tr/features-code-hat' },
          { text: 'Gen HAT', href: '/tr/features-gen-hat' },
          { text: 'Visual HAT', href: '/tr/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/tr/features-time-graph-hat' }
        ]
      },
      {
        title: 'Konseptler',
        links: [
          { text: 'Felsefe', href: '/tr/philosophy' },
          { text: 'Playbooks', href: '/tr/playbooks-system' },
          { text: 'Autopilots', href: '/tr/autopilots-system' },
          { text: 'Time Graph', href: '/tr/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/tr/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'Topluluk',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'Katkıda Bulunma', href: '/tr/contributing' },
          { text: 'Topluluk Kuralları', href: '/tr/community' }
        ]
      },
      {
        title: 'Kaynaklar',
        links: [
          { text: 'Mimari', href: '/tr/architecture' },
          { text: 'Yol Haritası', href: '/tr/roadmap' },
          { text: 'Sürümler', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'Sorun Bildirme', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Açık Çekirdek Paktı', href: '/tr/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'Command Deck Sistemleri',
    subtitle: 'Sizi hata ayıklayıcıdan komutana dönüştüren dört savaş testinden geçmiş sistem:',
    systems: [
      {
        title: 'Anayasal Playbooks',
        description: 'Savaş planlarınızı bir kez yazın. Kodlama standartlarınız ve mimari desenleriniz her AI drone\'un takip etmesi gereken değiştirilemez yasalar haline gelir. Sapma yok. Yorumlama yok. Saf yürütme.',
        link: '/tr/playbooks-system',
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
        description: 'Her operasyon için görev kontrol merkezi. Her drone\'un eylemini izleyin, başarısız görevleri geri sarın, alternatif zaman çizgilerini keşfedin. Komuta geçmişiniz sonsuza kadar korunur.',
        link: '/tr/pillars-time-graph',
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
        description: 'Cephaneliğinizden herhangi bir silahı devreye alın. 2003\'ten kalma savaş testinden geçmiş C++ modülü mü? İmparatorluğunuzu çalıştıran COBOL mantığı mı? Tüm varlıklar WebAssembly üzerinden devreye alınmaya hazır.',
        link: '/tr/pillars-universal-fabricator',
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
        title: 'Kale Sınıfı Güvenlik',
        description: 'Komuta merkeziniz ele geçirilemez. Rust dövmesi duvarlar. Sıfır bulut maruziyeti. Her operasyon yerel. Stratejileriniz, kodunuz, egemenliğiniz. İhlal mümkün değil.',
        link: '/tr/philosophy',
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
    title: 'Temel HAT\'ler',
    subtitle: 'Bir geliştirici gün boyunca "farklı şapkalar takar". Hatcher size her iş için özel bir HAT veya çalışma alanı sunar:',
    hats: [
      {
        title: 'Code HAT',
        description: 'Saf yaratımın akışındayken kullanabileceğiniz Monaco destekli dünya standartında bir kod editörü.',
        link: '/tr/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: 'İstem mühendisliği arayüzü. AI filosuyla doğrudan iletişim hattınız.',
        link: '/tr/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'UI bileşenleriyle tasarlama ve etkileşim kurma için tasarım ve kodu birleştiren bir çalışma alanı.',
        link: '/tr/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: 'Nihai denetim aracı. Her değişikliği görselleştirmek için projenizin geçmişinin kuantum grafiği.',
        link: '/tr/features-time-graph-hat',
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
    title: 'Rakamlarla',
    metrics: [
      {
        number: '%100',
        label: 'Test Kapsamı',
        description: 'AI tarafından otomatikleştirildi, sizin tarafınızdan doğrulandı. Güvenle sevk edin.'
      },
      {
        number: '%0',
        label: 'Bulut Bağımlılığı',
        description: 'Fikri mülkiyetiniz sizin kalır. Hiçbir veri makinenizden ayrılmaz.'
      },
      {
        number: '∞',
        label: 'Dil Desteği',
        description: 'WebAssembly üzerinden COBOL\'dan Rust\'a. İşe yarayan şeyi kullanın.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'Amiral Hakkında',
    name: 'Chriss Mejía',
    jobTitle: 'Kurucu ve Baş Sistem Mimarı',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'Mühendislikteki yolculuğum yirmi yılı aşkın bir süredir devam ediyor; öncü bir Silicon Valley AI girişiminde başkan yardımcısı olarak görev yapmaktan YC destekli bir girişim için MVP oluşturmaya ve 300 kişilik kurumsal bölümlere liderlik etmeye kadar. Şimdi geliştirmenin önümüzdeki on yılını tanımlayacak araçları inşa ediyorum.',
    quote: 'Yazılımın geleceği geliştiricilerin yerini almak değil.<br><span class="quote-emphasis">Onlara komuta vermektir.</span>',
    stats: [
      {
        number: '22',
        label: 'Yıldır Sistem Mühendisliği'
      },
      {
        number: '300+',
        label: 'Liderlik Edilen Mühendis'
      },
      {
        number: 'YC',
        label: 'MVP Oluşturucusu',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: 'Keşfetmek için kaydırın'
  }
}

export default tr

export type LocaleData = typeof tr
