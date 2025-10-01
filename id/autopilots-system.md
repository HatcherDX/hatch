---
title: Sistem Autopilot | Orkestrasi Pengembangan Cerdas
description: Kuasai sistem Autopilot Hatcher - workflow otomasi kuat yang mengeksekusi tugas pengembangan kompleks dengan bantuan AI. Ubah tugas berulang menjadi resep cerdas yang dapat digunakan kembali.
---

# Sistem Autopilot

Sistem Autopilot adalah kerangka kerja otomasi taktis Hatcher yang mengubah workflow pengembangan kompleks menjadi resep cerdas yang dapat dieksekusi. Di mana Playbooks mendefinisikan strategi (standar dan pola), Autopilots adalah taktik yang mengotomatisasi implementasi pola tersebut dengan kecerdasan bertenaga AI.

## Apa itu Autopilots?

Autopilots adalah workflow terstruktur yang menggabungkan:

- **Otomasi Tugas**: Proses multi-langkah dieksekusi dengan presisi
- **Kecerdasan AI**: Keputusan sadar konteks selama eksekusi
- **Integrasi Alat**: Interaksi mulus dengan alat pengembangan
- **Penanganan Error**: Recovery cerdas dari masalah umum

Mereka adalah "resep" yang tahu BAGAIMANA mencapai apa yang Playbooks Anda deklarasikan ingin Anda capai.

## Struktur Autopilot

Autopilot dasar mengikuti struktur ini:

```json
{
  "name": "Create Vue Component",
  "version": "1.0.0",
  "description": "Generate a complete Vue 3 component with tests",
  "inputs": [
    {
      "name": "componentName",
      "type": "string",
      "description": "Name of the component in PascalCase",
      "required": true
    },
    {
      "name": "useTypeScript",
      "type": "boolean",
      "description": "Use TypeScript",
      "default": true
    }
  ],
  "steps": [
    {
      "name": "create-component",
      "action": "file.create",
      "path": "src/components/${componentName}.vue"
    },
    {
      "name": "create-test",
      "action": "file.create",
      "path": "tests/${componentName}.spec.ts"
    },
    {
      "name": "validate-quality",
      "action": "run.action",
      "name": "test:component"
    }
  ]
}
```

## Autopilots Bawaan

Hatcher hadir dengan Autopilots kuat untuk pola pengembangan umum:

### Autopilots Komponen

- **Create Component**: Hasilkan komponen lengkap dengan tests
- **Extract Component**: Refactor kode menjadi komponen yang dapat digunakan kembali
- **Update Props**: Modifikasi interface komponen dengan aman

### Autopilots Refactoring

- **Extract Function**: Tarik logika ke fungsi utility
- **Rename Symbol**: Rename dengan aman di seluruh basis kode
- **Move Module**: Pindahkan kode dengan pembaruan import

### Autopilots Testing

- **Generate Tests**: Buat test suites dari implementasi
- **Update Snapshots**: Refresh test snapshots secara cerdas
- **Coverage Report**: Analisis dan tingkatkan test coverage

### Autopilots Dokumentasi

- **Generate JSDoc**: Tambahkan dokumentasi dari analisis kode
- **Update README**: Jaga dokumentasi tetap tersinkronisasi
- **API Documentation**: Hasilkan API docs dari kode

## Membuat Autopilots Kustom

### Autopilots Workflow Dasar

Buat Autopilots untuk workflow spesifik tim Anda:

```yaml
name: Setup New Feature
description: Initialize a new feature with all required structure
inputs:
  - name: featureName
    type: string
    required: true
  - name: includeTests
    type: boolean
    default: true

steps:
  - name: Create feature directory
    action: directory.create
    path: src/features/${featureName}

  - name: Generate index file
    action: file.create
    path: src/features/${featureName}/index.ts
    template: feature-index

  - name: Create component structure
    action: run.autopilot
    name: Create Vue Component
    inputs:
      componentName: ${featureName}View

  - name: Setup routing
    action: file.modify
    path: src/router/index.ts
    operation: add-route
    route:
      path: /${featureName}
      component: ${featureName}View

  - name: Validate with Actions
    action: run.actions
    actions: ["test:unit", "lint:check", "types:validate"]
```

