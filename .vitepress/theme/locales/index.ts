/**
 * Locale registry for Hatcher
 *
 * Central import point for all locale data.
 * Add new locales here as they are translated.
 */

import { en } from './en'
import { es } from './es'
import { fr } from './fr'

export const locales = {
  en,
  es,
  fr
  // Add more locales as they are translated:
  // ar,     // Arabic
  // 'zh-cn', // Chinese Simplified
  // pt,     // Portuguese
  // de,     // German
  // hi,     // Hindi
  // id,     // Indonesian
  // ja,     // Japanese
  // ko,     // Korean
  // fa,     // Persian
  // ru,     // Russian
  // tr,     // Turkish
}

export type SupportedLocale = keyof typeof locales
export type LocaleData = typeof en

/**
 * Get locale data with fallback to English
 */
export function getLocale(locale: string): LocaleData {
  return locales[locale as SupportedLocale] || locales.en
}
