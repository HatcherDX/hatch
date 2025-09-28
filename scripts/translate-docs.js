#!/usr/bin/env node

import puppeteer from 'puppeteer'
import { promises as fs } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Configuration
const DOCS_DIR = join(__dirname, '..')
const LANGUAGES = [
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh-cn', name: 'Chinese (Simplified)' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'fa', name: 'Persian' },
  { code: 'id', name: 'Indonesian' },
  { code: 'tr', name: 'Turkish' }
]

// Rate limiting configuration
const DELAY_BETWEEN_REQUESTS = 3000 // 3 seconds between requests
const MAX_RETRIES = 3

// Simple color functions
const colors = {
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  gray: (text) => `\x1b[90m${text}\x1b[0m`,
  cyan: (text) => `\x1b[36m${text}\x1b[0m`
}

// Helper to delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Get markdown files to translate
async function getMarkdownFiles() {
  const pattern = join(DOCS_DIR, '*.md')
  const files = await glob(pattern)

  // Filter out already translated files and README
  return files.filter(file => {
    const name = basename(file)
    return name !== 'README.md' && !LANGUAGES.some(lang => file.includes(`/${lang.code}/`))
  })
}

// Split text into chunks (Google Translate has a limit)
function splitIntoChunks(text, maxLength = 4900) {
  const chunks = []
  const lines = text.split('\n')
  let currentChunk = ''

  for (const line of lines) {
    if ((currentChunk + line + '\n').length > maxLength) {
      if (currentChunk) {
        chunks.push(currentChunk)
        currentChunk = ''
      }
    }
    currentChunk += line + '\n'
  }

  if (currentChunk) {
    chunks.push(currentChunk)
  }

  return chunks
}

// Translate text using Google Translate via Puppeteer
async function translateWithPuppeteer(browser, text, targetLang) {
  const page = await browser.newPage()

  try {
    // Navigate to Google Translate
    const url = `https://translate.google.com/?sl=auto&tl=${targetLang}&text=${encodeURIComponent(text)}&op=translate`
    await page.goto(url, { waitUntil: 'networkidle2' })

    // Wait for translation to appear
    await page.waitForSelector('span[jsname="W297wb"]', { timeout: 10000 })

    // Get translated text
    const translatedText = await page.evaluate(() => {
      const elements = document.querySelectorAll('span[jsname="W297wb"]')
      return Array.from(elements).map(el => el.textContent).join('')
    })

    return translatedText
  } finally {
    await page.close()
  }
}

// Process frontmatter separately to avoid YAML issues
function processFrontmatter(content, translatedContent) {
  // Check if original has frontmatter
  const originalFrontmatter = content.match(/^---\n([\s\S]*?)\n---/)
  const translatedFrontmatter = translatedContent.match(/^---\n([\s\S]*?)\n---/)

  if (originalFrontmatter && translatedFrontmatter) {
    // Extract the original frontmatter structure
    const originalLines = originalFrontmatter[1].split('\n')
    let fixedFrontmatter = translatedFrontmatter[1]

    // Fix any translated keys back to English
    fixedFrontmatter = fixedFrontmatter.replace(/^(Título|título):/gim, 'title:')
    fixedFrontmatter = fixedFrontmatter.replace(/^(Descripción|descripción):/gim, 'description:')
    fixedFrontmatter = fixedFrontmatter.replace(/^(Diseño|diseño|layout):/gim, 'layout:')

    // Quote values with colons
    fixedFrontmatter = fixedFrontmatter.replace(/^(title|description):\s*(.+)$/gm, (match, key, value) => {
      if (value.includes(':') && !value.startsWith('"') && !value.startsWith("'")) {
        return `${key}: "${value.replace(/"/g, '\\"')}"`
      }
      return match
    })

    // Replace the frontmatter in translated content
    return translatedContent.replace(translatedFrontmatter[0], `---\n${fixedFrontmatter}\n---`)
  }

  return translatedContent
}

