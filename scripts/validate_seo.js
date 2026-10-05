import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('🔍 RUNNING COMPREHENSIVE SEO / GEO / SCHEMA AUDIT');
console.log('====================================================\n');

let errorCount = 0;
let passCount = 0;

function pass(testName, detail = '') {
  passCount++;
  console.log(`✅ PASS: ${testName} ${detail ? `(${detail})` : ''}`);
}

function fail(testName, error) {
  errorCount++;
  console.error(`❌ FAIL: ${testName} -> ${error}`);
}

// 1. Audit public/robots.txt
try {
  const robotsPath = path.resolve('public/robots.txt');
  if (!fs.existsSync(robotsPath)) {
    fail('robots.txt exists', 'File public/robots.txt not found');
  } else {
    pass('robots.txt exists');
    const content = fs.readFileSync(robotsPath, 'utf8');
    if (!content.includes('User-agent: *')) fail('robots.txt user-agent', 'Missing User-agent: *');
    else pass('robots.txt user-agent');

    if (!content.includes('Allow: /')) fail('robots.txt allow public', 'Missing Allow: /');
    else pass('robots.txt allow public');

    if (!content.includes('Allow: /assets/') || !content.includes('Allow: /lib/')) {
      fail('robots.txt allow assets', 'CSS/JS/media assets should not be blocked');
    } else {
      pass('robots.txt allows rendering assets (CSS/JS/images)');
    }

    if (!content.includes('Disallow: /admin/') || !content.includes('Disallow: /private/')) {
      fail('robots.txt disallow private', 'Private/admin routes not excluded');
    } else {
      pass('robots.txt excludes private and admin routes');
    }

    if (!content.includes('Sitemap: https://www.ges.om/sitemap.xml')) {
      fail('robots.txt sitemap pointer', 'Missing or incorrect sitemap directive');
    } else {
      pass('robots.txt specifies canonical sitemap');
    }
  }
} catch (e) {
  fail('robots.txt check', e.message);
}

// 2. Audit public/sitemap.xml
try {
  const sitemapPath = path.resolve('public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    fail('sitemap.xml exists', 'File public/sitemap.xml not found');
  } else {
    pass('sitemap.xml exists');
    const content = fs.readFileSync(sitemapPath, 'utf8');

    // XML namespace check
    if (!content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
      fail('sitemap.xml namespace', 'Missing standard sitemap 0.9 namespace');
    } else {
      pass('sitemap.xml has valid schema namespace');
    }

    // Image sitemap extension check
    if (!content.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"')) {
      fail('sitemap.xml image namespace', 'Missing image sitemap extension namespace');
    } else {
      pass('sitemap.xml has Google image sitemap extension');
    }

    // Check all canonical URLs
    const expectedRoutes = [
      'https://www.ges.om/',
      'https://www.ges.om/about',
      'https://www.ges.om/operational',
      'https://www.ges.om/schools',
      'https://www.ges.om/partner',
      'https://www.ges.om/careers',
      'https://www.ges.om/news',
      'https://www.ges.om/contact'
    ];

    expectedRoutes.forEach(url => {
      if (content.includes(`<loc>${url}</loc>`)) {
        pass('sitemap route present', url);
      } else {
        fail('sitemap route missing', `Route ${url} not found in sitemap.xml`);
      }
    });

    // Check no legacy or private routes
    if (content.includes('.php') || content.includes('admin')) {
      fail('sitemap clean routes', 'Found legacy .php or admin routes in sitemap');
    } else {
      pass('sitemap contains strictly public canonical clean routes');
    }
  }
} catch (e) {
  fail('sitemap.xml check', e.message);
}

