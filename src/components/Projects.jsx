import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SEOUtils } from '../utils/seo'
import LinkProtection from '../utils/linkProtection'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [accessValidated, setAccessValidated] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Validation d'accès avant de fetcher
        if (!LinkProtection.validateAccess()) {
          setTimeout(() => setAccessValidated(true), 1500)
        } else {
          setAccessValidated(true)
        }
        
        const response = await fetch('https://api.github.com/users/loickaltenbach/repos')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        
        // Filter and obfuscate project data
        const filteredProjects = data
          .filter(repo => !repo.fork && !repo.private)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            // Obfusquer les URLs
            html_url: LinkProtection.encryptLink(repo.html_url),
            homepage: repo.homepage ? LinkProtection.encryptLink(repo.homepage) : null,
            language: repo.language || 'CSS',
            topics: repo.topics || []
          }))
        
        setProjects(filteredProjects)
        SEOUtils.addProjectStructuredData(filteredProjects)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleProjectClick = (encryptedUrl) => {
    if (!accessValidated) {
      alert('Please wait for access validation...')
      return
    }
    
    try {
      const actualUrl = LinkProtection.decryptLink(encryptedUrl)
      
      // Ajouter un délai anti-bot
      setTimeout(() => {
        window.open(actualUrl, '_blank', 'noopener,noreferrer')
      }, 200)
    } catch {
      console.warn('Link access denied')
    }
  }

  const handleDemoClick = (e, encryptedUrl) => {
    e.stopPropagation()
    
    if (!accessValidated || !encryptedUrl) return
    
    try {
      const actualUrl = LinkProtection.decryptLink(encryptedUrl)
      setTimeout(() => {
        window.open(actualUrl, '_blank', 'noopener,noreferrer')
      }, 200)
    } catch {
      console.warn('Demo link access denied')
    }
  }

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
          <h2>My latest personal projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2>My latest personal projects</h2>
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
          My latest personal projects
        </motion.h2>
        
        {!accessValidated && (
          <div className="access-loading">
            <p>Validating access...</p>
          </div>
        )}
        
        <motion.ul 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
          aria-label="List of my projects"
        >
          {projects.map((project) => (
            <motion.li 
              key={project.id} 
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleProjectClick(project.html_url)}
              style={{ cursor: accessValidated ? 'pointer' : 'not-allowed' }}
              tabIndex={accessValidated ? 0 : -1}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && accessValidated) {
                  e.preventDefault()
                  handleProjectClick(project.html_url)
                }
              }}
              aria-label={`View ${project.name} project`}
              role="listitem"
            >
              <header className="project-header">
                <h3>{project.name}</h3>
                <div className="project-meta">
                  {project.language && (
                    <span className={`language-tag ${project.language.toLowerCase()}`}>
                      {project.language}
                    </span>
                  )}
                  <span className="click-hint" aria-hidden="true">
                    {accessValidated ? 'Click to view' : 'Loading...'}
                  </span>
                </div>
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
                  {project.homepage && accessValidated && (
                    <button
                      className="project-link demo"
                      onClick={(e) => handleDemoClick(e, project.homepage)}
                      aria-label={`View live demo of ${project.name}`}
                    >
                      Demo
                    </button>
                  )}
                </div>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Projects
