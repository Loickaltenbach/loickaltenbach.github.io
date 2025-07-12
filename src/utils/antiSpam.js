// Anti-spam utilities for contact form
export class AntiSpam {
  constructor() {
    this.submissionTimes = new Map();
    this.rateLimitWindow = 60000; // 1 minute
    this.maxSubmissions = 3; // Max 3 submissions per minute
  }

  // Honeypot validation
  validateHoneypot(honeypotValue) {
    return honeypotValue === '' || honeypotValue === undefined;
  }

  // Rate limiting
  checkRateLimit(identifier = 'anonymous') {
    const now = Date.now();
    const submissions = this.submissionTimes.get(identifier) || [];
    
    // Remove old submissions outside the time window
    const recentSubmissions = submissions.filter(
      time => now - time < this.rateLimitWindow
    );
    
    if (recentSubmissions.length >= this.maxSubmissions) {
      return false; // Rate limit exceeded
    }
    
    // Add current submission
    recentSubmissions.push(now);
    this.submissionTimes.set(identifier, recentSubmissions);
    
    return true; // Submission allowed
  }

  // Basic content validation
  validateContent(content) {
    const spamPatterns = [
      /\b(viagra|cialis|lottery|winner|congratulations)\b/i,
      /\b(earn money|make money|work from home)\b/i,
      /\b(click here|visit now|act now)\b/i,
      /\b(free money|get rich|guaranteed)\b/i,
      /(http[s]?:\/\/[^\s]+){3,}/g, // Multiple URLs
      /(.)\1{10,}/g, // Repeated characters
    ];

    return !spamPatterns.some(pattern => pattern.test(content));
  }

  // Time-based validation (submission too fast)
  validateSubmissionTime(startTime) {
    const submissionTime = Date.now() - startTime;
    return submissionTime > 3000; // Must take at least 3 seconds
  }

  // Generate a simple challenge
  generateChallenge() {
    const challenges = [
      { question: "What is 2 + 3?", answer: "5" },
      { question: "What color is the sky?", answer: "blue" },
      { question: "How many days in a week?", answer: "7" },
      { question: "What is the first letter of the alphabet?", answer: "a" },
      { question: "What is 10 - 5?", answer: "5" }
    ];
    
    return challenges[Math.floor(Math.random() * challenges.length)];
  }

  // Validate challenge answer
  validateChallenge(userAnswer, correctAnswer) {
    return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase();
  }

  // Get user's fingerprint for rate limiting
  getUserFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Anti-spam fingerprint', 2, 2);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');
    
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return Math.abs(hash).toString(36);
  }
}

export default new AntiSpam();
