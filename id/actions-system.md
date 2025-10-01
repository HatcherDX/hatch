---
title: Sistem Actions | Penilaian Constitutional Anda
description: Pahami sistem Actions Hatcher - quality gates deterministik yang memvalidasi setiap perubahan. Penilaian akhir yang memastikan kode Anda memenuhi standar constitutional Anda.
---

# Hatcher Actions: Penilaian Constitutional Anda

Actions adalah quality gates dari ekosistem Hatcher—hakim constitutional yang menentukan apakah kode Anda memenuhi standar Anda. Mereka bukan alur kerja atau proses; mereka adalah validator deterministik dan atomik yang menjawab pertanyaan sederhana: **"Lulus atau Gagal?"**

## Apa itu Actions?

Actions adalah:

- **Validator Atomik**: Pemeriksaan tujuan tunggal yang memvalidasi satu aspek spesifik
- **Deterministik**: Selalu menghasilkan hasil yang sama untuk input yang sama
- **Biner**: Hanya mengembalikan "lulus" atau "gagal" (dengan detail)
- **Cepat**: Dirancang untuk umpan balik cepat, bukan pemrosesan kompleks

Mereka adalah checkpoint akhir yang memastikan setiap bagian kode menghormati konstitusi proyek Anda.

## Peran dalam Hierarki

Memahami Actions memerlukan pemahaman tempat mereka dalam filosofi Hatcher:

1. **Playbooks** (Strategi): Definisikan APA standar yang ingin Anda tegakkan
2. **Autopilots** (Taktik): Eksekusi BAGAIMANA mengimplementasikan standar tersebut
3. **Actions** (Penilaian): Validasi APAKAH implementasi memenuhi standar

```yaml
# Alur lengkap
playbook: 'We use Vue 3 with TypeScript'
autopilot: 'Generate a Vue 3 component with TypeScript'
actions: 'Run type-check, lint, and test to verify correctness'
```

## Actions Inti

Hatcher menyediakan Actions esensial untuk quality gates universal:

### Actions Type Safety

```yaml
actions:
  - name: types:validate
    description: Verify TypeScript compilation
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: Enforce strict TypeScript rules
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### Actions Kualitas Kode

```yaml
actions:
  - name: lint:check
    description: Verify code meets linting standards
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: Check code formatting
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### Actions Testing

```yaml
actions:
  - name: test:unit
    description: Run unit tests
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: Run integration tests
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: Ensure test coverage meets threshold
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### Actions Keamanan

```yaml
actions:
  - name: security:audit
    description: Check for known vulnerabilities
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: Ensure no secrets in code
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### Actions Performa

```yaml
actions:
  - name: bundle:size
    description: Verify bundle size limits
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: Check Lighthouse scores
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## Actions Kustom

Definisikan Actions spesifik proyek di `hatcher.config.json` Anda:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "Validate API contracts",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "Verify database migrations",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "Check translation completeness",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## Eksekusi Action

### Actions Individual

Jalankan Actions spesifik sesuai permintaan:

```bash
# Jalankan single action
hatcher action run test:unit

# Jalankan dengan verbose output
hatcher action run lint:check --verbose

# Jalankan dengan parameter kustom
hatcher action run coverage:verify --threshold=90
```

### Grup Action

Eksekusi Actions terkait bersama-sama:

```bash
# Jalankan semua test actions
hatcher action run-group testing

# Jalankan pre-commit actions
hatcher action run-group pre-commit

