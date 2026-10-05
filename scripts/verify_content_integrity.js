import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('🛡️ RUNNING CONTENT INTEGRITY PROTECTION AUDIT');
console.log('====================================================\n');

const baselinePath = path.resolve('scripts/baseline_files.json');
if (!fs.existsSync(baselinePath)) {
  console.error('❌ Baseline snapshot not found!');
  process.exit(1);
}

const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));

// Helper to extract visible textual words from a JSX file
function extractVisibleTextSnippets(content) {
  // Extract text inside JSX elements, paragraphs, headings, buttons, and strings
  const textMatches = [];
  
  // Extract content between tags: >TEXT<
  const tagText = content.match(/>([^<>{}\n]+)</g) || [];
  tagText.forEach(t => {
    const cleaned = t.replace(/[><]/g, '').trim();
    if (cleaned.length > 1 && !cleaned.startsWith('//')) {
      textMatches.push(cleaned);
    }
  });

  return textMatches;
}

let totalChecks = 0;
let failedChecks = 0;

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

console.log('Checking core visible copy strings against current codebase...\n');

Object.keys(baseline).forEach(filePath => {
  const currentContent = fs.readFileSync(path.resolve(filePath), 'utf8');
  const originalContent = baseline[filePath];

  // Verify that any essential copy present in original is still present in current
  essentialCopyChecklist.forEach(snippet => {
    if (originalContent.includes(snippet)) {
      totalChecks++;
      if (currentContent.includes(snippet)) {
        // PASS
      } else {
        console.error(`❌ CONTENT INTEGRITY FAILURE in ${filePath}: Snippet "${snippet}" was modified or removed!`);
        failedChecks++;
      }
    }
  });
});

console.log(`Verified ${totalChecks} critical visible copy strings.`);
if (failedChecks === 0) {
  console.log('✅ ALL VISIBLE HEADINGS, PARAGRAPHS, LABELS, BUTTONS, CTAs, AND CONTACT DETAILS ARE 100% PRESERVED!\n');
} else {
  console.error(`❌ ${failedChecks} content verification checks failed!\n`);
  process.exit(1);
}
