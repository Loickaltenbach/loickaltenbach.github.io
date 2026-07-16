import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'
import './Contact.css'

// Formspree endpoint. The form ID is not secret (it's visible in the client
// request anyway), so it ships as a committed default. Override locally by
// setting VITE_FORMSPREE_ID in a .env file (accepts a full URL or a bare ID).
const resolveEndpoint = (value) => {
  if (!value) return null
  return value.startsWith('http') ? value : `https://formspree.io/f/${value}`
}

const FORMSPREE_ENDPOINT = resolveEndpoint(import.meta.env.VITE_FORMSPREE_ID || 'mpqvqgda')

const EMAIL = 'loickaltenbach@icloud.com'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = t('contact.errors.nameRequired')
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid')
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.messageRequired')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.errors.messageMin')
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)
    if (!validateForm()) return

    if (!FORMSPREE_ENDPOINT) {
      setSubmitStatus('error')
      setErrors({ config: t('contact.errors.config') })
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _gotcha: formData._gotcha
        })
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '', _gotcha: '' })
    } catch {
      setSubmitStatus('error')
      setErrors({ submit: t('contact.errors.submit') })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-index">03</span>
          <h2 id="contact-heading">{t('contact.heading')}</h2>
        </motion.header>

        <div className="contact-grid">
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="contact-description">{t('contact.description')}</p>
            <dl className="contact-info">
              <div className="contact-item">
                <dt>{t('contact.locationLabel')}</dt>
                <dd>{t('contact.locationValue')}</dd>
              </div>
              <div className="contact-item">
                <dt>{t('contact.specializationLabel')}</dt>
                <dd>{t('contact.specializationValue')}</dd>
              </div>
            </dl>
            <div className="alternative-contact">
              <span>{t('contact.altText')}</span>
              <a className="email-link" href={`mailto:${EMAIL}?subject=Portfolio%20Contact`}>
                {t('contact.emailMe')}
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
                placeholder={t('contact.messagePlaceholder')}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
            </div>

            {errors.config && <div className="error-message global-error">{errors.config}</div>}
            {errors.submit && <div className="error-message global-error">{errors.submit}</div>}
            {submitStatus === 'success' && (
              <output className="success-message">{t('contact.success')}</output>
            )}

            <motion.button
              type="submit"
              className="contact-button"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
