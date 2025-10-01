/**
 * Core types for the VitePress token extraction and translation system.
 *
 * @remarks
 * Defines the data structures for managing translatable content tokens
 * extracted from VitePress documentation sites.
 *
 * @public
 * @since 1.0.0
 */

export type TokenType = 'ui' | 'content' | 'meta' | 'component'

export type SupportedLanguageCode =
  | 'ar'    // Arabic
  | 'zh-cn' // Chinese Simplified
  | 'es'    // Spanish
  | 'pt'    // Portuguese
  | 'fr'    // French
  | 'de'    // German
  | 'hi'    // Hindi
  | 'id'    // Indonesian
  | 'ja'    // Japanese
  | 'ko'    // Korean
  | 'fa'    // Persian
  | 'ru'    // Russian
  | 'tr'    // Turkish

export interface TranslationToken {
  id: string
  text: string
  type: TokenType
  context?: string
  file?: string
  line?: number
  hash?: string
  translations?: Partial<Record<SupportedLanguageCode, string>>
}

export interface ExtractedTokens {
  ui: TranslationToken[]
  content: TranslationToken[]
  meta: TranslationToken[]
  component: TranslationToken[]
}

export interface TranslationManifest {
  version: string
  lastUpdated: string
  sourceLanguage: string
  targetLanguages: SupportedLanguageCode[]
  tokens: ExtractedTokens
  stats: {
    totalTokens: number
    totalCharacters: number
    byType: Record<TokenType, number>
  }
}