### Autopilots yang Ditingkatkan AI

Manfaatkan AI untuk eksekusi tugas cerdas:

```yaml
name: Optimize Component Performance
description: Analyze and optimize Vue component performance
ai-mode: enhanced

steps:
  - name: Analyze component
    action: ai.analyze
    prompt: |
      Analyze this Vue component for performance issues:
      - Unnecessary re-renders
      - Missing memoization
      - Inefficient computed properties
      - Large bundle size

  - name: Apply optimizations
    action: ai.refactor
    playbooks:
      - vue-performance
      - bundle-optimization
    constraints:
      - Maintain all existing functionality
      - Keep TypeScript types intact
      - Preserve component API

  - name: Verify changes
    action: run.actions
    actions: ['test:component', 'performance:benchmark']
```

## Trigger Autopilot

### Eksekusi Manual

Jalankan Autopilots sesuai permintaan:

```bash
hatcher run create-component --name UserProfile
```

### Trigger File Watch

Eksekusi Autopilots pada perubahan file:

```json
{
  "triggers": [
    {
      "type": "file-change",
      "pattern": "**/*.vue",
      "autopilot": "update-component-docs"
    }
  ]
}
```

### Integrasi Git Hook

Otomatisasi Autopilots dengan workflow Git:

```json
{
  "triggers": [
    {
      "type": "pre-commit",
      "autopilot": "format-and-lint"
    },
    {
      "type": "post-merge",
      "autopilot": "update-dependencies"
    }
  ]
}
```

## Komposisi Autopilot

### Autopilots Berurutan

Rantai Autopilots untuk workflow kompleks:

```yaml
name: Complete Feature Development
steps:
  - action: run.autopilot
    name: Create Component

  - action: run.autopilot
    name: Generate Tests

  - action: run.autopilot
    name: Update Documentation

  - action: git.commit
    message: 'feat: Add ${featureName} component'

  - action: run.actions
    name: Final Quality Gates
    actions: ['coverage:verify', 'bundle:size']
```

### Autopilots Paralel

Eksekusi tugas independen secara bersamaan:

```yaml
name: Project Setup
parallel: true
steps:
  - action: npm.install
  - action: generate.types
  - action: setup.environment
```

### Autopilots Bersyarat

Tambahkan logika ke workflow Anda:

```yaml
steps:
  - name: Check TypeScript
    action: config.check
    key: useTypeScript

  - name: Generate types
    condition: ${steps.checkTypeScript.result}
    action: typescript.generate
```

## Penanganan Error

### Logika Retry

Tangani kegagalan sementara dengan anggun:

```yaml
steps:
  - name: API Setup
    action: api.initialize
    retry:
      attempts: 3
      delay: 1000
      backoff: exponential
```

### Autopilots Fallback

Sediakan jalur alternatif:

```yaml
steps:
  - name: Use npm
    action: npm.install
    fallback:
      - action: yarn.install
      - action: pnpm.install
```

### Error Recovery

Bersihkan saat gagal:

```yaml
steps:
  - name: Database migration
    action: db.migrate
    onError:
      - action: db.rollback
      - action: notify.team
        message: Migration failed
```

## Marketplace Autopilot

### Autopilots Komunitas

Telusuri dan install Autopilots dari komunitas:

- **Spesifik framework**: Dioptimalkan untuk React, Vue, Angular
- **Integrasi alat**: Docker, Kubernetes, CI/CD
- **Spesifik domain**: E-commerce, SaaS, Mobile

### Menerbitkan Autopilots

Bagikan Autopilots Anda dengan komunitas:

```bash
hatcher autopilot publish my-awesome-workflow
```

### Versi Autopilot

- **Semantic Versioning**: Lacak kompatibilitas
- **Manajemen Dependensi**: Tangani dependensi Autopilot
- **Notifikasi Update**: Tetap terkini dengan perbaikan

## Konfigurasi

### Autopilots Global