// Translate a single file
async function translateFile(browser, filePath, targetLang) {
  const fileName = basename(filePath)

  try {
    console.log(colors.gray(`    Translating ${fileName}...`))

    const content = await fs.readFile(filePath, 'utf8')

    // Skip empty files
    if (!content.trim()) {
      console.log(colors.yellow(`    Skipping empty file: ${fileName}`))
      return { success: false, error: 'Empty file' }
    }

    // Split content into chunks if too long
    const chunks = splitIntoChunks(content)
    const translatedChunks = []

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i]
      let retries = 0
      let translated = null

      while (retries < MAX_RETRIES && !translated) {
        try {
          translated = await translateWithPuppeteer(browser, chunk, targetLang)
          translatedChunks.push(translated)

          // Rate limiting between chunks
          if (i < chunks.length - 1) {
            await delay(DELAY_BETWEEN_REQUESTS)
          }
        } catch (error) {
          retries++
          if (retries >= MAX_RETRIES) {
            throw error
          }
          console.log(colors.yellow(`    Retry ${retries}/${MAX_RETRIES} for chunk ${i+1}/${chunks.length}`))
          await delay(DELAY_BETWEEN_REQUESTS * 2)
        }
      }
    }

    // Join translated chunks
    let translatedContent = translatedChunks.join('\n')

    // Fix frontmatter to avoid YAML issues
    translatedContent = processFrontmatter(content, translatedContent)

    // Create target directory
    const targetDir = join(DOCS_DIR, targetLang)
    await fs.mkdir(targetDir, { recursive: true })

    // Write translated file
    const targetPath = join(targetDir, fileName)
    await fs.writeFile(targetPath, translatedContent, 'utf8')

    console.log(colors.green(`    ✓ ${fileName}`))
    return { success: true }
  } catch (error) {
    console.error(colors.red(`    ✗ Failed to translate ${fileName}: ${error.message}`))
    return { success: false, error: error.message }
  }
}

// Main translation function
async function translateDocumentation() {
  console.log(colors.blue('🚀 Starting documentation translation...'))
  console.log(colors.gray(`📁 Documentation directory: ${DOCS_DIR}`))
  console.log(colors.gray(`🌍 Target languages: ${LANGUAGES.length}`))
  console.log()

  const files = await getMarkdownFiles()

  if (files.length === 0) {
    console.log(colors.yellow('No markdown files found to translate'))
    return
  }

  console.log(colors.cyan(`📄 Found ${files.length} files to translate`))
  files.forEach(file => {
    console.log(colors.gray(`   - ${basename(file)}`))
  })
  console.log()

  // Launch browser
  console.log(colors.cyan('🔧 Launching browser...'))
  const browser = await puppeteer.launch({
    headless: 'shell',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  try {
    const stats = {
      totalFiles: files.length * LANGUAGES.length,
      successful: 0,
      failed: 0
    }

    // Process each language
    for (const lang of LANGUAGES) {
      console.log(colors.blue(`\n🌐 Translating to ${lang.name} (${lang.code})...`))

      // Translate each file
      for (const file of files) {
        const result = await translateFile(browser, file, lang.code)

        if (result.success) {
          stats.successful++
        } else {
          stats.failed++
        }

        // Rate limiting between files
        await delay(DELAY_BETWEEN_REQUESTS)
      }

      console.log(colors.green(`  ✅ Completed ${lang.name}`))
    }

    // Print summary
    console.log(colors.green('\n✨ Translation completed!'))
    console.log(colors.gray(`   Total files: ${stats.totalFiles}`))
    console.log(colors.green(`   Successful: ${stats.successful}`))
    if (stats.failed > 0) {
      console.log(colors.yellow(`   Failed: ${stats.failed}`))
    }
  } catch (error) {
    console.error(colors.red(`\n❌ Translation failed: ${error.message}`))
    process.exit(1)
  } finally {
    // Clean up
    await browser.close()
  }
}

// Handle script arguments
const args = process.argv.slice(2)

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: node scripts/translate-docs.js [options]

Options:
  --help, -h     Show this help message
  --test         Run in test mode (translate only to Spanish)

This script translates all markdown documentation files to multiple languages
using Google Translate via Puppeteer.
`)
  process.exit(0)
}

// Test mode - only translate to Spanish
if (args.includes('--test')) {
  LANGUAGES.length = 0
  LANGUAGES.push({ code: 'es', name: 'Spanish' })
  console.log(colors.yellow('🧪 Running in test mode - only translating to Spanish'))
}

// Run translation
translateDocumentation().catch(error => {
  console.error(colors.red('Fatal error:'), error)
  process.exit(1)
})