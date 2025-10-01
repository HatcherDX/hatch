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
import id from './id'
import ja from './ja'
import ko from './ko'
import fa from './fa'

export const locales = {
  en,
  es,
  fr,
  de,
  pt,
  ar,
  'zh-cn': zhCn,
  hi,
  id,
  ja,
  ko,
  fa
  // Add more locales as they are translated:
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
