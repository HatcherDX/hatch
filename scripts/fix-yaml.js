#!/usr/bin/env node

import { promises as fs } from 'fs'
import { glob } from 'glob'

// Fix YAML frontmatter values with colons
async function fixYamlFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8')

    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (!frontmatterMatch) return false

    let frontmatter = frontmatterMatch[1]
    const originalFrontmatter = frontmatter

    // Fix title and description lines with colons in values
    frontmatter = frontmatter.replace(/^(title|description):\s*(.+)$/gm, (match, key, value) => {
      // If value contains a colon and is not already quoted
      if (value.includes(':') && !value.startsWith('"') && !value.startsWith("'")) {
        // Quote the value
        return `${key}: "${value.replace(/"/g, '\\"')}"`
      }
      return match
    })

    if (frontmatter !== originalFrontmatter) {
      // Replace the frontmatter
      content = content.replace(frontmatterMatch[0], `---\n${frontmatter}\n---`)
      await fs.writeFile(filePath, content, 'utf8')
      console.log(`✓ Fixed: ${filePath}`)
      return true
    }

    return false
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Main function
async function main() {
  console.log('🔧 Fixing YAML frontmatter with colons...\n')

  // Find all markdown files in language directories
  const files = await glob('**/*.md')

  let fixedCount = 0

  for (const file of files) {
    const wasFixed = await fixYamlFile(file)
    if (wasFixed) fixedCount++
  }

  console.log(`\n✅ Fixed ${fixedCount} files`)
}

main().catch(console.error)