// 3. Audit llms.txt & llms-full.txt (GEO)
try {
  const llmsPath = path.resolve('public/llms.txt');
  const llmsFullPath = path.resolve('public/llms-full.txt');
  if (fs.existsSync(llmsPath)) {
    pass('llms.txt exists');
    const txt = fs.readFileSync(llmsPath, 'utf8');
    if (txt.includes('Global Education Services Company') && txt.includes('https://www.ges.om')) {
      pass('llms.txt entity details verified');
    } else {
      fail('llms.txt content', 'Missing core entity representation in llms.txt');
    }
  } else {
    fail('llms.txt exists', 'public/llms.txt missing');
  }

  if (fs.existsSync(llmsFullPath)) {
    pass('llms-full.txt exists');
  }
} catch (e) {
  fail('llms.txt check', e.message);
}

// 4. Audit Structured Data in seoData.ts & index.html
try {
  const seoDataPath = path.resolve('src/data/seoData.ts');
  const indexHtmlPath = path.resolve('index.html');

  if (fs.existsSync(seoDataPath)) {
    pass('src/data/seoData.ts exists');
    const seoContent = fs.readFileSync(seoDataPath, 'utf8');

    const expectedSchemas = [
      'EducationalOrganization',
      'WebSite',
      'WebPage',
      'BreadcrumbList',
      'School',
      'Preschool',
      'Person',
      'NewsArticle',
      'VideoObject',
      'LocalBusiness'
    ];

    expectedSchemas.forEach(schema => {
      if (seoContent.includes(schema)) {
        pass('Schema type implemented', schema);
      } else {
        fail('Schema type missing', `${schema} not found in seoData.ts`);
      }
    });

    // Verify entity identity references (@id)
    if (seoContent.includes('https://www.ges.om/#organization') && seoContent.includes('https://www.ges.om/#website')) {
      pass('Canonical entity @id references implemented');
    } else {
      fail('Canonical entity references', 'Missing persistent @id references');
    }
  }

  if (fs.existsSync(indexHtmlPath)) {
    const html = fs.readFileSync(indexHtmlPath, 'utf8');
    if (html.includes('application/ld+json')) {
      pass('Baseline JSON-LD in index.html for non-JS crawlers');
    } else {
      fail('index.html JSON-LD', 'Baseline JSON-LD missing in index.html');
    }
    if (html.includes('rel="canonical"')) {
      pass('Canonical tag in index.html');
    } else {
      fail('index.html canonical', 'Canonical link missing in index.html');
    }
    if (html.includes('property="og:title"') && html.includes('name="twitter:card"')) {
      pass('Open Graph and Twitter baseline metadata in index.html');
    } else {
      fail('index.html social metadata', 'Social metadata missing in index.html');
    }
    if (html.includes('fetchpriority="high"')) {
      pass('LCP preload with high fetch priority in index.html');
    } else {
      fail('index.html LCP hint', 'Missing LCP preload in index.html');
    }
  }
} catch (e) {
  fail('Structured data & metadata check', e.message);
}

// 5. Audit Internal Links & Assets
try {
  const publicDir = path.resolve('public');
  const checkAssets = [
    '/assets/img/banner/ges-logo.png',
    '/assets/img/project-1.jpg',
    '/assets/img/chirman.png',
    '/assets/img/student.png',
    '/assets/img/emp.png',
    '/assets/img/grad.png',
    '/assets/img/schools.png',
    '/assets/img/about/s1.jpg',
    '/assets/img/about/c1.jpg',
    '/assets/img/about/m1.jpg',
    '/assets/img/members/Sarah.jpg',
    '/assets/img/members/Jannat.jpg',
    '/assets/downloads/awards.pdf',
    '/assets/downloads/GES Corporate Broucher.pdf'
  ];

  checkAssets.forEach(asset => {
    const full = path.join(publicDir, decodeURIComponent(asset));
    if (fs.existsSync(full)) {
      pass('Asset verified on disk', asset);
    } else {
      fail('Asset missing', asset);
    }
  });
} catch (e) {
  fail('Asset verification', e.message);
}

console.log('\n====================================================');
console.log(`AUDIT COMPLETE: ${passCount} Passed, ${errorCount} Failed`);
console.log('====================================================');

if (errorCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
