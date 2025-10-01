---
title: Actions System | Ihr Konstitutionelles Urteil
description: Verstehen Sie Hatchers Actions-System - deterministische Quality Gates, die jede Änderung validieren. Das finale Urteil, das sicherstellt, dass Ihr Code Ihren konstitutionellen Standards entspricht.
---

# Hatcher Actions: Ihr Konstitutionelles Urteil

Actions sind die Quality Gates des Hatcher-Ökosystems—die konstitutionellen Richter, die bestimmen, ob Ihr Code Ihren Standards entspricht. Sie sind keine Workflows oder Prozesse; sie sind atomare, deterministische Validatoren, die eine einfache Frage beantworten: **"Bestanden oder Durchgefallen?"**

## Was Sind Actions?

Actions sind:

- **Atomare Validatoren**: Einzelzweck-Prüfungen, die einen spezifischen Aspekt validieren
- **Deterministisch**: Erzeugen immer das gleiche Ergebnis für die gleiche Eingabe
- **Binär**: Geben nur "bestanden" oder "durchgefallen" zurück (mit Details)
- **Schnell**: Konzipiert für schnelles Feedback, nicht für komplexe Verarbeitung

Sie sind der finale Checkpoint, der sicherstellt, dass jedes Code-Stück die Verfassung Ihres Projekts respektiert.

## Die Rolle in der Hierarchie

Das Verständnis von Actions erfordert das Verständnis ihrer Rolle in der Hatcher-Philosophie:

1. **Playbooks** (Die Strategie): Definieren WAS für Standards Sie durchsetzen möchten
2. **Autopilots** (Die Taktik): Führen aus WIE diese Standards implementiert werden
3. **Actions** (Das Urteil): Validieren OB die Implementierung den Standards entspricht

```yaml
# Der vollständige Ablauf
playbook: 'Wir verwenden Vue 3 mit TypeScript'
autopilot: 'Generiere eine Vue 3 Komponente mit TypeScript'
actions: 'Führe Type-Check, Lint und Test aus, um Korrektheit zu verifizieren'
```

## Kern-Actions

Hatcher bietet essentielle Actions für universelle Quality Gates:

### Typsicherheits-Actions

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

### Code-Qualitäts-Actions

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

### Test-Actions

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

### Sicherheits-Actions

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

### Performance-Actions

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

## Benutzerdefinierte Actions

Definieren Sie projektspezifische Actions in Ihrer `hatcher.config.json`:

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

## Action-Ausführung

### Einzelne Actions

Führen Sie spezifische Actions auf Anfrage aus:

```bash
# Eine einzelne Action ausführen
hatcher action run test:unit

# Mit ausführlicher Ausgabe ausführen
hatcher action run lint:check --verbose

# Mit benutzerdefinierten Parametern ausführen
hatcher action run coverage:verify --threshold=90
```

### Action-Gruppen

Führen Sie verwandte Actions zusammen aus:

```bash
# Alle Test-Actions ausführen
hatcher action run-group testing

# Pre-Commit-Actions ausführen
hatcher action run-group pre-commit

# Deployment-Validierungen ausführen
hatcher action run-group deploy-checks
```

### Action-Konfiguration

Definieren Sie Action-Gruppen in Ihrer Konfiguration:

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

## Action-Ergebnisse

Actions liefern strukturiertes Feedback:

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

## Integration mit Autopilots

Autopilots verwenden Actions als Qualitäts-Checkpoints:

```yaml
# In einem Autopilot-Workflow
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

## Action-Richtlinien

Definieren Sie, wann Actions obligatorisch sind:

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

## Best Practices

### Action-Design-Prinzipien

1. **Einzelverantwortung**: Jede Action validiert genau eine Sache
2. **Schnelle Ausführung**: Actions sollten in Sekunden abgeschlossen sein, nicht in Minuten
3. **Klare Fehlermeldungen**: Bieten Sie umsetzbares Feedback bei Fehlern
4. **Deterministisch**: Gleiche Eingabe erzeugt immer gleiches Ergebnis
5. **Keine Seiteneffekte**: Actions validieren, aber ändern nicht

### Performance-Optimierung

- **Parallele Ausführung**: Führen Sie unabhängige Actions gleichzeitig aus
- **Inkrementelle Prüfungen**: Validieren Sie nur geänderte Dateien, wenn möglich
- **Caching**: Cachen Sie Ergebnisse für unveränderten Code
- **Früher Abbruch**: Schlagen Sie schnell bei kritischen Verstößen fehl

### Fehlerbehandlung

Actions sollten klare, umsetzbare Fehlermeldungen liefern:

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

## Die Macht des Konstitutionellen Urteils

Actions sind die Wächter Ihrer Code-Qualität—die nicht verhandelbaren Standards, die jedes Code-Stück erfüllen muss. Sie sind keine Vorschläge oder Richtlinien; sie sind das konstitutionelle Gesetz Ihrer Codebasis.

Durch die Trennung von Validierung (Actions) von Implementierung (Autopilots) und Strategie (Playbooks) schafft Hatcher ein klares, wartbares und skalierbares System zur Sicherstellung der Code-Qualität.

Denken Sie daran: **Actions erstellen oder ändern nicht—sie urteilen. Und ihr Urteil ist endgültig.**

<PageCTA
  title="Setzen Sie Ihre Standards Automatisch Durch"
  subtitle="Erstellen Sie unzerbrechliche Validierungsregeln, die Ihre Code-Qualität schützen"
  buttonText="Konfigurieren Sie Ihre Actions"
  buttonLink="/de/getting-started"
  buttonStyle="secondary"
  footer="Kein Kompromiss. Keine Ausnahmen. Ihre Standards, durchgesetzt."
/>
