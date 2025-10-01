---
title: Le Système Autopilots | Orchestration Intelligente du Développement
description: Maîtrisez le système Autopilots de Hatcher - des workflows d'automatisation puissants qui exécutent des tâches de développement complexes avec l'assistance de l'IA. Transformez les tâches répétitives en recettes intelligentes et réutilisables.
---

# Le Système Autopilots

Le système Autopilots est le cadre d'automatisation tactique de Hatcher qui transforme les workflows de développement complexes en recettes intelligentes et exécutables. Là où les Playbooks définissent la stratégie (normes et modèles), les Autopilots sont les tactiques qui automatisent l'implémentation de ces modèles avec une intelligence alimentée par l'IA.

## Que sont les Autopilots ?

Les Autopilots sont des workflows structurés qui combinent :

- **Automatisation des Tâches** : Processus multi-étapes exécutés avec précision
- **Intelligence IA** : Décisions contextuelles pendant l'exécution
- **Intégration d'Outils** : Interaction fluide avec les outils de développement
- **Gestion des Erreurs** : Récupération intelligente des problèmes courants

Ce sont les "recettes" qui savent COMMENT atteindre ce que vos Playbooks déclarent que vous VOULEZ atteindre.

## Structure d'un Autopilot

Un Autopilot basique suit cette structure :

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

## Autopilots Intégrés

Hatcher est livré avec des Autopilots puissants pour les modèles de développement courants :

### Autopilots de Composants

- **Create Component** : Générer des composants complets avec tests
- **Extract Component** : Refactoriser le code en composants réutilisables
- **Update Props** : Modifier les interfaces de composants en toute sécurité

### Autopilots de Refactoring

- **Extract Function** : Extraire la logique vers des fonctions utilitaires
- **Rename Symbol** : Renommer en toute sécurité dans toute la base de code
- **Move Module** : Déplacer le code avec mise à jour des imports

### Autopilots de Tests

- **Generate Tests** : Créer des suites de tests à partir de l'implémentation
- **Update Snapshots** : Actualiser les snapshots de tests intelligemment
- **Coverage Report** : Analyser et améliorer la couverture de tests

### Autopilots de Documentation

- **Generate JSDoc** : Ajouter de la documentation à partir de l'analyse du code
- **Update README** : Maintenir la documentation synchronisée
- **API Documentation** : Générer la documentation API à partir du code

## Créer des Autopilots Personnalisés

### Autopilots de Workflow Basiques

Créez des Autopilots pour les workflows spécifiques de votre équipe :

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

### Autopilots Améliorés par l'IA

Exploitez l'IA pour une exécution de tâches intelligente :

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

## Déclencheurs d'Autopilot

### Exécution Manuelle

Exécutez les Autopilots à la demande :

```bash
hatcher run create-component --name UserProfile
```

### Déclencheurs de Surveillance de Fichiers

Exécutez les Autopilots lors de changements de fichiers :

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

### Intégration de Hooks Git

Automatisez les Autopilots avec les workflows Git :

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

## Composition d'Autopilots

### Autopilots Séquentiels

Enchaînez les Autopilots pour des workflows complexes :

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

### Autopilots Parallèles

Exécutez des tâches indépendantes simultanément :

```yaml
name: Project Setup
parallel: true
steps:
  - action: npm.install
  - action: generate.types
  - action: setup.environment
```

### Autopilots Conditionnels

Ajoutez de la logique à vos workflows :

```yaml
steps:
  - name: Check TypeScript
    action: config.check
    key: useTypeScript

  - name: Generate types
    condition: ${steps.checkTypeScript.result}
    action: typescript.generate
```

## Gestion des Erreurs

### Logique de Réessai

Gérez les échecs transitoires avec élégance :

```yaml
steps:
  - name: API Setup
    action: api.initialize
    retry:
      attempts: 3
      delay: 1000
      backoff: exponential
```

### Autopilots de Secours

Fournissez des chemins alternatifs :

```yaml
steps:
  - name: Use npm
    action: npm.install
    fallback:
      - action: yarn.install
      - action: pnpm.install
```

### Récupération d'Erreurs

Nettoyez en cas d'échec :

```yaml
steps:
  - name: Database migration
    action: db.migrate
    onError:
      - action: db.rollback
      - action: notify.team
        message: Migration failed
```

## Marketplace d'Autopilots

### Autopilots Communautaires

