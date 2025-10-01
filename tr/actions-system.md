---
title: "Actions Sistemi | Anayasal Yargınız"
description: "Hatcher'ın Actions sistemini anlayın - her değişikliği doğrulayan deterministik kalite kapıları. Kodunuzun anayasal standartlarınızı karşıladığından emin olan nihai yargı."
---

# Hatcher Actions: Anayasal Yargınız

Actions, Hatcher ekosisteminin kalite kapılarıdır—kodunuzun standartlarınızı karşılayıp karşılamadığını belirleyen anayasal hakimler. Bunlar iş akışları veya süreçler değil; basit bir soruyu yanıtlayan atomik, deterministik doğrulayıcılardır: **"Geçti mi Kaldı mı?"**

## Actions Nedir?

Actions şunlardır:

- **Atomik Doğrulayıcılar**: Bir özel yönü doğrulayan tek amaçlı kontroller
- **Deterministik**: Aynı girdi için her zaman aynı sonucu üretir
- **İkili**: Sadece "geçti" veya "kaldı" döndürür (detaylarla birlikte)
- **Hızlı**: Karmaşık işleme değil, hızlı geri bildirim için tasarlanmıştır

Kodunuzun her parçasının projenizin anayasasına saygı göstermesini sağlayan son kontrol noktasıdırlar.

## Hiyerarşideki Rol

Actions'ı anlamak, Hatcher felsefesindeki yerlerini anlamayı gerektirir:

1. **Playbook'lar** (Strateji): Uygulamak istediğiniz standartları NE olarak tanımlar
2. **Autopilot'lar** (Taktikler): Bu standartları NASIL uygulayacağınızı yürütür
3. **Actions** (Yargı): Uygulamanın standartları karşılayıp karşılamadığını EĞER doğrular

```yaml
# Tam akış
playbook: 'We use Vue 3 with TypeScript'
autopilot: 'Generate a Vue 3 component with TypeScript'
actions: 'Run type-check, lint, and test to verify correctness'
```

## Temel Actions

Hatcher, evrensel kalite kapıları için temel Actions sağlar:

### Tip Güvenliği Actions

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

### Kod Kalitesi Actions

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

### Test Actions

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

### Güvenlik Actions

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

### Performans Actions

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

## Özel Actions

`hatcher.config.json` dosyanızda projeye özgü Actions tanımlayın:

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

## Action Yürütme

### Bireysel Actions

Belirli Actions'ı talep üzerine çalıştırın:

```bash
# Tek bir action çalıştır
hatcher action run test:unit

# Verbose çıktıyla çalıştır
hatcher action run lint:check --verbose

# Özel parametrelerle çalıştır
hatcher action run coverage:verify --threshold=90
```

### Action Grupları

İlgili Actions'ı birlikte yürütün:

```bash
# Tüm test actions'ları çalıştır
hatcher action run-group testing

# Pre-commit actions'ları çalıştır
hatcher action run-group pre-commit

# Dağıtım doğrulamalarını çalıştır
hatcher action run-group deploy-checks
```

### Action Konfigürasyonu

Konfigürasyonunuzda Action grupları tanımlayın:

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

## Action Sonuçları

Actions yapılandırılmış geri bildirim sağlar:

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

## Autopilot'larla Entegrasyon

Autopilot'lar Actions'ı kalite kontrol noktaları olarak kullanır:

```yaml
# Bir Autopilot iş akışında
name: Feature Implementation
steps:
  - name: Generate code
    action: ai.create

  - name: Quality checkpoint
    action: run.actions
    actions:
      - lint:check # Geçmeli
      - types:validate # Geçmeli
      - test:unit # Geçmeli
    fail_fast: true # İlk hatada dur

  - name: Commit if quality passed
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Action Politikaları

Actions'ın ne zaman zorunlu olduğunu tanımlayın:

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

## En İyi Uygulamalar

### Action Tasarım İlkeleri

1. **Tek Sorumluluk**: Her Action tam olarak bir şeyi doğrular
2. **Hızlı Yürütme**: Actions saniyeler içinde tamamlanmalı, dakikalar değil
3. **Net Hata Mesajları**: Hatalarda eyleme geçirilebilir geri bildirim sağlayın
4. **Deterministik**: Aynı girdi her zaman aynı sonucu üretir
5. **Yan Etkisiz**: Actions doğrular ama değiştirmez

### Performans Optimizasyonu

- **Paralel Yürütme**: Bağımsız Actions'ı eşzamanlı çalıştırın
- **Kademeli Kontroller**: Mümkün olduğunda sadece değişen dosyaları doğrulayın
- **Önbellekleme**: Değişmeyen kod için sonuçları önbelleğe alın
- **Erken Çıkış**: Kritik ihlallerde hızlı başarısız olun

### Hata İşleme

Actions net, eyleme geçirilebilir hata mesajları sağlamalıdır:

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

## Anayasal Yargının Gücü

Actions kod kalitenizin koruyucularıdır—her kod parçasının karşılaması gereken pazarlık edilmez standartlar. Bunlar öneriler veya kılavuzlar değil; kod tabanınızın anayasal yasasıdır.

Doğrulamayı (Actions) uygulamadan (Autopilots) ve stratejiden (Playbooks) ayırarak, Hatcher kod kalitesini sağlamak için net, sürdürülebilir ve ölçeklenebilir bir sistem oluşturur.

Unutmayın: **Actions yaratmaz veya değiştirmez—yargılar. Ve yargıları nihaidir.**

<PageCTA
  title="Standartlarınızı Otomatik Olarak Uygulayın"
  subtitle="Kod kalitenizi koruyan kırılmaz doğrulama kuralları oluşturun"
  buttonText="Actions'ınızı Yapılandırın"
  buttonLink="/tr/getting-started"
  buttonStyle="secondary"
  footer="Uzlaşma yok. İstisna yok. Standartlarınız, uygulandı."
/>
