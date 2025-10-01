---
title: Berkontribusi | Bergabung dengan Komunitas Open Source Hatcher
description: "Pelajari cara berkontribusi ke Hatcher IDE, platform pengembangan AI open-source. Temukan panduan setup, standar coding, dan pedoman komunitas untuk berkontribusi ke alat pengembangan AI yang dikontrol."
---

# Berkontribusi ke Hatcher

Terima kasih atas minat Anda untuk berkontribusi ke Hatcher! Anda bergabung dengan gerakan untuk membangun masa depan pengembangan software di era AI—masa depan di mana developer mempertahankan kontrol absolut sambil memanfaatkan kekuatan amplifikasi AI. Panduan ini menyediakan langkah-langkah praktis untuk memulai, tetapi jika Anda belum melakukannya, kami merekomendasikan membaca [**Philosophy**](/id/philosophy) kami untuk memahami "mengapa" di balik pekerjaan kami.

Dengan berkontribusi ke Hatcher, Anda tidak hanya menulis kode—Anda membantu mendefinisikan bagaimana umat manusia akan membangun software di era AI. Setiap kontribusi, baik itu perbaikan bug, fitur, atau perbaikan dokumentasi, memajukan misi Controlled Amplification kami.

## Code of Conduct

Dengan berpartisipasi dalam proyek ini, Anda setuju untuk mematuhi [Code of Conduct](CODE_OF_CONDUCT.md) kami. Silakan baca sebelum berkontribusi.

## Memulai

### Setup Pengembangan

1. **Fork dan Clone**

   ```bash
   git clone https://github.com/your-username/dx-engine.git
   cd dx-engine
   ```

2. **Instal Dependencies**

   ```bash
   pnpm install
   ```

3. **Mulai Development Server**
   ```bash
   pnpm dev
   ```

### Struktur Proyek

```
dx-engine/
├── apps/                           # Paket aplikasi
│   ├── electron/                   # Proses Electron utama
│   ├── web/                       # Proses renderer (Vue 3 + TypeScript)
│   ├── preload/                   # Skrip preload untuk Electron
│   └── docs/                      # Situs dokumentasi VitePress
├── universal/                      # Library dan sistem bersama
│   ├── terminal-system/           # Emulasi dan manajemen terminal
│   ├── storage/                   # Lapisan abstraksi storage
│   ├── git-genius/               # Operasi Git dan timeline
│   ├── shared-rendering/         # Utilitas rendering bersama
│   └── shared-utils/             # Utilitas umum
├── tooling/                       # Alat pengembangan dan build
│   ├── vite-plugin/              # Plugin Vite kustom
│   ├── translation-system/       # Alat i18n dan terjemahan
│   └── puppeteer-google-translate/ # Terjemahan otomatis
├── scripts/                       # Skrip build, test, dan utility
├── brand/                         # Aset brand (logo, icon, dll.)
└── types/                         # Definisi tipe TypeScript bersama
```

## Cara Berkontribusi

### Melaporkan Bug

Saat melaporkan bug, harap sertakan:

- **Deskripsi Jelas**: Apa yang terjadi vs. apa yang Anda harapkan
- **Langkah untuk Mereproduksi**: Langkah detail untuk mereproduksi masalah
- **Lingkungan**: OS, versi Node.js, versi pnpm
- **Screenshot**: Jika berlaku, sertakan bukti visual

Gunakan [template laporan bug](.github/ISSUE_TEMPLATE/bug_report.md) kami saat membuat issues.

### Feature Requests

Kami menerima feature requests! Harap sertakan:

- **Use Case**: Mengapa fitur ini diperlukan?
- **Solusi yang Diusulkan**: Bagaimana seharusnya bekerja?
- **Alternatif**: Pendekatan lain apa yang Anda pertimbangkan?

Gunakan [template feature request](.github/ISSUE_TEMPLATE/feature_request.md) kami.

### Kontribusi Kode

#### Sebelum Anda Mulai

1. **Periksa Issues yang Ada**: Cari issues atau feature requests terkait
2. **Diskusikan Perubahan Besar**: Buka issue untuk mendiskusikan perubahan signifikan
3. **Mulai Kecil**: Mulai dengan kontribusi kecil dan fokus

#### Alur Kerja Pengembangan

1. **Buat Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Buat Perubahan**
   - Ikuti standar coding kami (lihat di bawah)
   - Tulis tests untuk fungsionalitas baru
   - Update dokumentasi sesuai kebutuhan

3. **Test Perubahan Anda**

   ```bash
   pnpm build
   pnpm test
   ```

