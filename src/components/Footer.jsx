import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Loïc Kaltenbach</h4>
            <p>React, React Native, Django Developer</p>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a 
                href="https://github.com/Loickaltenbach" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/loic-kaltenbach-801619113" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Loïc Kaltenbach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
