---
title: Contribuer | Rejoignez la Communauté Open Source Hatcher
description: Découvrez comment contribuer à Hatcher IDE, la plateforme de développement IA open-source. Trouvez des guides de configuration, des standards de codage et des directives communautaires pour contribuer aux outils de développement IA contrôlée.
---

# Contribuer à Hatcher

Merci de votre intérêt à contribuer à Hatcher! Vous rejoignez un mouvement pour construire l'avenir du développement logiciel à l'ère de l'IA—un futur où les développeurs maintiennent un contrôle absolu tout en exploitant la puissance de l'amplification IA. Ce guide fournit les étapes pratiques pour commencer, mais si vous ne l'avez pas déjà fait, nous recommandons de lire notre [**Philosophie**](/fr/philosophy) pour comprendre le "pourquoi" derrière notre travail.

En contribuant à Hatcher, vous n'écrivez pas simplement du code—vous aidez à définir comment l'humanité construira des logiciels à l'ère de l'IA. Chaque contribution, qu'il s'agisse d'une correction de bug, d'une fonctionnalité ou d'une amélioration de la documentation, fait avancer notre mission d'Amplification Contrôlée.

## Code de Conduite

En participant à ce projet, vous acceptez de respecter notre [Code de Conduite](CODE_OF_CONDUCT.md). Veuillez le lire avant de contribuer.

## Premiers Pas

### Configuration de Développement

1. **Fork et Clone**

   ```bash
   git clone https://github.com/your-username/dx-engine.git
   cd dx-engine
   ```

2. **Installer les Dépendances**

   ```bash
   pnpm install
   ```

3. **Démarrer le Serveur de Développement**
   ```bash
   pnpm dev
   ```

### Structure du Projet

```
dx-engine/
├── apps/                           # Packages d'application
│   ├── electron/                   # Processus principal Electron
│   ├── web/                       # Processus de rendu (Vue 3 + TypeScript)
│   ├── preload/                   # Scripts de préchargement pour Electron
│   └── docs/                      # Site de documentation VitePress
├── universal/                      # Bibliothèques et systèmes partagés
│   ├── terminal-system/           # Émulation et gestion du terminal
│   ├── storage/                   # Couche d'abstraction de stockage
│   ├── git-genius/               # Opérations Git et chronologie
│   ├── shared-rendering/         # Utilitaires de rendu partagés
│   └── shared-utils/             # Utilitaires communs
├── tooling/                       # Outils de développement et de build
│   ├── vite-plugin/              # Plugins Vite personnalisés
│   ├── translation-system/       # Outils i18n et de traduction
│   └── puppeteer-google-translate/ # Traduction automatisée
├── scripts/                       # Scripts de build, test et utilitaires
├── brand/                         # Actifs de marque (logos, icônes, etc.)
└── types/                         # Définitions de types TypeScript partagées
```

## Façons de Contribuer

### Signaler des Bugs

Lors du signalement de bugs, veuillez inclure:

- **Description Claire**: Ce qui s'est passé vs. ce que vous attendiez
- **Étapes pour Reproduire**: Étapes détaillées pour recréer le problème
- **Environnement**: OS, version Node.js, version pnpm
- **Captures d'écran**: Si applicable, incluez des preuves visuelles

Utilisez notre [modèle de rapport de bug](.github/ISSUE_TEMPLATE/bug_report.md) lors de la création d'issues.

### Demandes de Fonctionnalités

Nous accueillons les demandes de fonctionnalités! Veuillez inclure:

- **Cas d'Usage**: Pourquoi cette fonctionnalité est-elle nécessaire?
- **Solution Proposée**: Comment devrait-elle fonctionner?
- **Alternatives**: Quelles autres approches avez-vous considérées?

Utilisez notre [modèle de demande de fonctionnalité](.github/ISSUE_TEMPLATE/feature_request.md).

### Contributions de Code

#### Avant de Commencer

1. **Vérifier les Issues Existantes**: Recherchez des issues ou demandes de fonctionnalités liées
2. **Discuter des Changements Majeurs**: Ouvrez une issue pour discuter des changements significatifs
3. **Commencer Petit**: Commencez par des contributions petites et ciblées

#### Workflow de Développement

1. **Créer une Branche**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Faire des Changements**
   - Suivez nos standards de codage (voir ci-dessous)
   - Écrivez des tests pour les nouvelles fonctionnalités
   - Mettez à jour la documentation si nécessaire

3. **Tester vos Changements**

   ```bash
   pnpm build
   pnpm test
   ```

