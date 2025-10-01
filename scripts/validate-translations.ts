#!/usr/bin/env tsx
/**
 * Translation Validation Script
 *
 * This script validates translations by:
 * 1. Starting the dev server
 * 2. Testing all locale pages for 404s
 * 3. Checking if links work
 * 4. Validating content is rendered
 * 5. Generating a validation report
 *
 * Usage:
 *   tsx scripts/validate-translations.ts
 *   npm run validate:translations
 */

import { spawn, type ChildProcess } from 'child_process'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import http from 'http'

interface Language {
  code: string
  name: string
}

interface LinkResult {
  url: string
  fullUrl: string
  status: number
  ok: boolean
  is404Page?: boolean
}

interface ValidationResult {
  language: string
  code: string
  homepage: {
    status: 'ok' | 'error' | 'pending' | 'skipped'
    statusCode?: number
  }
  links: LinkResult[]
  errors: string[]
  warnings: string[]
}

interface ValidationResults {
  timestamp: string
  languages: Record<string, ValidationResult>
  summary: {
    total: number
    passed: number
    failed: number
    warnings: number
  }
}

interface UrlCheckResult {
  statusCode: number
  body: string
  ok: boolean
  error?: string
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'zh-cn', name: 'Chinese' },
  { code: 'hi', name: 'Hindi' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'fa', name: 'Persian' },
  { code: 'ru', name: 'Russian' },
  { code: 'tr', name: 'Turkish' },
]

// Links to test on each page (from the landing page)
const LINKS_TO_TEST = [
  '/philosophy',
  '/autopilots',
  '/constitutional-engineering',
  '/visual-to-code',
  '/architecture',
  '/playbooks-system',
  '/pillars-time-graph',
  '/pillars-universal-fabricator',
]

const PORT = 5173
const BASE_URL = `http://localhost:${PORT}`

let devServer: ChildProcess | null = null
const validationResults: ValidationResults = {
  timestamp: new Date().toISOString(),
  languages: {},
  summary: {
    total: 0,
    passed: 0,
    failed: 0,
    warnings: 0,
  },
}

/**
 * Start dev server
 */
function startDevServer(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting dev server...\n')

    devServer = spawn('npm', ['run', 'dev'], {
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    let started = false

    devServer.stdout?.on('data', (data: Buffer) => {
      const output = data.toString()
      if (output.includes('Local:') && !started) {
        started = true
        setTimeout(() => {
          console.log('✓ Dev server ready\n')
          resolve()
        }, 2000) // Wait 2 seconds for server to fully start
      }
    })

    devServer.stderr?.on('data', () => {
      // Ignore warnings
    })

    devServer.on('error', (error: Error) => {
      reject(error)
    })

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!started) {
        reject(new Error('Dev server failed to start within 30 seconds'))
      }
    }, 30000)
  })
}

/**
 * Stop dev server
 */
function stopDevServer(): void {
  if (devServer) {
    console.log('\n🛑 Stopping dev server...')
    devServer.kill()
    devServer = null
  }
}

/**
 * Check if URL returns 200
 */
function checkUrl(url: string): Promise<UrlCheckResult> {
  return new Promise((resolve) => {
    const request = http.get(url, (res) => {
      let body = ''
      res.on('data', (chunk) => (body += chunk))
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode || 0,
          body,
          ok: res.statusCode === 200,
        })
      })
    })

    request.on('error', (error: Error) => {
      resolve({
        statusCode: 0,
        body: '',
        ok: false,
        error: error.message,
      })
    })

    request.setTimeout(5000, () => {
      request.destroy()
      resolve({
        statusCode: 0,
        body: '',
        ok: false,
        error: 'Timeout',
      })
    })
  })
}

/**
 * Validate a language
 */
