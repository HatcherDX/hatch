---
title: Système d'Actions | Votre Jugement Constitutionnel
description: Comprenez le système d'Actions de Hatcher - des barrières de qualité déterministes qui valident chaque changement. Le jugement final qui garantit que votre code respecte vos standards constitutionnels.
---

# Hatcher Actions: Votre Jugement Constitutionnel

Les Actions sont les barrières de qualité de l'écosystème Hatcher—les juges constitutionnels qui déterminent si votre code respecte vos standards. Ce ne sont pas des workflows ou des processus; ce sont des validateurs atomiques et déterministes qui répondent à une question simple: **"Réussite ou Échec?"**

## Que Sont les Actions?

Les Actions sont:

- **Validateurs Atomiques**: Vérifications à usage unique qui valident un aspect spécifique
- **Déterministes**: Produisent toujours le même résultat pour la même entrée
- **Binaires**: Retournent seulement "réussite" ou "échec" (avec détails)
- **Rapides**: Conçues pour un retour rapide, pas pour un traitement complexe

Elles sont le point de contrôle final qui garantit que chaque morceau de code respecte la constitution de votre projet.

## Le Rôle dans la Hiérarchie

Comprendre les Actions nécessite de comprendre leur place dans la philosophie Hatcher:

1. **Playbooks** (La Stratégie): Définissent QUELS standards vous voulez appliquer
2. **Autopilots** (Les Tactiques): Exécutent COMMENT implémenter ces standards
3. **Actions** (Le Jugement): Valident SI l'implémentation respecte les standards

```yaml
# Le flux complet
playbook: 'Nous utilisons Vue 3 avec TypeScript'
autopilot: 'Générer un composant Vue 3 avec TypeScript'
actions: 'Exécuter type-check, lint et test pour vérifier la conformité'
```

## Actions Principales

Hatcher fournit des Actions essentielles pour les barrières de qualité universelles:

### Actions de Sécurité de Type

```yaml
actions:
  - name: types:validate
    description: Vérifier la compilation TypeScript
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: Appliquer les règles TypeScript strictes
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### Actions de Qualité de Code

```yaml
actions:
  - name: lint:check
    description: Vérifier que le code respecte les standards de linting
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: Vérifier le formatage du code
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### Actions de Test

```yaml
actions:
  - name: test:unit
    description: Exécuter les tests unitaires
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: Exécuter les tests d'intégration
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: S'assurer que la couverture de test atteint le seuil
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### Actions de Sécurité

```yaml
actions:
  - name: security:audit
    description: Vérifier les vulnérabilités connues
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: S'assurer qu'il n'y a pas de secrets dans le code
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### Actions de Performance

```yaml
actions:
  - name: bundle:size
    description: Vérifier les limites de taille de bundle
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: Vérifier les scores Lighthouse
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## Actions Personnalisées

Définissez des Actions spécifiques au projet dans votre `hatcher.config.json`:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "Valider les contrats API",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "Vérifier les migrations de base de données",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "Vérifier la complétude des traductions",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## Exécution des Actions

### Actions Individuelles

Exécutez des Actions spécifiques à la demande:

```bash
# Exécuter une seule action
hatcher action run test:unit

# Exécuter avec sortie détaillée
hatcher action run lint:check --verbose

# Exécuter avec paramètres personnalisés
hatcher action run coverage:verify --threshold=90
```

### Groupes d'Actions

Exécutez des Actions liées ensemble:

```bash
# Exécuter toutes les actions de test
hatcher action run-group testing

# Exécuter les actions pre-commit
hatcher action run-group pre-commit

# Exécuter les validations de déploiement
hatcher action run-group deploy-checks
```

### Configuration des Actions

Définissez des groupes d'Actions dans votre configuration:

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

## Résultats des Actions

Les Actions fournissent un retour structuré:

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
  "suggestion": "Corriger les tests échoués avant de commiter"
}
```

## Intégration avec Autopilots

Les Autopilots utilisent les Actions comme points de contrôle qualité:

```yaml
# Dans un workflow Autopilot
name: Implémentation de Fonctionnalité
steps:
  - name: Générer le code
    action: ai.create

  - name: Point de contrôle qualité
    action: run.actions
    actions:
      - lint:check # Doit réussir
      - types:validate # Doit réussir
      - test:unit # Doit réussir
    fail_fast: true # Arrêter au premier échec

  - name: Commiter si la qualité est validée
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Politiques d'Actions

Définissez quand les Actions sont obligatoires:

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

## Meilleures Pratiques

### Principes de Conception des Actions

1. **Responsabilité Unique**: Chaque Action valide exactement une chose
2. **Exécution Rapide**: Les Actions devraient se terminer en secondes, pas en minutes
3. **Messages d'Échec Clairs**: Fournir un retour actionnable sur les échecs
4. **Déterministe**: La même entrée produit toujours le même résultat
5. **Pas d'Effets Secondaires**: Les Actions valident mais ne modifient pas

### Optimisation de Performance

- **Exécution Parallèle**: Exécuter les Actions indépendantes simultanément
- **Vérifications Incrémentales**: Valider uniquement les fichiers modifiés quand possible
- **Mise en Cache**: Mettre en cache les résultats pour le code inchangé
- **Sortie Précoce**: Échouer rapidement sur les violations critiques

### Gestion des Erreurs

Les Actions devraient fournir des messages d'erreur clairs et actionnables:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "Problèmes de qualité de code détectés",
  "fixes": {
    "automatic": "Exécutez 'npm run lint:fix' pour corriger automatiquement 12 problèmes",
    "manual": "3 problèmes nécessitent une intervention manuelle",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' est défini mais jamais utilisé"
      }
    ]
  }
}
```

## Le Pouvoir du Jugement Constitutionnel

Les Actions sont les gardiennes de la qualité de votre code—les standards non-négociables que chaque morceau de code doit respecter. Ce ne sont pas des suggestions ou des directives; ce sont la loi constitutionnelle de votre base de code.

En séparant la validation (Actions) de l'implémentation (Autopilots) et de la stratégie (Playbooks), Hatcher crée un système clair, maintenable et évolutif pour garantir la qualité du code.

Rappelez-vous: **Les Actions ne créent ni ne modifient—elles jugent. Et leur jugement est final.**

<PageCTA
  title="Appliquez Vos Standards Automatiquement"
  subtitle="Créez des règles de validation inviolables qui protègent la qualité de votre code"
  buttonText="Configurez Vos Actions"
  buttonLink="/getting-started"
  buttonStyle="secondary"
  footer="Aucun compromis. Aucune exception. Vos standards, appliqués."
/>