4. **Committer vos Changements**

   ```bash
   git commit -m "feat: add amazing new feature"
   ```

   Nous suivons le format [Conventional Commits](https://conventionalcommits.org/).

5. **Pousser et Créer une PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Standards de Codage

Hatcher suit des standards de codage stricts pour garantir la cohérence, la maintenabilité et un code de haute qualité dans l'ensemble du projet.

**📋 [Guide Complet des Standards de Codage](./coding-standards.md)**

### Référence Rapide

**TypeScript**

- Utilisez TypeScript pour tout nouveau code avec le mode strict activé
- Préférez les interfaces aux types pour les formes d'objets
- Utilisez des noms significatifs et descriptifs pour les variables et fonctions
- Incluez des commentaires JSDoc pour toutes les API publiques

**Vue.js**

- Utilisez la Composition API avec la syntaxe `<script setup>`
- Définissez les props et emits avec des interfaces TypeScript
- Préférez les composables pour la logique réutilisable
- Suivez la structure de composant monofichier: script → template → style

**Stylisation**

- Utilisez des styles scopés pour les CSS spécifiques aux composants
- Suivez la méthodologie BEM pour le nommage des classes
- Utilisez des propriétés personnalisées CSS pour le thème
- Préférez flexbox et CSS Grid pour les mises en page

**Conventions Git**

- Suivez le format [Conventional Commits](https://conventionalcommits.org/)
- Utilisez des noms de branches descriptifs: `feature/`, `fix/`, `docs/`, `refactor/`
- Gardez les commits atomiques et centrés sur un seul changement

### Outils de Qualité du Code

Nous utilisons des outils automatisés pour appliquer les standards:

```bash
# Linter et corriger les problèmes de style de code
pnpm lint:fix

# Vérification de types
pnpm typecheck

# Exécuter tous les tests
pnpm test

# Formater le code
pnpm format
```

### Hooks Pre-commit

Husky exécute des vérifications automatiques avant chaque commit:

- ESLint pour la qualité du code
- Compilation TypeScript
- Prettier pour le formatage
- Tests unitaires pour les chemins critiques

Pour des directives détaillées, des exemples et des meilleures pratiques, consultez notre documentation [Standards de Codage](./coding-standards.md).

## Documentation

### Types de Documentation

- **Commentaires de Code**: Expliquez la logique complexe
- **Fichiers README**: Aperçu et instructions de configuration
- **Documentation API**: Documentez les interfaces publiques
- **Guides Utilisateur**: Guides pratiques pour les utilisateurs finaux

### Directives de Rédaction

- Utilisez un langage clair et concis
- Incluez des exemples de code
- Gardez la documentation à jour avec les changements de code
- Testez tous les exemples de code

## Processus de Pull Request

### Avant de Soumettre

- [ ] Le code suit les standards du projet
- [ ] Les tests passent localement
- [ ] La documentation est mise à jour
- [ ] Les changements sont ciblés et atomiques

### Modèle de Description de PR

```markdown
## Description

Brève description des changements

## Type de Changement

- [ ] Correction de bug
- [ ] Nouvelle fonctionnalité
- [ ] Changement cassant
- [ ] Mise à jour de documentation

## Tests

- [ ] Tests unitaires ajoutés/mis à jour
- [ ] Tests d'intégration ajoutés/mis à jour
- [ ] Tests manuels complétés

## Captures d'écran (si applicable)

Incluez des captures d'écran avant/après pour les changements UI
```

### Processus de Révision

1. **Vérifications Automatisées**: Le CI/CD doit passer
2. **Révision de Code**: Au moins une révision de mainteneur
3. **Tests**: Les changements sont testés dans l'environnement de développement
4. **Documentation**: Vérifier que les docs sont mises à jour
5. **Merge**: Squash et merge des PRs approuvées

## Processus de Release

### Versioning

Nous suivons le [Versioning Sémantique](https://semver.org/):

- **MAJOR**: Changements cassants
- **MINOR**: Nouvelles fonctionnalités (rétrocompatibles)
- **PATCH**: Corrections de bugs (rétrocompatibles)

### Workflow de Release

1. **Gel des Fonctionnalités**: Arrêter d'accepter de nouvelles fonctionnalités
2. **Tests**: Phase de tests complète
3. **Documentation**: Mettre à jour le changelog et les docs
4. **Release**: Créer une release taguée
5. **Annonce**: Communiquer les changements à la communauté

## Communauté

### Canaux de Communication

- **GitHub Issues**: Rapports de bugs et demandes de fonctionnalités
- **GitHub Discussions**: Questions générales et idées
- **Discord**: Chat en temps réel avec la communauté
- **Twitter**: Suivez [@HatcherDX](https://twitter.com/HatcherDX) pour les mises à jour

### Directives Communautaires

- **Soyez Respectueux**: Traitez tout le monde avec respect
- **Soyez Constructif**: Concentrez-vous sur les solutions, pas les problèmes
- **Soyez Patient**: Rappelez-vous que nous sommes tous bénévoles
- **Soyez Utile**: Partagez les connaissances et aidez les autres

## Reconnaissance

Nous apprécions toutes les contributions! Les contributeurs sont reconnus dans:

- **CONTRIBUTORS.md**: Liste de tous les contributeurs du projet
- **Notes de Release**: Contributions majeures mises en évidence
- **Réseaux Sociaux**: Mise en avant des contributions communautaires

## Ressources de Développement

### Liens Utiles

- [Documentation Vue.js](https://vuejs.org/)
- [Documentation Electron](https://electronjs.org/)
- [Manuel TypeScript](https://typescriptlang.org/)
- [Documentation Vite](https://vitejs.dev/)

### Outils de Développement

- **VS Code**: Éditeur recommandé avec extensions Vue et TypeScript
- **Vue DevTools**: Extension de navigateur pour déboguer les applications Vue
- **Electron DevTools**: Outils de débogage intégrés

## Questions?

Si vous avez des questions sur la contribution:

1. Vérifiez les [GitHub Discussions](https://github.com/HatcherDX/dx-engine/discussions) existantes
2. Rejoignez notre [communauté Discord](https://discord.gg/hatcher)
3. Créez une nouvelle discussion ou issue

Merci de contribuer à Hatcher! Ensemble, nous construisons l'avenir du développement assisté par IA.

<PageCTA
  title="Prêt à Laisser Votre Marque?"
  subtitle="Rejoignez la communauté qui construit l'IDE Constitutionnel pour l'ère de l'IA"
  buttonText="Commencer à Contribuer"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
  buttonStyle="secondary"
  footer="Chaque contribution façonne l'avenir du développement"
/>
