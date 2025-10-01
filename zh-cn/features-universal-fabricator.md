# Universal Fabricator

> **遗留代码获得第二次生命的地方。**

## 什么是Universal Fabricator？

Universal Fabricator是Hatcher的现代化引擎。它运行一个我们称之为**Function Foundry**的流程——一个将经过实战检验的业务逻辑从Delphi和COBOL等遗留语言转换为高性能、安全的**Hatcher Functions**（由WebAssembly驱动）的管道。

这些**Hatcher Functions**是核心组件，稍后会在Hatcher **EGG**（Enforced Governance Guardrails）的安全环境中组装和执行。

## 铸造流程

### 阶段1：分析

在触碰您的代码之前，我们先理解它：

```bash
hatcher analyze --source="./legacy/payroll.pas" --language="delphi"

> 分析完成：
> - 找到的函数：247
> - 识别的业务规则：89
> - 外部依赖：12
> - 估计复杂度：高
> - 现代化可行性：94%
```

### 阶段2：准备

您的代码为转换做好准备：

- **依赖映射**：识别需要包含的内容
- **接口提取**：理解输入和输出
- **内存分析**：估计资源需求
- **风险评估**：识别潜在问题

### 阶段3：编译

实际转换为WebAssembly：

```bash
hatcher compile --input="./legacy/payroll.pas" --output="./hatcher/functions/payroll.wasm"

> 正在将Delphi编译为WebAssembly...
> ✓ 解析源代码
> ✓ 解析依赖
> ✓ 为WASM优化
> ✓ 生成绑定
>
> 输出：payroll.wasm (247KB)
> 性能：0.97x原生速度
> 内存：需要12MB堆
```

### 阶段4：验证

每个Hatcher Function都经过彻底测试：

```typescript
// 自动生成的测试框架
describe('Payroll Hatcher Function验证', () => {
  test('匹配原始输出', async () => {
    const original = await runOriginalDelphi(testData)
    const functionName = await runWASMModule(testData)

    expect(functionName.output).toEqual(original.output)
    expect(functionName.performance).toBeWithin(0.1).of(original.performance)
  })
})
```

### 阶段5：打包

您的Hatcher Function与所需的一切一起打包：

```yaml
# payroll.function.yaml
metadata:
  name: payroll-processor
  version: 1.0.0
  original: delphi-7.0
  compiled: 2024-01-15

module:
  binary: payroll.wasm
  size: 247KB
  memory: 12MB

interface:
  typescript: ./types/payroll.d.ts
  documentation: ./docs/payroll-api.md

validation:
  tests: ./tests/payroll.spec.js
  coverage: 94%
  performance: 0.97x
```

## 制造环境

### 隔离编译

每次编译都在完全隔离的环境中运行：

```dockerfile
# Fabricator容器
FROM hatcher/fabricator:latest

# 语言特定工具链
RUN install-toolchain --language=delphi

# 隔离边界
USER foundry
WORKDIR /sandbox
RESTRICT network=none filesystem=readonly

# 以完全隔离方式编译
CMD ["hatcher", "compile", "--safe-mode"]
```

### 多语言支持

Universal Fabricator支持大多数工具忽略的遗留语言：

- **Delphi/Pascal**：完整的Object Pascal支持
- **COBOL**：包括COBOL-85和COBOL-2002
- **Visual Basic**：VB6和VB.NET
- **Fortran**：科学计算保存
- **C/C++**：支持遗留编译器兼容性
- **Ada**：关键任务系统支持

## 高级功能

### 增量现代化

不要一次性现代化所有内容：

```javascript
// 从关键函数开始
const criticalFunctions = await compile({
  source: './legacy/core-business.pas',
  functions: ['calculateTax', 'processPayroll', 'validateCompliance'],
})

// 随着时间推移添加更多
const phase2 = await compile({
  source: './legacy/reporting.pas',
  functions: ['generateReport', 'exportData'],
})

// 合并为单个模块
const combined = await merge([criticalFunctions, phase2])
```

