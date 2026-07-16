import { useContext } from 'react'
import { LanguageContext } from './context'

// Access the current language, setters, and the translation helper `t`.
export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
