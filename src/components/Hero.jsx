import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero" role="banner">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Loïc Kaltenbach
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          React, React Native, Django Developer working at{' '}
          <a 
            href="https://www.actimage.de/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="company-link"
            aria-label="Visit Actimage GmbH website"
          >
            Actimage GmbH
          </a>
        </motion.p>
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            className="cta-button"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            aria-label="View my projects and work"
          >
            View My Work
          </button>
        </motion.div>
      </div>
      <motion.div 
        className="hero-background"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      >
        <div className="floating-elements">
          <div className="floating-element react" aria-label="React technology"></div>
          <div className="floating-element django" aria-label="Django technology"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
