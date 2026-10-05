/**
 * Comprehensive SEO, Social, GEO, and Schema.org Structured Data
 * strictly derived from verified project content and configuration.
 * No fabricated statistics, reviews, ratings, or addresses.
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
  ogImage: string;
  breadcrumbs: BreadcrumbItem[];
  schema: Record<string, unknown>[];
}

const BASE_URL = 'https://www.ges.om';

/**
 * Generates a valid Schema.org BreadcrumbList object
 */
export const createBreadcrumbListSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((crumb, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: crumb.name,
    item: crumb.url
  }))
});

// Shared Organization Identity
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://www.ges.om/#organization',
  name: 'Global Education Services Company',
  alternateName: 'GES Quality Education',
  legalName: 'Global Education Services L.L.C.',
  url: 'https://www.ges.om',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://www.ges.om/#logo',
    url: 'https://www.ges.om/assets/img/banner/ges-logo.png',
    caption: 'GES Quality Education Logo'
  },
  image: 'https://www.ges.om/assets/img/banner/ges-logo.png',
  description: 'Leading private education group in the Sultanate of Oman, delivering world-class K-12 premium schools, preschools, and early learning centers since 2012.',
  foundingDate: '2012',
  founder: {
    '@type': 'Person',
    name: 'Honorable Sheikh Salim Hamood Al Hashmi',
    jobTitle: 'Chairman'
  },
  address: {
    '@type': 'PostalAddress',
    postOfficeBoxNumber: '1756',
    postalCode: '111',
    streetAddress: 'Airport Heights',
    addressLocality: 'Muscat',
    addressCountry: 'OM'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.6302,
    longitude: 58.1937
  },
  telephone: '+968 24554422',
  email: 'info@ges.om',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+968 24554422',
      contactType: 'customer service',
      email: 'info@ges.om',
      areaServed: 'OM',
      availableLanguage: ['English', 'Arabic']
    }
  ],
  sameAs: [
    'https://www.facebook.com/GES-Global-Education-Services-109478385115626',
    'https://www.instagram.com/ges.education/',
    'https://twitter.com/GES_education',
    'https://www.linkedin.com',
    'https://www.youtube.com'
  ]
};

