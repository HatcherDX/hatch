---
title: Moteurs IA | Intégrez Claude Code, Gemini CLI et Plus avec Hatcher
description: Configurez et intégrez plusieurs assistants de codage IA avec Hatcher IDE. Support pour Claude Code, Gemini CLI et autres moteurs IA pour des workflows de développement flexibles et puissants.
---

# Moteurs IA

Hatcher s'intègre avec plusieurs assistants de codage IA pour offrir flexibilité et exploiter les forces uniques de différents modèles.

## Moteurs Supportés

### Claude Code

Claude d'Anthropic est notre moteur IA principal, optimisé pour:

- **Compréhension du Code**: Excellente compréhension des bases de code existantes
- **Reconnaissance de Patterns**: Maintient la cohérence avec les conventions du projet
- **Refactoring Sûr**: Approche conservatrice des modifications de code
- **Conscience du Contexte**: Gère efficacement les grandes bases de code

**Configuration:**

```json
{
  "engine": "claude",
  "model": "claude-3-sonnet",
  "maxTokens": 4096,
  "temperature": 0.1
}
```

### Gemini CLI

Gemini de Google fournit des capacités complémentaires:

- **Solutions Créatives**: Approches alternatives aux problèmes complexes
- **Optimisation de Performance**: Focus sur la génération de code efficace
- **Support Multi-langage**: Support solide pour diverses piles technologiques
- **Itération Rapide**: Temps de réponse rapides pour les modifications rapides

**Configuration:**

```json
{
  "engine": "gemini",
  "model": "gemini-pro",
  "maxTokens": 2048,
  "temperature": 0.2
}
```

## Stratégie de Sélection de Moteur

Hatcher sélectionne automatiquement le meilleur moteur en fonction de la tâche:

### Tâches de Génération de Code

- **Nouveaux Composants**: Claude pour la structure, Gemini pour la créativité
- **Corrections de Bugs**: Claude pour une analyse minutieuse
- **Performance**: Gemini pour les suggestions d'optimisation

### Considérations de Contexte

- **Grandes Bases de Code**: Gestion de contexte supérieure de Claude
- **Prototypage Rapide**: Avantage de vitesse de Gemini
- **Refactoring Complexe**: Approche conservatrice de Claude

## Configuration

### Paramètres Globaux

Définissez votre moteur par défaut préféré:

```json
{
  "defaultEngine": "claude",
  "fallbackEngine": "gemini",
  "autoSwitch": true
}
```

### Remplacements Spécifiques au Projet

Remplacez les moteurs pour des projets spécifiques:

```json
{
  "engines": {
    "vue": "claude",
    "optimization": "gemini",
    "testing": "claude"
  }
}
```

## Configuration des Clés API

### Clé API Claude

1. Visitez [Anthropic Console](https://console.anthropic.com)
2. Générez une nouvelle clé API
3. Ajoutez aux paramètres Hatcher ou variable d'environnement:
   ```bash
   export ANTHROPIC_API_KEY="your-key-here"
   ```

### Clé API Gemini

1. Visitez [Google AI Studio](https://aistudio.google.com)
2. Créez une nouvelle clé API
3. Configurez dans Hatcher:
   ```bash
   export GOOGLE_AI_API_KEY="your-key-here"
   ```

## Comparaison des Moteurs

| Fonctionnalité | Claude     | Gemini     |
| -------------- | ---------- | ---------- |
| Qualité Code   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |
| Vitesse        | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| Taille Contexte| ⭐⭐⭐⭐⭐ | ⭐⭐⭐     |
| Créativité     | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| Sécurité       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |

## Moteurs Futurs

Nous travaillons activement sur le support pour:

- **GitHub Copilot**: Intégration directe avec les workflows VS Code
- **OpenAI GPT-4**: Assistance de codage généraliste
- **Modèles Locaux**: Options auto-hébergées pour les équipes soucieuses de la confidentialité
- **Moteurs Personnalisés**: Système de plugins pour outils IA propriétaires

## Meilleures Pratiques

### Ingénierie de Prompts

Hatcher optimise automatiquement les prompts pour chaque moteur:

- **Claude**: Contexte détaillé et instructions explicites
- **Gemini**: Prompts concis avec objectifs clairs

### Gestion des Erreurs

Systèmes de repli robustes garantissant la continuité:

- **Moteur Principal Hors Service**: Basculement automatique vers le repli
- **Limitation de Débit**: Mise en file d'attente intelligente des requêtes
- **Problèmes Réseau**: Mise en cache locale des patterns courants

### Optimisation des Coûts

- **Gestion des Tokens**: Compression efficace du contexte
- **Regroupement de Requêtes**: Combinez plusieurs petits changements
- **Mise en Cache**: Réutilisez les résultats de génération de code similaires
