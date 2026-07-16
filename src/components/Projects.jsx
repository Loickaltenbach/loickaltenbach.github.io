import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SEOUtils } from '../utils/seo'
import { projects } from '../data/projects'
import { translations } from '../i18n/translations'
import { useLanguage } from '../i18n/useLanguage'
import './Projects.css'

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
}

const Projects = () => {
  const { t } = useLanguage()

  // Structured data uses English copy and runs once, so language toggles
  // don't append duplicate JSON-LD scripts.
  useEffect(() => {
    SEOUtils.addProjectStructuredData(
      projects.map((p) => ({
        name: p.title,
        description: translations.en.projects.items[p.id]?.description ?? '',
        html_url: p.repoUrl,
        language: p.tech[0]
      }))
    )
  }, [])

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-index">02</span>
          <h2 id="projects-heading">{t('projects.heading')}</h2>
          <span className="section-note">{t('projects.count')}</span>
        </motion.header>

        <motion.ul
          className="project-index"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.li key={project.id} className="project-row" variants={rowVariants}>
              <a
                className="row-main"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — ${t('projects.viewGithub')}`}
              >
                <span className="row-num">{String(i + 1).padStart(3, '0')}</span>
                <span className="row-title">
                  {project.title}
                  <small>{t(`projects.items.${project.id}.highlight`)}</small>
                </span>
                <span className="row-stack">{project.tech.join(' · ')}</span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </a>
              {project.demoUrl && (
                <a
                  className="row-demo"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — ${t('projects.viewDemo')}`}
                >
                  {t('projects.viewDemo')}
                </a>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Projects