async function validateLanguage(langCode: string, langName: string): Promise<ValidationResult> {
  console.log(`📋 Validating ${langName} (${langCode})...`)

  const results: ValidationResult = {
    language: langName,
    code: langCode,
    homepage: { status: 'pending' },
    links: [],
    errors: [],
    warnings: [],
  }

  // Check if locale file exists
  const localeFile = `.vitepress/theme/locales/${langCode}.ts`
  if (!existsSync(localeFile) && langCode !== 'en') {
    results.errors.push(`Locale file not found: ${localeFile}`)
    results.homepage.status = 'skipped'
    console.log(`  ⏭️  Skipped (no locale file)`)
    return results
  }

  // Test homepage
  const homepageUrl = langCode === 'en' ? BASE_URL : `${BASE_URL}/${langCode}/`

  const homepageCheck = await checkUrl(homepageUrl)

  if (homepageCheck.ok) {
    results.homepage.status = 'ok'
    results.homepage.statusCode = homepageCheck.statusCode

    // Check if content is rendered (basic check)
    const hasContent = homepageCheck.body.length > 5000
    const hasHatcher = homepageCheck.body.includes('Hatcher')

    if (!hasContent) {
      results.warnings.push('Homepage has very little content')
    }
    if (!hasHatcher) {
      results.warnings.push('Homepage does not contain "Hatcher"')
    }

    console.log(`  ✅ Homepage OK (${homepageCheck.statusCode})`)
  } else {
    results.homepage.status = 'error'
    results.homepage.statusCode = homepageCheck.statusCode
    results.errors.push(`Homepage returned ${homepageCheck.statusCode}`)
    console.log(`  ❌ Homepage FAILED (${homepageCheck.statusCode})`)
  }

  // Test links
  for (const link of LINKS_TO_TEST) {
    const linkUrl = langCode === 'en' ? `${BASE_URL}${link}` : `${BASE_URL}/${langCode}${link}`

    const linkCheck = await checkUrl(linkUrl)

    const linkResult: LinkResult = {
      url: link,
      fullUrl: linkUrl,
      status: linkCheck.statusCode,
      ok: linkCheck.ok,
    }

    // Check if it's a 404 page (even if status is 200)
    if (
      linkCheck.ok &&
      linkCheck.body.includes('404') &&
      linkCheck.body.includes('PAGE NOT FOUND')
    ) {
      linkResult.ok = false
      linkResult.is404Page = true
      results.errors.push(`Link ${link} shows 404 page (actual 404, not status code)`)
      console.log(`  ❌ ${link} → 200 but shows 404 page`)
    } else if (linkCheck.ok) {
      console.log(`  ✅ ${link} → ${linkCheck.statusCode}`)
    } else {
      console.log(`  ❌ ${link} → ${linkCheck.statusCode || 'ERROR'}`)
      results.errors.push(`Link ${link} returned ${linkCheck.statusCode || 'ERROR'}`)
    }

    results.links.push(linkResult)
  }

  console.log()
  return results
}

/**
 * Generate validation report
 */
