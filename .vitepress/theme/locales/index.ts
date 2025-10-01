/**
 * Locale registry for Hatcher
 *
 * Central import point for all locale data.
 * Add new locales here as they are translated.
 */

import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { de } from './de'

export const locales = {
  en,
  es,
  fr,
  de
  // Add more locales as they are translated:
  // ar,     // Arabic
  // 'zh-cn', // Chinese Simplified
  // pt,     // Portuguese
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
