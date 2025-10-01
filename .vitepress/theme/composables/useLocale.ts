/**
 * Composable for accessing locale data in Vue components
 *
 * Provides reactive access to translated content based on current locale.
 * Falls back to English if locale is not available.
 */

import { computed } from 'vue'
import { useData } from 'vitepress'
import { getLocale, type LocaleData } from '../locales'

export function useLocale() {
  const { lang } = useData()

  const locale = computed<LocaleData>(() => {
    return getLocale(lang.value)
  })

  return {
    locale,
    lang
  }
}
