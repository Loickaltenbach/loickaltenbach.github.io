// Enhanced security and monitoring for contact form
export class ContactSecurity {
  constructor() {
    this.suspiciousPatterns = [
      // Email patterns
      /\b\d{10,}\b/g, // Long number sequences
      /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}){3,}/gi, // Multiple emails
      
      // URL patterns
      /(https?:\/\/[^\s]+)/gi, // Any URLs
      /\b(bit\.ly|tinyurl|t\.co|short\.link)\b/gi, // URL shorteners
      
      // Spam keywords
      /\b(seo|backlink|rank|traffic|guaranteed|100%|money back)\b/gi,
      /\b(buy now|limited time|urgent|act fast|discount)\b/gi,
      /\b(cryptocurrency|bitcoin|trading|investment|profit)\b/gi,
      
      // Suspicious patterns
      /(.)\1{5,}/g, // Repeated characters (more than 5)
      /[A-Z]{10,}/g, // Long uppercase sequences
      /\b\w{1}\s\w{1}\s\w{1}/g, // Single character words pattern
    ];

    this.maxMessageLength = 2000;
    this.minMessageLength = 10;
    this.maxNameLength = 100;
    this.maxEmailLength = 254; // RFC 5321 limit
  }

  // Comprehensive content validation
  validateMessageContent(message) {
    if (message.length < this.minMessageLength) {
      return { valid: false, reason: 'Message too short' };
    }

    if (message.length > this.maxMessageLength) {
      return { valid: false, reason: 'Message too long' };
    }

    // Check for suspicious patterns
    const suspiciousMatches = this.suspiciousPatterns.filter(pattern => 
      pattern.test(message)
    );

    if (suspiciousMatches.length > 0) {
      return { valid: false, reason: 'Message contains suspicious content' };
    }

    // Check for repeated words
    const words = message.toLowerCase().split(/\s+/);
    const wordCount = {};
    for (const word of words) {
      if (word.length > 3) { // Only check words longer than 3 characters
        wordCount[word] = (wordCount[word] || 0) + 1;
        if (wordCount[word] > 5) { // More than 5 repetitions
          return { valid: false, reason: 'Message contains too many repeated words' };
        }
      }
    }

    return { valid: true };
  }

  // Validate name field
  validateName(name) {
    if (!name || name.trim().length < 2) {
      return { valid: false, reason: 'Name must be at least 2 characters' };
    }

    if (name.length > this.maxNameLength) {
      return { valid: false, reason: 'Name too long' };
    }

    // Check for suspicious patterns in name
    if (/\d{3,}/.test(name)) { // 3 or more consecutive digits
      return { valid: false, reason: 'Name contains suspicious content' };
    }

    if (/[^\w\s\-'.]/.test(name)) { // Only allow letters, spaces, hyphens, apostrophes, dots
      return { valid: false, reason: 'Name contains invalid characters' };
    }

    return { valid: true };
  }

  // Enhanced email validation
  validateEmail(email) {
    if (!email || email.trim().length === 0) {
      return { valid: false, reason: 'Email is required' };
    }

    if (email.length > this.maxEmailLength) {
      return { valid: false, reason: 'Email too long' };
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valid: false, reason: 'Invalid email format' };
    }

    // Check for disposable email domains
    const disposableDomains = [
      '10minutemail.com', 'tempmail.org', 'guerrillamail.com',
      'mailinator.com', 'yopmail.com', 'throwaway.email'
    ];

    const domain = email.split('@')[1]?.toLowerCase();
    if (disposableDomains.includes(domain)) {
      return { valid: false, reason: 'Disposable email addresses are not allowed' };
    }

    return { valid: true };
  }

  // Check submission frequency per IP/fingerprint
  isSubmissionAllowed(fingerprint) {
    const key = `contact_submission_${fingerprint}`;
    const lastSubmission = localStorage.getItem(key);
    
    if (lastSubmission) {
      const timeDiff = Date.now() - parseInt(lastSubmission);
      const cooldownPeriod = 5 * 60 * 1000; // 5 minutes
      
      if (timeDiff < cooldownPeriod) {
        return {
          allowed: false,
          remainingTime: Math.ceil((cooldownPeriod - timeDiff) / 1000 / 60)
        };
      }
    }

    return { allowed: true };
  }

  // Record successful submission
  recordSubmission(fingerprint) {
    const key = `contact_submission_${fingerprint}`;
    localStorage.setItem(key, Date.now().toString());
  }

  // Generate a more complex challenge
  generateAdvancedChallenge() {
    const challenges = [
      { question: "What is the sum of 7 and 3?", answer: "10" },
      { question: "How many letters are in the word 'HELLO'?", answer: "5" },
      { question: "What comes after Tuesday?", answer: "wednesday" },
      { question: "What is 15 minus 8?", answer: "7" },
      { question: "How many sides does a triangle have?", answer: "3" },
      { question: "What is the capital of France?", answer: "paris" },
      { question: "What color do you get when you mix red and blue?", answer: "purple" },
      { question: "How many months are in a year?", answer: "12" },
      { question: "What is 4 times 3?", answer: "12" },
      { question: "What is the opposite of 'hot'?", answer: "cold" }
    ];
    
    return challenges[Math.floor(Math.random() * challenges.length)];
  }

  // Validate challenge with multiple acceptable answers
  validateChallenge(userAnswer, correctAnswer) {
    const normalizedUser = userAnswer.toLowerCase().trim();
    const normalizedCorrect = correctAnswer.toLowerCase().trim();
    
    // Direct match
    if (normalizedUser === normalizedCorrect) {
      return true;
    }

    // Handle common variations
    const variations = {
      'wednesday': ['wed'],
      'paris': ['paris, france'],
      'purple': ['violet'],
      'cold': ['cool', 'chilly']
    };

    if (variations[normalizedCorrect]) {
      return variations[normalizedCorrect].includes(normalizedUser);
    }

    return false;
  }

  // Log security events (for debugging)
  logSecurityEvent(event, details) {
    if (import.meta.env.DEV) {
      console.warn(`[Security] ${event}:`, details);
    }
  }
}

export default new ContactSecurity();
