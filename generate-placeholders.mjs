import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const galleryDir = path.join(publicDir, 'images', 'gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Generate an elegant SVG for gallery placeholders
const createGallerySvg = (title, category, iconText, gradientColors) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradientColors[0]}" />
      <stop offset="50%" stop-color="${gradientColors[1]}" />
      <stop offset="100%" stop-color="${gradientColors[2]}" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.07)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <rect width="800" height="600" fill="url(#grad)" />
  <rect width="800" height="600" fill="url(#grid)" />
  
  <!-- Subtle decorative circles -->
  <circle cx="700" cy="100" r="180" fill="rgba(255, 255, 255, 0.05)" />
  <circle cx="100" cy="500" r="150" fill="rgba(255, 255, 255, 0.04)" />
  
  <!-- Center Card -->
  <rect x="120" y="140" width="560" height="320" rx="24" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="2" />
  
  <!-- Icon / Badge -->
  <circle cx="400" cy="220" r="44" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="2" />
  <text x="400" y="232" font-family="system-ui, sans-serif" font-size="32" text-anchor="middle" fill="#38bdf8">${iconText}</text>
  
  <!-- Category Pill -->
  <rect x="310" y="285" width="180" height="30" rx="15" fill="rgba(56, 189, 248, 0.2)" />
  <text x="400" y="305" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="#7dd3fc" letter-spacing="1">${category.toUpperCase()}</text>
  
  <!-- Title -->
  <text x="400" y="350" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle" fill="#ffffff">${title}</text>
  
  <!-- Instruction Note -->
  <text x="400" y="390" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle" fill="#94a3b8">Photo Placeholder — Replace with your real photo</text>
  <text x="400" y="412" font-family="monospace" font-size="12" text-anchor="middle" fill="#64748b">public/images/gallery/...</text>
</svg>
`;

const galleryItems = [
  { file: 'hackathon-1.svg', title: 'National Hackathon Finale', category: 'Hackathons', icon: '💻', colors: ['#0f172a', '#1e1b4b', '#312e81'] },
  { file: 'symposium-1.svg', title: 'Annual Tech Symposium Presentation', category: 'College Events', icon: '🎤', colors: ['#0f172a', '#1e293b', '#0369a1'] },
  { file: 'award-1.svg', title: 'Project Exhibition 1st Prize', category: 'Achievements', icon: '🏆', colors: ['#1e1b4b', '#3730a3', '#4338ca'] },
  { file: 'workshop-1.svg', title: 'AI & Cloud Computing Workshop', category: 'College Events', icon: '🤖', colors: ['#0f172a', '#1e293b', '#0891b2'] },
  { file: 'hackathon-2.svg', title: 'Smart City Innovation Sprint', category: 'Hackathons', icon: '⚡', colors: ['#042f2e', '#115e59', '#0f766e'] },
  { file: 'project-expo-1.svg', title: 'RoadGuard AI Live Demonstration', category: 'Achievements', icon: '🚀', colors: ['#172554', '#1d4ed8', '#2563eb'] },
  { file: 'memories-1.svg', title: 'Computer Engineering Batch Meet', category: 'Memories', icon: '🎓', colors: ['#18181b', '#27272a', '#3f3f46'] },
  { file: 'memories-2.svg', title: 'Late Night Coding Sessions', category: 'Memories', icon: '☕', colors: ['#0f172a', '#1e1b4b', '#3b0764'] },
];

galleryItems.forEach(item => {
  fs.writeFileSync(path.join(galleryDir, item.file), createGallerySvg(item.title, item.category, item.icon, item.colors));
});

// Profile placeholder SVG
const profileSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <linearGradient id="pgrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#pgrad)" />
  <circle cx="250" cy="250" r="230" fill="none" stroke="url(#accent)" stroke-width="4" stroke-dasharray="10 6" />
  <circle cx="250" cy="200" r="90" fill="rgba(56, 189, 248, 0.15)" stroke="url(#accent)" stroke-width="3" />
  <!-- Monogram Initials AP -->
  <text x="250" y="222" font-family="system-ui, sans-serif" font-size="80" font-weight="800" text-anchor="middle" fill="#38bdf8">AP</text>
  <text x="250" y="340" font-family="system-ui, sans-serif" font-size="28" font-weight="700" text-anchor="middle" fill="#ffffff">Arfat Panchbhai</text>
  <text x="250" y="375" font-family="system-ui, sans-serif" font-size="18" text-anchor="middle" fill="#94a3b8">B.Tech Computer Engineering</text>
  <rect x="130" y="405" width="240" height="34" rx="17" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
  <text x="250" y="427" font-family="monospace" font-size="13" text-anchor="middle" fill="#7dd3fc">Replace: public/images/profile.jpg</text>
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'images', 'profile.svg'), profileSvg);

// Create a minimal valid PDF for public/resume.pdf so downloads work properly
const minimalPdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 215 >>
stream
BT
/F1 24 Tf
50 720 Td
(Arfat Panchbhai - Resume Placeholder) Tj
/F1 12 Tf
0 -40 Td
(B.Tech Computer Engineering Student) Tj
0 -20 Td
(Please replace public/resume.pdf with your actual resume PDF document.) Tj
0 -30 Td
(Contact: panchbhaimuntajeeboddin@gmail.com) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000229 00000 n 
0000000497 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
570
%%EOF
`;

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), minimalPdf);

console.log('Placeholders created successfully.');
