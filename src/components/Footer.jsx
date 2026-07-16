import { useLanguage } from '../i18n/useLanguage'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">LK<span className="logo-dot">.</span></span>
          <p>{t('footer.role')}</p>
        </div>

        <div className="footer-connect">
          <h2>{t('footer.connect')}</h2>
          <div className="social-links">
            <a href="https://github.com/loickaltenbach" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/loic-kaltenbach-801619113" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Loïc Kaltenbach. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
