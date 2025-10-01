# Translation Workflow for Hatcher Documentation

This document outlines the manual translation workflow for translating Hatcher documentation into multiple languages.

## Overview

We maintain documentation in 14 languages:
- English (en) - Source language
- Spanish (es) - ✅ Complete
- French (fr) - ✅ Complete
- German (de)
- Portuguese (pt)
- Arabic (ar)
- Chinese (zh-cn)
- Hindi (hi)
- Indonesian (id)
- Japanese (ja)
- Korean (ko)
- Persian (fa)
- Russian (ru)
- Turkish (tr)

## Translation Rules

### CRITICAL: Product Names - NEVER TRANSLATE

The following product names and technical terms MUST remain in English in ALL languages:

**Product Names:**
- Hatcher
- Hatcher Autopilots
- Autopilots
- Playbooks
- Command Deck
- HATs (Hatcher Adaptive Tools)
- Gen HAT
- EGG HAT
- EGGs (Enforced Governance Guardrails)
- Time Graph
- Universal Fabricator
- Visual-to-Code Bridge
- Constitutional Engineering
- Hatcher BaaS

**Technical Components:**
- CLI
- IDE
- API
- Git
- GitHub
- Discord
- WebAssembly
- WASM
- TypeScript
- JavaScript
- Vue
- React
- Svelte
- Docker
- Kubernetes

### What TO Translate

**DO translate:**
- All descriptive text
- Headings and subheadings (except product names)
- UI strings and button labels
- Documentation prose
- Comments in markdown (but not in code blocks)
- Frontmatter `title` and `description` fields

### What NOT to Translate

**DO NOT translate:**
- Code blocks (JavaScript, TypeScript, Vue, CSS, YAML, Bash, etc.)
- HTML/CSS embedded in markdown
- Vue components and their props
- Variable names, function names, class names
- URLs and links
- File paths
- Command-line commands
- Configuration values
- Mermaid diagrams (structure - only translate text labels)

## Translation Process

### Step 1: DELETE→COPY→TRANSLATE Workflow

This is the safest workflow to ensure complete and accurate translations:

1. **DELETE**: Delete the existing target language file (e.g., `fr/philosophy.md`)
2. **COPY**: Copy the English source file to the target location
3. **TRANSLATE**: Translate only the translatable content following all rules

Example:
```bash
# 1. Delete existing French file
rm fr/philosophy.md

# 2. Copy English source
cp philosophy.md fr/philosophy.md

# 3. Translate the copied file
# (Use Claude or manual translation)
```

### Step 2: Translate Frontmatter

```yaml
---
title: Philosophy | The Constitutional IDE for the AI Era  # TRANSLATE
description: Discover Hatcher's philosophy...              # TRANSLATE
---
```

Becomes (French):
```yaml
---
title: "Philosophie | L'IDE Constitutionnel pour l'Ere IA"
description: "Découvrez la philosophie de Hatcher..."
---
```

### Step 3: Translate Content

Preserve all markdown structure:
- Headings (#, ##, ###)
- Lists (-, *, 1.)
- Links ([text](url))
- Code blocks (```language```)
- HTML components (<PageCTA>, <DocIcon>)

### Step 4: Preserve Code Blocks

Code blocks must be copied EXACTLY as-is:

```typescript
// This entire block stays in English
interface CommanderView {
  context: {
    design: VisualInput
    existingCode: CodeContext
    constraints: ProjectConstitution
  }
}
```

### Step 5: Handle Vue Components

Vue components embedded in markdown stay in English:

```vue
<PageCTA
  title="Find Your Command Style"                    <!-- TRANSLATE title -->
  subtitle="Whether you're disrupting, transforming..." <!-- TRANSLATE subtitle -->
  buttonText="Start Commanding"                      <!-- TRANSLATE buttonText -->
  buttonLink="/getting-started"                      <!-- DO NOT translate -->
  buttonStyle="secondary"                            <!-- DO NOT translate -->
  footer="From copilot to commander..."              <!-- TRANSLATE footer -->
/>
```

## Files to Translate

Total: 33 core documentation files

### Core Philosophy & Concepts
- [ ] philosophy.md
- [ ] autopilots.md
- [ ] playbooks-system.md
- [ ] constitutional-engineering.md
- [ ] visual-to-code.md
- [ ] architecture.md

### Pillars (9 files)
- [ ] pillars-time-graph.md
- [ ] pillars-universal-fabricator.md
- [ ] pillars-ai-under-command.md
- [ ] pillars-constitutional-constraints.md
- [ ] pillars-deterministic-repeatability.md
- [ ] pillars-local-cloud-hybrid.md
- [ ] pillars-multi-engine-support.md
- [ ] pillars-playbook-driven.md
- [ ] pillars-sovereign-ai.md

### Features & Guides
- [ ] getting-started.md
- [ ] installation.md
- [ ] how-it-works.md
- [ ] who-is-hatcher-for.md
- [ ] use-cases.md
- [ ] faq.md
- [ ] troubleshooting.md

### Project Info
- [ ] roadmap.md
- [ ] contributing.md
- [ ] community.md
- [ ] changelog.md
- [ ] license.md

### Comparisons
- [ ] vs-cursor.md
- [ ] vs-copilot.md
- [ ] vs-v0.md
- [ ] vs-bolt.md
- [ ] vs-windsurf.md

### Misc
- [ ] glossary.md
- [ ] manifest.md
- [ ] security.md

## Quality Checks

Before marking a translation complete:

1. **Product Names**: All product names remain in English
2. **Code Blocks**: All code is identical to English version
3. **Links**: All internal links updated to language prefix (e.g., `/fr/philosophy`)
4. **Frontmatter**: title and description translated, but no extra fields added
5. **Vue Components**: Props preserved, only text values translated
6. **Formatting**: Markdown structure identical to source

## Validation

Run the validation script to check all translations:

```bash
npm run validate:translations
```

This will:
- Start the dev server
- Test all language homepages for 404s
- Verify critical links work
- Check content is rendered
- Generate a validation report

## Common Mistakes to Avoid

❌ **DO NOT**:
- Translate "Autopilots" → "Pilotes Automatiques"
- Translate "Playbooks" → "Manuels de Jeu"
- Translate "Time Graph" → "Graphe du Temps"
- Translate "EGGs" → "Œufs"
- Modify code examples
- Change CSS class names
- Translate variable names

✅ **DO**:
- Keep product names in English: "les Hatcher Autopilots"
- Preserve all code exactly
- Translate descriptive text naturally
- Update internal links with language prefix
- Maintain markdown structure

## Example Translation

### Before (English)
```markdown
---
title: Philosophy | The Constitutional IDE
description: Discover Hatcher's philosophy
---

# Philosophy

Hatcher Autopilots are autonomous agents that follow Playbooks to execute complex tasks.

```typescript
interface Autopilot {
  name: string
  playbook: Playbook
}
```

Learn more about [Time Graph](/time-graph).
```

### After (French)
```markdown
---
title: Philosophie | L'IDE Constitutionnel
description: Découvrez la philosophie de Hatcher
---

# Philosophie

Les Hatcher Autopilots sont des agents autonomes qui suivent les Playbooks pour exécuter des tâches complexes.

```typescript
interface Autopilot {
  name: string
  playbook: Playbook
}
```

En savoir plus sur le [Time Graph](/fr/time-graph).
```

## Translation Progress

See `translation-status.md` for current progress across all languages.

## Notes

- This is a **manual translation workflow** - no automatic translation
- Translations are done by Claude or human translators following these rules
- Quality over speed - ensure accuracy before marking complete
- When in doubt, preserve in English rather than mistranslate
