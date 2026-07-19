const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\91007dde-8f38-4594-8749-91e29464bab6';
const destDir = path.join(__dirname, 'assets');

const mappings = [
  { src: 'app_icon_1784354952196.png', dest: 'icon.png' },
  { src: 'app_icon_1784354952196.png', dest: 'favicon.png' },
  { src: 'adaptive_icon_1784354967713.png', dest: 'adaptive-icon.png' },
  { src: 'splash_screen_1784354979894.png', dest: 'splash.png' }
];

// Create target directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created assets directory at ${destDir}`);
}

// Copy each file
mappings.forEach(({ src: srcFile, dest: destFile }) => {
  const srcPath = path.join(srcDir, srcFile);
  const destPath = path.join(destDir, destFile);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied ${srcFile} to assets/${destFile}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

console.log('Asset setup completed successfully!');
