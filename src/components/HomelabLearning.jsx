import { motion } from 'framer-motion'
import { learningSkills } from '../data/skills'
import { useLanguage } from '../i18n/useLanguage'
import './HomelabLearning.css'

const HomelabLearning = () => {
  const { t } = useLanguage()

  return (
    <section id="homelab" className="section homelab" aria-labelledby="homelab-heading">
      <div className="container">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-index">03</span>
          <h2 id="homelab-heading">{t('homelab.heading')}</h2>
        </motion.header>

        <div className="homelab-grid">
          <motion.div
            className="homelab-body"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>{t('homelab.body1')}</p>
            <p>{t('homelab.body2')}</p>
          </motion.div>

          <motion.div
            className="homelab-learning"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{t('homelab.learningTitle')}</h3>
            <ul>
              {learningSkills.map((skill) => (
                <li key={skill} className="chip-learning">{skill}</li>
              ))}
            </ul>
            <p className="homelab-note">{t('homelab.learningNote')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomelabLearning
