import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const handleMailto = () => {
    window.location.href = 'mailto:loic.kaltenbach@example.com?subject=Portfolio Contact&body=Hello Loïc,%0D%0A%0D%0AI would like to get in touch with you.'
  }

  return (
    <section id="contact" className="contact" role="region" aria-labelledby="contact-heading">
      <div className="container">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="contact-description">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hello, 
            feel free to reach out!
          </p>
          <motion.button 
            className="contact-button"
            onClick={handleMailto}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Send email to Loïc Kaltenbach"
            type="button"
          >
            Send Email
          </motion.button>
        </motion.div>
        <motion.address 
          className="contact-info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="contact-item">
            <span className="contact-label">Location:</span>
            <span className="contact-value">Germany</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Specialization:</span>
            <span className="contact-value">React, React Native, Flutter, Django</span>
          </div>
        </motion.address>
      </div>
    </section>
  )
}

export default Contact