Konfigurasikan Autopilots default untuk semua proyek:

```json
{
  "globalAutopilots": [
    "code-formatter",
    "commit-validator",
    "dependency-checker"
  ]
}
```

### Autopilots Proyek

Definisikan Autopilots spesifik proyek di `hatcher.config.json`:

```json
{
  "autopilots": {
    "directory": "./autopilots",
    "autoload": ["setup", "deploy"],
    "aliases": {
      "dev": "start-development",
      "ship": "deploy-production"
    }
  }
}
```

## Praktik Terbaik

### Desain Autopilot

- **Single Responsibility**: Setiap Autopilot harus mengorkestrasi satu workflow dengan baik
- **Idempoten**: Autopilots harus aman dijalankan beberapa kali
- **Composable**: Desain Autopilots untuk bekerja bersama
- **Terdokumentasi**: Deskripsi dan contoh yang jelas

### Performa

- **Cache Results**: Hindari operasi redundan
- **Eksekusi Paralel**: Gunakan paralelisme bila memungkinkan
- **Progressive Enhancement**: Mulai sederhana, tambahkan kompleksitas sesuai kebutuhan

### Keamanan

- **Validasi Input**: Verifikasi semua input sebelum eksekusi
- **Eksekusi Sandboxed**: Jalankan Autopilots tidak tepercaya dengan aman
- **Audit Logging**: Lacak semua eksekusi Autopilot

## Integrasi dengan Playbooks dan Actions

Autopilots mengorkestrasi antara Playbooks (strategi) dan Actions (validasi):

```yaml
name: Implement Feature
playbooks:
  - vue3-typescript # Standar yang harus diikuti
  - team-standards # Pola yang harus digunakan

steps:
  - name: Generate component
    action: ai.create
    prompt: Create a Vue component following our standards

  - name: Apply team patterns
    action: playbook.apply
    strict: true

  - name: Validate with Actions
    action: run.actions
    actions:
      - test:unit # Verifikasi tests lulus
      - lint:check # Verifikasi kualitas kode
      - coverage:verify # Verifikasi test coverage
```

## Monitoring dan Analitik

### Pelacakan Eksekusi

Monitor performa Autopilot:

- **Waktu Eksekusi**: Lacak durasi dan bottleneck
- **Success Rate**: Monitor reliabilitas
- **Pola Penggunaan**: Pahami workflow tim

### Saran Optimasi

Wawasan bertenaga AI:

- **Perbaikan Workflow**: Sarankan urutan Autopilot yang lebih baik
- **Tips Performa**: Identifikasi peluang optimasi
- **Deteksi Pola**: Temukan peluang otomasi

## Fitur Masa Depan

### Visual Autopilot Builder

Interface drag-and-drop untuk membuat workflow kompleks tanpa kode.

### Generasi Autopilot AI

Hasilkan Autopilots secara otomatis dengan mengamati pola developer.

### Eksekusi Terdistribusi

Jalankan Autopilots di beberapa mesin untuk paralelisme masif.

### Time Travel Debugging

Telusuri riwayat eksekusi Autopilot untuk debug workflow kompleks.

## Kekuatan Otomasi Taktis

Sistem Autopilot mengubah tugas pengembangan berulang menjadi workflow otomatis cerdas yang belajar dan berkembang dari waktu ke waktu. Mereka adalah lapisan taktis yang menjembatani kesenjangan antara Playbooks strategis dan Actions validasi, menciptakan ekosistem otomasi lengkap yang menghormati standar Anda sambil mempercepat pengembangan Anda.

Ingat: **Playbooks mendefinisikan APA, Autopilots mengeksekusi BAGAIMANA, Actions memvalidasi JIKA.**

<PageCTA
  title="Deploy Autopilot Pertama Anda"
  subtitle="Otomatisasi workflow kompleks dengan agen AI cerdas yang meningkatkan diri"
  buttonText="Luncurkan Sistem Autopilot"
  buttonLink="/id/autopilots"
  buttonStyle="secondary"
  footer="Dari repetisi ke otomasi. Dari manual ke ajaib."
/>
