class LinkProtection {
  static obfuscateEmail(email) {
    // Encode l'email en base64 et ajoute des caractères aléatoires
    const encoded = btoa(email)
    const randomChars = Array.from({length: 5}, () => 
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join('')
    return encoded + randomChars
  }

  static deobfuscateEmail(obfuscated) {
    // Enlève les 5 derniers caractères et décode
    const encoded = obfuscated.slice(0, -5)
    return atob(encoded)
  }

  static encryptLink(url) {
    // Simple encryption avec rotation Caesar
    const shift = 13
    return url.split('').map(char => {
      const code = char.charCodeAt(0)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65)
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
      return char
    }).join('')
  }

  static decryptLink(encrypted) {
    const shift = 13
    return encrypted.split('').map(char => {
      const code = char.charCodeAt(0)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65)
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97)
      }
      return char
    }).join('')
  }

  static generateDynamicLink(baseUrl, params = {}) {
    // Génère un lien avec des paramètres dynamiques
    const timestamp = Date.now()
    const token = this.generateToken(timestamp)
    
    const urlParams = new URLSearchParams({
      ...params,
      t: timestamp,
      tk: token
    })
    
    return `${baseUrl}?${urlParams.toString()}`
  }

  static generateToken(timestamp) {
    // Génère un token simple basé sur le timestamp
    return btoa(timestamp.toString()).slice(0, 10)
  }

  static validateAccess() {
    // Vérifications anti-bot basiques
    const checks = [
      this.checkUserAgent(),
      this.checkMouseMovement(),
      this.checkJavaScriptEnabled(),
      this.checkScreenSize(),
      this.checkReferrer()
    ]
    
    return checks.filter(check => check).length >= 3
  }

  static checkUserAgent() {
    const ua = navigator.userAgent
    const botPatterns = [
      /bot/i, /crawler/i, /spider/i, /scraper/i,
      /curl/i, /wget/i, /python/i, /node/i
    ]
    return !botPatterns.some(pattern => pattern.test(ua))
  }

  static checkMouseMovement() {
    // Vérifie si la souris a bougé (stocké dans sessionStorage)
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return sessionStorage.getItem('mouseActivity') === 'true'
    }
    return false;
  }

  static checkJavaScriptEnabled() {
    return true // Si ce code s'exécute, JS est activé
  }

  static checkScreenSize() {
    if (typeof window !== 'undefined' && window.screen) {
      return window.screen.width > 100 && window.screen.height > 100
    }
    return false;
  }

  static checkReferrer() {
    // Permet les accès directs et depuis des domaines légitimes
    if (typeof document !== 'undefined') {
      const referrer = document.referrer
      if (!referrer) return true // Accès direct autorisé
      const allowedDomains = ['github.io', 'localhost', 'vercel.app']
      return allowedDomains.some(domain => referrer.includes(domain))
    }
    return false;
  }
}

export default LinkProtection
