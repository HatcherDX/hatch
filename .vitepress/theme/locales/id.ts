/**
 * Indonesian locale data for Hatcher
 * Data lokal Bahasa Indonesia untuk Hatcher
 *
 * This file contains all translatable content for the Indonesian version of the site.
 * File ini berisi semua konten yang dapat diterjemahkan untuk versi Bahasa Indonesia dari situs ini.
 */

const id = {
  hero: {
    title: 'IDE Konstitusional',
    tagline: 'Komandoi armada drone AI yang mengkode saat Anda tidur. Deploy autopilot yang mengikuti playbook Anda dengan presisi militer. IDE di mana Anda adalah Komandan, bukan debugger.',
    ctaText: 'Bergabung dengan Armada',
    ctaLink: '/id/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'Deploy Drone AI Otonom',
      description: 'Luncurkan armada agen AI yang menjalankan playbook Anda. Mereka mengkode, menguji, dan melakukan refactor saat Anda tidur. Bangun dengan misi yang telah selesai.',
      link: '/id/autopilots',
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
      title: 'Komando & Kontrol Konstitusional',
      description: 'Standar coding Anda menjadi hukum yang tidak dapat dilanggar. Setiap drone mengikuti konstitusi Anda dengan presisi militer. Tanpa AI yang nakal.',
      link: '/id/constitutional-engineering',
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
      title: 'Perencanaan Misi Visual',
      description: 'Arahkan dan klik untuk mendefinisikan tujuan. Armada AI memahami perintah visual, bukan prompt yang samar. Nol miskomunikasi.',
      link: '/id/visual-to-code',
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
      title: 'Benteng Anda, Aturan Anda',
      description: 'Eksekusi 100% lokal. Keamanan bertenaga Rust. Kode Anda tidak pernah meninggalkan pusat komando Anda. Kedaulatan operasional total.',
      link: '/id/architecture',
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
    title: 'Siap Mengambil Komando?',
    headline: 'Jadilah salah satu komandan pertama yang membentuk masa depan pengembangan yang dikendalikan AI.',
    subheadline: 'Armada sedang berkumpul. Komandan awal mendapatkan akses prioritas seumur hidup.',
    buttons: [
      {
        label: 'Bergabung dengan Discord',
        description: 'Terhubung dengan komunitas komandan',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'Baca Filosofi',
        description: 'Pahami visi kami untuk kontrol AI',
        link: '/id/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'Beri Bintang di GitHub',
        description: 'Dukung misi open-source',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'IDE Konstitusional',
    legalText: 'Dirilis di bawah <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">Lisensi MIT</a>.',
    attributionText: 'Dibangun dengan <svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> oleh <a href="https://github.com/chrissmejia">Chriss Mejía</a> dan <a href="/id/community">komunitas Hatcher</a>.',
    copyrightText: '© {year} Hatcher DX. Semua hak dilindungi.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'Produk',
        links: [
          { text: 'Memulai', href: '/id/getting-started' },
          { text: 'Code HAT', href: '/id/features-code-hat' },
          { text: 'Gen HAT', href: '/id/features-gen-hat' },
          { text: 'Visual HAT', href: '/id/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/id/features-time-graph-hat' }
        ]
      },
      {
        title: 'Konsep',
        links: [
          { text: 'Filosofi', href: '/id/philosophy' },
          { text: 'Playbooks', href: '/id/playbooks-system' },
          { text: 'Autopilots', href: '/id/autopilots-system' },
          { text: 'Time Graph', href: '/id/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/id/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'Komunitas',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'Berkontribusi', href: '/id/contributing' },
          { text: 'Pedoman Komunitas', href: '/id/community' }
        ]
      },
      {
        title: 'Sumber Daya',
        links: [
          { text: 'Arsitektur', href: '/id/architecture' },
          { text: 'Roadmap', href: '/id/roadmap' },
          { text: 'Rilis', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'Laporkan Masalah', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Open Core Pact', href: '/id/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'Sistem Command Deck',
    subtitle: 'Empat sistem yang telah teruji dalam pertempuran yang mengubah Anda dari debugger menjadi komandan:',
    systems: [
      {
        title: 'Playbooks Konstitusional',
        description: 'Tulis rencana pertempuran Anda sekali. Standar coding dan pola arsitektur Anda menjadi hukum yang tidak dapat diubah yang harus diikuti oleh setiap drone AI. Tanpa penyimpangan. Tanpa interpretasi. Eksekusi murni.',
        link: '/id/playbooks-system',
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
        description: 'Kontrol misi untuk setiap operasi. Lacak setiap tindakan drone, putar ulang misi yang gagal, jelajahi garis waktu alternatif. Riwayat komando Anda dipelihara selamanya.',
        link: '/id/pillars-time-graph',
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
        description: 'Deploy senjata apa pun dari arsenal Anda. Modul C++ yang telah teruji dalam pertempuran dari tahun 2003? Logika COBOL yang menjalankan kerajaan Anda? Semua aset siap untuk deployment melalui WebAssembly.',
        link: '/id/pillars-universal-fabricator',
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
        title: 'Keamanan Tingkat Benteng',
        description: 'Pusat komando Anda tidak dapat ditembus. Tembok yang ditempa Rust. Nol eksposur cloud. Setiap operasi lokal. Strategi Anda, kode Anda, kedaulatan Anda. Tidak ada pelanggaran yang mungkin.',
        link: '/id/philosophy',
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
    title: 'HATs Inti',
    subtitle: 'Seorang developer "memakai topi yang berbeda" sepanjang hari. Hatcher memberi Anda HAT khusus, atau workspace, untuk setiap pekerjaan:',
    hats: [
      {
        title: 'Code HAT',
        description: 'Editor kode kelas dunia, didukung oleh Monaco, untuk saat Anda berada dalam aliran kreasi murni.',
        link: '/id/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: 'Antarmuka prompt engineering. Garis komunikasi langsung Anda ke armada AI.',
        link: '/id/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'Workspace untuk merancang dan berinteraksi dengan komponen UI, menjembatani desain dan kode.',
        link: '/id/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: 'Alat audit terbaik. Graf kuantum dari riwayat proyek Anda untuk memvisualisasikan setiap perubahan.',
        link: '/id/features-time-graph-hat',
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
    title: 'Berdasarkan Angka',
    metrics: [
      {
        number: '100%',
        label: 'Cakupan Tes',
        description: 'Diotomasi oleh AI, diverifikasi oleh Anda. Kirim dengan percaya diri.'
      },
      {
        number: '0%',
        label: 'Ketergantungan Cloud',
        description: 'IP Anda tetap milik Anda. Tidak ada data yang meninggalkan mesin Anda.'
      },
      {
        number: '∞',
        label: 'Dukungan Bahasa',
        description: 'COBOL ke Rust melalui WebAssembly. Gunakan yang berhasil.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'Tentang Laksamana',
    name: 'Chriss Mejía',
    jobTitle: 'Pendiri & Arsitek Sistem Utama',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'Perjalanan saya di bidang engineering mencakup lebih dari dua dekade, dari menjabat sebagai VP di startup AI perintis Silicon Valley hingga membangun MVP untuk usaha yang didukung YC, dan memimpin divisi enterprise dengan 300 orang. Sekarang membangun alat yang akan mendefinisikan dekade pengembangan berikutnya.',
    quote: 'Masa depan software bukan mengganti developer.<br><span class="quote-emphasis">Tapi memberi mereka komando.</span>',
    stats: [
      {
        number: '22',
        label: 'Tahun Engineering Sistem'
      },
      {
        number: '300+',
        label: 'Engineer yang Dipimpin'
      },
      {
        number: 'YC',
        label: 'Pembangun MVP',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: 'Gulir untuk menjelajah'
  }
}

export default id

export type LocaleData = typeof id