function generateReport(): void {
  let report = `# Translation Validation Report\n\n`
  report += `**Generated**: ${validationResults.timestamp}\n\n`

  // Summary
  const { total, passed, failed, warnings } = validationResults.summary
  const passRate = total > 0 ? Math.round((passed / total) * 100) : 0

  report += `## Summary\n\n`

  if (failed === 0 && warnings === 0) {
    report += `✅ **ALL CHECKS PASSED**\n\n`
  } else if (failed === 0) {
    report += `⚠️  **WARNINGS FOUND**\n\n`
  } else {
    report += `❌ **FAILURES DETECTED**\n\n`
  }

  report += `- **Total Languages**: ${total}\n`
  report += `- **Passed**: ${passed}\n`
  report += `- **Failed**: ${failed}\n`
  report += `- **Warnings**: ${warnings}\n`
  report += `- **Pass Rate**: ${passRate}%\n\n`

  // Per-language results
  report += `## Language Results\n\n`
  report += `| Language | Homepage | Links OK | Errors | Warnings |\n`
  report += `|----------|----------|----------|--------|----------|\n`

  for (const [, result] of Object.entries(validationResults.languages)) {
    const homeStatus =
      result.homepage.status === 'ok' ? '✅' : result.homepage.status === 'skipped' ? '⏭️' : '❌'
    const linksOk = result.links.filter((l) => l.ok).length
    const linksTotal = result.links.length
    const linkStatus = linksOk === linksTotal ? '✅' : `⚠️ ${linksOk}/${linksTotal}`

    report += `| ${result.language} | ${homeStatus} | ${linkStatus} | ${result.errors.length} | ${result.warnings.length} |\n`
  }

  report += `\n## Detailed Results\n\n`

  for (const [, result] of Object.entries(validationResults.languages)) {
    if (result.errors.length === 0 && result.warnings.length === 0) continue

    report += `### ${result.language} (${result.code})\n\n`

    if (result.errors.length > 0) {
      report += `**Errors:**\n`
      result.errors.forEach((err) => {
        report += `- ❌ ${err}\n`
      })
      report += `\n`
    }

    if (result.warnings.length > 0) {
      report += `**Warnings:**\n`
      result.warnings.forEach((warn) => {
        report += `- ⚠️  ${warn}\n`
      })
      report += `\n`
    }

    // Show failed links
    const failedLinks = result.links.filter((l) => !l.ok)
    if (failedLinks.length > 0) {
      report += `**Failed Links:**\n`
      failedLinks.forEach((link) => {
        report += `- ❌ \`${link.url}\` → Status ${link.status || 'ERROR'}\n`
      })
      report += `\n`
    }
  }

  report += `## Next Steps\n\n`

  if (failed > 0) {
    report += `1. Fix the errors listed above\n`
    report += `2. Ensure all locale files are properly created\n`
    report += `3. Check VitePress config for missing routes\n`
    report += `4. Run validation again: \`npm run validate:translations\`\n`
  } else if (warnings > 0) {
    report += `1. Review warnings (may be false positives)\n`
    report += `2. Test manually in browser\n`
    report += `3. Fix any real issues\n`
  } else {
    report += `✅ All validations passed!\n\n`
    report += `Ready to:\n`
    report += `1. Test manually in browser: \`npm run dev\`\n`
    report += `2. Build for production: \`npm run build\`\n`
    report += `3. Deploy when satisfied\n`
  }

  writeFileSync('translation-validation.md', report, 'utf-8')
  console.log('✓ Validation report saved to translation-validation.md')
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log('🔍 Translation Validation System\n')
  console.log('='.repeat(50))
  console.log()

  try {
    // Start dev server
    await startDevServer()

    // Validate each language
    for (const lang of LANGUAGES) {
      const result = await validateLanguage(lang.code, lang.name)
      validationResults.languages[lang.code] = result

      validationResults.summary.total++

      if (result.homepage.status === 'ok' && result.errors.length === 0) {
        validationResults.summary.passed++
      } else if (result.homepage.status === 'skipped') {
        // Don't count as pass or fail
        validationResults.summary.total--
      } else {
        validationResults.summary.failed++
      }

      validationResults.summary.warnings += result.warnings.length
    }

    // Generate report
    console.log('📄 Generating validation report...\n')
    generateReport()

    // Summary
    const { total, passed, failed, warnings } = validationResults.summary
    console.log('='.repeat(50))
    console.log('📊 Validation Summary')
    console.log('='.repeat(50))
    console.log(`Total: ${total}`)
    console.log(`Passed: ${passed}`)
    console.log(`Failed: ${failed}`)
    console.log(`Warnings: ${warnings}`)

    if (failed === 0 && warnings === 0) {
      console.log('\n✅ All validations passed!')
      process.exit(0)
    } else if (failed === 0) {
      console.log('\n⚠️  Some warnings found - check translation-validation.md')
      process.exit(0)
    } else {
      console.log('\n❌ Some validations failed - check translation-validation.md')
      process.exit(1)
    }
  } catch (error) {
    console.error('Fatal error:', (error as Error).message)
    process.exit(1)
  } finally {
    stopDevServer()
  }
}

// Handle interruptions
process.on('SIGINT', () => {
  console.log('\n\nInterrupted by user')
  stopDevServer()
  process.exit(130)
})

process.on('SIGTERM', () => {
  stopDevServer()
  process.exit(143)
})

main()
