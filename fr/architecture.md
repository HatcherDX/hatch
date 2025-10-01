---
title: Architecture | Les Quatre Piliers de Hatcher
description: Explorez l'architecture technique de Hatcher, une implémentation directe de nos Quatre Piliers. Découvrez comment nous avons construit un IDE déterministe, agnostique aux modèles et centré sur le développeur.
---

# Architecture Hatcher

L'architecture de Hatcher est une traduction directe de nos **Quatre Piliers** en code. Chaque choix est une étape délibérée vers un environnement de développement déterministe, puissant, et qui maintient le commandant humain en contrôle absolu.

Notre ingénierie est guidée par une question: **Est-ce que cela sert les piliers?**

## Les Quatre Piliers: Notre Fondation Architecturale

Au lieu de principes abstraits, notre architecture est construite sur quatre piliers concrets et porteurs. Ils sont le système.

### <DocIcon type="constitutional" inline /> Ingénierie Constitutionnelle

C'est la couche de gouvernance. Elle est alimentée par le **Système Playbooks** (un moteur de contexte dynamique) et appliquée par **Hatcher Actions**. Chaque opération, surtout de l'IA, est validée contre cette constitution définie par l'utilisateur. Ce pilier permet au **Système Autopilots** d'exécuter avec confiance tout en respectant vos règles.

### <DocIcon type="time-graph" inline /> Le Time Graph

C'est la couche de sécurité et d'auditabilité. Elle est alimentée par un **moteur Git personnalisé et haute performance** conçu pour les changements granulaires et haute fréquence du développement IA. Elle fournit l'historique immuable qui alimente **The Time Graph HAT** et les journaux auditables pour chaque mission Autopilot.

### <DocIcon type="ai-command" inline /> IA Sous Commandement

C'est la couche d'orchestration. Elle agit comme un plan de contrôle agnostique aux modèles, gérant une **flotte de modèles IA** (comme Claude et Gemini). Elle traduit l'intention humaine en opérations IA précises et liées constitutionnellement. Ce pilier alimente le **Gen HAT** et le **Code HAT**, vous donnant le commandement sur plusieurs agents IA.

### <DocIcon type="universal-fabricator" inline /> Le Fabricateur Universel

C'est la couche d'exécution et de modernisation. Elle utilise **WebAssembly** pour exécuter des **Hatcher Functions** polyglottes (Delphi, C++, Rust, etc.) à l'intérieur de l'environnement sécurisé et déterministe d'un **EGG** Hatcher (Enforced Governance Guardrails). Cela permet au code legacy de s'exécuter partout tout en respectant les standards modernes.

## Stack Technologique & Vision

Nos choix technologiques sont pragmatiques et tournés vers l'avenir, équilibrant le besoin d'innovation rapide avec un engagement à long terme envers la performance et la sécurité.

| Composant         | Technologie               | Pourquoi Nous L'avons Choisi                                                                                                                        |
| :---------------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop Shell** | **Electron (Actuel)**     | Fournit une fondation robuste et éprouvée au combat pour le développement multiplateforme rapide, nous permettant de nous concentrer sur notre valeur ajoutée. |
| **UI Framework**  | **Vue.js 3 + TypeScript** | Son Composition API et sa sécurité de type sont idéales pour l'interface complexe et avec état d'un IDE professionnel.                              |
| **Core (Vision)** | **Tauri + Rust**          | Notre vision à long terme est de forger le noyau de Hatcher en Rust pour sa performance inégalée, sa sécurité mémoire et ses garanties de sécurité. |

Ce "Chemin vers Rust" est central à notre promesse. Nous construisons le futur sur un prototype éprouvé, avec un plan architectural clair qui priorise les plus hauts standards d'excellence en ingénierie.

## Sécurité & Confidentialité par Conception

La sécurité n'est pas une fonctionnalité; c'est un prérequis architectural.

- **Local d'Abord par Défaut:** Votre code source et historique vivent sur votre machine. Rien n'est envoyé à un service cloud sans votre action explicite, comme l'activation de la synchronisation d'équipe pour le journal d'audit immuable.

- **Zéro Stockage de Code:** Nos services cloud (pour les fonctionnalités d'équipe comme Playbooks) **ne stockent pas une copie complète de votre dépôt**. Nous stockons uniquement les données de gouvernance nécessaires (comme Playbooks et entrées de journal d'audit), jamais votre base de code entière au repos.

- **Exécution Sandboxée:** Les Hatcher Functions s'exécutent dans un sandbox WebAssembly sécurisé sans accès à votre système par défaut.

- **Opérations Transparentes:** Le Time Graph et le Human Firewall garantissent que vous avez un enregistrement clair et auditable de chaque action et le dernier mot sur chaque changement.

<PageCTA
  title="Prêt à Approfondir?"
  subtitle="Explorez comment notre architecture permet la prochaine génération de développement assisté par IA"
  buttonText="Lire la Philosophie"
  buttonLink="/philosophy"
  buttonStyle="secondary"
  footer="Construit avec la sécurité, la confidentialité et le contrôle du développeur en son cœur"
/>
