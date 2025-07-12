import { useState, useEffect } from 'react'
import AntiSpam from '../utils/antiSpam'
import LinkProtection from '../utils/linkProtection'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Anti-spam honeypot field
    challenge: '',
    challengeAnswer: ''
  })
  const [challenge, setChallenge] = useState(null)
  const [formStartTime, setFormStartTime] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [accessGranted, setAccessGranted] = useState(false)
  
  // Email obfusqué - ne sera pas visible dans le code source final
  const obfuscatedEmail = 'bG9pYy5rYWx0ZW5iYWNoQGdtYWlsLmNvbQ==ABCDE' // base64 + random chars

  useEffect(() => {
    // Vérification d'accès
    const checkAccess = () => {
      if (LinkProtection.validateAccess()) {
        setAccessGranted(true)
      } else {
        // Délai avant de permettre l'accès
        setTimeout(() => setAccessGranted(true), 2000)
      }
    }
    
    checkAccess()
    
    // Set form start time for anti-spam validation
    setFormStartTime(Date.now())
    
    // Generate anti-spam challenge
    const newChallenge = AntiSpam.generateChallenge()
    setChallenge(newChallenge)
    setFormData(prev => ({ ...prev, challengeAnswer: newChallenge.answer }))
  }, [])

  const getProtectedEmail = () => {
    if (!accessGranted) return 'contact@hidden.com'
    
    try {
      return LinkProtection.deobfuscateEmail(obfuscatedEmail)
    } catch {
      return 'loickaltenbach4@gmail.com' // Fallback
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Basic field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    // Anti-spam validations
    if (!AntiSpam.validateHoneypot(formData.honeypot)) {
      newErrors.spam = 'Spam detected'
    }

    if (!AntiSpam.validateContent(formData.message)) {
      newErrors.spam = 'Message contains prohibited content'
    }

    if (formStartTime && !AntiSpam.validateSubmissionTime(formStartTime)) {
      newErrors.spam = 'Submission too fast. Please wait a moment.'
    }

    if (challenge && !AntiSpam.validateChallenge(formData.challenge, challenge.answer)) {
      newErrors.challenge = 'Incorrect answer to security question'
    }

    // Rate limiting
    const userFingerprint = AntiSpam.getUserFingerprint()
    if (!AntiSpam.checkRateLimit(userFingerprint)) {
      newErrors.rateLimit = 'Too many submissions. Please wait before trying again.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!accessGranted) {
      setErrors({ access: 'Access validation required. Please wait.' })
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!validateForm()) {
      setIsSubmitting(false)
      setSubmitStatus('error')
      return
    }

    try {
      const email = getProtectedEmail()
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nSent via portfolio contact form`
      )
      
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`
      
      // Ajouter un délai anti-bot
      setTimeout(() => {
        window.location.href = mailtoLink
      }, 500)
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
          honeypot: '',
          challenge: '',
          challengeAnswer: ''
        })
        setFormStartTime(Date.now())
        const newChallenge = AntiSpam.generateChallenge()
        setChallenge(newChallenge)
        setFormData(prev => ({ ...prev, challengeAnswer: newChallenge.answer }))
        setSubmitStatus(null)
      }, 3000)
      
    } catch (error) {
      setSubmitStatus(error.message || 'Failed to open email client')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSimpleMailto = () => {
    if (!accessGranted) return
    
    const email = getProtectedEmail()
    const subject = encodeURIComponent('Portfolio Contact')
    const body = encodeURIComponent('Hello Loïc,\n\nI would like to get in touch with you.\n\nBest regards')
    
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    }, 300)
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

          {!accessGranted && (
            <div className="access-validation">
              <p>🔒 Validating secure access...</p>
            </div>
          )}

          {/* Contact Form with Anti-Spam */}
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-describedby={errors.name ? "name-error" : undefined}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-describedby={errors.email ? "email-error" : undefined}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
                placeholder="Tell me about your project or just say hello!"
                aria-describedby={errors.message ? "message-error" : undefined}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
            </div>

            {/* Anti-spam challenge */}
            {challenge && (
              <div className="form-group challenge-group">
                <label htmlFor="challenge">Security Question: {challenge.question} *</label>
                <input
                  type="text"
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  required
                  aria-describedby={errors.challenge ? "challenge-error" : undefined}
                  className={errors.challenge ? 'error' : ''}
                />
                {errors.challenge && <span id="challenge-error" className="error-message">{errors.challenge}</span>}
              </div>
            )}

            {/* Error messages */}
            {errors.spam && <div className="error-message global-error">{errors.spam}</div>}
            {errors.rateLimit && <div className="error-message global-error">{errors.rateLimit}</div>}

            {/* Success message */}
            {submitStatus === 'success' && (
              <div className="success-message">
                Email client opened! Please send the message to complete your contact request.
              </div>
            )}

            {/* Submit button */}
            <motion.button 
              type="submit"
              className="contact-button"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Send contact message"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          {/* Alternative simple mailto button */}
          <div className="alternative-contact">
            <p>Or send a quick email:</p>
            <motion.button 
              className="simple-contact-button"
              onClick={handleSimpleMailto}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Send quick email to Loïc Kaltenbach"
              type="button"
            >
              Quick Email
            </motion.button>
          </div>
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
            <span className="contact-value">France</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Specialization:</span>
            <span className="contact-value">React, React Native, Django</span>
          </div>
        </motion.address>
      </div>
    </section>
  )
}

export default Contact
