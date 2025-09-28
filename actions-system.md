---
title: Actions System | Your Constitutional Judgment
description: Understand Hatcher's Actions system - deterministic quality gates that validate every change. The final judgment that ensures your code meets your constitutional standards.
---

# Hatcher Actions: Your Constitutional Judgment

Actions are the quality gates of the Hatcher ecosystem—the constitutional judges that determine whether your code meets your standards. They are not workflows or processes; they are atomic, deterministic validators that answer a simple question: **"Pass or Fail?"**

## What Are Actions?

Actions are:

- **Atomic Validators**: Single-purpose checks that validate one specific aspect
- **Deterministic**: Always produce the same result for the same input
- **Binary**: Return only "pass" or "fail" (with details)
- **Fast**: Designed for rapid feedback, not complex processing

They are the final checkpoint that ensures every piece of code respects your project's constitution.

## The Role in the Hierarchy

Understanding Actions requires understanding their place in the Hatcher philosophy:

1. **Playbooks** (The Strategy): Define WHAT standards you want to enforce
2. **Autopilots** (The Tactics): Execute HOW to implement those standards
3. **Actions** (The Judgment): Validate IF the implementation meets the standards

```yaml
# The complete flow
playbook: 'We use Vue 3 with TypeScript'
autopilot: 'Generate a Vue 3 component with TypeScript'
actions: 'Run type-check, lint, and test to verify correctness'
```

## Core Actions

Hatcher provides essential Actions for universal quality gates:

### Type Safety Actions

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

### Code Quality Actions

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

### Testing Actions

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

### Security Actions

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

### Performance Actions

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

## Custom Actions

Define project-specific Actions in your `hatcher.config.json`:

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

## Action Execution

### Individual Actions

Run specific Actions on demand:

```bash
# Run a single action
hatcher action run test:unit

# Run with verbose output
hatcher action run lint:check --verbose

# Run with custom parameters
hatcher action run coverage:verify --threshold=90
```

### Action Groups

Execute related Actions together:

```bash
# Run all test actions
hatcher action run-group testing

# Run pre-commit actions
hatcher action run-group pre-commit

# Run deployment validations
hatcher action run-group deploy-checks
```

### Action Configuration

Define Action groups in your configuration:

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

## Action Results

Actions provide structured feedback:

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

## Integration with Autopilots

Autopilots use Actions as quality checkpoints:

```yaml
# In an Autopilot workflow
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

## Action Policies

Define when Actions are mandatory:

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

### Action Design Principles

1. **Single Responsibility**: Each Action validates exactly one thing
2. **Fast Execution**: Actions should complete in seconds, not minutes
3. **Clear Failure Messages**: Provide actionable feedback on failures
4. **Deterministic**: Same input always produces same result
5. **No Side Effects**: Actions validate but don't modify

### Performance Optimization

- **Parallel Execution**: Run independent Actions simultaneously
- **Incremental Checks**: Only validate changed files when possible
- **Caching**: Cache results for unchanged code
- **Early Exit**: Fail fast on critical violations

### Error Handling

Actions should provide clear, actionable error messages:

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

## The Power of Constitutional Judgment

Actions are the guardians of your code quality—the non-negotiable standards that every piece of code must meet. They're not suggestions or guidelines; they're the constitutional law of your codebase.

By separating validation (Actions) from implementation (Autopilots) and strategy (Playbooks), Hatcher creates a clear, maintainable, and scalable system for ensuring code quality.

Remember: **Actions don't create or modify—they judge. And their judgment is final.**

<PageCTA
  title="Enforce Your Standards Automatically"
  subtitle="Create unbreakable validation rules that guard your code quality"
  buttonText="Configure Your Actions"
  buttonLink="/getting-started"
  buttonStyle="secondary"
  footer="No compromise. No exceptions. Your standards, enforced."
/>
