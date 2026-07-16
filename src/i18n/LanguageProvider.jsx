import { useState, useEffect, useMemo, useCallback } from 'react'
import { LanguageContext } from './context'
import { translations } from './translations'

const getInitialLang = () => {
  const stored = localStorage.getItem('lang')
  if (stored === 'en' || stored === 'ja') return stored
  return navigator.language?.toLowerCase().startsWith('ja') ? 'ja' : 'en'
}

const resolve = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj)

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dataset.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ja' : 'en'))
  }, [])

  // Resolve a dot-path (e.g. 'hero.lede'); falls back to English, then the key.
  const t = useCallback(
    (path) => {
      const value = resolve(translations[lang], path)
      if (value !== undefined) return value
      const fallback = resolve(translations.en, path)
      return fallback !== undefined ? fallback : path
    },
    [lang]
  )

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, toggleLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
