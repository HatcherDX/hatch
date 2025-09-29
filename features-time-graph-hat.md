---
title: The Time Graph HAT - Your Development Time Machine
description: Travel through your code's timeline. See every decision, understand every change, and debug across time itself.
---

# <DocIcon type="time-graph" inline /> The Time Graph HAT

> **Pillar Connection:** This HAT is the direct implementation of our [Time Graph pillar](/pillars-time-graph), ensuring every action is reversible, every decision is auditable, and nothing is ever lost.

## Your Development Time Machine

The Time Graph HAT transforms your codebase from a snapshot into a **living timeline**. Every decision, every change, every bug becomes a node in an explorable graph that lets you travel through time to understand, debug, and even rewrite history.

### Beyond Git History

Git shows you **what** changed. The Time Graph HAT shows you **why**, **how**, and **what if**:

- **Decision Tracking**: Every architectural choice recorded
- **Impact Mapping**: See how changes ripple through time
- **Parallel Timelines**: Explore alternate implementations
- **Causal Debugging**: Find root causes by traveling backward

## The Fourth Dimension of Development

### Traditional Version Control

```
main ──●──●──●──●──●── (current)
        └──●──●── (feature branch)
```

Linear. Flat. Limited.

### Time Graph Reality

```
        ┌─ Decision: Use REST ─── Implementation A ─── Bug Found ───┐
        │                                                            │
main ───┼─ Decision: Use GraphQL ─ Implementation B ─── Success ────┼─── Merged
        │                                                            │
        └─ Decision: Use gRPC ──── Implementation C ─── Abandoned ───┘
              │                         │
              └── Why: Latency ────── Benchmark ──── Results
```

Multi-dimensional. Explorable. **Understandable**.

## Real-World Powers

### Scenario 1: The Production Mystery

**Challenge**: App crashes randomly in production. No pattern. No reproduction.

**Time Graph Solution**:

1. Navigate to crash timestamp
2. HAT shows all concurrent changes
3. Identify seemingly unrelated deploy
4. Trace impact through dependency graph
5. Find race condition introduced 3 weeks ago

**Result**: "Impossible" bug fixed in 30 minutes.

### Scenario 2: The Architectural Debate

**Challenge**: "Why did we choose MongoDB over PostgreSQL?"

**Time Graph Solution**:

```yaml
query: decision-node
topic: 'database-selection'
timestamp: '3-months-ago'

result:
  decision: 'MongoDB'
  reasons:
    - 'Flexible schema for rapid iteration'
    - 'Better horizontal scaling'
    - 'Team expertise'
  alternatives-explored:
    - PostgreSQL: 'Rejected: Schema migrations concern'
    - DynamoDB: 'Rejected: Vendor lock-in'
  participants: ['alice', 'bob', 'charlie']
  supporting-data: ['benchmark-results.json', 'cost-analysis.xlsx']
```

**Result**: Instant context for any technical decision.

### Scenario 3: The Parallel Development

**Challenge**: Two features developed simultaneously are conflicting.

**Time Graph Solution**:

- HAT maintains parallel timelines
- Shows divergence points
- Identifies conflict sources
- Suggests merge strategies
- Simulates merge outcomes

**Result**: Confident merging without breaking either feature.

## Advanced Capabilities

### Causal Analysis

Not just "what broke" but "what caused what broke":

```yaml
analysis: login-failure
symptoms:
  - "Users can't login"
  - 'Started 2024-01-15 14:30'

time-graph-trace:
  - 14:30: 'Login failures spike'
  - 14:25: 'API response times increase'
  - 14:20: 'Database query patterns change'
  - 14:15: 'ORM library updated'
  - 13:00: 'Dependency update merged'

root-cause: 'ORM update changed query generation'
fix: 'Rollback or patch query builder'
```

### Temporal Queries

Ask questions across time:

```bash
# When did performance degrade?
hatcher time-graph query "response_time > 200ms" --first-occurrence

# Who has touched this file?
hatcher time-graph contributors "./src/auth.js" --with-context

# What changed between working and broken?
hatcher time-graph diff --from "last-working" --to "first-broken"

# Show all decisions about authentication
hatcher time-graph decisions --topic "auth" --timeline
```

### Butterfly Effect Tracking

See how small changes cascade:

```yaml
change: 'Update button color'
immediate-impact:
  - 'button.css modified'
cascade:
  - 'Component snapshot tests fail'
  - 'Visual regression detected'
  - 'Accessibility contrast warning'
  - 'Design system version bump'
  - 'All apps using design system need updates'
  - 'Marketing screenshots outdated'
```

## Integration with Other HATs

The Time Graph HAT enhances everything:

- **With Code HAT**: Travel to when code was simpler
- **With Gen HAT**: See generation evolution
- **With Visual HAT**: Visual regression through time

## Time Travel Operations

### Checkpoint Creation

```bash
# Create a temporal checkpoint
hatcher time-graph checkpoint "Before major refactor"

# Create decision node
hatcher time-graph decision "Switching to microservices" \
  --reasons "Scale,Team autonomy" \
  --alternatives "Monolith,Serverless"
```

### Timeline Navigation

```bash
# Go to specific point
hatcher time-graph goto "2024-01-15 14:00"

# Go to last working state
hatcher time-graph goto "last-green-ci"

# Compare timelines
hatcher time-graph compare "timeline-a" "timeline-b"
```

### Temporal Debugging

```bash
# Bisect to find breaking change
hatcher time-graph bisect --good "v1.0" --bad "HEAD" --test "npm test"

# Replay execution at point in time
hatcher time-graph replay "crash-timestamp" --with-state
```

## The Knowledge Preservation

The Time Graph HAT preserves institutional knowledge:

### Never Lose Context

- Why was X deprecated?
- Who decided Y?
- What alternatives were considered?
- What problems did Z solve?

### Onboarding Acceleration

New developers can:

- Explore decision history
- Understand evolution
- Learn from past mistakes
- See the full context

## The Temporal Liberation

The Time Graph HAT isn't about dwelling on the past — it's about **learning from it**:

- No more archaeological debugging
- No more "nobody knows why"
- No more repeating mistakes
- No more context loss

Your code has a history. The Time Graph HAT makes it **navigable**.

---

Ready to explore your code's timeline? [Get Started with the Time Graph HAT](/getting-started#time-graph-hat)

<PageCTA
  title="Navigate Your Code's Evolution"
  subtitle="Travel through time to understand how and why your code evolved"
  buttonText="Explore the Time Graph"
  buttonLink="/getting-started"
  buttonStyle="secondary"
  footer="Every change has a story. Every decision has context."
/>
