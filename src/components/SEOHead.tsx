import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoData, PageSEO } from '../data/seoData';

interface SEOHeadProps {
  override?: Partial<PageSEO>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ override }) => {
  const location = useLocation();

  // Normalize route path: remove trailing slashes or map .php equivalents
  let path = location.pathname.toLowerCase();
  if (path.endsWith('.php')) {
    path = path.replace(/\.php$/, '');
    if (path === '/index') path = '/';
  }
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const baseConfig = seoData[path] || seoData['/'];
  const config: PageSEO = {
    ...baseConfig,
    ...override
  };

  useEffect(() => {
    // 1. Update Title
    document.title = config.title;

    // Helper to update or create a meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', config.description);
    setLinkTag('canonical', config.canonical);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    setMetaTag('property', 'og:url', config.canonical);
    setMetaTag('property', 'og:type', config.ogType);
    setMetaTag('property', 'og:image', config.ogImage);
    setMetaTag('property', 'og:site_name', 'GES Quality Education');
    setMetaTag('property', 'og:locale', 'en_US');

    // 4. Twitter / X Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@GES_education');
    setMetaTag('name', 'twitter:title', config.title);
    setMetaTag('name', 'twitter:description', config.description);
    setMetaTag('name', 'twitter:image', config.ogImage);

    // 5. BreadcrumbList JSON-LD
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };

    // 6. Inject Schema.org Scripts
    // Clean up previously injected schemas
    const existingScripts = document.querySelectorAll('script[data-seo="dynamic-jsonld"]');
    existingScripts.forEach((script) => script.remove());

    const allSchemas = [breadcrumbSchema, ...config.schema];

    allSchemas.forEach((schemaObj, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'dynamic-jsonld');
      script.setAttribute('data-schema-index', String(index));
      script.textContent = JSON.stringify(schemaObj, null, 2);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup dynamically injected schema scripts on unmount or route change
      const dynamicScripts = document.querySelectorAll('script[data-seo="dynamic-jsonld"]');
      dynamicScripts.forEach((script) => script.remove());
    };
  }, [config]);

  return null;
};