### 混合执行

并行运行遗留和现代代码：

```typescript
class HybridSystem {
  // 遗留计算引擎
  private legacy = await loadFunction('./hatcher/function/calculation.wasm')

  // 现代增强层
  private modern = new ModernEnhancements()

  async process(data: Input): Output {
    // 使用遗留代码进行核心逻辑
    const calculated = await this.legacy.calculate(data)

    // 使用现代功能增强
    const enhanced = this.modern.addRealTimeAnalytics(calculated)

    return enhanced
  }
}
```

### 性能优化

Universal Fabricator自动为WebAssembly优化：

```
原始Delphi：平均执行100ms
原生WASM：180ms（慢1.8倍）
优化WASM：103ms（慢1.03倍）

应用的优化：
- SIMD向量化
- 内存对齐
- 死代码消除
- 函数内联
- 循环展开
```

## Fabricator中的安全性

### 代码清理

遗留代码通常存在安全问题。Universal Fabricator修复它们：

```yaml
security_fixes:
  buffer_overflows:
    detected: 3
    fixed: 3
    method: automatic_bounds_checking

  sql_injection:
    detected: 7
    fixed: 7
    method: parameterized_queries

  memory_leaks:
    detected: 12
    fixed: 12
    method: automatic_memory_management
```

### 基于能力的安全性

Hatcher Functions以最小权限运行：

```javascript
const functionName = await loadFunction('./payroll.wasm', {
  capabilities: {
    memory: { limit: '50MB' },
    cpu: { timeout: '5s' },
    io: {
      filesystem: 'none',
      network: 'none',
      random: 'deterministic',
    },
  },
})
```

## 实际转换

### 之前：单体Delphi应用

```pascal
// 500,000行Delphi代码
// 单个可执行文件
// 仅限Windows
// 没有API
```

### 之后：模块化Hatcher Functions系统

```yaml
functions:
  - core-business.wasm (45KB)
  - reporting.wasm (89KB)
  - calculations.wasm (156KB)
  - validation.wasm (67KB)

deployment:
  - Web浏览器
  - Node.js服务器
  - 边缘函数
  - 移动应用
  - IoT设备

api:
  - REST端点
  - GraphQL模式
  - WebSocket流
  - gRPC服务
```

## 入门

### 1. 清点您的遗留代码

```bash
hatcher inventory --directory="./legacy"

> 找到：
> - Delphi：1,247个文件（500K行）
> - VB6：89个文件（45K行）
> - C++：456个文件（200K行）
```

### 2. 优先考虑现代化

```bash
hatcher recommend --business-critical

> 推荐的现代化顺序：
> 1. PayrollCalculation.pas（高使用率，低复杂度）
> 2. TaxEngine.pas（高价值，中等复杂度）
> 3. ReportGenerator.pas（中等使用率，低风险）
```

### 3. 启动Universal Fabricator

```bash
hatcher fabricator --start

> Universal Fabricator已初始化
> Function Foundry管道就绪
> 运行'hatcher compile'开始转换
```

## 遗留代码的未来

Universal Fabricator代表了我们思考遗留代码方式的根本转变。我们不是将其视为需要消除的技术债务，而是将其视为需要保存和增强的业务逻辑。

您1995年的Delphi代码可以为2024年的React应用提供动力。您的COBOL事务可以在无服务器函数中运行。您的Visual Basic计算可以在Web浏览器中执行。

这不仅仅是现代化——这是解放。

---

_Universal Fabricator：您的遗留代码不会消亡，它会进化。_

<PageCTA
  title="将遗留代码转化为现代资产"
  subtitle="将数十年前的代码编译为WebAssembly并在任何地方运行"
  buttonText="开始您的迁移"
  buttonLink="/zh-cn/getting-started"
  buttonStyle="secondary"
  footer="从COBOL到云。从Delphi到Docker。您的代码，通用。"
/>
