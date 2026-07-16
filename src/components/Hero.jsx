import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'
import { CV } from '../data/cv'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero-inner">
        <div className="hero-main">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {'// '}{t('hero.role')}<span className="caret" aria-hidden="true" />
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Loïc<br />Kaltenbach
          </motion.h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.lede')}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              {t('hero.viewWork')} <span aria-hidden="true">→</span>
            </button>
            <a className="btn btn-ghost" href={CV.fullstack} target="_blank" rel="noopener noreferrer">
              {t('hero.cv')}
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="meta-status">
            <span className="dot" aria-hidden="true" />
            {t('hero.available')}
          </div>
          <div className="meta-item">
            <b>{t('hero.basedLabel')}</b>{t('hero.basedValue')}
          </div>
          <div className="meta-item">
            <b>{t('hero.currentlyLabel')}</b>{t('hero.currentlyValue')}
          </div>
          <div className="meta-item">
            <b>{t('hero.expLabel')}</b>{t('hero.expValue')}
          </div>
          <div className="meta-item">
            <b>{t('hero.focusLabel')}</b>{t('hero.focusValue')}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

export default Hero
