---
title: Sistema Actions | Seu Julgamento Constitucional
description: Entenda o sistema Actions do Hatcher - portões de qualidade determinísticos que validam cada mudança. O julgamento final que garante que seu código atenda aos seus padrões constitucionais.
---

# Hatcher Actions: Seu Julgamento Constitucional

Actions são os portões de qualidade do ecossistema Hatcher—os juízes constitucionais que determinam se seu código atende aos seus padrões. Eles não são workflows ou processos; são validadores atômicos e determinísticos que respondem a uma pergunta simples: **"Passou ou Falhou?"**

## O Que São Actions?

Actions são:

- **Validadores Atômicos**: Verificações de propósito único que validam um aspecto específico
- **Determinísticos**: Sempre produzem o mesmo resultado para a mesma entrada
- **Binários**: Retornam apenas "passou" ou "falhou" (com detalhes)
- **Rápidos**: Projetados para feedback rápido, não processamento complexo

Eles são o ponto de verificação final que garante que cada pedaço de código respeita a constituição do seu projeto.

## O Papel na Hierarquia

Entender Actions requer entender seu lugar na filosofia Hatcher:

1. **Playbooks** (A Estratégia): Definem QUAIS padrões você quer aplicar
2. **Autopilots** (As Táticas): Executam COMO implementar esses padrões
3. **Actions** (O Julgamento): Validam SE a implementação atende aos padrões

```yaml
# O fluxo completo
playbook: 'Usamos Vue 3 com TypeScript'
autopilot: 'Gerar um componente Vue 3 com TypeScript'
actions: 'Executar type-check, lint e test para verificar correção'
```

## Actions Principais

Hatcher fornece Actions essenciais para portões de qualidade universais:

### Actions de Segurança de Tipos

```yaml
actions:
  - name: types:validate
    description: Verificar compilação TypeScript
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: Aplicar regras estritas do TypeScript
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### Actions de Qualidade de Código

```yaml
actions:
  - name: lint:check
    description: Verificar se o código atende aos padrões de linting
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: Verificar formatação do código
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### Actions de Testes

```yaml
actions:
  - name: test:unit
    description: Executar testes unitários
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: Executar testes de integração
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: Garantir que a cobertura de testes atenda ao limite
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### Actions de Segurança

```yaml
actions:
  - name: security:audit
    description: Verificar vulnerabilidades conhecidas
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: Garantir que não há segredos no código
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### Actions de Performance

```yaml
actions:
  - name: bundle:size
    description: Verificar limites de tamanho do bundle
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: Verificar pontuações Lighthouse
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## Actions Personalizadas

Defina Actions específicas do projeto em seu `hatcher.config.json`:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "Validar contratos de API",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "Verificar migrações de banco de dados",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "Verificar completude de traduções",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## Execução de Actions

### Actions Individuais

Execute Actions específicas sob demanda:

```bash
# Executar uma única action
hatcher action run test:unit

# Executar com saída detalhada
hatcher action run lint:check --verbose

# Executar com parâmetros personalizados
hatcher action run coverage:verify --threshold=90
```

### Grupos de Actions

Execute Actions relacionadas juntas:

```bash
# Executar todas as actions de teste
hatcher action run-group testing

# Executar actions pré-commit
hatcher action run-group pre-commit

# Executar validações de deploy
hatcher action run-group deploy-checks
```

### Configuração de Actions

Defina grupos de Actions em sua configuração:

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

## Resultados de Actions

Actions fornecem feedback estruturado:

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
  "suggestion": "Corrija os testes que falharam antes de fazer commit"
}
```

## Integração com Autopilots

Autopilots usam Actions como pontos de verificação de qualidade:

```yaml
# Em um workflow Autopilot
name: Implementação de Funcionalidade
steps:
  - name: Gerar código
    action: ai.create

  - name: Ponto de verificação de qualidade
    action: run.actions
    actions:
      - lint:check # Deve passar
      - types:validate # Deve passar
      - test:unit # Deve passar
    fail_fast: true # Parar na primeira falha

  - name: Fazer commit se a qualidade passou
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Políticas de Actions

Defina quando Actions são obrigatórias:

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

## Melhores Práticas

### Princípios de Design de Actions

1. **Responsabilidade Única**: Cada Action valida exatamente uma coisa
2. **Execução Rápida**: Actions devem completar em segundos, não minutos
3. **Mensagens de Falha Claras**: Forneça feedback acionável sobre falhas
4. **Determinístico**: Mesma entrada sempre produz mesmo resultado
5. **Sem Efeitos Colaterais**: Actions validam mas não modificam

### Otimização de Performance

- **Execução Paralela**: Execute Actions independentes simultaneamente
- **Verificações Incrementais**: Valide apenas arquivos alterados quando possível
- **Cache**: Armazene resultados em cache para código inalterado
- **Saída Antecipada**: Falhe rápido em violações críticas

### Tratamento de Erros

Actions devem fornecer mensagens de erro claras e acionáveis:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "Problemas de qualidade de código detectados",
  "fixes": {
    "automatic": "Execute 'npm run lint:fix' para corrigir automaticamente 12 problemas",
    "manual": "3 problemas requerem intervenção manual",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' está definido mas nunca usado"
      }
    ]
  }
}
```

## O Poder do Julgamento Constitucional

Actions são os guardiões da qualidade do seu código—os padrões não-negociáveis que cada pedaço de código deve atender. Eles não são sugestões ou diretrizes; são a lei constitucional da sua base de código.

Ao separar validação (Actions) de implementação (Autopilots) e estratégia (Playbooks), Hatcher cria um sistema claro, sustentável e escalável para garantir qualidade de código.

Lembre-se: **Actions não criam ou modificam—eles julgam. E seu julgamento é final.**

<PageCTA
  title="Aplique Seus Padrões Automaticamente"
  subtitle="Crie regras de validação inquebráveis que protegem a qualidade do seu código"
  buttonText="Configure Suas Actions"
  buttonLink="/pt/getting-started"
  buttonStyle="secondary"
  footer="Sem compromisso. Sem exceções. Seus padrões, aplicados."
/>
