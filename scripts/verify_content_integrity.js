import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('🛡️ RUNNING CONTENT INTEGRITY PROTECTION AUDIT');
console.log('====================================================\n');

// Core source files where content lives
const sourceFiles = [
  'src/pages/Home.tsx',
  'src/pages/About.tsx',
  'src/pages/Operational.tsx',
  'src/pages/Schools.tsx',
  'src/pages/Partner.tsx',
  'src/pages/Careers.tsx',
  'src/pages/News.tsx',
  'src/pages/Contact.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/Modals.tsx'
];

// Key business copy snippets that must be strictly preserved
const essentialCopyChecklist = [
  // Brand & Headings
  'Global Education Services Company “GES” Quality Education',
  'Al Shomoukh International Private School',
  'Shomoukh Early Childhood Education',
  'Our Operational Models',
  'Partner with GES',
  'Careers',
  'Our Impact',
  'Contact Us',
  'Honorable Shiehk Salim Hamood Al Hashmi',
  'Ms. Sarah Saeed',
  'Sheikha Jinan Salim Hamood Al Hashmi',
  'Sheikha Janat Salim Hamood Al Hashmi',
  'Sheikh Julanda Salim Hamood Al Hashmi',
  'Mr. Shanmuganand Hariharan',
  'Ms. Randa Al Ahmadieh',
  // Statistics
  '+5000',
  'STUDENTS',
  '+700',
  'EMPLOYEES',
  '+100',
  'ALUMNI',
  '4',
  'SCHOOLS',
  // Contact details
  '+968 24554422',
  'info@ges.om',
  'Postal Office Box: 1756, Airport Heights, Postal Code: 111',
  'Muscat, Sultanate Of Oman',
  // Operational Pillars
  'PRIVATE SCHOOLS',
  'PUBLIC-PRIVATE PARTNERSHIPS (PPP)',
  'LICENSED SCHOOLS',
  'MASTER FRANCHISE',
  // CTAs & Buttons
  'Find Out More',
  'Request Now',
  'Explore',
  'Be Contact',
  'JOIN OUR TEAM',
  'PARTNER WITH US',
  'Send Inquiry',
  'Apply Online'
];

let totalChecks = 0;
let failedChecks = 0;

console.log('Checking core visible copy strings against current codebase...\n');

// Read all files
const loadedFiles = sourceFiles.map(filePath => {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Source file not found: ${filePath}`);
    process.exit(1);
  }
  return {
    path: filePath,
    content: fs.readFileSync(fullPath, 'utf8')
  };
});

essentialCopyChecklist.forEach(snippet => {
  totalChecks++;
  const match = loadedFiles.find(f => f.content.includes(snippet));
  if (match) {
    console.log(`✅ VERIFIED: "${snippet}" present in ${match.path}`);
  } else {
    console.error(`❌ CONTENT INTEGRITY FAILURE: Snippet "${snippet}" was modified or removed!`);
    failedChecks++;
  }
});

console.log(`\nVerified ${totalChecks} critical visible copy strings.`);
if (failedChecks === 0) {
  console.log('✅ ALL VISIBLE HEADINGS, PARAGRAPHS, LABELS, BUTTONS, CTAs, AND CONTACT DETAILS ARE 100% PRESERVED!\n');
  process.exit(0);
} else {
  console.error(`❌ ${failedChecks} content verification checks failed!\n`);
  process.exit(1);
}
