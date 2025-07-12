import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SEOUtils } from '../utils/seo'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Loickaltenbach/repos?sort=updated&per_page=6')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        
        // Filter out forks and private repos, and add some custom data
        const filteredProjects = data
          .filter(repo => !repo.fork && !repo.private)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            topics: repo.topics || []
          }))
        
        setProjects(filteredProjects)
        
        // Add structured data for SEO
        SEOUtils.addProjectStructuredData(filteredProjects)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="error">Error: {error}</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects" role="main" aria-labelledby="projects-heading">
      <div className="container">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
          aria-label="List of my projects"
        >
          {projects.map((project) => (
            <motion.article 
              key={project.id} 
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              role="listitem"
            >
              <header className="project-header">
                <h3>{project.name}</h3>
                {project.language && (
                  <span className={`language-tag ${project.language.toLowerCase()}`}>
                    {project.language}
                  </span>
                )}
              </header>
              <p className="project-description">{project.description}</p>
              {project.topics.length > 0 && (
                <div className="project-topics" role="list" aria-label="Project technologies">
                  {project.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="topic-tag" role="listitem">
                      {topic}
                    </span>
                  ))}
                </div>
              )}
              <footer className="project-footer">
                <div className="project-stats">
                    {project.topics.length > 0 && (
                        <span className="topics-count" aria-label={`${project.topics.length} technologies used`}>
                        {project.topics.length} Techs
                        </span>
                    )}
                </div>
                <div className="project-links">
                  {project.homepage && (
                    <a 
                      href={project.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                      aria-label={`View live demo of ${project.name}`}
                    >
                      Demo
                    </a>
                  )}
                  <a 
                    href={project.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link code"
                    aria-label={`View source code of ${project.name} on GitHub`}
                  >
                    Code
                  </a>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
