import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="banner"
    >
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="logo">
          <span>LK</span>
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('home')} aria-label="Go to home section">Home</button></li>
          <li><button onClick={() => scrollToSection('projects')} aria-label="Go to projects section">Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')} aria-label="Go to contact section">Contact</button></li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
