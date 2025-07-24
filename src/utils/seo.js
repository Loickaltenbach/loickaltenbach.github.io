// SEO and Performance Utilities
export const SEOUtils = {
  // Preload critical resources
  preloadCriticalResources: () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  },

  // Add structured data for projects
  addProjectStructuredData: (projects) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Loïc Kaltenbach's Projects",
        "description": "A collection of web and mobile development projects",
        "itemListElement": projects.map((project, index) => ({
          "@type": "SoftwareApplication",
          "position": index + 1,
          "name": project.name,
          "description": project.description,
          "url": project.html_url,
          "applicationCategory": "DeveloperApplication",
          "programmingLanguage": project.language,
          "author": {
            "@type": "Person",
            "name": "Loïc Kaltenbach"
          }
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  },

  // Update page title and meta description dynamically
  updatePageMeta: (title, description) => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
  },

  // Add breadcrumb structured data
  addBreadcrumbData: (breadcrumbs) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
};

// Initialize SEO optimizations (client only)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    SEOUtils.preloadCriticalResources();
  });
}

export default SEOUtils;