// Shared Website Identity with SearchAction
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.ges.om/#website',
  url: 'https://www.ges.om',
  name: 'GES Quality Education',
  publisher: {
    '@id': 'https://www.ges.om/#organization'
  },
  inLanguage: 'en',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.ges.om/news?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export const seoData: Record<string, PageSEO> = {
  '/': {
    title: 'GES Quality Education | Leading Private Education Group in Oman',
    description: 'Global Education Services Company (GES Quality Education) is a premier private education group in Oman, delivering world-class K-12 schools, preschools, and early learning centers.',
    canonical: `${BASE_URL}/`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/project-1.jpg`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` }
    ],
    schema: [
      organizationSchema,
      websiteSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/#webpage`,
        url: `${BASE_URL}/`,
        name: 'GES Quality Education | Leading Private Education Group in Oman',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Global Education Services Company (GES Quality Education) is a premier private education group in Oman, delivering world-class K-12 schools, preschools, and early learning centers.',
        inLanguage: 'en'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Ceremony Class of 2024 SIPS',
        description: 'Graduation ceremony celebrating the Class of 2024 at Al Shomoukh International Private School (SIPS).',
        thumbnailUrl: `${BASE_URL}/assets/img/video-thumb-1.jpg`,
        embedUrl: 'https://www.youtube.com/embed/GDsGSM-k0Yg',
        uploadDate: '2024-06-01T00:00:00+04:00',
        publisher: { '@id': `${BASE_URL}/#organization` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Shomoukh Early Childhood Education Ceremony',
        description: 'Annual childhood education ceremony at Shomoukh Early Childhood Education Center.',
        thumbnailUrl: `${BASE_URL}/assets/img/video-thumb-2.jpg`,
        embedUrl: 'https://www.youtube.com/embed/X8Yx03ZguBY',
        uploadDate: '2024-05-15T00:00:00+04:00',
        publisher: { '@id': `${BASE_URL}/#organization` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Sports Day 2024 SIPS',
        description: 'Highlights from Sports Day 2024 at Al Shomoukh International Private School (SIPS).',
        thumbnailUrl: `${BASE_URL}/assets/img/video-thumb-3.jpg`,
        embedUrl: 'https://www.youtube.com/embed/IFpNJ7AsHWc',
        uploadDate: '2024-03-20T00:00:00+04:00',
        publisher: { '@id': `${BASE_URL}/#organization` }
      }
    ]
  },
  '/about': {
    title: 'About GES Quality Education | Leadership, Vision & Campuses',
    description: 'Established in 2012 by the Al Hashmi family, GES Quality Education is Oman’s premier private education group, committed to academic excellence, innovation, and Oman Vision 2040.',
    canonical: `${BASE_URL}/about`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/project-1.jpg`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` },
      { name: 'About GES', url: `${BASE_URL}/about` }
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${BASE_URL}/about#webpage`,
        url: `${BASE_URL}/about`,
        name: 'About GES Quality Education | Leadership, Vision & Campuses',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Established in 2012 by the Al Hashmi family, GES Quality Education is Oman’s premier private education group, committed to academic excellence, innovation, and Oman Vision 2040.',
        inLanguage: 'en'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Honorable Sheikh Salim Hamood Al Hashmi',
        jobTitle: 'Chairman',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/chirman.png`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ms. Sarah Saeed',
        jobTitle: 'Head of Academics',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/members/Sarah.jpg`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sheikha Jinan Salim Hamood Al Hashmi',
        jobTitle: 'Managing Director',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/members/jinan.jpg`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sheikha Janat Salim Hamood Al Hashmi',
        jobTitle: 'Chief Executive Officer',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/members/Jannat.jpg`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sheikh Julanda Salim Hamood Al Hashmi',
        jobTitle: 'Vice President',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/members/julanda.jpg`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mr. Shanmuganand Hariharan',
        jobTitle: 'Director of Finance & Accounts',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/members/Heri.jpg`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ms. Randa Al Ahmadieh',
        jobTitle: 'Head of Administration',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/members/Randa.jpg`
      }
    ]
  },
  '/operational': {
    title: 'Our Operational Models | Private Schools, PPP & Franchising | GES',
    description: 'Explore GES Quality Education operational models: Private Schools, Public-Private Partnerships (PPP), Licensed Schools, and Master Franchise models across Oman.',
    canonical: `${BASE_URL}/operational`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/operational/s-1.jpg`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` },
      { name: 'Our Operational Models', url: `${BASE_URL}/operational` }
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/operational#webpage`,
        url: `${BASE_URL}/operational`,
        name: 'Our Operational Models | Private Schools, PPP & Franchising | GES',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Explore GES Quality Education operational models: Private Schools, Public-Private Partnerships (PPP), Licensed Schools, and Master Franchise models across Oman.',
        inLanguage: 'en'
      }
    ]
  },
  '/schools': {
    title: 'Our Schools & Campuses | SIPS & Shomoukh ECE | GES Oman',
    description: 'Discover Al Shomoukh International Private School (SIPS) and Shomoukh Early Childhood Education campuses in Al Qurum and Al Mouj, Muscat, Oman.',
    canonical: `${BASE_URL}/schools`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/about/s1.jpg`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` },
      { name: 'Our Schools', url: `${BASE_URL}/schools` }
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/schools#webpage`,
        url: `${BASE_URL}/schools`,
        name: 'Our Schools & Campuses | SIPS & Shomoukh ECE | GES Oman',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Discover Al Shomoukh International Private School (SIPS) and Shomoukh Early Childhood Education campuses in Al Qurum and Al Mouj, Muscat, Oman.',
        inLanguage: 'en'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'School',
        '@id': 'http://www.alshomoukh.com/#school',
        name: 'Al Shomoukh International Private School (SIPS)',
        url: 'http://www.alshomoukh.com/',
        image: `${BASE_URL}/assets/img/about/s1.jpg`,
        logo: `${BASE_URL}/assets/img/about/sis-logo.jpg`,
        description: 'Renowned for delivering exceptional academic excellence through the National English Curriculum (British) for K-12 students. Established in 2015 alongside a bilingual stream.',
        parentOrganization: { '@id': `${BASE_URL}/#organization` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hay Al Hail, Al Jadeed Al Hail South',
          addressLocality: 'Muscat',
          addressCountry: 'OM'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Preschool',
        '@id': `${BASE_URL}/schools#shomoukh-qurum`,
        name: 'Shomoukh for Early Childhood Education Al Qurum Campus',
        url: 'http://www.shomoukh.com/',
        image: `${BASE_URL}/assets/img/about/c1.jpg`,
        logo: `${BASE_URL}/assets/img/about/sis-nur-logo.jpg`,
        description: 'Early childhood education center providing exceptional care in a purpose-built environment designed for children aged one to four, inspired by the Reggio Emilia Approach.',
        parentOrganization: { '@id': `${BASE_URL}/#organization` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Al Saruj St., Shatti Al Qurum',
          addressLocality: 'Muscat',
          addressCountry: 'OM'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Preschool',
        '@id': `${BASE_URL}/schools#shomoukh-mouj`,
        name: 'Shomoukh for Early Childhood Education Al Mouj Campus',
        url: 'http://www.shomoukh.com/',
        image: `${BASE_URL}/assets/img/about/m1.jpg`,
        logo: `${BASE_URL}/assets/img/about/sis-nur-logo.jpg`,
        description: 'High-class early childhood education center setting the benchmark across the MENA region with award-winning sustainable initiatives and innovative programs.',
        parentOrganization: { '@id': `${BASE_URL}/#organization` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Al Mouj',
          addressLocality: 'Muscat',
          addressCountry: 'OM'
        }
      }
    ]
  },
  '/partner': {
    title: 'Partner With Us | Educational Investment & Partnerships | GES Oman',
    description: 'Partner with Global Education Services Company (GES). Discover complete school management, licensing, PPP, and franchise opportunities in Oman and internationally.',
    canonical: `${BASE_URL}/partner`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/partners/partner-bg.jpg`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` },
      { name: 'Partner With Us', url: `${BASE_URL}/partner` }
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/partner#webpage`,
        url: `${BASE_URL}/partner`,
        name: 'Partner With Us | Educational Investment & Partnerships | GES Oman',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Partner with Global Education Services Company (GES). Discover complete school management, licensing, PPP, and franchise opportunities in Oman and internationally.',
        inLanguage: 'en'
      }
    ]
  },
  '/careers': {
    title: 'Careers at GES Network | Teaching & Academic Leadership | Oman',
    description: 'Build your career with GES Quality Education Network. We recruit top educational and administrative talent globally with structured continuous professional development.',
    canonical: `${BASE_URL}/careers`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/careers/step-1.png`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` },
      { name: 'Careers', url: `${BASE_URL}/careers` }
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/careers#webpage`,
        url: `${BASE_URL}/careers`,
        name: 'Careers at GES Network | Teaching & Academic Leadership | Oman',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Build your career with GES Quality Education Network. We recruit top educational and administrative talent globally with structured continuous professional development.',
        inLanguage: 'en'
      }
    ]
  },
  '/news': {
    title: 'Our Impact & In The News | Media Coverage & Updates | GES Oman',
    description: 'Read the latest updates, international accreditation news, partnership milestones, and press coverage from GES Quality Education.',
    canonical: `${BASE_URL}/news`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/news/news-1.png`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` },
      { name: 'Our Impact', url: `${BASE_URL}/news` }
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/news#webpage`,
        url: `${BASE_URL}/news`,
        name: 'Our Impact & In The News | Media Coverage & Updates | GES Oman',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Read the latest updates, international accreditation news, partnership milestones, and press coverage from GES Quality Education.',
        inLanguage: 'en'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Partnership Agreement Signed',
        datePublished: '2019-05-07T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: 'Times of Oman'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/news-1.png`,
        url: 'https://timesofoman.com/article/1254924/oman/education-partnership-agreement-signed'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Global Stamp Approval',
        datePublished: '2021-08-15T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: 'Times News Service'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/19.jpg`,
        url: 'https://timesofoman.com/article/105452-omani-educational-institution-gets-global-stamp-of-approval'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'اعتراف منظمة كوجنيا الأمريكية بـ GES',
        datePublished: '2021-08-12T00:00:00+04:00',
        inLanguage: 'ar',
        author: {
          '@type': 'Organization',
          name: 'مسقط - الشبيبة'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/19.jpg`,
        url: 'https://shabiba.com/article/162472'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Alam Al-Iktisaad Awards 2022',
        datePublished: '2022-10-02T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: 'Zawya Press Release'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/20.jpg`,
        url: 'https://shabiba.com/article/162472'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Education Partnership Agreement Signed',
        datePublished: '2019-05-08T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: 'Edu Council'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/news-1.png`,
        url: 'https://www.educouncil.gov.om/en/article.php?id=4468'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'NCSI receives students from Al Shomoukh International School',
        datePublished: '2017-10-26T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: 'Webadmin'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/13.jpg`,
        url: 'https://www.ncsi.gov.om'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Al Shomoukh International School holds a lecture on ethics, manners',
        datePublished: '2019-11-04T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: 'Muscat Daily'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/15.jpg`,
        url: 'https://www.pressreader.com/oman/muscat-daily'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'The National Museum of Oman - School Visit',
        datePublished: '2016-11-30T00:00:00+04:00',
        author: {
          '@type': 'Organization',
          name: '@NM_OMAN'
        },
        publisher: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/news/8.jpg`,
        url: 'https://twitter.com/nm_oman'
      }
    ]
  },
  '/contact': {
    title: 'Contact Us | Global Education Services Company Muscat, Oman',
    description: 'Contact GES Quality Education in Muscat, Oman. Inquire about school admissions, partnership opportunities, meeting requests, or general support.',
    canonical: `${BASE_URL}/contact`,
    ogType: 'website',
    ogImage: `${BASE_URL}/assets/img/contact.svg`,
    breadcrumbs: [
      { name: 'Homepage', url: `${BASE_URL}/` },
      { name: 'Contact Us', url: `${BASE_URL}/contact` }
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${BASE_URL}/contact#webpage`,
        url: `${BASE_URL}/contact`,
        name: 'Contact Us | Global Education Services Company Muscat, Oman',
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description: 'Contact GES Quality Education in Muscat, Oman. Inquire about school admissions, partnership opportunities, meeting requests, or general support.',
        inLanguage: 'en'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#localbusiness`,
        name: 'Global Education Services Company (GES)',
        image: `${BASE_URL}/assets/img/banner/ges-logo.png`,
        telephone: '+968 24554422',
        email: 'info@ges.om',
        url: BASE_URL,
        address: {
          '@type': 'PostalAddress',
          postOfficeBoxNumber: '1756',
          postalCode: '111',
          streetAddress: 'Airport Heights',
          addressLocality: 'Muscat',
          addressCountry: 'OM'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 23.6302,
          longitude: 58.1937
        },
        hasMap: 'https://maps.google.com/?q=23.630219,58.193732'
      }
    ]
  }
};
