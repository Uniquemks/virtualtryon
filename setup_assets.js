const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\91007dde-8f38-4594-8749-91e29464bab6';
const destDir = path.join(__dirname, 'assets');

const mappings = {
  'app_icon_1784354952196.png': 'icon.png',
  'adaptive_icon_1784354967713.png': 'adaptive-icon.png',
  'splash_screen_1784354979894.png': 'splash.png',
  'app_icon_1784354952196.png': 'favicon.png', // copy app icon as fallback favicon
};

// Create target directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created assets directory at ${destDir}`);
}

// Copy each file
Object.entries(mappings).forEach(([srcFile, destFile]) => {
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