4. **Commit Perubahan Anda**

   ```bash
   git commit -m "feat: add amazing new feature"
   ```

   Kami mengikuti format [Conventional Commits](https://conventionalcommits.org/).

5. **Push dan Buat PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Standar Coding

Hatcher mengikuti standar coding yang ketat untuk memastikan konsistensi, maintainability, dan kode berkualitas tinggi di seluruh proyek.

**📋 [Panduan Standar Coding Lengkap](./coding-standards.md)**

### Referensi Cepat

**TypeScript**

- Gunakan TypeScript untuk semua kode baru dengan strict mode diaktifkan
- Lebih suka interfaces daripada types untuk bentuk objek
- Gunakan nama yang bermakna dan deskriptif untuk variabel dan fungsi
- Sertakan komentar JSDoc untuk semua API publik

**Vue.js**

- Gunakan Composition API dengan sintaks `<script setup>`
- Definisikan props dan emits dengan interfaces TypeScript
- Lebih suka composables untuk logika yang dapat digunakan kembali
- Ikuti struktur single-file component: script → template → style

**Styling**

- Gunakan scoped styles untuk CSS spesifik komponen
- Ikuti metodologi BEM untuk penamaan class
- Gunakan CSS custom properties untuk theming
- Lebih suka flexbox dan CSS Grid untuk layouts

**Konvensi Git**

- Ikuti format [Conventional Commits](https://conventionalcommits.org/)
- Gunakan nama branch deskriptif: `feature/`, `fix/`, `docs/`, `refactor/`
- Jaga commit atomik dan fokus pada satu perubahan

### Alat Kualitas Kode

Kami menggunakan alat otomatis untuk menegakkan standar:

```bash
# Lint dan perbaiki masalah code style
pnpm lint:fix

# Type checking
pnpm typecheck

# Jalankan semua tests
pnpm test

# Format kode
pnpm format
```

### Pre-commit Hooks

Husky menjalankan pemeriksaan otomatis sebelum setiap commit:

- ESLint untuk kualitas kode
- Kompilasi TypeScript
- Prettier untuk formatting
- Unit tests untuk jalur kritis

Untuk pedoman detail, contoh, dan praktik terbaik, lihat dokumentasi [Coding Standards](./coding-standards.md) kami.

## Dokumentasi

### Jenis Dokumentasi

- **Komentar Kode**: Jelaskan logika kompleks
- **File README**: Overview dan instruksi setup
- **Dokumentasi API**: Dokumentasikan antarmuka publik
- **Panduan Pengguna**: Panduan how-to untuk pengguna akhir

### Pedoman Penulisan

- Gunakan bahasa yang jelas dan ringkas
- Sertakan contoh kode
- Jaga dokumentasi tetap up-to-date dengan perubahan kode
- Test semua contoh kode

## Proses Pull Request

### Sebelum Submit

- [ ] Kode mengikuti standar proyek
- [ ] Tests lulus secara lokal
- [ ] Dokumentasi diperbarui
- [ ] Perubahan fokus dan atomik

### Template Deskripsi PR

```markdown
## Description

Deskripsi singkat perubahan

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests ditambahkan/diperbarui
- [ ] Integration tests ditambahkan/diperbarui
- [ ] Manual testing selesai

## Screenshots (jika berlaku)

Sertakan screenshot sebelum/sesudah untuk perubahan UI
```

### Proses Review

1. **Automated Checks**: CI/CD harus lulus
2. **Code Review**: Setidaknya satu review maintainer
3. **Testing**: Perubahan diuji di lingkungan pengembangan
4. **Documentation**: Verifikasi docs diperbarui
5. **Merge**: Squash dan merge PR yang disetujui

## Proses Rilis

### Versioning

Kami mengikuti [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: Fitur baru (backward compatible)
- **PATCH**: Perbaikan bug (backward compatible)

### Alur Kerja Rilis

1. **Feature Freeze**: Berhenti menerima fitur baru
2. **Testing**: Fase testing komprehensif
3. **Documentation**: Update changelog dan docs
4. **Release**: Buat tagged release
5. **Announcement**: Komunikasikan perubahan ke komunitas

## Komunitas

### Saluran Komunikasi

- **GitHub Issues**: Laporan bug dan feature requests
- **GitHub Discussions**: Pertanyaan umum dan ide
- **Discord**: Chat real-time dengan komunitas
- **Twitter**: Ikuti [@HatcherDX](https://twitter.com/HatcherDX) untuk update

### Pedoman Komunitas

- **Bersikap Hormat**: Perlakukan semua orang dengan hormat
- **Bersikap Konstruktif**: Fokus pada solusi, bukan masalah
- **Bersikap Sabar**: Ingat kami semua relawan
- **Bersikap Membantu**: Bagikan pengetahuan dan bantu orang lain

## Pengakuan

Kami menghargai semua kontribusi! Kontributor diakui di:

- **CONTRIBUTORS.md**: Daftar semua kontributor proyek
- **Release Notes**: Kontribusi besar disorot
- **Social Media**: Menampilkan kontribusi komunitas

## Sumber Daya Pengembangan

### Link Berguna

- [Dokumentasi Vue.js](https://vuejs.org/)
- [Dokumentasi Electron](https://electronjs.org/)
- [TypeScript Handbook](https://typescriptlang.org/)
- [Dokumentasi Vite](https://vitejs.dev/)

### Alat Pengembangan

- **VS Code**: Editor yang direkomendasikan dengan ekstensi Vue dan TypeScript
- **Vue DevTools**: Ekstensi browser untuk debugging aplikasi Vue
- **Electron DevTools**: Alat debugging bawaan

## Pertanyaan?

Jika Anda memiliki pertanyaan tentang kontribusi:

1. Periksa [GitHub Discussions](https://github.com/HatcherDX/dx-engine/discussions) yang ada
2. Bergabung dengan [komunitas Discord](https://discord.gg/hatcher) kami
3. Buat discussion atau issue baru

Terima kasih telah berkontribusi ke Hatcher! Bersama-sama, kami membangun masa depan pengembangan yang dibantu AI.

<PageCTA
  title="Siap Membuat Jejak Anda?"
  subtitle="Bergabung dengan komunitas yang membangun IDE Constitutional untuk era AI"
  buttonText="Mulai Berkontribusi"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
  buttonStyle="secondary"
  footer="Setiap kontribusi membentuk masa depan pengembangan"
/>
