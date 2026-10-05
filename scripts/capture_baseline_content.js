import fs from 'fs';
import path from 'path';

const filesToTrack = [
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

const baseline = {};

filesToTrack.forEach(file => {
  const fullPath = path.resolve(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    baseline[file] = fs.readFileSync(fullPath, 'utf8');
  }
});

fs.writeFileSync(path.resolve(process.cwd(), 'scripts/baseline_files.json'), JSON.stringify(baseline, null, 2));
console.log('Baseline snapshot created for', Object.keys(baseline).length, 'files.');
