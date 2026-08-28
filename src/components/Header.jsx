import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'
import { useTheme } from '../hooks/useTheme'
import './Header.css'

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

const Header = () => {
  const { t, lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = ['home', 'about', 'projects', 'homelab', 'contact']
  const sectionFor = { home: 'home', about: 'about', projects: 'projects', homelab: 'homelab', contact: 'contact' }

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav" aria-label="Main navigation">
        <button className="logo" onClick={() => scrollToSection('home')} aria-label="Loïc Kaltenbach — home">
          LK<span className="logo-dot">.</span>
        </button>

        <ul className="nav-links">
          {links.map((key) => (
            <li key={key}>
              <button onClick={() => scrollToSection(sectionFor[key])}>
                {t(`nav.${key}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={t('a11y.toggleLang')}
          >
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            <span className="sep" aria-hidden="true">/</span>
            <span className={lang === 'ja' ? 'is-active' : ''}>日本語</span>
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={t('a11y.toggleTheme')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
