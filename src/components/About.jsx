import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { CV } from '../data/cv'
import { useLanguage } from '../i18n/useLanguage'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  const highlights = t('about.highlights')

  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-index">01</span>
          <h2 id="about-heading">{t('about.heading')}</h2>
        </motion.header>

        <div className="about-grid">
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>{t('about.bio1')}</p>
            <p>{t('about.bio2')}</p>

            <p className="about-languages">
              <span className="about-languages-label">{t('about.languagesLabel')}</span>
              {t('about.languagesValue')}
            </p>

            <div className="about-cv-row">
              <a className="about-cv" href={CV.fullstack} target="_blank" rel="noopener noreferrer">
                {t('about.cv')}
              </a>
              <span className="about-cv-alt">
                {t('about.cvAlso')}
                <a href={CV.frontend} target="_blank" rel="noopener noreferrer">{t('about.cvFrontend')}</a>
                <span aria-hidden="true">·</span>
                <a href={CV.mobile} target="_blank" rel="noopener noreferrer">{t('about.cvMobile')}</a>
              </span>
            </div>
          </motion.div>

          <motion.ul
            className="about-highlights"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, i) => (
              <li key={item.title} className="highlight-card">
                <span className="highlight-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="about-skills"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="skills-title">{t('about.skillsTitle')}</h3>
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.key} className="skill-group">
                <h4>{t(`skills.groups.${group.key}`)}</h4>
                <ul aria-label={t(`skills.groups.${group.key}`)}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
