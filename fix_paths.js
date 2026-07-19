const fs = require('fs');
const path = require('path');

const directoryToSearch = path.join(__dirname, 'src');

const replacements = [
  { search: /require\(['"]\.\.\/assets\/shirts\//g, replace: "require('../assets/clothes/shirts/" },
  { search: /require\(['"]\.\.\/\.\.\/assets\/shirts\//g, replace: "require('../../assets/clothes/shirts/" },
  
  { search: /require\(['"]\.\.\/assets\/trousers\//g, replace: "require('../assets/clothes/trousers/" },
  { search: /require\(['"]\.\.\/\.\.\/assets\/trousers\//g, replace: "require('../../assets/clothes/trousers/" },

  { search: /require\(['"]\.\.\/assets\/Shoes\//g, replace: "require('../assets/accessories/Shoes/" },
  { search: /require\(['"]\.\.\/\.\.\/assets\/Shoes\//g, replace: "require('../../assets/accessories/Shoes/" },

  { search: /require\(['"]\.\.\/assets\/cap\//g, replace: "require('../assets/accessories/cap/" },
  { search: /require\(['"]\.\.\/\.\.\/assets\/cap\//g, replace: "require('../../assets/accessories/cap/" },

  { search: /require\(['"]\.\.\/assets\/scarf\//g, replace: "require('../assets/accessories/scarf/" },
  { search: /require\(['"]\.\.\/\.\.\/assets\/scarf\//g, replace: "require('../../assets/accessories/scarf/" },

  { search: /require\(['"]\.\.\/assets\/goggles(\d?)\//g, replace: "require('../assets/accessories/goggles$1/" },
  { search: /require\(['"]\.\.\/\.\.\/assets\/goggles(\d?)\//g, replace: "require('../../assets/accessories/goggles$1/" },

  { search: /require\(['"]\.\.\/assets\/watch & bag\//g, replace: "require('../assets/accessories/watch & bag/" },
  { search: /require\(['"]\.\.\/\.\.\/assets\/watch & bag\//g, replace: "require('../../assets/accessories/watch & bag/" },

  // some might have extensions directly or something like that, or no slash
  { search: /require\(['"]\.\.\/assets\/normal white t-shirt avif\//g, replace: "require('../assets/clothes/normal white t-shirt avif/" },
  { search: /require\(['"]\.\.\/assets\/round neck grey sweater avif\//g, replace: "require('../assets/clothes/round neck grey sweater avif/" },
  { search: /require\(['"]\.\.\/assets\/Loungewear Short grey avif\//g, replace: "require('../assets/clothes/Loungewear Short grey avif/" },
  { search: /require\(['"]\.\.\/assets\/Cream Jacket png avif\//g, replace: "require('../assets/clothes/Cream Jacket png avif/" },
];

let changedFiles = 0;

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const rule of replacements) {
        content = content.replace(rule.search, rule.replace);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
        changedFiles++;
      }
    }
  }
}

walk(directoryToSearch);
console.log(`Done. Changed ${changedFiles} files.`);
