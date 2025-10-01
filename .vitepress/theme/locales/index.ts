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
import { pt } from './pt'
import { ar } from './ar'
import zhCn from './zh-cn'
import hi from './hi'

export const locales = {
  en,
  es,
  fr,
  de,
  pt,
  ar,
  'zh-cn': zhCn,
  hi
  // Add more locales as they are translated:
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