Parcourez et installez des Autopilots de la communauté :

- **Spécifiques aux Frameworks** : Optimisés pour React, Vue, Angular
- **Intégrations d'Outils** : Docker, Kubernetes, CI/CD
- **Spécifiques au Domaine** : E-commerce, SaaS, Mobile

### Publication d'Autopilots

Partagez vos Autopilots avec la communauté :

```bash
hatcher autopilot publish my-awesome-workflow
```

### Versioning d'Autopilots

- **Versioning Sémantique** : Suivre la compatibilité
- **Gestion des Dépendances** : Gérer les dépendances d'Autopilots
- **Notifications de Mise à Jour** : Restez à jour avec les améliorations

## Configuration

### Autopilots Globaux

Configurez les Autopilots par défaut pour tous les projets :

```json
{
  "globalAutopilots": [
    "code-formatter",
    "commit-validator",
    "dependency-checker"
  ]
}
```

### Autopilots de Projet

Définissez des Autopilots spécifiques au projet dans `hatcher.config.json` :

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

## Bonnes Pratiques

### Conception d'Autopilot

- **Responsabilité Unique** : Chaque Autopilot doit orchestrer un workflow de manière excellente
- **Idempotent** : Les Autopilots doivent être sûrs à exécuter plusieurs fois
- **Composables** : Concevez des Autopilots pour travailler ensemble
- **Documentés** : Descriptions et exemples clairs

### Performance

- **Mettre en Cache les Résultats** : Éviter les opérations redondantes
- **Exécution Parallèle** : Utiliser le parallélisme lorsque possible
- **Amélioration Progressive** : Commencer simple, ajouter de la complexité au besoin

### Sécurité

- **Validation des Entrées** : Vérifier toutes les entrées avant l'exécution
- **Exécution Sandbox** : Exécuter les Autopilots non fiables en toute sécurité
- **Journal d'Audit** : Suivre toutes les exécutions d'Autopilots

## Intégration avec Playbooks et Actions

Les Autopilots orchestrent entre les Playbooks (stratégie) et les Actions (validation) :

```yaml
name: Implement Feature
playbooks:
  - vue3-typescript # Les normes à suivre
  - team-standards # Les modèles à utiliser

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
      - test:unit # Vérifier que les tests passent
      - lint:check # Vérifier la qualité du code
      - coverage:verify # Vérifier la couverture de tests
```

## Surveillance et Analytiques

### Suivi d'Exécution

Surveillez la performance des Autopilots :

- **Temps d'Exécution** : Suivre la durée et les goulots d'étranglement
- **Taux de Réussite** : Surveiller la fiabilité
- **Modèles d'Usage** : Comprendre les workflows de l'équipe

### Suggestions d'Optimisation

Insights alimentés par l'IA :

- **Améliorations de Workflow** : Suggérer de meilleures séquences d'Autopilots
- **Conseils de Performance** : Identifier les opportunités d'optimisation
- **Détection de Modèles** : Découvrir les opportunités d'automatisation

## Fonctionnalités Futures

### Constructeur Visuel d'Autopilots

Interface glisser-déposer pour créer des workflows complexes sans code.

### Génération d'Autopilots par l'IA

Générer automatiquement des Autopilots en observant les modèles de développeurs.

### Exécution Distribuée

Exécuter des Autopilots sur plusieurs machines pour un parallélisme massif.

### Débogage par Voyage Temporel

Parcourir l'historique d'exécution des Autopilots pour déboguer des workflows complexes.

## La Puissance de l'Automatisation Tactique

Le système Autopilots transforme les tâches de développement répétitives en workflows intelligents et automatisés qui apprennent et s'améliorent avec le temps. C'est la couche tactique qui comble le fossé entre les Playbooks stratégiques et les Actions validantes, créant un écosystème d'automatisation complet qui respecte vos normes tout en accélérant votre développement.

Rappelez-vous : **Les Playbooks définissent QUOI, les Autopilots exécutent COMMENT, les Actions valident SI.**

<PageCTA
  title="Déployez Votre Premier Autopilot"
  subtitle="Automatisez des workflows complexes avec des agents IA intelligents et auto-améliorants"
  buttonText="Lancer le Système Autopilots"
  buttonLink="/autopilots"
  buttonStyle="secondary"
  footer="De la répétition à l'automatisation. Du manuel au magique."
/>
