# Claude Development Guidelines for Hatcher

## Translation Workflow
**QUALITY OVER SPEED - ONE FILE AT A TIME**:
- NEVER batch translate multiple files
- Translate ONE file completely before moving to the next
- Review each translation for accuracy before proceeding
- NO EXCEPTIONS, NO EXCUSES
- This ensures quality and prevents mistakes

### CRITICAL: Product Names - NEVER TRANSLATE
The following product names MUST remain in English in ALL languages:
- Hatcher, Hatcher Autopilots, Autopilots
- Playbooks, Command Deck
- HATs (Hatcher Adaptive Tools), Gen HAT, EGG HAT
- EGGs (Enforced Governance Guardrails)
- Time Graph, Universal Fabricator
- Visual-to-Code Bridge, Constitutional Engineering
- Hatcher BaaS

### Technical Components - NEVER TRANSLATE
- CLI, IDE, API, Git, GitHub, Discord
- WebAssembly, WASM, TypeScript, JavaScript
- Vue, React, Svelte, Docker, Kubernetes

### What TO Translate
- All descriptive text
- Headings/subheadings (except product names)
- UI strings and button labels
- Frontmatter `title` and `description`

### What NOT to Translate
- Code blocks (any language)
- HTML/CSS embedded in markdown
- Vue components and props
- URLs, file paths, commands
- Variable/function/class names

### Translation Process
**CRITICAL FIRST STEP - Clean Slate:**
1. **DELETE ALL .md FILES** in the target language directory at the start of each language translation
   - This ensures no obsolete, renamed, or deleted files remain
   - Guarantees 1:1 consistency between English and translated versions
   - Command: `rm [lang]/*.md`

**Then for each file:**
2. **Copy** English file to target language directory
3. **Translate** frontmatter (title, description)
4. **Translate** all descriptive text
5. **Update** internal links with language prefix (e.g., `/de/philosophy`)
6. **Preserve** all code blocks EXACTLY
7. **Preserve** all Vue components (translate only prop text values)

### Quality Checks
- ✅ Product names in English
- ✅ Code blocks identical to English
- ✅ Links updated with `/[lang]/` prefix
- ✅ Markdown structure preserved
- ✅ Vue component props preserved

## CSS Development Approach
**ALWAYS USE MOBILE-FIRST**: Start with mobile styles as default, then use min-width media queries for larger screens.

## Project-Specific Guidelines

### Search Button Mobile Design
- Mobile: 44x44px touch target, icon only, no keyboard shortcut
- Desktop: Full text with ⌘K shortcut
- Add margin-left on mobile for spacing from logo

### Mobile Navigation
- Hide keyboard shortcuts on mobile (not useful for touch)
- Use minimum 44px touch targets for all interactive elements
- Simplify UI for mobile - icons over text when possible

### Color Palette
- Golden accent: #c9962f (refined gold, not yellow)
- Warm gold for dark mode: #d4a847

### Hover Effects
- Keep them subtle and sophisticated
- Use single, clean effects rather than multiple overlapping ones
- Test alignment carefully, especially for pseudo-elements