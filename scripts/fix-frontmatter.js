#!/usr/bin/env node

import { promises as fs } from 'fs'
import { glob } from 'glob'
import { join } from 'path'

// Fix frontmatter in translated files
async function fixFrontmatter(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8')

    // Replace translated frontmatter keys with English ones
    content = content.replace(/^Título:/gim, 'title:')
    content = content.replace(/^Descripción:/gim, 'description:')
    content = content.replace(/^Diseño:/gim, 'layout:')
    content = content.replace(/^Héroe:/gim, 'hero:')
    content = content.replace(/^Características:/gim, 'features:')

    await fs.writeFile(filePath, content, 'utf8')
    return true
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Main function
async function main() {
  console.log('🔧 Fixing frontmatter in translated files...')

  // Find all markdown files in language directories
  const patterns = [
    'es/*.md',
    'fr/*.md',
    'de/*.md',
    'zh-cn/*.md',
    'ja/*.md',
    'ko/*.md',
    'pt/*.md',
    'ru/*.md',
    'ar/*.md',
    'hi/*.md',
    'fa/*.md',
    'id/*.md',
    'tr/*.md'
  ]

  let totalFixed = 0

  for (const pattern of patterns) {
    const files = await glob(pattern)

    for (const file of files) {
      const result = await fixFrontmatter(file)
      if (result) totalFixed++
    }
  }

  console.log(`✅ Fixed frontmatter in ${totalFixed} files`)
}

main().catch(console.error)