# Jalankan validasi deployment
hatcher action run-group deploy-checks
```

### Konfigurasi Action

Definisikan grup Action dalam konfigurasi Anda:

```json
{
  "actionGroups": {
    "pre-commit": [
      "format:verify",
      "lint:check",
      "types:validate",
      "test:unit"
    ],
    "pre-deploy": [
      "test:integration",
      "coverage:verify",
      "security:audit",
      "bundle:size"
    ],
    "quality": ["lint:check", "types:strict", "coverage:verify"]
  }
}
```

## Hasil Action

Actions menyediakan umpan balik terstruktur:

```json
{
  "action": "test:unit",
  "status": "fail",
  "duration": 3420,
  "details": {
    "total_tests": 142,
    "passed": 140,
    "failed": 2,
    "failures": [
      {
        "test": "UserService.authenticate",
        "error": "Expected true, received false",
        "file": "services/user.spec.ts",
        "line": 47
      }
    ]
  },
  "suggestion": "Fix failing tests before committing"
}
```

## Integrasi dengan Autopilots

Autopilots menggunakan Actions sebagai checkpoint kualitas:

```yaml
# Dalam alur kerja Autopilot
name: Feature Implementation
steps:
  - name: Generate code
    action: ai.create

  - name: Quality checkpoint
    action: run.actions
    actions:
      - lint:check # Must pass
      - types:validate # Must pass
      - test:unit # Must pass
    fail_fast: true # Stop on first failure

  - name: Commit if quality passed
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Kebijakan Action

Definisikan kapan Actions wajib:

```json
{
  "policies": {
    "pre-commit": {
      "required": ["lint:check", "types:validate"],
      "recommended": ["test:unit"]
    },
    "pre-merge": {
      "required": ["test:unit", "test:integration", "coverage:verify"],
      "threshold": {
        "coverage": 80,
        "performance": 85
      }
    },
    "pre-deploy": {
      "required": ["security:audit", "test:integration", "bundle:size"],
      "block_on_failure": true
    }
  }
}
```

## Praktik Terbaik

### Prinsip Desain Action

1. **Single Responsibility**: Setiap Action memvalidasi tepat satu hal
2. **Eksekusi Cepat**: Actions harus selesai dalam hitungan detik, bukan menit
3. **Pesan Kegagalan Jelas**: Berikan umpan balik yang dapat ditindaklanjuti pada kegagalan
4. **Deterministik**: Input yang sama selalu menghasilkan hasil yang sama
5. **Tanpa Side Effects**: Actions memvalidasi tetapi tidak memodifikasi

### Optimisasi Performa

- **Eksekusi Paralel**: Jalankan Actions independen secara bersamaan
- **Pemeriksaan Incremental**: Hanya validasi file yang berubah bila memungkinkan
- **Caching**: Cache hasil untuk kode yang tidak berubah
- **Early Exit**: Gagal cepat pada pelanggaran kritis

### Penanganan Error

Actions harus memberikan pesan error yang jelas dan dapat ditindaklanjuti:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "Code quality issues detected",
  "fixes": {
    "automatic": "Run 'npm run lint:fix' to auto-fix 12 issues",
    "manual": "3 issues require manual intervention",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' is defined but never used"
      }
    ]
  }
}
```

## Kekuatan Penilaian Constitutional

Actions adalah penjaga kualitas kode Anda—standar yang tidak dapat dinegosiasikan yang harus dipenuhi setiap bagian kode. Mereka bukan saran atau pedoman; mereka adalah hukum constitutional dari codebase Anda.

Dengan memisahkan validasi (Actions) dari implementasi (Autopilots) dan strategi (Playbooks), Hatcher menciptakan sistem yang jelas, dapat dipelihara, dan dapat diskalakan untuk memastikan kualitas kode.

Ingat: **Actions tidak membuat atau memodifikasi—mereka menilai. Dan penilaian mereka adalah final.**

<PageCTA
  title="Tegakkan Standar Anda Secara Otomatis"
  subtitle="Buat aturan validasi yang tidak dapat dilanggar yang menjaga kualitas kode Anda"
  buttonText="Konfigurasi Actions Anda"
  buttonLink="/id/getting-started"
  buttonStyle="secondary"
  footer="Tanpa kompromi. Tanpa pengecualian. Standar Anda, ditegakkan."
/>
