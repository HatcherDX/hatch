---
title: Architecture | The Four Pillars of Hatcher
description: Explore Hatcher's technical architecture, a direct implementation of our Four Pillars. Learn how we built a deterministic, model-agnostic, and developer-centric IDE.
---

# Hatcher Architecture

The architecture of Hatcher is a direct translation of our **Four Pillars** into code. Every choice is a deliberate step towards a development environment that is deterministic, powerful, and keeps the human commander in absolute control.

Our engineering is guided by one question: **Does this serve the pillars?**

## The Four Pillars: Our Architectural Foundation

Instead of abstract principles, our architecture is built on four concrete, load-bearing pillars. They are the system.

### <DocIcon type="constitutional" inline /> Constitutional Engineering

This is the governance layer. It is powered by the **Playbooks System** (a dynamic context engine) and enforced by **Hatcher Actions**. Every operation, especially from AI, is validated against this user-defined constitution. This pillar enables the **Autopilots System** to execute with confidence while respecting your rules.

### <DocIcon type="time-graph" inline /> The Time Graph

This is the safety and auditability layer. It's powered by a **custom, high-performance Git engine** built for the granular, high-frequency changes of AI development. It provides the immutable history that powers **The Time Graph HAT** and the auditable logs for every Autopilot mission.

### <DocIcon type="ai-command" inline /> AI Under Command

This is the orchestration layer. It acts as a model-agnostic control plane, managing a **fleet of AI models** (like Claude and Gemini). It translates human intent into precise, constitutionally-bound AI operations. This pillar powers the **Gen HAT** and the **Code HAT**, giving you command over multiple AI agents.

### <DocIcon type="universal-fabricator" inline /> The Universal Fabricator

This is the execution and modernization layer. It uses **WebAssembly** to run polyglot **Hatcher Functions** (Delphi, C++, Rust, etc.) inside the secure, deterministic environment of a Hatcher **EGG** (Enforced Governance Guardrails). This enables legacy code to run anywhere while respecting modern standards.

## Technology Stack & Vision

Our technology choices are pragmatic and forward-looking, balancing the need for rapid innovation with a long-term commitment to performance and security.

| Component         | Technology                | Why We Chose It                                                                                                                        |
| :---------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop Shell** | **Electron (Current)**    | Provides a robust, battle-tested foundation for rapid, cross-platform development, allowing us to focus on our core value proposition. |
| **UI Framework**  | **Vue.js 3 + TypeScript** | Its Composition API and type-safety are ideal for the complex, stateful interface of a professional IDE.                               |
| **Core (Vision)** | **Tauri + Rust**          | Our long-term vision is to forge Hatcher's core in Rust for its unparalleled performance, memory safety, and security guarantees.      |

This "Path to Rust" is central to our promise. We are building the future on a proven prototype, with a clear architectural endgame that prioritizes the highest standards of engineering excellence.

## Security & Privacy by Design

Security is not a feature; it's an architectural prerequisite.

- **Local-First by Default:** Your source code and history live on your machine. Nothing is sent to a cloud service without your explicit action, such as enabling team synchronization for the immutable audit log.

- **Zero Code Storage:** Our cloud services (for team features like Playbooks) **do not store a full copy of your repository**. We only store the necessary governance data (like Playbooks and audit log entries), never your entire codebase at rest.

- **Sandboxed Execution:** Hatcher Functions run in a secure WebAssembly sandbox with no access to your system by default.

- **Transparent Operations:** The Time Graph and Human Firewall ensure you have a clear, auditable record of every action and the final say on every change.

<PageCTA
  title="Ready to Dive Deeper?"
  subtitle="Explore how our architecture enables the next generation of AI-assisted development"
  buttonText="Read the Philosophy"
  buttonLink="/philosophy"
  buttonStyle="secondary"
  footer="Built with security, privacy, and developer control at its core"
/>
